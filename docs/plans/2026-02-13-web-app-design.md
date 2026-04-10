# Design: Dragon Heir Companion — Web App (v2)

> **Data:** 2026-02-13 (v2 — revalidado com dados atuais)
> **Status:** Aprovado
> **Objetivo:** App web estático para consulta rápida de todos os dados do projeto Dragon Heir.

---

## PRÉ-REQUISITO: BACKUP ANTES DE TUDO

> **CRÍTICO: Os arquivos NÃO estão em git. Qualquer erro pode destruir todos os dados.**

### Antes de iniciar a implementação:
1. **Criar backup completo** da pasta `Dragon Heir/` inteira
2. **Inicializar git** no projeto: `git init` + commit inicial
3. **Verificar o backup** — confirmar que a cópia tem todos os arquivos
4. **Só então começar** a criar a pasta `app/`

### Estratégia de migração segura:
- **NÃO deletar arquivos .md** durante a migração
- Criar `app/data/*.js` EXTRAINDO dados dos .md, mantendo os .md como backup offline
- Os .md NUNCA são deletados — ficam como referência permanente

---

## Requisitos

1. **Estático** — abrir `index.html` e pronto. Sem servidor, sem build step.
2. **Dados em JS** — dados como variáveis JS globais (`window.DATA_*`). Claude edita esses arquivos.
3. **Visualização apenas** — app não edita dados. Edições via Claude nos arquivos JS.
4. **Tailwind CSS 4** — tema dark RPG via CDN. Sem npm, sem build.
5. **Boa UX** — fácil encontrar qualquer informação. Busca, filtros, drill-down.
6. **200+ heróis** — nunca mostrar tudo expandido. Lista compacta + painel de detalhe.

---

## Arquitetura

### SPA com sidebar

```
┌──────────┬──────────────────────────────────────┐
│ Sidebar  │  Área de conteúdo                     │
│          │  ┌────────────────────────────────┐   │
│ Dashboard│  │ Filtros / Busca                │   │
│ Heróis   │  ├────────────────────────────────┤   │
│ Times    │  │                                │   │
│ Artefatos│  │ Grid/Lista compacta            │   │
│ Tier List│  │                                │   │
│ Plano    │  │                                │   │
│ Decisões │  └────────────────────────────────┘   │
│          │                                       │
│          │  ┌─────────────────────┐              │
│          │  │ Slide-over panel    │ ← detalhe    │
│          │  └─────────────────────┘              │
└──────────┴──────────────────────────────────────┘
```

- Sidebar fixa à esquerda com ícones + labels
- Conteúdo muda conforme a seção ativa
- Detalhe abre como painel lateral (slide-over) sem perder contexto da lista

### Navegação via hash (`#heroes`, `#teams`, `#artifacts`, etc.)
- Permite bookmark e voltar com botão do browser
- `index.html#heroes` abre direto na seção de heróis
- `index.html#hero/Nastjenka` abre direto no detalhe (deep link)

---

## Estrutura de Arquivos

```
app/
├── index.html              ← ponto de entrada (CDN Tailwind + scripts)
├── css/
│   └── custom.css          ← animações e regras que Tailwind não cobre (mínimo)
├── js/
│   ├── app.js              ← inicialização, router, navegação
│   ├── components/
│   │   ├── sidebar.js      ← sidebar navigation
│   │   ├── dashboard.js    ← renderiza dashboard
│   │   ├── heroes.js       ← grid de heróis + filtros + detalhe
│   │   ├── teams.js        ← times por atividade
│   │   ├── artifacts.js    ← BiS, upgrade, inventário
│   │   ├── tierlist.js     ← tabela interativa de tiers
│   │   ├── plan.js         ← fases com checkboxes
│   │   ├── decisions.js    ← timeline de decisões
│   │   └── slidePanel.js   ← componente genérico do painel lateral
│   └── utils/
│       ├── filters.js      ← lógica de filtro/busca
│       └── render.js       ← helpers de renderização
└── data/
    ├── heroes.js           ← window.DATA_HEROES (database 297+ heróis)
    ├── my-roster.js        ← window.DATA_MY_ROSTER (heróis do Henry)
    ├── teams.js            ← window.DATA_TEAMS (~12 times canônicos)
    ├── artifacts.js        ← window.DATA_ARTIFACTS (owned + BiS + upgrade)
    ├── tiers.js            ← window.DATA_TIERS (3 fontes)
    ├── plan.js             ← window.DATA_PLAN (fases e items)
    ├── decisions.js        ← window.DATA_DECISIONS (histórico)
    ├── profile.js          ← window.DATA_PROFILE (conta + recursos)
    └── mechanics.js        ← window.DATA_MECHANICS (afinidade, schools, pity)
```

