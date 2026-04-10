# Mentoria: Aprendizados do Projeto Dragon Heir Companion

> Documento vivo com todos os aprendizados acumulados durante a mentoria.
> Jogador: Henry (SuperYennefer, Server 139-Darkfire)
> Atualizado: 07/Abr/2026 (S6 — Hymn of Chess & Blade)

---

## 1. Summoning e Banners

### Pity System (CORRIGIDO)
- **Rate Legendary:** 1.5% (NÃO 3% como HellHades/AllClash dizem)
- **Pity:** 70 pulls = 1 Legendary ALEATÓRIO
- **Banner Exclusivo:** 300 pulls = herói GARANTIDO do banner
- **Custo por pull:** 100 Wyrmarrow → 300 pulls = 30.000 Wyrmarrow
- **Fonte:** Confirmado in-game. HellHades e AllClash têm dados ERRADOS (dizem 3%/35 pulls)

### Estratégia de Banner
- Priorizar heróis SS que NÃO estão nos baús (ex: Nastjenka, Lothair)
- Baús Dia 5/10 são GRÁTIS — não gastar Wyrmarrow em heróis disponíveis nos baús
- 3 fontes concordam (AC + HH + DI) = confiança máxima
 - **Decisão 21/Fev/2026:** Lothair escolhido no banner Flora x Lothair para progresso geral consistente.
 - **Decisão 26/Fev/2026:** Flora obtida no banner exclusivo 300 pulls. DI #1 S1 — completa o time Wild Fire.

---

## 2. Elemental Affinity

> **IMPORTANTE:** Afinidades MUDAM A CADA SEASON. Sempre conferir in-game no início de nova season.

### S6 — Hymn of Chess & Blade (Abr/2026)
| Afinidade | Elementos | Sinergias Chave |
|---|---|---|
| **Devitalization** | Ice + Poison | Hvitar+Lothair, Lossenia+Durango, Eurion+Ergander |
| **Incandescence** | Fire + Radiance | Flora+Huberg, Errich+Lorentheel, Caspar+Donella |
| **Vertigo** | Lightning + Necrosis | Nastjenka+Ladehlia, Garett+Sintrellia, Sutha+Ghul'ende |

### S1 (referência histórica)
| Afinidade | Elementos |
|---|---|
| Permafrost | Ice + Necrosis |
| Ulceration | Poison + Fire |
| Resplendence | Lightning + Radiance |

### Sistema Base (3 camadas)
1. **Bônus base (3 heróis):** ~+20% ATK, +20% HP, ACC, DEF, etc. (TODO: confirmar valores exatos S6 in-game)
2. **Bônus extra (5 heróis da mesma afinidade):** +20% Elemental Damage Bonus e +2% Damage Resistance
3. **Affinity Evolution:** 6 caminhos, escolher 4 (ver abaixo)

### Ativação
- 3 heróis ativam o bônus base de afinidade.
- 5 heróis da mesma afinidade mantêm o bônus base e adicionam bônus extra (+20% dano elemental, +2% resistência a dano).
- Decisão 3 vs 5 agora depende da luta (e do trade-off de sinergia de school/kit).

### Affinity Evolution (sistema de upgrade)
- 3 afinidades × 2 stats (ATK e HP) = 6 caminhos
- Escolher 4 de 6
- Cada caminho vai de Lv 1 a Lv 10. No max: +20%
- **Decisão Henry S1 (16/Fev) → TODO verificar se evolution resetou na S6:**

| Prioridade | S1 Path | S6 Equivalente Provável | Justificativa S6 |
|---|---|---|---|
| 1 | Resplendence ATK | **Vertigo ATK** | Nastjenka+Garett+Sutha (Lightning) + Ladehlia+Sintrellia (Necrosis) — MAIS heróis cobertos |
| 2 | Permafrost ATK | **Devitalization ATK** | Ice DPS (Auster, Lossenia, Hvitar) + Poison DPS (Lothair, Durango) — sinergias novas! |
| 3 | Permafrost HP | **Devitalization HP** | Eurion/Vinyara (Ice tanks) + Ergander/Frurbath (Poison tanks) — mais cobertura |
| 4 | Ulceration ATK | **Incandescence ATK** | Flora/Errich/Caspar (Fire) + Huberg/Lorentheel (Radiance) — DPS juntos |

**Cortados S6:** Vertigo HP (Lightning+Necro DPS-focused), Incandescence HP (só Acilia)

**Princípio mantido:** Todos DPS ganham ATK. Módulo survival ganha HP. S6 melhora sinergias cross-element.

---

## 3. School Bonds

### Schools REAIS (14 total)
Aura, Burn, Corrosion, Dauntless, Frost, Ice Blast, Poison, Rally, Shadow, Summon, Support, Thunderbolt, Toxin, Wild

