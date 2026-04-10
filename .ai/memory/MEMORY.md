# Dragon Heir — Memory

## User
- [Henry spending level](user_spending.md) — medium spender, NÃO F2P

## Project Setup
- **Tipo:** Sub-projeto do Nexus (portal pessoal do Henry)
- **Local:** `E:\OneDrive\Games\Dragon Heir` (OneDrive, sincronizado)
- **URL:** https://nexus.henryavila.com/dh
- **Deploy:** `nexus push` → roda `npm run build`, copia `dist/` para `/dh`
- **Sem git.** Versionamento é via OneDrive. Nexus gerencia o ciclo de vida.

## Web App — Vue 3 Rewrite (Abr/2026)
- [Vue Rewrite Status](project-vue-rewrite.md) — Fase 1+2 completas, todas páginas portadas
- **Stack:** Vue 3 + Vite + Tailwind CSS v4 + Vue Router (hash mode)
- **Fonte:** `src/` (código Vue), `public/data/` (dados runtime, NÃO bundled)
- **Build:** `npm run build` → `dist/`. Dados em `public/data/` NÃO precisam rebuild
- **Estética:** Dark Fantasy Codex — Cinzel (display) + DM Sans (body), bg #06060c, gold #c9a24e
- **Layout:** Mobile-first. Bottom nav mobile, sidebar desktop. Landing page = Times
- **Páginas (5):** Times (landing), Herois, Gear, Artefatos, Tier List
- **Removidas:** Dashboard (substituído por Times como landing), Builds (talent info movido para herói), Decisions

## Data Architecture
- **CRITICO:** Dados em `public/data/*.js` (window globals) — atualização sem rebuild
- **Fluxo:** Claude atualiza `public/data/X.js` → `nexus push` → site atualizado (sem `npm run build`)
- **Também manter sincronizado:** `app/data/*.js` (backup/fonte original)

| Arquivo | Conteúdo |
|---|---|
| `public/data/heroes.js` | 316 heróis (skills, ratings 9 atividades, tf talent picks S6) |
| `public/data/tiers.js` | 254 heróis com ratings por atividade |
| `public/data/my-roster.js` | 184 heróis do Henry |
| `public/data/profile.js` | Perfil (184 heróis, 62 legendários) |
| `public/data/activities.js` | 12 atividades com times (comunidade + custom + testados S1) |
| `public/data/artifacts.js` | 36 artefatos owned + BiS |
| `public/data/artifacts-all.json` | 126 artefatos (catálogo completo) |
| `public/data/mechanics.js` | Mecânicas do jogo |
| `public/data/gear.js` | Gear plans (loadouts) + perfis de stats |
| `public/data/builds.js` | Builds legado (talent info antigo S1) |

## Feedback Crítico
- [Wish List Priority Rule](feedback-wishlist-priority.md) — Herói sem outra fonte > herói com rating alto
- [Affinity activation rule](feedback-affinity-activation.md) — NUNCA assumir que precisa dos 2 elementos
- [Rewrite: filtros exclusivos](feedback-vue-rewrite.md) — Todos os filtros devem ser exclusivos (1 ativo por vez)

## Game Data (S6)
- **Season:** S6 — Hymn of Chess & Blade (Abr/2026)
- **Afinidades S6:** Devitalization (Ice+Poison), Incandescence (Fire+Radiance), Vertigo (Lightning+Necrosis)
- **Talentos S6:** Picks individuais de qualquer lane (não mais lane fixa). Campo `tf` em heroes.js (3×4 grid)
- **Schools:** Aura, Burn, Corrosion, Dauntless, Frost, Ice Blast, Poison, Rally, Shadow, Summon, Support, Thunderbolt, Toxin, Wild

## Team Building
- [Detalhes em team-building.md](team-building.md)
- Skills PRIMEIRO, ratings DEPOIS
- Eurion+Torrin = módulo universal de survival

## Screenshots
- **SEMPRE salvar em `screenshots/`** — NUNCA na raiz do projeto

## Wager Mode
- **File:** `app/data/bets.js` — 12 learnings, 6 archetypes
- **12 factors** com pesos atualizados

## Tier List Sources
- [URLs e status](reference-tier-list-urls.md) — DI é a única fonte completa para S2-S6