### Dados .js vs .md

| Tipo | Formato | Quem edita | Quando |
|---|---|---|---|
| **Todos os dados do jogo** | `.js` (variáveis globais) | Claude | Quando Henry reporta mudanças |
| **PLAN.md** | `.md` | Henry (checkboxes) | Henry marca itens manualmente |
| **CLAUDE.md** | `.md` | Raramente | Instruções para IA |
| **Arquivos .md antigos** | `.md` | Ninguém | Backup offline permanente |

---

## Modelos de Dados

### profile.js
```js
window.DATA_PROFILE = {
  name: "SuperYennefer",
  server: "139-Darkfire",
  status: "Veterano retornando",
  style: "Casual (30-40 min/dia), F2P",
  resources: {
    heroes_total: 134,
    legendaries: 19,
    inspirations: {
      total: 7,
      detail: "Ladehlia ×1, Lorentheel ×3, Donella ×1, Garett ×1, Sutha ×1"
    },
    master_scrolls: 7,
    legendary_skill_scrolls: 21,
    wyrmarrow: 30000,
    artifact_currency: 15,
    soul_imprints: {
      remaining: 3,
      detail: "Ivellios (Lightning), Donella (Radiance), Vinyara (Ice)",
      used: "Garett → Thunder Deity's Spear, Sutha → Great River Lamp"
    },
    crystals: 43000,
    chests: {
      "Legendary Hero Option Chest I": 0,
      "Legendary Hero Prime Chest I": 1
    }
  },
  arriving: [
    { heroId: "lothair", via: "Banner 4 (~6 dias)", tier: "SS", hh: 4.6, note: "13/13 perfeito" },
    { heroId: "divine-ascetic", via: "Evento Thunder Rumble (~9 dias)", tier: "NEW", note: "Dauntless, DI #41" },
    { heroId: "auster", via: "Legendary Hero Prime Chest I", tier: "SS" }
  ],
  skill_scroll_plan: [
    { heroId: "ladehlia", scrolls: 3, current: 7, target: 10, when: "agora" },
    { heroId: "nastjenka", scrolls: 10, current: 0, target: 10, when: "agora" },
    { heroId: "lothair", scrolls: 8, current: 0, target: 8, when: "quando chegar" }
  ]
};
```

### my-roster.js
```js
window.DATA_MY_ROSTER = [
  {
    id: "nastjenka",
    name: "Nastjenka",
    element: "Lightning",
    rarity: "Legendary",
    school: "Dauntless",
    role: "DPS",
    owned: true,
    inspiration: 0,
    skill_level: 0,
    artifact: {
      id: "thunder-deitys-spear",
      name: "Thunder Deity's Spear",
      rarity: "Mythic",
      upgrade_priority: 1
    },
    tiers: {
      allclash: "SS",
      hellhades: 4.6,
      dragonheir_info: 8
    },
    hellhades_ratings: {
      temporal_vortex: 5.0,
      goblin_lair: 4.0,
      grave_of_venom: 5.0,
      grave_of_curse: 5.0,
      grave_of_rot: 5.0,
      heretical_ruins: 5.0,
      ancient_battlefield: 5.0,
      arena: 5.0,
      fae_meander: 5.0,
      pillar_of_trials: 5.0,
      green_dragon: 5.0,
      violet_dragon: 5.0,
      gloomland: 5.0
    },
    captain: "+24% ATK all battles",
    skills: {
      ultimate: { name: "Wild Beak", description: "..." },
      battle: { name: "Talon", description: "..." },
      passive: { name: "Black Plume", description: "..." }
    },
    inspiration_skills: ["Insp 1...", "Insp 2...", "..."],
    teams_count: 8,
    notes: "#1 do jogo. Core Dauntless.",
    source: "Banner 2"
  }
  // ... ~134 heróis
];
```

