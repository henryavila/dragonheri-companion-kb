# Dragonheir: Silent Gods — Imperial Shadow Recast — Base de Conhecimento Completa

> **Objetivo deste documento:** Fornecer ao projeto CloudCode todas as informações necessárias sobre o evento "Imperial Shadow Recast" para que, com base no inventário de heróis do jogador, o projeto gere um plano de ação dia a dia otimizado.

> ⚠️ **CONTEXTO DO JOGADOR: SEASON 1 (S1)**
> - O jogador está na **Season 1**. O pool de heróis disponíveis é limitado aos heróis de S1.
> - Os **Continental Bosses ativos na S1** são: Thelandor, Vasska, Twitch, Vinyara, Khrysos e Tamar (Seção 3).
> - A **Seção 4** contém composições de S4 (Dance of Misfortune) e deve ser tratada como **referência futura apenas** — NÃO usar para planejar o evento atual.
> - Heróis introduzidos em S2, S3 e S4 (ex: Shai'nachtan, Beldelle, Fredegonda, Zhorak, Shinnah, etc.) **NÃO estão disponíveis** no servidor do jogador.
> - Ao gerar composições de times, o projeto deve verificar se cada herói sugerido **existe no pool de S1** antes de incluí-lo.

---

## 1. Visão Geral do Evento

- **Nome:** Imperial Shadow Recast (Império das Sombras Reforjado)
- **Tipo:** Evento mensal com duas frentes: Continental Bosses + Shadow Dungeon
- **Duração total:** ~4 semanas (o evento inteiro cobre aproximadamente 1 mês)
- **Moeda do evento:** Shadow Amethyst (Ametista das Sombras)
- **Recompensa principal:** Herói Lendário gratuito **Utior** (custa 450 Shadow Amethysts)
- **Meta estendida:** 800+ Shadow Amethysts para cosméticos adicionais

### 1.1 Utior — Herói Gratuito do Evento

| Atributo | Detalhe |
|---|---|
| Raridade | Legendary |
| Elemento | Necrosis |
| Papel | Suporte utilitário / backline |
| Passiva | Ganha 10% de Ultimate Energy sempre que QUALQUER unidade morre (incluindo summons) |
| Skill Ativa | Dano + aplica **Attack Down** e **Healing Prohibition** |
| Ultimate | Concede **Defense Up** e **Resurrection** aos aliados |
| Avaliação da comunidade | Não é meta-breaking, mas bom utilitário para mid-game e comps de suporte específicas |

### 1.2 Recompensas Gerais do Evento

| Categoria | Quantidade Aproximada |
|---|---|
| Invocações Regulares | 25+ |
| Pergaminhos Lendários | 6+ |
| Gemas | 2000+ (~20 invocações extras) |
| Recargas de Stamina | Múltiplas |
| Baús de Recursos | Vários ao longo do evento |
| Cosméticos | Print of Shadow, Umbra of Necrosis, outros |
| Medals of Glory | Moeda para trocar por cosméticos |
| Echo of Clepsydra | Para ranking sazonal (leaderboard) |
| Affinity Solvent | Material raro (leaderboard) |

---

## 2. Continental Bosses — Mecânica Detalhada

### 2.1 Estrutura (CORRIGIDO 28/Fev — confirmado in-game)

**Todos os 6 bosses ficam disponíveis desde o início.** O limite é por **Continental Challenge Tickets** por semana. Evento dura **3 semanas**.

| Semana | Tickets | Bosses desafiáveis | Heróis necessários | Lock de heróis |
|---|---|---|---|---|
| 1 | 2 | 2 de 6 | 10 | Só 10 travados → pode testar TODOS os heróis nos retries |
| 2 | 4 | 4 de 6 | 20 | 20 travados |
| 3 | 6 | 6 de 6 (todos) | 30 | Todos travados |

> **Nota:** HellHades descreve como bosses que "abrem" por semana. Na verdade todos os 6 estão lá desde o dia 1 — o limite é por tickets.
> **Semana 1 = oportunidade de teste!** Como só 10 heróis ficam travados (2 bosses × 5), você pode testar composições em TODOS os 6 bosses antes de commitar.

### 2.2 Regras Críticas

- **Continental Challenge Tickets:** Limitam quantos bosses você pode desafiar por semana. Semana 1 = 2 tickets.
- **Uso único por herói por semana:** Uma vez que um herói é usado em um boss, ele NÃO pode ser reutilizado na mesma semana, nem contra outro boss.
- **Reset semanal:** O lock de heróis reseta a cada nova semana.
- **Retry grátis e ilimitado:** Pode retentar o mesmo boss sem custo.
- **Leaderboard competitivo:** Ranking de dano por boss com recompensas extras (Shadow Amethysts, Echo of Eclipse, Affinity Solvent).
- **Leaderboard reseta semanalmente:** São 3 rodadas de recompensas de leaderboard.
- **Você pode "salvar" times:** Salve o time com melhor resultado para reusar a composição.

### 2.3 Estratégia Geral de Alocação de Times

```
REGRA DE OURO: Use seus tickets nos bosses MAIS FÁCEIS pro seu roster.
Time mais forte no boss mais fácil = maximiza leaderboard.
```

**Prioridade de bosses para S1 (do mais fácil ao mais difícil, segundo a comunidade):**
1. **Thelandor** — Mais fácil, favorece Necro/Summons
2. **Vasska** — Fácil-Médio, favorece Necro ou Poison
3. **Vinyara** — Médio, favorece Flora/Wild/Shield Breakers
4. **Khrysos** — Médio-Difícil, favorece Dauntless/Basic Attackers
5. **Tamar** — Médio, favorece Poison/Debuffers
6. **Twitch** — Difícil, PUNE debuffers (exige AoE nukers puros)

- **Semana 1 (2 tickets):** Thelandor + Vasska. TESTAR todos os 6 bosses antes de commitar (retry gratis, herois so travam ao confirmar score)
- **Semana 2 (4 tickets):** Adicionar Vinyara + Tamar
- **Semana 3 (6 tickets):** Todos — Khrysos + Twitch (aceitar score baixo nos dificeis)

> **Nota S1:** Na Season 1, o roster do jogador provavelmente ainda é raso. É normal não ter 6 times completos e otimizados. O projeto deve ser realista: se o jogador só tem 2-3 times fortes, priorizar os bosses mais fáceis e aceitar pontuação menor nos difíceis. O objetivo principal é acumular 450 Shadow Amethysts, não necessariamente rankear Top 10.

### 2.4 Composição Ideal — Um Time por Elemento

O jogo tem 6 afinidades elementais, e idealmente você deveria montar:

1. **Poison** (Veneno)
2. **Fire** (Fogo)
3. **Lightning** (Relâmpago/Dauntless)
4. **Radiance** (Radiância)
5. **Frost** (Gelo)
6. **Necrosis** (Necrose)

---

## 3. Guia Detalhado por Boss (S1 — BOSSES ATIVOS PARA O JOGADOR)

> ✅ **Estes são os 6 bosses ativos na Season 1.** O projeto deve usar ESTA seção para planejar times e alocações.

### 3.1 Thelandor (Recomendado: Necrosis)

**Mecânica Principal:** A invocação (summon) com o maior Ataque causa dano adicional ao boss. Curas e escudos são mais fortes nesse fight.

**Dificuldade:** Fácil — Recomendado para Semana 1

**Time Principal Sugerido (Necro Core):**

| Slot | Herói | Função | Notas de Build |
|---|---|---|---|
| 1 | **Lelwanis** | DPS Principal | Priorizar Crit Rate, ATK, Crit Damage |
| 2 | **Premtsa** | DPS Secundário | Alto Attack e Enlightenment |
| 3 | **Irzillas** | Debuffer | Defence Down (Witches Remains). Não 100% confiável (single-hit skill). Usar Attack Aura + Tressym Familiar |
| 4 | **Torrin** | Suporte/Tank | Ancestral Protection set para sobrevivência |
| 5 | **Sintrellia** | Enabler | Aumenta dano que o alvo recebe de Summoned Units |

**Performance:** ~212M dano sem artefatos exclusivos. Top players: 230M+

**Time Alternativo (Felosia + Zhar'loth):**
- Trocar Torrin → **Felosia** (escudos)
- Trocar Sintrellia ou Premtsa → **Zhar'loth** (AoE Defence Down mais confiável via Witches Remains)
- Dano similar, melhor quando sobrevivência é um problema.

**Dicas de Build:**
- Pelo menos 1 set Brotherhood e 1 set Puppeteer por time
- Skill timings em torno de 18 segundos
- Testar Lelwanis em free-cast para ver se dá mais dano

### 3.2 Vasska (Recomendado: Necrosis ou Poison)

**Mecânica Principal:** Spawna inimigos constantemente e pode aplicar Decrease Attack. Teoricamente vulnerável a Heal Reduction, mas...

**Dificuldade:** Fácil-Médio — Recomendado para Semana 1

**Descoberta Importante da Comunidade:** Testes mostraram que times SEM Heal Reduction focados em dano bruto performam MELHOR. Um time Necro similar ao de Thelandor alcançou **237M de dano** — superior a times com Heal Reduction aplicada.

**Opções de Time:**
- **Necro (melhor):** Composição similar a Thelandor (Lelwanis core), focando em burst damage puro
- **Poison:** **Sigrid** como core — fornece Heal Reduction + DPS AoE sólido com debuffers habilitando
- **Frost:** Viável se falta profundidade em Necro. **Vidimir** é MVP para dano AoE (superior a Hvitar neste fight)

**Dica:** Talent tree inferior em Lelwanis performa melhor que o superior neste fight.

**NOTA ESTRATÉGICA:** Como Thelandor e Vasska ambos favorecem times Necro, você só pode usar Necro em UM deles na Semana 1. Teste os dois e salve o que der melhor resultado!

### 3.3 Vinyara (Recomendado: Flora/Wild ou Dauntless)

**Mecânica Principal:** Ganha um escudo poderoso + Increased Defence + Damage Reduction. Quebrar o escudo rápido é a chave para pontuação alta. Recompensa dano Single-Target.

**Dificuldade:** Médio — Recomendado para Semana 1 ou 2

**Time Principal — Brody "Shield Breaker" Core:**

| Slot | Herói | Função | Notas de Build |
|---|---|---|---|
| 1 | **Brody** | Tank/Utility (ESSENCIAL) | Resistance, Accuracy, Skill Haste artifact. Remove escudo do boss instantaneamente. Fornece DEF buffs ao time |
| 2-5 | **4x DPS puros** | Dano máximo | Como Brody absorve tudo, não precisa de healer dedicado |

**Performance:** 250M+ dano possível. Com gear melhor: 280-290M realista.

**CRÍTICO:**
- Manter a rotação de skill de Brody sincronizada com o timing do escudo de Vinyara
- Se Brody morrer cedo, a run colapsa — investir em stats defensivos para ele
- Sem Flora: Times Dauntless ou single-target burst ainda conseguem 200M+

### 3.4 Twitch (Recomendado: AoE Nukers)

**Mecânica Principal:** **PUNE DEBUFFERS.** Não use poisoners ou times baseados em debuffs!

**Dificuldade:** Difícil

**Estratégia:**
- Trazer nukers AoE com dano direto (não DoT)
- Evitar completamente: Poison teams, debuff-heavy comps
- Priorizar: Raw AoE damage, buff stacking no próprio time

### 3.5 Khrysos (Recomendado: Dauntless ou Shield Breakers)

**Mecânica Principal:** Ataques básicos (basic attacks) ativam dano extra. O boss usa escudos.

**Dificuldade:** Médio-Difícil

**Estratégia:**
- Considerar times Dauntless (Lightning/Dauntless teams)
- Trazer shield breakers como Brody ou heróis com dispel
- Foco em ataques frequentes (heroes com alta velocidade de ataque)
- Khrysos como herói é um tank de Fire com auto-shield e cura — como BOSS, ele ganha escudos que precisam ser quebrados

### 3.6 Tamar (Recomendado: Poison/Debuff Teams)

**Mecânica Principal:** Escala com stacks de debuffs no boss. Quanto mais debuffs, mais dano.

**Dificuldade:** Médio

**Estratégia:**
- **Poison teams são excelentes** aqui (oposto do Twitch!)
- Empilhar o máximo de debuffs possível
- Debuffers + DPS que escalam com debuffs
- Accuracy é crítica: Tamar e debuffers precisam de Accuracy > 290

---

## 4. Continental Challenge S4 — Composições de Alta Pontuação (Dance of Misfortune)

> ⚠️ **ATENÇÃO: ESTA SEÇÃO É REFERÊNCIA FUTURA APENAS (S4)**
> Estas composições e bosses NÃO estão ativos na S1. O projeto NÃO deve usar estas informações para planejar o evento atual. Manter como referência para seasons futuras quando o jogador avançar para S4.
> Os bosses de S4 (Sagomir, Tioh, Sigrid, Feenja, Huldork, Bionphray) são DIFERENTES dos bosses de S1 (Thelandor, Vasska, Twitch, Vinyara, Khrysos, Tamar).

### 4.1 Boss Sagomir
- **Time:** Synarell + Paixton + Karf + Durem + Aschetius
- **Aura:** Aschetius Attack Aura + Tressym Familiar
- **Requisitos chave:** Synarell Skill Haste > 65; Paixton/Karf Accuracy > 230; Karf Accuracy > 290
- **Substitutos:** Aschetius → Beags; Synarell → Khrysos ou Oggok (se substituir, use 2 supports)
- **Nota:** Ajustar equipamento para Aschetius ter maior Crit Damage do time (faz inimigos se agruparem nele, maximizando AoE)

### 4.2 Boss Tioh
- **Time:** The Dark Lady + Felosia + Lelwanis + Bernade + Irzillas
- **Aura:** Irzillas Attack Aura + Tressym Familiar
- **Requisitos:** Dark Lady: ATK > HP, Accuracy > 290; Felosia: Enlightenment, Skill Haste ~63; Irzillas/Bernade: HP e Defense
- **Nota:** Sustain depende da passiva de The Dark Lady. Se Lelwanis morrer cedo, o dano cai drasticamente — retente até obter score satisfatório.

### 4.3 Boss Sigrid
- **Time:** Journ + Reytah + Rook + Whisk + Sacredeia
- **Aura:** Rook Attack Aura + Tressym Familiar
- **Requisitos:** Sacredeia Accuracy > 290; Journ/Reytah Accuracy > 230, Skill Haste > 40; Journ Resistance > 260, Enlightenment ≥ 80
- **Substitutos:** Journ → Khrysos ou Oggok

### 4.4 Boss Feenja
- **Time:** Irmoush + Tamar + Shai'nachtan + Alaura + Perkunte
- **Aura:** Shai'nachtan Enlightenment Aura + Tressym Familiar
- **Requisitos:** Tamar/Irmoush Accuracy > 290; Irmoush foco em Defense; Tamar foco em Skill Haste; Shai'nachtan Resistance > 400
- **Substitutos:** Irmoush → Nathaniel; Alaura → Nissa

### 4.5 Boss Huldork
- **Time:** Sagomir + Mithrasea + Huberg + Gladys + Lorentheel
- **Aura:** Gladys Attack Aura + Tressym Familiar
- **Requisitos:** Sagomir Resistance/Accuracy > 290; Lorentheel ATK > 6000 (com Dawn Pipe Organ) ou usar Golden Antlers
- **Substitutos:** Mithrasea → Gillian; se Gladys sem exclusive artifact, dar Witch's Remains + Titan Rib em Sagomir
- **Nota:** Deploy Sagomir primeiro; Huberg deve ter o menor HP do time

### 4.6 Boss Bionphray
- **Time:** Vinyara + Beldelle + Fredegonda + Shinnah + Zhorak
- **Aura:** Beldelle Attack Aura + **Mimic Familiar** (não Tressym!)
- **Requisitos:** Shinnah/Vinyara Accuracy > 290; Vinyara Skill Haste > 175 (!!)
- **Estratégia especial:** Vinyara drena Ultimate Energy do boss + Mimic aplica Enhanced Recharging Speed Penalty → impede o boss de usar skills → elimina pressão de sobrevivência
- **Build Vinyara:** 2pc Sunfire's Glow + 2pc Gem's Inspiration para atingir Skill Haste necessário

---

## 5. Shadow Dungeon — Mecânica e Otimização

### 5.1 Como Funciona

1. Você escolhe **3 Shadow Challenges semanais** (missões como: matar dragões, remover burn, aplicar attack down)
2. Cada challenge tem **3 níveis progressivos** (ex: derrotar 10 → 20 → 50 inimigos)
3. Completar os desafios gera **Shadow Amethysts** (até ~60/semana, ~15 por desafio completado)
4. Enquanto um challenge está **ativo (não completado)**, você recebe **10 Double Concentrates por dia** (resetam diariamente)

### 5.2 Double Concentrates — Regras (CONFIRMADO IN-GAME 01/Mar/2026)

- **10 Double Concentrates por dia** — cada drop duplo consome 1. Usou os 10, sem mais drops duplos nesse dia. Reseta no dia seguinte.
- **3 dungeons selecionadas por semana** para receber drops duplos
- **Coletar amethysts de uma dungeon = dungeon FIXA a semana toda** (continua dando drops duplos com os 10 concentrates diários)
- **NÃO coletar = pode TROCAR a dungeon no dia seguinte** (flexibilidade de farm)
- **Total de drops duplos é o MESMO** em ambos os casos (10/dia). A diferença é apenas QUAIS dungeons recebem o bônus.

### 5.3 Otimização de Shadow Dungeon

```
A decisão é: FLEXIBILIDADE vs AMETHYSTS IMEDIATAS.
- Coletar = dungeon fixa + amethysts agora
- Não coletar = pode trocar dungeon amanhã
- Total de drops duplos = 10/dia independente da escolha
```

**Estratégia recomendada:**
1. **No início da semana:** Selecione 3 dungeons para drops duplos
2. **Se precisa farmar dungeons variadas:** NÃO colete as amethysts — assim pode trocar de dungeon no dia seguinte
3. **Se quer focar em 3 dungeons específicas a semana toda:** Colete as amethysts — dungeon fica fixa com drops duplos
4. **Use os 10 Double Concentrates DIARIAMENTE** — não acumulam, reseta todo dia
5. **Repita na próxima semana** com novas seleções

### 5.4 Dica de Time para Shadow Dungeon

- Times de **Venom/Poison** são eficazes para completar as dungeons de shadow
- Não é um evento baseado em pontos — apenas continue jogando dungeons
- O farming de dungeon durante o evento é duplamente eficiente: você ganha Amethysts E materiais com drop duplo

---

## 6. Economia de Shadow Amethysts — Cálculo F2P

### 6.1 Fontes de Shadow Amethyst

| Fonte | Ametistas Estimadas/Semana | Total em 4 Semanas |
|---|---|---|
| Shadow Dungeon Challenges | ~60 | ~240 |
| Continental Bosses (participação) | Variável | ~100-200 |
| Leaderboard Rewards | Variável (rank-dependent) | 0-100+ |
| Recompensas de login/missões | Variável | ~50-100 |

### 6.2 Metas de Gasto

| Meta | Custo em Amethysts |
|---|---|
| **Utior (Lendário gratuito)** | **450** |
| Cosméticos (Print of Shadow etc.) | ~350 adicionais |
| **Total para tudo** | **~800** |

### 6.3 Realidade F2P

- Jogadores F2P disciplinados conseguem o Utior com planejamento consistente
- Para cosméticos adicionais, é necessário boa performance no leaderboard
- Focar primeiro em Utior, depois avaliar se sobram Amethysts para cosméticos

---

## 7. Leaderboard — Mecânica e Recompensas

### 7.1 Recompensas por Ranking

| Rank | Recompensa Destaque |
|---|---|
| Rank 1 | Echo of Eclipse x10,000 |
| Top tiers | Affinity Solvent + Shadow Amethysts + materiais raros |
| Participação | Shadow Amethysts básicas + recursos |

### 7.2 Estratégia de Leaderboard

- **Reseta semanalmente** — 3 rodadas totais de recompensas
- Use seu time mais forte no boss mais fácil para maximizar dano
- Foque em **poucos bosses com alta pontuação** em vez de espalhar esforço igualmente
- Na Semana 1, com apenas 2 bosses, a competição é entre TODOS os jogadores — oportunidade de rankear alto

---

## 8. Plano Dia a Dia — Template para o Projeto Gerar

> O projeto CloudCode deve usar este template junto com o inventário de heróis para gerar o plano personalizado.

### 8.1 Dados que o Projeto Precisa Cruzar

Para gerar o plano ótimo, o projeto precisa acessar:

1. **Inventário de heróis do jogador** (nome, raridade, elemento, nível, gear)
2. **Times já montados** (composições salvas)
3. **Nível atual de Stamina e ritmo de regeneração**
4. **Progresso atual no evento** (quantos Shadow Amethysts já tem)
5. **Dia atual do evento / semana atual**

### 8.2 Lógica de Decisão para Alocação de Bosses

```
PARA CADA semana DO evento:
  1. Listar bosses disponíveis nesta semana
  2. Para cada boss, verificar quais heróis do inventário atendem:
     - Elemento correto (ou neutro) para o boss
     - Roles necessários (DPS, Tank, Support, Debuffer)
     - Stats mínimos (Accuracy, Skill Haste, etc. conforme Seção 3-4)
  3. Classificar bosses por "facilidade" baseado na profundidade de roster:
     - Boss mais fácil = boss onde o jogador tem o time MAIS FORTE disponível
  4. Alocar o time mais forte ao boss mais fácil (maximizar leaderboard)
  5. Alocar times secundários aos demais bosses
  6. Garantir que NENHUM herói se repete entre os times da mesma semana
  7. Salvar composição vencedora para referência nas próximas semanas
```

### 8.3 Lógica de Shadow Dungeon

```
PARA CADA semana:
  1. Escolher 3 Shadow Challenges baseado nas dungeons que o jogador mais precisa
     Prioridade: gear > talentos > recursos (ajustável pelo jogador)
  2. Calcular quantos Double Concentrates por dia
  3. Distribuir stamina: X% para bosses continentais, Y% para Shadow Dungeon
  4. Estimar progresso de cada challenge — avisar para NÃO completar cedo demais
  5. Completar challenges apenas no último dia útil da semana
```

### 8.4 Template de Plano Diário

```
=== DIA [X] — SEMANA [Y] do Imperial Shadow Recast ===

🎯 PRIORIDADES DO DIA:
  - [ ] Usar Double Concentrates em: [Dungeon A], [Dungeon B], [Dungeon C]
  - [ ] Progresso do Shadow Challenge: [X/Y] — Meta: NÃO completar até dia [Z]
  - [ ] Continental Boss (se dia de boss): [Boss Name] com [Time Composto]

⚡ STAMINA:
  - Stamina disponível: [N]
  - Alocação recomendada:
    - Shadow Dungeon (com double drop): [N1] runs
    - Continental Boss (se aplicável): [N2] tentativas
    - Farming regular: [N3] runs

📊 PROGRESSO:
  - Shadow Amethysts: [atual] / 450 (Utior) / 800 (tudo)
  - Heróis lockados esta semana: [lista]
  - Heróis disponíveis para próximos bosses: [lista]

💡 NOTAS:
  - [Dicas contextuais baseadas no dia do evento]
```

---

## 9. Atributos-Chave por Tipo de Herói (Referência Rápida)

### 9.1 Thresholds de Stats para Continental Bosses

| Stat | Threshold Mínimo | Contexto |
|---|---|---|
| **Accuracy** (Debuffers) | > 230 (básico), > 290 (ideal) | Necessário para aplicar debuffs com consistência |
| **Skill Haste** (Support/Control) | > 40 (básico), > 65 (Synarell), > 175 (Vinyara em Bionphray) | Rotação de skills mais rápida |
| **Resistance** (Tanks especiais) | > 260 (Journ), > 400 (Shai'nachtan) | Resistir a debuffs do boss |
| **Enlightenment** | > 80 (mínimo), > 400 (com Gem's Inspiration) | Escala dano de certas habilidades |
| **Crit Rate / Crit Damage** | Máximo possível | Para DPS principais como Lelwanis |
| **ATK** | > 6000 (Lorentheel com Dawn Pipe Organ) | Para DPS scaling |

### 9.2 Artifact Sets Importantes

| Set | Uso |
|---|---|
| **Witches Remains** | Defence Down (Irzillas, Zhar'loth) |
| **Ancestral Protection** | Sobrevivência (Torrin) |
| **Brotherhood** | Pelo menos 1 por time de boss |
| **Puppeteer / Puppeteer's Inspiration** | Pelo menos 1 por time de boss |
| **Gem's Inspiration** | Para escalar Enlightenment em comps específicas |
| **Sunfire's Glow** | Skill Haste para Vinyara |
| **Chest of Radiance** | Damage boost para Synarell (se Skill Haste já suficiente) |
| **Gory Injector** | DPS secundário (Alaura com ATK/Enlightenment) |
| **Dawn Pipe Organ** | DPS para Lorentheel (se ATK > 6000) |
| **Golden Antlers** | Alternativa se ATK insuficiente para Dawn Pipe Organ |
| **Titan Rib** | Alternativa para Sagomir |
| **Gatekeeper's Staff** | Skill Haste para supports |

---

## 10. Familiar Recommendations

| Familiar | Uso Principal |
|---|---|
| **Tressym** | Padrão para a maioria dos bosses — maximiza dano do time |
| **Mimic** | ESPECIFICAMENTE para boss Bionphray — aplica Enhanced Recharging Speed Penalty com Vinyara |

---

## 11. Heróis-Chave Mencionados (Referência Cruzada para Inventário)

> O projeto deve cruzar esta lista com o inventário do jogador para determinar viabilidade.
>
> ⚠️ **NOTA S1:** Nem todos os heróis listados abaixo estão disponíveis na Season 1. Heróis marcados com `[S2+]`, `[S3+]` ou `[S4+]` foram introduzidos em seasons posteriores e NÃO existem no servidor S1. O projeto deve IGNORAR esses heróis ao planejar o evento atual. Heróis sem marcação são disponíveis desde S1 ou têm disponibilidade incerta — o projeto deve validar contra o inventário real do jogador.

### 11.1 Necrosis

| Herói | Raridade | Role | Usado em Boss |
|---|---|---|---|
| Lelwanis | Legendary | DPS Principal | Thelandor, Vasska, Tioh |
| Premtsa | Legendary | DPS | Thelandor |
| Irzillas | Legendary | Debuffer (Def Down) | Thelandor, Tioh |
| Torrin | Legendary | Tank/Support | Thelandor |
| Sintrellia | Legendary | Enabler (Summon Damage) | Thelandor |
| Zhar'loth | Legendary | AoE Def Down | Thelandor (alt) |
| Felosia | Legendary | Shield Support | Thelandor (alt), Tioh |
| The Dark Lady | Legendary | Versatile/Sustain | Tioh |
| Bernade | ? | Tank/Support | Tioh |
| Utior | Legendary | Suporte/Utility | Recompensa do evento |

### 11.2 Poison

| Herói | Raridade | Role | Usado em Boss |
|---|---|---|---|
| Sigrid | Rare | Heal Reduction + AoE DPS | Vasska (alt), Sigrid boss |
| Ergander | Legendary | Tank | Geral Poison |
| Lothair | ? | DPS (escala com poison stacks) | Tamar |
| Oggok | ? | Support/Debuff removal | Geral / substituto |
| Rook | ? | DPS | Boss Sigrid |
| Sacredeia | ? | Debuffer | Boss Sigrid |
| Whisk | ? | ? | Boss Sigrid |
| Reytah | ? | Support/Debuff amplifier | Boss Sigrid |
| Journ | ? | Support/Tank | Boss Sigrid |

### 11.3 Fire

| Herói | Raridade | Role | Usado em Boss |
|---|---|---|---|
| Khrysos | Legendary | Tank/Shield Breaker | Boss Khrysos (como herói, substituto em vários) |
| Aschetius | Legendary | DPS Burn core | Boss Sagomir |
| Durem | ? | DPS | Boss Sagomir |
| Karf | ? | Debuffer | Boss Sagomir |
| Paixton | ? | DPS | Boss Sagomir |
| Gladys | ? | DPS (Attack Aura) | Boss Huldork |

### 11.4 Lightning/Dauntless

| Herói | Raridade | Role | Usado em Boss |
|---|---|---|---|
| Tamar | ? | Anti-buff / Debuffer | Boss Feenja, Boss Tamar |
| Nastjenka | Legendary | DPS (crit-based) | Geral Lightning |
| Irmoush | ? | Tank/Debuffer | Boss Feenja |
| Shai'nachtan | ? | Enabler (Enlightenment Aura) | Boss Feenja |
| Alaura | ? | Support/Secondary DPS | Boss Feenja |
| Perkunte | ? | DPS | Boss Feenja |
| Fungal-Glow | ? | Support/Shield | Geral Lightning |
| Grishnaar | ? | Tank | Geral Lightning |

### 11.5 Frost/Ice

| Herói | Raridade | Role | Usado em Boss |
|---|---|---|---|
| Vidimir | ? | AoE DPS (MVP para Frost no Vasska) | Vasska (alt) |
| Hvitar | ? | DPS (inferior a Vidimir neste contexto) | Vasska (alt) |
| Fredegonda | ? | DPS | Boss Bionphray |
| Shinnah | ? | Debuffer | Boss Bionphray |
| Zhorak | ? | DPS | Boss Bionphray |
| Beldelle | ? | DPS (Attack Aura) | Boss Bionphray |

### 11.6 Radiance/Flora/Wild

| Herói | Raridade | Role | Usado em Boss |
|---|---|---|---|
| Brody | ? | Tank/Shield Breaker (ESSENCIAL para Vinyara) | Vinyara |
| Vinyara | Legendary | Energy Drain/Control | Boss Bionphray |
| Synarell | ? | Support | Boss Sagomir |
| Eurion | Legendary | Support/Dispel | Substituto geral |
| Estella | ? | Support | Substituto geral |
| Lorentheel | ? | DPS | Boss Huldork |

### 11.7 Multi-uso / Substitutos Frequentes

| Herói | Utilidade |
|---|---|
| **Khrysos** | Substituto em quase qualquer time como support/tank |
| **Oggok** | Substituto em qualquer time como support |
| **Eurion** | Dispel + Support (mas elemento pode ser countered) |
| **Felosia** | Shield em qualquer time Necro |
| **Drizzt** (D&D collab) | DPS versátil se disponível |

---

## 12. Dicas Gerais da Comunidade

1. **Disciplina > Impulso:** Não gaste gemas em rolagens de dados aleatórias — guarde para banners e progressão.
2. **Stamina é o recurso mais precioso:** Gerencie cuidadosamente entre Continental Bosses e Shadow Dungeon.
3. **Discord/Comunidade:** Acompanhe composições emergentes — a meta evolui conforme jogadores testam novas combinações.
4. **O evento não drena recursos:** Diferente de outros gachas, você não precisa acumular ou gastar recursos raros para participar.
5. **Retry é grátis:** Nos Continental Bosses, você pode retentar até obter um score satisfatório.
6. **Profundidade > Poder bruto:** Ter 6 times razoáveis é melhor que ter 1 time perfeito e 5 fracos.
7. **F2P Top 100 é viável:** Focando nos 4 bosses mais fracos do servidor, contas F2P conseguiram Top 100.
8. **Promo Code ativo:** `REBORN1MTH` — resgate se ainda não fez.

---

## 13. Instruções para o Projeto CloudCode

### 13.1 O que o projeto deve fazer com este documento:

1. **⚠️ FILTRAR POR SEASON:** O jogador está na S1. Usar APENAS a Seção 3 (bosses S1) para planejamento. Ignorar Seção 4 (S4) para o evento atual.
2. **Parsear as informações de bosses e suas mecânicas**
3. **Cruzar com o inventário de heróis do jogador** para determinar quais bosses são viáveis — validar que cada herói sugerido realmente existe no inventário (heróis de S2+ não estarão disponíveis)
4. **Classificar bosses por facilidade** (baseado na profundidade de roster do jogador para cada boss)
5. **Gerar alocação de times por semana** (respeitando a regra de uso único)
6. **Calcular distribuição de stamina** entre Continental Bosses e Shadow Dungeon
7. **Gerar plano dia a dia** usando o template da Seção 8.4
8. **Estimar progresso de Shadow Amethysts** e projetar se o jogador alcançará 450 (Utior) ou 800 (tudo)
9. **Alertar** se o jogador não tem heróis suficientes para alguma semana

### 13.2 Prioridade de decisão (do mais importante ao menos):

1. Garantir 450 Shadow Amethysts para Utior
2. Maximizar Double Drops na Shadow Dungeon (farmando o que o jogador mais precisa)
3. Rankear o mais alto possível no Leaderboard (selecionar boss mais fácil para time mais forte)
4. Se sobrar: cosméticos com Shadow Amethysts excedentes

---

## 14. Fontes e Links Úteis

- [HellHades - Imperial Shadow Recast Event Guide](https://hellhades.com/dragonheir-imperial-shadow-recast-event-guide/)
- [HellHades - Easiest Continental Bosses Week 1](https://hellhades.com/easiest-continental-bosses-for-week-1-dragonheir-silent-gods/)
- [HellHades - F2P Progression Guide](https://hellhades.com/free-to-play-progression-guide-in-dragonheir-silent-gods/)
- [HellHades - Continental Challenge Guide (S4)](https://hellhades.com/dragonheir-continental-challenge-guide/)
- [Dragonheir Wiki - Continental Challenge High-Score Strategies (S4)](http://www.dragonheir.info/article/2179)
- [ItemLevel - Imperial Shadow Recast Breakdown](https://itemlevel.net/dragonheir-silent-gods-imperial-shadow-recast-event-guide-breakdown/)
- [HellHades - Event Calendar II Breakdown](https://hellhades.com/dragonheir-silent-gods-event-calendar-ii-breakdown/)
- [AllClash - Tier List (S4)](https://www.allclash.com/the-best-dragonheir-silent-gods-characters-tier-list/)
