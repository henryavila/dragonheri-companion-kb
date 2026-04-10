# Dragon Heir Companion — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static web app that displays all Dragon Heir strategy data with good UX.

**Architecture:** Single-page app with hash-based routing, sidebar navigation, and slide-over detail panels. All data as JS globals loaded via `<script>` tags. Tailwind CSS 4 via CDN. No build step, no server.

**Tech Stack:** Vanilla JS, Tailwind CSS 4 (CDN), HTML5. Data extracted from existing JSON + MD files via Python scripts.

**Design Doc:** `docs/plans/2026-02-13-web-app-design.md` (v2)

**Data Sources:**
- `data/heroes-dragonheir-info-all.json` — 297 heroes (keys: id, n, el, r, at, ra, ca, sc, se, cp, un, ud, bn, bd, pn, pd, i1-i5)
- `data/artifacts-all.json` — 115 artifacts (keys: name, rarity, stat1, stat2, exclusive, skillName, skill, tags)
- `context/player-profile.md` — account resources
- `docs/heroes/my-roster.md` — Henry's owned heroes
- `docs/heroes/my-teams-by-activity.md` — team compositions
- `docs/heroes/tier-list-combined.md` — tier data (AC + HH + DI)
- `docs/heroes/hero-skills-all.md` — full skill text (297 heroes)
- `docs/guides/artifact-bis-assignments.md` — BiS artifact mapping
- `context/decisions-log.md` — decision history
- `PLAN.md` — action plan phases

---

## Phase 1: Foundation (Tasks 1-6)

### Task 1: Git init + backup

**Files:**
- Create: `.gitignore`

**Step 1: Create backup**

```bash
cp -r "/mnt/e/OneDrive/Games/Dragon Heir" "/mnt/e/OneDrive/Games/Dragon Heir - BACKUP 2026-02-13"
```

**Step 2: Init git**

```bash
cd "/mnt/e/OneDrive/Games/Dragon Heir"
git init
```

**Step 3: Create .gitignore**

```
# Backups
*BACKUP*
# OS files
.DS_Store
Thumbs.db
# Editor
*.swp
*.swo
```

**Step 4: Initial commit**

```bash
git add -A
git commit -m "chore: initial commit — all existing docs and data"
```

---

### Task 2: Create index.html shell

**Files:**
- Create: `app/index.html`

**Step 1: Create app directory**

```bash
mkdir -p app/{css,js/components,js/utils,data}
```

**Step 2: Write index.html**

```html
<!DOCTYPE html>
<html lang="pt-BR" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dragon Heir Companion</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          surface: { DEFAULT: '#0f1117', card: '#1a1d28', hover: '#242836', panel: '#1e2130' },
          gold: { DEFAULT: '#d4a853', dim: '#a68638', hover: '#e8c06a' },
          fire: '#e85d3a', ice: '#4fa8d4', lightning: '#a87fd4',
          poison: '#5db85d', necrosis: '#8a6db5', radiance: '#e8d44d',
          'tier-ss': '#ff6b35', 'tier-s': '#e8a835', 'tier-a': '#4fa8d4',
          'tier-b': '#5db85d', 'tier-c': '#9a97a0',
          mythic: '#ff6b35', legendary: '#d4a853', epic: '#a87fd4',
          done: '#5db85d', progress: '#d4a853', pending: '#5a576d'
        }
      }
    }
  }
  </script>
  <link rel="stylesheet" href="css/custom.css">
</head>
<body class="h-full bg-surface text-gray-200 font-sans">
  <div id="app" class="flex h-full">
    <nav id="sidebar" class="w-56 bg-surface-card border-r border-surface-hover flex flex-col shrink-0"></nav>
    <main id="content" class="flex-1 overflow-auto p-6"></main>
    <aside id="slide-panel" class="fixed right-0 top-0 h-full w-96 bg-surface-panel shadow-2xl transform translate-x-full transition-transform duration-200 ease-in-out z-50 overflow-auto"></aside>
    <div id="backdrop" class="fixed inset-0 bg-black/50 hidden z-40"></div>
  </div>

  <!-- Data files -->
  <script src="data/mechanics.js"></script>
  <script src="data/profile.js"></script>
  <script src="data/heroes.js"></script>
  <script src="data/my-roster.js"></script>
  <script src="data/artifacts.js"></script>
  <script src="data/teams.js"></script>
  <script src="data/tiers.js"></script>
  <script src="data/plan.js"></script>
  <script src="data/decisions.js"></script>

  <!-- Utils -->
  <script src="js/utils/render.js"></script>
  <script src="js/utils/filters.js"></script>

  <!-- Components -->
  <script src="js/components/slidePanel.js"></script>
  <script src="js/components/sidebar.js"></script>
  <script src="js/components/dashboard.js"></script>
  <script src="js/components/heroes.js"></script>
  <script src="js/components/teams.js"></script>
  <script src="js/components/artifacts.js"></script>
  <script src="js/components/tierlist.js"></script>
  <script src="js/components/plan.js"></script>
  <script src="js/components/decisions.js"></script>

  <!-- App -->
  <script src="js/app.js"></script>
</body>
</html>
```