### artifacts.js
```js
window.DATA_ARTIFACTS = {
  owned: [
    {
      id: "thunder-deitys-spear",
      name: "Thunder Deity's Spear",
      rarity: "Mythic",
      season: "S1",
      stats: ["ATK", "Crit Dmg"],
      skill_name: "Fleeting Lightning",
      skill_desc: "Basic attack: 60% chance 2-attack combo. CD 7s",
      equipped_on: "nastjenka",
      upgrade_priority: 1,
      upgrade_level: 1,
      bis_note: "Combo duplo em 8 times = maior impacto global",
      better_alternative: null
    },
    {
      id: "pocket-of-seduction",
      name: "Pocket of Seduction",
      rarity: "Legendary",
      season: "S1",
      stats: ["HP", "DEF%"],
      skill_name: "Demon's Bargain",
      skill_desc: "-5% damage per debuff, cap 2 (-10%)",
      equipped_on: "eurion",
      upgrade_priority: 4,
      upgrade_level: 1,
      bis_note: "Tank puro de 6 times. -10% é enorme para sobrevivência",
      better_alternative: {
        name: "Giant Turtle Offspring's Shell",
        rarity: "Mythic",
        note: "AoE [10% Max HP] shield. Soul Imprint Vinyara reservada"
      }
    }
    // ... 19 mais
  ],
  not_owned: [
    { name: "Spiritual Incense Burner", priority: "Média", note: "Bom para Torrin" },
    { name: "Ancestor's Candle", priority: "Baixa", note: null },
    { name: "Arcana Cube", priority: "Baixa", note: null },
    { name: "Arcane Music Box", priority: "Baixa", note: null },
    { name: "Illuya's Fang", priority: "Baixa", note: "Poison niche" },
    { name: "Orb of Oblivion", priority: "Baixa", note: "Necrosis niche" },
    { name: "Arinna's Light", priority: "Baixa", note: null },
    { name: "Air Globe", priority: "Baixa", note: null },
    { name: "Frost Globe", priority: "Baixa", note: null },
    { name: "Flame Globe", priority: "Baixa", note: null }
  ],
  crystal_budget: {
    total: 43000,
    spend_now: 35000,
    reserve_lothair: 5000,
    margin: 3000
  },
  upgrade_order: [
    { artifactId: "thunder-deitys-spear", heroId: "nastjenka", teams: 8, reason: "Mythic + herói mais usado" },
    { artifactId: "great-river-lamp", heroId: "garett", teams: 6, reason: "Mythic + segundo carry" },
    { artifactId: "great-demons-skull", heroId: "ladehlia", teams: 3, reason: "Mythic escala mais" },
    { artifactId: "pocket-of-seduction", heroId: "eurion", teams: 6, reason: "Main tank de 6 times" },
    { artifactId: "silverstar-horseshoe", heroId: "sutha", teams: 6, reason: "ATK Speed → Dauntless procs" },
    { artifactId: "harpys-nail", heroId: "ivellios", teams: 4, reason: "+10% Passive = todo seu dano" },
    { artifactId: "platinum-knight-shield", heroId: "vinyara", teams: 5, reason: "Segunda tank, -10% AoE" }
  ]
};
```

### teams.js
```js
window.DATA_TEAMS = [
  {
    id: "dauntless-core",
    name: "Dauntless Core",
    activity: ["grave_of_curse", "grave_of_rot", "heretical_ruins", "temporal_vortex", "arena"],
    members: [
      { heroId: "nastjenka", role: "DPS carry" },
      { heroId: "ivellios", role: "DPS derivative" },
      { heroId: "garett", role: "DPS burst/crit" },
      { heroId: "sutha", role: "DPS burst/crit" },
      { heroId: "schaltar", role: "Buffer/DPS" }
    ],
    bonds: ["5 Resplendence", "5 Dauntless (50% Thundercloud)"],
    auras: ["+24% ATK", "+24% Crit DMG", "+30% ATK Speed"],
    captain: { heroId: "nastjenka", skill: "+24% ATK" },
    tested: true,
    notes: "Time mais forte do roster. Pure burst."
  },
  {
    id: "permafrost-survival",
    name: "Permafrost Survival",
    activity: ["bosses", "frey_corridor"],
    members: [
      { heroId: "ladehlia", role: "DPS carry" },
      { heroId: "rowena", role: "DPS executor" },
      { heroId: "vinyara", role: "Buffer/Debuffer" },
      { heroId: "torrin", role: "Healer" },
      { heroId: "eurion", role: "Tank" }
    ],
    bonds: ["5 Permafrost", "1 Summon", "1 Frost", "2 Support"],
    captain: { heroId: "nastjenka", skill: "+24% ATK" },
    tested: true,
    dps: "4M Vortex",
    notes: "Tier S Ascetic, +14 Frey. Time não morre."
  }
  // ... ~10 mais (todos os times canônicos de my-teams-by-activity.md)
];
```

