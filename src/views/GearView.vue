<script setup>
import { computed } from 'vue'
import { D } from '@/data'

const gearData = computed(() => D.gear())
const profiles = computed(() => gearData.value.hero_profiles || [])
const plans = computed(() => gearData.value.gear_plans || [])

function profileFor(profileId) {
  return profiles.value.find(p => p.id === profileId) || null
}

function heroId(name) {
  return D.heroByName(name)?.id || null
}

// Top stats from profile (weight >= 7, sorted desc)
function topStats(profileId) {
  const p = profileFor(profileId)
  if (!p?.stat_weights) return []
  return Object.entries(p.stat_weights)
    .filter(([, v]) => v >= 7)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => ({ name: k, weight: v }))
}

// Profile display name (short)
function profileLabel(profileId) {
  const p = profileFor(profileId)
  return p?.name || profileId
}
</script>

<template>
  <div>
    <header class="mb-5">
      <h1 class="font-display text-xl md:text-2xl font-bold">Gear Plans</h1>
      <p class="text-sm text-text-dim mt-1">{{ plans.length }} planos — selecione in-game pelo stat principal do heroi</p>
    </header>

    <!-- Mobile: compact list -->
    <div class="md:hidden space-y-2">
      <div
        v-for="(plan, i) in plans" :key="plan.name"
        class="bg-bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3"
      >
        <div class="w-7 h-7 rounded-full bg-bg-elevated border border-border flex items-center justify-center text-[0.65rem] font-bold text-text-muted shrink-0">{{ i + 1 }}</div>
        <img v-if="heroId(plan.hero)" :src="D.heroImgUrl(heroId(plan.hero))" class="w-10 h-10 rounded-lg border border-border object-cover object-[center_15%] shrink-0" loading="lazy" />
        <div v-else class="w-10 h-10 rounded-lg bg-bg-elevated border border-border shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-semibold text-text-primary">{{ plan.name }}</span>
            <span class="px-1.5 py-0.5 rounded text-[0.55rem] font-bold bg-gold/10 text-gold border border-gold-dim">{{ profileLabel(plan.profile) }}</span>
          </div>
          <div class="flex flex-wrap gap-1 mt-1">
            <span v-for="(stat, j) in topStats(plan.profile)" :key="stat.name" class="text-[0.6rem] font-medium" :class="j === 0 ? 'text-gold' : 'text-text-muted'">{{ stat.name }}<span v-if="j < topStats(plan.profile).length - 1" class="text-text-muted/40 mx-0.5">></span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop: table layout -->
    <div class="hidden md:block">
      <div class="bg-bg-card border border-border rounded-xl overflow-hidden">
        <!-- Table header -->
        <div class="grid grid-cols-[48px_56px_1fr_140px_1fr] gap-4 px-5 py-2.5 border-b border-border text-[0.65rem] font-semibold text-text-muted uppercase tracking-wider">
          <div>#</div>
          <div></div>
          <div>Plano</div>
          <div>Perfil</div>
          <div>Stats Prioritarios</div>
        </div>
        <!-- Rows -->
        <div
          v-for="(plan, i) in plans" :key="plan.name"
          class="grid grid-cols-[48px_56px_1fr_140px_1fr] gap-4 items-center px-5 py-3 border-b border-border last:border-b-0 hover:bg-bg-hover transition-colors"
        >
          <!-- # -->
          <div class="text-sm font-bold text-text-muted text-center">{{ i + 1 }}</div>
          <!-- Hero -->
          <div>
            <img v-if="heroId(plan.hero)" :src="D.heroImgUrl(heroId(plan.hero))" class="w-11 h-11 rounded-lg border border-border object-cover object-[center_15%]" loading="lazy" />
            <div v-else class="w-11 h-11 rounded-lg bg-bg-elevated border border-border" />
          </div>
          <!-- Plan name + hero name -->
          <div>
            <div class="text-sm font-semibold text-text-primary">{{ plan.name }}</div>
            <div class="text-[0.68rem] text-text-muted mt-0.5">{{ plan.hero }}</div>
          </div>
          <!-- Profile badge -->
          <div>
            <span class="px-2 py-1 rounded text-[0.65rem] font-bold bg-gold/10 text-gold border border-gold-dim">{{ profileLabel(plan.profile) }}</span>
          </div>
          <!-- Stats -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="(stat, j) in topStats(plan.profile)" :key="stat.name"
              class="text-[0.72rem] font-medium"
              :class="j === 0 ? 'text-gold' : 'text-text-dim'"
            >{{ stat.name }}<span v-if="j < topStats(plan.profile).length - 1" class="text-text-muted/30 mx-0.5">></span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
