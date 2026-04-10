#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONFIG_FILE="$ROOT_DIR/nexus.yaml"
INDEX_FILE="$ROOT_DIR/app/index.html"
APP_JS="$ROOT_DIR/app/js/app.js"

if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "Erro: nexus.yaml nao encontrado em $ROOT_DIR" >&2
  exit 1
fi

if [[ ! -f "$INDEX_FILE" ]]; then
  echo "Erro: app/index.html nao encontrado em $ROOT_DIR" >&2
  exit 1
fi

python3 - "$CONFIG_FILE" "$INDEX_FILE" "$APP_JS" <<'PY'
import re
import sys
import time
from pathlib import Path

import yaml

config_path = Path(sys.argv[1])
index_path = Path(sys.argv[2])
appjs_path = Path(sys.argv[3])

# --- 1. Base href ---
raw = yaml.safe_load(config_path.read_text(encoding="utf-8")) or {}
web = raw.get("web") or {}
route = str(web.get("route") or "").strip()

if not route or route.lower() == "null":
    raise SystemExit("Erro: web.route invalido em nexus.yaml")

if not route.startswith("/"):
    raise SystemExit("Erro: web.route deve comecar com '/' em nexus.yaml")

route_trimmed = route.strip("/")
base_href = "/" if not route_trimmed else f"/{route_trimmed}/"

content = index_path.read_text(encoding="utf-8")
pattern = re.compile(r"(<base\b[^>]*\bhref\s*=\s*['\"])[^'\"]*(['\"][^>]*>)", re.IGNORECASE)
content, count = pattern.subn(rf"\1{base_href}\2", content, count=1)

if count == 0:
    head = re.search(r"<head\b[^>]*>", content, flags=re.IGNORECASE)
    if not head:
        raise SystemExit("Erro: <head> nao encontrado em app/index.html")
    pos = head.end()
    content = f"{content[:pos]}\n  <base href=\"{base_href}\">{content[pos:]}"

# --- 2. Cache-busting: inject ?v=TIMESTAMP in local assets ---
version = str(int(time.time()))

# Match src="./..." or href="./..." (local assets only, skip CDN/external)
def add_version(m):
    prefix = m.group(1)  # src=" or href="
    path = m.group(2)    # ./data/heroes.js or ./css/custom.css
    suffix = m.group(3)  # "
    # Strip any existing ?v= param
    clean = re.sub(r'\?v=[^"\']*', '', path)
    return f'{prefix}{clean}?v={version}{suffix}'

content = re.sub(
    r'((?:src|href)\s*=\s*["\'])(\.\/[^"\'?]+)(["\'])',
    add_version,
    content
)

index_path.write_text(content, encoding="utf-8")
print(f"base href={base_href}")

# --- 3. Inject version into DataLoader (app.js) ---
if appjs_path.is_file():
    js = appjs_path.read_text(encoding="utf-8")
    js_new = re.sub(
        r"const __BUILD_VERSION__\s*=\s*'[^']*'",
        f"const __BUILD_VERSION__ = '{version}'",
        js,
        count=1
    )
    if js_new != js:
        appjs_path.write_text(js_new, encoding="utf-8")
        print(f"app.js __BUILD_VERSION__ = '{version}'")
    else:
        print("AVISO: __BUILD_VERSION__ nao encontrado em app.js")

print(f"Cache-bust: ?v={version}")
print("Build web concluido.")
PY