### mechanics.js
```js
window.DATA_MECHANICS = {
  affinity: {
    current_type: "flat",
    bonus: { atk: 200, def: 20, hp: 200 },
    note: "3 heróis = 5 heróis = mesmo bônus. Vai mudar para % futuramente."
  },
  pity: {
    legendary_rate: 0.015,
    legendary_pity: 70,
    banner_pity: 300,
    cost_per_pull: 100
  },
  schools: [
    "Aura", "Burn", "Corrosion", "Dauntless", "Frost", "Ice Blast",
    "Poison", "Rally", "Shadow", "Summon", "Support", "Thunderbolt", "Toxin", "Wild"
  ],
  skill_system: {
    max_per_hero: 10,
    cost_per_level: 1,
    distribution: "random"
  }
};
```

### plan.js e decisions.js
```js
// plan.js — estrutura igual ao design v1
window.DATA_PLAN = {
  updated: "2026-02-13",
  phases: [
    {
      id: 1,
      name: "Setup Imediato",
      status: "in_progress",
      items: [
        { text: "Completar tutorial", done: true },
        { text: "Usar Legendary Skill Scrolls (21)", done: false,
          subitems: [
            { text: "Ladehlia 3 → 10/10", done: false },
            { text: "Nastjenka 10 → 10/10", done: false },
            { text: "Lothair 8 → 8/10 (guardar)", done: false }
          ]
        }
        // ...
      ]
    }
    // ... fases 2-6
  ]
};

// decisions.js — estrutura igual ao design v1
window.DATA_DECISIONS = [
  {
    date: "2026-02-13",
    title: "Legendary Skill Scrolls: Alocação (21 scrolls)",
    tags: ["scrolls", "upgrade"],
    summary: "Ladehlia 3 (agora) + Nastjenka 10 (agora) + Lothair 8 (guardar)",
    impact: ["Ladehlia maxada", "Nastjenka maxada", "Lothair pronto quando chegar"]
  }
  // ... todas as decisões de decisions-log.md
];
```

---

## Seções do App — Comportamento

### 1. Dashboard

**Cards de resumo** (2 linhas, 3 cards por linha):
- Linha 1: Wyrmarrow | Legendários (19) | Heróis Total (~134)
- Linha 2: Skill Scrolls (21) | Cristais Artefato (43k) | Soul Imprints (3)

**Skill Scroll Plan** (card especial abaixo dos cards):
- Lista: Herói → scrolls / resultado / quando
- Barra de progresso visual (scrolls usados vs restantes)

**Heróis Chegando** (card):
- 3 heróis com prazo, tier, e via de obtenção

**Próximos Passos** (3-5 itens urgentes do plano)

Tudo cabe em uma tela sem scroll infinito.

### 2. Heróis

**Lista:** Grid de mini-cards (4-6 por linha). Cada card: nome, cor de fundo do elemento, badge tier, estrela se Legendary.

**Filtros:** Elemento (toggles cor) | Raridade | Tier mínimo | School (dropdown) | "Só meus" | Busca por nome.

**Detalhe (slide-over):**
- Nome, elemento, rarity, school, role
- Tiers (3 fontes: AC, HH, DI)
- Captain Skill
- Skills: Ultimate, Battle, Passive (texto completo)
- Inspiration (se Legendary)
- **Skill Level: X/10** (barra de progresso segmentada)
- **Artefato equipado** (nome + rarity badge + link para Artefatos)
- Times que usa este herói (links para seção Times)

### 3. Times

~12 times canônicos em cards accordion.

**Card colapsado:** Nome | atividades | badge "Testado"/"Não testado"

**Card expandido:**
- 5 slots horizontais (cor elemento + nome + role)
- Bonds + Auras + Captain Skill
- DPS registrado (se testado)
- Notas
- Botão para abrir detalhe de cada herói

### 4. Artefatos (NOVO)

**3 abas internas:**

