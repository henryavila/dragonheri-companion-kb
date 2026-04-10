<script setup>
import { ref, computed } from 'vue'
import { D } from '@/data'

// ---------------------------------------------------------------------------
// Local helpers (the Vue D module is simpler than the old vanilla one)
// ---------------------------------------------------------------------------
const tierByIdMap = computed(() => {
  const m = new Map()
  for (const t of D.allTiers()) m.set(t.id, t)
  return m
})

function tierById(id) { return tierByIdMap.value.get(id) || null }

function tierSafe(tier) {
  if (!tier) return {}
  const { name: _n, id: _id, ...safe } = tier
  return safe
}

function heroFull(id) {
  const hero = D.hero(id)
  if (!hero) return null
  return { ...hero, ...tierSafe(tierById(id)), ...(D.myHero(id) || {}) }
}

function heroImgUrl(id) {
  return `https://i.dmzgame.com/dragonheir/img/hero/pic_hero_show_${id}.png`
}

// ---------------------------------------------------------------------------
// Element definitions — using CSS variables for dynamic styling
// ---------------------------------------------------------------------------
const ELEMENTS = [
  { key: 'Fire',      label: 'Fire' },
  { key: 'Ice',       label: 'Ice' },
  { key: 'Lightning', label: 'Lightning' },
  { key: 'Poison',    label: 'Poison' },
  { key: 'Necrosis',  label: 'Necrosis' },
  { key: 'Radiance',  label: 'Radiance' },
]

// Map element → CSS custom property name (defined in style.css @theme)
const elCssVar = {
  Fire: '--color-el-fire', Ice: '--color-el-ice',
  Lightning: '--color-el-lightning', Poison: '--color-el-poison',
  Necrosis: '--color-el-necrosis', Radiance: '--color-el-radiance'
}

function elColor(element) {
  const v = elCssVar[element]
  return v ? `var(${v})` : 'var(--color-gold)'
}

// Static Tailwind class map for simple bg/text (scanner can see these)
const elColorMap = {
  Fire: 'el-fire', Ice: 'el-ice', Lightning: 'el-lightning',
  Poison: 'el-poison', Necrosis: 'el-necrosis', Radiance: 'el-radiance'
}

const rarityColorMap = {
  Mythic: 'text-purple-400', Legendary: 'text-gold', Epic: 'text-el-lightning'
}

const tierColorMap = {
  SS: 'bg-amber-500', S: 'bg-emerald-500', A: 'bg-sky-500',
  B: 'bg-slate-500', C: 'bg-zinc-600', D: 'bg-zinc-700'
}

// ---------------------------------------------------------------------------
// Schools by element (contextual filter)
// ---------------------------------------------------------------------------
const SCHOOLS_BY_ELEMENT = {
  Fire: ['Burn', 'Wild', 'Support'],
  Ice: ['Frost', 'Ice Blast', 'Support'],
  Lightning: ['Dauntless', 'Thunderbolt', 'Support'],
  Poison: ['Corrosion', 'Poison', 'Toxin', 'Support'],
  Necrosis: ['Shadow', 'Summon', 'Support'],
  Radiance: ['Aura', 'Rally', 'Support'],
}

// ---------------------------------------------------------------------------
// Filter state
// ---------------------------------------------------------------------------
const ownershipFilter = ref('owned') // 'owned' | 'not_owned'
const search = ref('')
const activeElement = ref(null)
const activeSchool = ref(null)
const selectedHero = ref(null)

function toggleElement(key) {
  activeElement.value = activeElement.value === key ? null : key
  activeSchool.value = null
}

function isElActive(key) {
  return activeElement.value === key
}

// Schools available based on selected element
const availableSchools = computed(() => {
  if (!activeElement.value) return []
  return SCHOOLS_BY_ELEMENT[activeElement.value] || []
})

// ---------------------------------------------------------------------------
// Roster counts
// ---------------------------------------------------------------------------
const ownedCount = computed(() => D.myRoster().length)
const totalCount = computed(() => D.allHeroes().length)

