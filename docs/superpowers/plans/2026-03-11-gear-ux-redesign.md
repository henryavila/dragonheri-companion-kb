# Gear UX Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the Gear loadouts view into two tabs — a compact quick-reference table (daily use) and a detailed assembly guide with equipment photos (one-time setup).

**Architecture:** Replace the single `_renderLoadouts()` method in `gear.js` with two new renderers: `_renderQuickRef()` (grouped table) and `_renderMontagem()` (detailed cards with equipment images). Update tab config from 3 to 4 tabs. Update heroes.js loadout link to target the montagem view.

**Tech Stack:** Vanilla JS, Tailwind CSS (CDN), no framework, no build step. Visual testing via Playwright. Deploy via `nexus push`.

**Spec:** `docs/superpowers/specs/2026-03-11-gear-ux-redesign.md`

---

## File Structure

| File | Action | Responsibility |
|---|---|---|
| `app/js/components/gear.js` | Modify (lines 73-180, 182-242) | Replace tabs config + `_renderLoadouts` + `_loadoutPlanCard` with 4-tab config + `_renderQuickRef` + `_renderMontagem` + `_montagemCard` |
| `app/js/components/heroes.js` | Modify (lines 480-488) | Update loadout link: `Gear._view = 'loadouts'` → `Gear._view = 'montagem'` |

No new files. No data changes. Purely UI refactor.

---

## Chunk 1: Implementation

### Task 1: Update tab configuration in gear.js

**Files:**
- Modify: `app/js/components/gear.js:73-78`

The current tabs array has 3 entries. Change to 4 tabs with new IDs.

- [ ] **Step 1: Update the tabs array and default view**

In `gear.js`, replace the tabs array at line 73-78:

```js
// OLD (line 73-78):
const tabs = [
  { id: 'loadouts', label: 'Loadouts' },
  { id: 'inventory', label: 'Inventario' },
  { id: 'sets', label: 'Sets' }
];

// NEW:
const tabs = [
  { id: 'quick-ref', label: 'Referência Rápida' },
  { id: 'montagem', label: 'Guia de Montagem' },
  { id: 'inventory', label: 'Inventário' },
  { id: 'sets', label: 'Sets' }
];
```

Also update the `_view` default on line 3:

```js
// OLD:
_view: 'loadouts',

// NEW:
_view: 'quick-ref',
```

- [ ] **Step 2: Update the _renderView switch statement**

In `gear.js` line 105-112, replace the switch:

```js
// OLD:
switch (this._view) {
  case 'loadouts': this._renderLoadouts(el, data); break;
  case 'inventory': this._renderInventory(el, data); break;
  case 'sets': this._renderSets(el, data); break;
}

// NEW:
switch (this._view) {
  case 'quick-ref': this._renderQuickRef(el, data); break;
  case 'montagem': this._renderMontagem(el, data); break;
  case 'inventory': this._renderInventory(el, data); break;
  case 'sets': this._renderSets(el, data); break;
}
```

---

### Task 2: Implement _renderQuickRef (Referência Rápida tab)

**Files:**
- Modify: `app/js/components/gear.js:114-180` (replace `_renderLoadouts`)

This replaces `_renderLoadouts` with a compact grouped table. Keep `profileColors`, `profileStats`, `profileOrder` and the grouping logic. Replace the card grid with table rows.

- [ ] **Step 1: Write `_renderQuickRef` method**

Replace the entire `_renderLoadouts` method (lines 114-180) with:

