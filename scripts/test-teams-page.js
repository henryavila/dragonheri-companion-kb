#!/usr/bin/env node

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function read(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

const ctx = {
  console,
  window: {},
  localStorage: {
    getItem() { return null; },
    setItem() {}
  }
};

vm.createContext(ctx);
vm.runInContext(read('app/data/heroes.js'), ctx, { filename: 'app/data/heroes.js' });
vm.runInContext(read('app/data/teams.js'), ctx, { filename: 'app/data/teams.js' });

const heroMap = new Map((ctx.window.DATA_HEROES || []).map(hero => [hero.id, hero]));
ctx.D = {
  hero(id) {
    return heroMap.get(id) || null;
  }
};
ctx.R = {};

vm.runInContext(
  read('app/js/components/teams.js') + '\nthis.__TEAMS_COMPONENT__ = Teams;\n',
  ctx,
  { filename: 'app/js/components/teams.js' }
);

const Teams = ctx.__TEAMS_COMPONENT__;
const allTeams = ctx.window.DATA_TEAMS || [];

assert.ok(Teams, 'Expected Teams component to load');
assert.strictEqual(typeof Teams._buildSearchText, 'function', 'Expected Teams._buildSearchText(team)');
assert.strictEqual(typeof Teams._filterTeams, 'function', 'Expected Teams._filterTeams(teams)');
assert.strictEqual(typeof Teams._groupTeamsByActivity, 'function', 'Expected Teams._groupTeamsByActivity(teams)');

const superIce = allTeams.find(team => team.name === 'Super Ice');
assert.ok(superIce, 'Expected Super Ice test fixture');

const searchText = Teams._buildSearchText(superIce);
assert.match(searchText, /grand gladiator arena/i, 'Search text must include secondary activities');
assert.match(searchText, /drugo's blast jar/i, 'Search text must include artifact names');

Teams._searchQuery = 'grand gladiator arena';
Teams._activeActivity = 'all';
let filtered = Teams._filterTeams(allTeams);
assert.strictEqual(filtered.length, 1, 'Expected search by secondary activity to find one result');
assert.strictEqual(filtered[0].name, 'Super Ice', 'Expected secondary activity search to find Super Ice');

Teams._searchQuery = 'serpent deity';
Teams._activeActivity = 'all';
filtered = Teams._filterTeams(allTeams);
assert.strictEqual(filtered.length, 1, 'Expected artifact search to find one result');
assert.strictEqual(filtered[0].name, 'Poison Full', 'Expected artifact search to find Poison Full');

Teams._searchQuery = '';
Teams._activeActivity = 'Planar Expedition';
filtered = Teams._filterTeams(allTeams);
assert.strictEqual(filtered.length, 2, 'Expected Planar Expedition activity filter to return two fights');

const grouped = Teams._groupTeamsByActivity(allTeams);
assert.deepStrictEqual(
  JSON.parse(JSON.stringify(grouped.map(group => [group.activity, group.teams.length]))),
  [
    ['Heretical Ruins', 1],
    ['Planar Expedition', 2]
  ],
  'Expected grouping by primary activity'
);

console.log('teams page logic verified');