// ---------------------------------------------------------------------------
// Hero list (computed)
// ---------------------------------------------------------------------------
const tierOrder = { SS: 0, S: 1, A: 2, B: 3, C: 4, D: 5 }

const filteredHeroes = computed(() => {
  let heroes
  if (ownershipFilter.value === 'owned') {
    heroes = D.myRoster().map(h => {
      const full = heroFull(h.id)
      if (!full) return null
      return { ...full, _owned: true }
    }).filter(Boolean)
  } else {
    heroes = D.allHeroes()
      .filter(h => !D.isOwned(h.id))
      .map(h => {
        const full = heroFull(h.id) || h
        return { ...full, _owned: false }
      })
  }

  // Element filter
  if (activeElement.value) {
    heroes = heroes.filter(h => h.element === activeElement.value)
  }

  // School filter
  if (activeSchool.value) {
    heroes = heroes.filter(h => h.school === activeSchool.value)
  }

  // Search filter
  const q = search.value.trim().toLowerCase()
  if (q) {
    heroes = heroes.filter(h => {
      const name = (h.name || '').toLowerCase()
      const school = (h.school || '').toLowerCase()
      const element = (h.element || '').toLowerCase()
      return name.includes(q) || school.includes(q) || element.includes(q)
    })
  }

  // Sort: owned first (in "Todos" mode), then by avg rating desc, then by tier, then alphabetical
  heroes.sort((a, b) => {
    const ra = a.avg || 0
    const rb = b.avg || 0
    if (rb !== ra) return rb - ra
    const ta = tierOrder[a.ac_tier] ?? 6
    const tb = tierOrder[b.ac_tier] ?? 6
    if (ta !== tb) return ta - tb
    return (a.name || '').localeCompare(b.name || '')
  })

  return heroes
})

// ---------------------------------------------------------------------------
// Rating labels (for detail modal)
// ---------------------------------------------------------------------------
const ratingLabels = {
  temporal_vortex: 'Temporal Vortex',
  goblin_lair: 'Goblin Lair',
  grave_of_venom: 'Grave (Venom)',
  grave_of_curse: 'Grave (Curse)',
  grave_of_rot: 'Grave (Rot)',
  heretical_ruins: 'Heretical Ruins',
  ancient_battlefield: 'Ancient Battlefield',
  arena: 'Arena',
  fae: 'Fae',
  pillar: 'Pillar',
  green_dragon: 'Green Dragon',
  violet_dragon: 'Violet Dragon',
  gloomland: 'Gloomland',
  turret: 'Turret'
}

const skillTypes = [
  { key: 'ultimate', label: 'Ultimate' },
  { key: 'battle',   label: 'Battle' },
  { key: 'passive',  label: 'Passive' }
]

// ---------------------------------------------------------------------------
// Detail hero data (computed from selectedHero)
// ---------------------------------------------------------------------------
const detailHero = computed(() => {
  if (!selectedHero.value) return null
  const id = selectedHero.value
  const hero = D.hero(id)
  const my = D.myHero(id)
  const tier = tierById(id)
  if (!hero && !my) return null
  const builds = window.DATA_BUILDS || []
  const build = builds.find(b => b.id === id) || null
  return { hero, my, tier, build }
})

const detailMeta = computed(() => {
  if (!detailHero.value) return []
  const h = detailHero.value.hero
  if (!h) return []
  const parts = []
  if (h.element) parts.push(h.element)
  if (h.school) parts.push(h.school)
  if (h.season) parts.push(h.season.toUpperCase())
  if (h.race) parts.push(h.race)
  return parts
})

const detailRatings = computed(() => {
  if (!detailHero.value) return []
  const r = detailHero.value.hero?.ratings || detailHero.value.tier?.ratings
  if (!r) return []
  const out = []
  for (const [key, label] of Object.entries(ratingLabels)) {
    const val = r[key]
    if (val != null && val !== '-') out.push({ label, val: Number(val) })
  }
  return out
})

function ratingColor(val) {
  if (val >= 4.5) return 'text-amber-400'
  if (val >= 3.5) return 'text-emerald-400'
  if (val >= 2.5) return 'text-sky-400'
  return 'text-text-muted'
}

