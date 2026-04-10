# Teams Page Activity Finder Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refazer a pagina de `Times` para encontrar rapidamente o time certo por atividade, com combobox de atividade, lista unica de cards e detalhe de composicao com artefatos por heroi.

**Architecture:** A implementacao vai substituir a renderizacao atual agrupada por atividade por um fluxo `activity finder -> filtered team list`. O componente `Teams` passa a manter dois filtros separados: `atividade selecionada` e `busca secundaria de times`. O detalhe do card continua baseado no dataset real de `DATA_TEAMS`, mas com hierarquia visual nova: resumo compacto fechado, detalhe rico apenas no expandido. O trabalho primario acontece em `app/`; se o runtime publicado continuar usando `dh/`, os arquivos equivalentes serao espelhados no fim.

**Tech Stack:** Vanilla JS, `window.DATA_TEAMS`, `window.DATA_HERO_FREQUENCY`, `R.el`, `D.hero()`, Node para smoke tests, CSS utilitario + `app/css/custom.css`

**Design doc:** `docs/plans/2026-03-20-teams-page-activity-finder-design.md`

---

### Task 1: Criar um smoke test para os novos helpers de busca

**Files:**
- Create: `scripts/test-teams-activity-finder.js`
- Read: `app/js/components/teams.js`
- Read: `app/data/teams.js`
- Read: `app/data/heroes.js`
- Read: `app/js/utils/data.js`

**Step 1: Write the failing test**

Criar um script Node que:
- carrega `app/data/heroes.js` e `app/data/teams.js` via `vm`
- faz bridge de `window.DATA_*` para o contexto global do teste
- carrega `app/js/utils/data.js` antes de `app/js/components/teams.js`
- carrega `app/js/components/teams.js`
- falha se os helpers abaixo nao existirem:
  - `_activityOptions(teams)`
  - `_filterActivityOptions(options, query)`
  - `_filterTeams(teams)`
  - `_buildSearchText(team)`

O teste tambem deve falhar se:
- `_activityOptions()` nao retornar atividades unicas ordenadas
- `_filterActivityOptions()` nao encontrar `Continental Boss` ao buscar `cont`
- `_buildSearchText()` nao incluir artefatos dos membros
- `_buildSearchText()` nao incluir `mechanics.positioning`
- `_filterTeams()` nao respeitar `selectedActivity` + busca secundaria ao mesmo tempo

Esse smoke test deve testar apenas helpers puros e nao depender de DOM/render.

**Step 2: Run test to verify it fails**

Run:

```bash
node scripts/test-teams-activity-finder.js
```

Expected: FAIL, porque o componente atual nao foi desenhado como finder por atividade.

### Task 2: Reestruturar o estado do componente `Teams`

**Files:**
- Modify: `app/js/components/teams.js`

**Step 1: Replace old state with finder-oriented state**

Trocar o estado atual por algo equivalente a:

```js
_openCardId = '';
_teamQuery = '';
_selectedActivity = '';
_activityQuery = '';
_activityMenuOpen = false;
_activityHighlightIndex = 0;
```

Remover a dependencia do eixo principal `_activeActivity = 'all'` baseado em chips.

**Step 2: Add pure helpers**

Implementar helpers puros para:
- derivar atividades unicas a partir de `team.activity`
- filtrar opcoes de atividade pelo texto digitado
- construir texto de busca do time com boss, nome, herois, roles, artefatos e notas
- expor `positioning` e `key_mechanic` do dataset real
- ordenar resultados por relevancia simples:
  - atividade exata primeiro
  - match de busca secundaria depois
  - fallback alfabetico/ordem estavel

**Step 3: Run test to verify partial progress**

Run:

```bash
node scripts/test-teams-activity-finder.js
```

Expected: ainda pode falhar em renderizacao, mas os helpers puros devem existir.

### Task 3: Implementar o combobox de atividade com search

**Files:**
- Modify: `app/js/components/teams.js`
- Modify: `app/css/custom.css`

