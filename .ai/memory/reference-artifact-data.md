---
name: Artifact Data Architecture
description: How hero artifact recommendations work — tj_sq field mapping, image URLs, data flow
type: reference
---

## Hero → Artifact Mapping

The `tj_sq` field in heroes.js contains equip IDs (8000xxx range) from dragonheir.info.
These are NOT artifact IDs directly — they map through the raw equip data:

```
hero.tj_sq [8000101, 8000087, ...]
    ↓
raw-data/raw/dragonheir-info-equip-2025-en.json (id → show_name, artifact_id, rarity)
    ↓
public/data/artifact-map.js (pre-computed mapping, 91 unique artifacts)
    ↓
public/data/artifacts-all.json (full catalog with stats, skills, season)
```

**Coverage:** 290/316 heroes have tj_sq data. 255 have 3 recs (1 per rarity), 34 have 6 (2 per rarity).

**Other hero fields (NOT artifacts):**
- `tj_eq` (310xxx-311xxx) = gear/equipment IDs
- `tj_sq` (8000xxx) = artifact equip IDs ← THIS IS IT

## Artifact Image URLs

The `iconPath` field in the raw equip data has the full CDN URL:
`https://i.dmzgame.com/dragonheir/img/equipment/{season}/icon_item_artifact_{code}.png`

Seasons: `2025_s1`, `2025_s2`, `2025_s3`, `2025_s4`, `2025_s6`
Codes: numeric (`0034`), prefixed (`ur_0013`, `red_0001`), collab (`dilong01_0001`)

All 126 artifacts have image mappings in `public/data/artifact-images.js`.

## builds.js Integration

`public/data/builds.js` has curated artifact data for ~18 heroes with:
- `artifact.bis` — Best-in-slot name
- `artifact.alternatives` — Alternative artifact names
- `artifact.reason` — Why this artifact is recommended

The hero detail modal shows both: game recommendations (tj_sq) + curated info (builds.js).
