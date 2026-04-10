# Data Normalization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Eliminate data duplication across 12 JS files by using `id` (numeric) as primary key and a centralized lookup module (data.js).

**Architecture:** Create `app/js/utils/data.js` as the lookup layer. Normalize data files to remove duplicated fields. Update app components to use `D.*` API. No build step, no framework change.

**Tech Stack:** Vanilla JS, Tailwind CSS via CDN, no build step

**Design doc:** `docs/plans/2026-02-18-data-normalization-design.md`

---

## Context for Implementer

### Current State
- 12 JS data files in `app/data/*.js` exposed as `window.DATA_*` globals
- `heroes.js` (297 heroes) is source of truth for hero identity — has both `id` (slug string) and `heroId` (numeric)
- `tiers.js` (303 heroes) is source of truth for ratings (ac_tier, hh_overall, di_rank) — uses `name` as key (no numeric id)
- Hero data is duplicated across my-roster.js, profile.js, teams.js, builds.js, bets.js
- Artifact-to-hero assignment exists in 4 places simultaneously
- `DATA_HERO_FREQUENCY` in teams.js has 31 entries with duplicated hero identity fields
- No test framework — verify via browser

### Key Files
- Data: `app/data/heroes.js`, `tiers.js`, `my-roster.js`, `profile.js`, `teams.js`, `builds.js`, `artifacts.js`, `gear.js`
- Utils: `app/js/utils/render.js` (has `R.heroIdByName()` and `R.heroLink()`)
- Components: `app/js/components/heroes.js`, `dashboard.js`, `teams.js`, `builds.js`, `artifacts.js`, `tierlist.js`, `sidebar.js`, `gear.js`
- Entry: `app/index.html` (script load order)

### Rules
- `id` (numeric) is the primary key for cross-file references
- `bets.js` snapshots are historical — DO NOT touch
- `heroes.js` gets a rename: `heroId` → `id`, `id` (slug) → `slug`
- Artifacts get `id` field (kebab-case slug of name)
- No build step. No framework. Vanilla JS only.

---

### Task 1: Rename IDs in heroes.js

**Files:**
- Modify: `app/data/heroes.js`

**Step 1: Rename fields in all 297 entries**

Before:
```js
{ "id": "nastjenka", "heroId": 20740, "name": "Nastjenka", ... }
```

After:
```js
{ "id": 20740, "slug": "nastjenka", "name": "Nastjenka", ... }
```

Use find-and-replace:
1. `"heroId":` → `"id":` (rename numeric ID to `id`)
2. But first, rename the old string `"id":` to `"slug":` to avoid collision

Safest order:
1. Replace `"id":` → `"slug":` (changes slug field)
2. Replace `"heroId":` → `"id":` (promotes numeric to primary)

**Step 2: Verify in browser**

Run: `python3 -m http.server 8769 -d app/`

Open console:
- `DATA_HEROES[0].id` should return a number (not a string)
- `DATA_HEROES[0].slug` should return a string
- `DATA_HEROES.find(h => h.name === 'Nastjenka').id` should return `20740`
- App should still work (components currently use `heroId` via render.js — this will temporarily break `R.heroIdByName()` which reads `h.heroId`)

**Step 3: Update render.js to use new field name**

In `R.heroIdByName()`, change `h.heroId` to `h.id`:
```js
// Before:
const h = heroes.find(h => h.name.toLowerCase() === name.toLowerCase());
return h?.heroId || null;
// After:
return h?.id || null;
```

Verify app works again after this change.

**Step 4: Commit**

```bash
git add app/data/heroes.js app/js/utils/render.js
git commit -m "refactor: rename heroes.js IDs — heroId→id, id→slug"
```

---

### Task 2: Create data.js lookup module

**Files:**
- Create: `app/js/utils/data.js`
- Modify: `app/index.html` (add script tag)

**Step 1: Create `app/js/utils/data.js`**