**Step 3: Create custom.css (minimal)**

```css
/* custom.css — only for things Tailwind can't do */
@keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
@keyframes slide-out { from { transform: translateX(0); } to { transform: translateX(100%); } }
.slide-panel-open { transform: translateX(0) !important; }

/* Scrollbar styling for dark theme */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0f1117; }
::-webkit-scrollbar-thumb { background: #3a3d4a; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #5a5d6a; }

/* Element color dots */
.element-dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
```

**Step 4: Verify**

Open `app/index.html` in browser. Should show dark background with empty sidebar.

**Step 5: Commit**

```bash
git add app/
git commit -m "feat: scaffold app structure with index.html + Tailwind 4 CDN"
```

---

### Task 3: Create app.js (router)

**Files:**
- Create: `app/js/app.js`

```js
// app.js — Router and initialization
const App = {
  currentSection: 'dashboard',
  sections: ['dashboard', 'heroes', 'teams', 'artifacts', 'tierlist', 'plan', 'decisions'],

  init() {
    window.addEventListener('hashchange', () => this.route());
    this.route();
  },

  route() {
    const hash = location.hash.slice(1) || 'dashboard';
    const [section, param] = hash.split('/');

    if (this.sections.includes(section)) {
      this.currentSection = section;
      Sidebar.setActive(section);
      this.render(section, param);
    }
  },

  render(section, param) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    switch (section) {
      case 'dashboard': Dashboard.render(content); break;
      case 'heroes': Heroes.render(content, param); break;
      case 'teams': Teams.render(content); break;
      case 'artifacts': Artifacts.render(content); break;
      case 'tierlist': TierList.render(content); break;
      case 'plan': Plan.render(content); break;
      case 'decisions': Decisions.render(content); break;
    }
  },

  navigate(section, param) {
    location.hash = param ? `${section}/${param}` : section;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Sidebar.init();
  App.init();
});
```

**Step: Commit**

```bash
git add app/js/app.js
git commit -m "feat: add router with hash-based navigation"
```

---

### Task 4: Create render.js (helpers)

**Files:**
- Create: `app/js/utils/render.js`

```js
// render.js — DOM helpers
const R = {
  el(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'className') el.className = v;
      else if (k === 'textContent') el.textContent = v;
      else if (k === 'innerHTML') el.innerHTML = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else el.setAttribute(k, v);
    }
    for (const child of [].concat(children)) {
      if (typeof child === 'string') el.appendChild(document.createTextNode(child));
      else if (child) el.appendChild(child);
    }
    return el;
  },

  elementColor(element) {
    const colors = {
      Fire: 'fire', Ice: 'ice', Lightning: 'lightning',
      Poison: 'poison', Necrosis: 'necrosis', Radiance: 'radiance'
    };
    return colors[element] || 'gray-500';
  },

  tierColor(tier) {
    const colors = { SS: 'tier-ss', S: 'tier-s', A: 'tier-a', B: 'tier-b', C: 'tier-c', D: 'pending' };
    return colors[tier] || 'pending';
  },

  rarityColor(rarity) {
    const colors = { Mythic: 'mythic', Legendary: 'legendary', Epic: 'epic' };
    return colors[rarity] || 'gray-500';
  },

  badge(text, colorClass) {
    return R.el('span', {
      className: `bg-${colorClass} text-white text-xs px-2 py-0.5 rounded font-medium`,
      textContent: text
    });
  },

  elementDot(element) {
    return R.el('span', {
      className: `element-dot bg-${R.elementColor(element)}`,
      title: element
    });
  },

  card(className = '', children = []) {
    return R.el('div', {
      className: `bg-surface-card rounded-lg border border-surface-hover p-4 ${className}`
    }, children);
  },

  statCard(label, value, subtext = '') {
    return R.card('text-center', [
      R.el('div', { className: 'text-2xl font-bold text-gold', textContent: String(value) }),
      R.el('div', { className: 'text-sm text-gray-400 mt-1', textContent: label }),
      subtext ? R.el('div', { className: 'text-xs text-gray-500 mt-1', textContent: subtext }) : null
    ]);
  },

  progressBar(current, max, colorClass = 'gold') {
    const pct = Math.round((current / max) * 100);
    return R.el('div', { className: 'w-full bg-surface-hover rounded-full h-2' }, [
      R.el('div', {
        className: `bg-${colorClass} h-2 rounded-full transition-all duration-300`,
        style: { width: `${pct}%` }
      })
    ]);
  }
};
```

