# Teams Page Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Recriar a pagina web de `teams` para mostrar resultados reais por atividade, com detalhes expansivos de artefato por heroi.

**Architecture:** A implementacao vai trocar a navegacao antiga baseada em categorias fixas por uma renderizacao derivada diretamente do dataset novo. O componente passa a filtrar e agrupar `DATA_TEAMS` por `activity`, renderiza cards de resultado com detalhes expansivos e mantem `DATA_HERO_FREQUENCY` apenas como secao secundaria. O codigo sera feito primeiro em `app/` e depois espelhado nos arquivos equivalentes em `dh/`.

**Tech Stack:** Vanilla JS, arquivos `window.DATA_*`, Node para testes e validacao

**Design doc:** `docs/plans/2026-03-16-teams-page-redesign-design.md`

---

### Task 1: Criar o teste de comportamento do componente

**Files:**
- Create: `scripts/test-teams-page.js`
- Read: `app/js/components/teams.js`
- Read: `app/data/teams.js`
- Read: `app/data/heroes.js`

**Step 1: Write the failing test**

Criar um script Node que:
- carrega `app/data/heroes.js` e `app/data/teams.js` em um `vm`
- carrega `app/js/components/teams.js`
- expoe `Teams` no contexto
- falha se os helpers abaixo nao existirem:
  - `_buildSearchText(team)`
  - `_filterTeams(teams)`
  - `_groupTeamsByActivity(teams)`

**Step 2: Verify red**

Run:

```bash
node scripts/test-teams-page.js
```

Expected: FAIL, porque o componente antigo nao tem esses helpers nem a logica nova de busca por artefato/atividade secundaria.

### Task 2: Reescrever o componente `teams`

**Files:**
- Modify: `app/js/components/teams.js`

**Step 1: Implement minimal data helpers**

Adicionar helpers puros para:
- derivar resumo
- construir texto de busca a partir de `activity`, `activities[]`, `encounter`, `name`, `members[].artifact`, `members[].role`, `notes` e nomes dos herois
- filtrar por busca e atividade
- agrupar por atividade primaria

**Step 2: Replace the old page structure**

Remover da renderizacao:
- view toggle `Ativos/Todos/Referencia`
- categorias hardcoded antigas
- accordion centrado em taxonomia legada
- tabela antiga como parte principal da pagina

Construir:
- cabecalho novo
- cards-resumo
- busca unica
- chips reais por atividade
- secoes por atividade
- cards de resultado com detalhes expansivos

**Step 3: Add artifact-first details**

No corpo expansivel de cada card, renderizar:
- encontro
- artefatos por heroi
- notas
- evidencia `tests[]`

**Step 4: Verify green**

Run:

```bash
node scripts/test-teams-page.js
```

Expected: PASS.

### Task 3: Manter a secao secundaria de recorrencia

**Files:**
- Modify: `app/js/components/teams.js`

**Step 1: Reintroduce hero frequency as a secondary block**

Adicionar uma secao recolhida por padrao chamada `Herois mais recorrentes`, com lista simples e ordenacao por frequencia.

**Step 2: Keep it visually subordinate**

Nao usar tabela dominante nem fazer a pagina depender dessa secao para navegacao.

**Step 3: Verify behavior**

Run:

```bash
node scripts/test-teams-page.js
```

Expected: PASS sem regressao na busca e no agrupamento.

### Task 4: Espelhar a implementacao para o runtime `/dh`

**Files:**
- Copy to: `dh/js/components/teams.js`
- Copy to: `dh/data/teams.js`
- Copy to: `dh/data/profile.js`

**Step 1: Sync runtime files**

Espelhar manualmente os arquivos canonicos de `app/` para `dh/` que influenciam a pagina de `teams`.

**Step 2: Keep canonical ownership clear**

Nao editar `dh/` como fonte primaria; `app/` continua sendo a origem do dado e do componente.

### Task 5: Atualizar cache-busting e validar dados

**Files:**
- Modify: `app/js/app.js`
- Modify: `dh/js/app.js`
- Modify: `app/index.html`
- Modify: `dh/index.html`

**Step 1: Bump the build version**

Atualizar `__BUILD_VERSION__` para forcar recarga de datasets.

**Step 2: Refresh relevant asset versions**

Atualizar os query params `?v=` dos assets alterados no `index.html`, pelo menos para:
- `./js/components/teams.js`
- `./js/app.js`

Se houver mudanca em CSS, atualizar tambem `./css/custom.css`.

**Step 3: Run data validation**

Run:

```bash
node scripts/validate-data.js
```

Expected: `VALIDACAO: OK`

### Task 6: Smoke-check the new page logic

**Files:**
- Verify: `app/js/components/teams.js`
- Verify: `dh/js/components/teams.js`

**Step 1: Re-run the component test**

Run:

```bash
node scripts/test-teams-page.js
```

Expected: PASS.

**Step 2: Confirm runtime mirror**

Run:

```bash
cmp -s app/js/components/teams.js dh/js/components/teams.js
cmp -s app/data/teams.js dh/data/teams.js
```

Expected: sem diferencas.

### Task 7: Commit if repository becomes available

**Files:**
- Stage: `docs/plans/2026-03-16-teams-page-redesign-design.md`
- Stage: `docs/plans/2026-03-16-teams-page-redesign.md`
- Stage: `scripts/test-teams-page.js`
- Stage: `app/js/components/teams.js`
- Stage: `app/js/app.js`
- Stage: `app/index.html`
- Stage: `dh/js/components/teams.js`
- Stage: `dh/js/app.js`
- Stage: `dh/index.html`
- Stage: `dh/data/teams.js`
- Stage: `dh/data/profile.js`

**Step 1: Check VCS availability**

Run:

```bash
git status --short
```

Expected in this workspace today: falha, porque o diretorio atual nao e um repositorio git.

**Step 2: Commit later if git exists**

```bash
git add docs/plans/2026-03-16-teams-page-redesign-design.md docs/plans/2026-03-16-teams-page-redesign.md scripts/test-teams-page.js app/js/components/teams.js app/js/app.js app/index.html dh/js/components/teams.js dh/js/app.js dh/index.html dh/data/teams.js dh/data/profile.js
git commit -m "refactor: redesign teams page around real activity results"
```
