---
name: screenshot-reading-technique
description: Como ler stats de heróis corretamente de screenshots do Dragon Heir — regras para evitar erros de leitura
type: feedback
---

Ao ler Hero Attributes de screenshots do Dragon Heir:

1. **Formato:** esquerda (branco/cinza) = base do herói, direita (amarelo) = bônus (gear+affinity+runes). **TOTAL = base + bônus.** NUNCA pegar só um dos valores.

2. **Percentuais (CritR, CritD):** Também somam. Ex: CritR 10.0% +85.8% = 95.8% total. A base 10.0% é padrão para quase todos heróis.

3. **Técnica para imagens escuras:** Cropar os 45% direitos da imagem (painel de stats) e ampliar 3x com PIL. Senão, dígitos amarelos sobre fundo escuro são ilegíveis — especialmente 3 vs 8, 1 vs 6, 0 vs nada.

4. **Dígitos ambíguos comuns:** 1↔6 (thin line vs round bottom), 3↔8 (one bump vs two), 0 ausente (confundir com "sem bônus"). Usar contexto (ranges conhecidos) como desempate.

5. **Stats que NÃO existem em gear:** ATK Speed, Skill Haste vêm de Runas, não gear. Se aparecem no screenshot, são de rune/resonance.

6. **Accuracy pode ser 0 base + bônus grande** — nunca assumir que ACC 0 base significa "sem ACC". O bônus amarelo é o que importa.

**Why:** Na sessão de 12/Mar/2026, 9 de 20 heróis tinham stats errados por não somar base+bônus, e por dificuldade de ler dígitos amarelos em fundo escuro. Erros de ATK variaram de 400 a 2000+ pontos.

**How to apply:** Sempre que o user pedir para ler stats de screenshots, usar técnica de crop+3x enlarge, somar TODOS os valores, e validar cruzando com ranges esperados.