```js
  // ===== QUICK REFERENCE VIEW (compact table, daily use) =====
  _renderQuickRef(el, data) {
    const plans = data.gear_plans || [];
    if (!plans.length) {
      el.appendChild(R.el('div', { className: 'text-center text-gray-500 py-8', textContent: 'Nenhum loadout definido.' }));
      return;
    }

    const { profileColors, profileStats, profileOrder, groups } = this._groupByProfile(plans);
    const container = R.el('div', { className: 'space-y-4' });

    for (const profileId of profileOrder) {
      const groupPlans = groups[profileId];
      if (!groupPlans) continue;
      const color = profileColors[profileId] || 'gold';
      const stats = profileStats[profileId] || [];

      const section = R.el('div', {
        className: `bg-surface-card rounded-lg border border-surface-hover border-l-2 border-l-${color} overflow-hidden`
      });

      // Profile header
      section.appendChild(R.el('div', { className: `flex items-center gap-2 px-3 py-2 bg-${color}/5 flex-wrap` }, [
        R.el('span', { className: `text-xs font-bold text-${color}`, textContent: profileId.toUpperCase().replace(/-/g, ' ') }),
        ...stats.map(s => R.el('span', {
          className: `text-[9px] px-1.5 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20`,
          textContent: s
        })),
        R.el('span', { className: 'text-[10px] text-gray-500', textContent: `${groupPlans.length} loadout${groupPlans.length > 1 ? 's' : ''}` })
      ]));

      // Table
      const table = R.el('table', { className: 'w-full text-xs' });

      // Header row (desktop only)
      table.appendChild(R.el('thead', { className: 'hidden md:table-header-group' }, [
        R.el('tr', { className: 'text-[10px] text-gray-500 uppercase tracking-wide' }, [
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Herói' }),
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Loadout' }),
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Sets' }),
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Totais' }),
          R.el('th', { className: 'text-center px-2 py-1.5 font-medium w-8', textContent: '' })
        ])
      ]));

      const tbody = R.el('tbody');
      for (const plan of groupPlans) {
        tbody.appendChild(this._quickRefRow(plan, color));
      }
      table.appendChild(tbody);
      section.appendChild(table);
      container.appendChild(section);
    }

    el.appendChild(container);
  },

  _quickRefRow(plan, color) {
    const heroId = R.heroIdByName(plan.hero);
    const noConflict = !plan.sharing || !plan.sharing.length;
    const setNames = (plan.pieces || []).map(p => p.set.replace(/'s? .*/, '')).join(' · ');

    // Desktop row
    const row = R.el('tr', {
      className: 'border-t border-surface-hover/50 hover:bg-surface-hover/30 cursor-pointer hidden md:table-row',
      onClick: () => { if (heroId) Heroes._openDetail(heroId); }
    }, [
      // Hero
      R.el('td', { className: 'px-3 py-2' }, [
        R.el('div', { className: 'flex items-center gap-2' }, [
          heroId ? R.heroImg(heroId, 24, { height: 30, className: 'rounded' }) : null,
          R.el('span', { className: 'font-medium text-gray-200', textContent: plan.hero })
        ].filter(Boolean))
      ]),
      // Loadout badge (clickable → montagem)
      R.el('td', { className: 'px-3 py-2' }, [
        R.el('span', {
          className: `text-[10px] px-2 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20 font-bold cursor-pointer hover:bg-${color}/25`,
          textContent: plan.name,
          onClick: (e) => {
            e.stopPropagation();
            this._navigateToMontagem(plan.name);
          }
        })
      ]),
      // Sets
      R.el('td', { className: 'px-3 py-2 text-[10px] text-gray-500 max-w-[200px] truncate', textContent: setNames }),
      // Totals
      R.el('td', { className: 'px-3 py-2 text-[11px] font-semibold text-white', textContent: plan.totals || '' }),
      // Status
      R.el('td', { className: 'px-2 py-2 text-center text-[10px]', textContent: noConflict ? '✅' : '🔄',
        title: noConflict ? 'Sem conflito' : (plan.sharing || []).join(', ')
      })
    ]);

    // Mobile card (shown instead of row on small screens)
    const mobileCard = R.el('tr', {
      className: 'md:hidden border-t border-surface-hover/50',
      onClick: () => { if (heroId) Heroes._openDetail(heroId); }
    }, [
      R.el('td', { className: 'px-3 py-2', colSpan: '5' }, [
        R.el('div', { className: 'flex items-center gap-2 cursor-pointer' }, [
          heroId ? R.heroImg(heroId, 28, { height: 34, className: 'rounded' }) : null,
          R.el('div', { className: 'flex-1 min-w-0' }, [
            R.el('div', { className: 'flex items-center gap-1.5 flex-wrap' }, [
              R.el('span', { className: 'font-medium text-gray-200 text-xs', textContent: plan.hero }),
              R.el('span', {
                className: `text-[9px] px-1.5 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20 font-bold`,
                textContent: plan.name
              }),
              R.el('span', { className: 'text-[9px]', textContent: noConflict ? '✅' : '🔄' })
            ]),
            plan.totals ? R.el('div', { className: 'text-[10px] text-gray-500 mt-0.5', textContent: plan.totals }) : null
          ].filter(Boolean))
        ].filter(Boolean))
      ])
    ]);

    // Return both as a fragment — use DocumentFragment
    const frag = document.createDocumentFragment();
    frag.appendChild(row);
    frag.appendChild(mobileCard);
    return frag;
  },
```

