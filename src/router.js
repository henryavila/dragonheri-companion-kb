import { createRouter, createWebHashHistory } from 'vue-router'
import TeamsView from './views/TeamsView.vue'

const routes = [
  { path: '/', name: 'teams', component: TeamsView, meta: { label: 'Times', icon: '⚔' } },
  { path: '/heroes', name: 'heroes', component: () => import('./views/HeroesView.vue'), meta: { label: 'Herois', icon: '♛' } },
  { path: '/gear', name: 'gear', component: () => import('./views/GearView.vue'), meta: { label: 'Gear', icon: '◆' } },
  { path: '/cooking', name: 'cooking', component: () => import('./views/CookingView.vue'), meta: { label: 'Cooking', icon: '🍖' } },
  { path: '/artifacts', name: 'artifacts', component: () => import('./views/ArtifactsView.vue'), meta: { label: 'Artefatos', icon: '✧' } },
  { path: '/tierlist', name: 'tierlist', component: () => import('./views/TierListView.vue'), meta: { label: 'Tier List', icon: '▣' } },
]

export default createRouter({ history: createWebHashHistory(), routes })
export { routes }