**Step 1: Build the combobox UI**

No topo da pagina, renderizar:
- label curta `Encontrar atividade`
- input clicavel/teclavel
- dropdown com opcoes de atividade
- botao `Limpar`

Comportamentos obrigatorios:
- clicar abre a lista
- digitar filtra as atividades
- selecionar uma atividade fecha a lista e filtra os times
- `Escape` fecha
- `ArrowUp`/`ArrowDown` navegam nas opcoes
- `Enter` seleciona a opcao em destaque
- clique fora fecha

**Step 2: Style the combobox for mobile and desktop**

Adicionar estilos especificos em `app/css/custom.css` para:
- container
- lista aberta
- item ativo/hover
- versao mobile com area de toque confortavel

**Step 3: Persist recent activities**

Salvar as ultimas atividades selecionadas em `localStorage` e mostrar ate `5` no topo do dropdown quando fizer sentido.

**Step 4: Run smoke test**

Run:

```bash
node scripts/test-teams-activity-finder.js
```

Expected: PASS nos helpers; render ainda sera verificada depois.

### Task 4: Redesenhar a lista principal para cards de time

**Files:**
- Modify: `app/js/components/teams.js`

**Step 1: Remove grouped-by-activity rendering**

Eliminar da renderizacao principal:
- `_groupTeamsByActivity()`
- `_renderActivitySections()`
- `_renderActivitySection()`

Substituir por:
- lista unica de cards
- cabecalho de resultados simples, ex. `3 resultados`
- ordenacao por relevancia/ordem estavel

**Step 2: Build the compact summary card**

Cada card fechado deve renderizar:
- atividade
- boss/encontro
- nome do time
- resultado
- afinidade
- hero strip com 5 retratos pequenos e nomes curtos

Nao renderizar artefatos no card fechado.

**Step 3: Ensure list is usable without selected activity**

Sem atividade escolhida:
- mostrar todos os times
- manter ordenacao limpa
- permitir que o filtro secundario funcione

### Task 5: Redesenhar o detalhe expandido do time

**Files:**
- Modify: `app/js/components/teams.js`
- Modify: `app/css/custom.css`

**Step 1: Rebuild expanded detail structure**

No expandido, renderizar os blocos:
- `Composicao`
- `Posicionamento`
- `Mecanica`
- `Notas/Testes`

Mapeamento de dados:
- `Posicionamento` = `team.mechanics.positioning`
- `Mecanica` = `team.mechanics.key_mechanic`
- se faltar dado, omitir o bloco

**Step 2: Make artifact per hero mandatory in the composition block**

Para cada `member` renderizar uma linha curta:

```text
[portrait] Heroi — role — artifact (Lv X)
```

Regras:
- usar `members[].artifact`
- usar `members[].artifact_level` quando existir
- se faltar artefato, exibir `Artefato nao registrado`

**Step 3: Limit noise**

Aplicar:
- 1 card expandido por vez, controlado por `_openCardId`
- notas longas com area recolhida ou bloco discreto
- sem tabela pesada

### Task 6: Adicionar busca secundaria de times

**Files:**
- Modify: `app/js/components/teams.js`

**Step 1: Add secondary search input**

Renderizar abaixo do combobox um input com placeholder:

```text
Refinar por boss, time, heroi ou artefato
```

**Step 2: Wire filtering**

Aplicar a busca secundaria sobre a lista de times ja reduzida pela atividade selecionada.

Cobrir no texto de busca:
- `team.name`
- `team.activity`
- `team.encounter.boss`
- nomes dos herois
- roles dos membros
- artefatos
- `notes`
- `tests[].notes`
- `mechanics.positioning`
- `mechanics.key_mechanic`

**Step 3: Verify with smoke test**

Run:

```bash
node scripts/test-teams-activity-finder.js
```

Expected: PASS.

### Task 7: Refinar responsividade e interacao

**Files:**
- Modify: `app/css/custom.css`
- Modify: `app/js/components/teams.js`

