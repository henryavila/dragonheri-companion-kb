<script setup>
import { computed } from 'vue'
import { D, deferredReady } from '@/data'

const base = import.meta.env.BASE_URL

// ---------------------------------------------------------------------------
// Familiar catalog — reads from mechanics.js at runtime
// ---------------------------------------------------------------------------
// deferredReady.value is referenced to create a reactive dependency —
// when deferred data finishes loading, these computeds re-evaluate.
const familiarsData = computed(() => { deferredReady.value; return D.mechanics()?.familiars || {} })
const catalog = computed(() => familiarsData.value.familiars_catalog || [])
const talentSystem = computed(() => familiarsData.value.talent_system || {})
const investmentPriority = computed(() => familiarsData.value.investment_priority || [])

// ---------------------------------------------------------------------------
// Image mapping (local files in public/img/familiars/)
// ---------------------------------------------------------------------------
const imgMap = {
  Rollbot: 'rollbot.png',
  Tressym: 'tressym.png',
  Mimic: 'mimic.png',
  Stoneborn: 'stoneborn.png',
  Saberwinger: 'saberwinger.png',
  Vulture: 'vulture.png',
  Thalarin: 'thalarin.png',
  'Foliage Spiker': 'foliage-spiker.png',
}

const placeholderEmoji = {
  'Master Genie': '🧞',
  Batwing: '🦇',
}

function familiarImg(name) {
  const file = imgMap[name]
  return file ? `${base}img/familiars/${file}` : null
}

// ---------------------------------------------------------------------------
// Tier badge styling
// ---------------------------------------------------------------------------
function tierClass(tier) {
  if (!tier) return 'bg-bg-hover text-text-muted'
  const t = tier.replace(/[^A-Za-z+]/g, '').toUpperCase()
  if (t.includes('S+') || t.includes('SMYTHIC')) return 'bg-gradient-to-r from-amber-500 to-red-500 text-black'
  if (t.startsWith('S')) return 'bg-amber-500 text-black'
  if (t.startsWith('A')) return 'bg-sky-500 text-white'
  if (t.startsWith('B')) return 'bg-slate-500 text-white'
  return 'bg-bg-hover text-text-muted'
}

function tierLabel(tier) {
  if (!tier) return '?'
  // Clean for display: "A (AllClash) / S (pratico para bosses)" → "S★"
  // Keep it short
  if (tier.includes('Mythic')) return 'S+'
  if (tier.includes('pratico')) return 'S★'
  const m = tier.match(/^([A-Z][+-]?)/i)
  return m ? m[1] : tier.slice(0, 3)
}

// ---------------------------------------------------------------------------
// Per-familiar signature talents from talent_system
// ---------------------------------------------------------------------------
function signatureTalents(name) {
  const perFam = talentSystem.value.per_familiar_talents
  if (!perFam) return []
  const entry = perFam[name]
  if (!entry) return []
  return entry.signature || []
}

function familiarTalentNote(name) {
  const perFam = talentSystem.value.per_familiar_talents
  if (!perFam) return null
  const entry = perFam[name]
  return entry?.note || null
}

function specialTalent(name) {
  const perFam = talentSystem.value.per_familiar_talents
  if (!perFam) return null
  return perFam[name]?.special_talent || null
}

// ---------------------------------------------------------------------------
// Ratings helper
// ---------------------------------------------------------------------------
function ratingEntries(fam) {
  if (!fam.ratings) return []
  return [
    { label: 'PvE', value: fam.ratings.pve },
    { label: 'PvP', value: fam.ratings.pvp },
    { label: 'Boss', value: fam.ratings.boss },
  ].filter(r => r.value)
}

function ratingValueShort(val) {
  if (!val) return '?'
  // "B+ (AllClash generico) / S+ (pratico com Attack Aura)" → take the best practical
  if (val.includes('/')) {
    const parts = val.split('/')
    const last = parts[parts.length - 1].trim()
    const m = last.match(/([A-Z][+-]?\+?)/)
    return m ? m[1] : val.slice(0, 3)
  }
  const m = val.match(/([A-Z][+-]?\+?)/)
  return m ? m[1] : val.slice(0, 3)
}
</script>

