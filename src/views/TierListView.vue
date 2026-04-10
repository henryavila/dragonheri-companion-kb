<script setup>
import { ref, computed } from 'vue'
import { D } from '@/data'

// ---------------------------------------------------------------------------
// Element definitions
// ---------------------------------------------------------------------------
const ELEMENTS = [
  { key: 'Fire',      label: 'Fire' },
  { key: 'Ice',       label: 'Ice' },
  { key: 'Lightning', label: 'Lightning' },
  { key: 'Poison',    label: 'Poison' },
  { key: 'Necrosis',  label: 'Necrosis' },
  { key: 'Radiance',  label: 'Radiance' },
]

const elCssVar = {
  Fire: '--color-el-fire', Ice: '--color-el-ice',
  Lightning: '--color-el-lightning', Poison: '--color-el-poison',
  Necrosis: '--color-el-necrosis', Radiance: '--color-el-radiance'
}

function elColor(element) {
  const v = elCssVar[element]
  return v ? `var(${v})` : 'var(--color-gold)'
}

const rarityColorMap = {
  Mythic: 'text-purple-400', Legendary: 'text-gold', Epic: 'text-el-lightning',
  Rare: 'text-el-ice', Common: 'text-text-muted'
}

const rarityRank = { Mythic: 0, Legendary: 1, Epic: 2, Rare: 3, Common: 4 }
const elemRank = { Fire: 0, Ice: 1, Lightning: 2, Poison: 3, Necrosis: 4, Radiance: 5 }

// ---------------------------------------------------------------------------
// Activity labels (Portuguese)
// ---------------------------------------------------------------------------
const activityLabels = {
  temporal_vortex:      'Vortice Temporal',
  goblin_lair:          'Covil Goblin',
  heretical_ruins:      'Ruinas Hereticas',
  ancient_battlefield:  'Campo de Batalha',
  arena:                'Arena',
  turret:               'Turret',
  grave_of_venom:       'Grave (Veneno)',
  grave_of_curse:       'Grave (Maldicao)',
  grave_of_rot:         'Grave (Podridao)',
  fae:                  'Fae',
  pillar:               'Pilar das Provas',
  green_dragon:         'Dragao Verde',
  violet_dragon:        'Dragao Violeta',
  gloomland:            'Gloomland'
}

const skillTypes = [
  { key: 'ultimate', label: 'Ultimate' },
  { key: 'battle',   label: 'Battle' },
  { key: 'passive',  label: 'Passive' }
]

// ---------------------------------------------------------------------------
// Filter & sort state
// ---------------------------------------------------------------------------
const search = ref('')
const activeElements = ref([])
const onlyOwned = ref(false)
const sortCol = ref('avg')
const sortDir = ref('desc')
const selectedHero = ref(null)

function toggleElement(key) {
  const idx = activeElements.value.indexOf(key)
  if (idx >= 0) activeElements.value.splice(idx, 1)
  else activeElements.value.push(key)
}

function isElActive(key) {
  return activeElements.value.includes(key)
}

// ---------------------------------------------------------------------------
// Table column definitions
// ---------------------------------------------------------------------------
const columns = [
  { key: 'name',    label: 'Nome',     defaultDir: 'asc' },
  { key: 'element', label: 'Elem',     defaultDir: 'asc' },
  { key: 'rarity',  label: 'Raridade', defaultDir: 'asc' },
  { key: 'avg',     label: 'DI Avg',   defaultDir: 'desc' },
  { key: 'school',  label: 'School',   defaultDir: 'asc' },
  { key: 'season',  label: 'Season',   defaultDir: 'asc' },
  { key: 'owned',   label: '\u2713',   defaultDir: 'desc' },
]

function toggleSort(col) {
  if (sortCol.value === col.key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortCol.value = col.key
    sortDir.value = col.defaultDir
  }
}

function sortArrow(col) {
  if (sortCol.value !== col.key) return ''
  return sortDir.value === 'asc' ? ' \u25B2' : ' \u25BC'
}

// ---------------------------------------------------------------------------
// Enriched hero list
// ---------------------------------------------------------------------------
const enrichedHeroes = computed(() => {
  return D.allTiers().map(t => {
    const heroData = t.id ? D.hero(t.id) : null
    return {
      ...t,
      type: heroData?.type || null,
      race: heroData?.race || null,
      captain: heroData?.captain || null,
      skills: heroData?.skills || null,
      inspiration: heroData?.inspiration || null,
      owned: t.id ? D.isOwned(t.id) : false,
    }
  })
})