**CUIDADO:** HellHades `type` (Defense, Attack, etc.) NÃO é School! Nunca usar `type` como school.

### Bonds úteis nos times Henry
- **3 Dauntless** (Nastjenka+Garett+Sutha): 30% chance Thundercloud (DPS massivo)
- **3 Toxin/Poison:** 60% Pool (DoT amplificado)
- **2 Frost** (Hochadir+Lossenia/Rowena): Frozen 5s
- **2-3 Support** (Eurion+Torrin+Vinyara/Catherine): 10-15% HP shield
- **2-3 Summon** (Ladehlia+Sintrellia+Isitarian): amplifica undead

### School Bond + Affinity stackam
São sistemas SEPARADOS. Um time pode ter Permafrost (afinidade) + Dauntless (school) ao mesmo tempo.

---

## 4. Team Building

### Módulo Universal de Sobrevivência
**Torrin + Eurion** = imortalidade em QUALQUER time.
- Eurion absorve TODO o dano dos aliados (Ally Protection)
- Torrin cura Eurion + dispela debuffs + Invisibilidade 10s + Debuff Immunity
- Resultado: +288% DPS no Temporal Vortex (480k → 1.86M)
- **Sempre começar com Torrin+Eurion base, preencher 3 slots com DPS**

### Princípio: Amplificadores > Utility
Quando survival está garantido (Torrin+Eurion), o slot livre deve ser AMPLIFICADOR (ex: Sintrellia), não utility (ex: Vinyara extra). Vinyara era redundante (+131% DPS ao trocar por Sintrellia).

### Core Summon Universal (Ladehlia+Sintrellia+Eurion)
O trio Ladehlia+Sintrellia+Eurion é a base mais flexível do jogo. 2 slots flex adaptam pra qualquer boss:
- **Flame Domain:** +Acilia+Torrin → Lv18 CLEAR super fácil. Lv17 sem Torrin (Isitarian no lugar) também passa.
- **Tempest Domain:** +Eches+Torrin → Lv17 CLEAR fácil. Eches Healing Reduction contra regen do boss.
- **Bosses/Frey:** +Torrin+Vinyara ou +Torrin+Lossenia (Frost chain)
- **Flex slot decide o teto:** Acilia (anti-debuff), Eches (anti-heal), Vinyara (dispel), Voresh (buff prohibition)
- **Torrin = obrigatório em níveis altos (Lv18+).** Em níveis onde survival sobra (Lv17), trocar por Isitarian pra mais DPS.

### Threshold de Status decide endgame (Grave of Rot Lv18)
- No Lv18, trocar heroi sem acertar build quase nao muda resultado; o que decidiu o clear foi **status/atributos** (gear + artefato).
- **Summons com crit muito alto (proximo de 100%)** mudaram o ritmo da luta e encurtaram a janela de endgame.
- **Debuffer com ~400 Accuracy** foi necessario para manter uptime de debuffs no boss.
- Com status abaixo desses thresholds, o boss entra no endgame e começa sequencia de Devour.
- Composicao reportada no clear: **Torrin + Ladehlia + Isitarian + Sintrellia/Zadok + debuffer high-ACC**.

