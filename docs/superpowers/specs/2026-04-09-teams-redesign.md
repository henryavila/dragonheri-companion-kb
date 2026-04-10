# Dragon Heir Companion — Full Rewrite Spec

## Objetivo

Rewrite completo do companion app Dragon Heir usando Vue 3 + Vite + Tailwind CSS.
App mobile-first com sidebar desktop e bottom nav mobile.
Foco principal: novo sistema de Times por Atividade.

## Stack

| Tech | Uso |
|------|-----|
| Vue 3 (Composition API) | Framework UI |
| Vite | Build tool |
| Tailwind CSS v4 | Styling (via @tailwindcss/vite) |
| Vue Router | Hash-based routing |
| Cinzel + DM Sans | Fonts (Google Fonts) |

## Decisoes de Design

| Decisao | Escolha |
|---------|---------|
| Framework | Vue 3 + Vite (rewrite completo) |
| Estrutura de dados Teams | Activity-first (`DATA_ACTIVITIES`) |
| Layout principal Teams | Grid de Cards (1 card por atividade) |
| Detalhe Teams | Modal fullscreen (mobile) / centered card (desktop) |
| Conteudo do modal | 3 Tabs: Time, Boss, Historico |
| Navigation mobile | Bottom nav (5 botoes) |
| Navigation desktop | Sidebar fixa 220px |
| Responsividade | Mobile-first, breakpoint 768px |
| Estetica | Dark Fantasy Codex (bg deep, gold accent, grain texture) |
| Deploy | `nexus push` — build_cmd no nexus.yaml |
| Times S1 existentes | Preservados em `tested[]` |
| Decisions page | Cortada do escopo |

## Fases

### Fase 1 (core)
- Scaffolding Vite + Vue + Router + Tailwind
- Layout shell (sidebar desktop + bottom nav mobile)
- Dashboard
- **Teams (redesign novo — feature principal)**

### Fase 2 (portar)
- Heroes (lista, filtros, detalhe)
- Builds
- Gear
- Artifacts
- Tier List

## Secoes do App (7)

| Secao | Rota | Complexidade | Fase |
|-------|------|-------------|------|
| Dashboard | `/` | Baixa | 1 |
| Times | `/teams` | Alta | 1 |
| Heroes | `/heroes` | Alta | 2 |
| Builds | `/builds` | Media | 2 |
| Gear | `/gear` | Media | 2 |
| Artifacts | `/artifacts` | Media | 2 |
| Tier List | `/tierlist` | Media | 2 |

## Atividades Cobertas (10)

| ID | Nome | Tipo |
|----|------|------|
| `grave_of_venom` | Grave of Venom | gear_dungeon |
| `grave_of_curse` | Grave of Curse | gear_dungeon |
| `grave_of_rot` | Grave of Rot | gear_dungeon |
| `flame_domain` | Flame Domain | gear_dungeon |
| `frost_domain` | Frost Domain | gear_dungeon |
| `tempest_domain` | Tempest Domain | gear_dungeon |
| `heretical_ruins` | Heretical Ruins | gear_dungeon |
| `fey_meander` | Fey Meander | tower |
| `fallen_shadow_spire` | Fallen Shadow Spire | tower |
| `grand_gladiator_arena` | Grand Gladiator Arena | pvp |

## Estrutura de Dados

### Teams — `DATA_ACTIVITIES`

```js
{
  id: "grave_of_curse",
  name: "Grave of Curse",
  type: "gear_dungeon",
  boss: { name: "Blood Prince Xenos", element: "Necrosis" },
  drops: "HP gear",
  cycle: "18s",
  mechanics: {
    skills: { passive: "...", skill1: "...", skill2: "...", skill3: "..." },
    what_kills: ["..."],
    how_to_win: "...",
    counters: ["..."],
    timing: "..."
  },
  teams: {
    community: [{ source, members: [{id, role, artifact}], captain_id, affinity, notes }],
    custom: [{ name, members, captain_id, affinity, result, notes }],
    tested: [/* times S1 migrados */]
  }
}
```

