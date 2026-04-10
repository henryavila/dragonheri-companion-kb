# Gear Stat Profiles — Confirmado In-Game (09/Mar/2026)

## Regras Fundamentais
- **Indicador in-game de stats recomendados É CONFIÁVEL** — reflete scaling real das skills
- **Derivative Damage** escala com ATK + Enlightenment, NÃO pode critar → Crit INÚTIL
- **Direct Damage** escala com ATK, PODE critar → Crit Rate/Dmg vale
- **Heals/Shields** escalam com Enlightenment + %MaxHP do alvo
- **DEF-scalers** (Eurion, Garius, Brody): dano/heal escala com DEF, ATK é inútil
- **Eurion exception:** jogo recomenda HP+ACC apesar de skills escalarem com DEF. HP > DEF porque Ally Protection exige sobreviver. Inspiration dá DEF%+30%.
- **Gear swap é GRATUITO** — planos por perfil de stats, não por herói
- **Runas são SEPARADAS** — têm afinidade elemental, não trocam livremente

## Sistema de Upgrade (confirmado 09/Mar/2026)
- Gear começa **lv 0**, vai até **lv 20**
- Main stat escala com level (ATK% 2.0% lv0 → 60.0% lv20)
- **Milestones a cada 4 levels:**
  - **Lv 4:** libera 4º substat (5.250 gold)
  - **Lv 8:** 1º upgrade — melhora 1 affix aleatório (24.850 gold acumulado)
  - **Lv 12:** 2º upgrade — melhora 1 affix aleatório (87.150 gold)
  - **Lv 16:** 3º upgrade — melhora 1 affix aleatório (227.150 gold)
  - **Lv 20:** 4º upgrade — melhora 1 affix aleatório (528.150 gold)
- **Total: 4 upgrades aleatórios** ao chegar em +20
- Cada upgrade vai para 1 sub **ALEATÓRIO** → não há garantia de peça boa
- **Número circulado (①②③④)** ao lado do sub = quantos upgrades aquele sub recebeu
- **Barra com 5 divisões** embaixo do sub = qualidade do roll (% do min-max)
- Barra cheia = roll alto, barra curta = roll baixo
- Qualidade afeta TANTO base roll quanto upgrade amounts

## Main Stats por Slot (a +20)
| Slot | Main stats | Valores a +20 |
|---|---|---|
| Weapon | ATK flat (**FIXO**) | 335 |
| Helmet | HP flat (**FIXO**) | 7710 (Mythic), 5070 (Epic) |
| Armor | VARIA: DEF flat, DEF%, HP%, ATK%, ACC, RES, Enlight | ATK%/HP%/DEF% = 60%, ACC = 96, RES = 120, Enlight = 120 |
| Gloves | VARIA: ATK flat, ATK%, DEF%, HP%, CritR%, CritD% | ATK%/HP%/DEF% = 60%, CritR = 40%, CritD = 80% |

**Weapon e Helmet: valor vem 100% dos substats** (main stat fixo, não filtrável)
**Armor e Gloves: filtrar por main stat** (descartar DEF flat/ATK flat main)

## Ranges Substats (APROXIMADOS — reais são mais amplos)
- Ranges documentados inicialmente eram de 1 sample Mythic Weapon
- **Upgrade ranges REAIS observados são maiores:**
  - CritR upgrade: até ~4.0% (não 3.2%) — obs: 19.8% = 3.8 + 4×4.0
  - ATK% upgrade: até ~6.3% (não 5.2%) — obs: 24.7% = 5.8 + 3×6.3
  - Enlight upgrade: até ~11.5 (não 10) — obs: 35 = 12 + 2×11.5
  - ACC upgrade: até ~10.7 (não 10) — obs: 43 = 11 + 3×10.7
- **Gear Forged** (Piece of Treasure) + **Temper** pode ter valores ACIMA dos ranges normais

## Correções de Elemento
- **Voresh é ICE** (não Poison)
- **Meggan é NECROSIS** (não Radiance)
- **Vidimir é LIGHTNING** (listado em Ice pelo user mas é Lightning)

