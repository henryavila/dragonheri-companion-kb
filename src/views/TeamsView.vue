<script setup>
import { ref, computed } from 'vue'
import { D } from '@/data'

const selectedActivity = ref(null)
const activeTab = ref('time')

// Activities loaded once — data is guaranteed ready by App.vue loadAllData()
const activities = ref(window.DATA_ACTIVITIES || [])

const categoryLabels = {
  equipment: 'Equipment',
  growth: 'Growth',
  adventure: 'Adventure',
  main: 'Main',
  pvp: 'PvP'
}

// Map activity id → category
const categoryMap = {
  grave_of_venom: 'equipment',
  grave_of_curse: 'equipment',
  grave_of_rot: 'equipment',
  flame_domain: 'growth',
  frost_domain: 'growth',
  tempest_domain: 'growth',
  heretical_ruins: 'growth',
  goblin_lair: 'growth',
  fey_meander: 'adventure',
  fallen_shadow_spire: 'adventure',
  temporal_vortex: 'main',
  grand_gladiator_arena: 'pvp',
}

const grouped = computed(() => {
  const groups = {}
  for (const a of (activities.value || [])) {
    const cat = categoryMap[a.id] || 'other'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(a)
  }
  return groups
})

const categoryOrder = ['main', 'equipment', 'growth', 'adventure', 'pvp']

function teamCount(activity) {
  const t = activity.teams || {}
  return (t.community?.length || 0) + (t.custom?.length || 0)
}

function statusPill(activity) {
  const t = activity.teams || {}
  if (t.custom?.some(c => c.result)) return { label: t.custom[0].result, variant: 'green' }
  if (t.community?.length) return { label: 'Comunidade', variant: 'gold' }
  return { label: 'Pendente', variant: 'default' }
}

function heroIds(activity) {
  const t = activity.teams || {}
  const team = t.custom?.[0] || t.community?.[0]
  return (team?.members || []).map(m => m.id).slice(0, 5)
}

const elColorMap = {
  Fire: 'el-fire', Ice: 'el-ice', Lightning: 'el-lightning',
  Poison: 'el-poison', Necrosis: 'el-necrosis', Radiance: 'el-radiance'
}
</script>

