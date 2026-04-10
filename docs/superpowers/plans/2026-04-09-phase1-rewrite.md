# Phase 1: Vue Rewrite — Scaffolding + Dashboard + Teams

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the Dragon Heir companion app from vanilla JS to Vue 3 + Vite + Tailwind CSS. Phase 1 delivers: project scaffolding, layout shell (sidebar + bottom nav), dashboard, and the new Teams page with activity-first design.

**Architecture:** Vue 3 Composition API with `<script setup>`, Vue Router (hash mode), Tailwind CSS via @tailwindcss/vite plugin. Data files live in `public/data/` as static JS (loaded at runtime, NOT bundled) — data updates deploy without rebuild. Mobile-first responsive (bottom nav mobile, sidebar desktop).

**Tech Stack:** Vue 3, Vite, Tailwind CSS v4, Vue Router, Google Fonts (Cinzel + DM Sans)

**Spec:** `docs/superpowers/specs/2026-04-09-teams-redesign.md`
**Mockup:** `app-mockup-preview.html` (visual reference)

---

## Data Architecture: Code vs Data Separation

**CRITICAL:** Data files live in `public/data/` and are loaded at RUNTIME (not bundled).
This means: when Claude updates a data file (new team, new hero), only `nexus push` is needed — NO rebuild.

- `src/` = Vue code (rebuild when components change)
- `public/data/` = game data (NO rebuild needed, copied as-is to `dist/data/`)

Data files keep the existing `window.DATA_*` pattern. Vue loads them on startup via dynamic `<script>` tags, then the `D` module indexes them.

## File Structure

```
public/
  data/                     — Game data (static, NOT bundled)
    heroes.js               — window.DATA_HEROES (316 heroes)
    tiers.js                — window.DATA_TIERS (254 heroes)
    my-roster.js            — window.DATA_MY_ROSTER (182 heroes)
    profile.js              — window.DATA_PROFILE
    mechanics.js            — window.DATA_MECHANICS
    artifacts.js            — window.DATA_ARTIFACTS
    builds.js               — window.DATA_BUILDS
    gear.js                 — window.DATA_GEAR
    activities.js           — window.DATA_ACTIVITIES (NEW — teams by activity)
src/
  main.js                  — App entry, mount Vue + router
  App.vue                  — Root: sidebar + router-view + bottom nav
  router.js                — Vue Router (hash mode)
  data/                    — Data access layer (reads from window globals)
    loader.js              — Dynamic script loader (like current DataLoader)
    index.js               — D module (hero/tier/roster lookups)
  composables/
    useHero.js              — Hero lookup composable
  components/
    layout/
      Sidebar.vue           — Desktop sidebar
      BottomNav.vue         — Mobile bottom nav
    ui/
      ElDot.vue             — Element color dot
      Pill.vue              — Badge/pill
      HeroImg.vue           — CDN hero image
      HeroStrip.vue         — Mini avatar strip
      StatCard.vue          — Stat card
      Modal.vue             — Fullscreen mobile / card desktop
      TabBar.vue            — Reusable tabs
    teams/
      ActivityGrid.vue      — Grid of activity cards
      ActivityCard.vue      — Single activity card
      TeamModal.vue         — Modal with 3 tabs
      TeamBlock.vue         — Team display block (hero rows)
      BossMechanics.vue     — Boss tab content
      TeamHistory.vue       — History tab content
  views/
    DashboardView.vue       — Dashboard page
    TeamsView.vue           — Teams page
    PlaceholderView.vue     — Placeholder for Phase 2 pages
index.html                 — Entry HTML (fonts, viewport)
vite.config.js             — Vite config (base: /dh/)
tailwind.config.js         — Tailwind config (dark theme, colors)
package.json               — Dependencies
```

Existing data files stay in `app/data/` — imported as raw JS and re-exported as ES modules from `src/data/index.js`.

---

