# CLAUDE.md — Instruções para IA

## Jogador
- **Henry** — dev brasileiro, veterano retornando, casual (30-40 min/dia), medium spender
- **Conta:** SuperYennefer (Server 139-Darkfire), herdada de Morrigann (S1)
- **Idioma:** Português brasileiro. Seja direto, sem enrolação.

## Projeto
- **Tipo:** Sub-projeto do Nexus (portal pessoal do Henry)
- **Local:** `E:\OneDrive\Games\Dragon Heir` (OneDrive, sincronizado)
- **URL:** https://nexus.henryavila.com/dh
- **Deploy:** `npm run build` (Vite) gera `dist/`, Nexus copia para rota `/dh`
- **Comando:** `nexus push` para publicar alterações
- **Sem git.** Versionamento é via OneDrive. Nexus gerencia o ciclo de vida.

## Estrutura do Projeto

```
Dragon Heir/
  src/                    ← Código Vue 3 (web app)
  public/data/            ← Fonte única de dados (KB + web app runtime)
  raw-data/               ← Exports brutos do jogo (fonte de referência)
  docs/                   ← Documentação e guias
  scripts/                ← Utilitários de build e parsing
  .ai/memory/             ← Memória persistente do AI
  logs/                   ← Screenshots e logs do jogo
  archive/                ← Histórico
```

## Regras

### Ao dar recomendações
1. Ler `docs/game-mechanics/mentoria-aprendizados.md` para contexto e aprendizados acumulados
2. Ler `public/data/profile.js` para saber recursos e legendários atuais
3. Ler `public/data/my-roster.js` para saber quais heróis Henry TEM
4. Ler `public/data/mechanics.js` → seção `affinities` para saber o bônus REAL de afinidade (muda com progressão)
5. Nunca recomendar heróis que Henry não possui sem avisar explicitamente
6. Priorizar eficiência e automação — Henry tem pouco tempo
7. **Afinidade:** NUNCA assumir valores de bônus — sempre ler o arquivo. O bônus muda conforme a conta progride

### Ao registrar mudanças no jogo
Quando Henry informar que obteve herói, gastou recurso, tomou decisão, etc:
1. **Sempre atualizar TODOS os arquivos JS afetados** — não só um
2. Seguir o checklist abaixo conforme o tipo de mudança

#### Herói novo obtido
- [ ] `public/data/my-roster.js` → adicionar na seção do elemento
- [ ] `public/data/profile.js` → atualizar contagem e tabela de Legendários
- [ ] `public/data/decisions.js` → registrar com data, origem, impacto
- [ ] `public/data/mechanics.js` → seção `chests` → marcar `has: true` se herói estava em algum baú
- [ ] `public/data/plan.js` → atualizar times e referências se o herói muda composições

#### Decisão tomada (baú escolhido, banner pullado, scroll usado, etc)
- [ ] `public/data/decisions.js` → registrar com data e raciocínio
- [ ] `public/data/plan.js` → marcar `done: true` no item correspondente
- [ ] Arquivos afetados pela decisão (roster, teams, etc)

#### Recurso gasto/ganho (Wyrmarrow, Scrolls, etc)
- [ ] `public/data/profile.js` → atualizar quantidade

#### Mecânica nova descoberta ou corrigida
- [ ] `public/data/mechanics.js` → atualizar seção relevante
- [ ] `docs/game-mechanics/mentoria-aprendizados.md` → adicionar na seção correspondente

### Ao analisar apostas (Wager Mode)
1. Ler `public/data/bets.js` → seção `learnings` para aprendizados de apostas anteriores
2. Ler `public/data/bets.js` → seção `archetypes` para padrões de times já vistos
3. Ler `public/data/bets.js` → seção `analysis_factors` para pesos dos critérios (ajustados com resultados)
4. Para cada herói: buscar skills em `public/data/heroes.js`, tiers em `public/data/tiers.js`, artefatos em `raw-data/artifacts-all.json`
5. Analisar: school bonds, afinidade elemental, sinergias de skills, artefatos exclusivos, kill condition
6. Salvar a aposta com análise completa em `public/data/bets.js` → seção `bets`
7. Quando Henry informar resultado: preencher `result`, `result_notes`, `post_mortem` e atualizar `learnings` + `archetypes` + `stats`
8. Screenshot da aposta vai em `logs/`

