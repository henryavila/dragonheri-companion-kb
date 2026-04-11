# Familiars Page — Design Spec

**Data:** 2026-04-11
**Status:** Aprovado

## Objetivo

Nova página `/familiars` no site Dragon Heir Companion mostrando o catálogo completo de familiars com foto, tier, ratings por game mode, signature talents únicos, e prioridade de investimento.

## Estrutura da Página

### 1. Header
- Título "FAMILIARS" (font Cinzel, gold)
- Subtítulo: "Pets de combate — 1 por time. Progresso permanente entre seasons."

### 2. Core Talents Banner (fixo no topo)
Banner explicando os 3 talents universais obrigatórios em TODO familiar:
- **Draining Recovery** — CORE — sustain/recuperação
- **Healing Boost** — CORE — amplifica cura recebida
- **Accuracy Boost** — 4º SLOT — garante acerto de habilidades

Justificativa: estes talents se repetem em todos os familiars, então ficam separados para evitar repetição nos cards.

### 3. Catálogo de Familiars (Card Grid)
Grid responsivo (2-3 colunas desktop, 1 coluna mobile) com cards para cada familiar.

**Cada card contém:**
- Avatar/foto do familiar (64x60px, border-radius 10px)
- Nome (Cinzel bold) + role (DM Sans, text-dim)
- Tier badge (S/A/B+ com cores: S=amber, A=blue, B=slate)
- Ratings row: PvE / PvP / Boss em pills compactos
- **Signature Talents** (somente os únicos daquele familiar, NÃO os core universais)
- Nota contextual com informação mais importante (ex: "Mythic obrigatório", "Default 5/6 bosses")

**Familiars incluídos (10):**

| Familiar | Tier | Imagem | Signature Talents |
|---|---|---|---|
| Rollbot | S | AllClash Screenshot-919 | Mechanical Defense, Mechanical Damage Bonus |
| Tressym | S★ | AllClash Screenshot-913 | Tressym Strike |
| Mimic | A | AllClash Screenshot-920 | Smite Chest, Calamity Chest |
| Stoneborn | A | AllClash Screenshot-918 | Golems Defense |
| Saberwinger | A | AllClash Screenshot-912 | Flapping Wings |
| Vulture | B+ | AllClash Screenshot-914 | Vultures Majesty |
| Master Genie | S+ | Placeholder (emoji 🧞) | Pendente |
| Thalarin | B+ | AllClash Screenshot-917 | Pendente |
| Foliage Spiker | B | AllClash Screenshot-915 | Pendente |
| Batwing | ? | Placeholder (emoji 🦇) | Pendente |

### 4. Prioridade de Investimento
Lista ordenada 1-5 com avatar circular numerado (gold) e texto descritivo:
1. Rollbot — melhor all-rounder
2. Tressym — default bosses com Attack Aura
3. Mimic — Bionphray + PvP (precisa Mythic)
4. Master Genie — grátis evento HOMM3
5. Stoneborn — alternativa boss sem Attack Aura

## Dados

Fonte: `public/data/mechanics.js` → seção `familiars` (já populada com catálogo completo, talent system, synergies, ratings).

Acesso via `D.mechanics().familiars`.

### Imagens de Familiars
Sem CDN do jogo disponível para familiars (diferente de heróis). Imagens hospedadas no AllClash (wp-content). Para produção, salvar localmente em `public/img/familiars/` para não depender de CDN externo.

## Integração no Site

### Router (`src/router.js`)
- Nova rota: `{ path: '/familiars', name: 'familiars', component: familiarsLoader, meta: { label: 'Familiars', icon: '🐾' } }`
- Lazy-loaded como as outras páginas secundárias

### Navegação
- **Sidebar** (`Sidebar.vue`): aparece automaticamente via `routes.filter(r => r.meta?.label)`
- **Bottom Nav** (`BottomNav.vue`): adicionar no array `moreItems` (submenu "Mais")

### Novo arquivo
- `src/views/FamiliarsView.vue` — componente Vue 3 com script setup

## Design System

Segue o design existente (Dark Fantasy Codex):
- Fonts: Cinzel (display), DM Sans (body)
- Colors: bg-card #12121e, gold #c9a24e, border #1e1e30
- Tier colors: S=amber-500, A=blue-500, B+=slate-500
- Signature talent: el-lightning (#a87ce8) com borda esquerda
- Core talent: tier-s (#f59e0b)
- Cards: bg-card, border, border-radius 12px, hover border-hover

## Fora de Escopo
- Sistema de Fusion/Merge (mecânicas internas)
- Synergies detalhadas (já documentadas em mechanics.js, não na UI)
- Imagens in-game (usar AllClash ou placeholder)
