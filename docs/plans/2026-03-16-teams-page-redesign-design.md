# Teams Page Redesign Design

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reconstruir a pagina de `teams` para refletir o dataset novo, com navegacao por atividade e detalhes expansivos mostrando o artefato de cada heroi em cada resultado real.

**Architecture:** A nova pagina deixa de tratar `team` como biblioteca principal e passa a tratar cada registro confirmado em `DATA_TEAMS` como um resultado real. A renderizacao sera organizada por `activity`, com filtros derivados do proprio dataset, cards compactos por resultado e um painel expansivel por card para encontro, artefatos e observacoes. A fonte canonica continua em `app/`, com espelhamento manual para `dh/` porque o site publicado roda no subpath `/dh/`.

**Tech Stack:** Vanilla JS, `window.DATA_*`, Tailwind utilitario, componentes DOM via `R.el`

---

## Decisoes Tomadas

1. **Eixo principal = atividade.** Cada secao da pagina representa uma `activity` real do dataset.
2. **Unidade de exibicao = resultado confirmado.** Cada card representa um item de `DATA_TEAMS`, nao um arquétipo teorico.
3. **Artefatos ficam em detalhes expansivos.** O resumo do card mostra resultado, time e herois; ao expandir, aparece o artefato de cada heroi nessa atividade.
4. **Nada de categorias fixas antigas.** Filtros passam a ser derivados dos nomes reais de `activity`, sem taxonomia hardcoded (`boss`, `grave`, `pvp`, etc.).
5. **Busca unica e ampla.** A busca cobre `activity`, `activities[]`, nome do time, boss, stage, herois, artefatos e notas.
6. **Frequencia de herois vira secundaria.** Continua disponivel em uma secao recolhida, sem competir com o fluxo principal da pagina.
7. **`app/` continua canonico.** Depois da implementacao, os arquivos de runtime equivalentes em `dh/` precisam ser espelhados para o site nao ficar apontando para codigo ou dados antigos.

## Estrutura da Pagina

### 1. Cabecalho e resumo

- Titulo `Times por Atividade`
- Subtitulo curto explicando que a pagina mostra resultados reais confirmados
- Cards-resumo:
  - total de atividades com resultados
  - total de resultados confirmados
  - total de times nomeados presentes nesses resultados

### 2. Controles

- Campo unico de busca:
  - busca por atividade, time, boss, heroi, artefato ou nota
- Barra de chips por atividade:
  - `Todas`
  - uma chip por `activity` primaria presente no dataset
  - contagem por atividade no proprio rotulo

### 3. Secoes por atividade

Cada atividade renderiza:
- nome da atividade
- quantidade de resultados visiveis
- opcionalmente uma linha curta de contexto quando existir apenas um resultado

Dentro da secao, cada resultado vira um card compacto com:
- identificacao do encontro:
  - boss, stage e/ou luta `1/2`
- badge do resultado principal:
  - `2:11`, `9.865 pontos`, `Lv11 CLEAR`, etc.
- nome do time
- afinidade, quando existir
- os 5 herois em versao compacta
- botao de expandir detalhes

### 4. Detalhes expansivos por resultado

Ao expandir um card, aparecem:
- bloco `Encontro`
  - boss
  - nivel
  - stage
  - luta `x/y`
  - `activities[]` secundarias, quando existirem
- bloco `Artefatos nesta atividade`
  - um item por heroi
  - nome do heroi
  - role
  - artefato
  - `artifact_level` apenas quando diferente de `20`
- bloco `Observacoes`
  - `notes`
- bloco `Evidencia salva`
  - `tests[]`, quando existir

### 5. Secao secundaria de recorrencia

- Titulo `Herois mais recorrentes`
- recolhida por padrao
- lista simples com:
  - heroi
  - numero de resultados
  - atividades onde aparece

## Regras de Dados na UI

1. **Agrupamento principal usa somente `team.activity`.**
2. **Busca considera tambem `team.activities[]`.**
   Isso permite encontrar um time por `Grand Gladiator Arena` sem mover o resultado principal para fora da atividade original.
3. **Artefato mostrado sempre vem de `members[].artifact`.**
   A pagina nao deve inferir artefato pela base global equipada.
4. **`artifact_level` so aparece visualmente quando diferente do maximo padrao.**
5. **Cards sem match somem, mas a estrutura por atividade continua consistente.**

## Implementacao Prevista

- Reescrever `app/js/components/teams.js`
- Espelhar o mesmo arquivo para `dh/js/components/teams.js`
- Espelhar datasets relevantes de `app/data/teams.js` e `app/data/profile.js` para `dh/data/`
- Atualizar cache-busting do front para evitar browser servindo JS antigo
- Verificar logica da pagina com um teste Node focado em agrupamento e busca

## Validacao

1. Busca por `Grand Gladiator Arena` precisa encontrar o card do `Super Ice`.
2. `Planar Expedition` precisa aparecer como uma atividade com dois cards distintos.
3. Ao expandir `Poison Full`, `Lothair` precisa mostrar `Statue of the Serpent Deity` com `Lv15`.
4. Nenhum filtro antigo hardcoded pode permanecer na pagina.
5. A secao secundaria de recorrencia nao pode dominar o fluxo principal.

## Riscos Conhecidos

- O projeto nao tem framework formal de testes de UI; a verificacao automatica precisa focar em helpers puros do componente.
- `dh/` hoje nao eh sincronizado automaticamente com `app/`; se o espelhamento nao acontecer, a pagina publicada continua inconsistente.