**Step 1: Add mobile-first layout polish**

Implementar:
- barra de filtros sticky; cabecalho de titulo/stats continua scroll normal
- stack vertical dos controles
- dropdown com max-height e scroll proprio
- cards empilhados

**Step 2: Add desktop refinement**

Implementar:
- largura central agradavel
- spacing melhor entre resumo e detalhe
- strip de herois mais compacto em telas largas

**Step 3: Keep one interaction model**

Nao criar sidebar separada para desktop. O mesmo fluxo precisa servir para ambos.

### Task 8: Manter `Herois mais recorrentes` como secao secundaria

**Files:**
- Modify: `app/js/components/teams.js`

**Step 1: Preserve frequency section**

Manter a secao baseada em `DATA_HERO_FREQUENCY`.

**Step 2: Downgrade its visual priority**

Deixar recolhida por padrao ou abaixo da lista principal, para nao competir com o finder de atividade.

**Step 3: Verify no regression**

Run:

```bash
node scripts/test-teams-activity-finder.js
```

Expected: PASS.

### Task 9: Espelhar a implementacao para `dh/` se esse runtime continuar ativo

**Files:**
- Copy to: `dh/js/components/teams.js`
- Copy to: `dh/css/custom.css`

**Step 1: Sync runtime files**

Se o site publicado continuar servindo do subpath `dh/`, espelhar os arquivos alterados de `app/` para `dh/`.

**Step 2: Verify mirror**

Run:

```bash
cmp -s app/js/components/teams.js dh/js/components/teams.js
cmp -s app/css/custom.css dh/css/custom.css
```

Expected: sem diferencas.

### Task 10: Validacao final

**Files:**
- Verify: `app/js/components/teams.js`
- Verify: `app/css/custom.css`
- Verify: `scripts/test-teams-activity-finder.js`

**Step 1: Run JS validation**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const vm = require('vm');
const ctx = { window: {}, console, localStorage: { getItem() { return null; }, setItem() {} } };
vm.createContext(ctx);
for (const f of ['app/data/heroes.js', 'app/data/teams.js']) {
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
}
ctx.DATA_HEROES = ctx.window.DATA_HEROES;
ctx.DATA_TEAMS = ctx.window.DATA_TEAMS;
ctx.DATA_HERO_FREQUENCY = ctx.window.DATA_HERO_FREQUENCY;
for (const f of ['app/js/utils/data.js', 'app/js/components/teams.js']) {
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
}
console.log(vm.runInContext('typeof Teams', ctx) === 'object' ? 'ok' : 'fail');
NODE
```

Expected: `ok`

**Step 2: Run finder smoke test**

Run:

```bash
node scripts/test-teams-activity-finder.js
```

Expected: PASS.

**Step 3: Manual UX checklist**

Verificar no browser:
- abrir `Times`
- abrir combobox
- digitar `cont`
- selecionar `Continental Boss`
- abrir um card
- confirmar artefato por heroi
- testar no celular e desktop

### Task 11: Commit only if a git repository is available

**Files:**
- Stage: `docs/plans/2026-03-20-teams-page-activity-finder-design.md`
- Stage: `docs/plans/2026-03-20-teams-page-activity-finder.md`
- Stage: `scripts/test-teams-activity-finder.js`
- Stage: `app/js/components/teams.js`
- Stage: `app/css/custom.css`
- Stage: `dh/js/components/teams.js`
- Stage: `dh/css/custom.css`

**Step 1: Check git availability**

Run:

```bash
git status --short
```

Expected in the current workspace snapshot: this may fail if the directory is not a git repository.

**Step 2: Commit if git exists**

```bash
git add docs/plans/2026-03-20-teams-page-activity-finder-design.md docs/plans/2026-03-20-teams-page-activity-finder.md scripts/test-teams-activity-finder.js app/js/components/teams.js app/css/custom.css dh/js/components/teams.js dh/css/custom.css
git commit -m "refactor: redesign teams page as activity finder"
```
