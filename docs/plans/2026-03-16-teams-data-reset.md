# Teams Data Reset Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Resetar completamente os dados de times e seus mapeamentos antigos, preservando um backup bruto do dataset anterior.

**Architecture:** O trabalho fica concentrado na camada de dados. Primeiro, capturar evidencia de que o estado antigo ainda existe. Depois, copiar o arquivo canonico antigo para backup, esvaziar `DATA_TEAMS` e `DATA_HERO_FREQUENCY`, e remover referencias `team_id` antigas de `profile.js`.

**Tech Stack:** Vanilla JS, arquivos de dados carregados como `window.DATA_*`, verificacao via `node`

**Design doc:** `docs/plans/2026-03-16-teams-data-reset-design.md`

---

### Task 1: Capturar o estado atual e escrever o teste de reset

**Files:**
- Read: `app/data/teams.js`
- Read: `app/data/profile.js`

**Step 1: Write the failing test**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('app/data/teams.js', 'utf8'), sandbox);
vm.runInContext(fs.readFileSync('app/data/profile.js', 'utf8'), sandbox);

if ((sandbox.window.DATA_TEAMS || []).length !== 0) {
  throw new Error('Expected DATA_TEAMS to be empty after reset');
}

if ((sandbox.window.DATA_HERO_FREQUENCY || []).length !== 0) {
  throw new Error('Expected DATA_HERO_FREQUENCY to be empty after reset');
}

const bosses = sandbox.window.DATA_PROFILE.continental_challenge.bosses;
if (bosses.some(b => b.team_id !== null)) {
  throw new Error('Expected all continental challenge team_id links to be null after reset');
}
NODE
```

Expected: FAIL, porque o dataset atual ainda contem times e links antigos.

**Step 2: Run test to verify it fails**

Run o mesmo comando e confirme que falha pela presenca do estado antigo.

### Task 2: Criar backup bruto do dataset atual

**Files:**
- Create: `docs/backups/2026-03-16-teams-pre-reset.js`
- Read: `app/data/teams.js`

**Step 1: Copy the canonical dataset**

Run:

```bash
mkdir -p docs/backups
cp app/data/teams.js docs/backups/2026-03-16-teams-pre-reset.js
```

**Step 2: Verify backup exists**

Run:

```bash
test -f docs/backups/2026-03-16-teams-pre-reset.js
```

Expected: exit 0.

### Task 3: Reset the teams dataset

**Files:**
- Modify: `app/data/teams.js`

**Step 1: Replace the file with the minimal empty dataset**

Target content:

```js
// teams.js — Reset 2026-03-16
// Legacy mapping preserved in docs/backups/2026-03-16-teams-pre-reset.js

window.DATA_TEAMS = [];
window.DATA_HERO_FREQUENCY = [];
```

**Step 2: Keep comments minimal**

Nao reintroduzir areas, tipos, exemplos, variantes ou placeholders.

### Task 4: Remove stale team links from profile

**Files:**
- Modify: `app/data/profile.js`

**Step 1: Clear only the old links**

No bloco `continental_challenge.bosses`, mudar os bosses com `team_id` antigo para:

```js
{ name: "Twitch", score: 44012678, team_id: null }
```

Aplicar o mesmo a `Vasska`, `Tamar` e `Thelandor`.

**Step 2: Preserve scores**

Nao alterar score, rank, amethysts ou reward.

### Task 5: Run the green verification

**Files:**
- Verify: `app/data/teams.js`
- Verify: `app/data/profile.js`
- Verify: `docs/backups/2026-03-16-teams-pre-reset.js`

**Step 1: Run the reset verification**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('app/data/teams.js', 'utf8'), sandbox);
vm.runInContext(fs.readFileSync('app/data/profile.js', 'utf8'), sandbox);

if ((sandbox.window.DATA_TEAMS || []).length !== 0) {
  throw new Error('DATA_TEAMS not empty');
}

if ((sandbox.window.DATA_HERO_FREQUENCY || []).length !== 0) {
  throw new Error('DATA_HERO_FREQUENCY not empty');
}

const bosses = sandbox.window.DATA_PROFILE.continental_challenge.bosses;
if (bosses.some(b => b.team_id !== null)) {
  throw new Error('Found stale team_id link in continental_challenge');
}

if (!fs.existsSync('docs/backups/2026-03-16-teams-pre-reset.js')) {
  throw new Error('Backup file missing');
}

console.log('teams reset verified');
NODE
```

Expected: PASS with `teams reset verified`.

**Step 2: Optional smoke check**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('app/data/teams.js', 'utf8'), sandbox);
console.log('DATA_TEAMS', sandbox.window.DATA_TEAMS.length);
console.log('DATA_HERO_FREQUENCY', sandbox.window.DATA_HERO_FREQUENCY.length);
NODE
```

Expected:

```text
DATA_TEAMS 0
DATA_HERO_FREQUENCY 0
```

### Task 6: Commit if repository becomes available

**Files:**
- Stage: `docs/backups/2026-03-16-teams-pre-reset.js`
- Stage: `docs/plans/2026-03-16-teams-data-reset-design.md`
- Stage: `docs/plans/2026-03-16-teams-data-reset.md`
- Stage: `app/data/teams.js`
- Stage: `app/data/profile.js`

**Step 1: Check VCS availability**

Run:

```bash
git status --short
```

Expected in this workspace today: falha, porque o diretório atual nao e um repositorio git.

**Step 2: If git exists later, commit**

```bash
git add docs/backups/2026-03-16-teams-pre-reset.js docs/plans/2026-03-16-teams-data-reset-design.md docs/plans/2026-03-16-teams-data-reset.md app/data/teams.js app/data/profile.js
git commit -m "refactor: reset teams dataset for rebuild"
```