- [ ] **Step 2: Add shared helpers extracted from _renderLoadouts**

Add `_groupByProfile` and `_navigateToMontagem` right after `_renderQuickRef`:

```js
  _groupByProfile(plans) {
    const profileColors = {
      'dps-crit': 'fire', 'dps-atk': 'fire',
      'atk-acc': 'lightning', 'atk-enlight': 'poison',
      'acc': 'lightning', 'enlight': 'radiance',
      'hp-acc': 'ice', 'hp-atk-acc': 'ice',
      'hp-enlight': 'ice', 'hp-def-enlight': 'ice',
      'def': 'ice'
    };
    const profileStats = {
      'dps-crit': ['ATK%', 'CritR', 'CritD'], 'dps-atk': ['ATK%'],
      'atk-acc': ['ATK%', 'ACC'], 'atk-enlight': ['ATK%', 'Enlight'],
      'acc': ['ACC'], 'enlight': ['Enlight'],
      'hp-acc': ['HP%', 'ACC'], 'hp-atk-acc': ['HP%', 'ATK%', 'ACC'],
      'hp-enlight': ['HP%', 'Enlight'], 'hp-def-enlight': ['HP%', 'DEF%', 'Enlight'],
      'def': ['DEF%']
    };
    const profileOrder = ['dps-crit', 'dps-atk', 'atk-acc', 'atk-enlight', 'acc', 'enlight', 'hp-acc', 'hp-atk-acc', 'hp-enlight', 'hp-def-enlight', 'def'];
    const groups = {};
    for (const p of plans) {
      if (!groups[p.profile]) groups[p.profile] = [];
      groups[p.profile].push(p);
    }
    return { profileColors, profileStats, profileOrder, groups };
  },

  _navigateToMontagem(loadoutName) {
    this._view = 'montagem';
    App.navigate('gear');
    setTimeout(() => {
      // Re-render with montagem view
      const content = document.getElementById('content');
      if (content) { content.innerHTML = ''; this.render(content); }
      setTimeout(() => {
        const target = document.getElementById('montagem-' + loadoutName.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 50);
  },
```

---

### Task 3: Implement _renderMontagem (Guia de Montagem tab)

**Files:**
- Modify: `app/js/components/gear.js:182-242` (replace `_loadoutPlanCard`)

Replace `_loadoutPlanCard` with `_renderMontagem` and `_montagemCard`.

- [ ] **Step 1: Write `_renderMontagem` method**

Replace `_loadoutPlanCard` (lines 182-242) with:

