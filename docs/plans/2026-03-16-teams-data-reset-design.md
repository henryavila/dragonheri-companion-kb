# Teams Data Reset Design

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apagar o dataset atual de times e todo o mapeamento associado, preservando apenas um backup bruto do estado antigo para consulta futura.

**Architecture:** O reset sera estritamente de dados. O arquivo canonico de times sera reduzido a uma base vazia, a tabela derivada de frequencia sera zerada e os links de `team_id` em `profile.js` serao removidos para nao apontarem para IDs mortos. A UI atual de times fica fora de escopo e sera refeita depois.

**Tech Stack:** Vanilla JS com arquivos `window.DATA_*`

---

## Decisoes Tomadas

1. **Escopo desta rodada = dados apenas.** Nenhuma tentativa de salvar ou melhorar a pagina atual de `teams`.
2. **Backup bruto antes do reset.** O estado antigo de `app/data/teams.js` sera copiado integralmente para `docs/backups/`.
3. **Fonte canonica antiga sera descartada.** `app/data/teams.js` passara a expor apenas:
   - `window.DATA_TEAMS = []`
   - `window.DATA_HERO_FREQUENCY = []`
4. **Areas e mapeamentos antigos deixam de existir por ausencia de dados.** Como os `activity`/areas vivem dentro dos objetos de time, zerar os times apaga junto o mapeamento antigo.
5. **Links pendurados tambem serao removidos.** Os `team_id` do bloco `continental_challenge` em `app/data/profile.js` serao zerados para `null`.
6. **Historico textual nao sera apagado agora.** `decisions.js`, `plan.js` e outros logs permanecem como registro historico, mesmo mencionando times antigos.
7. **Recriacao sera incremental e manual.** Depois do reset, cada time novo sera cadastrado um a um a partir de dados reais confirmados.

## Arquivos Afetados

- Backup: `docs/backups/2026-03-16-teams-pre-reset.js`
- Reset principal: `app/data/teams.js`
- Limpeza de links antigos: `app/data/profile.js`

## Regras de Reconstrucao Pos-Reset

1. Nenhum time novo entra sem evidencia real de uso, clear, dano ou resultado salvo.
2. Nenhuma classificacao por area sera reintroduzida automaticamente a partir do modelo antigo.
3. Dados derivados manuais devem ser evitados; se uma informacao puder ser recalculada depois, ela nao deve virar fonte primaria.

## Verificacao Necessaria

1. O backup precisa existir e conter o estado anterior de `app/data/teams.js`.
2. `window.DATA_TEAMS` precisa ficar vazio.
3. `window.DATA_HERO_FREQUENCY` precisa ficar vazio.
4. Todos os `team_id` de `continental_challenge` precisam ficar `null`.