### Task 1: Scaffold Vite + Vue + Tailwind

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/App.vue`
- Create: `tailwind.config.js`

- [ ] **Step 1: Initialize project**

```bash
cd "/mnt/e/OneDrive/Games/Dragon Heir"
npm init -y
npm install vue vue-router
npm install -D vite @vitejs/plugin-vue @tailwindcss/vite tailwindcss
```

- [ ] **Step 2: Create vite.config.js**

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dh/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { '@': '/src' }
  }
})
```

- [ ] **Step 3: Create index.html**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dragon Heir Companion</title>
  <link rel="apple-touch-icon" href="/dh/apple-touch-icon.png">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create src/main.js**

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

createApp(App).use(router).mount('#app')
```

- [ ] **Step 5: Create src/style.css with Tailwind + theme**

```css
@import 'tailwindcss';

@theme {
  --color-bg-deep: #06060c;
  --color-bg-surface: #0d0d16;
  --color-bg-card: #12121e;
  --color-bg-elevated: #1a1a2a;
  --color-bg-hover: #1f1f32;
  --color-border: #1e1e30;
  --color-border-hover: #2a2a40;
  --color-gold: #c9a24e;
  --color-gold-dim: #8a6d2f;
  --color-gold-bright: #e8c96a;
  --color-text-primary: #e8e6e3;
  --color-text-dim: #8a8895;
  --color-text-muted: #5a5868;
  --color-el-fire: #e8594a;
  --color-el-ice: #5ba8d9;
  --color-el-lightning: #a87ce8;
  --color-el-poison: #6bc95a;
  --color-el-necrosis: #9b6bc9;
  --color-el-radiance: #e8c44a;
  --color-accent-green: #4ae88a;
  --color-accent-red: #e84a5a;
  --font-display: 'Cinzel', serif;
  --font-body: 'DM Sans', sans-serif;
}

body {
  font-family: var(--font-body);
  background: var(--color-bg-deep);
  color: var(--color-text-primary);
  min-height: 100dvh;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 6: Create minimal src/App.vue**

```vue
<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-dvh">
    <RouterView />
  </div>
</template>
```

- [ ] **Step 7: Create src/router.js**

```js
import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from './views/DashboardView.vue'

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  { path: '/teams', name: 'teams', component: () => import('./views/TeamsView.vue') },
  { path: '/heroes', name: 'heroes', component: () => import('./views/PlaceholderView.vue') },
  { path: '/builds', name: 'builds', component: () => import('./views/PlaceholderView.vue') },
  { path: '/gear', name: 'gear', component: () => import('./views/PlaceholderView.vue') },
  { path: '/artifacts', name: 'artifacts', component: () => import('./views/PlaceholderView.vue') },
  { path: '/tierlist', name: 'tierlist', component: () => import('./views/PlaceholderView.vue') },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
```

- [ ] **Step 8: Create PlaceholderView.vue**

```vue
<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <p class="text-text-dim text-sm">Em construcao — Fase 2</p>
  </div>
</template>
```

- [ ] **Step 9: Run dev server and verify**

```bash
npx vite --open
```

Expected: Browser opens, shows "Em construcao" placeholder. No errors in console.

---

### Task 2: Data Layer

**Files:**
- Create: `src/data/index.js`
- Create: `src/data/activities.js`
- Create: `src/composables/useHero.js`

- [ ] **Step 1: Create data index module**

Read the existing `app/data/*.js` files. They use `window.DATA_*` globals. We need to convert them to ES module exports. The simplest approach: import the raw files and re-export.

```js
// src/data/index.js
// Import existing data files (they set window.DATA_*)
import '../../../app/data/heroes.js'
import '../../../app/data/tiers.js'
import '../../../app/data/my-roster.js'
import '../../../app/data/profile.js'
import '../../../app/data/mechanics.js'
import '../../../app/data/artifacts.js'
import '../../../app/data/builds.js'
import '../../../app/data/gear.js'

// Build indices
const heroById = new Map()
const heroByName = new Map()
const tierById = new Map()
const myHeroById = new Map()

function init() {
  for (const h of (window.DATA_HEROES || [])) {
    heroById.set(h.id, h)
    heroByName.set(h.name.toLowerCase(), h)
  }
  for (const t of (window.DATA_TIERS || [])) {
    tierById.set(t.id, t)
  }
  for (const h of (window.DATA_MY_ROSTER || [])) {
    myHeroById.set(h.id, h)
  }
}

init()

export const D = {
  hero: (id) => heroById.get(id) || null,
  heroByName: (name) => heroByName.get(name.toLowerCase()) || null,
  tier: (id) => tierById.get(id) || null,
  myHero: (id) => myHeroById.get(id) || null,
  isOwned: (id) => myHeroById.has(id),
  profile: () => window.DATA_PROFILE || {},
  allHeroes: () => window.DATA_HEROES || [],
  myRoster: () => window.DATA_MY_ROSTER || [],
  mechanics: () => window.DATA_MECHANICS || {},
  heroImgUrl: (id) => `https://i.dmzgame.com/dragonheir/img/hero/pic_hero_show_${id}.png`,
}
```

- [ ] **Step 2: Create activities data**

Build `src/data/activities.js` from `data/community-teams-research.json` + `app/data/teams.js` (S1 tested teams) + `app/data/mechanics.js` (boss mechanics). This is a large data file — populate all 10 activities with community teams, mechanics, and migrated S1 tested teams.

The file should export `const activities = [...]` with the structure defined in the spec.

Note to implementer: Read these 3 source files, merge the data, and write activities.js. Each activity needs: id, name, type, boss, drops, cycle, mechanics (from mechanics.js game_modes section), teams.community (from community-teams-research.json), teams.custom (empty initially — Henry fills later), teams.tested (migrated from current teams.js entries matching the activity).

- [ ] **Step 3: Create useHero composable**

```js
// src/composables/useHero.js
import { D } from '@/data'

