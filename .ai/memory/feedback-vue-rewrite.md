---
name: Vue Rewrite UI Feedback
description: Learnings from the Vue 3 rewrite of the Dragon Heir companion app — UI decisions, bugs found, user preferences
type: feedback
originSessionId: 280250bd-67cc-454c-84d3-f7916e47e444
---
## Filtros devem ser EXCLUSIVOS
Todos os filtros (ownership, elemento, school) devem ser exclusivos — selecionar um desativa o anterior. NUNCA multi-select.
**Why:** Henry quer filtro rápido, não combinação complexa. Selecionar Fire e depois Ice deve mostrar só Ice.
**How to apply:** `activeElement = ref(null)` com toggle, não `activeElements = ref([])` com push/splice.

## School filters são CONTEXTUAIS
Schools só aparecem quando um elemento está selecionado. Mostrar só as schools daquele elemento.
**Why:** 14 schools é muito para mostrar de uma vez. Contextuais reduz para 3-4 opções.
**How to apply:** `SCHOOLS_BY_ELEMENT` map, `availableSchools` computed.

## Gear page = lista de PLANS, não perfis
O dado primário são os gear_plans (loadouts in-game), NÃO os perfis de stats. O fluxo é: ver stat principal do herói in-game → escolher o plan correspondente.
**Why:** Henry tem limite de 30 plans no jogo. Precisa saber qual plan usar para qual herói.
**How to apply:** Lista flat de plans com representante, não agrupamento por perfil.

## Builds como página separada NÃO faz sentido
Informação de talent/build pertence ao detalhe do herói, não a uma página dedicada.
**Why:** Ninguém navega "quero ver builds". O fluxo é "quero ver o herói X" e aí ver seus talents.
**How to apply:** Seção de talent no modal de herói, usando campo `tf` (talent picks S6 do dragonheir.info).

## Dashboard é dispensável
Se o app tem poucas seções acessíveis por 1 tap, Home vira tela de passagem.
**Why:** Jogador casual (30-40 min/dia) vai direto no que precisa. Landing page deve ser a feature principal.
**How to apply:** Times como landing page (`/` → TeamsView).

## Bug `v-for` com variável errada
Ao renomear variáveis de loop (ex: `type` → `cat`), TODAS as referências no template precisam ser atualizadas. `v-for="a in grouped[type]"` quando a variável é `cat` = lista vazia sem erro.
**Why:** Vue não dá warning quando a variável do v-for resolve para undefined — simplesmente não renderiza nada.
**How to apply:** Sempre grep por nome antigo após rename. Ou usar testes.

## Dados runtime vs bundled
Dados do jogo em `public/data/` (NÃO importados pelo Vite). Carregados via script tags dinâmicos em runtime. Permite atualizar dados sem rebuild.
**Why:** Quando Claude atualiza um dado (novo herói, novo time), só precisa de `nexus push`, não `npm run build`.
**How to apply:** `src/data/loader.js` carrega scripts, `src/data/index.js` lê de `window.DATA_*`.
