import { createRouter, createWebHashHistory } from 'vue-router'
import TeamsView from './views/TeamsView.vue'

const heroesLoader = () => import('./views/HeroesView.vue')
const gearLoader = () => import('./views/GearView.vue')
const cookingLoader = () => import('./views/CookingView.vue')
const artifactsLoader = () => import('./views/ArtifactsView.vue')
const tierListLoader = () => import('./views/TierListView.vue')

const lazyLoaders = [heroesLoader, gearLoader, cookingLoader, artifactsLoader, tierListLoader]

const routes = [
  { path: '/', name: 'teams', component: TeamsView, meta: { label: 'Times', icon: '⚔' } },
  { path: '/heroes', name: 'heroes', component: heroesLoader, meta: { label: 'Herois', icon: '♛' } },
  { path: '/gear', name: 'gear', component: gearLoader, meta: { label: 'Gear', icon: '◆' } },
  { path: '/cooking', name: 'cooking', component: cookingLoader, meta: { label: 'Cooking', icon: '🍖' } },
  { path: '/artifacts', name: 'artifacts', component: artifactsLoader, meta: { label: 'Artefatos', icon: '✧' } },
  { path: '/tierlist', name: 'tierlist', component: tierListLoader, meta: { label: 'Tier List', icon: '▣' } },
]

/**
 * Prefetch all lazy route chunks in background.
 * Call after app is ready (critical data loaded + first render done).
 * Uses requestIdleCallback for zero impact on main thread.
 */
export function prefetchRoutes() {
  const prefetch = () => {
    for (const loader of lazyLoaders) {
      loader()
    }
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(prefetch)
  } else {
    setTimeout(prefetch, 200)
  }
}

const router = createRouter({ history: createWebHashHistory(), routes })
export default router
export { routes }
