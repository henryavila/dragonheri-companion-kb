<script setup>
import { routes } from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()
const navItems = routes.filter(r => r.meta?.label)
</script>

<template>
  <aside class="hidden md:flex flex-col w-[220px] fixed top-0 left-0 bottom-0 bg-bg-surface border-r border-border z-50">
    <div class="px-5 pt-5 pb-4 border-b border-border flex items-center gap-3">
      <img :src="'./icon-dragon-minimal.png'" alt="Dragon Heir" class="w-9 h-9 rounded-lg" />
      <div>
        <h1 class="font-display text-[1.05rem] font-bold text-gold tracking-wide leading-tight">DRAGON HEIR</h1>
        <div class="text-[0.6rem] text-text-muted tracking-[0.15em] uppercase">Companion</div>
      </div>
    </div>

    <nav class="flex-1 p-2 flex flex-col gap-0.5">
      <RouterLink
        v-for="r in navItems" :key="r.name"
        :to="r.path"
        class="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[0.82rem] font-medium transition-all border border-transparent"
        :class="route.name === r.name
          ? 'bg-gradient-to-r from-gold/8 to-gold/3 text-gold border-gold/15'
          : 'text-text-dim hover:bg-bg-hover hover:text-text-primary'"
      >
        <span class="w-[22px] text-center text-base">{{ r.meta.icon }}</span>
        {{ r.meta.label }}
      </RouterLink>
    </nav>

    <div class="px-3.5 py-4 border-t border-border flex items-center gap-2.5">
      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gold-dim to-gold flex items-center justify-center font-display text-[0.65rem] font-bold text-bg-deep">SY</div>
      <div>
        <div class="text-[0.72rem] font-semibold">SuperYennefer</div>
        <div class="text-[0.6rem] text-text-muted">139-Darkfire</div>
      </div>
    </div>
  </aside>
</template>