**Aba BiS:**
- Tabela: Herói | Artefato | Rarity | Skill | Priority | Obs (alternativa melhor)
- Agrupado por tier (Mythic → Legendary DPS → Legendary Tank → Legendary Heal)
- Click na linha abre slide-over com detalhe do artefato

**Aba Upgrade:**
- Lista de prioridade (1-7) com cards
- Barra de cristais: gasto (verde) | reserva Lothair (amarelo) | margem (cinza)
- Total: 43k cristais, gastar 35k agora

**Aba Inventário:**
- Grid de todos 21 artefatos owned (mini-cards)
- Badge de quem equipa em cada artefato
- Seção "Não tenho" com 10 artefatos e prioridade

**Detalhe (slide-over ao clicar):**
- Nome, rarity, season, stats
- Skill completa com descrição
- Quem equipa + justificativa BiS
- Alternativa melhor (se existir e Henry não tiver)

### 5. Tier List

Tabela interativa dos 297+ heróis.

- Colunas: Nome | Elem | Rarity | AC Tier | HH Overall | DI # | School | Owned
- Sort por qualquer coluna
- Filtros iguais aos de Heróis
- Heróis owned destacados (fundo diferente)
- Click → slide-over com detalhe

### 6. Plano

Cards colapsáveis por fase (accordion).
- Fase atual aberta, anteriores colapsadas
- Barra de progresso (% feito)
- Checkboxes visuais
- Subitems indentados

### 7. Decisões

Timeline vertical cronológica.
- Cada entrada: data + título + tags (colapsada)
- Expandida: summary + details + impact
- Mais recente no topo

---

## Tema Visual — Tailwind CSS 4

### Setup (CDN, sem build)
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0f1117',
          card: '#1a1d28',
          hover: '#242836',
          panel: '#1e2130'
        },
        gold: {
          DEFAULT: '#d4a853',
          dim: '#a68638',
          hover: '#e8c06a'
        },
        fire: '#e85d3a',
        ice: '#4fa8d4',
        lightning: '#a87fd4',
        poison: '#5db85d',
        necrosis: '#8a6db5',
        radiance: '#e8d44d',
        'tier-ss': '#ff6b35',
        'tier-s': '#e8a835',
        'tier-a': '#4fa8d4',
        'tier-b': '#5db85d',
        'tier-c': '#9a97a0',
        mythic: '#ff6b35',
        legendary: '#d4a853',
        epic: '#a87fd4',
        done: '#5db85d',
        progress: '#d4a853',
        pending: '#5a576d'
      }
    }
  }
}
</script>
```

### Tipografia
- **Headers:** system-ui, bold, letter-spacing sutil
- **Body:** system-ui, regular
- **Dados/números:** font-mono (monospace)
- **Tamanhos:** text-sm base (14px), text-xs compacto (12px), text-lg/xl headers

### Componentes visuais
- Cards: `bg-surface-card rounded-lg border border-surface-hover`
- Badges tier: `bg-tier-ss text-white text-xs px-2 py-0.5 rounded`
- Badges elemento: círculo com cor de fundo do elemento
- Sidebar: item ativo com `border-l-2 border-gold`
- Slide-over: `fixed right-0 w-96 bg-surface-panel shadow-2xl`
- Transições: `transition-all duration-200 ease-in-out`

---

## Interação com Claude

### Como dados são atualizados
```
Henry: "gastei 5k cristais no Thunder Deity's Spear"
  → Claude edita artifacts.js:
    - crystal_budget.total: 43000 → 38000
    - owned[0].upgrade_level: 1 → 2
  → Claude edita PLAN.md (se aplicável)
  → Henry: F5 no browser → tudo atualizado
```

### Checklist de atualização (para Claude)
Quando Henry informar mudança:
- [ ] Editar `data/*.js` relevante
- [ ] Manter consistência entre arquivos
- [ ] Se herói novo: my-roster + profile + teams + artifacts (se aplicável)
- [ ] O app não precisa ser alterado — só os dados

---

## Fora do Escopo (YAGNI)

- Edição de dados pelo app (read-only)
- Backend/servidor
- Build step (npm, webpack, etc.)
- Banco de dados
- Autenticação
- PWA/service worker
- Internacionalização (app em PT-BR fixo)
- Imagens/avatares de heróis (usar cores de elemento + badges)
- Cálculo automático de DPS (Henry reporta manualmente)
- Import/export de dados (Claude é o "backend")