<template>
  <!-- Loading state while deferred data loads -->
  <div v-if="!deferredReady" class="flex items-center justify-center min-h-[60vh]">
    <div class="text-sm text-text-dim animate-pulse">Carregando familiars...</div>
  </div>

  <div v-else class="pb-24 md:pb-8">
    <!-- Page Header -->
    <header class="text-center mb-5">
      <h1 class="font-display text-[1.35rem] font-bold text-gold tracking-wide">FAMILIARS</h1>
      <p class="text-[0.75rem] text-text-dim mt-1">Pets de combate — 1 por time. Progresso permanente entre seasons.</p>
    </header>

    <!-- Core Talents Banner -->
    <section class="bg-bg-card border border-border rounded-xl p-4 mb-5">
      <h2 class="font-display text-[0.82rem] font-bold text-gold mb-1 flex items-center gap-2">
        <span>♥</span> Core Talents — Obrigatórios em TODO familiar
      </h2>
      <p class="text-[0.7rem] text-text-dim mb-3 leading-relaxed">
        Base de sobrevivência. Priorizar em qualquer familiar antes de otimizar.
      </p>

      <div class="flex flex-wrap gap-2">
        <!-- Draining Recovery -->
        <div class="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-bg-elevated border border-amber-500/30 border-l-[3px] border-l-amber-500 flex-1 min-w-[160px]">
          <div class="w-7 h-7 rounded-md bg-amber-500 text-black flex items-center justify-center text-sm font-bold shrink-0">♥</div>
          <div class="flex-1 min-w-0">
            <div class="text-[0.76rem] font-semibold">Draining Recovery</div>
            <div class="text-[0.6rem] text-text-dim">Sustain / recuperação</div>
          </div>
          <span class="text-[0.55rem] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-black tracking-wide">CORE</span>
        </div>

        <!-- Healing Boost -->
        <div class="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-bg-elevated border border-amber-500/30 border-l-[3px] border-l-amber-500 flex-1 min-w-[160px]">
          <div class="w-7 h-7 rounded-md bg-amber-500 text-black flex items-center justify-center text-sm font-bold shrink-0">♥</div>
          <div class="flex-1 min-w-0">
            <div class="text-[0.76rem] font-semibold">Healing Boost</div>
            <div class="text-[0.6rem] text-text-dim">Amplifica cura recebida</div>
          </div>
          <span class="text-[0.55rem] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-black tracking-wide">CORE</span>
        </div>

        <!-- Accuracy Boost -->
        <div class="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-bg-elevated border border-border-hover/60 border-l-[3px] border-l-text-muted flex-1 min-w-[160px]">
          <div class="w-7 h-7 rounded-md bg-bg-hover text-text-dim flex items-center justify-center text-sm font-bold shrink-0">◆</div>
          <div class="flex-1 min-w-0">
            <div class="text-[0.76rem] font-semibold">Accuracy Boost</div>
            <div class="text-[0.6rem] text-text-dim">Garante acerto de habilidades</div>
          </div>
          <span class="text-[0.55rem] font-bold px-1.5 py-0.5 rounded bg-bg-hover text-text-dim tracking-wide">4º</span>
        </div>
      </div>
    </section>

    <!-- Section: Catalog -->
    <h2 class="font-display text-[0.88rem] font-bold text-gold mb-3 pb-1.5 border-b border-border">
      Catálogo de Familiars
    </h2>

    <!-- Familiar Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
      <div
        v-for="fam in catalog"
        :key="fam.name"
        class="bg-bg-card border border-border rounded-xl overflow-hidden hover:border-border-hover transition-colors"
      >
        <!-- Card Header -->
        <div class="flex items-center gap-3 px-3.5 pt-3 pb-2">
          <!-- Avatar -->
          <img
            v-if="familiarImg(fam.name)"
            :src="familiarImg(fam.name)"
            :alt="fam.name"
            class="w-[60px] h-[60px] rounded-[10px] object-cover bg-bg-elevated border-2 border-border shrink-0"
          >
          <div
            v-else
            class="w-[60px] h-[60px] rounded-[10px] bg-gradient-to-br from-bg-elevated to-bg-hover border-2 border-dashed border-border-hover flex items-center justify-center text-2xl shrink-0"
          >{{ placeholderEmoji[fam.name] || '?' }}</div>

          <!-- Name + Role -->
          <div class="flex-1 min-w-0">
            <div class="font-display text-[0.9rem] font-bold truncate">{{ fam.name }}</div>
            <div class="text-[0.67rem] text-text-dim mt-0.5">{{ fam.role }}</div>
          </div>

          <!-- Tier Badge -->
          <span
            class="font-display text-[0.68rem] font-bold px-2 py-1 rounded shrink-0"
            :class="tierClass(fam.tier)"
          >{{ tierLabel(fam.tier) }}</span>
        </div>

        <!-- Card Body -->
        <div class="px-3.5 pb-3.5">
          <!-- Ratings -->
          <div class="flex gap-1.5 mb-2.5">
            <span
              v-for="r in ratingEntries(fam)"
              :key="r.label"
              class="text-[0.6rem] font-semibold px-2 py-1 rounded bg-bg-elevated border border-border text-text-dim"
            >
              {{ r.label }} <span class="text-text-primary font-bold">{{ ratingValueShort(r.value) }}</span>
            </span>
          </div>

          <!-- Signature Talents -->
          <template v-if="signatureTalents(fam.name).length">
            <div class="text-[0.6rem] font-semibold text-el-lightning uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <span>★</span> Signature Talents
            </div>
            <div class="flex flex-col gap-1">
              <div
                v-for="talent in signatureTalents(fam.name)"
                :key="talent"
                class="flex items-center gap-2 text-[0.72rem] px-2 py-1.5 rounded-md bg-bg-elevated border border-el-lightning/20 border-l-[3px] border-l-el-lightning"
              >
                <span class="w-[18px] h-[18px] rounded bg-el-lightning text-white flex items-center justify-center text-[0.63rem] shrink-0">★</span>
                <span class="text-text-primary">{{ talent }}</span>
              </div>
            </div>
          </template>

          <!-- Special talent (e.g. Flapping Wings for Mimic) -->
          <div
            v-if="specialTalent(fam.name)"
            class="flex items-center gap-2 text-[0.72rem] px-2 py-1.5 mt-1 rounded-md bg-bg-elevated border border-gold-dim/30 border-l-[3px] border-l-gold-dim"
          >
            <span class="w-[18px] h-[18px] rounded bg-gold-dim text-black flex items-center justify-center text-[0.63rem] shrink-0">⚡</span>
            <span class="text-text-primary">{{ specialTalent(fam.name).name }}</span>
            <span class="text-[0.6rem] text-text-dim ml-auto">{{ specialTalent(fam.name).effect?.split('.')[0] }}</span>
          </div>

          <!-- Fallback for familiars without talent data -->
          <div
            v-if="!signatureTalents(fam.name).length"
            class="flex items-center gap-2 text-[0.72rem] px-2 py-1.5 rounded-md bg-bg-elevated border border-border"
          >
            <span class="w-[18px] h-[18px] rounded bg-bg-hover text-text-muted flex items-center justify-center text-[0.63rem] shrink-0">?</span>
            <span class="text-text-dim italic">Dados de talents pendentes</span>
          </div>

          <!-- Context Note -->
          <div
            v-if="fam.key_mechanic || fam.requirements"
            class="mt-2 text-[0.64rem] text-text-dim px-2 py-1.5 bg-gold/[0.04] border border-gold/[0.12] rounded-md leading-relaxed"
          >
            <span v-if="fam.requirements" class="text-gold font-semibold">{{ fam.requirements.split('.')[0] }}.</span>
            <span v-else-if="fam.key_mechanic">{{ fam.key_mechanic.split('.')[0] }}.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Investment Priority -->
    <h2 class="font-display text-[0.88rem] font-bold text-gold mb-3 pb-1.5 border-b border-border">
      Prioridade de Investimento
    </h2>

    <div class="flex flex-col gap-1.5 mb-6">
      <div
        v-for="(item, i) in investmentPriority"
        :key="i"
        class="flex items-center gap-3 px-3 py-2.5 bg-bg-card border border-border rounded-lg text-[0.75rem]"
      >
        <span class="w-6 h-6 rounded-full bg-gold text-bg-deep font-display font-bold text-[0.68rem] flex items-center justify-center shrink-0">
          {{ i + 1 }}
        </span>
        <span class="text-text-primary">{{ item.replace(/^\d+\.\s*/, '') }}</span>
      </div>
    </div>
  </div>
</template>
