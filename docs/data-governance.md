# Governanca de Dados

## Fonte canonica

- Fonte canonica operacional: `app/data/*.js`
- Estado do jogador: `app/data/profile.js`, `app/data/my-roster.js`, `app/data/teams.js`, `app/data/plan.js`, `app/data/decisions.js`

## Papel de `docs/` e `context/`

- `docs/` e `context/` sao material de apoio e historico
- Podem ficar defasados em relacao ao estado real do app
- Em conflito, prevalece sempre `app/data/*.js`

## Regra pratica

- Toda mudanca de roster/recurso/decisao deve ser refletida primeiro em `app/data/*.js`
- Atualizacao de docs e desejavel, mas secundaria