```js
// data.js — Centralized data lookup module
// Resolves id references across normalized data files

const D = (() => {
  // Lazy-initialized indices
  let _heroById = null;
  let _heroByName = null;
  let _tierById = null;
  let _tierByName = null;
  let _myHeroById = null;
  let _artifactById = null;

  function _buildHeroIndex() {
    if (_heroById) return;
    _heroById = new Map();
    _heroByName = new Map();
    for (const h of (window.DATA_HEROES || [])) {
      _heroById.set(h.id, h);
      _heroByName.set(h.name.toLowerCase(), h);
    }
  }

  function _buildTierIndex() {
    if (_tierById) return;
    _tierById = new Map();
    _tierByName = new Map();
    for (const t of (window.DATA_TIERS || [])) {
      if (t.id) _tierById.set(t.id, t);
      _tierByName.set(t.name.toLowerCase(), t);
    }
  }

  function _buildMyHeroIndex() {
    if (_myHeroById) return;
    _myHeroById = new Map();
    for (const h of (window.DATA_MY_ROSTER || [])) {
      _myHeroById.set(h.id, h);
    }
  }

  function _buildArtifactIndex() {
    if (_artifactById) return;
    _artifactById = new Map();
    for (const a of (window.DATA_ARTIFACTS?.owned || [])) {
      if (a.id) _artifactById.set(a.id, a);
    }
  }

  // Helper: extract tier fields without name/role/id to avoid collisions
  function _tierSafe(tier) {
    if (!tier) return {};
    const { name: _n, role: _r, id: _id, ...safe } = tier;
    return safe;
  }

  return {
    // --- Primary lookups ---
    hero(id) {
      _buildHeroIndex();
      return _heroById.get(id) || null;
    },

    tier(id) {
      _buildTierIndex();
      return _tierById.get(id) || null;
    },

    artifact(artId) {
      _buildArtifactIndex();
      return _artifactById.get(artId) || null;
    },

    // --- Player data ---
    myHero(id) {
      _buildMyHeroIndex();
      return _myHeroById.get(id) || null;
    },

    isOwned(id) {
      _buildMyHeroIndex();
      return _myHeroById.has(id);
    },

    // --- Merged view ---
    heroFull(id) {
      const hero = D.hero(id);
      if (!hero) return null;
      const tier = D.tier(id);
      const my = D.myHero(id);
      // Spread order: hero base, then tier (safe — no name/role/id collision), then player data
      return { ...hero, ..._tierSafe(tier), ...(my || {}) };
    },

    // --- Name lookups (convenience) ---
    heroByName(name) {
      _buildHeroIndex();
      return _heroByName.get(name.toLowerCase()) || null;
    },

    heroIdByName(name) {
      const h = D.heroByName(name);
      return h?.id || null;
    },

    tierByName(name) {
      _buildTierIndex();
      return _tierByName.get(name.toLowerCase()) || null;
    },

    // --- Lists ---
    allHeroes() {
      return window.DATA_HEROES || [];
    },

    myRoster() {
      _buildMyHeroIndex();
      const result = [];
      for (const my of (window.DATA_MY_ROSTER || [])) {
        const full = D.heroFull(my.id);
        if (full) result.push(full);
      }
      return result;
    },

    myRosterRaw() {
      return window.DATA_MY_ROSTER || [];
    },

    teamMembers(teamId) {
      const teams = window.DATA_TEAMS || [];
      // team.id is a string slug (e.g. "boss-sintrellia"), not a hero numeric id
      const team = teams.find(t => t.id === teamId);
      if (!team) return [];
      return team.members.map(m => {
        const hero = D.hero(m.id);
        return { ...hero, ..._tierSafe(D.tier(m.id)), ...m };
      });
    },

    // --- Role groups ---
    roleGroups(id) {
      return (window.DATA_ROLE_GROUPS || {})[id] || [];
    },

    // --- Artifact by equipped hero ---
    artifactForHero(id) {
      _buildArtifactIndex();
      for (const a of (window.DATA_ARTIFACTS?.owned || [])) {
        if (a.equippedOn === id) return a;
      }
      return null;
    },

    // --- Invalidate caches (call after data changes) ---
    invalidate() {
      _heroById = null;
      _heroByName = null;
      _tierById = null;
      _tierByName = null;
      _myHeroById = null;
      _artifactById = null;
    }
  };
})();
```