### Dados existentes (reutilizados)

Todos os `app/data/*.js` continuam como fonte — carregados como ES modules ou importados.

| Arquivo | Global | Conteudo |
|---------|--------|----------|
| heroes.js | DATA_HEROES | 316 herois com skills, ratings (9 atividades) |
| tiers.js | DATA_TIERS | 254 herois com ratings |
| my-roster.js | DATA_MY_ROSTER | 182 herois do Henry |
| profile.js | DATA_PROFILE | Recursos e perfil |
| mechanics.js | DATA_MECHANICS | Mecanicas do jogo |
| artifacts.js | DATA_ARTIFACTS | Artefatos owned + BiS |
| builds.js | DATA_BUILDS | Builds por heroi |
| gear.js | DATA_GEAR | Gear plans |

## UI — Design System

### Cores (CSS variables)

```css
--bg-deep: #06060c
--bg-surface: #0d0d16
--bg-card: #12121e
--bg-elevated: #1a1a2a
--border: #1e1e30
--gold: #c9a24e
--gold-bright: #e8c96a
--text: #e8e6e3
--text-dim: #8a8895
--text-muted: #5a5868
--fire: #e8594a
--ice: #5ba8d9
--lightning: #a87ce8
--poison: #6bc95a
--necrosis: #9b6bc9
--radiance: #e8c44a
```

### Tipografia

- Display: Cinzel (serif, medieval) — titulos, section labels
- Body: DM Sans — texto, labels, meta

### Componentes reutilizaveis

- `ElDot` — dot colorido por elemento
- `Pill` — badge/pill com variantes (gold, green, default)
- `HeroImg` — imagem CDN com crop
- `HeroStrip` — strip horizontal de mini-avatares
- `StatCard` — card de estatistica
- `ActivityCard` — card de atividade
- `TeamBlock` — bloco de time com hero rows
- `Modal` — modal fullscreen mobile / card desktop
- `TabBar` — tabs reutilizavel

### Layout

**Mobile (< 768px):**
- Bottom nav fixa (5 botoes)
- Padding 16px
- Grid 1 coluna
- Modal fullscreen com top bar sticky
- Filtros scroll horizontal

**Desktop (768px+):**
- Sidebar fixa 220px
- Padding 28-48px
- Grid 2 colunas
- Modal card centralizado 800px max
- Hover effects

## Mockup

Mockup interativo aprovado em `app-mockup-preview.html`.

## Deploy

```yaml
# nexus.yaml
web:
  route: /dh
  static_dir: dist          # Vite output (era 'app')
  build_cmd: npm run build  # Vite build (era 'bash scripts/build-web.sh')
```

O `build_cmd` muda de `bash scripts/build-web.sh` para `npm run build`.
O `static_dir` muda de `app` para `dist` (output padrao do Vite).
Base href `/dh/` configurado no `vite.config.js`.

## Fontes de pesquisa para times

- `data/community-teams-research.json` — pesquisa da comunidade (10 atividades)
- `app/data/mechanics.js` — mecanicas dos bosses
- `app/data/teams.js` — 10 times testados S1
- `app/data/heroes.js` — skills para analise custom
- `app/data/tiers.js` — ratings por atividade

## Criterios de Sucesso

1. `npm run dev` roda o app localmente
2. `npm run build` gera `dist/` deployavel
3. `nexus push` funciona com novo build_cmd
4. App roda em `/dh` no portal
5. Mobile-first: bottom nav, grid 1 col, modal fullscreen
6. Desktop: sidebar, grid 2 col, modal card
7. Times: grid de 10 atividades com modal + 3 tabs
8. Herois que Henry nao tem marcados visualmente
9. Dados existentes reutilizados (heroes, tiers, roster, etc.)
10. Todas as 7 secoes funcionais
