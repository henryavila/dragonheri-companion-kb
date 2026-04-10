# Team Building — Aprendizados Confirmados

> Padrões comprovados por testes reais do Henry. Usar como base para TODAS as recomendações de time.

---

## 1. Metodologia: Skills PRIMEIRO, Ratings DEPOIS

**Ratings (HH 0-5) são TIEBREAKERS, não critério principal.**

### Processo correto
1. Ler skills de TODOS os candidatos (`hero-skills-all.md`)
2. Identificar sinergias entre skills (applicator→detonator, summoner→amplifier, etc.)
3. Montar chain de sinergia (diagrama de quem alimenta quem)
4. Validar com ratings apenas para desempatar entre candidatos com sinergia similar
5. Recomendar teste prático e comparação numérica (mesmo conteúdo, trocar 1 herói)

### Exemplos comprovados
| Herói | Rating HH | Resultado REAL | Por quê |
|---|---|---|---|
| Lorentheel | **5.0** Goblin | **1:51 (PIOR)** | Ult cria buff domain SEM dano. Sem consumidores Rally = slot desperdiçado |
| Isitarian | **3.5** Goblin | **1:23 (MELHOR)** | Dragon hits extras por undead summon (sinergia Ladehlia) + Captain +18% ATK |
| Lossenia | **5.0** Goblin | Não testada ainda | Rating assume time Frost Chain com Hochadir. Sem detonador = Frost inútil |

**Regra:** Herói 3.5 COM sinergia > herói 5.0 SEM sinergia.

---

## 2. Papéis Funcionais (além de DPS/Tank/Healer)

Ao montar times, classificar heróis pelo papel FUNCIONAL, não pelo papel genérico:

| Papel | O que faz | Exemplos |
|---|---|---|
| **Applicator** | Aplica status em massa (Frost, Poison, etc.) | Lossenia (Frost AoE), Durango (Poison passiva AoE) |
| **Detonator** | Explode/consome status aplicado para dano massivo | Hochadir (detona Frost AoE), Rowena (800% em Frosted + ignora 40% DEF) |
| **Amplifier** | DPS própria baixa, mas MULTIPLICA dano de outros | Sintrellia (clona summon + buffa ATK undead), Isitarian (dragon hits extras por undead) |
| **Enabler** | Cria condições para outro herói brilhar | Lossenia habilita Rowena (Frost garantido → 800% Ult + DEF ignore) |
| **Self-sufficient** | Aplica E consome seu próprio setup | Rowena (Battle aplica Frost 50% → Ult detona 800%) |
| **Survival core** | Garante imortalidade do time | Torrin+Eurion (loop: Ally Protection → heal → anti-morte → Invisibilidade) |
| **Utility** | Shield, dispel, drain — útil mas substituível | Vinyara (shield + dispel + drain Ult Energy) |

### Regra de prioridade de slot:
1. **Survival core** (2 slots: tank + healer) — inegociável se time morre
2. **DPS carry** (1-2 slots) — quem faz o dano principal
3. **Amplifier/Enabler** (slot restante) — multiplica DPS carry
4. **Utility** — SÓ se survival não está garantido

---

## 3. Amplificador > Utility (quando survival está garantido)

**Comprovado por teste direto (Boss, mesmo conteúdo):**

| Slot 3 | Papel | Resultado | vs Baseline |
|---|---|---|---|
| Vinyara | Utility (shield+dispel) | 1.35M | — |
| Lossenia | Enabler (Frost pra Rowena) | 2.46M | **+82%** |
| Sintrellia | Amplifier (clone demon) | 3.12M | **+131%** |

**Lição:** Se o time NÃO MORRE com 2 supports (Torrin+Eurion), o 3° slot de support é DESPERDÍCIO. Trocar por amplificador = ganho de 80-130% DPS.

**Pergunta obrigatória antes de montar time:** "Esse slot de utility é realmente necessário, ou a sobrevivência já está resolvida?"

---

## 4. Chains de Sinergia Comprovadas

### Frost Chain (Applicator → Detonator)
```
Lossenia (tornado AoE Frost + marca aliado + basics bounce Frost)
    ↓ TODOS os inimigos ficam com Frost
Hochadir (detona Frost AoE + estende Frost +5s)
    ↓ explosão massiva
Rowena (Ult 800% em Frosted + ignora 20-40% DEF em Frosted)
    ↓ single-target devastador
```
- **Sem applicator:** Rowena depende do próprio Battle (50% chance) → inconsistente
- **Com Lossenia:** Frost GARANTIDO → Rowena sempre detona com 800%
- **REQUER detonador (Hochadir ou Rowena).** Lossenia sozinha = Frost sem payoff

