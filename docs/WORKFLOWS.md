# Workflows

## Calendario (parser manual)

### Objetivo
Atualizar o calendario de 14 dias a partir do HTML copiado do jogo e salvar os dados em `app/data/calendar.js`.

### Passo a passo
1. Abra o calendario no jogo e copie o HTML completo.
2. Salve o HTML em:
   - `data/raw/calendar.html`
3. Execute o parser:
   ```bash
   python3 scripts/parse-calendar.py data/raw/calendar.html --year 2026
   ```
4. Verifique se `app/data/calendar.js` foi atualizado.

### Saidas
- `app/data/calendar.js`
  - `source_range`, `last_extracted`, `events`, `limited_time`, `summon_pools`
  - `calendar_history` incremental (somente novos/alterados)

### Observacoes
- O parser detecta novos itens por `title + start + end`.
- Se o titulo existir mas as datas mudarem, registra como `changed` no historico.
- O card no Dashboard mostra `OK / Atencao (7 dias) / Desatualizado` baseado no fim da janela.

### Detalhes de eventos (pesquisa)
- Edite `event_details` em `app/data/calendar.js` para adicionar objetivos/recompensas/dicas/fontes.
