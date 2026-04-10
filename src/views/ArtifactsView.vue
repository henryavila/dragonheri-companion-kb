<script setup>
import { ref, computed } from 'vue'
import { D } from '@/data'

const allArtifacts = ref([])

fetch(`${import.meta.env.BASE_URL}data/artifacts-all.json`)
  .then(r => r.json())
  .then(data => { allArtifacts.value = data.artifacts || [] })
  .catch(() => { allArtifacts.value = [] })

const ownedNames = computed(() => {
  const owned = window.DATA_ARTIFACTS?.owned || []
  return new Set(owned.map(a => a.name))
})

const ownershipFilter = ref('all')
const activeRarity = ref(null)
const activeSeason = ref(null)
const rarities = ['Mythic', 'Legendary', 'Epic']
const search = ref('')

const seasons = computed(() => {
  const s = new Set()
  for (const a of allArtifacts.value) if (a.season) s.add(a.season)
  return [...s].sort()
})

const filtered = computed(() => {
  let list = allArtifacts.value

  if (ownershipFilter.value === 'owned') {
    list = list.filter(a => ownedNames.value.has(a.name))
  } else if (ownershipFilter.value === 'not_owned') {
    list = list.filter(a => !ownedNames.value.has(a.name))
  }

  if (activeRarity.value) {
    list = list.filter(a => a.rarity === activeRarity.value)
  }

  if (activeSeason.value) {
    list = list.filter(a => a.season === activeSeason.value)
  }

  const q = search.value.trim().toLowerCase()
  if (q) {
    list = list.filter(a =>
      (a.name || '').toLowerCase().includes(q) ||
      (a.skill || '').toLowerCase().includes(q) ||
      (a.exclusive || '').toLowerCase().includes(q) ||
      (a.stat1 || '').toLowerCase().includes(q) ||
      (a.stat2 || '').toLowerCase().includes(q)
    )
  }

  return list
})

const selectedArtifact = ref(null)

function ownedData(name) {
  return (window.DATA_ARTIFACTS?.owned || []).find(a => a.name === name) || null
}

function artifactImg(name) {
  return D.artifactImgUrl(name)
}

function seasonLabel(s) {
  if (!s) return ''
  return s.toUpperCase()
}

const rarityColor = { Mythic: 'text-purple-400', Legendary: 'text-gold', Epic: 'text-el-lightning' }
const rarityBorder = { Mythic: 'border-purple-400/30', Legendary: 'border-gold-dim', Epic: 'border-el-lightning/30' }

