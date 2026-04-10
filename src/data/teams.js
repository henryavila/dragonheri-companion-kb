/**
 * Team resolution utilities.
 *
 * activities.js stores custom teams as either inline objects or string IDs
 * referencing entries in DATA_TEAMS (legacy-teams.js). These helpers resolve
 * string references to full team objects so the UI can render members,
 * affinity, notes, etc.
 */

/**
 * Resolve an activity's custom team entries.
 * - String entries are looked up by id in `allTeams`.
 * - Object entries pass through unchanged.
 * - Unresolvable strings are dropped.
 */
export function resolveCustomTeams(custom, allTeams) {
  if (!custom?.length) return custom || []
  if (typeof custom[0] !== 'string') return custom
  return custom
    .map(id => allTeams.find(t => t.id === id))
    .filter(Boolean)
}

/**
 * Process all activities, resolving string team references in-place.
 */
export function resolveActivities(activities, allTeams) {
  return activities.map(a => {
    const custom = a.teams?.custom
    if (!custom?.length || typeof custom[0] !== 'string') return a
    return { ...a, teams: { ...a.teams, custom: resolveCustomTeams(custom, allTeams) } }
  })
}

/**
 * Return legacy teams that match `activity.name` but are NOT already
 * present in the activity's resolved custom array (prevents duplicates).
 */
export function legacyForActivity(activity, allLegacyTeams) {
  const name = activity?.name
  if (!name) return []
  const customIds = new Set(
    (activity.teams?.custom || []).map(t => t.id).filter(Boolean)
  )
  return allLegacyTeams.filter(t =>
    !customIds.has(t.id) &&
    (t.activity === name || (t.activities && t.activities.includes(name)))
  )
}
