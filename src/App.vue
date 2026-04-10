<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from './components/layout/Sidebar.vue'
import BottomNav from './components/layout/BottomNav.vue'
import { loadAllData } from './data/loader'

const ready = ref(false)
const error = ref(null)
const navigating = ref(false)

const router = useRouter()
router.beforeEach(() => { navigating.value = true })
router.afterEach(() => { navigating.value = false })

onMounted(async () => {
  try {
    await loadAllData()
    ready.value = true
  } catch (e) {
    error.value = e.message
  }
})
</script>

<template>
  <div v-if="error" class="flex items-center justify-center min-h-dvh p-4">
    <div class="bg-bg-card border border-accent-red/40 rounded-xl p-5 max-w-sm text-center">
      <div class="text-sm text-accent-red font-semibold mb-1">Erro ao carregar dados</div>
      <div class="text-xs text-text-dim">{{ error }}</div>
    </div>
  </div>

  <div v-else-if="!ready" class="flex items-center justify-center min-h-dvh">
    <div class="text-sm text-text-dim animate-pulse">Carregando...</div>
  </div>

  <div v-else class="flex min-h-dvh">
    <Sidebar />
    <!-- Route loading bar -->
    <div v-if="navigating" class="fixed top-0 left-0 right-0 z-[100] h-0.5">
      <div class="h-full bg-gold animate-pulse rounded-r-full" style="width: 60%; animation-duration: 0.8s" />
    </div>
    <main class="flex-1 p-4 pb-20 md:ml-[220px] md:p-7 md:pb-8 lg:px-12">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Suspense>
            <component :is="Component" />
            <template #fallback>
              <div class="flex items-center justify-center py-20">
                <div class="text-sm text-text-dim animate-pulse">Carregando...</div>
              </div>
            </template>
          </Suspense>
        </template>
      </RouterView>
    </main>
    <BottomNav />
  </div>
</template>
