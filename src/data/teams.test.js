import { describe, it, expect } from 'vitest'
import { resolveCustomTeams, resolveActivities, legacyForActivity } from './teams.js'

// ── Fixtures ──────────────────────────────────────────────────
const TEAM_A = {
  id: 'vortex-dauntless',
  name: 'Dauntless Aggro',
  activity: 'Temporal Vortex',
  activities: ['Temporal Vortex'],
  members: [{ id: 20740, role: 'DPS' }, { id: 20890, role: 'DPS' }],
  affinity: '5 Vertigo',
  notes: 'Best team'
}

const TEAM_B = {
  id: 'vortex-poison',
  name: 'Poison Endurance',
  activity: 'Temporal Vortex',
  activities: ['Temporal Vortex'],
  members: [{ id: 20200, role: 'DPS' }, { id: 20670, role: 'DPS' }],
  affinity: '5 Devitalization',
  notes: 'Poison team'
}

const TEAM_LEGACY = {
  id: 'old-ice-team',
  name: 'Ice Elite',
  activity: 'Temporal Vortex — Dahwan\'s Realm',
  activities: ['Temporal Vortex — Dahwan\'s Realm'],
  members: [{ id: 22230, role: 'DPS' }],
  affinity: '5 Ice'
}

const ALL_TEAMS = [TEAM_A, TEAM_B, TEAM_LEGACY]

// ── resolveCustomTeams ────────────────────────────────────────
describe('resolveCustomTeams', () => {
  it('resolves string IDs to team objects from DATA_TEAMS', () => {
    const result = resolveCustomTeams(['vortex-dauntless', 'vortex-poison'], ALL_TEAMS)
    expect(result).toHaveLength(2)
    expect(result[0]).toBe(TEAM_A)
    expect(result[1]).toBe(TEAM_B)
  })

  it('returns resolved objects with members array intact', () => {
    const result = resolveCustomTeams(['vortex-dauntless'], ALL_TEAMS)
    expect(result[0].members).toHaveLength(2)
    expect(result[0].members[0].id).toBe(20740)
    expect(result[0].name).toBe('Dauntless Aggro')
    expect(result[0].affinity).toBe('5 Vertigo')
  })

  it('drops unresolvable string IDs silently', () => {
    const result = resolveCustomTeams(['vortex-dauntless', 'nonexistent-id'], ALL_TEAMS)
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('vortex-dauntless')
  })

  it('passes through object entries unchanged', () => {
    const inline = { name: 'Inline Team', members: [{ id: 1 }] }
    const result = resolveCustomTeams([inline], ALL_TEAMS)
    expect(result).toHaveLength(1)
    expect(result[0]).toBe(inline)
  })

  it('returns empty array for null/undefined input', () => {
    expect(resolveCustomTeams(null, ALL_TEAMS)).toEqual([])
    expect(resolveCustomTeams(undefined, ALL_TEAMS)).toEqual([])
  })

  it('returns empty array for empty input', () => {
    expect(resolveCustomTeams([], ALL_TEAMS)).toEqual([])
  })

  it('handles empty allTeams gracefully', () => {
    const result = resolveCustomTeams(['vortex-dauntless'], [])
    expect(result).toEqual([])
  })
})

// ── resolveActivities ─────────────────────────────────────────
describe('resolveActivities', () => {
  it('resolves string refs in custom arrays across all activities', () => {
    const activities = [
      { id: 'temporal_vortex', name: 'TV', teams: { custom: ['vortex-dauntless', 'vortex-poison'], community: [] } },
      { id: 'goblin_lair', name: 'GL', teams: { custom: [], community: [] } }
    ]
    const result = resolveActivities(activities, ALL_TEAMS)

    expect(result[0].teams.custom).toHaveLength(2)
    expect(result[0].teams.custom[0].name).toBe('Dauntless Aggro')
    expect(result[0].teams.custom[1].name).toBe('Poison Endurance')
    // untouched activity stays the same
    expect(result[1].teams.custom).toEqual([])
  })

  it('does not mutate activities with object custom entries', () => {
    const inline = { name: 'Inline', members: [] }
    const activities = [
      { id: 'x', teams: { custom: [inline] } }
    ]
    const result = resolveActivities(activities, ALL_TEAMS)
    expect(result[0].teams.custom[0]).toBe(inline)
  })

  it('preserves community and other teams fields', () => {
    const comm = [{ source: 'AllClash', members: [] }]
    const activities = [
      { id: 'tv', teams: { custom: ['vortex-dauntless'], community: comm, tested: [] } }
    ]
    const result = resolveActivities(activities, ALL_TEAMS)
    expect(result[0].teams.community).toBe(comm)
    expect(result[0].teams.tested).toEqual([])
  })

  it('does not mutate original activity objects', () => {
    const original = { id: 'tv', teams: { custom: ['vortex-dauntless'] } }
    const result = resolveActivities([original], ALL_TEAMS)
    // original still has string
    expect(original.teams.custom[0]).toBe('vortex-dauntless')
    // result has resolved object
    expect(result[0].teams.custom[0].name).toBe('Dauntless Aggro')
  })
})

// ── legacyForActivity ─────────────────────────────────────────
describe('legacyForActivity', () => {
  it('returns legacy teams matching activity name', () => {
    const activity = { name: 'Temporal Vortex — Dahwan\'s Realm', teams: { custom: [] } }
    const result = legacyForActivity(activity, ALL_TEAMS)
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('old-ice-team')
  })

  it('matches on activities array (includes)', () => {
    const activity = { name: 'Temporal Vortex', teams: { custom: [] } }
    const result = legacyForActivity(activity, ALL_TEAMS)
    // TEAM_A and TEAM_B have activity: "Temporal Vortex"
    expect(result).toHaveLength(2)
    expect(result.map(t => t.id)).toContain('vortex-dauntless')
    expect(result.map(t => t.id)).toContain('vortex-poison')
  })

  it('excludes teams already present in custom (prevents duplicates)', () => {
    const activity = {
      name: 'Temporal Vortex',
      teams: { custom: [TEAM_A] } // TEAM_A already resolved in custom
    }
    const result = legacyForActivity(activity, ALL_TEAMS)
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('vortex-poison') // only B remains
  })

  it('excludes ALL custom teams from legacy results', () => {
    const activity = {
      name: 'Temporal Vortex',
      teams: { custom: [TEAM_A, TEAM_B] }
    }
    const result = legacyForActivity(activity, ALL_TEAMS)
    expect(result).toHaveLength(0)
  })

  it('returns empty for null/undefined activity', () => {
    expect(legacyForActivity(null, ALL_TEAMS)).toEqual([])
    expect(legacyForActivity(undefined, ALL_TEAMS)).toEqual([])
  })

  it('returns empty for activity without name', () => {
    expect(legacyForActivity({}, ALL_TEAMS)).toEqual([])
    expect(legacyForActivity({ teams: {} }, ALL_TEAMS)).toEqual([])
  })

  it('returns empty when no teams match the activity name', () => {
    const activity = { name: 'Nonexistent Activity', teams: { custom: [] } }
    expect(legacyForActivity(activity, ALL_TEAMS)).toEqual([])
  })
})
