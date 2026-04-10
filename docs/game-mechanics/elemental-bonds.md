# Elemental Bonds & School Bonds

> **Dois sistemas separados que STACKAM:**
> 1. **Elemental Affinity** — bônus por grupo elemental (ATK/DEF/Element Damage)
> 2. **School Bond** — bônus mecânico por school (Toxin, Support, Wild, etc.)

---

## SISTEMA 1: Elemental Affinity (por grupo elemental)

| Heróis da mesma afinidade | Bônus (ATUAL — Fev/2026) |
|---|---|
| 3 heróis | **+200 ATK, +20 DEF, +200 HP** (flat) |
| 5 heróis | **+200 ATK, +20 DEF, +200 HP** (flat — MESMO que 3!) |

> ⚠️ **ESTADO ATUAL:** Bônus flat, sem diferença entre 3 e 5 heróis.
> Valores escalam com progressão. Ver `docs/game-mechanics/affinity-bonuses.md` para valores atualizados.
> **IMPLICAÇÃO:** Atualmente NÃO há incentivo de afinidade para ir 5 vs 3. School bonds e ratings pesam mais.

### Grupos S4 "Echoes of the Deep"

| Grupo | Elementos | Nome |
|---|---|---|
| **Ulceration** | Fire + Poison | Power of Ulceration |
| **Resplendence** | Lightning + Radiance | Power of Resplendence |
| **Permafrost** | Ice + Necrosis | Power of Permafrost |

Ex: 2 Fire + 1 Poison = 3 Ulceration → +20% ATK/DEF para todos.

---

## SISTEMA 2: School Bonds (elemento NÃO considerado)

> **Dados confirmados pelo jogador in-game (Fev/2026).**

### As 7 Schools

| School | Presente em | Bond (2 heróis) | Bond (3 heróis) | Salto 2→3 |
|---|---|---|---|---|
| **Toxin** | Poison | Poison Pool success rate: **30%** | Poison Pool success rate: **60%** | **GRANDE** (dobra!) |
| **Wild** | Fire | During Burst, ally Wild dice roll result **+2** | During Burst, ally dice **guaranteed max** | **GRANDE** |
| **Frost** | Ice | Frozen lasts **5s** | Frozen 5s + **Inflict Frozen 5s on 1 target at battle start** | **MÉDIO** |
| **Dauntless** | Lightning | Thundercloud has **40%** chance coordinated attack | Thundercloud has **50%** chance coordinated attack | **PEQUENO** (+10%) |
| **Summon** | Necrosis | Summons **Darkflame Phoenix** | Summons **stronger Darkflame Phoenix** | **???** |
| **Rally** | Radiance | Rally allies gain 1 stack at start. Triggers every **30s** | Triggers every **20s** | **PEQUENO** |
| **Support** | **TODOS** | Shield 30s: **10% MAX HP** | Shield 30s: **15% MAX HP** | **PEQUENO** (+5%) |

> **Defense NÃO existe como school.** São apenas 7 schools.
> **Support é CROSS-ELEMENT** — Support de qualquer elemento conta junto para o bond.

### Vale o 3º herói (só pelo bond)?

| School | Vale? | Motivo |
|---|---|---|
| **Toxin** | **SIM** | 30%→60% é core da mecânica Poison |
| **Wild** | **SIM** | +2→max é game-changing em Burst |
| **Frost** | **DEPENDE** | CC grátis no início é bom, não essencial |
| **Dauntless** | **NÃO** | +10% é marginal |
| **Rally** | **NÃO** | 30s→20s é marginal |
| **Support** | **NÃO** | +5% HP é marginal |

---

## Schools de TODOS os Heróis do Henry (por elemento)

> **Fonte: jogador (in-game), Fev/2026**

### POISON
| School | Heróis |
|---|---|
| **Toxin** | Vicana★, Shink, Corrin, Eli, Horace, Noteera, Vethak, Dench, Lorarii |
| **Support** | Garian, Gareth, Sifris, Frurbath, Eches, Letalis, Altin, Heksandra, Sigrid, Jijel |

### NECROSIS
| School | Heróis |
|---|---|
| **Summon** | Ladehlia★, Vasska, Isitarian, Zadok, Eleuia, Tioh, Korth |
| **Support** | Deverick, Estella, Thia, Edgar, Uloar, Fitz, Adrie, Meggan |

### RADIANCE
| School | Heróis |
|---|---|
| **Rally** | Gitouna, Kailes, Tathlyn, Martina, Hegio, Evania, Broll, Arlow, Mulier, Wellby |
| **Support** | Catherine, Clovis, Garius, Dain, Berrik, Quarion, Caledo, Awstin |

### LIGHTNING
| School | Heróis |
|---|---|
| **Dauntless** | Sutha★, Ivellios★, Nimbus, Vani, Schaltar, Altair, Haug, Tauricen, Yagnatz, Immeral |
| **Support** | Nathaniel, Naguk, Lola/Iola, Lydia, Sallyanne, Gerana, Fizzle, Dora, Grover, Irina, Enna |

### ICE
| School | Heróis |
|---|---|
| **Frost** | Hochadir★, Olgan, Rowena, Vidimir, Dorkuraz, Vojeh, Zethos, Wilt, Urzog, Usha |
| **Support** | Vinyara★, Elvis, Voresh, Dallbam, Gardrus, Loris, Gulal, Gusni, Rephe, Hector, Forbrit |

### FIRE
| School | Heróis |
|---|---|
| **Wild** | Felicity★, Errich★, Tonalnan, Alfie, Bronwyn, Thea, Nedda |
| **Support** | SuperYennefer (Adventurer), Liko, Dane, Horrus, Yamyra, Gloin, Zadie, Dubok, Livia |

### Heróis Chegando
| Herói | Elemento | School | Status |
|---|---|---|---|
| **Torrin** | Necrosis | **Support** | Precisa TOP 200 Gladiator Arena — **incerto se/quando chega** |
| **Hvitar** | Ice | **Frost** | Chegando (S-tier) |

---

## Implicações para Team Building

### Support cross-element é poderoso
Como Support conta entre elementos, times mistos podem ativar shield facilmente:
- Ex: Frurbath(Poison Support) + Voresh(Ice Support) = 2 Support → 10% HP shield
- Isso dá survivability a qualquer time misto com 2+ Support

### Torrin é Support, NÃO Summon
- Torrin **NÃO ativa Summon bond** com Ladehlia
- Para Summon bond, Ladehlia precisa de outro Summon (Tioh é o melhor disponível: B-tier)
- Torrin + Ladehlia têm sinergia de COMBATE (heal+invis), mas NÃO de school bond

---
*Última atualização: Fev/2026 — dados de School Bond confirmados pelo jogador in-game*
