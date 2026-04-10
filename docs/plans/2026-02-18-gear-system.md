# Gear System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extract all 66 gear pieces from screenshots, build optimized gear loadouts per hero profile, and show upgrade priority given gold constraints.

**Architecture:** Single data file `app/data/gear.js` (window.DATA_GEAR) with sets catalog, full inventory, hero profiles with stat weights, generated loadouts, and upgrade priority. New companion app component `app/js/components/gear.js` to visualize loadouts.

**Tech Stack:** Vanilla JS, Tailwind CSS (CDN), no build step. Same patterns as existing components (R.el, DATA_* globals).

---

### Task 1: Extract gear data from all 66 screenshots

**Files:**
- Create: `app/data/gear.js`

**Step 1: Read all weapon screenshots (15 pieces)**

Read each image in `data/gears/weapon/` and extract: name, set, level, primary stat, secondary stats.

**Step 2: Read all armor screenshots (24 pieces)**

Read each image in `data/gears/armor/`.

**Step 3: Read all helmet screenshots (14 pieces)**

Read each image in `data/gears/helmet/`.

**Step 4: Read all glove screenshots (13 pieces)**

Read each image in `data/gears/glove/`.

**Step 5: Create `app/data/gear.js` with sets and inventory**

Write the file with all extracted data. Structure:

```js
window.DATA_GEAR = {
  updated: "18/Fev/2026",

  sets: [
    { id: "set-id", name: "Set Name", bonus_2: "...", bonus_3: "..." }
  ],

  inventory: [
    {
      id: "w01", name: "Piece Name", slot: "weapon",
      set: "set-id", rarity: "Legendary", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [
        { stat: "Enlightenment", value: 30 },
        { stat: "HP", value: 1524 }
      ]
    }
  ]
};
```

**Step 6: Commit**

```bash
git add app/data/gear.js
git commit -m "feat: add gear inventory data (66 pieces from screenshots)"
```

---

### Task 2: Define hero profiles and stat weights

**Files:**
- Modify: `app/data/gear.js`
- Reference: `app/data/builds.js` (existing stat priorities per hero)
- Reference: `app/data/teams.js` (which heroes are actively used)

**Step 1: Analyze builds.js to identify distinct gear profiles**

Read all builds and group heroes by stat priority pattern:
- DPS Crit (ATK > Crit Rate > Crit Damage) — Nastjenka, Garett, Sigrid, etc.
- DPS ATK Pure (ATK > Skill Haste) — Ladehlia, Lossenia
- Tank HP (HP > DEF > Skill Haste) — Eurion, Torrin, Frurbath
- Support Accuracy (Accuracy > HP > Skill Haste) — Hochadir, Heksandra
- etc.

**Step 2: Add hero_profiles section to gear.js**

```js
hero_profiles: [
  {
    id: "dps-crit",
    name: "DPS Crit",
    description: "DPS que escala com Crit (Nastjenka, Garett, Sigrid)",
    heroes: ["Nastjenka", "Garett", "Sigrid"],
    stat_weights: { "ATK": 5, "ATK%": 10, "Crit Rate": 9, "Crit Damage": 8, "ATK Speed": 6, "HP": 1, "HP%": 1, "DEF": 1, "DEF%": 1, "Accuracy": 2, "Enlightenment": 3, "Skill Haste": 3 },
    ideal_sets: ["echoes-of-war"],
    pieces_needed: 1  // how many complete loadouts needed
  }
]
```

**Step 3: Commit**

```bash
git add app/data/gear.js
git commit -m "feat: add hero gear profiles with stat weights"
```

---

### Task 3: Generate loadouts and upgrade priority

**Files:**
- Modify: `app/data/gear.js`

**Step 1: Score every piece against every profile**

For each piece, calculate score = sum(stat_weight * stat_value) for all stats. Normalize by max possible.

**Step 2: Assign pieces to profiles optimally**

Greedy allocation: highest-priority profile picks best pieces first. Each piece can only be in one loadout.

**Step 3: Add loadouts section**

```js
loadouts: [
  {
    profile: "dps-crit",
    assigned_to: ["Nastjenka"],
    pieces: { weapon: "w01", armor: "a05", helmet: "h03", gloves: "g02" },
    set_bonuses: ["echoes-of-war (2pc)"],
    total_stats: { ATK: 500, "ATK%": 19.4 },
    score: 87.5
  }
]
```

**Step 4: Add upgrade_priority section**

```js
upgrade_priority: {
  gold_available: 13822000,
  cost_per_piece: 528150,
  max_upgradeable: 26,
  priority: [
    { id: "w01", loadout: "dps-crit", reason: "Core DPS weapon", level: 1 },
    // ... ordered by importance
  ],
  skip: [
    { id: "a12", reason: "Not in any active loadout" }
  ]
}
```

**Step 5: Commit**

```bash
git add app/data/gear.js
git commit -m "feat: add gear loadouts and upgrade priority"
```

---

### Task 4: Add companion app component

**Files:**
- Create: `app/js/components/gear.js`
- Modify: `app/index.html` (add script tags)
- Modify: `app/js/components/sidebar.js` (add menu item)

**Step 1: Add gear.js data script to index.html**

In `app/index.html`, after line 51 (`builds.js`), add:
```html
<script src="data/gear.js"></script>
```

**Step 2: Create gear component**

Create `app/js/components/gear.js` following the pattern of existing components (Builds, Artifacts). Show:
- Loadouts as cards (hero profile name, pieces, set bonuses, total stats)
- Upgrade priority list with gold cost
- Pieces not in any loadout (spare)

**Step 3: Add to sidebar**

In `app/js/components/sidebar.js`, add item after 'builds':
```js
{ id: 'gear', label: 'Gear', icon: '\u{1F6E1}' }
```

**Step 4: Add gear component script to index.html**

After builds component script:
```html
<script src="js/components/gear.js"></script>
```

**Step 5: Register in app.js route handler**

Check `app/js/app.js` for the routing pattern and add gear component.

**Step 6: Commit**

```bash
git add app/js/components/gear.js app/index.html app/js/components/sidebar.js app/js/app.js
git commit -m "feat: add gear component to companion app"
```
