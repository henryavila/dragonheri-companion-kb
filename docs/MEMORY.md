# Dragon Heir — Memory

## Project Setup
- **Tipo:** Sub-projeto do Nexus (portal pessoal do Henry)
- **Local:** `E:\OneDrive\Games\Dragon Heir` (OneDrive, sincronizado)
- **URL:** https://nexus.henryavila.com/dh
- **Deploy:** Nexus compila e copia `app/` para rota `/dh` do portal
- **Comando:** `nexus push` para publicar
- **Sem git.** Versionamento é via OneDrive. Nexus gerencia o ciclo de vida.
- **Nexus hook:** `.claude/settings.local.json` → PostToolUse roda `nexus scan`

## Project Structure
- Game strategy web app for Dragonheir: Silent Gods
- All docs in Portuguese (BR)
- **ALL data in `app/data/*.js`** — NO .md files (except CLAUDE.md)
- .md files still exist on disk (backup only)
- **Operacional:** apesar de `app/data/*.js` ser a fonte canônica, mudanças em benchmarks salvos de times também precisam ser espelhadas em `dh/data/*.js` para manter o snapshot publicado consistente.

## Recent Session Notes
- **2026-03-24 — Planar Expedition:** `Vortex (novo time) = 13.250` na luta 2 contra `Symbiotic Giga Elementa (Lv220)`; score anterior salvo para Vortex era `7.141`. Lineup novo ainda nao foi normalizado no `teams.js`.
- **2026-03-23 — Planar Expedition:** benchmark atualizado para `Ice Elite = 11.199` e `Vortex = 7.141`; `Poison Full` ficou abaixo de 6k e não foi mantido como registro da luta 2.

## Data Files (single source of truth)
| File | Content |
|---|---|
| `app/data/heroes.js` | 297 heroes (skills, heroId, element, school, etc.) |
| `app/data/profile.js` | Player profile (resources, legendaries) |
| `app/data/teams.js` | Teams by activity + frequency table |
| `app/data/tiers.js` | 303 heroes (AC tier + HH ratings + DI rankings) |
| `app/data/mechanics.js` | Summoning, school bonds, combat, gear, cooking, game modes, resonance, chests |
| `app/data/guides.js` | Daily routine, beginner guide, resource management |
| `app/data/artifacts.js` | 115 artifacts + BiS assignments |
| `app/data/my-roster.js` | Henry's roster by element |
| `app/data/decisions.js` | Decision history |
| `app/data/plan.js` | Game plan phases |
| `app/data/bets.js` | Wager mode bets, analysis, results, learnings |

## Tier List Sources & Discrepancies
- **3 sources:** AllClash (AC), HellHades (HH), DragonHeir.info (DI)
- **DI evaluates S1 endgame meta** — survival mechanics rate higher
- **HH evaluates universal versatility** — rates per activity (0-5)
- **AC evaluates general power** — tier SS/S/A/B/C/D
- **When all 3 agree = high confidence** (e.g., Nastjenka, Lothair)
- HH "type" (Defense, etc.) is NOT the School Bond system

## School Bonds (7 real schools, confirmed in-game)
Toxin (Poison), Wild (Fire), Frost (Ice), Dauntless (Lightning), Summon (Necrosis), Rally (Radiance), Support (cross-element)

## Affinity Bonuses (updated 06/Mar — screenshots in-game em logs/)
- **Permafrost** (Ice+Necrosis) 3+: +20% ATK, +20% HP, ACC 50, RES 50, DEF 200, HP 2000, ATK 200
- **Wildfire** (Poison+Fire) 3+: +20% ATK, +20% HP, ACC 50, RES 20, DEF 200, HP 2000, ATK 200
- **Resplendence** (Lightning+Radiance) 3+: +20% ATK, +20% HP, ACC 50, DEF 200, HP 2000, ATK 200
- **5 heroes da mesma afinidade:** +20% Elemental Damage Bonus, +2% Damage Resistance
- **3 layers total:** (1) bonus base 3 heroes, (2) bonus extra 5 heroes, (3) Affinity Evolution (+20% per path, 4 of 6 chosen)
- **CORRECAO:** 5 heroes nao e mais "igual a 3" no estado atual da conta

