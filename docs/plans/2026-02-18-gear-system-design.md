# Gear System Design

## Goal
Map all equipment, generate optimized gear plans per hero profile, and prioritize which pieces to upgrade given limited gold.

## Architecture
Single file: `app/data/gear.js` (`window.DATA_GEAR`)

### Sections

1. **sets** — All gear sets with 2pc and 3pc bonuses
2. **inventory** — All 66 pieces with slot, set, level, primary stat, secondary stats
3. **hero_profiles** — Hero archetypes with stat priorities and weights (DPS Crit, DPS ATK Pure, Tank HP, Support Accuracy, etc.)
4. **loadouts** — Generated plans: which pieces go to which profile, with total stats and adequacy score
5. **upgrade_priority** — Gold budget, cost per piece, ordered list of which lv1 pieces to upgrade first

### Data Format

Each inventory piece:
- id, name, slot (weapon/armor/helmet/gloves), set reference
- rarity (all Legendary), level (1 or 8 currently)
- primary stat + value
- secondary stats (3-4) + values

Each loadout:
- hero_profile reference, assigned heroes
- 4 pieces (weapon + armor + helmet + gloves)
- active set bonuses, total stats summary, score

### Upgrade Priority Logic
- Pieces in active loadouts for primary heroes > secondary > unused
- Within loadouts: DPS gear > Tank > Support
- Budget: 528,150 gold/piece, ~13.8M available = 26 pieces

### Companion App
- New component showing loadouts with piece details
- Visual indication of piece level and upgrade priority

## Extraction Plan
1. Read all 66 screenshots, extract stats
2. Catalog all sets found
3. Define hero profiles based on builds.js data
4. Generate optimal loadouts
5. Calculate upgrade priority