```js
  // ===== MONTAGEM VIEW (detailed cards with equipment photos) =====
  _renderMontagem(el, data) {
    const plans = data.gear_plans || [];
    if (!plans.length) {
      el.appendChild(R.el('div', { className: 'text-center text-gray-500 py-8', textContent: 'Nenhum loadout definido.' }));
      return;
    }

    const { profileColors, profileStats, profileOrder, groups } = this._groupByProfile(plans);
    const container = R.el('div', { className: 'space-y-6' });

    for (const profileId of profileOrder) {
      const groupPlans = groups[profileId];
      if (!groupPlans) continue;
      const color = profileColors[profileId] || 'gold';
      const stats = profileStats[profileId] || [];

      // Profile header
      container.appendChild(R.el('div', { className: 'flex items-center gap-2 flex-wrap' }, [
        R.el('span', { className: `text-sm font-bold text-${color}`, textContent: profileId.toUpperCase().replace(/-/g, ' ') }),
        ...stats.map(s => R.el('span', {
          className: `text-[10px] px-1.5 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20`,
          textContent: s
        })),
        R.el('span', { className: 'text-xs text-gray-500', textContent: `${groupPlans.length} loadout${groupPlans.length > 1 ? 's' : ''}` })
      ]));

      // Cards
      for (const plan of groupPlans) {
        container.appendChild(this._montagemCard(plan, color));
      }
    }

    el.appendChild(container);
  },

  _montagemCard(plan, color) {
    const heroId = R.heroIdByName(plan.hero);
    const noConflict = !plan.sharing || !plan.sharing.length;
    const slotLabels = { weapon: 'Weapon', helmet: 'Helmet', armor: 'Armor', gloves: 'Gloves' };

    const card = R.el('div', {
      className: `bg-surface-card rounded-lg p-4 border border-surface-hover border-l-2 border-l-${color}`,
      id: `montagem-${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    });

    // Header: hero portrait + name + loadout badge + status
    card.appendChild(R.el('div', { className: 'flex items-center gap-3 mb-3' }, [
      heroId ? R.heroImg(heroId, 40, { height: 48, className: 'rounded-lg cursor-pointer',
        onClick: () => Heroes._openDetail(heroId) }) : null,
      R.el('div', { className: 'flex-1' }, [
        R.el('div', { className: 'flex items-center gap-2 flex-wrap' }, [
          R.el('span', { className: 'text-sm font-bold text-gold', textContent: plan.hero }),
          R.el('span', {
            className: `text-[10px] px-2 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20 font-bold`,
            textContent: plan.name
          }),
          R.el('span', {
            className: `text-xs ${noConflict ? 'text-done' : 'text-yellow-400'}`,
            textContent: noConflict ? '✅' : '🔄',
            title: noConflict ? 'Sem conflito' : (plan.sharing || []).join(', ')
          })
        ]),
        R.el('span', { className: 'text-[10px] text-gray-500', textContent: `freq ${plan.freq}` })
      ])
    ].filter(Boolean)));

    // 4 pieces in horizontal grid
    const piecesGrid = R.el('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-2 mb-3' });
    for (const pc of (plan.pieces || [])) {
      const lvBad = pc.lv === 0;
      const pieceEl = R.el('div', {
        className: `bg-surface rounded-lg p-2 border ${pc.mythic ? 'border-mythic/40' : lvBad ? 'border-red-500/30' : 'border-surface-hover'} text-center`
      });

      // Equipment image or fallback emoji
      const img = pc.img ? this._gearImg(this._findSetPieceName(pc), 52) : null;
      if (img) {
        img.className = 'mx-auto mb-1.5 rounded-lg';
        img.style.width = '52px';
        img.style.height = '52px';
        pieceEl.appendChild(img);
      } else {
        const slotEmojis = { weapon: '⚔️', helmet: '🪖', armor: '🛡️', gloves: '🧤' };
        pieceEl.appendChild(R.el('div', {
          className: 'w-[52px] h-[52px] mx-auto mb-1.5 rounded-lg bg-surface-hover flex items-center justify-center text-2xl',
          textContent: slotEmojis[pc.slot] || '❓'
        }));
      }

      // Slot label
      pieceEl.appendChild(R.el('div', {
        className: 'text-[9px] text-gray-500 uppercase tracking-wider mb-0.5',
        textContent: slotLabels[pc.slot] || pc.slot
      }));

      // Set name
      pieceEl.appendChild(R.el('div', {
        className: `text-[10px] font-semibold mb-1 ${pc.mythic ? 'text-mythic' : 'text-gray-200'}`,
        textContent: (pc.mythic ? '⭐ ' : '') + pc.set
      }));

      // Main stat
      pieceEl.appendChild(R.el('div', {
        className: 'text-xs font-bold text-white mb-0.5',
        textContent: pc.main
      }));

      // Subs
      if (pc.subs && pc.subs.length) {
        pieceEl.appendChild(R.el('div', { className: 'text-[9px] text-gray-500 leading-relaxed' },
          pc.subs.map(s => R.el('div', { textContent: s }))
        ));
      }

      // Level warning
      if (lvBad) {
        pieceEl.appendChild(R.el('div', { className: 'text-[9px] text-red-400 mt-0.5 font-bold', textContent: '⚠ lv0' }));
      }

      piecesGrid.appendChild(pieceEl);
    }
    card.appendChild(piecesGrid);

    // Footer: mythic effect + set bonus + totals
    if (plan.set_bonus) {
      card.appendChild(R.el('div', { className: 'text-[10px] text-gold/80 mb-0.5', textContent: '🔗 ' + plan.set_bonus }));
    }
    if (plan.mythic_effect) {
      card.appendChild(R.el('div', { className: 'text-[10px] text-mythic mb-0.5', textContent: '⭐ ' + plan.mythic_effect }));
    }
    if (plan.totals) {
      card.appendChild(R.el('div', { className: 'text-xs font-bold text-white', textContent: plan.totals }));
    }

    // Sharing info
    if (!noConflict && plan.sharing) {
      for (const s of plan.sharing) {
        card.appendChild(R.el('div', { className: 'text-[9px] text-yellow-400/70 mt-0.5', textContent: '🔄 ' + s }));
      }
    }

    return card;
  },

  // Map structured piece to a name that _gearImg can look up
  _findSetPieceName(pc) {
    // Try to find the set piece name in _imgIds by matching set name + slot
    const slotSuffixes = { weapon: null, helmet: 'Helmet', armor: null, gloves: 'Gloves' };
    // Search _imgIds keys for matching set name
    for (const name of Object.keys(this._imgIds)) {
      if (name.toLowerCase().includes(pc.set.split(' ')[0].toLowerCase())) {
        const nameLower = name.toLowerCase();
        if (pc.slot === 'weapon' && !nameLower.includes('helmet') && !nameLower.includes('gloves') && !nameLower.includes('armor') && !nameLower.includes('light armor') && !nameLower.includes('heavy armor') && !nameLower.includes('robe') && !nameLower.includes('chain') && !nameLower.includes('hood') && !nameLower.includes('headgear') && !nameLower.includes('crown') && !nameLower.includes('cloak')) {
          return name;
        }
        if (pc.slot === 'helmet' && (nameLower.includes('helmet') || nameLower.includes('hood') || nameLower.includes('headgear') || nameLower.includes('crown'))) {
          return name;
        }
        if (pc.slot === 'armor' && (nameLower.includes('armor') || nameLower.includes('robe') || nameLower.includes('chain') || nameLower.includes('cloak'))) {
          return name;
        }
        if (pc.slot === 'gloves' && nameLower.includes('gloves')) {
          return name;
        }
      }
    }
    return pc.set; // fallback
  },