### Wild Fire Synergy Chain (26/Fev/2026)
Flora (DI #1) completa o time Wild Fire, criando um feedback loop exponencial:
1. **Errich Passiva:** +2 dice max (6→8) para TODOS Wild aliados — permanente, sem custo
2. **Flora Passiva:** ally Wild dice >=5 → familiar ataca (+25%ATK) + ganha Insight
3. **Flora Battle:** Insight max → dice SEMPRE max → garantia de triggers
4. **Felicity Battle:** recast em dice >=4 (até 3x). Ult: +3 beams em dice >=5 (5→8 beams)
5. **Caspar Passiva:** dice par → Absurd Charade → ignora DEF crescente
6. **Caspar Ult:** marca alvo → ally dice >=4 → throwing knives automáticas
7. **Tonalnan:** +5% Crit DMG por ally dice >=5 + 5 hits = +20% ATK Up burst

**Princípio:** Mais Wild heroes → mais dice rolls → mais triggers → DPS exponencial.
5 Wild (Flora+Errich+Felicity+Caspar+Tonalnan) = sinergia máxima.

**Artefatos ideais:**
- Flora: Dawn Pipe Organ (ATK sharing para todos ranged = buff permanente pro time)
- Felicity: Ring of the Scarlet Sorcerer (dice >=5 → +10% skill damage, multiplica 8 beams)

### Captain Aura NÃO stacka (confirmado 06/Mar/2026)
- **Só 1 aura ativa no time** — a do capitão escolhido
- Heróis com aura que NÃO são capitão NÃO contribuem com sua aura
- **ERRADO (corrigido):** pensávamos que todas as auras de todos os heróis se acumulavam
- **Escolha de aura:** +24% ATK é melhor que +24% Crit DMG quando <3/5 heróis têm crit alto. ATK amplifica TUDO (basics, ults, Thundercloud, sustain da Acilia)

### Vortex: Dauntless Aggro > Wild Fire > Dauntless + Survival (06/Mar/2026)
Evolução testada de scores no Temporal Vortex:
1. **Wild Fire puro (5 DPS):** ~5M — morre rápido demais
2. **Wild Fire + Felosia:** 19M — sustain resolve, mas DPS inferior
3. **Dauntless + Torrin+Eurion (Sutha):** 23M — imortalidade + 3 DPS
4. **Dauntless + Torrin+Eurion (Garett):** 24M — Garett > Sutha (43% vs 27% DPS)
5. **Dauntless Aggro + Acilia:** **31.3M** — CAMPEÃO!

**Insight chave:** Trocar o módulo Torrin+Eurion (2 slots de survival) por Acilia (1 slot) liberou 1 slot DPS extra. A perda de imortalidade foi compensada por:
- **5 Resplendence** (+20% Elemental DMG + 2% DMG Resistance)
- **Acilia 5.0/5.0 Vortex** (DI #14) — sustain solo suficiente para endurance
- **4 Dauntless** = 50% Thundercloud (3+ = bond máximo)

### Mono-elemento maximiza School Bonds
Time mono-elemento ativa tanto Affinity quanto School Bond. Ex: 5 Poison = Ulceration + 3 Toxin.

### Prioridade para montar time de Boss com mecânica (REGRA CARDINAL)
Para bosses com mecânicas específicas (Grave of Curse, Continental, Frost Domain, etc.), a ordem de prioridade é:
1. **Sinergia de kit com mecânica do boss** — herói cujo kit CONTRA diretamente a mecânica é mais valioso que qualquer outro fator. Ex: Thia (AC B, HH 3.3) limpou Grave of Curse Lv20 com folga porque Debuff Immunity + Invisibility + Healing Prohibition resolvem 3 mecânicas do boss simultaneamente.
2. **Afinidade elemental (5 heróis)** — +20% Elemental Damage Bonus + 2% DR é multiplicador massivo. Priorizar composição que ativa 5 da mesma afinidade.
3. **School Bonds** — bônus adicional quando possível, mas não sacrificar slots 1 e 2 por isso.
4. **Tier list (AC/HH/DI)** — é o MENOS importante. Tier list mede versatilidade geral, NÃO sinergia com mecânica de boss. Heróis "Evitar" no tier list podem ser MVP em boss específico.

**Casos confirmados:**
- **Thia** (B-tier) → MVP Grave of Curse Lv20. Kit contra 3 mecânicas do Blood Prince Xenos.
- **Rowena** (Epic) → superou Legendários no Continental Vasska. 800% em Frost + ignora DEF.
- **Isitarian** (Epic) → superou Zhar'loth (Legendary) em +22% dano no Thelandor. Mecânica de undead summons casou com o boss.
- **Fitz** (RARE!) → usado pelo #1 global em Vasska. Debuff sponge absorve Decrease ATK do boss.

**Na prática:** Antes de consultar tier list, LER as skills do herói e comparar com a mecânica do boss. Herói B-tier com counter direto > herói SS-tier genérico.

### Mecânicas de Boss salvam runs
Cada boss tem ciclo, habilidades, e um "o que mata". Saber o ciclo permite:
- Usar Ult de Immunity no timing certo (ex: Catherine em ~17s no Frost Domain)
- Escolher Food certo (+Lightning ou +Poison conforme o boss)
- Posicionar heróis para evitar cleave/AoE

### Continental Challenge — Aprendizados (13/Mar/2026)

**Composição:**
- **Skill mechanic > elemento/raridade.** Rowena (EPIC, 800% em Frost + ignora DEF) superou composições com Legendários. Isitarian (+1 ataque por undead) superou Zhar'loth (Def Down) em +22% dano no Thelandor. Mecânica do herói casando com mecânica do boss é o fator #1.
- **4 DPS + 1 shield > 2 DPS + 2 survival** em boss DPS race. Eurion era gargalo: trocar por Rowena = +14M (21.5M → 40.7M). Felosia sozinha segura o time tempo suficiente.
- **Time morrendo com DPS alto >>> time vivo com DPS baixo.** 40.7M morrendo > 26.5M vivo. O gap de DPS compensa a perda de uptime.

**Artefatos:**
- **Ring of Winter em heróis com DoT constante** (Hvitar 22%ATK DoT) > burst periódico (Auster tracking arrows). DoT constante proca mais ice storms.
- **Dawn Pipe Organ no herói com ATK mais alto** (Auster 8/8 > Rowena Epic). 5% de ATK alto = buff maior pro time.
- **Eyeball of the Giant no herói com Ult mais forte** (Rowena 800% > Auster 520%). +10% rende mais onde o multiplicador base é maior.
- **Artifact swap entre 2 heróis pode dar +1.5M** — otimização de distribuição importa.

**Poison/Tamar:**
- **Twitch = DPS carry #1 do time Poison (62k/s).** Supera Lothair (27k/s) e Durango (13k/s) combinados. Feedback loop Twitch+Lothair é multiplicativo — Twitch escala exponencialmente com Poison stacks.
- **Enlight aura como captain** em times Derivative (Lothair, Durango, Twitch). Derivative escala com ATK + Enlightenment, não crita.
- **Runas e gear fazem diferença massiva:** 24.3M → 33.3M (+37%) só com runas e gear otimizados, mesma composição.
- **Oggok + Solar King's Horn** = healer que amplifica DPS do time (+2% DMG per heal stack). Healer que buffa > healer puro.
- **Ergander ancora o time** com Taunt 5s + Immortality 10s. Sem ele, DPS morrem cedo.

**Manual play:**
- **Felosia Ult timing = janela de burst.** 30% DR + Control Immunity por 10s = usar todos os Ults de DPS nessa janela.
- **Iteração > teoria.** Vasska: 4 iterações (21.5M → 40.7M). Tamar: 3 iterações (24.3M → 33.3M). Testar in-game sempre.
- **Posicionamento importa:** Twitch atrás do Oggok = proteção extra. Morre mais tarde = mais DPS.

**Referência TOP global (Vasska):**
- #1: 216M com Hvitar+Lossenia+Voresh+Torrin+Fitz(RARE!). Estratégia: 1 DPS maxado + 4 support = 100% uptime.
- Fitz (RARE) = debuff sponge (absorve Decrease ATK do boss). Voresh = heal passivo + Buff Prohibition.
- Com Hvitar investida (Insp4, 8/8), migrar de 4 DPS pra 1 DPS + 4 support.

---

## 5. Talent System (Reborn)

### Estrutura
- 12 talentos por herói, 3 lanes (Top/Middle/Bottom), ~4 nodes por lane
- S2+: livre pra pegar nodes de QUALQUER lane
- Talent Stones por elemento: Fire/Poison | Ice/Necrosis | Lightning/Radiance
- **Prioridade:** Level 4 nos carries primeiro, depois supports

### Talent Verdicts
- **ESSENCIAL:** Stats que definem o kit do herói (ex: Crit Rate pra Durango, ATK pra Nastjenka)
- **ALTO:** Stats muito úteis mas não definidoras
- **MEDIO:** Útil mas não prioritário
- **BAIXO/IGNORAR:** DEF em DPS puro, Accuracy em healer sem debuff

---

## 6. Artifacts

### Estratégia de Compra
- **Mythics > Legendary SEMPRE.** Mythics escalam muito melhor.
- Verificar Mythics disponíveis na loja ANTES de investir em Legendary
- Soul Imprints são recursos RAROS — guardar para Mythics de S2+

### Upgrade Order
1. Mythics primeiro (Thunder Deity's Spear > Great River Lamp > Great Demon's Skull > Mark of Ice Calamity)
2. Depois Legendary do tank mais usado (Pocket of Seduction → Eurion)
3. Depois DPS secundários

### Crystal Budget
- 80% spend now em prioridades 1-7
- 12% reserva tática (herói chegando)
- 8% margem para próxima season

---

## 7. Tier Lists e Fontes

### 3 Fontes, cada uma com perspectiva diferente
| Fonte | Foco | Formato |
|---|---|---|
| AllClash | Tier geral | SS/S/A/B/C/D |
| HellHades | Rating por atividade | 0-5 por modo |
| DragonHeir.info | Ranking S1 competitivo | #1-181 |

### Interpretação
- **DI alto + AC baixo** = endgame S1 specialist (ex: Lossenia DI #3 mas AC S)
- **HH alto + DI baixo** = versátil em muitas atividades (ex: Voresh HH 4.2 mas DI médio)
- **3 fontes concordam** = confiança máxima (ex: Nastjenka SS em TODAS)

---

## 8. Erros Comuns Evitados

1. **HellHades `type` ≠ School Bond.** Quase usamos "Defense" como school de Eurion. Schools reais são 14 específicas do jogo.
2. **Pity 3%/35 pulls é ERRADO.** In-game mostra 1.5%/70 pulls claramente.
3. **Inspiração é SÓ para Legendary.** Duplicata de Epic/Rare dá material, não Inspiration.
4. **Vinyara redundante com Torrin+Eurion.** Survival já garantido = amplificador > utility.
5. **Assumir que 5 heróis = mesmo que 3.** Correção in-game (06/Mar): 5 heróis ganham bônus extra (+20% Elemental Damage Bonus, +2% Damage Resistance).
6. **Investir em Legendary antes de checar Mythics.** Quase evoluiu Blood Prince's Bracelet quando Mark of the Ice Calamity estava disponível.
7. **Auras stackam de todos os heróis.** ERRADO — só a aura do capitão é ativa. Corrigido 06/Mar/2026.

---

## 9. Progressão (Medium Spender)

### Rotina Diária (30-40 min)
1. Dailies + cooking
2. Farm Goblin Lair (XP)
3. Completar dungeons/caves disponíveis
4. Arena (PvP — passivo, ranking acumula)

### Prioridade de Recursos
1. Wyrmarrow → Banner exclusivo (SS garantido)
2. Skill Scrolls → Carries primeiro (Ladehlia, Nastjenka, Lothair)
3. Master Scrolls → Top 7 heróis por tier
4. Artifact Crystals → Mythics primeiro
5. Soul Imprints → GUARDAR para Mythics futuros

### Timeline
- Dia 1-5: Setup inicial (banners, baús, times)
- Dia 5-10: Estabilização (gear, talents, Affinity Evolution)
- Dia 10+: Conteúdo de grupo, PvP, otimização

---

## 10. Visão Cross-Season (Análise 16/Fev/2026)

### Mecânica de Seasons
- **Jogo global está na S4**, mas cada servidor começa na S1 e avança uma por uma
- **Henry (S139) está na S1** → sempre 3 seasons atrás = pode ver o futuro e se preparar
- Seasons Reborn duram **~63 dias** cada
- Cada season adiciona ~3 Schools novas + ~17 Legendários + 2-3 Exclusivos
- **Exclusivos** só aparecem no banner da season + Heliolite Summons (muito mais difícil)

### Heróis Exclusivos por Season
| Season | Exclusivos | Schools novas |
|---|---|---|
| S1 | Flora, Hvitar, Lothair, Nastjenka, Thelendor, Lelwanis | — |
| S2 | Perkunte (Thunderbolt), Beldelle (Ice Blast), Aschetius (Burn) | Burn, Thunderbolt, Ice Blast |
| S3 | Rook (Corrosion), Ozul (Shadow), Aemonleyda (Aura) | Shadow, Aura, Corrosion |
| S4 | Maashtur (Defense), Yfeir (Support) | — (expansão das existentes) |

### Estratégia Cross-Season para Henry
1. **S1 (agora):** Lothair (22/Fev) + Flora (26/Fev) obtidos. 2 banners de 300 pulls. Ambos SS-tier. Time Poison (Lothair) + Time Wild Fire (Flora) completos.
2. **S2 (Misty Sea Voyage):** POUPAR. Nenhum exclusivo S2 sinergiza com times atuais. Perkunte (S tier Thunderbolt) é forte mas pede time novo do zero. Usar summons grátis do início de season + Forthfaring (10 pulls = 1 legendary). **Acumular 30.000+ Wyrmarrow.**
3. **S3 (Snarls of Lava):** ALL-IN. **Rook** (Poison/Corrosion S tier) ou **Aemonleyda** (Radiance/Aura S tier). Ambos S tier e encaixam perfeitamente nos times existentes.
   - Rook = true damage, completa time Poison (Lothair+Durango+Vicana+Jathalea)
   - Aemonleyda = desbloqueia Radiance como time de dano (Lorentheel Insp 3 finalmente vale)
4. **S4 (Echoes of the Deep):** Relaxar. **Calavera é GRÁTIS** (reward continental) e é healer Poison. Nenhum exclusivo S4 vale 30k.

### Bônus de Início de Season (todo início de season)
- 2 Legendários grátis (Season Journey)
- Forthfaring Summons (10 pulls = 1 legendary com Heliolite Dice)
- First-clear de dungeons RESETAM → Wyrmarrow massivo
- Eventos especiais de login + summon

---

## 11. Imperial Shadow Recast — Aprendizados (28/Fev/2026)

### Continental Bosses (CONFIRMADO IN-GAME 28/Fev/2026)
- **Todos os 6 bosses disponíveis desde o início** — NÃO é escalonamento de bosses por semana
- **Limitado por Continental Challenge Tickets:** Sem1=2, Sem2=4, Sem3=6. Evento dura 3 semanas.
- **1 ticket = 1 boss.** Herói usado = travado a semana toda. Retry grátis e ilimitado.
- **Semana 1 = oportunidade de teste!** Só 10 heróis travam (2 bosses × 5) → pode testar composições em TODOS os 6 bosses antes de commitar
- HellHades descreve como bosses que "abrem" por semana — na verdade todos estão lá, o limite é por tickets

### Shadow Dungeon / Double Concentrates (CONFIRMADO IN-GAME 01/Mar/2026)
- **3 dungeons selecionadas por semana** para drops duplos. **10 Double Concentrates/dia** (cada drop duplo consome 1, reseta diário)
- **Coletar amethysts de uma dungeon = dungeon FIXA a semana toda** (continua dando drops duplos diariamente)
- **NÃO coletar = pode TROCAR a dungeon no dia seguinte** (flexibilidade de farm)
- **Total de drops duplos = 10/dia IGUAL** nos dois casos. A diferença é apenas QUAIS dungeons recebem o bônus
- **Estratégia:** Se quer focar em 3 dungeons específicas → colete. Se quer variar farm → não colete e troque diariamente

### Decisão Pendente: Rook vs Aemonleyda (S3)
Avaliar quando S3 chegar:
- **Rook** se time Poison for o carry principal → Corrosion true damage
- **Aemonleyda** se Radiance tiver potencial não explorado → Aura school nova
- Verificar tier lists atualizadas de S3 antes de decidir

---

## 12. Frey Corridor — Execucao Manual (06/Mar/2026)

- Em comp defensiva com **Mithrasea + Donella + frontliner de dive**, o Auto tende a distribuir burst no alvo errado.
- Resultado prático: time sobrevive mas a luta "nao termina" por ciclo de ressurreicao da Mithrasea.
- **Solução que destravou:** jogar em Manual e direcionar ultis para a **Mithrasea primeiro**.
- No S1, na pratica, **nao existe lock persistente de alvo** para manter foco automaticamente o combate inteiro; precisa reajustar foco por janela de skill/ult.

---

## 13. Frey Corridor — Mapa de progressao por nivel (06/Mar/2026)

- **Lv170:** `Lossenia + Auster + Hochadir + Vinyara + Felosia` (posicionamento em canto para proteger DPS).
- **Lv172:** trocar `Hochadir -> Eurion` para estabilizar frontline sem perder o core de dano.
- **Fase Mithrasea/Donella:** clear em Manual com prioridade de ult na Mithrasea.
- **Lv204:** progresso mantido contra frente `Garrika + Acilia + Martina` e backline `Fihrah + Alvis`.
- **Lv219 (fase travada):** comp inimiga `2x Bionphray` (frente) + `Vinyara` (centro) + `2x Deverick` (cantos).
- **Time que resolveu Lv219:** `Eurion + Torrin + Tamar + Lossenia + Auster`.
- **Setup chave da Tamar:** `Rift Hourglass`, talentos S1 na linha do meio (I->VI), `Accuracy 300+` e `Skill Haste 45+`.
- Aprendizado central: contra dupla de tank+sustain, anti-buff dedicado (Tamar) vale mais que insistir no core sem ajuste de função.

### Evolucao pos-Lv219 (mesma sessao)

- **Lv220->222:** `Torrin -> Acilia` e `Tamar -> Rowena` (burst) avancou ate Lv222.
- **Lv223->226:** `Acilia -> Torrin` (com Solar King's Horn) manteve Rowena e subiu para Lv226.
- **Lv227->229:** `Rowena -> Felosia` (pivot para sustain) subiu para Lv229.
- Diagnostico do Lv229: comp inimiga `2x Felicity + Caspar + Horrus + Garrika` (Fire/Wild) derrete frontline em luta longa.
- Aprendizado de trade-off:
  - `Rowena` aumenta teto de dano (TOP2 DPS), mas com risco alto de morte precoce.
  - `Felosia` reduz risco e melhora consistencia em andares longos.
  - No trecho Lv220->229, `Torrin + Horn` rendeu mais progressao que manter `Acilia`.

### Evolucao pos-Lv229 (mesma sessao)

- **Lv231:** clear com tank morto no fim, mas `Torrin` segurou ate fechar a luta (food Ice ativo).
- Problema da fase: `Lothair` mergulhando no backline e removendo DPS/support.
- **Swap vencedor:** `Tamar -> Felosia` para passar o Lv231.
- **Novo baseline:** `Eurion + Torrin + Felosia + Lossenia + Auster` (apelidado de **Immortals**) e progresso ate Lv239.
- **Lv240 teste 1:** `Felosia -> Acilia` mantendo `Torrin` = run estavel, ninguem morreu, mas **timeout**.
- **Lv240 teste 2:** `Torrin -> Rowena` (com Acilia) = mais dano, mas backline caiu e a run terminou com boss em ~40% HP e <1 min.
- Aprendizado de trade-off:
  - `Torrin` e ancora de estabilidade no Frey alto.
  - `Felosia` e resposta forte contra dive no backline.
  - `Acilia + Torrin` pode alongar demais a luta em andares de timer apertado.
  - Proxima direcao: versao **hibrida** com `Torrin + Rowena`.

---

## 14. Affinity Bonus — Snapshot Atual da Conta (06/Mar/2026)

- Fonte: screenshots em `logs/` enviados pelo Henry (3 telas: Permafrost, Wildfire, Resplendence).
- Mudanca-chave confirmada: **5 herois da mesma afinidade agora tem bonus extra real** (`+20% Elemental Damage Bonus`, `+2% Damage Resistance`).
- Wildfire/Ulceration no estado atual da conta esta com **+20% HP** (nao +2%) e **DEF +200** no bonus base de 3 herois.
- Resplendence no estado atual da conta esta com **+20% HP** e **DEF +200** no bonus base de 3 herois.
- Regra de ouro atual: nunca assumir afinidade por memoria; sempre checar o snapshot in-game da conta.

---

## 15. Grave of Curse — Progressao e Aprendizados (08/Mar/2026)

### Resultado
- **Lv17 CLEAR** com Nastjenka + Tamar + Felosia + Torrin + Eurion
- **Lv18:** time todo vivo, boss sobreviveu com pouco HP. **Gargalo = stats/DPS, nao composicao.**

### Descoberta: Buff Prohibition FUNCIONA neste boss
- **Voresh (Epic) falhava por ACC baixa**, NAO por resistencia inata do boss.
- **Tamar (Legendary, ACC 300+, Rift Hourglass)** landa Buff Prohibition consistentemente — boss NUNCA ficou com buff.
- Correcao: remover "boss resiste Buff Prohibition" dos docs. O counter real e ACC alta.

### Tamar > Vinyara neste boss (prevencao > cura)
- **Vinyara** dispela buffs DEPOIS que o boss ja bufou → boss ataca com ATK Up pelo menos 1 vez.
- **Tamar** IMPEDE buffs de existir → boss NUNCA ataca com ATK Up. Superior em todos os aspectos.
- Vinyara se torna redundante quando Tamar esta no time.

### Felosia e INEGOCIAVEL (Lv15+)
- **Sem Felosia** (testado com DA + Tamar + Torrin + Eurion): time inteiro morreu rapidamente.
- Shields da Felosia bloqueiam Blood Gush Max HP drain. 30% DR reduz todo dano. Control Immunity impede Stun 5s.
- Felosia contribui MAIS para survival do que Torrin neste boss — mas ambos sao necessarios.

### Torrin tambem necessario (hipotese forte, nao testado isoladamente)
- Time sofre dano constante. Sem heal, shields sozinhas provavelmente nao sustentam Eurion em luta longa.
- Torrin + Gatekeeper's Staff (overheal→shield) adiciona mais uma camada de protecao.

### Composicao final (4 support + 1 DPS)
- **Slots fixos:** Eurion (tank), Torrin (heal), Felosia (shields/DR), Tamar (anti-buff) = 4 slots de survival/utility
- **Slot DPS:** Nastjenka (solo carry, +24% ATK captain, 8/8 skills)
- **Limite:** composicao esta otimizada. Para avancar Lv18, precisa de **melhores stats** (Crit Rate 80%+, ATK, artefatos upgradados).

### Principio: Threshold de stats decide endgame (confirmado novamente)
- Mesma licao do Grave of Rot Lv18: composicao correta + stats abaixo do threshold = quase mas nao fecha.
- Proximo passo: gear farming, artifact upgrades, talent levels.

---

## 16. Imperial Shadow Recast — Semana 2 (09/Mar/2026)

### Aprendizado operacional
- Semana 2 muda o problema: nao e "qual boss existe", e sim **como alocar 4 tickets sem erro de lock** (20 herois unicos).
- Plano com informacao repetida atrasa execucao. O formato que funciona e **1 mapa direto por boss (time + posicionamento + chave da luta)**.

### Mapa prático da Semana 2 (20 heróis sem repetir)
- **Thelandor:** Ladehlia + Sintrellia + Ghul'ende + Zhar'loth + Torrin
- **Vasska:** Lossenia + Auster + Hochadir + Vinyara + Felosia
- **Vinyara (boss):** Flora + Brody + Errich + Caspar + Felicity
- **Tamar (boss):** Durango + Lothair + Vicana + Jathalea + Ergander

### Posicionamento que mais impacta score
- **Vasska:** bloco de 4 no canto do fundo + 1 avancado (setup que sustentou benchmark de 35M).
- **Vinyara:** Brody isolado na frente; 4 DPS no fundo bem espacado (se Brody cai cedo, run colapsa).
- **Thelandor:** bloco recuado para proteger Ladehlia e manter uptime de summon.
- **Tamar:** Ergander ancora no centro e backline em cantos opostos para reduzir perda dupla por AoE.

### Regra de execução (30-40 min/dia)
- Retry e gratis: testar, ajustar posicionamento e **salvar so quando o score vier bom**.
- Sempre priorizar boss facil com time mais forte para maximizar retorno de leaderboard com pouco tempo.

## 17. Gear — Loadouts e Runas (12/Mar/2026)

### Loadout NÃO salva runas (BUG/DESIGN)
- O sistema Quick Equip salva apenas as 4 peças de gear (weapon, helmet, armor, gloves)
- **Ao carregar um loadout, as runas (positiva e negativa) são REMOVIDAS do herói**
- Workaround: re-equipar runas manualmente após cada troca de loadout
- Implicação: gear swap "grátis" tem custo OCULTO de tempo (re-equipar runas toda vez)

### DPS Crit Benchmark (11/Mar/2026)
- Fórmula: DPS Index = ATK × (1 + CritR × CritD), CritR cap 100%
- Ranking: Nastjenka 13519 > DA 8621 > Ladehlia 8422 > Sutha 7536 > Huberg 6079
- **DA: Clean Sweep mythic** (ATK%40 gloves) → +29.8% DPS. Gargalo era ATK baixo (2658)
- **Huberg: gargalo CritR 26.7%** — com ATK 4108 + CritD 179.8%, gear CritR 70% levaria a DPS 9278 (#2)

### Regra de Runas
- **ATK alto (3400+):** priorizar runa CritD (ATK tem retorno decrescente)
- **ATK baixo (2000-2600):** priorizar runa ATK flat (impacto maior por ponto)
- **Nunca trocar CritR+CritD por ganho marginal de ATK** — multiplicativo > aditivo

---

## 18. Teams Dataset — Estrutura e Governanca (16/Mar/2026)

### Regra central
- **1 registro em `app/data/teams.js` = 1 resultado real confirmado.**
- Nao salvar composicoes teoricas, referencias externas ou "time ideal" junto do dataset ativo.
- Dataset antigo foi preservado apenas como backup bruto em `docs/backups/2026-03-16-teams-pre-reset.js`.

### Separacao correta dos campos
- **`name`** = nome do time (`Super Ice`, `Ice Elite`, `Poison Full`)
- **`activity`** = atividade principal do resultado salvo (`Heretical Ruins`, `Planar Expedition`)
- **`activities[]`** = todas as atividades onde o mesmo time e usado
- **`encounter`** = contexto da luta (boss, stage, level, fight, total_fights)
- **`result`** = resultado estruturado (tempo, pontos, clear)
- **`notes`** = contexto qualitativo e aprendizados operacionais

### O que NAO duplicar
- Nao repetir o **nome do time** dentro de `notes`
- Nao repetir o **nome do heroi** em `members[].notes` quando a linha ja tem o `id`
- Nao repetir o **mapeamento de artefatos** em texto livre quando ele ja esta salvo por membro
- Nao manter tabela manual paralela de frequencia quando ela pode ser derivada

### Artefatos por atividade
- O artefato correto pertence ao **membro dentro do time daquela atividade**, nao a uma nota geral
- Cada membro deve salvar:
  - **`artifact`** = nome canonico do artefato
  - **`artifact_level`** = nivel explicito
- Mesmo quando o nivel e maximo, salvar `20` evita ambiguidade futura

### Frequencia de herois
- **`DATA_HERO_FREQUENCY` deve ser derivado de `DATA_TEAMS`, nunca mantido manualmente**
- Se um time serve para mais de uma atividade, a frequencia deve refletir todas as entradas de `activities[]`

### Eventos multi-luta / multi-boss
- Quando o evento exige **2 lutas no mesmo boss sem repetir time**, salvar **1 registro por luta**
- Exemplo correto:
  - `Planar Expedition` = atividade
  - `Symbiotic Giga Elementa (Lv220)` = boss
  - `fight: 1` ou `fight: 2` dentro de `encounter`
  - `Ice Elite` / `Poison Full` = nomes dos times

### Padrao de nomenclatura
- Usar nomes canonicos e estaveis para evitar drift:
  - **Grand Gladiator Arena** em vez de `Arena`
  - **Heretical Ruins** em vez de misturar com outras dungeons
  - **Planar Expedition** como atividade; boss salvo separado em `encounter`

### Aprendizado de governanca
- O erro anterior do dataset era misturar:
  - atividade
  - nome do time
  - boss
  - referencia teorica
  - comentario livre
- Quando cada conceito ganha um campo proprio, o dado fica:
  - mais facil de revisar
  - mais facil de consultar
  - mais facil de renderizar depois na nova pagina web
