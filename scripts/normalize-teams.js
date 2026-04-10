#!/usr/bin/env node
/**
 * normalize-teams.js
 * 
 * Normalizes teams.js by:
 * - Converting member objects from { name, element, school, role, rating, notes }
 *   to { id, role, notes }
 * - Converting captain from { hero: "Name", skill } to { id, skill }
 * - Converting DATA_HERO_FREQUENCY entries from { name, element, school, role, teams, activities }
 *   to { id, teams, activities }
 * - Keeping everything else as-is
 */

const fs = require('fs');

const HEROES_PATH = '/mnt/e/OneDrive/Games/Dragon Heir/app/data/heroes.js';
const TEAMS_PATH = '/mnt/e/OneDrive/Games/Dragon Heir/app/data/teams.js';

// ── Step 1: Build name→id map from heroes.js ──
const heroesRaw = fs.readFileSync(HEROES_PATH, 'utf8');
const heroesJson = heroesRaw
  .replace(/^\/\/.*\n/, '')
  .replace('window.DATA_HEROES = ', '')
  .replace(/;\s*$/, '');
const heroes = JSON.parse(heroesJson);

const nameToId = {};
heroes.forEach(h => { nameToId[h.name] = h.id; });
console.log(`Loaded ${heroes.length} heroes from heroes.js`);

// ── Step 2: Load teams.js using window mock ──
const teamsRaw = fs.readFileSync(TEAMS_PATH, 'utf8');
const window = {};
new Function('window', teamsRaw)(window);

const teams = window.DATA_TEAMS;
const frequency = window.DATA_HERO_FREQUENCY;
console.log(`Loaded ${teams.length} teams and ${frequency.length} frequency entries`);

// ── Step 3: Track unmapped names ──
const unmapped = new Set();

function resolveId(name) {
  if (nameToId[name] !== undefined) return nameToId[name];
  unmapped.add(name);
  return null;
}

// ── Step 4: Transform teams ──
for (const team of teams) {
  // Transform members
  if (team.members) {
    team.members = team.members.map(m => {
      const id = resolveId(m.name);
      const result = { id };
      result.role = m.role;
      if (m.notes !== undefined) result.notes = m.notes;
      return result;
    });
  }

  // Transform captain
  if (team.captain && team.captain.hero) {
    const id = resolveId(team.captain.hero);
    team.captain = { id, skill: team.captain.skill };
  }
}

// ── Step 5: Transform frequency table ──
const transformedFrequency = frequency.map(f => {
  const id = resolveId(f.name);
  return { id, teams: f.teams, activities: f.activities };
});

// ── Step 6: Log unmapped names ──
if (unmapped.size > 0) {
  console.log('\nUNMAPPED HERO NAMES (no id found):');
  for (const name of unmapped) {
    console.log(`  - "${name}"`);
  }
} else {
  console.log('\nAll hero names mapped successfully!');
}

// ── Step 7: Extract header comments from original file ──
const headerLines = [];
const rawLines = teamsRaw.split('\n');
for (const line of rawLines) {
  if (line.startsWith('//')) {
    headerLines.push(line);
  } else {
    break;
  }
}

// ── Step 8: Serialize to JS object syntax ──
function ind(level) {
  return '  '.repeat(level);
}

function serializeValue(val, level) {
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'string') return JSON.stringify(val);
  if (typeof val === 'number') return String(val);
  if (typeof val === 'boolean') return String(val);
  if (Array.isArray(val)) return serializeArray(val, level);
  if (typeof val === 'object') return serializeObject(val, level);
  return String(val);
}

function isSimpleValue(v) {
  return v === null || typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean';
}

function isSimpleObject(obj) {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj) &&
    Object.values(obj).every(isSimpleValue);
}

function serializeObject(obj, level) {
  const keys = Object.keys(obj);
  if (keys.length === 0) return '{}';

  // Short simple objects on one line
  if (isSimpleObject(obj)) {
    const oneLine = '{ ' + keys.map(k => `${k}: ${serializeValue(obj[k], 0)}`).join(', ') + ' }';
    if (oneLine.length < 160) return oneLine;
  }

  // Multi-line object
  const parts = [];
  parts.push('{');
  keys.forEach((k, i) => {
    const comma = i < keys.length - 1 ? ',' : '';
    const val = obj[k];
    const serialized = serializeValue(val, level + 1);
    if (serialized.includes('\n')) {
      // Multi-line value: key on same line as opening, rest indented
      const firstNewline = serialized.indexOf('\n');
      parts.push(`${ind(level + 1)}${k}: ${serialized}${comma}`);
    } else {
      parts.push(`${ind(level + 1)}${k}: ${serialized}${comma}`);
    }
  });
  parts.push(`${ind(level)}}`);
  return parts.join('\n');
}