// ---------------------------------------------------------------------------
// Filtered + sorted list
// ---------------------------------------------------------------------------
const filteredHeroes = computed(() => {
  let heroes = enrichedHeroes.value

  // Element filter
  if (activeElements.value.length > 0) {
    heroes = heroes.filter(h => activeElements.value.includes(h.element))
  }

  // Search filter
  const q = search.value.trim().toLowerCase()
  if (q) {
    heroes = heroes.filter(h => {
      const name = (h.name || '').toLowerCase()
      const school = (h.school || '').toLowerCase()
      const element = (h.element || '').toLowerCase()
      const season = (h.season || '').toLowerCase()
      return name.includes(q) || school.includes(q) || element.includes(q) || season.includes(q)
    })
  }

  // Only owned filter
  if (onlyOwned.value) {
    heroes = heroes.filter(h => h.owned)
  }

  // Sort
  const col = sortCol.value
  const dir = sortDir.value === 'asc' ? 1 : -1

  heroes = [...heroes].sort((a, b) => {
    let va = a[col]
    let vb = b[col]

    // avg (numeric)
    if (col === 'avg') {
      va = parseFloat(va) || 0
      vb = parseFloat(vb) || 0
      const cmp = (va - vb) * dir
      if (cmp !== 0) return cmp
      // Secondary: name asc
      return (a.name || '').localeCompare(b.name || '')
    }

    // Rarity sort order
    if (col === 'rarity') {
      va = rarityRank[va] ?? 99
      vb = rarityRank[vb] ?? 99
      return (va - vb) * dir
    }

    // Element sort order
    if (col === 'element') {
      va = elemRank[va] ?? 99
      vb = elemRank[vb] ?? 99
      return (va - vb) * dir
    }

    // Boolean (owned)
    if (col === 'owned') {
      va = va ? 1 : 0
      vb = vb ? 1 : 0
      return (va - vb) * dir
    }

    // Season sort (s1 < s2 < s3 etc.)
    if (col === 'season') {
      va = parseInt((va || '').replace(/\D/g, '')) || 99
      vb = parseInt((vb || '').replace(/\D/g, '')) || 99
      return (va - vb) * dir
    }

    // String columns
    va = (va || '').toString().toLowerCase()
    vb = (vb || '').toString().toLowerCase()
    if (va < vb) return -1 * dir
    if (va > vb) return 1 * dir
    return 0
  })

  return heroes
})

// ---------------------------------------------------------------------------
// Avg rating display helpers
// ---------------------------------------------------------------------------
function avgColor(avg) {
  if (!avg || avg === 0) return 'text-text-muted'
  if (avg >= 4.5) return 'text-amber-400'
  if (avg >= 3.5) return 'text-emerald-400'
  if (avg >= 2.5) return 'text-sky-400'
  if (avg >= 1.5) return 'text-orange-400'
  return 'text-text-muted'
}

function ratingBarColor(val) {
  if (val >= 4.5) return 'bg-amber-400'
  if (val >= 3.5) return 'bg-emerald-400'
  if (val >= 2.5) return 'bg-sky-400'
  if (val >= 1.5) return 'bg-orange-400'
  return 'bg-zinc-600'
}

function ratingColor(val) {
  if (val >= 4.5) return 'text-amber-400'
  if (val >= 3.5) return 'text-emerald-400'
  if (val >= 2.5) return 'text-sky-400'
  return 'text-text-muted'
}

// ---------------------------------------------------------------------------
// Detail modal
// ---------------------------------------------------------------------------
function openDetail(hero) {
  selectedHero.value = hero
}

function closeDetail() {
  selectedHero.value = null
}

const detailRatings = computed(() => {
  if (!selectedHero.value?.ratings) return []
  const r = selectedHero.value.ratings
  const out = []
  for (const [key, label] of Object.entries(activityLabels)) {
    const val = r[key]
    if (val != null && val !== '-') out.push({ label, val: Number(val) })
  }
  return out
})

const detailMeta = computed(() => {
  if (!selectedHero.value) return []
  const h = selectedHero.value
  const parts = []
  if (h.element) parts.push(h.element)
  if (h.school) parts.push(h.school)
  if (h.season) parts.push(h.season.toUpperCase())
  if (h.type) parts.push(h.type)
  if (h.race) parts.push(h.race)
  return parts
})

function formatInspiration(insp) {
  if (!insp) return ''
  if (typeof insp === 'string') return insp
  return insp.spell_tips || insp.show_name || ''
}

function heroImgUrl(id) {
  return `https://i.dmzgame.com/dragonheir/img/hero/pic_hero_show_${id}.png`
}
</script>