### Summon Chain (Summoner → Amplifier → Multiplier)
```
Ladehlia (Shadow Demon — DPS persistente, escala com Satisfied stacks)
    ↓ demon = undead summoned
Sintrellia (Ult clona Shadow Demon → 2 demons + passiva +10% ATK todos undead)
    ↓ 2 demons + ATK buff
Isitarian (dragon faz 1 hit extra por undead summoned, até 3)
    ↓ com 2 demons = 2 hits extras por Battle
```
- **Cada peça multiplica as outras:** Mais summons = mais dragon hits = mais dano
- **Sintrellia DPS própria baixa** — mas DOBRA o DPS da Ladehlia via clone

### Dauntless Chain (ATK Speed → Basic Attacks → Procs)
```
Sutha (Aura +30% ATK Speed → mais basic attacks)
    ↓ mais basics
Nastjenka (Ult: feather procs em TODOS os basic attacks aliados por 10s)
    ↓ cada basic = feather AoE
Ivellios (passiva: 20% chance follow-up em basic attacks aliados Dauntless)
    ↓ follow-ups geram mais basics → mais feathers → loop
Garett (passiva: ATK +200% ao tomar dano → ATK escala com tempo)
```
- **Quanto mais ATK Speed, mais o loop acelera**
- **Funciona para burst (Goblin, waves) e sustained (boss com adds)**

### Immortality Loop (Survival Core) — MÓDULO UNIVERSAL
```
Eurion (Ally Protection TODOS → absorve todo dano do time)
    ↓ Eurion concentra todo o dano recebido
Torrin (cura Eurion + Dispel debuffs)
    ↓ se Eurion ia morrer:
Eurion passiva (invencível 5s)
    ↓ ganha tempo pra:
Torrin Ult (Invisibilidade 10s + Debuff Immunity pra TODOS)
    ↓ time reseta → loop reinicia
```
- **FUNCIONA EM QUALQUER TIME** — testado em Permafrost, Dauntless, e múltiplas atividades
- **Comprovado no Vortex:** Dauntless puro = 480k. Dauntless + Torrin+Eurion = 1.86M (+288%)
- **Comprovado no Grave of Rot lv8:** Time 5 Dauntless morria. Com Torrin+Eurion = venceu
- **Usado em:** Bosses/Frey, Temporal Vortex, Grave of Rot (3 atividades confirmadas)
- **Tão forte que torna 3° support redundante** (Vinyara desnecessária)
- **Regra:** SEMPRE considerar Torrin+Eurion como base, preencher 3 slots restantes com DPS/amplificadores
- **Padrão para conteúdo difícil:** Se time DPS puro não sobrevive, trocar 2 DPS mais fracos por Torrin+Eurion

---

## 5. Regras por Tipo de Conteúdo

| Conteúdo | Prioridade | Tipo de time |
|---|---|---|
| **Goblin Lair (XP farm)** | VELOCIDADE (burst) | AoE burst, matar waves rápido, DPS > survival |
| **Boss / Frey Corridor** | SUSTAINED DPS + SURVIVAL | Survival core + DPS carry + amplificador |
| **Arena (PvP)** | UNIQUE PvP SKILLS | Buff Prohibition, Ult drain, Ally Protection — insubstituíveis |
| **Dungeons (G.Venom, etc.)** | SCHOOL BONDS + RATING | Mono-elemento maximiza school bonds. Mas em níveis altos (lv8+), survival > bonds |
| **Frost Domain** | COUNTER-MECHANICS | Ataques rápidos (quebra escudo) + Debuff Immunity + NÃO usar Ice/Necro DPS |

### PvP: skills ÚNICAS importam mais que DPS
- **Voresh Buff Prohibition 10s** — inimigo nu por 10s, ninguém substitui
- **Vinyara drain Ult Energy** — atrasa power spike inimigo
- **Eurion Ally Protection** — redireciona TUDO pra si
- **Garett ATK +200% ao tomar dano** — escala perfeitamente em PvP (sempre toma dano)

---

## 6. Captain Skill — Impacto Comprovado

- **1 por time, escolhida pelo jogador.** NÃO acumula.
- **Impacto real testado:** Sintrellia Captain +24% ATK: 2.9M → 3.12M (+7.5%)
- **Ao recomendar time, SEMPRE indicar qual Captain usar**
- **Captain +24% ATK** (Sintrellia, Lossenia, Nastjenka): universal, sempre bom
- **Captain +18% ATK** (Isitarian): menor mas funcional
- **Captain +30% ATK Speed** (Sutha): específico pra Dauntless chain (mais basics = mais procs)
- **Captain +40 Accuracy** (Durango): situacional (conteúdo com evasão)

---

## 7. Testes — Como Validar Times

1. **Mesmo conteúdo, mesmo nível** — comparação justa
2. **Trocar 1 herói por vez** — isolar variável
3. **Anotar DPS total + DPS por herói** — entender quem contribui
4. **Anotar se time morreu** — survival check
5. **Testar com e sem Captain Skill** — impacto real
6. **Mínimo 2 runs** — evitar RNG outlier
