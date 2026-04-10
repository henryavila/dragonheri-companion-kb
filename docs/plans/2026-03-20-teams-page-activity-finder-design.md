# Teams Page Activity Finder Design

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refazer a pagina de `Times` para funcionar como um finder de composicoes por atividade, com busca principal por atividade, cards compactos de times e detalhes expansivos com herois, papeis e artefatos por atividade.

**Architecture:** A nova pagina deixa de tratar `activity` como secao principal e passa a tratar `time` como a unidade central de exibicao. A navegacao primaria sera um `combobox` com search para selecionar atividade; a lista abaixo sempre renderiza `times`, filtrados e ordenados pela atividade escolhida e por uma busca secundaria opcional. O componente continua consumindo `DATA_TEAMS` e `DATA_HERO_FREQUENCY`, mas a prioridade visual passa a ser `achar rapidamente o time certo para uma atividade especifica`, sem poluicao de grupos ou dezenas de badges.

**Tech Stack:** Vanilla JS, `window.DATA_*`, `R.el`, `D.hero()`, Tailwind utilitario + `app/css/custom.css`

---

## Problema Resolvido

A pagina atual de `Times` falha no caso de uso principal do jogador:

1. **Achar o time de uma atividade especifica rapidamente.**
2. **Ver a composicao completa do time sem abrir uma tela pesada.**
3. **Confirmar o artefato correto de cada heroi naquela atividade**, sabendo que o mesmo heroi pode usar artefatos diferentes em outras lutas.

As duas solucoes antigas geravam atrito:

- **agrupamento por atividade**: perde valor quando a maior parte das atividades tem apenas um time;
- **parede de badges/chips para todas as atividades**: vira ruido, especialmente no celular.

## Decisoes de Produto

1. **Pagina de `Times` = finder de atividade.**
   O job principal nao e explorar todos os resultados; e chegar rapido ao time certo.

2. **Filtro principal = atividade, com search embutido.**
   O controle central sera um `select com search` / `combobox`.

3. **Conteudo exibido = times.**
   O sistema filtra a lista de `times` por atividade; ele nao filtra uma grade de atividades.

4. **Sem grupos por atividade na tela principal.**
   A lista sera unica. A atividade selecionada define o recorte.

5. **Sem chips para todas as atividades.**
   O topo nao vai repetir o erro da parede de badges.

6. **Artefato por heroi aparece no detalhe do time, nunca no resumo.**
   Isso preserva a informacao critica sem poluir a lista.

7. **Herois page fica intocada.**
   Todo o trabalho se limita a `Times`.

## Estrutura da Pagina

### 1. Cabecalho

- titulo `Times`
- subtitulo curto explicando que a pagina mostra composicoes reais confirmadas
- um ou dois indicadores leves:
  - total de resultados
  - total de atividades com dados

O cabecalho precisa ser mais enxuto que o atual; o protagonismo vai para o filtro de atividade.

### 2. Controle principal: combobox de atividade

O topo da pagina tera um componente com comportamento de `select + search`:

- estado fechado:
  - placeholder `Encontrar atividade`
  - opcionalmente mostra a atividade selecionada
- ao abrir:
  - lista de atividades conhecidas
  - recentes no topo, se existirem
- ao digitar:
  - filtra a lista de atividades em tempo real
- ao selecionar:
  - atualiza a lista de `times`
  - fecha o dropdown

Esse controle precisa funcionar bem tanto com mouse quanto com toque.
As atividades recentes precisam ser persistidas em `localStorage` para nao virar requisito fantasma de UX.

### 3. Controle secundario: busca livre de times

Depois da atividade, vem um campo secundario:

- placeholder: `Refinar por boss, time, heroi ou artefato`
- atua sobre os `times` ja exibidos
- cobre:
  - `team.name`
  - `team.activity`
  - `team.encounter.boss`
  - nomes dos herois
  - roles dos membros
  - artefatos dos membros
  - notas e testes

Sem atividade selecionada, essa busca continua util para exploracao geral.

