<script setup>
import { D } from '@/data'

const profile = D.profile()
const res = profile.resources || {}
</script>

<template>
  <div>
    <header class="mb-5">
      <h1 class="font-display text-xl md:text-2xl font-bold">Dashboard</h1>
      <p class="text-sm text-text-dim mt-1">Season 6 — Hymn of Chess & Blade</p>
    </header>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-5">
      <div class="bg-bg-card border border-border rounded-xl p-3.5 text-center">
        <div class="font-display text-2xl font-bold text-gold">{{ res.heroes_total || '—' }}</div>
        <div class="text-xs text-text-dim mt-0.5">Herois</div>
      </div>
      <div class="bg-bg-card border border-border rounded-xl p-3.5 text-center">
        <div class="font-display text-2xl font-bold text-gold">{{ res.legendaries || '—' }}</div>
        <div class="text-xs text-text-dim mt-0.5">Legendarios</div>
      </div>
    </div>
  </div>
</template>
