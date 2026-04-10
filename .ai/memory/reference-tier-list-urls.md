---
name: Tier List URLs e Status
description: URLs das 3 fontes de tier list e seus status de disponibilidade (atualizado 09/Abr/2026)
type: reference
originSessionId: fa3f31e8-a4dd-4a13-a466-b6655ae9fd7a
---
## Tier List Sources

### AllClash (AC)
- **URL:** https://www.allclash.com/the-best-dragonheir-silent-gods-characters-tier-list/
- **Status:** ATIVO (Abr/2026, Season 5)
- **Sistema:** S/A/B/C/D (não usa mais SS)
- **Dados locais:** `data/allclash-tiers-2026-04-09.json` (290 heróis)
- **NOTA:** URL antiga `/dragonheir-tier-list/` dá 404. Usar a URL acima.

### HellHades (HH)
- **URL:** https://hellhades.com/dragonheir/tier-list/
- **Status:** ATIVO mas SÓ COBRE S1 heroes (~225)
- **Sistema:** 0-5 por atividade
- **Limitação:** Heróis S2+ não têm ratings no HH

### DragonHeir.info (DI)
- **URL:** dragonheir.info (API CDN)
- **Status:** ATIVO, cobre S1-S6 (223 heróis com ratings)
- **Sistema:** 0-5 por atividade, avg = média. Posição no ranking = DI#
- **Dados locais:** `app/data/tiers.js` (223 heróis), `data/raw/tier.json` (163 heróis raw)
- **NOTA:** Heróis S4-S5 ainda sem ratings na DI (avg=0)

## Discrepâncias conhecidas
- DI tende a rankar mais alto que AC (endgame vs general)
- **AC e DI concordarem = alta confiança**
- **AC S + DI sem rating = AC confia no hero (S4-S5 novos)**
- **AC B + DI 4.875 = grande divergência** (ex: Theodemer — AC subestima?)

## Dados locais para análise
- `data/chest-heroes-analysis.json` — 12 heróis dos chests S6, todas fontes consolidadas
- `data/allclash-tiers-2026-04-09.json` — 290 heróis AC tier completo
