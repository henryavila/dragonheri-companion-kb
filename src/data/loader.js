// loader.js — Dynamic data loader (loads public/data/*.js at runtime)
// Data files use window.DATA_* globals and are NOT bundled by Vite.
// This allows data updates without rebuilding the app.

const loaded = new Set()

export function loadData(key) {
  if (loaded.has(key)) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `./data/${key}.js`
    script.onload = () => { loaded.add(key); resolve() }
    script.onerror = () => reject(new Error(`Failed to load data/${key}.js`))
    document.head.appendChild(script)
  })
}

export async function loadAllData() {
  const keys = ['heroes', 'tiers', 'my-roster', 'profile', 'mechanics', 'artifacts', 'builds', 'gear', 'activities', 'artifact-map', 'artifact-images']
  await Promise.all(keys.map(k => loadData(k)))
}
