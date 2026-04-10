<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const items = [
  { name: 'teams', label: 'Times', icon: '⚔', path: '/' },
  { name: 'heroes', label: 'Herois', icon: '♛', path: '/heroes' },
  { name: 'gear', label: 'Gear', icon: '◆', path: '/gear' },
]

const moreItems = [
  { name: 'artifacts', label: 'Artefatos', icon: '✧', path: '/artifacts' },
  { name: 'tierlist', label: 'Tier List', icon: '▣', path: '/tierlist' },
  { name: 'cooking', label: 'Cooking', icon: '🍖', path: '/cooking' },
]

const showMore = ref(false)

const isMoreActive = () => moreItems.some(m => m.name === route.name)

function goTo(item) {
  showMore.value = false
  router.push(item.path)
}
</script>

<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 pb-[env(safe-area-inset-bottom)] bg-bg-surface border-t border-border z-50">
    <!-- More menu (popover) -->
    <div v-if="showMore" class="absolute bottom-full left-0 right-0 bg-bg-surface border-t border-border px-2 py-2 flex justify-around">
      <button
        v-for="item in moreItems" :key="item.name"
        class="flex flex-col items-center gap-0.5 px-4 py-2 text-[0.65rem] font-medium rounded-lg transition-colors [-webkit-tap-highlight-color:transparent] active:scale-90"
        :class="route.name === item.name ? 'text-gold bg-gold/5' : 'text-text-muted'"
        @click="goTo(item)"
      >
        <span class="text-lg">{{ item.icon }}</span>
        {{ item.label }}
      </button>
    </div>

    <!-- Main bar -->
    <div class="h-[60px] flex items-center justify-around">
      <button
        v-for="item in items" :key="item.name"
        class="flex flex-col items-center gap-0.5 px-3 py-1.5 text-[0.65rem] font-medium transition-colors [-webkit-tap-highlight-color:transparent] active:scale-90"
        :class="route.name === item.name ? 'text-gold' : 'text-text-muted'"
        @click="goTo(item)"
      >
        <span class="text-lg">{{ item.icon }}</span>
        {{ item.label }}
      </button>

      <!-- More button -->
      <button
        class="flex flex-col items-center gap-0.5 px-3 py-1.5 text-[0.65rem] font-medium transition-colors [-webkit-tap-highlight-color:transparent] active:scale-90"
        :class="showMore || isMoreActive() ? 'text-gold' : 'text-text-muted'"
        @click="showMore = !showMore"
      >
        <span class="text-lg">⋯</span>
        Mais
      </button>
    </div>
  </nav>
</template>