function openDetail(id) {
  selectedHero.value = id
}

function closeDetail() {
  selectedHero.value = null
}

function formatInspiration(insp) {
  if (!insp) return ''
  if (typeof insp === 'string') return insp
  return insp.spell_tips || insp.show_name || ''
}

// ---------------------------------------------------------------------------
// Artifact data for detail modal
// ---------------------------------------------------------------------------
const detailArtifacts = computed(() => {
  if (!selectedHero.value) return []
  const build = detailHero.value?.build
  const gameRecs = D.heroArtifacts(selectedHero.value)

  // If build has curated artifact info, mark the BiS
  const bisName = build?.artifact?.bis?.toLowerCase() || ''

  return gameRecs.map(a => ({
    ...a,
    isBis: bisName && a.name.toLowerCase() === bisName,
    imgUrl: D.artifactImgUrl(a.name)
  }))
})

const detailBuildArtifact = computed(() => {
  return detailHero.value?.build?.artifact || null
})

// Top artifact: BiS from builds, or first game-recommended from tj_sq
const detailTopArtifact = computed(() => {
  if (!selectedHero.value) return null
  const arts = detailArtifacts.value
  // Prefer the BiS-marked artifact
  const bis = arts.find(a => a.isBis)
  if (bis) return bis
  // Fallback to first game-recommended
  return arts[0] || null
})

const rarityArtifactColor = {
  Mythic: 'text-purple-400',
  Legendary: 'text-gold',
  Epic: 'text-el-lightning'
}
</script>

