---
name: DPS Crit Benchmark
description: In-game stats benchmark for 5 DPS Crit heroes with loadouts, rune analysis, and optimization insights (2026-03-11)
type: project
---

# DPS Crit Benchmark (11/Mar/2026)

## Formula
DPS Index = ATK × (1 + CritR × CritD)
- CritR cap = 100%. Excess is wasted.
- CritD = bonus on crit (50% base + gear/runes/artifacts)

## Ranking (in-game stats, includes gear + runes + artifacts + affinity)

| # | Hero | Loadout | ATK | CritR | CritD | DPS | Power |
|---|------|---------|-----|-------|-------|-----|-------|
| 1 | Nastjenka | Crit 1 | 3748 | 99.4% | 262.2% | 13,519 | 44,426 |
| 2 | Divine Ascetic | Crit 2 + Clean Sweep | 3405 | 90.6% | 169.1% | 8,621 | — |
| 3 | Ladehlia | Crit 4 | 3582 | 67.0% | 201.7% | 8,422 | 43,433 |
| 4 | Sutha | Crit 3 | 3629 | 71.4% | 150.8% | 7,536 | 37,853 |
| 5 | Huberg | Crit 5 | 4108 | 26.7% | 179.8% | 6,079 | — |

## Key Insights

### Rune Analysis Pattern
- **High ATK hero** (3400+): CritD rune > ATK rune (diminishing returns on ATK)
- **Low ATK hero** (2000-2600): ATK rune > CritD rune (flat ATK has more impact)
- **Rule of thumb:** Never trade CritR+CritD for small ATK gains. ATK flat is only worth it when ATK is the bottleneck.

### Huberg — Hidden Potential
- Highest ATK bruto (4108) + strong CritD (179.8%), bottleneck = CritR 26.7%
- With CritR gear: 50% → 7,801 | 70% → 9,278 (#2) | 90% → 10,755 (rival Nastjenka)
- **PRIORITY: CritR main/subs gear for Huberg**

### DA — Clean Sweep Upgrade
- Swapped Cyril's Whisper gloves (CritR 40 main) → Clean Sweep mythic (ATK% 40 main)
- Result: ATK +747, CritR +1.5%, CritD +0.8% → **+29.8% DPS**
- Lost Cyril 2pc but raw ATK gain compensates massively (DA had extremely low ATK at 2658)

### Nastjenka — Dominant
- 99.4% CritR near-perfect + 262.2% CritD = 60%+ ahead of #2
- CritR overcap waste: only 0.6% (near-optimal)

### Stat Balance Insight
- CritR × CritD product matters most. Having one very high and one very low is suboptimal.
- Exception: if ATK is also very low (like DA was at 2658), fixing ATK first gives bigger returns.
