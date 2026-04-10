#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'app', 'data');

const DATA_FILES = [
  'heroes.js',
  'tiers.js',
  'my-roster.js',
  'profile.js',
  'teams.js',
  'builds.js',
  'artifacts.js',
  'mechanics.js',
  'plan.js',
  'decisions.js'
];

const REQUIRED_GLOBALS = [
  'DATA_HEROES',
  'DATA_TIERS',
  'DATA_MY_ROSTER',
  'DATA_PROFILE',
  'DATA_TEAMS',
  'DATA_BUILDS',
  'DATA_ARTIFACTS',
  'DATA_MECHANICS',
  'DATA_PLAN',
  'DATA_DECISIONS'
];

const KNOWN_TIER_WITHOUT_ID = new Set(['Feliciberta', 'Perseus', 'Stegamoffyn', 'Naga', 'Faelin']);

const errors = [];
const warnings = [];

function err(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function loadDataContext() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  for (const file of DATA_FILES) {
    const full = path.join(DATA_DIR, file);
    vm.runInContext(read(full), ctx, { filename: full });
  }
  return ctx.window;
}

function validateRequiredGlobals(windowData) {
  for (const key of REQUIRED_GLOBALS) {
    if (typeof windowData[key] === 'undefined') {
      err(`Global ausente: ${key}`);
    }
  }
}

function validateHeroReferences(windowData) {
  const heroes = Array.isArray(windowData.DATA_HEROES) ? windowData.DATA_HEROES : [];
  const heroIds = new Set(heroes.map(h => h.id));

  if (heroIds.size !== heroes.length) {
    err('DATA_HEROES possui ids duplicados.');
  }

  const checks = [
    ['DATA_MY_ROSTER', windowData.DATA_MY_ROSTER || [], i => i.id],
    ['DATA_TEAMS.members', (windowData.DATA_TEAMS || []).flatMap(t => t.members || []), i => i.id],
    ['DATA_TEAMS.captain', (windowData.DATA_TEAMS || []).flatMap(t => t.captain ? [t.captain] : []), i => i.id],
    ['DATA_BUILDS', windowData.DATA_BUILDS || [], i => i.id],
    ['DATA_PROFILE.arriving', (windowData.DATA_PROFILE?.arriving || []), i => i.id],
    ['DATA_PROFILE.skill_scroll_plan', (windowData.DATA_PROFILE?.skill_scroll_plan || []), i => i.id],
    ['DATA_PROFILE.soul_imprints.used', (windowData.DATA_PROFILE?.soul_imprints?.used || []), i => i.id],
    ['DATA_PROFILE.soul_imprints.remaining', (windowData.DATA_PROFILE?.soul_imprints?.remaining || []), i => i.id],
    ['DATA_ARTIFACTS.owned.equippedOn', (windowData.DATA_ARTIFACTS?.owned || []), i => i.equippedOn],
    ['DATA_ARTIFACTS.upgrade_order.id', (windowData.DATA_ARTIFACTS?.upgrade_order || []), i => i.id]
  ];

  for (const [label, arr, getId] of checks) {
    for (const item of arr) {
      const id = getId(item);
      if (id == null) continue;
      if (!heroIds.has(id)) {
        err(`${label} referencia id inexistente: ${id}`);
      }
    }
  }
}

function validateTiers(windowData) {
  const tiers = Array.isArray(windowData.DATA_TIERS) ? windowData.DATA_TIERS : [];
  const missing = tiers.filter(t => !t.id);
  for (const item of missing) {
    if (!KNOWN_TIER_WITHOUT_ID.has(item.name)) {
      err(`Tier sem id fora da allowlist: ${item.name}`);
    }
  }
  if (missing.length) {
    warn(`DATA_TIERS: ${missing.length} entradas sem id (allowlist).`);
  }
}

function validateNoLegacyHeroIdKey() {
  const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.js') && f !== 'bets.js');
  for (const file of files) {
    const raw = read(path.join(DATA_DIR, file));
    if (raw.includes('heroId:')) {
      err(`Chave legada "heroId" encontrada em app/data/${file}. Use "id".`);
    }
  }
}

function validateGovernance(windowData) {
  const governance = windowData.DATA_MECHANICS?.data_governance;
  if (!governance) {
    err('DATA_MECHANICS.data_governance ausente.');
    return;
  }

  if (governance.canonical_source !== 'app/data/*.js') {
    err('DATA_MECHANICS.data_governance.canonical_source invalido.');
  }

  const planPath = path.join(ROOT, 'PLAN.md');
  const plan = read(planPath);
  if (!plan.includes('Fonte canonica operacional')) {
    warn('PLAN.md sem aviso explicito de fonte canonica operacional.');
  }
}

function main() {
  const windowData = loadDataContext();
  validateRequiredGlobals(windowData);
  validateHeroReferences(windowData);
  validateTiers(windowData);
  validateNoLegacyHeroIdKey();
  validateGovernance(windowData);

  if (errors.length) {
    console.log('VALIDACAO: FALHOU');
    for (const e of errors) console.log(`- ERRO: ${e}`);
    for (const w of warnings) console.log(`- AVISO: ${w}`);
    process.exit(1);
  }

  console.log('VALIDACAO: OK');
  if (warnings.length) {
    for (const w of warnings) console.log(`- AVISO: ${w}`);
  }
}

main();