export function useHero() {
  const heroName = (id) => D.hero(id)?.name || '?'
  const heroElement = (id) => D.hero(id)?.element || ''
  const heroImgUrl = (id) => D.heroImgUrl(id)
  const isOwned = (id) => D.isOwned(id)
  const heroRating = (id, activity) => {
    const h = D.hero(id)
    return h?.ratings?.[activity] ?? null
  }

  return { heroName, heroElement, heroImgUrl, isOwned, heroRating }
}
```

- [ ] **Step 4: Verify data loads**

Add a temporary log in DashboardView to verify:

```vue
<script setup>
import { D } from '@/data'
console.log('Heroes:', D.allHeroes().length, 'Profile:', D.profile().name)
</script>
```

Run `npx vite` — console should show `Heroes: 316 Profile: SuperYennefer`.

---

### Task 3: Layout Shell (Sidebar + BottomNav)

**Files:**
- Create: `src/components/layout/Sidebar.vue`
- Create: `src/components/layout/BottomNav.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Create Sidebar.vue**

Desktop-only sidebar (hidden below 768px). Navigation items with icons, player info footer. Uses `router-link` for navigation. Active state from `useRoute()`.

Reference: mockup `.sidebar` section. Items: Dashboard, Times, Herois, Builds, Gear, Artefatos, Tier List. Footer: avatar "SY", name "SuperYennefer", server "139-Darkfire".

- [ ] **Step 2: Create BottomNav.vue**

Mobile-only bottom nav (hidden above 768px). 5 buttons: Home, Times, Herois, Gear, Mais (overflow). Fixed bottom, safe-area padding. Uses `router.push()` on click.

Reference: mockup `.bottom-nav` section.

- [ ] **Step 3: Update App.vue with layout**

```vue
<script setup>
import Sidebar from './components/layout/Sidebar.vue'
import BottomNav from './components/layout/BottomNav.vue'
</script>

<template>
  <div class="flex min-h-dvh">
    <Sidebar />
    <main class="flex-1 p-4 pb-20 md:ml-[220px] md:p-7 md:pb-8 lg:p-12 max-w-[1200px]">
      <RouterView />
    </main>
    <BottomNav />
  </div>
</template>
```