## 14 Perfis Distintos (por indicador in-game)

| # | Perfil | Stats | Exemplos Chave |
|---|---|---|---|
| 1 | DPS-Crit | ATK, Crit Rate, Crit Dmg | Nastjenka, Sutha, DA, Ladehlia, Caspar, Huberg |
| 2 | DPS-ATK puro | ATK | Garett, Sintrellia, Lorentheel, Vani |
| 3 | ATK+Enlight | ATK, Enlight | Flora, Schaltar, Lothair, Vicana, Jathalea |
| 4 | ATK+Enlight+ACC | ATK, Enlight, ACC | Durango, Twitch |
| 5 | DPS-ACC | ATK, ACC | Auster, Lossenia, Hochadir, Voresh, Ghul'ende, Sigrid, Donella |
| 6 | Debuffer-ACC | ACC | Tamar, Eches, Talwer, Iola, Garrika, Gumm |
| 7 | Tank-HP/ACC | HP, ACC | Eurion, Lucien, Ergander, Journ, Sagomir |
| 8 | Tank/DPS/ACC | HP, ATK, ACC | Vinyara (único) |
| 9 | Healer puro | Enlight | Torrin, Catherine, Adolphus |
| 10 | Healer/Shielder | HP, Enlight | Felosia |
| 11 | Tank/Healer | HP, DEF, Enlight | Acilia, Alphanarsy |
| 12 | Tank-DEF/Debuffer | DEF, ACC | Brody, Frurbath, Clovis, Dulling |
| 13 | Tank-DEF puro | DEF | Garius |
| 14 | Tank-HP puro | HP | Enna, Isolde, Kamri, Meggan |

Perfil extra: **Enlight+ACC** (Oggok) — healer que precisa landar debuffs

## Flora/Schaltar — ALERTA
- TODO dano é Derivative → Crit Rate e Crit Damage são DESPERDÍCIO total
- Stackar ATK% + Enlightenment em cada peça
- Set Death Record (+20% Deriv recebido) é BiS pra time com Flora

## Gear Plans — Quantidade Necessária por Perfil (09/Mar/2026)

Baseado no máximo de heróis com MESMO perfil no MESMO time:

| Perfil | Planos | Máx no time | Time que exige |
|---|---|---|---|
| **DPS-Crit** | **4** (A/B/C/D) | 4 | Time Fire (Caspar+Errich+Felicity+Tonalnan) |
| **ATK+ACC** | **4** (A/B/C/D) | 4 | Goblin Lair (Auster+Hochadir+Lossenia+Sigrid) |
| **ATK+Enlight** | **3** (A/B/C) | 3 | Time Poison (Lothair+Vicana+Jathalea) |
| **HP+ACC** | **2** (A/B) | 2 | Arena (Eurion+Lucien) |
| **Enlight** | **2** (A/B) | 2 | Talent Resplendence (Torrin+Catherine) |
| **DPS-ATK** | **1** | 1 | Garett, Sintrellia, Lorentheel |
| **ATK+Enlight+ACC** | **1** | 1 | Durango |
| **ACC** | **1** | 1 | Tamar |
| **HP+ATK+ACC** | **1** | 1 | Vinyara (único) |
| **HP+Enlight** | **1** | 1 | Felosia (único) |
| **HP+DEF+Enlight** | **1** | 1 | Acilia |
| **DEF+ACC** | **1** | 1 | Brody |
| **DEF** | **1** | 1 | Garius |
| **HP** | **1** | 1 | Meggan |

**Total: 23 planos em 14 perfis → cabe nos 30 slots (sobram 7)**

## Estratégia de Coleta e Upgrade de Gear (10/Mar/2026)

### Coleta inicial (~180 peças coletadas)
- **Mythics:** TODOS coletados (qualquer slot)
- **Gloves:** coletados SEM main stat flat (ATK flat, DEF flat, HP flat descartados)
- **Armor/Chest:** coletados SEM main stat flat (DEF flat descartado)
- **Weapon:** main stat é SEMPRE ATK flat (fixo) — valor vem 100% dos substats
- **Helmet:** main stat é SEMPRE HP flat (fixo) — valor vem 100% dos substats