### Ao consultar dados
- **Fontes confiáveis in-game > fontes online.** HellHades e AllClash têm dados ERRADOS sobre pity (dizem 3%/35 pulls, correto é 1.5%/70 pulls)
- **School Bonds:** NUNCA usar o campo `type` do HellHades como School. HH `type` (Defense, etc) NÃO é o sistema de School Bonds do jogo. Schools reais (14 total): **Aura**, **Burn**, **Corrosion**, **Dauntless**, **Frost**, **Ice Blast**, **Poison**, **Rally**, **Shadow**, **Summon**, **Support**, **Thunderbolt**, **Toxin**, **Wild**. Dados confirmados em `raw-data/heroes-dragonheir-info-all.json`
- **Tier lists:** AllClash para tier geral (SS/S/A/B/C/D), HellHades para ratings por atividade (0-5), DragonHeir.info para ranking por season. Usar as 3 fontes.
- **Afinidades:** Mudam A CADA SEASON. Sempre confirmar in-game e atualizar `mechanics.js`. S6: Devitalization/Incandescence/Vertigo.

## Onde encontrar o quê

| Assunto | Arquivo |
|---|---|
| **Aprendizados e mentoria (LER PRIMEIRO)** | `docs/game-mechanics/mentoria-aprendizados.md` |
| Próximos passos e plano | `public/data/plan.js` |
| Perfil rápido (conta/recursos) | `public/data/profile.js` |
| Histórico de decisões | `public/data/decisions.js` |
| Roster completo por elemento | `public/data/my-roster.js` |
| Times por atividade (legado) | `public/data/legacy-teams.js` |
| Heróis disponíveis nos baús | `public/data/mechanics.js` → seção `chests` |
| Tier list AC+HH+DI (303 heróis) | `public/data/tiers.js` |
| Skills de 297 heróis | `public/data/heroes.js` |
| Mecânicas do jogo (summoning, combat, gear, cooking, school bonds, resonance, game modes) | `public/data/mechanics.js` |
| Guias (rotina diária, beginner, recursos) | `public/data/guides.js` |
| Builds (talento, gear, artefato por herói) | `public/data/builds.js` |
| BiS artefatos por herói | `public/data/artifacts.js` |
| Catálogo de artefatos (126) | `public/data/artifacts-all.json` |
| Artefatos (JSON, programático) | `raw-data/artifacts-all.json` |
| Apostas (wager mode) + learnings | `public/data/bets.js` |

## Dados do Jogo (referência rápida)

- **Versão:** Reborn (Jul/2025) | **Season:** S6 — Hymn of Chess & Blade (Abr/2026)
- **Custo por summon:** 100 Wyrmarrow
- **Pity Lendário:** 70 pulls = 1 Legendary ALEATÓRIO (rate 1.5% confirmada in-game)
- **Pity Banner Exclusivo:** 300 pulls = herói do banner GARANTIDO
- **Resonance Level:** Progressão compartilhada — todos heróis sobem juntos
- **Season resets:** ELIMINADOS — progresso é permanente entre seasons
- **Afinidades S6:** Devitalization (Ice+Poison), Incandescence (Fire+Radiance), Vertigo (Lightning+Necrosis)
- **Servidor veterano:** Heróis S1-S6 disponíveis
- **Novos sistemas:** Familiars (pets), Magichess (auto-chess), Quick Raid, Echoing Shadow Summon, Island

## Web App
- **Stack:** Vue 3 + Vue Router + Tailwind CSS v4 + Vite
- **Deploy:** `npm run build` → Vite gera `dist/`, Nexus copia para rota `/dh`
- **Dados:** Todos em `public/data/*.js` como `window.DATA_*` globals (carregados em runtime, não bundled)
- **Imagens de heróis:** CDN `https://i.dmzgame.com/dragonheir/img/hero/pic_hero_show_[heroId].png`
- **Subpath `/dh`:** App roda em subpath, NÃO na raiz do domínio. O `<base href>` vem do `web.route` em `nexus.yaml` (aplicado por `scripts/build-web.sh`, ex.: `/dh/`). **SEMPRE usar paths relativos com `./`** (ex: `./data/heroes.js`). NUNCA paths absolutos (`/data/...`).
