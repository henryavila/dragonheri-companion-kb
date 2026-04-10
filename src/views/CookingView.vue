<script setup>
import { ref, computed } from 'vue'

const cooking = computed(() => window.DATA_COOKING || {})
const tab = ref('shopping') // 'shopping' | 'activity' | 'recipes'

// --- Helpers ---
const imgUrl = (id) => {
  const c = cooking.value
  const code = c.images?.[id]
  return code ? `${c.img_base}${code}.png` : null
}

const allRecipes = computed(() => [
  ...(cooking.value.legendary || []).map(r => ({ ...r, tier: 'Legendary' })),
  ...(cooking.value.epic || []).map(r => ({ ...r, tier: 'Epic' }))
])

const recipeById = computed(() => {
  const map = {}
  for (const r of allRecipes.value) map[r.id] = r
  return map
})

const ingredient = (name) => cooking.value.ingredients?.[name] || {}

// --- Filters for recipe tab ---
const recipeFilter = ref('all') // 'all' | 'legendary-atk' | 'legendary-def' | 'epic'
const elementFilter = ref(null)
const elements = ['Fire', 'Ice', 'Lightning', 'Poison', 'Necrotic', 'Radiant']

const filteredRecipes = computed(() => {
  let list = allRecipes.value
  if (recipeFilter.value === 'legendary-atk') list = list.filter(r => r.tier === 'Legendary' && r.type === 'atk')
  else if (recipeFilter.value === 'legendary-def') list = list.filter(r => r.tier === 'Legendary' && r.type === 'def')
  else if (recipeFilter.value === 'epic') list = list.filter(r => r.tier === 'Epic')
  if (elementFilter.value) list = list.filter(r => r.element === elementFilter.value)
  return list
})

// --- Element color maps ---
const elText = { Fire: 'text-el-fire', Ice: 'text-el-ice', Lightning: 'text-el-lightning', Poison: 'text-el-poison', Necrotic: 'text-el-necrosis', Radiant: 'text-el-radiance' }
const elBg = { Fire: 'bg-el-fire/15', Ice: 'bg-el-ice/15', Lightning: 'bg-el-lightning/15', Poison: 'bg-el-poison/15', Necrotic: 'bg-el-necrosis/15', Radiant: 'bg-el-radiance/15' }
const elBorder = { Fire: 'border-el-fire/30', Ice: 'border-el-ice/30', Lightning: 'border-el-lightning/30', Poison: 'border-el-poison/30', Necrotic: 'border-el-necrosis/30', Radiant: 'border-el-radiance/30' }

// --- Detail modal ---
const selectedRecipe = ref(null)
</script>