### Substats úteis vs inúteis (pra decidir se coleta/upgrade)
- **Úteis:** ATK%, CritR, CritD, Enlight, ACC, HP%, DEF%
- **Inúteis na maioria dos casos:** HP flat, ATK flat, DEF flat, RES (nicho)

### Técnica de upgrade incremental (gold-efficient)

**Etapa 1 — Lv0 → Lv4 (5.250 gold): revelar 4º sub**
- Regra: se 2+ dos 3 subs visíveis são úteis → sobe. Senão → vende.

**Etapa 2 — Avaliar 4 subs revelados**
- **4/4 úteis pro mesmo perfil:** candidata forte, segue pra upgrade
- **3/4 úteis:** sobe direto até Lv16 (3 upgrades, 84% chance de 2+ acertos em sub bom)
- **2/4 úteis:** técnica incremental (abaixo)
- **0-1 úteis:** vende imediatamente

**Etapa 3 — Técnica incremental pra peças 2/4 bons**
- Lv8 (24.850 gold) → 1º upgrade. Caiu em sub bom? → continua. Caiu em ruim? → vende.
- Lv12 (87.150 gold) → 2º upgrade. Caiu em sub bom? → continua. Caiu em ruim? → vende.
- Lv16 (227.150 gold) → 3º upgrade. Avalia se vale ir até +20.
- **Lógica:** cada passo valida antes de investir mais. Gold desperdiçado = mínimo.

**Probabilidades de referência (upgrades em sub bom):**

| Subs bons | Chance por upgrade | Esperado em 3 (Lv16) | Chance 2+ acertos |
|---|---|---|---|
| 2/4 | 50% | 1.5 | 50% (por isso usar incremental) |
| 3/4 | 75% | 2.25 | 84% (seguro subir direto) |
| 4/4 | 100% | 3.0 | 100% |

### Regra extra: subs de perfil raro
- **DEF% e Enlight** são stats raros — manter peça mesmo que outro sub não combine
- Peça com DEF%+CritD: CritD desperdiçado mas DEF% sozinho vale pro plano Brody/Garius/Acilia
- **Peça imperfeita > slot vazio**
- Descartar só se os subs úteis são de perfis ABUNDANTES (ATK%+CritR tem aos montes)

## Weapon Catalog — Resultados (10/Mar/2026)
- **58 weapons fotografadas** (logs/IMG_3088-3146, falta 3095)
- **Salvo em:** `app/data/gear-inventory.js` → seção `legendary_weapons`
- **Distribuição:** S(4) + A(6) + B(12) + C(20) + D(16) = 58
- **22 armas keepable** (S+A+B) — cobre os 23 planos com niche C-tier
- **16 armas D-tier** → vender para gold

### Top Weapons por Perfil
| Perfil | Melhor IMG | Stats chave |
|---|---|---|
| ATK+Enlight (Derivative) | **3100** | ATK% 17.9②, Enlight 40② |
| ATK+Enlight+ACC | **3121** | ATK% 18.2②, Enlight 22, ACC 13 — 4/4 úteis |
| Universal | **3127** | HP% 17.4, ATK% 12.0, CritR 7.5, ACC 12 — 4/4 úteis |
| DPS-Crit | **3118** | CritR 13.1③, CritD 7.8 max base |
| DPS-Crit alt | **3134** | CritD 22.7②, CritR 10.7② |
| DPS-ACC | **3108** | ATK% 18.2②, ACC 24, CritR 7.9 |
| HP+ATK+ACC (Vinyara) | **3097** | ATK% 11.8②, HP% 12.1, ACC 26 |
| DEF niche | **3103** | DEF% 23.7③ |
| ACC niche (Tamar) | **3105** | ACC 46③ |
| HP+ACC (Tank) | **3140** | HP% 15.7②, ACC 33② |

