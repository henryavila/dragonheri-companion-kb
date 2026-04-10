# Gear Plans — Resumo (11/Mar/2026)

## Status
- **23 gear plans completos** → `app/data/gear.js` → `gear_plans` array
- **Pieces = structured objects** (slot/set/mythic/lv/img/main/subs) — não mais strings
- **Referência:** `docs/gear-plans.md` (474 linhas, tabelas detalhadas)
- **Inventário catalogado:** 58 weapons, 60 helmets, 30 armors, ~15 gloves em `gear-inventory.js`
- **Todos os times verificados** — zero conflitos de peças

## Princípios de Alocação
1. **Mythic 1pc > Legendary set bonus** — efeitos especiais são multiplicadores, não aditivos
2. **Stats individuais S-tier > set bonus medíocre** — Nastjenka tem 4 sets diferentes mas 67% CritR + 67% CritD
3. **Sharing chains** — heróis que NUNCA estão no mesmo time compartilham peças (gear swap grátis)
4. **Perfil de stats > herói individual** — peças alocadas por profile, não por nome

## Mythic Set Assignments (confirmado)
| Mythic Set | Efeito | Herói(s) |
|---|---|---|
| Fearless Challenge | +16% dmg vs >50% HP | Nastjenka (weapon) |
| Death Record | +20% Derivative no alvo | Flora (armor+gloves), Lothair (gloves) |
| Impregnable | Buffs enhanced + indispellable | Flora (weapon), Acilia (helmet) |
| Magic Crystal Ref. | +ATK = 300% ACC | Sutha (weapon), Hochadir (helmet), Lossenia (helmet) |
| Chaos Symbiosis | +6% ATK/School ally | Lossenia (weapon), Voresh (weapon+helmet) |
| Schadenfreude | Debuff → 2% HP heal | Vinyara (armor), Voresh (armor) |
| Iron Bastion | Crit recv → -30% CritR atacante | Auster (armor), Tamar (gloves) |
| Sky Code Treaty | Shield → dispel 1 debuff | Huberg (weapon) |
| Ancestral Guidance | 50% Lifesteal basics | Torrin (gloves) |

## Sharing Chains (7 chains)
| Peça | Donos | Nunca se cruzam |
|---|---|---|
| IMG_2861 (Chaos weapon) | Voresh↔Tamar↔Lucien | ABattlefield/Fae → G.Curse → Arena |
| IMG_2841 (Magic helmet) | Hochadir↔Flora | Goblin/Ice → Fire |
| IMG_2860 (Chaos helmet) | Huberg↔Lothair | Radiance → Poison |
| w04 (Exec weapon) | Auster↔Garius | Ice/Boss → Radiance |
| h13 (Tides helmet) | Auster↔Catherine | Ice/Boss → Radiance |
| w13+a20 (Tides+Pupp) | Hochadir↔Eches | Goblin/Ice → G.Rot/Tempest |
| w02 (Rhaps weapon) | Sintrellia↔Catherine | Tempest/Flame → Radiance |

## Top Stats Alcançados
- **Nastjenka:** CritR 67.2%, CritD 67% (melhor DPS de gear)
- **Torrin:** Enlight 264 (melhor healer de gear)
- **Catherine:** Enlight 174 (2º melhor healer)
- **Flora:** Enlight 138 + Death Record +20% Deriv (melhor Derivative)
- **Hochadir:** ACC 172 + Magic Crystal (+516 ATK flat!)
- **Eurion:** Double 2pc (Blue Oak + Tundra) = DEF+20%, HP+20%, ACC+40, Skill Haste+20

## Gaps Identificados
- **3 heróis sem helmet lv20:** Tamar (h15 lv0), Lucien (h11 lv0), Eches (h10 lv0)
- **Prioridade:** Próximo helmet com ACC → Tamar. Com HP → Lucien
- **Garius:** Executioner 3pc é sub-optimal (set DPS em tank), mas peças Executioner tinham os melhores subs de DEF
