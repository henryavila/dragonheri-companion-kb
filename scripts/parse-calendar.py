#!/usr/bin/env python3
"""Parse in-game calendar HTML and update app/data/calendar.js.

Usage:
  python3 scripts/parse-calendar.py <html-file> [--year 2026]
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import re
from html.parser import HTMLParser

ROOT = "/mnt/e/OneDrive/Games/Dragon Heir"
DEFAULT_OUT = os.path.join(ROOT, "app/data/calendar.js")


class CalendarParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.div_depth = 0
        self.in_time_box = False
        self.time_depth = None
        self.time_dates = []
        self.in_em = False

        self.current_category = None
        self.current_event = None
        self.ct_depth = None

        self.in_tips_box = False
        self.tips_depth = None
        self.in_tips_content = False
        self.in_tips_range = False

        self.events = []

    @staticmethod
    def _has_class(attrs, class_name):
        cls = dict(attrs).get("class", "")
        return class_name in cls.split()

    def handle_starttag(self, tag, attrs):
        attr = dict(attrs)

        if tag == "div":
            self.div_depth += 1
            div_id = attr.get("id")
            if div_id == "sjbox":
                self.current_category = "seasonal"
            elif div_id == "xsbox":
                self.current_category = "limited"
            elif div_id == "kcbox":
                self.current_category = "summon"

            if self._has_class(attrs, "time_box"):
                self.in_time_box = True
                self.time_depth = self.div_depth

            if self._has_class(attrs, "ct_txtbox"):
                style = attr.get("style", "")
                self.current_event = {
                    "category": self.current_category,
                    "style": style,
                    "data_starttime": attr.get("data-starttime"),
                    "title": "",
                    "tip": "",
                }
                self.ct_depth = self.div_depth

            if self._has_class(attrs, "tips_box") and self.current_event:
                self.in_tips_box = True
                self.tips_depth = self.div_depth

        if tag == "em" and self.in_time_box:
            self.in_em = True

        if tag == "p" and self.in_tips_box:
            if self._has_class(attrs, "tips_content"):
                self.in_tips_content = True
            else:
                self.in_tips_range = True

    def handle_data(self, data):
        text = data.strip()
        if not text:
            return
        if self.in_em:
            self.time_dates.append(text)
        if self.in_tips_content and self.current_event is not None:
            self.current_event["title"] += text
        elif self.in_tips_range and self.current_event is not None:
            # Some tips have multiple text nodes, concatenate with space
            if self.current_event["tip"]:
                self.current_event["tip"] += " " + text
            else:
                self.current_event["tip"] = text

    def handle_endtag(self, tag):
        if tag == "em":
            self.in_em = False
        if tag == "p":
            if self.in_tips_content:
                self.in_tips_content = False
            if self.in_tips_range:
                self.in_tips_range = False

        if tag == "div":
            if self.in_tips_box and self.tips_depth == self.div_depth:
                self.in_tips_box = False
                self.tips_depth = None
            if self.in_time_box and self.time_depth == self.div_depth:
                self.in_time_box = False
                self.time_depth = None
            if self.current_event is not None and self.ct_depth == self.div_depth:
                if self.current_event.get("title"):
                    self.events.append(self.current_event)
                self.current_event = None
                self.ct_depth = None
            self.div_depth -= 1


def _parse_year_from_html(html):
    match = re.search(r"(\d{4})/\d{2}/\d{2}", html)
    if match:
        return int(match.group(1))
    return None


def _parse_time_dates(time_values, year):
    dates = []
    current_year = year
    prev_month = None
    for value in time_values:
        if not re.match(r"^\d{1,2}\.\d{1,2}$", value):
            continue
        month, day = value.split(".")
        month = int(month)
        day = int(day)
        if prev_month is not None and month < prev_month:
            current_year += 1
        prev_month = month
        dates.append(dt.date(current_year, month, day).isoformat())
    return dates


def _parse_style(style):
    left = None
    width = None
    m = re.search(r"left:([0-9.]+)rem", style)
    if m:
        left = float(m.group(1))
    m = re.search(r"width:([0-9.]+)rem", style)
    if m:
        width = float(m.group(1))
    return left, width


def _parse_tip_date(tip):
    # Example: 2026/02/27~2026/03/08
    m = re.search(r"(\d{4})/(\d{2})/(\d{2})~(\d{4})/(\d{2})/(\d{2})", tip)
    if m:
        start = f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
        end = f"{m.group(4)}-{m.group(5)}-{m.group(6)}"
        return start, end, None
    # Example: Day 11~ Day 15
    m = re.search(r"Day\s*(\d+)\s*~\s*Day\s*(\d+)", tip)
    if m:
        return None, None, {"start": int(m.group(1)), "end": int(m.group(2))}
    return None, None, None


def _window_range(left, width, day_width, dates):
    if left is None or width is None or not dates or day_width is None:
        return None, None
    start_index = int(round(left / day_width))
    span_days = max(1, int(round(width / day_width)))
    end_index = start_index + span_days - 1
    if start_index < 0:
        start_index = 0
    if end_index >= len(dates):
        end_index = len(dates) - 1
    if start_index >= len(dates):
        return None, None
    return dates[start_index], dates[end_index]


def _load_existing(path):
    if not os.path.exists(path):
        return None
    raw = open(path, "r", encoding="utf-8").read()
    raw = raw.strip()
    if raw.startswith("window.DATA_CALENDAR"):
        raw = raw.split("=", 1)[1].strip()
    if raw.endswith(";"):
        raw = raw[:-1]
    return json.loads(raw)


def _save_calendar(path, data):
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    with open(path, "w", encoding="utf-8") as f:
        f.write("window.DATA_CALENDAR = ")
        f.write(payload)
        f.write(";\n")


def _make_key(item):
    return f"{item.get('title','')}|{item.get('start','')}|{item.get('end','')}"


def _merge_items(existing_list, new_items, history):
    existing_map = { _make_key(item): item for item in existing_list }
    existing_by_title = { item.get("title"): item for item in existing_list }

    for item in new_items:
        key = _make_key(item)
        if key in existing_map:
            continue
        title = item.get("title")
        if title in existing_by_title:
            old = existing_by_title[title]
            if old.get("start") != item.get("start") or old.get("end") != item.get("end"):
                existing_by_title[title].update(item)
                history.append({
                    "detected_at": dt.date.today().isoformat(),
                    "type": "changed",
                    "item": item
                })
            continue
        existing_list.append(item)
        history.append({
            "detected_at": dt.date.today().isoformat(),
            "type": "new",
            "item": item
        })


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("html_file")
    parser.add_argument("--year", type=int, default=None)
    parser.add_argument("--out", default=DEFAULT_OUT)
    args = parser.parse_args()

    html = open(args.html_file, "r", encoding="utf-8").read()

    year = _parse_year_from_html(html) or args.year or dt.date.today().year

    parser_obj = CalendarParser()
    parser_obj.feed(html)

    time_dates = _parse_time_dates(parser_obj.time_dates, year)

    widths = []
    for ev in parser_obj.events:
        _, width = _parse_style(ev.get("style", ""))
        if width:
            widths.append(width)
    day_width = min(widths) if widths else 1.1

    seasonal = []
    limited = []
    summons = []

    for ev in parser_obj.events:
        left, width = _parse_style(ev.get("style", ""))
        title = ev.get("title", "").strip()
        tip = ev.get("tip", "").strip()
        start, end, season_days = _parse_tip_date(tip)
        if not start or not end:
            w_start, w_end = _window_range(left, width, day_width, time_dates)
            start = start or w_start
            end = end or w_end

        item = {
            "title": title,
            "category": {
                "seasonal": "Season Event",
                "limited": "Limited-Time Event",
                "summon": "Summon Pool"
            }.get(ev.get("category"), "Event"),
            "start": start,
            "end": end,
            "tip": tip
        }
        if season_days:
            item["season_days"] = season_days
        if ev.get("data_starttime"):
            item["data_starttime"] = ev.get("data_starttime")

        if ev.get("category") == "seasonal":
            seasonal.append(item)
        elif ev.get("category") == "limited":
            limited.append(item)
        else:
            summons.append(item)

    existing = _load_existing(args.out) or {
        "source_range": {"start": None, "end": None},
        "last_extracted": None,
        "events": [],
        "limited_time": [],
        "summon_pools": [],
        "event_details": {},
        "calendar_history": []
    }

    existing["source_range"] = {
        "start": time_dates[0] if time_dates else None,
        "end": time_dates[-1] if time_dates else None
    }
    existing["last_extracted"] = dt.date.today().isoformat()

    history = existing.get("calendar_history", [])

    _merge_items(existing.get("events", []), seasonal, history)
    _merge_items(existing.get("limited_time", []), limited, history)
    _merge_items(existing.get("summon_pools", []), summons, history)

    existing["calendar_history"] = history

    _save_calendar(args.out, existing)
    print(f"Updated calendar data: {args.out}")


if __name__ == "__main__":
    main()