**Step: Commit**

```bash
git add app/js/utils/render.js
git commit -m "feat: add render helpers (R.el, badges, cards, progress bars)"
```

---

### Task 5: Create slidePanel.js

**Files:**
- Create: `app/js/components/slidePanel.js`

```js
// slidePanel.js — Reusable slide-over panel
const SlidePanel = {
  open(title, contentFn) {
    const panel = document.getElementById('slide-panel');
    const backdrop = document.getElementById('backdrop');

    panel.innerHTML = '';
    panel.appendChild(R.el('div', { className: 'p-6' }, [
      R.el('div', { className: 'flex items-center justify-between mb-6' }, [
        R.el('h2', { className: 'text-xl font-bold text-gold', textContent: title }),
        R.el('button', {
          className: 'text-gray-400 hover:text-white text-2xl',
          textContent: '×',
          onClick: () => this.close()
        })
      ]),
      R.el('div', { id: 'slide-panel-content' })
    ]));

    contentFn(panel.querySelector('#slide-panel-content'));

    panel.classList.add('slide-panel-open');
    backdrop.classList.remove('hidden');
    backdrop.onclick = () => this.close();
  },

  close() {
    const panel = document.getElementById('slide-panel');
    const backdrop = document.getElementById('backdrop');
    panel.classList.remove('slide-panel-open');
    backdrop.classList.add('hidden');
  }
};
```

**Step: Commit**

```bash
git add app/js/components/slidePanel.js
git commit -m "feat: add slide-over panel component"
```

---

### Task 6: Create sidebar.js

**Files:**
- Create: `app/js/components/sidebar.js`

```js
// sidebar.js — Navigation sidebar
const Sidebar = {
  items: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'heroes', label: 'Heróis', icon: '⚔️' },
    { id: 'teams', label: 'Times', icon: '👥' },
    { id: 'artifacts', label: 'Artefatos', icon: '💎' },
    { id: 'tierlist', label: 'Tier List', icon: '📋' },
    { id: 'plan', label: 'Plano', icon: '📌' },
    { id: 'decisions', label: 'Decisões', icon: '📜' }
  ],

  init() {
    const nav = document.getElementById('sidebar');
    nav.innerHTML = '';

    // Header
    nav.appendChild(R.el('div', { className: 'p-4 border-b border-surface-hover' }, [
      R.el('h1', { className: 'text-lg font-bold text-gold', textContent: 'Dragon Heir' }),
      R.el('div', { className: 'text-xs text-gray-500 mt-1', textContent: 'Companion App' })
    ]));

    // Nav items
    const list = R.el('div', { className: 'flex-1 py-2' });
    for (const item of this.items) {
      const btn = R.el('button', {
        className: 'w-full text-left px-4 py-3 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-surface-hover transition-colors duration-150',
        'data-section': item.id,
        onClick: () => App.navigate(item.id)
      }, [
        R.el('span', { textContent: item.icon }),
        R.el('span', { textContent: item.label })
      ]);
      list.appendChild(btn);
    }
    nav.appendChild(list);

    // Footer
    nav.appendChild(R.el('div', {
      className: 'p-4 border-t border-surface-hover text-xs text-gray-500',
      textContent: `${DATA_PROFILE?.name || 'Player'} — ${DATA_PROFILE?.server || ''}`
    }));
  },

  setActive(sectionId) {
    document.querySelectorAll('#sidebar button[data-section]').forEach(btn => {
      const isActive = btn.dataset.section === sectionId;
      btn.className = `w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-150 ${
        isActive ? 'text-gold border-l-2 border-gold bg-surface-hover' : 'text-gray-400 hover:text-white hover:bg-surface-hover'
      }`;
    });
  }
};
```

