import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('data loader', () => {
  beforeEach(() => {
    if (typeof window !== 'undefined') {
      Object.keys(window).filter(k => k.startsWith('DATA_')).forEach(k => delete window[k])
    }
  })

  it('should define loadCriticalData and loadDeferredData exports', async () => {
    const loader = await import('./loader.js')
    expect(typeof loader.loadCriticalData).toBe('function')
    expect(typeof loader.loadDeferredData).toBe('function')
    expect(typeof loader.loadAllData).toBe('function')
  })

  it('should export CRITICAL_KEYS and DEFERRED_KEYS arrays', async () => {
    const loader = await import('./loader.js')
    expect(Array.isArray(loader.CRITICAL_KEYS)).toBe(true)
    expect(Array.isArray(loader.DEFERRED_KEYS)).toBe(true)
    expect(loader.CRITICAL_KEYS.length).toBeGreaterThan(0)
    expect(loader.DEFERRED_KEYS.length).toBeGreaterThan(0)
    // No overlap
    const overlap = loader.CRITICAL_KEYS.filter(k => loader.DEFERRED_KEYS.includes(k))
    expect(overlap).toEqual([])
  })

  it('critical keys should include all 8 landing-page data files', async () => {
    const { CRITICAL_KEYS } = await import('./loader.js')
    for (const key of ['heroes', 'tiers', 'my-roster', 'profile', 'activities', 'legacy-teams', 'artifact-map', 'artifact-images']) {
      expect(CRITICAL_KEYS).toContain(key)
    }
    expect(CRITICAL_KEYS).toHaveLength(8)
  })

  it('deferred keys should include all 11 background data files', async () => {
    const { DEFERRED_KEYS } = await import('./loader.js')
    for (const key of ['mechanics', 'artifacts', 'builds', 'gear', 'cooking', 'bets', 'decisions', 'gear-inventory', 'calendar', 'guides', 'plan']) {
      expect(DEFERRED_KEYS).toContain(key)
    }
    expect(DEFERRED_KEYS).toHaveLength(11)
  })

  it('critical + deferred should cover all 19 data files with no duplicates', async () => {
    const { CRITICAL_KEYS, DEFERRED_KEYS } = await import('./loader.js')
    const allKeys = [...CRITICAL_KEYS, ...DEFERRED_KEYS]
    expect(allKeys).toHaveLength(19)
    expect(new Set(allKeys).size).toBe(allKeys.length)
  })

  it('loadAllData should be exported for backwards compatibility', async () => {
    const { loadAllData } = await import('./loader.js')
    expect(typeof loadAllData).toBe('function')
  })
})
