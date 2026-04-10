# Dragon Heir — Memory

## User
- [Henry spending level](user_spending.md) — medium spender, NÃO F2P

## Project Setup
- **Tipo:** Sub-projeto do Nexus (portal pessoal do Henry)
- **Local:** `E:\OneDrive\Games\Dragon Heir` (OneDrive, sincronizado)
- **URL:** https://nexus.henryavila.com/dh
- **Deploy:** `npm run build` → Vite gera `dist/`, `nexus push` copia para `/dh`
- **Git:** `henryavila/dragonheri-companion-kb` — commits frequentes, Conventional Commits

## Estrutura do Projeto (Abr/2026)
```
src/               — Vue 3 (web app)
public/data/       — Fonte ÚNICA de dados (KB + web runtime, 19 arquivos)
raw-data/          — Exports brutos do jogo
docs/              — Documentação e guias
scripts/           — Utilitários
.ai/memory/        — Memória AI
```

## Web App — Vue 3
- [Vue Rewrite Status](project-vue-rewrite.md) — Completo, todas páginas portadas
- **Stack:** Vue 3 + Vite + Tailwind CSS v4 + Vue Router (hash mode)
- **Estética:** Dark Fantasy Codex — Cinzel (display) + DM Sans (body), bg #06060c, gold #c9a24e
- **Layout:** Mobile-first. Bottom nav mobile, sidebar desktop. Landing = Times
- **Páginas (5):** Times, Herois, Gear, Artefatos, Tier List

## Data Architecture
- **CRITICO:** Dados em `public/data/*.js` (window globals) — atualização sem rebuild
- **Fluxo:** Claude atualiza `public/data/X.js` → `nexus push` → site atualizado
- **SEM duplicação:** `public/data/` é a fonte única (app/ foi eliminado)

## Artifact System
- [Detalhes](reference-artifact-data.md) — tj_sq → equip_map → artifact catalog
- 290/316 heróis com artefatos recomendados (dragonheir.info)
- Imagens CDN: `iconPath` no raw equip data tem URLs completas

## Feedback Crítico
- [Wish List Priority Rule](feedback-wishlist-priority.md) — Herói sem outra fonte > herói com rating alto
- [Affinity activation rule](feedback-affinity-activation.md) — NUNCA assumir que precisa dos 2 elementos
- [Rewrite: filtros exclusivos](feedback-vue-rewrite.md) — Todos os filtros devem ser exclusivos
- [Screenshot rule](feedback-screenshot-reading.md) — SEMPRE salvar em `screenshots/`

## Game Data (S6)
- **Season:** S6 — Hymn of Chess & Blade (Abr/2026)
- **Afinidades S6:** Devitalization (Ice+Poison), Incandescence (Fire+Radiance), Vertigo (Lightning+Necrosis)
- **Schools:** Aura, Burn, Corrosion, Dauntless, Frost, Ice Blast, Poison, Rally, Shadow, Summon, Support, Thunderbolt, Toxin, Wild

## Team Building
- [Detalhes](team-building.md) — Skills PRIMEIRO, ratings DEPOIS
- Eurion+Torrin = módulo universal de survival

## Wager Mode
- **File:** `public/data/bets.js` — 12 learnings, 6 archetypes, 12 factors

## Tier List Sources
- [URLs e status](reference-tier-list-urls.md) — DI é a única fonte completa para S2-S6
