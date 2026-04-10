// loader.js — Two-phase data loader with cache-busting manifest
// Phase 1 (critical): Data needed for landing page (TeamsView)
// Phase 2 (deferred): Remaining data loaded in background after first render

const base = import.meta.env.BASE_URL
const loaded = new Set()
let manifest = null

// Phase 1: Required for first meaningful render (TeamsView + shared lookups)
export const CRITICAL_KEYS = [
  'heroes', 'tiers', 'my-roster', 'profile', 'activities',
  'legacy-teams', 'artifact-map', 'artifact-images'
]

// Phase 2: Loaded after first render in background
export const DEFERRED_KEYS = [
  'mechanics', 'artifacts', 'builds', 'gear', 'cooking',
  'bets', 'decisions', 'gear-inventory', 'calendar', 'guides', 'plan'
]

async function fetchManifest() {
  if (manifest) return manifest
  try {
    const res = await fetch(`${base}data/manifest.json`)
    manifest = res.ok ? await res.json() : {}
  } catch {
    manifest = {}
  }
  return manifest
}

function loadData(key) {
  if (loaded.has(key)) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const hash = manifest?.[`${key}.js`]
    const qs = hash ? `?v=${hash}` : ''
    script.src = `${base}data/${key}.js${qs}`
    script.onload = () => { loaded.add(key); resolve() }
    script.onerror = () => reject(new Error(`Failed to load data/${key}.js`))
    document.head.appendChild(script)
  })
}

/** Phase 1: Load critical data for first render */
export async function loadCriticalData() {
  await fetchManifest()
  await Promise.all(CRITICAL_KEYS.map(k => loadData(k)))
}

/** Phase 2: Load remaining data in background */
export async function loadDeferredData() {
  await Promise.all(DEFERRED_KEYS.map(k => loadData(k)))
}

/** Load everything (backwards compat) */
export async function loadAllData() {
  await fetchManifest()
  await Promise.all([...CRITICAL_KEYS, ...DEFERRED_KEYS].map(k => loadData(k)))
}