**Step: Commit**

```bash
git add app/js/components/sidebar.js
git commit -m "feat: add sidebar navigation"
```

---

## Phase 2: Data Extraction (Tasks 7-13)

> **Strategy:** Use Python scripts to extract data from JSON/MD files into app/data/*.js files.
> These scripts are run ONCE during migration. After that, Claude edits the .js files directly.

### Task 7: Create profile.js + mechanics.js

**Files:**
- Create: `app/data/profile.js`
- Create: `app/data/mechanics.js`

**Step 1: profile.js** — Extract manually from `context/player-profile.md` (current values).
Write the complete `window.DATA_PROFILE = {...}` object per the design doc model.

**Step 2: mechanics.js** — Extract from `docs/game-mechanics/affinity-bonuses.md` + CLAUDE.md.
Write the complete `window.DATA_MECHANICS = {...}` object per the design doc model.

**Step 3: Commit**

```bash
git add app/data/profile.js app/data/mechanics.js
git commit -m "feat: add profile and mechanics data"
```

---

### Task 8: Create heroes.js (297 heroes database)

**Files:**
- Create: `scripts/extract-heroes.py`
- Create: `app/data/heroes.js`

**Step 1: Write extraction script**

```python
#!/usr/bin/env python3
"""Extract heroes from JSON into app/data/heroes.js"""
import json

with open('data/heroes-dragonheir-info-all.json') as f:
    heroes = json.load(f)

js_heroes = []
for h in heroes:
    hero = {
        'id': h['n'].lower().replace(' ', '-').replace("'", ''),
        'name': h['n'],
        'element': h['el'],
        'rarity': h['r'],
        'school': h.get('sc', ''),
        'season': h.get('se', 's1'),
        'type': h.get('at', ''),
        'race': h.get('ra', ''),
        'career': h.get('ca', ''),
        'captain': h.get('cp', ''),
        'skills': {
            'ultimate': {'name': h.get('un', ''), 'description': h.get('ud', '')},
            'battle': {'name': h.get('bn', ''), 'description': h.get('bd', '')},
            'passive': {'name': h.get('pn', ''), 'description': h.get('pd', '')}
        },
        'inspiration': [h.get(f'i{i}', '') for i in range(1, 6) if h.get(f'i{i}')]
    }
    js_heroes.append(hero)

with open('app/data/heroes.js', 'w') as f:
    f.write('// heroes.js — 297 heroes database (extracted from dragonheir.info)\n')
    f.write(f'window.DATA_HEROES = {json.dumps(js_heroes, indent=2, ensure_ascii=False)};\n')

print(f'Extracted {len(js_heroes)} heroes')
```

**Step 2: Run script**

```bash
python3 scripts/extract-heroes.py
```

**Step 3: Verify** — Open `app/data/heroes.js`, check first few entries are correct.

**Step 4: Commit**

```bash
git add scripts/extract-heroes.py app/data/heroes.js
git commit -m "feat: extract 297 heroes from JSON into heroes.js"
```

---

### Task 9: Create my-roster.js (Henry's heroes)

**Files:**
- Create: `app/data/my-roster.js`

**Step 1:** Extract manually from `docs/heroes/my-roster.md` + `context/player-profile.md` + `docs/guides/artifact-bis-assignments.md`.

For each of Henry's ~134 heroes, create an entry with:
- `owned: true`
- `skill_level` (0 for most, 7 for Ladehlia)
- `artifact` (from BiS assignments doc)
- `tiers` (from tier-list-combined.md for owned heroes)
- `teams_count` (from my-teams-by-activity.md frequency table)

**Key:** The 19 Legendary heroes need full detail. Epic/Rare heroes need at minimum: id, name, element, rarity, school, owned=true.

**Step 2: Commit**

```bash
git add app/data/my-roster.js
git commit -m "feat: add Henry's roster data (~134 heroes)"
```

---

### Task 10: Create artifacts.js

**Files:**
- Create: `app/data/artifacts.js`

**Step 1:** Extract from `docs/guides/artifact-bis-assignments.md` + `context/player-profile.md` (Artefatos section).

Create `window.DATA_ARTIFACTS = {...}` with:
- `owned[]` — 21 artifacts (3 Mythic + 18 Legendary) with BiS assignment
- `not_owned[]` — 10 Legendary artifacts Henry doesn't have
- `crystal_budget` — total/spend/reserve/margin
- `upgrade_order[]` — 7 priority items

**Step 2: Commit**

```bash
git add app/data/artifacts.js
git commit -m "feat: add artifacts data (21 owned, BiS assignments, crystal budget)"
```

---

### Task 11: Create teams.js

**Files:**
- Create: `app/data/teams.js`

**Step 1:** Extract ALL teams from `docs/heroes/my-teams-by-activity.md`.
Include all ~12 canonical teams with members, bonds, captain, tested status, DPS data, notes.

**Step 2: Commit**

```bash
git add app/data/teams.js
git commit -m "feat: add all ~12 canonical team compositions"
```

---

### Task 12: Create tiers.js

**Files:**
- Create: `scripts/extract-tiers.py`
- Create: `app/data/tiers.js`

**Step 1:** Extract tier data from `docs/heroes/tier-list-combined.md`.
Create `window.DATA_TIERS = [...]` with AC tier, HH rating, DI ranking for each hero.

**Step 2: Commit**

```bash
git add scripts/extract-tiers.py app/data/tiers.js
git commit -m "feat: add tier list data (3 sources)"
```

---

### Task 13: Create plan.js + decisions.js

**Files:**
- Create: `app/data/plan.js`
- Create: `app/data/decisions.js`

**Step 1: plan.js** — Extract from `PLAN.md`. Create phase structure with items and done status.

**Step 2: decisions.js** — Extract from `context/decisions-log.md`. Create array of decision entries with date, title, tags, summary, impact.

**Step 3: Commit**

```bash
git add app/data/plan.js app/data/decisions.js
git commit -m "feat: add plan phases and decision history data"
```

---

## Phase 3: Components (Tasks 14-20)

### Task 14: Create filters.js

**Files:**
- Create: `app/js/utils/filters.js`

```js
// filters.js — Shared filter/search logic
const Filters = {
  // Generic filter bar for heroes/tierlist
  createFilterBar(options, onFilter) {
    const bar = R.el('div', { className: 'flex flex-wrap gap-3 mb-6 items-center' });

    // Element toggles
    if (options.elements) {
      const elements = ['Fire', 'Ice', 'Lightning', 'Poison', 'Necrosis', 'Radiance'];
      for (const el of elements) {
        const btn = R.el('button', {
          className: `px-3 py-1 rounded-full text-xs border border-${R.elementColor(el)} text-${R.elementColor(el)} hover:bg-${R.elementColor(el)} hover:text-white transition-colors`,
          textContent: el,
          'data-element': el,
          onClick: (e) => {
            e.target.classList.toggle('bg-' + R.elementColor(el));
            e.target.classList.toggle('text-white');
            onFilter(this.getActiveFilters(bar));
          }
        });
        bar.appendChild(btn);
      }
    }

    // Search input
    if (options.search) {
      const input = R.el('input', {
        type: 'text',
        placeholder: 'Buscar...',
        className: 'bg-surface-hover border border-surface-hover rounded px-3 py-1 text-sm text-white placeholder-gray-500 focus:border-gold focus:outline-none ml-auto',
        'data-search': 'true'
      });
      input.addEventListener('input', () => onFilter(this.getActiveFilters(bar)));
      bar.appendChild(input);
    }

    return bar;
  },

  getActiveFilters(bar) {
    const elements = [...bar.querySelectorAll('[data-element].text-white')].map(b => b.dataset.element);
    const search = bar.querySelector('[data-search]')?.value?.toLowerCase() || '';
    return { elements, search };
  },

  applyHeroFilters(heroes, filters) {
    return heroes.filter(h => {
      if (filters.elements?.length && !filters.elements.includes(h.element)) return false;
      if (filters.search && !h.name.toLowerCase().includes(filters.search)) return false;
      return true;
    });
  }
};
```

**Step: Commit**

```bash
git add app/js/utils/filters.js
git commit -m "feat: add filter/search utilities"
```

---

### Task 15: Dashboard component

**Files:**
- Create: `app/js/components/dashboard.js`

Renders:
1. 6 stat cards (2 rows × 3) — Wyrmarrow, Legendaries, Heroes, Skill Scrolls, Crystals, Soul Imprints
2. Skill Scroll Plan card
3. Arriving Heroes card
4. Next Steps card (from plan data)

Use `DATA_PROFILE` for all values.

**Step: Commit**

```bash
git add app/js/components/dashboard.js
git commit -m "feat: add dashboard with resource cards and scroll plan"
```

---

### Task 16: Heroes component

**Files:**
- Create: `app/js/components/heroes.js`

Renders:
1. Filter bar (element toggles, search, rarity dropdown, "só meus" toggle)
2. Grid of mini-cards (4-6 per row)
3. Click card → SlidePanel.open() with full hero detail

Hero detail slide-over shows: tiers, captain, skills (3), inspiration, skill level bar, artifact equipped, teams list.

Uses `DATA_MY_ROSTER` for owned heroes, `DATA_HEROES` for full database when "mostrar todos" is on.

**Step: Commit**

```bash
git add app/js/components/heroes.js
git commit -m "feat: add heroes grid with filters and slide-over detail"
```

---

### Task 17: Teams component

**Files:**
- Create: `app/js/components/teams.js`

Renders accordion cards from `DATA_TEAMS`. Each expandable card shows:
- 5 hero slots (horizontal, color-coded by element)
- Bonds, auras, captain skill
- "Testado" / "Não testado" badge
- DPS if tested

Click hero slot → opens hero detail slide-over.

**Step: Commit**

```bash
git add app/js/components/teams.js
git commit -m "feat: add teams section with accordion cards"
```

---

### Task 18: Artifacts component

**Files:**
- Create: `app/js/components/artifacts.js`

Renders 3 tabs:
1. **BiS** — table grouped by tier (Mythic → Legendary DPS → Tank → Heal)
2. **Upgrade** — priority list (1-7) + crystal budget bar
3. **Inventário** — grid of 21 owned artifacts + "Não tenho" section

Click artifact → slide-over with full detail + better alternative.

Uses `DATA_ARTIFACTS`.

**Step: Commit**

```bash
git add app/js/components/artifacts.js
git commit -m "feat: add artifacts section with BiS, upgrade, and inventory tabs"
```

---

### Task 19: Tier List component

**Files:**
- Create: `app/js/components/tierlist.js`

Renders sortable table of 297+ heroes from `DATA_HEROES` + `DATA_TIERS`.
- Columns: Name | Elem | Rarity | AC Tier | HH Overall | DI # | School | Owned
- Click header to sort
- Owned heroes highlighted
- Click row → hero detail slide-over
- Same filter bar as Heroes

**Step: Commit**

```bash
git add app/js/components/tierlist.js
git commit -m "feat: add sortable tier list table (297+ heroes)"
```

---

### Task 20: Plan + Decisions components

**Files:**
- Create: `app/js/components/plan.js`
- Create: `app/js/components/decisions.js`

**Plan:** Accordion per phase, progress bar, checkboxes visual, subitems indented.

**Decisions:** Vertical timeline, newest first, collapsible entries, tags as badges.

**Step: Commit**

```bash
git add app/js/components/plan.js app/js/components/decisions.js
git commit -m "feat: add plan and decisions sections"
```

---

## Phase 4: Polish (Task 21)

### Task 21: Integration test + polish

**Step 1:** Open `app/index.html` in browser. Navigate all 7 sections.

**Checklist:**
- [ ] Dashboard loads with correct resource numbers
- [ ] Heroes grid shows, filters work, slide-over opens
- [ ] Teams accordion expands, hero slots are color-coded
- [ ] Artifacts 3 tabs work, crystal budget bar renders
- [ ] Tier List sorts by columns, search works
- [ ] Plan shows phases with progress bars
- [ ] Decisions timeline renders, entries expand
- [ ] Hash navigation works (back button, bookmarks)
- [ ] Slide-over panel opens/closes smoothly

**Step 2:** Fix any visual issues found.

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: Dragon Heir Companion v1.0 — all sections functional"
```

---

## Execution Notes

### Parallel opportunities
- Tasks 7-13 (data extraction) are independent — can run in parallel
- Tasks 15-20 (components) depend on data files but are independent of each other

### Data extraction is the hard part
- `heroes.js` and `tiers.js` can be scripted from JSON
- `my-roster.js`, `artifacts.js`, `teams.js` need manual extraction from .md files
- `decisions.js` has ~30 entries — manual but tedious
- `plan.js` is straightforward from PLAN.md

### After v1.0
- Claude edits `app/data/*.js` when Henry reports changes
- No app code changes needed for data updates
- PLAN.md stays as Henry's editable checklist
