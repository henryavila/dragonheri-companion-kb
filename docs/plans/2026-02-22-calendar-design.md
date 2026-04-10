# Calendar Parsing + Reminder Design

## Goal
Allow manual HTML pasting from the in-game calendar, parse it into structured data, show a dashboard reminder when the 14-day window is close to expiring, and enrich events with researched details + sources.

## Inputs
- Raw HTML from the in-game calendar page (user provides).
- A curated `event_details` catalog (manual research + sources).

## Data Model
New file: `app/data/calendar.js`

- `source_range`: `{ start: "YYYY-MM-DD", end: "YYYY-MM-DD" }`
- `last_extracted`: `"YYYY-MM-DD"`
- `events`: array of `{ title, category, start, end, phase, details? }`
- `summon_pools`: array of `{ title, start, end, type, details? }`
- `limited_time`: array of `{ title, start, end, details? }`
- `event_details`: map keyed by `title` with `{ summary, objectives, rewards, tips, modes, sources[] }`
- `calendar_history`: array of incremental entries
  - `{ detected_at, type: "new"|"changed", item }`
  - `item` contains the parsed event data at time of detection

## Parsing + Merge
- Parse HTML into structured items by category (Season Event, Limited-Time Event, Summon Pool Open).
- Use identity `title + start + end` to detect new events.
- If `title` exists but dates differ, treat as `changed` and update.
- Merge `event_details` into parsed items by `title`.
- If no detail found, render as `details_pending`.

## History Strategy
- Incremental history only: store *new* or *changed* items (not full snapshots).
- No HTML hash: avoid token noise; use normalized event identity.

## Dashboard Reminder
- Add a calendar card to `Resumo`.
- Status rules:
  - `OK`: more than 7 days left in the range
  - `Atenção`: 7 days or fewer left
  - `Desatualizado`: today > end
- Show:
  - `Válido até` (range end)
  - `Última extração`
  - `Próximo evento`

## Details + Sources
- Provide sources for events where public references exist.
- If details are missing, mark as pending and allow future fill-in.
- Sources are displayed as clickable links in the UI.

## Non-Goals
- Automatic fetch (calendar page requires login tokens / empty JSON).
- Auto-scheduling from server timezones (manual extract remains source of truth).

## Implementation Notes
- Parser script lives under `scripts/` and accepts a pasted HTML file.
- Output: overwrite `app/data/calendar.js` with updated range and history.
- UI changes in `app/js/components/dashboard.js` and a new calendar view if needed.

## Open Questions
- None at this stage. Proceed with manual HTML ingestion flow.