## Screenshots
- **SEMPRE salvar em `screenshots/`** — NUNCA na raiz do projeto
- Ao usar Playwright `browser_take_screenshot`, passar `filename: "screenshots/nome.png"`

## Web App (Companion App)
- **Stack:** Vanilla JS, no framework, Tailwind CSS via CDN, no build step
- **Components:** `app/js/components/` — dashboard, heroes, teams, artifacts, tierlist, sidebar, slidePanel
- **Render helper:** `app/js/utils/render.js` — R.el(), R.heroImg(), R.heroIdByName()
- **Hero images:** CDN `https://i.dmzgame.com/dragonheir/img/hero/pic_hero_show_[heroId].png`
  - `heroId` (numeric) in `app/data/heroes.js`
  - Use `R.heroImg(heroId, size)` — lazy loading + onerror fallback
  - Images are portrait — use `rounded` (NOT `rounded-full`)
- **Subpath deploy (`/dh`):** App roda em `nexus.henryavila.com/dh`, NÃO na raiz do domínio
  - `<base href>` no `index.html` vem de `nexus.yaml` (`web.route`) via `scripts/build-web.sh` (ex.: `/dh/`)
  - `DataLoader` usa `./data/...` (com `./`) — scripts criados via `document.createElement('script')` precisam de path explícito relativo, senão resolvem da raiz do domínio
  - **NUNCA usar paths absolutos** (ex: `/data/heroes.js`) — sempre `./data/heroes.js`

## Heroes Data Structure
- **Fields:** id, name, element, rarity, school, season, type (Melee/Range), race, career, captain, skills, inspiration[], heroId
- **`career` is USELESS** — D&D classes not in game UI
- **NO role field exists** — functional roles need manual mapping
- **`type`** = only Melee/Range