## Helmet Catalog — Resultados (10/Mar/2026)
- **60 helmets fotografados** (logs/IMG_3148-3207)
- **Salvo em:** `app/data/gear-inventory.js` → seção `legendary_helmets`
- **Distribuição:** S(0) + A(2) + B(14) + C(31) + D(13) = 60
- **Main stat HP flat é FIXO** (igual weapon com ATK flat) — valor vem 100% dos subs
- **16 helmets keepable** (A+B) — usáveis apesar de HP flat main
- **13 helmets D-tier** → vender para gold
- **Nível lido diretamente do screenshot** — NÃO implícito. Peças lv16 com bons subs devem ser avaliadas para upgrade a lv20 (custo lv16→20 = mesmo que lv0→16)
- **Nenhuma peça A/B tier precisa de upgrade** — todas já são lv 20

### Top Helmets por Perfil
| Perfil | Melhor IMG | Stats chave |
|---|---|---|
| ATK+Enlight (Derivative) | **3207** | ATK% 17.8②, Enlight 42②. Set Tides (+30 Enlight). Flora/Lothair BiS |
| ATK+Enlight alt | **3167** | ATK% 20.0③. Set Cyril (+ATK% +Skill) |
| DPS-Crit (CritD) | **3159** | CritD 31.4②, CritR 7.9① |
| DPS-Crit (CritR) | **3156** | CritR 12.0②, CritD 15.4① |
| DPS-Crit balanced | **3190** | ATK% 15.2②, CritD 17.0②, DEF% 12.1, ACC 22 — 4/4 úteis |
| ATK+ACC | **3199** | ATK% 18.9②, ACC 36②. Set Puppeteer (+40 ACC) |
| HP+ACC (Tank) | **3153** | CritR 8.9②, ACC 36②. Eurion/Lucien |
| DEF (Eurion BiS) | **3195** | DEF% 23.4④ MASSIVO. Set Holy Hunter (+40 ACC) |
| DEF alt | **3202** | DEF% 24.6③. Set Tides (+30 Enlight). Acilia |
| ACC niche | **3184** | ACC 49③ RECORDE! Tamar/Eches |

### Peças "dolorosas" (subs S-tier, main D-tier)
- **3172:** CritR 15.7③ — seria S-tier com CritR main
- **3177:** CritR 13.7② + CritD 8.2 + Enlight 23 — seria S-tier
- **3175:** CritR 7.8 + HP% 13.2 + ATK% 12.2② — seria A-tier

### Próximos passos (pendente)
- [x] Catalogar weapons sobreviventes ✓ 10/Mar
- [x] Catalogar helmets sobreviventes ✓ 10/Mar
- [ ] Avaliar re-tier dos helmets (agora que sabemos que HP flat e fixo, subs definem tudo)
- [ ] Definir se plano in-game inclui runas ou só 4 peças de gear
- [ ] Nomear os planos no jogo
- [ ] Montar os planos com as peças reais que Henry tem

## Formato de Screenshot — Tela de Refinement (descoberto 10/Mar/2026)
- **Layout:** CENTRO = stats do gear (extrair daqui). DIREITA = efeito de equipar (IGNORAR completamente)
- **Set name:** ler pelo NOME no rodapé do bloco central, NUNCA pelos valores do bonus (ficam cortados)
- **Level:** número no ícone do item (+8, +12, +16, +20)
- **Rarity:** SEMPRE Legendary ou Mythic — nunca Epic (todo gear catalogado é Legendary+)
- **Upgrades:** "Enhance affixes randomly for X time(s)" (Refinement screen, lv20 selecionado) = X upgrades RESTANTES até lv20. Lv12→"2", lv16→"1". Fórmula: X = (20 - lv_atual) / 4
  - lv 8 = 1 upgrade, lv 12 = 2, lv 16 = 3, lv 20 = 4
- **Main stat:** mostra valor atual + valor a +20 (ex: ATK% +25.0% → +60.0%)
- **Mythics lv 0:** podem ter sido upados — tratar como peças normais com novo level

## Dados completos por herói salvos em:
- `app/data/mechanics.js` → seção `stat_priority_by_hero`