### 4. Lista principal de resultados

A tela principal passa a ser uma lista unica de cards de `time`.

Cada card fechado mostra apenas o necessario para confirmar relevancia:

- `atividade`
- `boss/encontro`
- `nome do time`
- `resultado`
- `afinidade`
- strip visual com os 5 herois

Nada de artefatos no card fechado.

### 5. Detalhe expansivo do time

Ao expandir um card:

- **Composicao**
  - retrato do heroi
  - nome
  - papel
  - artefato
  - `artifact_level`, se presente

- **Posicionamento**
  - bloco curto e visualmente destacado

- **Mecanica**
  - resumo de por que esse time funciona naquela atividade

- **Notas/Testes**
  - observacoes reais do dataset
  - variações e resultados historicos, se existirem

Regra visual:
- so um card aberto por vez por padrao, para reduzir ruido.
Isso precisa ser modelado no estado como `openCardId`, nao como lista/conjunto de cards abertos.

## Responsividade

### Mobile

- cabecalho e controles empilhados
- combobox em largura total
- dropdown grande, tocavel e com scroll proprio
- cards em coluna unica
- expansao em accordion vertical
- apenas a barra de filtros fica sticky; o cabecalho com titulo e stats continua normal para nao consumir viewport

### Desktop

- mesma ordem logica de elementos
- cards mais largos
- resumo em duas colunas leves quando houver espaco
- detalhe expandido inline no proprio card

Nao usar sidebar fixa nem layout que dependa de hover.

## Regras de Dados na UI

1. **Atividade selecionada filtra `times`, nao atividades.**
2. **O resumo do card usa somente informacao de alta densidade.**
3. **Artefatos sao lidos exclusivamente de `members[].artifact`.**
4. **O mesmo heroi pode exibir artefatos diferentes em cards diferentes.**
5. **Se um time nao tiver artefato registrado, isso aparece como ausencia clara no detalhe, sem inventar inferencia.**
6. **`DATA_HERO_FREQUENCY` continua existindo, mas como secao secundaria e recolhida.**
7. **`Posicionamento` vem de `team.mechanics.positioning`; `Mecanica` vem de `team.mechanics.key_mechanic`.**
8. **Se um desses campos faltar, a UI omite o bloco em vez de inventar texto.**

## Componentes e Arquivos Impactados

- `app/js/components/teams.js`
  - reestruturar renderizacao da pagina
  - adicionar combobox de atividade
  - trocar agrupamento por lista filtrada de cards
  - redesenhar card e detalhe

- `app/css/custom.css`
  - estilos do combobox
  - dropdown
  - hero strip
  - detalhe expandido
  - comportamento sticky/responsivo

- `app/js/utils/data.js`
  - opcional: helpers leves para extrair nomes de herois ou atividades se isso simplificar o componente

- `dh/js/components/teams.js`
- `dh/css/custom.css`
  - espelhar a implementacao se o runtime publicado usar o subpath `dh/`

## Validacao de UX

1. Abrir a pagina e achar `Continental Boss` em poucos toques.
2. Selecionar a atividade e cair numa lista curta de cards, sem grupos extras.
3. Abrir um card e ver a composicao completa com artefatos corretos por heroi.
4. Conseguir refinar por `Tamar`, `Thunder Deity's Spear` ou `Acilia`.
5. Funcionar bem em largura mobile sem parecer tabela espremida.

## Riscos Conhecidos

1. `Teams.render` hoje esta muito acoplado ao agrupamento por atividade.
2. O combobox precisa ser implementado manualmente em Vanilla JS; sem cuidado, pode ficar ruim no teclado e no toque.
3. Se o detalhe do card tentar mostrar informacao demais de uma vez, a tela volta a ficar pesada.
4. Se o filtro secundario nao for bem delimitado, ele pode competir com o filtro principal de atividade e confundir o fluxo.
5. Os smoke tests precisam carregar `window.DATA_*` e `D.hero()` corretamente; caso contrario, validam menos do que prometem.
