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

  it('critical keys should include heroes, tiers, my-roster, activities, legacy-teams', async () => {
    const { CRITICAL_KEYS } = await import('./loader.js')
    for (const key of ['heroes', 'tiers', 'my-roster', 'activities', 'legacy-teams']) {
      expect(CRITICAL_KEYS).toContain(key)
    }
  })

  it('deferred keys should include decisions, bets, gear-inventory', async () => {
    const { DEFERRED_KEYS } = await import('./loader.js')
    for (const key of ['decisions', 'bets', 'gear-inventory']) {
      expect(DEFERRED_KEYS).toContain(key)
    }
  })
})
