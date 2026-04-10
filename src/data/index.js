// data/index.js — Centralized data access (reads from window.DATA_* globals)
// Data files are loaded at runtime from public/data/ — NOT bundled.

import { ref } from 'vue'

export const deferredReady = ref(false)

let heroById = null
let heroByName = null
let tierById = null
let myHeroById = null

function ensureIndices() {
  if (heroById) return
  heroById = new Map()
  heroByName = new Map()
  tierById = new Map()
  myHeroById = new Map()

  for (const h of (window.DATA_HEROES || [])) {
    heroById.set(h.id, h)
    heroByName.set(h.name.toLowerCase(), h)
  }
  for (const t of (window.DATA_TIERS || [])) {
    tierById.set(t.id, t)
  }
  for (const h of (window.DATA_MY_ROSTER || [])) {
    myHeroById.set(h.id, h)
  }
}

export const D = {
  hero(id) { ensureIndices(); return heroById.get(id) || null },
  heroByName(name) { ensureIndices(); return heroByName.get(name.toLowerCase()) || null },
  tier(id) { ensureIndices(); return tierById.get(id) || null },
  myHero(id) { ensureIndices(); return myHeroById.get(id) || null },
  isOwned(id) { ensureIndices(); return myHeroById.has(id) },

  profile() { return window.DATA_PROFILE || {} },
  allHeroes() { return window.DATA_HEROES || [] },
  allTiers() { return window.DATA_TIERS || [] },
  myRoster() { return window.DATA_MY_ROSTER || [] },
  mechanics() { return window.DATA_MECHANICS || {} },
  activities() { return window.DATA_ACTIVITIES || [] },
  gear() { return window.DATA_GEAR || {} },
  cooking() { return window.DATA_COOKING || {} },

  heroImgUrl(id) {
    return `https://i.dmzgame.com/dragonheir/img/hero/pic_hero_show_${id}.png`
  },

  artifactMap() { return window.DATA_ARTIFACT_MAP || {} },
  artifactImages() { return window.DATA_ARTIFACT_IMAGES || {} },

  heroArtifacts(id) {
    const hero = this.hero(id)
    if (!hero?.tj_sq?.length) return []
    const map = this.artifactMap()
    return hero.tj_sq
      .map(sqId => map[sqId] || null)
      .filter(Boolean)
  },

  artifactImgUrl(name) {
    const images = this.artifactImages()
    const entry = images[name]
    if (!entry) return null
    const code = typeof entry === 'string' ? entry : entry.code
    const season = typeof entry === 'string' ? '2025_s1' : entry.season
    return `https://i.dmzgame.com/dragonheir/img/equipment/${season}/icon_item_artifact_${code}.png`
  },

  invalidate() {
    heroById = null
    heroByName = null
    tierById = null
    myHeroById = null
  }
}
