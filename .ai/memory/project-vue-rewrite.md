---
name: Vue 3 Rewrite Status
description: Dragon Heir companion app full rewrite from vanilla JS to Vue 3 + Vite + Tailwind CSS. Tracks phase completion and architecture decisions.
type: project
originSessionId: 280250bd-67cc-454c-84d3-f7916e47e444
---
## Rewrite Status (2026-04-10)

**Stack:** Vue 3 (Composition API) + Vite + Tailwind CSS v4 + Vue Router (hash mode)
**Fonts:** Cinzel (display) + DM Sans (body)
**Aesthetic:** Dark Fantasy Codex (deep black, gold accents, grain texture)

### Architecture
- `src/` = Vue code (rebuild when components change)
- `public/data/` = game data (NO rebuild needed — `nexus push` only)
- Data files keep `window.DATA_*` globals, loaded at runtime via `src/data/loader.js`
- `dist/` = Vite output, `nexus.yaml` → `static_dir: dist`, `build_cmd: npm run build`

### Phase 1 — COMPLETED
- Scaffolding (Vite + Vue + Tailwind + Router)
- Layout shell (Sidebar desktop + BottomNav mobile)
- Dashboard (heroes + legendaries count only)
- Teams page (10 activities grid + modal with team data)
- Data layer (`src/data/loader.js` + `src/data/index.js`)
- Build + preview verified

### Phase 2 — COMPLETED
- [x] Heroes (3 filtros exclusivos: Possuo/Nao possuo + Elemento + School contextual, busca, modal detalhe com skills + talentos S6)
- [x] ~~Builds~~ REMOVIDA — talent info movido para modal do heroi (tf grid 4×3)
- [x] Gear — simplificado para lista flat de Plans (referência rápida in-game)
- [x] Artifacts — lista com filtro Possuo/Nao possuo + Raridade + busca, modal com skill
- [x] Tier List (tabela sortable, filtros, modal)

### Post-Phase 2 Adjustments
- Dashboard REMOVIDO — Times é a landing page (`/`)
- Builds REMOVIDA — talent no modal do herói
- Gear simplificado (lista de plans, não perfis)
- Artifacts simplificado (sem tabs Upgrade/Inventário)
- BottomNav: "Mais" abre mini-menu com Artefatos + Tier List
- Activities: 12 atividades em 5 categorias (Main, Equipment, Growth, Adventure, PvP)
- Grid de atividades: 3 colunas no desktop grande (lg)

### Data corrections (10/Abr)
- Utior (20590) + Perseus (22420) adicionados ao roster (182→184, 61→62 legendaries)
- `tf` field (talent picks S6) adicionado a 290 herois em heroes.js
- `artifacts-all.json` copiado para `public/data/` (runtime fetch)

### Key Files
| File | Purpose |
|---|---|
| `src/App.vue` | Root: loads data, shows sidebar/bottomnav + RouterView |
| `src/router.js` | 7 routes, hash mode |
| `src/data/loader.js` | Runtime script loader for public/data/*.js |
| `src/data/index.js` | D module (hero/tier/roster lookups) |
| `src/views/TeamsView.vue` | Activity grid + modal |
| `src/views/DashboardView.vue` | Heroes + Legendaries stats |
| `src/components/layout/Sidebar.vue` | Desktop nav |
| `src/components/layout/BottomNav.vue` | Mobile nav |
| `public/data/activities.js` | 10 activities with teams data |

**Why:** `public/data/` not bundled — so chat-based data updates (new team, new hero) go live with just `nexus push`, no rebuild needed.
