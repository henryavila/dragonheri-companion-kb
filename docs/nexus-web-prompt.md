# Dragon Heir — Página Web

## Contexto

| Campo | Valor |
|-------|-------|
| **Projeto** | Dragon Heir |
| **Descrição** | Companion app para Dragon Heir Silent Gods |
| **Categoria** | games |
| **Rota no portal** | `/dh` |
| **Pasta de output** | `app/` |
| **Repo** | `henryavila/dragonheir-companion` |


## O que gerar

Crie uma página web para este projeto. Leia os arquivos do projeto (README.md, CLAUDE.md, AGENTS.md, docs/) para entender o contexto e gerar conteúdo relevante.

### Requisitos técnicos

- O resultado final deve ser um **site 100% estático** — só HTML, CSS e JS. Sem dependência de runtime server-side (PHP, Node, Python, etc.)
- Todos os arquivos de output devem ficar na pasta `app/`
- O entry point deve ser `app/index.html`
- CDNs são permitidos (fontes, bibliotecas JS/CSS)
- Frameworks frontend são permitidos desde que gerem output estático


### Design

- Layout **mobile-first**, responsivo
- Dark theme como padrão, com toggle para light se fizer sentido
- Design limpo, moderno e coerente com o propósito do projeto
- Favorecer boa tipografia e espaçamento sobre decoração excessiva

### Conteúdo sugerido

- Header com nome, ícone e descrição curta
- Seção principal com dados/funcionalidades específicas do projeto
- Links relevantes (repo, docs, recursos externos)
- Footer discreto

> O conteúdo exato depende do projeto. Um jogo pode ter guides e tier lists. Uma ferramenta pode ter documentação e exemplos. Adapte ao contexto.

## Deploy

1. Gere os arquivos na pasta `app/`
2. Teste abrindo `app/index.html` no browser
3. Execute `nexus push` — ele copia esta pasta para o portal na rota `/dh`
