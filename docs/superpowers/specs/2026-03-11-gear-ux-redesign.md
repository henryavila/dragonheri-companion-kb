# Gear UX Redesign — Design Spec

## Problem
The current Gear page crams all 23 loadouts with full equipment details into a single view grouped by profile. Too much information on one screen. The user has two distinct needs that require different UIs:
1. **Daily use (95%):** "Which loadout does this hero use?" — fast lookup
2. **One-time setup:** "Show me every piece with photos so I can create the loadout in-game" — detailed reference

## Solution
Split the current Loadouts view into two tabs with different purposes, keeping Inventory and Sets tabs unchanged.

## Tab Structure

### Tab 1: Referência Rápida (default)
- **Purpose:** Fast hero→loadout lookup for daily use
- **Layout:** Table grouped by profile (11 groups) with colored headers
- **Group header:** Profile name, color, stat badges, loadout count
- **Table columns:** Hero (avatar+name) | Loadout (colored badge) | Sets (4 names compact) | Totals (summary stats) | Status (✅/🔄)
- **Interactions:**
  - Click hero name → opens hero detail panel
  - Click loadout badge → navigates to Guia de Montagem tab, scrolls to that loadout card
  - 🔄 shows tooltip with sharing details
- **Mobile:** Table collapses to stacked cards (hero + loadout badge + status only, no sets/totals columns)

### Tab 2: Guia de Montagem
- **Purpose:** Detailed reference with equipment photos for creating loadouts in-game
- **Layout:** Large cards, one per loadout, grouped by profile (same colored headers)
- **Each card:**
  - Header: hero avatar + name + loadout badge + status
  - 4 pieces in horizontal grid (weapon, helmet, armor, gloves):
    - Equipment photo via CDN (`_gearImg()`) — fallback to slot emoji if img is null
    - Slot label
    - Set name (mythic in orange with ⭐, legendary in white)
    - Main stat bold
    - Substats in gray
  - Footer: mythic effect + totals + sharing info
- **Mobile:** Piece grid becomes 2x2

### Tab 3: Inventário (unchanged)
### Tab 4: Sets (unchanged)

## Hero Detail Panel (Heroes page)
- Gear Loadout section stays compact (set names with slot icons, no detailed stats)
- Link destination changes: now points to Guia de Montagem tab (was generic Loadouts view)
- Gear filter (off → Com Gear → Sem Gear) unchanged

## Header
Stat cards stay: 23 Loadouts, 14 Sets, 50 Peças lv20, 4.3M Gold

## Data Layer
No changes to `gear_plans` data structure or `Gear.getPlanForHero()`. Change is purely UI — the `_renderLoadouts()` method is replaced by `_renderQuickRef()` and `_renderMontagem()`.

## Files Affected
- `app/js/components/gear.js` — replace `_renderLoadouts` with two new renderers, update tab logic
- `app/js/components/heroes.js` — update loadout link destination (Guia de Montagem tab)
