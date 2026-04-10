---
name: Vue 3 Rewrite Status
description: Dragon Heir companion app — Vue 3 + Vite + Tailwind CSS. Tracks architecture and features.
type: project
---
## Status (2026-04-10)

**Stack:** Vue 3 (Composition API) + Vite + Tailwind CSS v4 + Vue Router (hash mode)
**Fonts:** Cinzel (display) + DM Sans (body)
**Aesthetic:** Dark Fantasy Codex (deep black #06060c, gold #c9a24e, grain texture)
**Git:** `henryavila/dragonheri-companion-kb` on GitHub

### Architecture
- `src/` = Vue code (rebuild when components change)
- `public/data/` = ALL game data (KB + web runtime, 19 files, NO rebuild needed)
- `raw-data/` = Game API exports (source material for processed data)
- Data files use `window.DATA_*` globals, loaded at runtime via `src/data/loader.js`
- `dist/` = Vite output, deployed via `nexus push`

### Pages (5 routes)
1. **Times** (`/`) — Landing page. 12 activities in 5 categories, team compositions
2. **Herois** (`/heroes`) — 316 heroes, filters (owned/element/school), detail modal with skills, talents S6, artifact recommendations
3. **Gear** (`/gear`) — Flat plan list for in-game reference
4. **Artefatos** (`/artifacts`) — 126 artifacts catalog, filters (owned/rarity/season), images, detail modal
5. **Tier List** (`/tierlist`) — Combined AC+HH+DI sortable table

### Features Added (10/Abr Session 2)
- Artifact recommendations in hero detail (290/316 heroes via tj_sq + builds.js curated data)
- Artifact images from CDN (28 missing images added, 100% coverage)
- Season filter + badges on artifacts page
- Desktop 3-col grid for artifacts
- Dragon icon in sidebar
- Favicon + apple-touch-icon

### Project Reorganization (10/Abr)
- `app/` REMOVED (vanilla JS site eliminated)
- `app/data/` merged into `public/data/` (single source of truth)
- `teams.js` renamed to `legacy-teams.js`
- `data/` renamed to `raw-data/`
- `dh/` REMOVED (obsolete build)
- `context/` REMOVED (superseded by JS data files)
- Git initialized with GitHub remote

### Key Files
| File | Purpose |
|---|---|
| `src/data/loader.js` | Runtime script loader (11 files loaded on startup) |
| `src/data/index.js` | D module — hero/tier/roster/artifact lookups |
| `public/data/artifact-map.js` | tj_sq ID → artifact info mapping (91 artifacts) |
| `public/data/artifact-images.js` | Artifact name → CDN image code (126 entries) |

**Why public/data/ not bundled:** Data updates (new hero, new team) go live with just `nexus push`, no rebuild needed.