- [ ] **Step 4: Verify navigation works**

Run dev server. Click sidebar items (desktop) and bottom nav (resize to mobile). Router should navigate. Active states should highlight.

---

### Task 4: UI Components

**Files:**
- Create: `src/components/ui/ElDot.vue`
- Create: `src/components/ui/Pill.vue`
- Create: `src/components/ui/HeroImg.vue`
- Create: `src/components/ui/HeroStrip.vue`
- Create: `src/components/ui/StatCard.vue`
- Create: `src/components/ui/Modal.vue`
- Create: `src/components/ui/TabBar.vue`

- [ ] **Step 1: Create ElDot.vue**

Props: `element` (string), `size` ('sm' | 'md' | 'lg'). Renders a colored dot with glow shadow matching the element color. Use computed class mapping: Fire→el-fire, Ice→el-ice, etc.

- [ ] **Step 2: Create Pill.vue**

Props: `variant` ('default' | 'gold' | 'green'). Slot for content. Rounded-full border pill with variant colors.

- [ ] **Step 3: Create HeroImg.vue**

Props: `heroId` (number), `size` (number, default 40). Renders `<img>` from CDN URL with rounded corners, object-fit cover, object-position center 15% (to show face not feet).

- [ ] **Step 4: Create HeroStrip.vue**

Props: `heroIds` (number[]). Renders overlapping row of HeroImg components (28px, -5px margin-left overlap).

- [ ] **Step 5: Create StatCard.vue**

Props: `value` (string), `label` (string). Card with gold value and dim label.

- [ ] **Step 6: Create Modal.vue**

Props: `open` (boolean), `title` (string). Emits: `close`. Mobile: fullscreen with sticky top bar and back button. Desktop (768px+): centered card with overlay. Transitions. Escape key closes. Body scroll lock when open.

- [ ] **Step 7: Create TabBar.vue**

Props: `tabs` (Array<{key, label}>), `modelValue` (string). Emits: `update:modelValue`. Horizontal tab bar with gold active underline. Scrollable on mobile.

- [ ] **Step 8: Verify all components render**

Create a temporary test view that renders each component. Verify in browser.

---

### Task 5: Dashboard View

**Files:**
- Create: `src/views/DashboardView.vue`

- [ ] **Step 1: Build DashboardView**

Reference: mockup `#page-dashboard`. Uses StatCard grid (2 col mobile, 4 col desktop). Shows: heroes count, legendaries, resonance, mythic artifacts. Resources section. Activity status pills.

Data from `D.profile()` and `D.myRoster()`.

- [ ] **Step 2: Verify dashboard renders with real data**

Run dev server. Dashboard should show "182 Herois", "61 Legendarios", "100 Resonance", etc.

---

### Task 6: Teams — Activity Grid + Cards

**Files:**
- Create: `src/views/TeamsView.vue`
- Create: `src/components/teams/ActivityGrid.vue`
- Create: `src/components/teams/ActivityCard.vue`

- [ ] **Step 1: Create ActivityCard.vue**

Props: `activity` (object). Emits: `click`. Shows: element dot, activity name, boss name, drops, status pill, hero strip of team members. Element color border-top on the card. Press animation on mobile.

Reference: mockup `.activity-card` — horizontal card-row layout.

- [ ] **Step 2: Create ActivityGrid.vue**

Props: `activities` (array). Groups activities by `type` (gear_dungeon, tower, pvp) with section labels. Grid: 1 col mobile, 2 col desktop.

- [ ] **Step 3: Create TeamsView.vue**

Imports activities data. Renders page header + ActivityGrid. Manages selected activity state for modal.

- [ ] **Step 4: Verify grid renders with 10 activities**

Run dev server, navigate to Teams. Should see all 10 activity cards grouped by type with real hero images.