## Team Building — CRITICAL (detalhes em `team-building.md`)
- **Skills PRIMEIRO, ratings DEPOIS.** Ratings são tiebreakers.
- **Papéis funcionais:** Applicator, Detonator, Amplifier, Enabler, Self-sufficient, Survival Core, Utility
- **Amplificador > Utility** quando survival está garantido (+131% DPS)
- **Captain Skill:** 1 por time, auras NÃO stackam (só captain ativa)
- **Chains:** Frost, Summon, Dauntless, Immortality (Eurion+Torrin)
- **Herói 3.5 COM sinergia > herói 5.0 SEM sinergia**
- **Eurion+Torrin:** Universal survival module, confirmed in 7+ activities. Obrigatório em Lv18+
- **Imortalidade > Burst** em dungeons difíceis (testado AB, G.Curse, Vortex, Frey, Flame Domain Lv18)
- **Core Summon Universal:** Ladehlia+Sintrellia+Eurion = base flexível. 2 flex slots adaptam por boss (Acilia/Eches/Vinyara + Torrin/DPS). Testado: Flame Domain Lv18, Tempest Domain Lv17
- **Acilia >> Isitarian** em Domains — salto de Lv14 apertado → Lv18 super fácil (Flame Domain). Legendary stats + Debuff Immunity >>> Epic B stats
- **Vinyara:** MVP multi-dungeon — auto-resist Stun (fundo), dispel buffs, shield bloqueia HP drain
- **Vinyara dispel > Voresh Buff Prohibition** em bosses que resistem Prohibition (ex: G.Curse)
- **Permafrost ACC +50** ajuda Vinyara/Voresh acertar dispels — fator crítico
- **Sutha é MELEE** — não pode ir no fundo (posição de Stun bait)
- **Sutha ≈ DA** quando aura não stacka (Nastjenka captain). DA com Kui Crown é equivalente
- **Wild Fire Core (26/Fev):** Flora(DI#1)+Errich+Felicity+Caspar+Tonalnan = feedback loop exponencial. Errich +2 dice → Flora familiar triggers → Felicity multi-beam → Caspar knives. Dawn Pipe Organ em Flora buffa todos ranged. Ring of Scarlet Sorcerer em Felicity (+10% skill dmg on dice >=5). **TIMES REFATORADOS 26/Fev.**

## Team Overhaul (26/Fev) — 6 times por elemento
- **Temporal Vortex:** Flora substitui Rhash. Time EXATO do AllClash. 5 Wild + 5 Ulceration.
- **Time Fire/Wild:** Flora+Caspar+Errich+Felicity+Tonalnan. Wild Fire Synergy Chain. Só pra Temporal Vortex (AllClash diz Wild só vale pra TV).
- **Time Ice/Frost:** Auster+Lossenia+Hochadir+Torrin+Eurion. 4 Ice + 1 Necrosis (Torrin). 3 Frost school. **Torrin é NECROSIS, não Ice.**
- **Time Poison:** Lothair+Durango+Vicana+Jathalea+Ergander. **Ergander >> Frurbath** (DI#23, 5.0 12/13, Taunt 5s + Immortality 10s vs Frurbath DI#82).
- **Time Necrosis/Summon:** Ladehlia+Sintrellia+Eurion+Torrin+Ghul'ende. **Ghul'ende >> Isitarian** (5.0 13/13, AC S, 720% AoE + Cleanse + Heal).
- **Time Radiance/Rally:** Lorentheel(Insp.3)+Huberg+Acilia+Catherine+Garius. 5 Resplendence. Huberg captain +30% ATK.
- **Frequência atualizada:** Eurion (9), Torrin (8), Nastjenka (6), Flora (5), Ladehlia (4)

## Skill Upgrades (Legendary Skill Scrolls)
- 8 níveis/herói (2 skills × 4). Maxar > Espalhar. DPS > Tanks > Supports

## Wager Mode (Betting)
- **File:** `app/data/bets.js` — bets, archetypes, learnings, analysis_factors
- **Screenshots:** `logs/` folder (3 images per round: matchup + blue stats + red stats)
- **Flow:** Henry posts images + hero names → search ALL hero/artifact data (NEVER deduce) → analyze → pick → save → record result → update learnings + weights
- **ALWAYS:** Analyze images, search hero data in files, check exclusive artifacts, save bet_population
- **Record:** 1W-1L (50%), vs majority 1W-1L. Streak: +1
- **Rounds analyzed:** 1 (LOSS), 2 (WIN), 3 (PENDING), 12 (PENDING)
- **12 factors (updated weights):** Affinity (9), DPS quality (9), School Bond (8), DI ranking (8), Kill condition (7), Healing (7), Artifact (7), Anti-buff (7), Tier quality (6), Survivability (6), Sustained DPS (5), Resurrection (4)
- **12 learnings saved.** Key insights:
  - L1: 1 elite DPS + support VENCE summon army
  - L2: Healing massivo anula Summon Derivative
  - L3: DI rank é MELHOR preditor que AC tier no Wager
  - L6: Confiar no score quantitativo, não overridar
  - L9: Twitch + Lothair = feedback loop MULTIPLICATIVO (Twitch superou Lothair em DPS!)
  - L10: Poison chain (deterministic) >>> Wild dice (RNG)
  - L12: Maioria popular NÃO é indicador confiável (1W-1L)
- **6 archetypes:** frost-chain-4, full-support-4, summon-army-5, hyper-protect-1dps-5, poison-chain-5, wild-dice-burst-5
- **Known brutal combos:** Twitch+Lothair (Poison feedback loop), Frost chain (Lossenia+Hvitar), Wild Fire engine (Flora+Errich+Felicity+Caspar)

## Artifact Shop S1 (confirmado 2026-02-14)
- **22 Mythics na loja** — lista em `app/data/artifacts.js` → `shop_mythics_s1`
- **NAO na S1:** Giant Turtle Shell, Tempest War Drum, Everlasting Diamond, Swamp Toadstool, Misty Conch, Dreamland Globe, Ravatrix's Roots
- **18 Mythics owned** (6 originais + 10 comprados 24/Fev + 2 comprados 26/Fev) — detalhes em `app/data/artifacts.js`
- **Novos 26/Fev:** Dawn Pipe Organ (Flora), Ring of the Scarlet Sorcerer (Felicity)
- **4 Soul Imprints restantes:** Ivellios, 2 Poison, 1 Lightning, 1 Necrosis

## Teams Component — Category Filters
- Filtros por keyword no campo `activity` do time (case-insensitive includes)
- **Ao criar novo time:** activity DEVE conter keyword de uma categoria existente
- Categories: Boss(`boss/frey/goblin`), Grave(`grave`), Dungeon(`domain/heretical/temporal/fae/pillar`), Talent(`talent`), PvP(`arena/pvp/ancient battlefield`), Multi(`multi`)