```

- [ ] **Step 2: Delete the old `_loadoutPlanCard` method**

The old `_loadoutPlanCard` (lines 182-242 originally) is fully replaced by `_montagemCard`. Verify it's gone.

---

### Task 4: Update heroes.js loadout link

**Files:**
- Modify: `app/js/components/heroes.js:480-488`

The loadout link in the hero detail panel currently navigates to `Gear._view = 'loadouts'`. Update to use `montagem` view.

- [ ] **Step 1: Update link target**

In `heroes.js`, find the onClick handler at line 480-487:

```js
// OLD:
onClick: (e) => {
  e.preventDefault();
  Gear._view = 'loadouts';
  App.navigate('gear');
  setTimeout(() => {
    const target = document.getElementById('loadout-' + plan.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 300);
},

// NEW:
onClick: (e) => {
  e.preventDefault();
  Gear._navigateToMontagem(plan.name);
},
```

---

### Task 5: Visual testing via Playwright

- [ ] **Step 1: Start local server**

```bash
cd "/mnt/e/OneDrive/Games/Dragon Heir" && mkdir -p dh && cp -r app/* dh/ && python3 -m http.server 8765
```

- [ ] **Step 2: Test Referência Rápida tab**

Navigate to `http://localhost:8765/dh/#gear`. Verify:
- Tab bar shows 4 tabs: "Referência Rápida" (active), "Guia de Montagem", "Inventário", "Sets"
- Table grouped by profile with colored headers
- Each row shows hero avatar, name, loadout badge, set names, totals, status icon
- Click hero name → opens hero detail panel
- Click loadout badge → switches to Guia de Montagem and scrolls to card

Screenshot: `screenshots/gear-quick-ref.png`

- [ ] **Step 3: Test Guia de Montagem tab**

Click "Guia de Montagem" tab. Verify:
- Cards grouped by profile with same headers
- Each card shows hero portrait, loadout badge, status
- 4 pieces in horizontal grid with equipment photos (where img exists), set name, main stat, subs
- Mythic pieces have orange border/text
- Footer shows mythic effect + totals

Screenshot: `screenshots/gear-montagem.png`

- [ ] **Step 4: Test hero detail panel link**

Navigate to `#heroes`, click a hero with a loadout (e.g., Nastjenka). Verify:
- Gear Loadout section shows loadout name as clickable link
- Click link → navigates to Gear page, Guia de Montagem tab, scrolled to Nastjenka's card

- [ ] **Step 5: Test mobile layout**

Resize browser to 375px width. Verify:
- Quick Reference: table rows collapse to compact cards (hero + badge + status)
- Montagem: piece grid becomes 2x2

Screenshot: `screenshots/gear-mobile.png`

- [ ] **Step 6: Clean up and deploy**

```bash
rm -rf "/mnt/e/OneDrive/Games/Dragon Heir/dh"
kill $(lsof -t -i:8765) 2>/dev/null
nexus push
```

---

### Task 6: Update memory

- [ ] **Step 1: Update MEMORY.md**

Update the "Gear Loadouts" section to reflect the new 4-tab structure and two view names (quick-ref, montagem).