<template>
  <div>
    <header class="mb-5">
      <h1 class="font-display text-xl md:text-2xl font-bold">Cooking</h1>
      <p class="text-sm text-text-dim mt-1">Recipes, ingredientes e onde comprar</p>
    </header>

    <!-- Tab bar -->
    <div class="flex gap-1.5 mb-4 overflow-x-auto pb-1">
      <button
        v-for="t in [{key:'shopping',label:'Onde Comprar',icon:'🛒'},{key:'activity',label:'Por Atividade',icon:'⚔'},{key:'recipes',label:'Recipes',icon:'🍖'}]"
        :key="t.key"
        class="shrink-0 px-3 py-1.5 rounded-full text-[0.72rem] font-semibold border transition-colors"
        :class="tab === t.key ? 'bg-gold/20 border-gold/60 text-gold-300' : 'border-border text-text-dim hover:text-text-primary'"
        @click="tab = t.key"
      >{{ t.icon }} {{ t.label }}</button>
    </div>

    <!-- ==================== TAB: ONDE COMPRAR ==================== -->
    <div v-if="tab === 'shopping'">
      <!-- Golden rule -->
      <div class="bg-gold/5 border border-gold-dim rounded-lg px-3 py-2.5 mb-4">
        <div class="text-[0.65rem] font-semibold text-gold uppercase tracking-wider mb-1">Regra de Ouro</div>
        <div class="text-[0.78rem] text-text-dim leading-relaxed">{{ cooking.golden_rule }}</div>
      </div>

      <!-- Shopping Route -->
      <h2 class="font-display text-base font-semibold text-gold mb-3">Rota de Compras</h2>
      <div class="space-y-2 mb-6">
        <div
          v-for="stop in cooking.shopping_route" :key="stop.stop"
          class="bg-bg-card border border-border rounded-xl px-3 py-3"
        >
          <div class="flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 text-gold font-bold text-sm">{{ stop.stop }}</div>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold text-gold-bright">{{ stop.location }}</div>
              <div class="text-[0.68rem] text-text-muted mt-0.5 italic">{{ stop.note }}</div>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span
                  v-for="item in stop.buy" :key="item"
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] font-medium border"
                  :class="ingredient(item).element
                    ? `${elBg[ingredient(item).element]} ${elBorder[ingredient(item).element]} ${elText[ingredient(item).element]}`
                    : 'bg-bg-elevated border-border text-text-primary'"
                >
                  {{ item }}
                  <span class="text-text-muted">{{ ingredient(item).cost }}g</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stock Priority -->
      <h2 class="font-display text-base font-semibold text-gold mb-3">Top 5 para Estocar</h2>
      <div class="space-y-2">
        <div
          v-for="sp in cooking.stock_priority" :key="sp.rank"
          class="bg-bg-card border rounded-xl px-3 py-2.5 cursor-pointer transition-all hover:border-border-hover active:scale-[0.98]"
          :class="recipeById[sp.food_id]?.element ? elBorder[recipeById[sp.food_id].element] : 'border-border'"
          @click="selectedRecipe = recipeById[sp.food_id]"
        >
          <div class="flex items-start gap-3">
            <img
              v-if="imgUrl(sp.food_id)"
              :src="imgUrl(sp.food_id)"
              :alt="recipeById[sp.food_id]?.name"
              class="w-11 h-11 rounded-lg border border-border object-cover shrink-0"
              loading="lazy"
              @error="$event.target.style.display = 'none'"
            />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-[0.6rem] font-bold px-1.5 py-0.5 rounded bg-gold/20 text-gold shrink-0">#{{ sp.rank }}</span>
                <span class="text-sm font-semibold" :class="elText[recipeById[sp.food_id]?.element] || 'text-text-primary'">{{ recipeById[sp.food_id]?.name }}</span>
              </div>
              <div class="text-[0.68rem] text-text-dim mt-0.5">{{ recipeById[sp.food_id]?.effect }}</div>
              <div class="text-[0.65rem] text-text-muted mt-1">{{ sp.covers.join(', ') }}</div>
              <!-- Where to buy - THE KEY INFO -->
              <div class="mt-2 space-y-1">
                <div
                  v-for="s in sp.shopping" :key="s.ingredient"
                  class="flex items-center gap-1.5 text-[0.68rem]"
                >
                  <span class="text-accent-green font-medium">{{ s.merchant }}</span>
                  <span class="text-text-muted">→</span>
                  <span class="text-text-primary">{{ s.ingredient }} x{{ s.qty }}</span>
                  <span class="text-text-muted">({{ s.cost }}g)</span>
                </div>
              </div>
              <div class="text-[0.6rem] text-gold-dim mt-1 font-medium">Total: {{ sp.cost_per_cook }}g por cook</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== TAB: POR ATIVIDADE ==================== -->
    <div v-if="tab === 'activity'">
      <div class="space-y-2">
        <div
          v-for="fa in cooking.food_by_activity" :key="fa.activity"
          class="bg-bg-card border rounded-xl px-3 py-2.5 cursor-pointer transition-all hover:border-border-hover active:scale-[0.98]"
          :class="elBorder[fa.team_element] || elBorder[recipeById[fa.food_id]?.element] || 'border-border'"
          @click="selectedRecipe = recipeById[fa.food_id]"
        >
          <div class="flex items-start gap-3">
            <img
              v-if="imgUrl(fa.food_id)"
              :src="imgUrl(fa.food_id)"
              :alt="recipeById[fa.food_id]?.name"
              class="w-11 h-11 rounded-lg border border-border object-cover shrink-0"
              loading="lazy"
              @error="$event.target.style.display = 'none'"
            />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-sm font-semibold text-text-primary">{{ fa.activity }}</span>
                <span
                  v-if="fa.affinity !== 'varies'"
                  class="px-1.5 py-0.5 rounded text-[0.55rem] font-bold uppercase"
                  :class="`${elBg[fa.team_element]} ${elText[fa.team_element]}`"
                >{{ fa.affinity }}</span>
              </div>
              <div class="flex items-center gap-1.5 mt-1">
                <span class="text-[0.72rem] font-medium" :class="elText[recipeById[fa.food_id]?.element] || 'text-gold'">{{ recipeById[fa.food_id]?.name }}</span>
                <span class="text-[0.65rem] text-text-muted">— {{ recipeById[fa.food_id]?.effect }}</span>
              </div>
              <div class="text-[0.65rem] text-text-muted mt-0.5 italic">{{ fa.reason }}</div>
              <!-- Ingredients + where to buy -->
              <div class="mt-2 flex flex-wrap gap-1">
                <span
                  v-for="ing in recipeById[fa.food_id]?.ingredients" :key="ing.name"
                  class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[0.6rem] bg-bg-elevated border border-border"
                >
                  <span class="text-text-primary">{{ ing.name }} x{{ ing.qty }}</span>
                  <span class="text-accent-green">{{ ingredient(ing.name).merchant?.split(' — ')[0] || '?' }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== TAB: RECIPES ==================== -->
    <div v-if="tab === 'recipes'">
      <!-- Filters -->
      <div class="mb-4 space-y-2">
        <div class="flex items-center gap-1.5 flex-wrap">
          <button
            v-for="f in [{key:'all',label:'Todos'},{key:'legendary-atk',label:'Leg ATK'},{key:'legendary-def',label:'Leg DEF'},{key:'epic',label:'Epic'}]"
            :key="f.key"
            class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
            :class="recipeFilter === f.key ? 'bg-gold/20 border-gold/60 text-gold-300' : 'border-border text-text-dim hover:text-text-primary'"
            @click="recipeFilter = f.key"
          >{{ f.label }}</button>
        </div>
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="text-[0.6rem] text-text-muted uppercase tracking-wider font-semibold mr-0.5 shrink-0">Elem</span>
          <button
            v-for="el in elements" :key="el"
            class="shrink-0 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border transition-colors"
            :class="elementFilter === el
              ? `${elBg[el]} ${elBorder[el]} ${elText[el]}`
              : `border-border ${elText[el]} hover:brightness-125`"
            @click="elementFilter = elementFilter === el ? null : el"
          >{{ el }}</button>
        </div>
      </div>

      <div class="text-[0.68rem] text-text-muted mb-3">{{ filteredRecipes.length }} recipe{{ filteredRecipes.length !== 1 ? 's' : '' }}</div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        <div
          v-for="r in filteredRecipes" :key="r.id"
          class="bg-bg-card border rounded-xl px-3 py-2.5 cursor-pointer transition-all hover:border-border-hover active:scale-[0.98]"
          :class="r.element ? elBorder[r.element] : 'border-border'"
          @click="selectedRecipe = r"
        >
          <div class="flex items-start gap-3">
            <img
              v-if="imgUrl(r.id)"
              :src="imgUrl(r.id)"
              :alt="r.name"
              class="w-11 h-11 rounded-lg border border-border object-cover shrink-0 mt-0.5"
              loading="lazy"
              @error="$event.target.style.display = 'none'"
            />
            <div v-else class="w-11 h-11 rounded-lg border border-border bg-bg-elevated shrink-0 mt-0.5 flex items-center justify-center text-text-muted text-[0.5rem]">?</div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-sm font-semibold" :class="elText[r.element] || 'text-text-primary'">{{ r.name }}</span>
                <span
                  v-if="r.tier === 'Legendary'"
                  class="px-1.5 py-px rounded text-[0.5rem] font-bold bg-gold/15 text-gold"
                >LEG {{ r.type?.toUpperCase() }}</span>
                <span
                  v-else
                  class="px-1.5 py-px rounded text-[0.5rem] font-bold bg-el-lightning/15 text-el-lightning"
                >EPIC</span>
              </div>
              <div class="text-[0.68rem] text-gold-dim font-medium mt-0.5">{{ r.effect }}</div>
              <div class="mt-1.5 flex flex-wrap gap-1">
                <span
                  v-for="ing in r.ingredients" :key="ing.name"
                  class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[0.6rem] bg-bg-elevated border border-border"
                >
                  <span class="text-text-primary">{{ ing.name }} x{{ ing.qty }}</span>
                  <span class="text-accent-green text-[0.55rem]">{{ ingredient(ing.name).merchant?.split(' — ')[0] || '' }}</span>
                </span>
              </div>
              <div class="text-[0.6rem] text-text-muted mt-1">{{ r.cost_total }}g</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!filteredRecipes.length" class="text-center py-12">
        <p class="text-sm text-text-muted">Nenhum recipe encontrado.</p>
      </div>
    </div>

    <!-- ==================== DETAIL MODAL ==================== -->
    <Teleport to="body">
      <div v-if="selectedRecipe" class="fixed inset-0 z-50 bg-black/90 md:flex md:items-start md:justify-center md:p-8 overflow-y-auto" @click.self="selectedRecipe = null">
        <div class="bg-bg-surface min-h-dvh md:min-h-0 md:max-w-[520px] w-full md:rounded-2xl md:border md:border-border md:overflow-y-auto">
          <!-- Header -->
          <div class="sticky top-0 z-10 bg-bg-surface border-b border-border px-4 py-3 flex items-center gap-3 md:rounded-t-2xl">
            <button class="w-9 h-9 rounded-full border border-border bg-bg-card text-text-dim flex items-center justify-center shrink-0 active:scale-90" @click="selectedRecipe = null">&#8592;</button>
            <span class="font-display text-sm font-semibold truncate">{{ selectedRecipe.name }}</span>
          </div>

          <div class="p-4 space-y-4">
            <!-- Identity -->
            <div class="flex items-start gap-4">
              <img
                v-if="imgUrl(selectedRecipe.id)"
                :src="imgUrl(selectedRecipe.id)"
                :alt="selectedRecipe.name"
                class="w-16 h-16 rounded-xl border border-border object-cover shrink-0"
                loading="lazy"
              />
              <div v-else class="w-16 h-16 rounded-xl border border-border bg-bg-elevated shrink-0 flex items-center justify-center text-text-muted">?</div>

              <div class="pt-1 min-w-0">
                <h2 class="font-display text-lg font-bold" :class="elText[selectedRecipe.element] || 'text-text-primary'">{{ selectedRecipe.name }}</h2>
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <span v-if="selectedRecipe.element" class="px-2 py-0.5 rounded-full text-[0.65rem] font-bold" :class="`${elBg[selectedRecipe.element]} ${elText[selectedRecipe.element]}`">{{ selectedRecipe.element }}</span>
                  <span v-if="selectedRecipe.tier" class="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold border border-border bg-bg-card text-text-dim">{{ selectedRecipe.tier }} {{ selectedRecipe.type?.toUpperCase() || '' }}</span>
                </div>
                <div class="text-sm text-gold font-semibold mt-2">{{ selectedRecipe.effect }}</div>
              </div>
            </div>

            <!-- Ingredients: WHERE TO BUY (main focus) -->
            <div class="bg-bg-card border border-gold-dim rounded-lg p-3">
              <div class="text-[0.65rem] font-semibold text-gold uppercase tracking-wider mb-2">Ingredientes — Onde Comprar</div>
              <div class="space-y-2.5">
                <div v-for="ing in selectedRecipe.ingredients" :key="ing.name" class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold" :class="ingredient(ing.name).element ? `${elBg[ingredient(ing.name).element]} ${elText[ingredient(ing.name).element]}` : 'bg-bg-elevated text-text-primary'">
                    x{{ ing.qty }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-[0.78rem] font-semibold text-text-primary">{{ ing.name }}</div>
                    <div class="text-[0.72rem] text-accent-green font-medium mt-0.5">{{ ingredient(ing.name).merchant || 'Local desconhecido' }}</div>
                    <div class="text-[0.65rem] text-text-muted">{{ ingredient(ing.name).cost }}g cada — {{ ingredient(ing.name).cost * ing.qty }}g total</div>
                    <div v-if="ingredient(ing.name).note" class="text-[0.6rem] text-gold-dim mt-0.5 italic">{{ ingredient(ing.name).note }}</div>
                  </div>
                </div>
              </div>
              <div class="border-t border-border mt-3 pt-2 flex items-center justify-between">
                <span class="text-[0.68rem] text-text-muted">Custo total</span>
                <span class="text-sm font-bold text-gold">{{ selectedRecipe.cost_total }}g</span>
              </div>
            </div>

            <!-- Alt ingredients -->
            <div v-if="selectedRecipe.alt_ingredients?.length" class="bg-bg-card border border-border rounded-lg p-3">
              <div class="text-[0.65rem] font-semibold text-text-muted uppercase tracking-wider mb-2">Ingredientes Alternativos</div>
              <div class="space-y-2">
                <div v-for="(alt, idx) in selectedRecipe.alt_ingredients" :key="idx" class="flex flex-wrap gap-1">
                  <span class="text-[0.6rem] text-text-muted mr-1">Alt {{ idx + 1 }}:</span>
                  <span
                    v-for="a in alt" :key="a.name"
                    class="px-1.5 py-0.5 rounded text-[0.6rem] bg-bg-elevated border border-border text-text-dim"
                  >{{ a.name }} x{{ a.qty }}</span>
                </div>
              </div>
            </div>

            <!-- Activities that use this food -->
            <div v-if="cooking.food_by_activity?.filter(fa => fa.food_id === selectedRecipe.id).length" class="bg-bg-card border border-border rounded-lg p-3">
              <div class="text-[0.65rem] font-semibold text-text-muted uppercase tracking-wider mb-2">Usado em</div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="fa in cooking.food_by_activity.filter(fa => fa.food_id === selectedRecipe.id)" :key="fa.activity"
                  class="px-2 py-0.5 rounded-full text-[0.65rem] font-medium border border-border bg-bg-elevated text-text-primary"
                >{{ fa.activity }}</span>
              </div>
            </div>

            <!-- Use case (epic) -->
            <div v-if="selectedRecipe.use_case" class="bg-bg-card border border-border rounded-lg p-3">
              <div class="text-[0.65rem] font-semibold text-text-muted uppercase tracking-wider mb-1">Quando Usar</div>
              <div class="text-[0.78rem] text-text-dim leading-relaxed">{{ selectedRecipe.use_case }}</div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