function serializeArray(arr, level) {
  if (arr.length === 0) return '[]';

  // For arrays of simple objects (members, frequency), each on its own line
  const allSimple = arr.every(isSimpleObject);
  if (allSimple) {
    const lines = [];
    lines.push('[');
    arr.forEach((item, i) => {
      const comma = i < arr.length - 1 ? ',' : '';
      lines.push(`${ind(level + 1)}${serializeValue(item, level + 1)}${comma}`);
    });
    lines.push(`${ind(level)}]`);
    return lines.join('\n');
  }

  // For arrays of strings
  const allStrings = arr.every(item => typeof item === 'string');
  if (allStrings) {
    const oneLine = `[${arr.map(s => JSON.stringify(s)).join(', ')}]`;
    if (oneLine.length < 120) return oneLine;
  }

  // General array (complex objects like variants, tests)
  const lines = [];
  lines.push('[');
  arr.forEach((item, i) => {
    const comma = i < arr.length - 1 ? ',' : '';
    lines.push(`${ind(level + 1)}${serializeValue(item, level + 1)}${comma}`);
  });
  lines.push(`${ind(level)}]`);
  return lines.join('\n');
}

// ── Step 9: Parse section comments from original file ──
// Look for comment blocks that appear between team objects in the original
const commentMap = {}; // teamIndex -> comment text
let teamIdx = 0;
let pendingComments = [];
let insideArray = false;

for (let i = 0; i < rawLines.length; i++) {
  const trimmed = rawLines[i].trim();
  
  // Skip header (already captured)
  if (i < headerLines.length) continue;
  
  // Detect start of DATA_TEAMS array
  if (trimmed.startsWith('window.DATA_TEAMS')) {
    insideArray = true;
    continue;
  }
  
  if (!insideArray) continue;
  
  // Detect end of DATA_TEAMS array
  if (trimmed === '];') {
    insideArray = false;
    continue;
  }
  
  if (trimmed.startsWith('//')) {
    pendingComments.push(rawLines[i]);
  } else if (/^\{$/.test(trimmed) || /^\{\s*$/.test(trimmed)) {
    // Opening brace of a team object — not a nested one
    // Simple heuristic: if indentation is exactly 2 spaces, it's a top-level team
    if (rawLines[i].match(/^  \{/)) {
      if (pendingComments.length > 0) {
        commentMap[teamIdx] = pendingComments.join('\n');
        pendingComments = [];
      }
      teamIdx++;
    }
  } else {
    // Non-comment, non-brace line — part of team data
    // Only reset pending if we haven't reached a team start
    // Actually, keep pending comments across data lines within a team
  }
}

console.log(`Found section comments for ${Object.keys(commentMap).length} team positions`);

// ── Step 10: Build output ──
let output = '';
output += headerLines.join('\n') + '\n';
output += 'window.DATA_TEAMS = [\n';

teams.forEach((team, i) => {
  if (commentMap[i]) {
    output += commentMap[i] + '\n';
  }
  output += `  ${serializeValue(team, 1)}`;
  if (i < teams.length - 1) {
    output += ',';
  }
  output += '\n';
});

output += '];\n\n';

// Frequency section
output += '// ============================================================\n';
output += '// HERO FREQUENCY TABLE — how often each hero appears in teams\n';
output += '// ============================================================\n';
output += 'window.DATA_HERO_FREQUENCY = [\n';
transformedFrequency.forEach((entry, i) => {
  const comma = i < transformedFrequency.length - 1 ? ',' : '';
  output += `  ${serializeValue(entry, 1)}${comma}\n`;
});
output += '];\n';

// ── Step 11: Write output ──
fs.writeFileSync(TEAMS_PATH, output, 'utf8');
console.log(`\nWrote normalized teams.js (${output.length} bytes)`);
console.log('Done!');
