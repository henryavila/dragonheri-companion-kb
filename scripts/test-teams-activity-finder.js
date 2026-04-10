#!/usr/bin/env node

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function loadIntoContext(relPath, ctx) {
  const fullPath = path.join(ROOT, relPath);
  const source = fs.readFileSync(fullPath, 'utf8');
  vm.runInContext(source, ctx, { filename: relPath });
}

function optionText(option) {
  if (typeof option === 'string') return option;
  if (option && typeof option === 'object') return option.value || option.label || '';
  return '';
}

function run() {
  const ctx = {
    window: {},
    console,
    localStorage: {
      getItem() { return null; },
      setItem() {}
    }
  };
  vm.createContext(ctx);

  loadIntoContext('app/data/heroes.js', ctx);
  loadIntoContext('app/data/teams.js', ctx);

  ctx.DATA_HEROES = ctx.window.DATA_HEROES;
  ctx.DATA_TEAMS = ctx.window.DATA_TEAMS;
  ctx.DATA_HERO_FREQUENCY = ctx.window.DATA_HERO_FREQUENCY;

  loadIntoContext('app/js/utils/data.js', ctx);
  loadIntoContext('app/js/components/teams.js', ctx);

  const Teams = vm.runInContext('Teams', ctx);
  const teams = ctx.DATA_TEAMS;

  assert(Teams, 'Teams object was not loaded');
  assert.strictEqual(typeof Teams._activityOptions, 'function', 'Missing helper: _activityOptions(teams)');
  assert.strictEqual(typeof Teams._filterActivityOptions, 'function', 'Missing helper: _filterActivityOptions(options, query)');
  assert.strictEqual(typeof Teams._filterTeams, 'function', 'Missing helper: _filterTeams(teams)');
  assert.strictEqual(typeof Teams._buildSearchText, 'function', 'Missing helper: _buildSearchText(team)');

  const options = Teams._activityOptions(teams);
  const optionNames = Array.from(options, optionText);
  const expectedActivities = [...new Set(teams.map(team => team.activity).filter(Boolean))].sort((a, b) => a.localeCompare(b));

  assert.deepStrictEqual(optionNames, expectedActivities, 'Activity options should be unique and alphabetically ordered');

  const filteredOptions = Teams._filterActivityOptions(options, 'cont');
  const filteredOptionNames = Array.from(filteredOptions, optionText);
  assert(
    filteredOptionNames.includes('Continental Boss'),
    'Searching "cont" should surface "Continental Boss"'
  );

  const vinyara = teams.find(team => team.id === 'continental-boss-vinyara-fire-wild-brody');
  assert(vinyara, 'Fixture team for Vinyara was not found');

  const searchText = Teams._buildSearchText(vinyara);
  assert(searchText.includes('brody'), 'Search text should include hero names');
  assert(searchText.includes('felicity'), 'Search text should include all team members');
  assert(searchText.includes('brody isolado na frente'), 'Search text should include mechanics.positioning');

  Teams._selectedActivity = 'Continental Boss';
  Teams._teamQuery = 'brody';
  const filteredTeams = Teams._filterTeams(teams);

  assert.strictEqual(filteredTeams.length, 1, 'Selected activity + team query should narrow down to one team');
  assert.strictEqual(filteredTeams[0].id, 'continental-boss-vinyara-fire-wild-brody', 'Filter should return the Vinyara team');

  console.log('PASS');
}

try {
  run();
} catch (error) {
  console.error(`FAIL: ${error.message}`);
  process.exit(1);
}