**Step 2: Add script tag to index.html**

In `app/index.html`, add `data.js` AFTER the data files and BEFORE the components:

```html
  <!-- Utils -->
  <script src="js/utils/data.js"></script>
  <script src="js/utils/render.js"></script>
  <script src="js/utils/filters.js"></script>
```

**Step 3: Verify in browser**

Open `http://localhost:8769/` and verify in console:
- `D.hero(20740)` returns Nastjenka
- `D.heroByName("Nastjenka")` returns same
- `D.heroIdByName("Nastjenka")` returns `20740`
- `D.allHeroes().length` returns `297`
- `D.tier(20740)` returns `null` (tiers.js not yet migrated — this is expected)
- App still works normally (no regressions)

**Step 4: Commit**

```bash
git add app/js/utils/data.js app/index.html
git commit -m "feat: add data.js centralized lookup module"
```

---

### Task 3: Add id to tiers.js

**Files:**
- Modify: `app/data/tiers.js`

This is the critical mapping step. tiers.js has 303 heroes identified by `name`. We need to add numeric `id` to each entry by matching names against heroes.js.

**Step 1: Write a mapping script**

Run in browser console (with app loaded):

```js
// Generate id mapping for tiers.js
const nameToId = new Map();
DATA_HEROES.forEach(h => nameToId.set(h.name.toLowerCase(), h.id));
const missing = [];
const mapped = DATA_TIERS.map(t => {
  const id = nameToId.get(t.name.toLowerCase());
  if (!id) missing.push(t.name);
  return { id: id || null, name: t.name };
});
console.log('Missing:', missing);
console.log('Mapped:', mapped.filter(m => m.id).length, '/', DATA_TIERS.length);
```

Note: Some tiers.js heroes may not exist in heroes.js (different sources). Those get `id: null` and keep `name` for identification.

**Step 2: Add id to each tiers.js entry**

For each entry in tiers.js, add `id` as the first field. Keep all existing fields for now (remove duplicates in Task 9).

Example — before:
```js
{ "name": "Acilia", "element": "Radiance", "rarity": "Legendary", ... }
```

After:
```js
{ "id": 10001, "name": "Acilia", "element": "Radiance", "rarity": "Legendary", ... }
```

**Step 3: Verify in browser**

