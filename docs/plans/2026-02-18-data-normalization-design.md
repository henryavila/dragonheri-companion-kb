# Data Normalization Design

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Eliminar duplicacao de dados entre os 12 arquivos JS, usando `id` (numerico) como chave primaria e um modulo de lookup centralizado.

**Architecture:** Normalizar arquivos de dados para que cada informacao exista em um unico lugar. Criar modulo `data.js` que fornece API de lookup para resolver referencias entre arquivos. Componentes do app usam `data.js` em vez de acessar dados cruzados diretamente.

**Tech Stack:** Vanilla JS (sem mudanca de stack)

---

## Decisoes Tomadas

1. **`id` (numerico)** como chave primaria entre arquivos — campo unico, sem ambiguidade
2. **heroes.js rename:** `heroId` → `id`, `id` (slug) → `slug`. Todos os outros arquivos referenciam `id`
3. **bets.js snapshots mantidos** — registro historico, nao normalizar
4. **profile.js** perde listas duplicadas, fica so com recursos
5. **my-roster.js** so dados de Henry (id, skill_level, inspiration, notes)
6. **Modulo `data.js`** centraliza lookups
7. **Abordagem A: Normalizacao Completa** — migrar tudo de uma vez
8. **Artefatos usam slug** como ID (kebab-case do nome)

---

## 1. Modelo de Dados Normalizado

### Fontes de verdade (definem dados)

| Arquivo | Define | Chave |
|---|---|---|
| `heroes.js` | Identidade do heroi (name, element, school, skills, captain) | `id` (numerico) |
| `tiers.js` | Avaliacoes externas (ac_tier, hh ratings, di rankings) | `id` (numerico) |
| `artifacts.js` | Catalogo de artefatos + quem equipa | `id` (slug) |
| `mechanics.js` | Regras do jogo | N/A |
| `guides.js` | Guias de gameplay | N/A |

### Arquivos de estado do jogador

| Arquivo | Contem | Referencia |
|---|---|---|
| `my-roster.js` | Herois que Henry possui + progresso | `id` |
| `profile.js` | Recursos (Wyrmarrow, scrolls, etc). SO recursos. | Nada |
| `teams.js` | Composicoes de times | `id`, artifactId |
| `builds.js` | Build por heroi (talent, gear, artifact) | `id`, artifactId |
| `decisions.js` | Historico (texto livre) | `id` onde possivel |
| `plan.js` | Plano de jogo | `id` onde possivel |
| `bets.js` | Apostas (snapshots historicos — NAO normalizar) | Mantido |

---

## 2. Modulo de Lookup (`app/js/utils/data.js`)

```js
// Lookups primarios
D.hero(id)            // → { id, slug, name, element, school, rarity, skills, captain }
D.tier(id)            // → { ac_tier, hh_overall, hh_ratings, di_rank, di_ratings }
D.artifact(artId)     // → { id, name, rarity, stats, skill_name, skill_description }

// Dados de Henry
D.myHero(id)          // → { id, inspiration, skill_level, notes } ou null
D.isOwned(id)         // → boolean

// Merge completo
D.heroFull(id)        // → { ...hero, ...tierSafe, ...myHero } (tier sem name/role pra evitar colisao)

// Lookups por nome
D.heroByName(name)    // → mesmo que D.hero() mas busca por name
D.heroIdByName(name)  // → id (numerico)

// Listas
D.allHeroes()         // → array de todos herois
D.myRoster()          // → array de herois que Henry possui (merge completo)
D.teamMembers(teamId) // → array de herois do time com dados completos
```

Implementacao: indices (Maps) construidos no primeiro acesso. Fonte: `window.DATA_*` globals.

---

## 3. Mudancas por Arquivo de Dados

### heroes.js — rename IDs
- Renomear: `heroId` → `id` (numerico, chave primaria)
- Renomear: `id` (slug string) → `slug` (campo secundario, referencia dragonheir.info)
- Antes: `{ "id": "nastjenka", "heroId": 20740, ... }`
- Depois: `{ "id": 20740, "slug": "nastjenka", ... }`

### tiers.js — adicionar id, remover duplicados
- Adicionar: `id` em cada entrada (numerico, match com heroes.js)
- Remover: `element`, `rarity`, `season` (vem de heroes.js)
- Manter: `name` como campo informativo (nao como chave)

### my-roster.js — simplificar
- Antes: name, element, rarity, school, ac_tier, hh_rating, inspiration, skill_level, artifact, artifact_rarity, teams_count, role, notes
- Depois: id, inspiration, skill_level, notes
- Estrutura: array flat (sem agrupamento por elemento)

### profile.js — so recursos + dados unicos do jogador
- Remover: legendary_heroes[], artifact_allocation[], artifact_upgrade_order[], mythic_artifacts[]
- Manter: recursos, conta info, guild, arriving[], skill_scroll_plan[] (converter nomes → id), soul_imprints (converter nomes → id), artifact_crystal_budget

### teams.js — membros por id
- Antes: { name, element, school, role, rating, notes }
- Depois: { id, role, notes }
- Captain: id em vez de name

### artifacts.js — adicionar id (slug), centralizar assignment
- Adicionar: `id` (slug kebab-case) em cada artefato
- `equippedOn: id` (numerico) fica SO aqui
- Remover: artifact_allocation[] redundante

### builds.js — remover duplicados
- Remover: name, element, school, role, rarity
- Manter: id, priority, talent, gear, artifact (artifactId), captain, tips, sources

### decisions.js e plan.js — minima mudanca
- Onde houver referencia estruturada: usar id (numerico)
- Texto livre: continua como esta

### bets.js — NAO TOCA (snapshots historicos)

---

## 4. Impacto nos Componentes

| Componente | Usa hoje | Muda para |
|---|---|---|
| `heroes.js` (comp) | DATA_HEROES + DATA_MY_ROSTER por name | D.heroFull(), D.isOwned() |
| `teams.js` (comp) | Membro com name/element inline | D.hero(member.id) |
| `dashboard.js` | DATA_PROFILE.legendary_heroes, item.hero, item.name | D.myRoster().filter(rarity), D.hero(item.id) |
| `artifacts.js` (comp) | owned[].equipped_on name | D.hero(equippedOn) para nome |
| `tierlist.js` | DATA_TIERS por name | DATA_TIERS com id + D.hero() |
| `gear.js` (comp) | R.heroIdByName(h) para imagens | D.heroIdByName(h) ou id direto |
| `render.js` | R.heroIdByName() busca DATA_HEROES | Delega para D.heroIdByName() |

### Ordem de migracao

1. Renomear IDs em `heroes.js` (heroId → id, id → slug)
2. Criar `data.js` com indices e API
3. Adicionar id a `tiers.js`
4. Normalizar `my-roster.js`, `profile.js`, `teams.js`, `builds.js`
5. Normalizar `artifacts.js`
6. Atualizar componentes para usar `D.*`
7. Remover campos redundantes de `tiers.js`
8. Limpar `render.js`

### O que NAO muda
- `bets.js` — snapshots historicos
- `mechanics.js` — minima mudanca (key_heroes → id)
- `guides.js` — texto livre
- `gear.js` (data) — referencia herois por nome nos loadouts, manter como esta

### Cuidados no merge (heroFull)
- `tier` tem campos `name` e `role` que podem colidir com `hero.name`/`hero.role`
- Solucao: heroFull() exclui `name`, `role`, `id` do tier antes do spread
- DATA_HERO_FREQUENCY em teams.js tambem precisa ser normalizado (ou removido se derivavel)