---

### Task 7: Teams — Modal with Tabs

**Files:**
- Create: `src/components/teams/TeamModal.vue`
- Create: `src/components/teams/TeamBlock.vue`
- Create: `src/components/teams/BossMechanics.vue`
- Create: `src/components/teams/TeamHistory.vue`
- Modify: `src/views/TeamsView.vue` (add modal)

- [ ] **Step 1: Create TeamBlock.vue**

Props: `team` (object with members, affinity, notes, etc), `title` (string), `badge` (string). Renders: title row with badge, hero rows (HeroImg + name + role + artifact), affinity bar, notes text. Marks heroes not in roster with reduced opacity + "(nao tem)" label.

- [ ] **Step 2: Create BossMechanics.vue**

Props: `mechanics` (object). Renders: boss skills list (red skill names, dim descriptions), counters list (green ">" prefix), timing text.

- [ ] **Step 3: Create TeamHistory.vue**

Props: `teams` (array of tested teams from S1). Renders: list of team blocks with hero strips and result badges.

- [ ] **Step 4: Create TeamModal.vue**

Props: `activity` (object), `open` (boolean). Emits: `close`. Uses Modal, TabBar. Three tabs:
- "Time": renders community TeamBlock + custom TeamBlock
- "Boss": renders BossMechanics
- "Historico": renders TeamHistory

Modal header shows: element dot, activity name, boss name, drops, cycle.

- [ ] **Step 5: Wire modal in TeamsView.vue**

```vue
<script setup>
import { ref } from 'vue'
import { activities } from '@/data/activities'
import ActivityGrid from '@/components/teams/ActivityGrid.vue'
import TeamModal from '@/components/teams/TeamModal.vue'

const selectedActivity = ref(null)
</script>

<template>
  <div>
    <header class="mb-5">
      <h1 class="font-display text-2xl font-bold">Times por Atividade</h1>
      <p class="text-sm text-text-dim mt-1">Comunidade + analise custom</p>
    </header>
    <ActivityGrid :activities="activities" @select="selectedActivity = $event" />
    <TeamModal
      :activity="selectedActivity"
      :open="!!selectedActivity"
      @close="selectedActivity = null"
    />
  </div>
</template>
```

- [ ] **Step 6: Verify complete flow**

Click activity card → modal opens with 3 tabs. Switch tabs. Close with back button / overlay click / ESC. Verify hero images load. Verify "nao tem" labels on heroes not in roster.

---

### Task 8: Build + Deploy

**Files:**
- Modify: `nexus.yaml`
- Create: `.gitignore` (if needed)

- [ ] **Step 1: Test production build**

```bash
npm run build
```

Expected: `dist/` folder created with index.html + assets.

- [ ] **Step 2: Verify dist works locally**

```bash
npx vite preview --base /dh/
```

Navigate to `http://localhost:4173/dh/`. All pages should work.

- [ ] **Step 3: Update nexus.yaml**

```yaml
web:
  route: /dh
  static_dir: dist
  build_cmd: npm run build
```

- [ ] **Step 4: Deploy**

```bash
nexus push
```

Verify at https://nexus.henryavila.com/dh — app should load, navigate, show teams modal.

- [ ] **Step 5: Keep old app as backup**

The `app/` folder remains untouched as backup. Vite source is in `src/`. Deploy reads from `dist/`.

---

## Self-Review Checklist

- [x] All 10 activities covered in data/activities.js
- [x] S1 tested teams migrated to tested[] arrays
- [x] Modal has 3 tabs (Time, Boss, Historico)
- [x] Mobile-first: bottom nav, 1-col grid, fullscreen modal
- [x] Desktop: sidebar, 2-col grid, card modal
- [x] Hero ownership check (isOwned marking)
- [x] Deploy path updated in nexus.yaml
- [x] No placeholders — every task has concrete implementation guidance
- [x] Consistent naming: activities (not teams), heroId (not id)