- `D.tier(20740)` should now return Nastjenka's tier data
- `D.heroFull(20740)` should return merged hero + tier data (with tier's name/role excluded from merge)
- Tier list page should still work

**Step 4: Commit**

```bash
git add app/data/tiers.js
git commit -m "feat: add numeric id to all tiers.js entries"
```

---

### Task 4: Normalize my-roster.js

**Files:**
- Modify: `app/data/my-roster.js`

**Step 1: Simplify each entry**

Remove from each entry: `name`, `element`, `rarity`, `school`, `ac_tier`, `hh_rating`, `artifact`, `artifact_rarity`, `teams_count`, `role`

Keep: `id`, `inspiration`, `skill_level`, `notes`

Convert from grouped-by-element-with-comments to flat array.

Before:
```js
{
  name: "Nastjenka", element: "Lightning", rarity: "Legendary", school: "Dauntless",
  ac_tier: "SS", hh_rating: 4.6, inspiration: 0, skill_level: 8,
  artifact: "Thunder Deity's Spear", artifact_rarity: "Mythic",
  teams_count: 11, role: "DPS carry",
  notes: "#1 do jogo. +24% ATK aura. Basic attack 60% combo duplo. Skills 8/8"
}
```

After:
```js
{ id: 20740, inspiration: 0, skill_level: 8, notes: "#1 do jogo. +24% ATK aura. Basic attack 60% combo duplo. Skills 8/8" }
```

**Step 2: Map all hero names to ids**

Run in browser console to generate the mapping:
```js
DATA_MY_ROSTER.forEach(h => {
  const match = DATA_HEROES.find(x => x.name === h.name);
  console.log(`${h.name} => ${match?.id || 'NOT FOUND'}`);
});
```

Use the output to replace each entry. MUST verify all 137 heroes map correctly.

**Step 3: Keep DATA_ROLE_GROUPS at the bottom**

`DATA_ROLE_GROUPS` maps hero names to role arrays. Keep it as-is for now (it's a separate global, not part of the roster data). It will be migrated to use numeric id in Task 10.

**Step 4: Verify in browser**

- `D.myRoster().length` should return same count as before (~137)
- `D.myHero(20740)` should return `{ id: 20740, inspiration: 0, skill_level: 8, notes: "..." }`
- `D.isOwned(20740)` should return `true`
- `D.heroFull(20740).name` should return `"Nastjenka"` (from heroes.js via merge)
- Heroes page should show hero names correctly (after component update in Task 8)

**Important:** After this step, the Heroes component will temporarily break because it reads `h.name` from roster entries. This is expected and fixed in Task 8.

**Step 5: Commit**

```bash
git add app/data/my-roster.js
git commit -m "feat: normalize my-roster.js to id-only entries"
```

---

### Task 5: Normalize profile.js

**Files:**
- Modify: `app/data/profile.js`

**Step 1: Remove duplicated sections**

Remove entirely:
- `legendary_heroes[]` — derivable from `D.myRoster().filter(h => h.rarity === 'Legendary')`
- `artifact_allocation[]` — duplicates `artifacts.js owned[].equippedOn`
- `artifact_upgrade_order[]` — duplicates `artifacts.js owned[].upgrade_priority`
- `mythic_artifacts[]` — duplicates `artifacts.js owned.filter(a => a.rarity === 'Mythic')`

**Step 2: Keep and convert unique player data**

Keep these sections (they contain unique data not duplicated elsewhere):
- `resources` — unchanged
- `guild` — unchanged (added 19/Fev)
- `artifact_crystal_budget` — unchanged
- `resonance_level`, `resonance_cap_note` — unchanged

Convert hero name references to numeric id:
- `skill_scroll_plan[].hero` → `skill_scroll_plan[].id`
- `arriving[].name` → `arriving[].id` (keep `via` and `tier`)
- `soul_imprints.used[].hero` → `soul_imprints.used[].id`
- `soul_imprints.remaining[].hero` → `soul_imprints.remaining[].id`

**Step 3: Convert skill_scroll_plan**

Before:
```js
skill_scroll_plan: [
  { hero: "Ladehlia", scrolls: 3, target: "8/8", status: "feito" },
  ...
]
```

After:
```js
skill_scroll_plan: [
  { id: 23080, scrolls: 3, target: "8/8", status: "feito" },
  ...
]
```

**Step 4: Convert arriving**

Before: `{ name: "Lothair", via: "Banner 4...", tier: "SS" }`
After: `{ id: <lothairId>, via: "Banner 4...", tier: "SS" }`

**Step 5: Convert soul_imprints**

Before:
```js
soul_imprints: {
  used: [
    { hero: "Garett", target: "Mythic" },
    ...
  ],
  remaining: [
    { hero: "Ivellios", element: "Lightning" },
    ...
  ]
}
```

After:
```js
soul_imprints: {
  used: [
    { id: <garettId>, target: "Mythic" },
    ...
  ],
  remaining: [
    { id: <ivelliosId>, element: "Lightning" },
    ...
  ]
}
```

**Step 6: Final profile.js structure**

```js
window.DATA_PROFILE = {
  name: "SuperYennefer",
  server: "139-Darkfire",
  status: "Veterano retornando",
  style: "Casual (30-40 min/dia), F2P",
  last_updated: "2026-02-19",
  guild: { name: "DragonBros", ranking_overall: "A3", ranking_events: "Top 2 em varios eventos" },
  resonance_level: 79,
  resonance_cap_note: "...",
  resources: { /* unchanged */ },
  arriving: [ { id: XXXX, via: "...", tier: "SS" } ],
  skill_scroll_plan: [ { id: 23080, scrolls: 3, target: "8/8", status: "feito" }, ... ],
  artifact_crystal_budget: { /* unchanged */ },
  soul_imprints: { used: [ { id: XXXX, target: "Mythic" }, ... ], remaining: [ { id: XXXX, element: "Lightning" }, ... ] }
};
```

**Step 7: Verify in browser**

- `DATA_PROFILE.resources` unchanged
- `DATA_PROFILE.guild` unchanged
- `DATA_PROFILE.legendary_heroes` should be undefined
- `DATA_PROFILE.artifact_allocation` should be undefined
- Dashboard may temporarily break (fixed in Task 8)

**Step 8: Commit**

```bash
git add app/data/profile.js
git commit -m "feat: normalize profile.js — remove duplicated lists, convert names to id"
```

---

### Task 6: Normalize teams.js

**Files:**
- Modify: `app/data/teams.js`

**Step 1: Convert each team member to id-based**

Before:
```js
members: [
  { name: "Ladehlia", element: "Necrosis", school: "Summon", role: "DPS carry", rating: null, notes: "..." },
  ...
]
```

After:
```js
members: [
  { id: 23080, role: "DPS carry", notes: "..." },
  ...
]
```

Remove from each member: `name`, `element`, `school`, `rating`
Keep: `id`, `role` (role IN THIS TEAM, not generic role), `notes`

Note: team-level `id` field (e.g. `"boss-sintrellia"`) is a STRING slug and does NOT conflict with member numeric `id`. They live at different nesting levels.

**Step 2: Convert captain to id**

Before: `captain: { hero: "Sintrellia", skill: "+24% ATK em todas as batalhas" }`
After: `captain: { id: 10060, skill: "+24% ATK em todas as batalhas" }`

**Step 3: Convert variant changes to id where structured**

Variants have `change: "Lossenia -> Rowena"` which is free text — keep as-is. Only convert structured hero references.

**Step 4: Normalize DATA_HERO_FREQUENCY**

This table has duplicated identity fields. Simplify:

Before:
```js
{ name: "Nastjenka", element: "Lightning", school: "Dauntless", role: "DPS carry", teams: 10, activities: "..." }
```

After:
```js
{ id: 20740, teams: 10, activities: "..." }
```

Remove: `name`, `element`, `school`, `role` (all derivable via `D.hero(id)`)

**Step 5: Map all hero names in teams.js to ids**

Run in browser console before the change:
```js
const names = new Set();
DATA_TEAMS.forEach(t => t.members.forEach(m => names.add(m.name)));
names.forEach(n => {
  const match = DATA_HEROES.find(h => h.name === n);
  console.log(`"${n}" => ${match?.id || 'NOT FOUND'}`);
});
```

**Step 6: Verify**

- Teams page may temporarily break (fixed in Task 8)
- `D.teamMembers("boss-sintrellia")` should return full hero data

**Step 7: Commit**

```bash
git add app/data/teams.js
git commit -m "feat: normalize teams.js members and frequency table to id references"
```

---

### Task 7: Normalize artifacts.js and builds.js

**Files:**
- Modify: `app/data/artifacts.js`
- Modify: `app/data/builds.js`

**Step 1: Add id (slug) to each artifact in owned[]**

```js
{
  id: "thunder-deitys-spear",
  name: "Thunder Deity's Spear",
  rarity: "Mythic",
  ...
  equippedOn: 20740,  // was equipped_on: "Nastjenka"
  ...
}
```

Generate slug: `name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')`

**Step 2: Convert equipped_on from name to id**

Before: `equipped_on: "Nastjenka"`
After: `equippedOn: 20740`

**Step 3: Remove redundant sections from artifacts.js**

Remove entirely (all duplicated in `owned[]`):
- `heroes_without_artifact[]` — derivable
- `lothair_notes.artifact_candidates` — move to plan.js or keep inline

Keep: `owned[]`, `not_owned[]`, `crystal_budget`, `upgrade_order`, `shop_mythics_s1`, `refine_info`

**Step 4: Clean builds.js — remove duplicated fields**

Before:
```js
{ name: "Nastjenka", heroId: 20740, priority: 1, element: "Lightning", school: "Dauntless", role: "DPS carry", rarity: "Legendary", ... }
```

After:
```js
{ id: 20740, priority: 1, ... }
```

Remove: `name`, `heroId`, `element`, `school`, `role`, `rarity`
Keep: `id`, `priority`, `talent`, `gear`, `artifact`, `captain`, `tips`, `sources`

**Step 5: Convert artifact references in builds.js**

In `artifact.current`, `artifact.bis`, `artifact.alternatives[]` — keep as name strings for now (artifacts don't have stable numeric IDs from external sources). The slug ID can be used if needed.

**Step 6: Verify**

- Artifacts page may temporarily break
- `D.artifact("thunder-deitys-spear")` should return artifact data
- `D.artifactForHero(20740)` should return Thunder Deity's Spear

**Step 7: Commit**

```bash
git add app/data/artifacts.js app/data/builds.js
git commit -m "feat: normalize artifacts.js and builds.js to id references"
```

---

### Task 8: Update all app components to use D.* API

**Files:**
- Modify: `app/js/components/heroes.js`
- Modify: `app/js/components/dashboard.js`
- Modify: `app/js/components/teams.js`
- Modify: `app/js/components/builds.js`
- Modify: `app/js/components/artifacts.js`
- Modify: `app/js/components/tierlist.js`
- Modify: `app/js/components/sidebar.js`
- Modify: `app/js/components/gear.js`
- Modify: `app/js/utils/render.js`

This is the largest task. Each component needs to be updated to use `D.*` lookups instead of reading duplicated fields directly.

**Step 1: Update render.js**

- `R.heroIdByName(name)` → delegate to `D.heroIdByName(name)` (keep R.heroIdByName as alias for compatibility)
- `R.heroLink(name)` → update to find hero via `D.heroByName(name)` instead of searching `DATA_MY_ROSTER` by name (roster entries no longer have `name`)

**Step 2: Update heroes.js component**

This component has ~40 references to `hero.name`, `h.name` etc. from `DATA_MY_ROSTER`. After normalization, roster entries have `id` only.

Key changes:
- Hero list: iterate `D.myRoster()` instead of `DATA_MY_ROSTER` directly — returns merged objects WITH `name` from heroes.js
- Each hero card: use `D.heroFull(id)` for merged data
- Filters: use `hero.element`, `hero.rarity` etc. from the full merged object
- Role groups: use `D.roleGroups(id)` or keep using `DATA_ROLE_GROUPS[hero.name]` (migrated in Task 10)
- Hero detail panel: use `D.heroFull(id)` + `D.artifactForHero(id)`
- Loadout tag: use `D.artifactForHero(id)?.name` instead of `h.artifact`

**Step 3: Update dashboard.js component**

Key changes:
- Legendary count: `D.myRoster().filter(h => h.rarity === 'Legendary').length` instead of `DATA_PROFILE.legendary_heroes.length`
- Skill scroll plan: `item.id` instead of `item.hero` — use `D.hero(item.id)?.name` for display, `R.heroImg(item.id, 24)` for image
- Arriving heroes: `item.id` instead of `item.name` — use `D.hero(item.id)?.name` for display
- Season progress: if it reads `legendary_heroes`, switch to `D.myRoster()`
- Resource display: still reads `DATA_PROFILE.resources` directly (no change)

**Step 4: Update teams.js component**

Key changes:
- Each team member display: `D.hero(member.id)` to get name, element, school
- Element color: `R.elementColor(D.hero(member.id)?.element)` instead of `R.elementColor(m.element)`
- Hero images: `R.heroImg(member.id, 32)` (already uses numeric id)
- Captain display: `D.hero(captain.id)?.name`
- Hero frequency table: `D.hero(h.id)` for name, element, school, role

**Step 5: Update builds.js component**

Key changes:
- Hero info: `D.hero(build.id)` for name, element, school, rarity
- Display: merge `D.hero()` data with build-specific fields
- Remove fallback `b.heroId || R.heroIdByName(b.name)` — just use `build.id`

**Step 6: Update artifacts.js component**

Key changes:
- Equipped hero: `D.hero(artifact.equippedOn)?.name` instead of `artifact.equipped_on`
- Hero images: `R.heroImg(artifact.equippedOn, 24)`

**Step 7: Update tierlist.js component**

Key changes:
- If hero has `id`: use `D.hero(tier.id)` for name/element cross-ref
- Hero images: `R.heroImg(tier.id, ...)`
- Filters work on `tier.name`, `tier.ac_tier` etc. (mostly unchanged)

**Step 8: Update gear.js component**

Key changes:
- `R.heroIdByName(h)` calls still work (delegates to `D.heroIdByName(h)`)
- No structural changes needed — gear loadouts reference heroes by name string, which is fine (gear data file not normalized)

**Step 9: Update sidebar.js**

Key changes:
- Hero count: `D.myRosterRaw().length` or `DATA_MY_ROSTER.length`
- If it reads `DATA_PROFILE.legendary_heroes`, switch to `D.myRoster().filter(...)`

**Step 10: Verify ALL pages in browser**

Open each page and verify:
- Dashboard: resource counts, legendary count, season progress, skill scroll plan shows hero names/images, arriving shows hero names
- Heroes: all heroes listed with correct names, images, element badges, loadout tags, filters work, detail panel works
- Teams: all teams show members with correct names and element dots
- Builds: hero names and build info correct
- Artifacts: equipped hero names correct
- Tier list: all entries show correctly, filters work
- Gear: loadout hero images show correctly

**Step 11: Commit**

```bash
git add app/js/components/*.js app/js/utils/render.js
git commit -m "feat: update all components to use D.* lookup API"
```

---

### Task 9: Clean up tiers.js — remove duplicated fields

**Files:**
- Modify: `app/data/tiers.js`

**Step 1: Remove duplicated fields**

Remove from each entry: `element`, `rarity`, `season`
Keep: `id`, `name` (informative), `role` (HH role — NOT school), `ac_tier`, `hh_overall`, `hh_type`, `ratings`, `di_rank`, `di_avg`, `di_ratings`

Note: Keep `name` because some tiers.js heroes may not exist in heroes.js (303 vs 297). Also useful for debugging.

Note: Keep `role` (HH role like "Tank"/"DPS") — this is tier-list-specific classification, not from heroes.js. The `_tierSafe()` helper in data.js already excludes `role` from the merge to prevent collision.

**Step 2: Verify tier list page still works**

- Tier list should display correctly with element/rarity from `D.hero(id)` fallback
- Heroes without id match should still display using their `name` field

**Step 3: Commit**

```bash
git add app/data/tiers.js
git commit -m "refactor: remove duplicated fields from tiers.js"
```

---

### Task 10: Migrate DATA_ROLE_GROUPS to id keys

**Files:**
- Modify: `app/data/my-roster.js`
- Modify: `app/js/utils/data.js` (if needed)
- Modify: `app/js/components/heroes.js` (if needed)

**Step 1: Convert DATA_ROLE_GROUPS keys from names to ids**

Before:
```js
window.DATA_ROLE_GROUPS = {
  "Nastjenka": ["AoE", "Burst"],
  "Sutha": ["Burst"],
  ...
};
```

After:
```js
window.DATA_ROLE_GROUPS = {
  20740: ["AoE", "Burst"],    // Nastjenka
  10033: ["Burst"],            // Sutha
  ...
};
```

**Step 2: Verify D.roleGroups() in data.js**

`D.roleGroups(id)` already uses numeric id lookup (was updated in Task 2). Verify it works:
```js
D.roleGroups(20740) // should return ["AoE", "Burst"]
```

**Step 3: Update heroes.js component if it accesses DATA_ROLE_GROUPS directly**

Change any `DATA_ROLE_GROUPS[hero.name]` to `D.roleGroups(hero.id)`.

**Step 4: Verify heroes page filters still work**

**Step 5: Commit**

```bash
git add app/data/my-roster.js app/js/components/heroes.js
git commit -m "refactor: migrate DATA_ROLE_GROUPS to numeric id keys"
```

---

### Task 11: Final verification and cleanup

**Files:**
- Possibly: `app/data/decisions.js`, `app/data/plan.js`, `app/data/mechanics.js`

**Step 1: Minimal cleanup of decisions.js, plan.js, mechanics.js**

These files use hero names in free-text strings. Do NOT refactor free text. Only convert structured hero references if any exist (e.g., `mechanics.js key_heroes` arrays could optionally use id, but not required).

**Step 2: Full browser verification**

Test every page:
- [ ] Dashboard loads, resources correct, legendary count correct, skill scroll plan correct, arriving correct
- [ ] Heroes page: all 137 heroes listed, filters work (element, rarity, role, tier, school), search works, detail panel opens with full info
- [ ] Teams page: all teams show with correct member names, element dots, captain info, hero frequency table correct
- [ ] Builds page: builds show with correct hero info
- [ ] Artifacts page: artifacts show with correct equipped hero names
- [ ] Tier list page: all 303 entries show, filters work
- [ ] Gear page: loadouts show hero images, piece assignments correct
- [ ] Plan page: loads correctly
- [ ] Decisions page: loads correctly

**Step 3: Check console for errors**

Open browser console, navigate all pages, ensure zero JS errors.

**Step 4: Final commit**

```bash
git add -A
git commit -m "refactor: complete data normalization — all files use numeric id as primary key"
```

---

## Summary of Changes

| File | Action | Scope |
|---|---|---|
| `app/data/heroes.js` | MODIFY | Rename `heroId` → `id`, `id` → `slug` |
| `app/js/utils/data.js` | CREATE | Lookup module with D.* API (safe merge, no field collisions) |
| `app/index.html` | MODIFY | Add data.js script tag |
| `app/data/tiers.js` | MODIFY | Add numeric id, remove duplicated fields |
| `app/data/my-roster.js` | MODIFY | Simplify to id + player data only |
| `app/data/profile.js` | MODIFY | Remove duplicated lists, convert names to id, keep guild/resources/scroll plan/soul imprints |
| `app/data/teams.js` | MODIFY | Members + captain + frequency table use id |
| `app/data/builds.js` | MODIFY | Remove duplicated hero identity fields, heroId → id |
| `app/data/artifacts.js` | MODIFY | Add slug id, convert equipped_on to equippedOn with numeric id |
| `app/js/utils/render.js` | MODIFY | Delegate heroIdByName to D.*, fix heroLink for normalized roster |
| `app/js/components/*.js` | MODIFY | All 8 components use D.* for cross-file lookups |
| `app/data/bets.js` | NO CHANGE | Historical snapshots |
| `app/data/gear.js` | NO CHANGE | References heroes by name in loadouts (acceptable) |
| `app/data/guides.js` | NO CHANGE | Free text |

## Execution Notes

- Task 1 (heroes.js rename) MUST happen first — all subsequent tasks depend on `id` being the numeric field.
- Tasks 2-7 are data changes. Task 8 is the component update that makes everything work together.
- After Task 4 (my-roster normalization), the Heroes page will temporarily break until Task 8 is completed. This is expected.
- The safest approach: do Tasks 1-7 (data), then Task 8 (components) in one session, verify, commit all together. Or commit each data file individually and batch the component update.
- Task 3 (adding id to tiers.js) requires mapping 303 hero names. Use the browser console script to generate the mapping, then apply it.
- `_tierSafe()` in data.js prevents `tier.name` and `tier.role` from overwriting hero fields during `heroFull()` merge.
- `gear.js` component needs minimal changes — it delegates to `R.heroIdByName()` which delegates to `D.heroIdByName()`.