<template>
  <div>
    <header class="mb-5">
      <h1 class="font-display text-xl md:text-2xl font-bold">Times por Atividade</h1>
      <p class="text-sm text-text-dim mt-1">Comunidade + analise custom</p>
      <div class="flex gap-1.5 mt-2.5">
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold border border-gold-dim text-gold bg-gold/5">
          {{ activities.length }} atividades
        </span>
      </div>
    </header>

    <template v-for="cat in categoryOrder" :key="cat">
      <div v-if="grouped[cat]">
        <div class="font-display text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2.5 mt-1">
          {{ categoryLabels[cat] }}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-1">
          <div
            v-for="a in grouped[cat]" :key="a.id"
            class="bg-bg-card border border-border rounded-xl px-4 py-3.5 cursor-pointer transition-all relative overflow-hidden active:scale-[0.98] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            @click="selectedActivity = a; activeTab = 'time'"
          >
            <!-- Element top border -->
            <div
              class="absolute top-0 left-0 right-0 h-0.5"
              :class="`bg-${elColorMap[a.boss?.element] || 'gold'}`"
            />

            <div class="flex items-center gap-3">
              <!-- Element dot -->
              <span
                class="w-3 h-3 rounded-full shrink-0"
                :class="`bg-${elColorMap[a.boss?.element] || 'gold'}`"
                :style="`box-shadow: 0 0 6px var(--color-${elColorMap[a.boss?.element] || 'gold'})`"
              />

              <!-- Info -->
              <div class="flex-1 min-w-0">
                <div class="font-display text-[0.9rem] font-semibold text-text-primary leading-tight">{{ a.name }}</div>
                <div class="text-[0.7rem] text-text-muted mt-0.5 flex items-center gap-1.5">
                  <span v-if="a.boss?.name">{{ a.boss.name }}</span>
                  <span v-if="a.drops" class="text-text-muted">· {{ a.drops }}</span>
                </div>
              </div>

              <!-- Right side -->
              <div class="flex flex-col items-end gap-1.5 shrink-0">
                <span
                  class="inline-flex items-center px-2 py-0.5 rounded-full text-[0.6rem] font-semibold border"
                  :class="{
                    'border-accent-green/30 text-accent-green bg-accent-green/5': statusPill(a).variant === 'green',
                    'border-gold-dim text-gold bg-gold/5': statusPill(a).variant === 'gold',
                    'border-border text-text-muted bg-bg-card': statusPill(a).variant === 'default'
                  }"
                >
                  {{ statusPill(a).label }}
                </span>
                <div v-if="heroIds(a).length" class="flex">
                  <img
                    v-for="(hid, i) in heroIds(a)" :key="hid"
                    :src="D.heroImgUrl(hid)"
                    class="w-7 h-7 rounded-full border-2 border-bg-card object-cover object-[center_15%]"
                    :style="i > 0 ? 'margin-left: -5px' : ''"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- TODO: TeamModal component -->
    <Teleport to="body">
      <div
        v-if="selectedActivity"
        class="fixed inset-0 z-50 bg-black/90 md:flex md:items-start md:justify-center md:p-8 overflow-y-auto"
        @click.self="selectedActivity = null"
      >
        <div class="bg-bg-surface min-h-dvh md:min-h-0 md:max-h-[90vh] md:max-w-[800px] w-full md:rounded-2xl md:border md:border-border md:overflow-y-auto">
          <!-- Top bar -->
          <div class="sticky top-0 z-10 bg-bg-surface border-b border-border px-4 py-3 flex items-center gap-3 md:rounded-t-2xl">
            <button
              class="w-9 h-9 rounded-full border border-border bg-bg-card text-text-dim flex items-center justify-center shrink-0 active:scale-90"
              @click="selectedActivity = null"
            >←</button>
            <span class="font-display text-sm font-semibold truncate">{{ selectedActivity.name }}</span>
          </div>

          <!-- Header -->
          <div class="px-4 pt-4">
            <h2 class="font-display text-lg font-bold">{{ selectedActivity.name }}</h2>
            <div class="flex flex-wrap gap-1.5 mt-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold border border-border bg-bg-card text-text-dim">
                {{ categoryLabels[categoryMap[selectedActivity.id]] || selectedActivity.type }}
              </span>
              <span v-if="selectedActivity.boss" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold border border-border bg-bg-card text-text-dim">
                {{ selectedActivity.boss.name }}
              </span>
              <span v-if="selectedActivity.drops" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold border border-border bg-bg-card text-text-dim">
                {{ selectedActivity.drops }}
              </span>
            </div>
          </div>

          <!-- Tabs -->
          <div class="flex border-b border-border px-4 mt-4 overflow-x-auto">
            <button
              v-for="tab in ['time', 'boss', 'historico']" :key="tab"
              class="px-4 py-2.5 text-[0.78rem] font-semibold border-b-2 -mb-px whitespace-nowrap transition-colors"
              :class="activeTab === tab ? 'text-gold border-gold' : 'text-text-muted border-transparent'"
              @click="activeTab = tab"
            >{{ { time: 'Time', boss: 'Boss', historico: 'Historico' }[tab] }}</button>
          </div>

          <!-- Tab: Time -->
          <div v-if="activeTab === 'time'" class="p-4 space-y-3">
            <!-- Community teams -->
            <div v-for="team in (selectedActivity.teams?.community || [])" :key="team.source" class="bg-bg-card border border-border rounded-xl p-3.5">
              <div class="flex items-center justify-between mb-2 flex-wrap gap-2">
                <span class="font-display text-xs font-semibold text-gold">Comunidade</span>
                <span class="px-2 py-0.5 rounded-full text-[0.6rem] font-semibold border border-border text-text-dim bg-bg-elevated">{{ team.source }}</span>
              </div>
              <div v-for="m in team.members" :key="m.id" class="flex items-center gap-2.5 py-1.5">
                <img :src="D.heroImgUrl(m.id)" class="w-10 h-10 rounded-lg border border-border object-cover object-[center_15%]" loading="lazy" />
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-semibold" :class="D.isOwned(m.id) ? 'text-gold-bright' : 'text-text-muted'">
                    {{ D.hero(m.id)?.name || '?' }}
                    <span v-if="!D.isOwned(m.id)" class="text-[0.6rem] text-accent-red font-normal ml-1">(nao tem)</span>
                  </div>
                  <div class="text-[0.68rem] text-text-dim">{{ m.role }}</div>
                </div>
                <div v-if="m.artifact" class="text-[0.65rem] text-text-muted text-right max-w-[120px] truncate">{{ m.artifact }}</div>
              </div>
              <div v-if="team.affinity" class="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/4 border border-gold/12">
                <span class="text-[0.7rem] font-semibold text-gold">{{ team.affinity }}</span>
              </div>
              <p v-if="team.notes" class="text-[0.68rem] text-text-dim mt-2 leading-relaxed">{{ team.notes }}</p>
            </div>

            <!-- Custom teams -->
            <div v-for="team in (selectedActivity.teams?.custom || [])" :key="team.name" class="bg-bg-card border border-border rounded-xl p-3.5">
              <div class="flex items-center justify-between mb-2 flex-wrap gap-2">
                <span class="font-display text-xs font-semibold text-gold">Minha Analise</span>
                <span v-if="team.result" class="px-2 py-0.5 rounded-full text-[0.6rem] font-semibold border border-accent-green/30 text-accent-green bg-accent-green/5">{{ team.result }}</span>
              </div>
              <div v-for="m in team.members" :key="m.id" class="flex items-center gap-2.5 py-1.5">
                <img :src="D.heroImgUrl(m.id)" class="w-10 h-10 rounded-lg border border-border object-cover object-[center_15%]" loading="lazy" />
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-semibold text-gold-bright">{{ D.hero(m.id)?.name || '?' }}</div>
                  <div class="text-[0.68rem] text-text-dim">{{ m.role }}</div>
                </div>
                <div v-if="m.artifact" class="text-[0.65rem] text-text-muted text-right max-w-[120px] truncate">{{ m.artifact }}</div>
              </div>
              <div v-if="team.affinity" class="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/4 border border-gold/12">
                <span class="text-[0.7rem] font-semibold text-gold">{{ team.affinity }}</span>
              </div>
              <p v-if="team.notes" class="text-[0.68rem] text-text-dim mt-2 leading-relaxed">{{ team.notes }}</p>
            </div>

            <div v-if="!(selectedActivity.teams?.community?.length) && !(selectedActivity.teams?.custom?.length)" class="text-center py-8">
              <p class="text-sm text-text-muted">Nenhum time definido para esta atividade.</p>
            </div>
          </div>

          <!-- Tab: Boss -->
          <div v-if="activeTab === 'boss'" class="p-4 space-y-4">
            <template v-if="selectedActivity.mechanics">
              <!-- Skills -->
              <div v-if="selectedActivity.mechanics.skills">
                <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Skills do Boss</h3>
                <div class="space-y-2">
                  <div v-for="(desc, key) in selectedActivity.mechanics.skills" :key="key" class="bg-bg-card border border-border rounded-lg p-3">
                    <div class="text-[0.78rem] font-semibold text-accent-red mb-1">{{ key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) }}</div>
                    <div class="text-[0.72rem] text-text-dim leading-relaxed">{{ desc }}</div>
                  </div>
                </div>
              </div>

              <!-- What kills -->
              <div v-if="selectedActivity.mechanics.what_kills?.length">
                <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">O que mata</h3>
                <ul class="space-y-1.5">
                  <li v-for="item in selectedActivity.mechanics.what_kills" :key="item" class="flex gap-2 text-[0.72rem] text-text-dim leading-relaxed">
                    <span class="text-accent-red shrink-0 font-bold">!</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- How to win -->
              <div v-if="selectedActivity.mechanics.how_to_win">
                <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Como vencer</h3>
                <p class="text-[0.72rem] text-text-dim leading-relaxed bg-bg-card border border-border rounded-lg p-3">{{ selectedActivity.mechanics.how_to_win }}</p>
              </div>

              <!-- Counters -->
              <div v-if="selectedActivity.mechanics.counters?.length">
                <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Counters</h3>
                <ul class="space-y-1.5">
                  <li v-for="item in selectedActivity.mechanics.counters" :key="item" class="flex gap-2 text-[0.72rem] text-text-dim leading-relaxed">
                    <span class="text-accent-green shrink-0 font-bold">></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Timing -->
              <div v-if="selectedActivity.mechanics.timing">
                <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Timing</h3>
                <p class="text-[0.72rem] text-text-dim leading-relaxed bg-bg-card border border-border rounded-lg p-3">{{ selectedActivity.mechanics.timing }}</p>
              </div>
            </template>
            <div v-else class="text-center py-8">
              <p class="text-sm text-text-muted">Mecanicas nao documentadas.</p>
            </div>
          </div>

          <!-- Tab: Historico -->
          <div v-if="activeTab === 'historico'" class="p-4 space-y-3">
            <div v-for="team in (selectedActivity.teams?.tested || [])" :key="team.name" class="bg-bg-card border border-border rounded-xl p-3.5">
              <div class="flex items-center justify-between mb-2 flex-wrap gap-2">
                <span class="font-display text-xs font-semibold text-text-dim">{{ team.name }}</span>
                <span v-if="team.result" class="px-2 py-0.5 rounded-full text-[0.6rem] font-semibold border border-border text-text-dim">{{ team.result }}</span>
              </div>
              <div class="flex mb-2">
                <img
                  v-for="(m, i) in team.members" :key="m.id"
                  :src="D.heroImgUrl(m.id)"
                  class="w-8 h-8 rounded-lg border-2 border-bg-card object-cover object-[center_15%]"
                  :style="i > 0 ? 'margin-left: -4px' : ''"
                  loading="lazy"
                />
              </div>
              <p v-if="team.notes" class="text-[0.68rem] text-text-dim leading-relaxed">{{ team.notes }}</p>
            </div>
            <div v-if="!(selectedActivity.teams?.tested?.length)" class="text-center py-8">
              <p class="text-sm text-text-muted">Nenhum time testado registrado.</p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