<template>
  <div>
    <!-- Header -->
    <header class="mb-4 md:mb-6">
      <h1 class="font-display text-xl md:text-2xl font-bold text-gold">Tier List</h1>
      <p class="text-sm text-text-dim mt-1">
        {{ filteredHeroes.length }} de {{ enrichedHeroes.length }} herois
      </p>
    </header>

    <!-- Filter bar -->
    <div class="mb-4 space-y-2.5">
      <!-- Element pills + Owned toggle -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
        <!-- "So meus" toggle -->
        <button
          class="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors whitespace-nowrap"
          :class="onlyOwned
            ? 'bg-gold text-bg-deep border-gold'
            : 'border-gold text-gold hover:bg-gold/10'"
          @click="onlyOwned = !onlyOwned"
        >
          So meus
        </button>

        <!-- Element pills -->
        <button
          v-for="el in ELEMENTS" :key="el.key"
          class="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors whitespace-nowrap"
          :style="{
            color: isElActive(el.key) ? '#fff' : elColor(el.key),
            backgroundColor: isElActive(el.key) ? elColor(el.key) : 'transparent',
            borderColor: isElActive(el.key) ? elColor(el.key) : `color-mix(in srgb, ${elColor(el.key)} 40%, transparent)`
          }"
          @click="toggleElement(el.key)"
        >
          {{ el.label }}
        </button>
      </div>

      <!-- Search input -->
      <div class="relative">
        <input
          v-model="search"
          type="text"
          placeholder="Buscar heroi, escola, elemento, season..."
          class="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
        />
        <button
          v-if="search"
          class="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary text-xs"
          @click="search = ''"
        >
          &times;
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto rounded-xl border border-border bg-bg-card">
      <table class="w-full text-sm border-collapse">
        <!-- Table header -->
        <thead>
          <tr class="border-b border-border-hover">
            <th
              v-for="col in columns" :key="col.key"
              class="text-left pb-2.5 pt-3 px-3 text-xs text-text-muted uppercase cursor-pointer select-none hover:text-text-primary transition-colors whitespace-nowrap tracking-wide"
              @click="toggleSort(col)"
            >
              {{ col.label }}{{ sortArrow(col) }}
            </th>
          </tr>
        </thead>

        <!-- Table body -->
        <tbody>
          <tr
            v-for="hero in filteredHeroes" :key="hero.id"
            class="border-t border-border hover:bg-bg-hover/60 cursor-pointer transition-colors"
            :class="hero.owned ? 'border-l-2 border-l-gold/50 bg-gold/[0.03]' : ''"
            @click="openDetail(hero)"
          >
            <!-- Name -->
            <td class="py-2.5 px-3 whitespace-nowrap">
              <div class="flex items-center gap-2">
                <img
                  :src="heroImgUrl(hero.id)"
                  :alt="hero.name"
                  class="w-7 h-7 rounded-md object-cover object-top shrink-0 border border-border"
                  loading="lazy"
                  @error="$event.target.style.display = 'none'"
                />
                <span class="text-text-primary font-medium hover:text-gold transition-colors">
                  {{ hero.name }}
                </span>
              </div>
            </td>

            <!-- Element -->
            <td class="py-2.5 px-3 whitespace-nowrap">
              <div class="flex items-center gap-1.5">
                <span
                  class="w-2 h-2 rounded-full shrink-0"
                  :style="{ backgroundColor: elColor(hero.element), boxShadow: `0 0 4px ${elColor(hero.element)}` }"
                />
                <span class="text-xs" :style="{ color: elColor(hero.element) }">
                  {{ hero.element }}
                </span>
              </div>
            </td>

            <!-- Rarity -->
            <td
              class="py-2.5 px-3 text-xs"
              :class="rarityColorMap[hero.rarity] || 'text-text-muted'"
            >
              {{ hero.rarity || '\u2014' }}
            </td>

            <!-- DI Avg -->
            <td class="py-2.5 px-3 tabular-nums">
              <span
                v-if="hero.avg && hero.avg > 0"
                class="font-medium"
                :class="avgColor(hero.avg)"
              >
                {{ hero.avg.toFixed(1) }}
              </span>
              <span v-else class="text-text-muted">&mdash;</span>
            </td>

            <!-- School -->
            <td class="py-2.5 px-3 text-xs text-text-dim">
              {{ hero.school || '\u2014' }}
            </td>

            <!-- Season -->
            <td class="py-2.5 px-3 text-xs text-text-dim uppercase">
              {{ hero.season || '\u2014' }}
            </td>

            <!-- Owned -->
            <td class="py-2.5 px-3 text-center">
              <span v-if="hero.owned" class="text-gold text-sm">\u2713</span>
              <span v-else class="text-text-muted/30 text-sm">&mdash;</span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Empty state -->
      <div
        v-if="!filteredHeroes.length"
        class="flex items-center justify-center py-16 text-text-muted text-sm"
      >
        Nenhum heroi encontrado.
      </div>
    </div>

    <!-- ========== Detail Modal ========== -->
    <Teleport to="body">
      <div
        v-if="selectedHero"
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
              {{ selectedHero.name }}
            </span>
          </div>

          <div class="p-4 space-y-5">

            <!-- Identity section -->
            <div class="flex items-start gap-4">
              <img
                :src="heroImgUrl(selectedHero.id)"
                :alt="selectedHero.name"
                class="w-20 h-[120px] rounded-xl border border-border object-cover object-top shrink-0"
              />
              <div class="pt-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span
                    class="w-3 h-3 rounded-full shrink-0"
                    :style="{
                      backgroundColor: elColor(selectedHero.element),
                      boxShadow: `0 0 6px ${elColor(selectedHero.element)}`
                    }"
                  />
                  <span
                    class="text-lg font-bold"
                    :class="rarityColorMap[selectedHero.rarity] || 'text-text-primary'"
                  >
                    {{ selectedHero.name }}
                  </span>
                </div>
                <div class="text-sm text-text-dim">{{ selectedHero.rarity }}</div>
                <div v-if="detailMeta.length" class="text-xs text-text-muted mt-1.5">
                  {{ detailMeta.join(' \u00b7 ') }}
                </div>
                <div v-if="selectedHero.owned" class="mt-2">
                  <span class="text-[0.6rem] font-bold text-bg-deep bg-gold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Voce possui
                  </span>
                </div>
              </div>
            </div>

            <!-- DI Avg rating -->
            <div v-if="selectedHero.avg && selectedHero.avg > 0">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Avaliacao</h3>
              <div class="flex items-center gap-3 flex-wrap">
                <div class="flex items-center gap-1">
                  <span class="text-xs text-text-muted">DI Avg:</span>
                  <span class="text-lg font-bold" :class="avgColor(selectedHero.avg)">
                    {{ selectedHero.avg.toFixed(1) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Activity ratings -->
            <div v-if="detailRatings.length">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Ratings por Atividade</h3>
              <div class="space-y-1.5">
                <div
                  v-for="r in detailRatings" :key="r.label"
                  class="flex items-center gap-3"
                >
                  <span class="text-xs text-text-dim w-36 shrink-0 truncate">{{ r.label }}</span>
                  <span class="text-xs font-medium tabular-nums w-8 text-right" :class="ratingColor(r.val)">
                    {{ r.val.toFixed(1) }}
                  </span>
                  <div class="flex-1 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                    <div
                      class="h-full rounded-full transition-all"
                      :class="ratingBarColor(r.val)"
                      :style="{ width: `${Math.round((r.val / 5) * 100)}%` }"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- No ratings -->
            <div
              v-else-if="!detailRatings.length && (!selectedHero.avg || selectedHero.avg === 0)"
              class="text-sm text-text-muted italic"
            >
              Sem ratings disponiveis.
            </div>

            <!-- Captain skill -->
            <div v-if="selectedHero.captain">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Capitao</h3>
              <div class="text-xs text-text-dim bg-bg-card rounded-lg p-3 leading-relaxed border border-border">
                {{ selectedHero.captain }}
              </div>
            </div>

            <!-- Skills -->
            <div v-if="selectedHero.skills">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">Skills</h3>
              <div class="space-y-2">
                <div
                  v-for="st in skillTypes" :key="st.key"
                  v-show="selectedHero.skills[st.key]"
                  class="bg-bg-card rounded-lg p-3 border border-border"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-[0.6rem] font-semibold text-gold-dim uppercase tracking-wide">{{ st.label }}</span>
                    <span class="text-sm font-medium text-text-primary">
                      {{ selectedHero.skills[st.key]?.name }}
                    </span>
                  </div>
                  <div class="text-xs text-text-dim leading-relaxed">
                    {{ selectedHero.skills[st.key]?.description }}
                  </div>
                </div>
              </div>
            </div>

            <!-- No skills -->
            <div v-if="!selectedHero.skills" class="text-sm text-text-muted italic">
              Dados de skills nao disponiveis.
            </div>

            <!-- Inspiration -->
            <div v-if="selectedHero.inspiration?.length">
              <h3 class="text-[0.65rem] font-semibold text-text-muted tracking-widest uppercase mb-2">
                Inspiracao (Bonus)
              </h3>
              <div class="space-y-1">
                <div
                  v-for="(insp, idx) in selectedHero.inspiration" :key="idx"
                  class="flex items-start gap-2 text-xs"
                >
                  <span class="font-mono font-bold shrink-0 text-text-muted/40">
                    {{ idx + 1 }}.
                  </span>
                  <span class="text-text-muted/60">
                    {{ formatInspiration(insp) }}
                  </span>
                </div>
              </div>
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
</style>
