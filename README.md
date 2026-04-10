<p align="center">
  <img src="public/icon-dragon-minimal.png" alt="Dragon Heir Companion" width="100" />
</p>

<h1 align="center">Dragon Heir Companion</h1>

<p align="center">
  Personal companion for <strong>Dragon Heir: Silent Gods</strong> — knowledge base + web app<br>
  for roster management, team building, artifact tracking, and strategic planning.
</p>

<p align="center">
  <a href="https://nexus.henryavila.com/dh">nexus.henryavila.com/dh</a>
</p>

---

## What it does

**Web App** (Vue 3, mobile-first, dark fantasy aesthetic)

- Browse 316 heroes with filters, skills, S6 talents, and artifact recommendations
- Team compositions for 12 game activities
- Artifact catalog (126 items, S1–S6) with images, seasons, and ownership tracking
- Gear plans and combined tier list (AllClash + HellHades + DragonHeir.info)

**Knowledge Base** (19 data files for AI-assisted strategy via terminal)

- Roster, resources, decisions, wager analysis, game mechanics

## Stack

Vue 3 + Vite + Tailwind CSS v4 + Vue Router — data loaded at runtime as `window.DATA_*` globals, so data updates deploy without rebuild.

## Structure

```
src/               Code (Vue 3)
public/data/       Single source of truth — 19 data files (KB + web runtime)
raw-data/          Game API exports
docs/              Documentation and guides
scripts/           Build and data utilities
```

## Dev

```bash
npm install
npm run dev        # Dev server
npm run build      # Production → dist/
```