// Filter button styles (active state)
const rarityFilterStyle = {
  Mythic:    { active: 'bg-purple-500/20 border-purple-400/60 text-purple-300', text: 'text-purple-400' },
  Legendary: { active: 'bg-amber-500/20 border-amber-400/60 text-amber-300', text: 'text-gold' },
  Epic:      { active: 'bg-blue-500/20 border-blue-400/60 text-blue-300', text: 'text-el-lightning' }
}
const seasonColor = {
  s1: 'bg-zinc-600/50 text-zinc-300',
  s2: 'bg-sky-800/50 text-sky-300',
  s3: 'bg-emerald-800/50 text-emerald-300',
  s4: 'bg-amber-800/50 text-amber-300',
  s6: 'bg-fuchsia-800/50 text-fuchsia-300'
}
const seasonFilterStyle = {
  s1: { active: 'bg-zinc-500/20 border-zinc-400/60 text-zinc-300', idle: 'text-zinc-400' },
  s2: { active: 'bg-sky-500/20 border-sky-400/60 text-sky-300', idle: 'text-sky-400' },
  s3: { active: 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300', idle: 'text-emerald-400' },
  s4: { active: 'bg-amber-500/20 border-amber-400/60 text-amber-300', idle: 'text-amber-400' },
  s6: { active: 'bg-fuchsia-500/20 border-fuchsia-400/60 text-fuchsia-300', idle: 'text-fuchsia-400' }
}
</script>

<template>
  <div>
    <header class="mb-5">
      <h1 class="font-display text-xl md:text-2xl font-bold">Artefatos</h1>
      <p class="text-sm text-text-dim mt-1">{{ allArtifacts.length }} artefatos — {{ ownedNames.size }} possuidos</p>
    </header>

    <!-- Filters -->
    <div class="mb-4 space-y-2">
      <!-- Row 1: Ownership + Rarity -->
      <div class="flex items-center gap-1.5 flex-wrap">
        <button
          v-for="opt in [{key:'all',label:'Todos'},{key:'owned',label:'Possuo'},{key:'not_owned',label:'Nao possuo'}]"
          :key="opt.key"
          class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
          :class="ownershipFilter === opt.key
            ? (opt.key === 'not_owned' ? 'bg-accent-red/80 text-white border-accent-red' : 'bg-gold text-bg-deep border-gold')
            : 'border-border text-text-dim hover:text-text-primary'"
          @click="ownershipFilter = opt.key"
        >{{ opt.label }}</button>

        <span class="w-px h-5 bg-border mx-0.5 shrink-0"></span>

        <button
          v-for="r in rarities" :key="r"
          class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
          :class="activeRarity === r
            ? rarityFilterStyle[r].active
            : `border-border ${rarityFilterStyle[r].text} hover:text-text-primary`"
          @click="activeRarity = activeRarity === r ? null : r"
        >{{ r }}</button>
      </div>

      <!-- Row 2: Seasons -->
      <div class="flex items-center gap-1.5 flex-wrap">
        <span class="text-[0.6rem] text-text-muted uppercase tracking-wider font-semibold mr-0.5 shrink-0">Season</span>
        <button
          v-for="s in seasons" :key="s"
          class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
          :class="activeSeason === s
            ? (seasonFilterStyle[s]?.active || 'bg-bg-elevated border-border-hover text-text-primary')
            : `border-border ${seasonFilterStyle[s]?.idle || 'text-text-dim'} hover:text-text-primary`"
          @click="activeSeason = activeSeason === s ? null : s"
        >{{ seasonLabel(s) }}</button>
      </div>

      <!-- Row 3: Search -->
      <div class="relative">
        <input v-model="search" type="text" placeholder="Buscar artefato, skill, stat..."
          class="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors" />
        <button v-if="search" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary text-xs" @click="search = ''">&times;</button>
      </div>
    </div>

    <div class="text-[0.68rem] text-text-muted mb-3">{{ filtered.length }} artefato{{ filtered.length !== 1 ? 's' : '' }}</div>

    <!-- Grid: 1 col mobile, 2 cols desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      <div
        v-for="a in filtered" :key="a.name"
        class="bg-bg-card border rounded-xl px-3 py-2.5 cursor-pointer transition-all hover:border-border-hover active:scale-[0.98]"
        :class="rarityBorder[a.rarity] || 'border-border'"
        @click="selectedArtifact = a"
      >
        <div class="flex items-start gap-3">
          <!-- Artifact image -->
          <img
            v-if="artifactImg(a.name)"
            :src="artifactImg(a.name)"
            :alt="a.name"
            class="w-11 h-11 rounded-lg border border-border object-cover shrink-0 mt-0.5"
            loading="lazy"
            @error="$event.target.style.display = 'none'"
          />
          <div v-else class="w-11 h-11 rounded-lg border border-border bg-bg-elevated shrink-0 mt-0.5 flex items-center justify-center text-text-muted text-[0.5rem]">?</div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-sm font-semibold" :class="rarityColor[a.rarity] || 'text-text-primary'">{{ a.name }}</span>
              <span
                v-if="a.season"
                class="px-1.5 py-px rounded text-[0.5rem] font-bold uppercase"
                :class="seasonColor[a.season] || 'bg-zinc-700 text-zinc-300'"
              >{{ seasonLabel(a.season) }}</span>
              <span v-if="a.exclusive" class="px-1.5 py-0.5 rounded text-[0.55rem] font-bold bg-gold/10 text-gold border border-gold-dim">{{ a.exclusive }}</span>
            </div>
            <div class="text-[0.68rem] text-text-muted mt-0.5">{{ a.stat1 }}<span v-if="a.stat2"> + {{ a.stat2 }}</span></div>
            <div class="text-[0.68rem] text-text-dim mt-0.5 line-clamp-1 leading-relaxed">
              <span class="text-gold-dim font-semibold">{{ a.skillName }}:</span> {{ a.skill }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!filtered.length" class="text-center py-12">
      <p class="text-sm text-text-muted">Nenhum artefato encontrado.</p>
    </div>

    <!-- Detail modal -->
    <Teleport to="body">
      <div v-if="selectedArtifact" class="fixed inset-0 z-50 bg-black/90 md:flex md:items-start md:justify-center md:p-8 overflow-y-auto" @click.self="selectedArtifact = null">
        <div class="bg-bg-surface min-h-dvh md:min-h-0 md:max-w-[600px] w-full md:rounded-2xl md:border md:border-border md:overflow-y-auto">
          <div class="sticky top-0 z-10 bg-bg-surface border-b border-border px-4 py-3 flex items-center gap-3 md:rounded-t-2xl">
            <button class="w-9 h-9 rounded-full border border-border bg-bg-card text-text-dim flex items-center justify-center shrink-0 active:scale-90" @click="selectedArtifact = null">&#8592;</button>
            <span class="font-display text-sm font-semibold truncate">{{ selectedArtifact.name }}</span>
          </div>

          <div class="p-4 space-y-4">
            <!-- Identity -->
            <div class="flex items-start gap-4">
              <img
                v-if="artifactImg(selectedArtifact.name)"
                :src="artifactImg(selectedArtifact.name)"
                :alt="selectedArtifact.name"
                class="w-16 h-16 rounded-xl border border-border object-cover shrink-0"
                loading="lazy"
              />
              <div v-else class="w-16 h-16 rounded-xl border border-border bg-bg-elevated shrink-0 flex items-center justify-center text-text-muted">?</div>

              <div class="pt-1 min-w-0">
                <h2 class="font-display text-lg font-bold" :class="rarityColor[selectedArtifact.rarity]">{{ selectedArtifact.name }}</h2>
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <span class="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold border border-border bg-bg-card text-text-dim">{{ selectedArtifact.rarity }}</span>
                  <span
                    v-if="selectedArtifact.season"
                    class="px-2 py-0.5 rounded-full text-[0.65rem] font-bold"
                    :class="seasonColor[selectedArtifact.season] || 'bg-zinc-700 text-zinc-300'"
                  >{{ seasonLabel(selectedArtifact.season) }}</span>
                  <span class="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold border border-border bg-bg-card text-text-dim">{{ selectedArtifact.stat1 }}<span v-if="selectedArtifact.stat2"> + {{ selectedArtifact.stat2 }}</span></span>
                  <span v-if="selectedArtifact.exclusive" class="px-2 py-0.5 rounded-full text-[0.65rem] font-bold border border-gold-dim bg-gold/10 text-gold">Exclusivo: {{ selectedArtifact.exclusive }}</span>
                  <span v-if="ownedNames.has(selectedArtifact.name)" class="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold border border-accent-green/30 bg-accent-green/5 text-accent-green">Possuido</span>
                </div>
              </div>
            </div>

            <!-- Skill -->
            <div class="bg-bg-card border border-border rounded-lg p-3">
              <div class="text-[0.65rem] font-semibold text-text-muted uppercase tracking-wider mb-1">{{ selectedArtifact.skillName || 'Skill' }}</div>
              <div class="text-[0.78rem] text-text-dim leading-relaxed">{{ selectedArtifact.skill }}</div>
            </div>

            <!-- Equipped info -->
            <div v-if="ownedData(selectedArtifact.name)" class="bg-bg-card border border-border rounded-lg p-3 space-y-2">
              <div class="text-[0.65rem] font-semibold text-text-muted uppercase tracking-wider">Equipado em</div>
              <div v-if="ownedData(selectedArtifact.name).equippedOn" class="flex items-center gap-2">
                <img :src="D.heroImgUrl(ownedData(selectedArtifact.name).equippedOn)" class="w-8 h-8 rounded-lg border border-border object-cover object-[center_15%]" loading="lazy" />
                <span class="text-sm text-gold-bright">{{ D.hero(ownedData(selectedArtifact.name).equippedOn)?.name || '?' }}</span>
              </div>
              <div v-if="ownedData(selectedArtifact.name).reason" class="text-[0.72rem] text-text-dim leading-relaxed">{{ ownedData(selectedArtifact.name).reason }}</div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