<template>
  <div>
    <!-- Header -->
    <header class="mb-4 md:mb-6">
      <h1 class="font-display text-xl md:text-2xl font-bold text-gold">Meus Herois</h1>
      <p class="text-sm text-text-dim mt-1">
        {{ ownedCount }} herois no roster — {{ totalCount }} no banco
      </p>
    </header>

    <!-- Filter bar — 3 groups with dividers -->
    <div class="mb-4 space-y-2">
      <!-- Row 1: Ownership + Elements -->
      <div class="flex items-center gap-1.5 flex-wrap">
        <!-- Ownership -->
        <button
          class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
          :class="ownershipFilter === 'owned'
            ? 'bg-gold text-bg-deep border-gold'
            : 'border-border text-text-dim hover:text-text-primary'"
          @click="ownershipFilter = 'owned'"
        >Possuo</button>
        <button
          class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
          :class="ownershipFilter === 'not_owned'
            ? 'bg-accent-red/80 text-white border-accent-red'
            : 'border-border text-text-dim hover:text-text-primary'"
          @click="ownershipFilter = 'not_owned'"
        >Nao possuo</button>

        <!-- Divider -->
        <span class="w-px h-5 bg-border mx-0.5 shrink-0"></span>

        <!-- Elements -->
        <button
          v-for="el in ELEMENTS" :key="el.key"
          class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
          :style="{
            color: isElActive(el.key) ? '#fff' : elColor(el.key),
            backgroundColor: isElActive(el.key) ? elColor(el.key) : 'transparent',
            borderColor: isElActive(el.key) ? elColor(el.key) : `color-mix(in srgb, ${elColor(el.key)} 40%, transparent)`
          }"
          @click="toggleElement(el.key)"
        >{{ el.label }}</button>
      </div>

      <!-- Row 2: Schools (only when element selected) -->
      <div v-if="availableSchools.length" class="flex items-center gap-1.5 flex-wrap">
        <span class="text-[0.6rem] text-text-muted uppercase tracking-wider font-semibold mr-0.5 shrink-0">School</span>
        <button
          v-for="school in availableSchools" :key="school"
          class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
          :class="activeSchool === school
            ? 'bg-bg-elevated text-gold border-gold-dim'
            : 'border-border text-text-dim hover:text-text-primary'"
          @click="activeSchool = activeSchool === school ? null : school"
        >{{ school }}</button>
      </div>

      <!-- Row 3: Search -->
      <div class="relative">
        <input
          v-model="search"
          type="text"
          placeholder="Buscar heroi, escola, elemento..."
          class="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
        />
        <button
          v-if="search"
          class="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary text-xs"
          @click="search = ''"
        >&times;</button>
      </div>
    </div>

    <!-- Hero count -->
    <div class="text-xs text-text-muted mb-3">
      {{ filteredHeroes.length }} heroi{{ filteredHeroes.length !== 1 ? 's' : '' }}
    </div>

    <!-- Hero grid -->
    <div
      v-if="filteredHeroes.length"
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5"
    >
      <div
        v-for="hero in filteredHeroes" :key="hero.id"
        class="hero-card bg-bg-card rounded-xl border overflow-hidden cursor-pointer transition-all active:scale-[0.97] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        :class="!hero._owned ? 'opacity-40' : ''"
        :style="{
          borderColor: `color-mix(in srgb, ${elColor(hero.element)} 30%, transparent)`,
          '--el': elColor(hero.element)
        }"
        @click="openDetail(hero.id)"
      >
        <!-- Element accent bar -->
        <div class="h-0.5" :style="{ backgroundColor: elColor(hero.element) }" />

        <!-- Hero portrait -->
        <div class="relative">
          <img
            :src="heroImgUrl(hero.id)"
            :alt="hero.name"
            class="w-full aspect-[3/4] object-cover object-top"
            loading="lazy"
            @error="$event.target.style.display = 'none'"
          />

          <!-- Rating badge (top-right) -->
          <span
            v-if="hero.avg"
            class="absolute top-1.5 right-1.5 text-[0.6rem] font-bold px-1.5 py-0.5 rounded-md bg-black/70 backdrop-blur-sm"
            :class="hero.avg >= 4.5 ? 'text-amber-400' : hero.avg >= 3.5 ? 'text-emerald-400' : 'text-text-dim'"
          >
            {{ hero.avg.toFixed(1) }}
          </span>

          <!-- Not owned label -->
          <span
            v-if="!hero._owned"
            class="absolute bottom-1.5 left-1.5 text-[0.55rem] font-semibold px-1.5 py-0.5 rounded bg-black/70 text-text-muted backdrop-blur-sm"
          >
            Nao possui
          </span>
        </div>

        <!-- Content -->
        <div class="p-2 pt-1.5">
          <!-- Name row -->
          <div class="flex items-center gap-1.5 mb-0.5">
            <span
              class="w-2 h-2 rounded-full shrink-0"
              :style="{ backgroundColor: elColor(hero.element), boxShadow: `0 0 4px ${elColor(hero.element)}` }"
            />
            <span class="text-xs font-semibold truncate leading-tight" :title="hero.name">
              {{ hero.name }}
            </span>
          </div>

          <!-- Rarity + tier -->
          <div class="flex items-center gap-1.5 mt-0.5">
            <span
              class="text-[0.6rem]"
              :class="rarityColorMap[hero.rarity] || 'text-text-muted'"
            >
              {{ hero.rarity }}
            </span>
            <span
              v-if="hero.ac_tier"
              class="text-[0.55rem] font-bold text-white px-1 py-px rounded"
              :class="tierColorMap[hero.ac_tier] || 'bg-zinc-600'"
            >
              {{ hero.ac_tier }}
            </span>
          </div>

          <!-- Inspiration (owned) -->
          <div v-if="hero._owned && hero.insp > 0" class="mt-1">
            <span class="text-[0.6rem] text-gold-dim font-semibold">Insp.{{ hero.insp }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-else class="flex items-center justify-center py-16 text-text-muted text-sm">
      Nenhum heroi encontrado.
    </div>

    <!-- ========== Detail Modal ========== -->
    <Teleport to="body">
      <div
        v-if="detailHero"
        class="fixed inset-0 z-50 bg-black/90 md:flex md:items-start md:justify-center md:p-8 overflow-y-auto"
        @click.self="closeDetail"
      >
        <div class="bg-bg-surface min-h-dvh md:min-h-0 md:max-h-[90vh] md:max-w-[600px] w-full md:rounded-2xl md:border md:border-border md:overflow-y-auto">
          <!-- Top bar -->
          <div class="sticky top-0 z-10 bg-bg-surface/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3 md:rounded-t-2xl">
            <button
              class="w-9 h-9 rounded-full border border-border bg-bg-card text-text-dim flex items-center justify-center shrink-0 active:scale-90 transition-transform"
              @click="closeDetail"
            >
              &#8592;
            </button>
            <span class="font-display text-sm font-semibold truncate">
              {{ detailHero.hero?.name || `Hero #${selectedHero}` }}
            </span>
          </div>

          <div class="p-4 space-y-5">

            <!-- Identity section -->
            <div class="flex items-start gap-4">
              <img
                :src="heroImgUrl(selectedHero)"
                :alt="detailHero.hero?.name"
                class="w-20 h-[120px] rounded-xl border border-border object-cover object-top shrink-0"
              />
              <div class="pt-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span
                    class="w-3 h-3 rounded-full shrink-0"
                    :style="{
                      backgroundColor: elColor(detailHero.hero?.element),
                      boxShadow: `0 0 6px ${elColor(detailHero.hero?.element)}`
                    }"
                  />
                  <span
                    class="text-lg font-bold"
                    :class="rarityColorMap[detailHero.hero?.rarity] || 'text-text-primary'"
                  >
                    {{ detailHero.hero?.name }}
                  </span>
                </div>
                <div class="text-sm text-text-dim">{{ detailHero.hero?.rarity }}</div>
                <div v-if="detailMeta.length" class="text-xs text-text-muted mt-1.5">
                  {{ detailMeta.join(' \u00b7 ') }}
                </div>
              </div>
            </div>

            <!-- Top Artifact (BiS or #1 recommended) -->
            <div v-if="detailTopArtifact" class="flex items-center gap-3 bg-bg-card rounded-xl p-3 border border-gold/20">
              <img
                v-if="detailTopArtifact.imgUrl"
                :src="detailTopArtifact.imgUrl"
                :alt="detailTopArtifact.name"
                class="w-11 h-11 rounded-lg border border-border object-cover shrink-0"
                loading="lazy"
                @error="$event.target.style.display = 'none'"
              />
              <div v-else class="w-11 h-11 rounded-lg border border-border bg-bg-elevated shrink-0 flex items-center justify-center text-text-muted text-[0.5rem]">?</div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[0.6rem] font-semibold text-text-muted uppercase tracking-wide">Artefato</span>
                  <span v-if="detailTopArtifact.isBis" class="text-[0.5rem] font-bold text-gold bg-gold/10 px-1.5 py-0.5 rounded">BiS</span>
                  <span v-else class="text-[0.5rem] font-bold text-text-muted bg-bg-elevated px-1.5 py-0.5 rounded">#1</span>
                </div>
                <div class="text-sm font-semibold mt-0.5" :class="rarityArtifactColor[detailTopArtifact.rarity] || 'text-text-primary'">
                  {{ detailTopArtifact.name }}
                </div>
                <div v-if="detailTopArtifact.skillName" class="text-[0.65rem] text-text-dim mt-0.5 line-clamp-2">
                  <span class="text-gold-dim font-semibold">{{ detailTopArtifact.skillName }}:</span>
                  {{ detailTopArtifact.skill }}
                </div>
              </div>
            </div>

            <!-- Tiers section -->
            <div v-if="detailHero.hero?.avg || detailHero.tier">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Avaliacoes</h3>
              <div class="flex items-center gap-3 flex-wrap">
                <div v-if="detailHero.tier?.ac_tier" class="flex items-center gap-1">
                  <span class="text-xs text-text-muted">AC:</span>
                  <span
                    class="text-xs font-bold text-white px-1.5 py-0.5 rounded"
                    :class="tierColorMap[detailHero.tier.ac_tier] || 'bg-zinc-600'"
                  >
                    {{ detailHero.tier.ac_tier }}
                  </span>
                </div>
                <div v-if="detailHero.hero?.avg" class="flex items-center gap-1">
                  <span class="text-xs text-text-muted">DI Avg:</span>
                  <span class="text-sm font-medium text-text-primary">{{ detailHero.hero.avg.toFixed(1) }}</span>
                </div>
                <div v-if="detailHero.tier?.di_rank" class="flex items-center gap-1">
                  <span class="text-xs text-text-muted">DI:</span>
                  <span class="text-sm font-medium text-text-primary">#{{ detailHero.tier.di_rank }}</span>
                </div>
              </div>
            </div>

            <!-- Activity ratings -->
            <div v-if="detailRatings.length">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Ratings por Atividade</h3>
              <div class="grid grid-cols-2 gap-x-4 gap-y-1">
                <div v-for="r in detailRatings" :key="r.label" class="flex justify-between text-xs py-0.5">
                  <span class="text-text-dim">{{ r.label }}</span>
                  <span class="font-medium" :class="ratingColor(r.val)">{{ r.val.toFixed(1) }}</span>
                </div>
              </div>
            </div>

            <!-- Captain skill -->
            <div v-if="detailHero.hero?.captain">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Capitao</h3>
              <div class="text-xs text-text-dim bg-bg-card rounded-lg p-3 leading-relaxed border border-border">
                {{ detailHero.hero.captain }}
              </div>
            </div>

            <!-- Talentos (S6: 4 picks, cada um escolhe entre 3 lanes) -->
            <div v-if="detailHero.hero?.tf?.length === 3">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Talentos</h3>
              <div class="bg-bg-card rounded-lg p-3 border border-border">
                <div class="grid grid-cols-4 gap-2">
                  <div v-for="col in 4" :key="col" class="flex flex-col items-center gap-1.5">
                    <span class="text-[0.55rem] text-text-muted font-semibold">{{ col + 2 }}</span>
                    <div
                      v-for="row in 3" :key="row"
                      class="w-8 h-8 rounded-md border flex items-center justify-center text-[0.6rem] font-bold transition-colors"
                      :class="detailHero.hero.tf[row - 1][col - 1]
                        ? 'bg-gold/20 border-gold text-gold'
                        : 'bg-bg-elevated border-border text-text-muted/30'"
                    >
                      {{ ['T', 'M', 'B'][row - 1] }}
                    </div>
                  </div>
                </div>
                <p class="text-[0.6rem] text-text-muted mt-2 text-center">T = Top · M = Mid · B = Bottom</p>
              </div>
            </div>

            <!-- Artefatos Recomendados -->
            <div v-if="detailArtifacts.length">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Artefatos Recomendados</h3>

              <!-- Build curated reason (if available) -->
              <div v-if="detailBuildArtifact?.reason" class="text-xs text-text-dim bg-bg-card rounded-lg p-2.5 mb-2 border border-border leading-relaxed italic">
                {{ detailBuildArtifact.reason }}
              </div>

              <div class="space-y-2">
                <div
                  v-for="(art, idx) in detailArtifacts" :key="idx"
                  class="flex items-start gap-3 bg-bg-card rounded-lg p-3 border transition-colors"
                  :class="art.isBis ? 'border-gold/40' : 'border-border'"
                >
                  <!-- Artifact image -->
                  <img
                    v-if="art.imgUrl"
                    :src="art.imgUrl"
                    :alt="art.name"
                    class="w-10 h-10 rounded-md border border-border object-cover shrink-0"
                    loading="lazy"
                    @error="$event.target.style.display = 'none'"
                  />
                  <div v-else class="w-10 h-10 rounded-md border border-border bg-bg-elevated shrink-0 flex items-center justify-center text-text-muted text-[0.5rem]">?</div>

                  <!-- Info -->
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <span class="text-sm font-semibold" :class="rarityArtifactColor[art.rarity] || 'text-text-primary'">
                        {{ art.name }}
                      </span>
                      <span v-if="art.isBis" class="text-[0.55rem] font-bold text-gold bg-gold/10 px-1.5 py-0.5 rounded">BiS</span>
                      <span v-if="art.season" class="text-[0.5rem] text-text-muted uppercase">{{ art.season }}</span>
                    </div>
                    <div v-if="art.stat1 || art.stat2" class="text-[0.65rem] text-text-muted mt-0.5">
                      {{ [art.stat1, art.stat2].filter(Boolean).join(' + ') }}
                    </div>
                    <div v-if="art.skillName" class="text-xs text-text-dim mt-1">
                      <span class="text-gold-dim font-semibold">{{ art.skillName }}:</span>
                      {{ art.skill }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Build alternatives (if curated and not already in game recs) -->
              <div v-if="detailBuildArtifact?.alternatives?.length" class="mt-2 text-xs text-text-muted">
                <span class="font-semibold">Alternativas:</span> {{ detailBuildArtifact.alternatives.join(', ') }}
              </div>
            </div>

            <!-- Skills -->
            <div v-if="detailHero.hero?.skills">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Skills</h3>
              <div class="space-y-2">
                <div
                  v-for="st in skillTypes" :key="st.key"
                  v-show="detailHero.hero.skills[st.key]"
                  class="bg-bg-card rounded-lg p-3 border border-border"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-[0.6rem] font-semibold text-gold-dim uppercase tracking-wide">{{ st.label }}</span>
                    <span class="text-sm font-medium text-text-primary">
                      {{ detailHero.hero.skills[st.key]?.name }}
                    </span>
                  </div>
                  <div class="text-xs text-text-dim leading-relaxed">
                    {{ detailHero.hero.skills[st.key]?.description }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Inspiration -->
            <div v-if="detailHero.hero?.inspiration?.length">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">
                Inspiracao (Bonus)
              </h3>
              <div class="space-y-1">
                <div
                  v-for="(insp, idx) in detailHero.hero.inspiration" :key="idx"
                  class="flex items-start gap-2 text-xs"
                >
                  <span
                    class="font-mono font-bold shrink-0"
                    :class="detailHero.my && detailHero.my.insp != null && idx < detailHero.my.insp ? 'text-gold' : 'text-text-muted/40'"
                  >
                    {{ idx + 1 }}.
                  </span>
                  <span
                    :class="detailHero.my && detailHero.my.insp != null && idx < detailHero.my.insp ? 'text-text-dim' : 'text-text-muted/40'"
                  >
                    {{ formatInspiration(insp) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Owned-specific: My Progress -->
            <div v-if="detailHero.my">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Meu Progresso</h3>
              <div class="space-y-3">
                <!-- Inspiration progress bar -->
                <div v-if="detailHero.my.insp != null">
                  <div class="flex justify-between text-xs mb-1">
                    <span class="text-text-dim">Inspiracao</span>
                    <span class="text-gold">{{ detailHero.my.insp }}/5</span>
                  </div>
                  <div class="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                    <div
                      class="h-full bg-gold rounded-full transition-all"
                      :style="{ width: `${(detailHero.my.insp / 5) * 100}%` }"
                    />
                  </div>
                </div>

                <!-- Skill level progress bar -->
                <div v-if="detailHero.my.skill_level != null">
                  <div class="flex justify-between text-xs mb-1">
                    <span class="text-text-dim">Nivel de Skill</span>
                    <span class="text-el-ice">{{ detailHero.my.skill_level }}/10</span>
                  </div>
                  <div class="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                    <div
                      class="h-full bg-el-ice rounded-full transition-all"
                      :style="{ width: `${(detailHero.my.skill_level / 10) * 100}%` }"
                    />
                  </div>
                </div>

                <!-- Notes -->
                <div v-if="detailHero.my.notes">
                  <div class="text-xs text-text-muted mb-1">Notas</div>
                  <div class="text-xs text-text-dim bg-bg-card rounded-lg p-2.5 leading-relaxed border border-border">
                    {{ detailHero.my.notes }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Not owned fallback -->
            <div v-else class="bg-bg-card rounded-lg p-3 text-center text-sm text-text-muted italic border border-border">
              Heroi nao esta no seu roster.
            </div>

          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* Hide scrollbar on filter pills while keeping scroll */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* Hover border brightens the element color */
.hero-card:hover {
  border-color: var(--el, var(--color-border-hover)) !important;
}
</style>
