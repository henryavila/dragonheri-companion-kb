# Artifacts Strategy — Aprendizados Confirmados

> Padrões para atribuição e upgrade de artefatos. Usar como base para recomendações.

---

## 1. Artifact Matching — Skill do Artefato → Kit do Herói

**O skill do artefato importa MAIS que os stats.** Match o efeito com o que o herói realmente faz:

| Tipo de Dano do Herói | Artefato BiS (Legendary) | Exemplo |
|---|---|---|
| **100% Derivative** | **Vile Ink** (+20% Derivative) | Schaltar (Lightning Shield/Chain/Strike = tudo Derivative) |
| **Passive é o DPS principal** | **Harpy's Nail** (+10% Passive) | Ivellios (follow-up em basics aliados = Passive) |
| **Ult é o burst** | **Eyeball of the Giant** (+10% Ult) | Rowena (Ult 800% em Frosted) |
| **Battle Skill repetitivo** | **Manticore Statue** (+10% Battle) | Isitarian (Battle + Dragon Remnant attacks) |
| **Summoner** | **Scarlet Chess** (+10% summon damage) | Sintrellia/Ladehlia |
| **Wave-clearer (mata mobs)** | **Effigy of Divine Ear** (+10 Ult Energy/kill) | Sigrid (passiva +25 Ult Energy + Effigy = Ult cicla rápido) |
| **Melee DPS (cai HP)** | **Phoenix Feather** (+20% ATK <50% HP) | Durango (multi-hit melee) |
| **Basic attack focused** | **Silverstar Horseshoe** (+25% ATK Speed) | Sutha (mais basics = mais Dauntless procs) |

### Regra: Nunca dar artefato de Ult a herói cujo Ult não é o DPS principal (e vice-versa)

---

## 2. Artifact Upgrade Priority

### Critérios (em ordem):
1. **Rarity:** Mythic escala mais que Legendary (+335 vs +250 ATK max)
2. **Hero frequency:** Mais times = mais impacto por cristal
3. **Role importance:** DPS carry > Tank > Support > Healer
4. **Skill relevance:** Artefato cujo skill escala com refine > artefato de stat stick

### Pattern: Upgrade Mythics primeiro, depois Legendary dos top-frequency heroes

---

## 3. Crystal Budget per Season

- **~80% gastar agora** — cristais NÃO transferem bem entre seasons
- **~12% reserva tática** — para artefato de herói novo (banner/evento)
- **~8% margem** — carry-over mínimo

---

## 4. Freed Artifacts

Quando herói recebe Mythic, o Legendary que ele usava fica LIVRE para reassignar:
- **Phoenix Feather** (Garett → Mythic) → reassignado para Durango
- **Wine of Dragon Blood** (Nastjenka → Mythic) → reassignado para Hochadir
- **Sempre verificar se liberou artefato ao trocar por Mythic**

---

## 5. Artifact Niche Knowledge

| Artefato | Parece bom para | Realmente bom para | Por quê |
|---|---|---|---|
| **Lantern of the Dead** | Ladehlia (summon) | **Premtsa** (sacrifice build) | Trigger: undead MORRE. Ladehlia summons são persistentes (não morrem). Premtsa Ult EXPLODE undead → trigger massivo |
| **Great Demon's Skull** | Qualquer Necrosis | **Ladehlia/Summon team** | Trigger: aliado INVOCA undead. Não precisa morrer |
| **Vile Ink** | "DPS sem crit" | **Derivative specialists** | +20% Derivative = enorme se 100% do dano é Derivative (Schaltar) |
| **Antinaya's Tiara** | Shielder genérico | **Catherine** | Passiva dela: overheal → shield. Tiara buffa esses shields |

---

## 6. Season & Shop Limitations

- **Soul Imprint shop:** Só mostra artefatos S1 (confirmado Fev/2026)
- **S2 Mythics** (Tempest War Drum, Everlasting Diamond): GUARDAR Soul Imprints até ficarem disponíveis
- **dragonheir.info/equipment:** Tem filtros S1/S2/S3/S4. Usar Playwright JS eval (página muito grande para snapshot)
- **Exclusive artifacts:** Só funcionam no herói específico. Sempre superiores quando disponíveis (ex: Arbiter's Pendant > Thunder Deity's Spear para Nastjenka)
