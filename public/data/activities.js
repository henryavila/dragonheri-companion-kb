// activities.js — Teams by activity (activity-first data structure)
// Source: community-teams-research.json + mechanics.js + teams.js (S1 tested)
// Updated: 2026-04-10

window.DATA_ACTIVITIES = [
  // ============================================================
  // GEAR DUNGEONS
  // ============================================================
  {
    id: "grave_of_venom",
    name: "Grave of Venom",
    type: "gear_dungeon",
    boss: { name: "Deadly Harpy", element: "Poison" },
    drops: "Defense gear",
    cycle: "18s",
    mechanics: {
      skills: {
        passive: "Shadow Poison — Ao atacar, invoca Poisonous Wisps (adds). 60% chance. Boss ganha 1 stack de Damage Reduction (15%) por cada SHIELD ativo nos adds.",
        skill1: "Poisonous Fletching — Dano AoE + da Shield a TODOS os adds. Cada shield quebrado = 3% Max HP dano no boss.",
        skill2: "Harpys Wrath — AoE global no time + dispela 1 buff de cada heroi.",
        skill3: "Harpys Breath — Single-target devastador: dash + 3 chutes combo. Mira random se boss <2 debuffs, mira tank se >=2 debuffs."
      },
      what_kills: [
        "Shields nos adds nao quebrados = boss acumula DR infinita",
        "Harpys Breath mira DPS/healer se boss tem <2 debuffs",
        "Wisps acumulam se nao morrem = dano crescente"
      ],
      how_to_win: "Quebre shields dos adds (cada = 3% Max HP no boss). Mantenha 2+ debuffs no boss pra Breath mirar o tank. Vinyara ult dispela shields.",
      counters: ["Dispel shields dos adds (Vinyara, Shook)", "Buff Prohibition (Voresh) = adds NAO recebem shields", "2+ debuffs no boss", "AoE pra limpar Wisps"],
      timing: "Vinyara ult APOS Skill 1 do boss (que deu shields pros adds)."
    },
    teams: {
      community: [
        {
          source: "dragonheir.info S4",
          members: [
            { id: 21670, role: "Tank / AoE Heal / Cleanse" },
            { id: 22290, role: "Support / Buff Strip" },
            { id: 20650, role: "Debuffer / ATK Penalty" },
            { id: 23160, role: "Shield Dispel" },
            { id: 20280, role: "DPS" }
          ],
          affinity: "Fire+Poison (Devitalization S6)",
          notes: "Shook dispela shields apos Skill 1. Frurbath ult antes do Skill 3 pra ATK Penalty."
        }
      ],
      custom: [],
      tested: []
    }
  },

  {
    id: "grave_of_curse",
    name: "Grave of Curse",
    type: "gear_dungeon",
    boss: { name: "Blood Prince Xenos", element: "Necrosis" },
    drops: "HP gear",
    cycle: "18s",
    mechanics: {
      skills: {
        passive: "Blood Gush — Todo dano HP que o boss causa ROUBA HP e REDUZ Max HP permanentemente. Shields BLOQUEIAM o drain.",
        skill1: "Rage of Blood — Boss ganha ATK Up massivo + ACC Bonus II. Devastador se nao dispelado.",
        skill2: "Punishment of Blood — Single-target, ROUBA 2 buffs. Dano amplificado se alvo <2 buffs.",
        skill3: "Vampiric Shield — AoE + Stun 5s se herois <2 buffs + boss +20% recharge."
      },
      what_kills: [
        "Max HP drain da passiva Blood Gush — sem counter = morte inevitavel",
        "Rage of Blood nao dispelado = spike de dano letal",
        "Stun 5s com <2 buffs = time parado = wipe"
      ],
      how_to_win: "Tamar Buff Prohibition PREVINE Rage of Blood (ACC 300+ necessario). Felosia shields bloqueiam Max HP drain + 30% DR + Control Immunity.",
      counters: ["Buff Prohibition (Tamar ACC 300+)", "Shields (Felosia — OBRIGATORIA)", "Debuff Immunity (Felosia ou Thia)", "Dispel buffs do boss (Vinyara)"],
      timing: "Com Tamar: auto-battle funciona. Sem Tamar: Vinyara Ult APOS Rage of Blood."
    },
    teams: {
      community: [
        {
          source: "Testado Lv17 (S1)",
          members: [
            { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar" },
            { id: 20690, role: "Healer / Dispel / Invisibility", artifact: "Gatekeeper's Staff" },
            { id: 21390, role: "Shield / 30% DR / Control Immunity", artifact: "Aurelium Vest" },
            { id: 20830, role: "Buff Prohibition / Debuffer", artifact: "Rift Hourglass" },
            { id: 20740, role: "DPS carry / Captain +24% ATK", artifact: "Thunder Deity's Spear" }
          ],
          affinity: "3 Permafrost (Eurion+Felosia+Torrin)",
          notes: "Tamar Buff Prohibition funciona mas tem gap de 8s no ciclo de 18s."
        }
      ],
      custom: [
        {
          name: "Permafrost Invisibility",
          members: [
            { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar" },
            { id: 20770, role: "Support / Dispel / Shield", artifact: "Rift Hourglass" },
            { id: 21030, role: "DPS carry / Frost", artifact: "Eyeball of the Giant" },
            { id: 20920, role: "DPS / Frost enabler", artifact: "Mark of the Ice Calamity" },
            { id: 21050, role: "Invisibility + Debuff Immunity + Heal + Healing Prohibition" }
          ],
          affinity: "5 Permafrost (4 Ice + 1 Necrosis)",
          result: "Lv20 CLEAR (com folga)",
          notes: "Thia resolve 3 mecanicas: Debuff Immunity, Invisibility (15% DR), Healing Prohibition. Upgrade Lv17→Lv20."
        }
      ],
      tested: [
        {
          name: "Anti-Buff Survival",
          members: [
            { id: 20060, role: "Tank / Ally Protection" },
            { id: 20690, role: "Healer / Dispel" },
            { id: 21390, role: "Shield / Control Immunity" },
            { id: 20830, role: "Buff Prohibition" },
            { id: 20740, role: "DPS carry" }
          ],
          result: "Lv17 CLEAR (~10s restantes)",
          notes: "4 support + 1 DPS. Permafrost 3. Lv18 bloqueado por stats."
        }
      ]
    }
  },

  {
    id: "grave_of_rot",
    name: "Grave of Rot",
    type: "gear_dungeon",
    boss: { name: "Colossal Scavenger", element: "Poison" },
    drops: "Accuracy gear",
    cycle: "18s",
    mechanics: {
      skills: {
        passive: "Corrosion — Boss aplica stacks de Corrosion. Stacks altos = one-shot. AoE healing limpa stacks.",
        skill1: "Healing Prohibition AoE — Impede healers de curar. Cleanse imediatamente.",
        skill2: "Stun AoE — Atordoa multiplos herois. Espalhe herois pra reduzir alvos.",
        skill3: "Big Hit — Maior dano da rotacao. Use DMG Reduction antes."
      },
      what_kills: [
        "Healing Prohibition sem cleanse = time morre por atrito",
        "Corrosion stacks acumulam = morte instantanea",
        "Skill 3 sem mitigacao = wipe"
      ],
      how_to_win: "Cleanse Healing Prohibition imediatamente (Torrin). AoE healing constante limpa Corrosion. DMG Reduction antes do Skill 3.",
      counters: ["Debuff Dispel/Immunity (Torrin, Catherine)", "AoE Healing constante", "Espalhar herois (reduz Stun)", "Shield contra Corrosion burst"],
      timing: "DMG Reduction ults ANTES do Skill 3 do boss."
    },
    teams: {
      community: [
        {
          source: "dragonheir.info S4",
          members: [
            { id: 22290, role: "Tank / Support" },
            { id: 23280, role: "AoE Shield" },
            { id: 23160, role: "Shield Dispel" },
            { id: 21670, role: "Cleanse / AoE Heal" },
            { id: 20280, role: "DPS" }
          ],
          affinity: "Mixed",
          notes: "Enna removes Healing Prohibition. Garius needs high RES for Stun."
        }
      ],
      custom: [],
      tested: []
    }
  },

  {
    id: "flame_domain",
    name: "Flame Domain",
    type: "gear_dungeon",
    boss: { name: "Akara", element: "Fire" },
    drops: "Gear (varia)",
    cycle: "18-24s",
    mechanics: {
      skills: {
        passive: "Control Immunity — Boss IMUNE a controle.",
        skill1: "Scorch (2x por rotacao) — Bolas de fogo + SPLASH em herois com Burn + ATK Penalty II.",
        skill2: "Nirvana — Choca Phoenix Eggs. Se Nestling nasce: boss Invisibilidade 12s.",
        skill3: "Fire of Dead Phoenix — AoE + 2 stacks Burn + Control Immunity nos Nestlings."
      },
      what_kills: [
        "Burn splash do Scorch em multiplos herois = cascade AoE",
        "Nestlings vivos buffam boss permanentemente",
        "Gastar ults nas waves 1-2"
      ],
      how_to_win: "Catherine Debuff Immunity previne Burn = sem splash. Mate Nestlings RAPIDO. NAO ataque boss durante Invisibilidade.",
      counters: ["Debuff Immunity AoE (Catherine — core)", "Matar Nestlings rapido (AoE)", "NAO atacar boss durante Invisibilidade"],
      timing: "Catherine ult em ~17s do ciclo (apos 2o Scorch)."
    },
    teams: {
      community: [
        {
          source: "dragonheir.info S4",
          members: [
            { id: 20040, role: "DPS / Lightning" },
            { id: 23210, role: "Debuff Immunity AoE" },
            { id: 23280, role: "DPS / Support" },
            { id: 20130, role: "DPS" },
            { id: 20780, role: "ATK Penalty / Healer" }
          ],
          affinity: "Lightning+Radiance",
          notes: "Catherine ult para Debuff Immunity antes dos ataques do boss."
        }
      ],
      custom: [
        {
          name: "Summon + Imortalidade",
          members: [
            { id: 20420, role: "Debuff Immunity / Heal", artifact: "Mirror of the Living" },
            { id: 20690, role: "Heal / Dispel / Invisibility", artifact: "Gatekeeper's Staff" },
            { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar" },
            { id: 23080, role: "DPS carry / Shadow Demon", artifact: "Great Demon's Skull" },
            { id: 24780, role: "Amplifier / Summon clone" }
          ],
          affinity: "Mixed (Acilia Radiance + Summon Necrosis)",
          result: "Lv18 CLEAR super facil",
          notes: "Acilia Debuff Immunity + Torrin+Eurion imortalidade. Lv14 apertado → Lv18 facil."
        }
      ],
      tested: []
    }
  },

  {
    id: "frost_domain",
    name: "Frost Domain",
    type: "gear_dungeon",
    boss: { name: "Ice Warden", element: "Ice" },
    drops: "Gear (varia)",
    cycle: "18-24s",
    mechanics: {
      skills: {
        passive: "Debuff-to-Shield — Boss GANHA shield quando aplica debuff no time. Feedback loop.",
        skill1: "Dano padrao + aplica debuffs (alimenta a passiva).",
        skill2: "CC forte + debuffs pesados.",
        buff_prohibition: "Boss IMPEDE herois de receber buffs em intervalos.",
        thorn_shield: "Escudo de espinhos que reflete dano."
      },
      what_kills: [
        "Shield do boss gerado por debuffs = boss imortal",
        "Buff Prohibition deixa time exposto",
        "Gastar ults nas waves 1-2"
      ],
      how_to_win: "Catherine Debuff Immunity previne debuffs = boss nao gera shields. Multi-hit quebra espinhos. GUARDE ULTS pra wave 3.",
      counters: ["Debuff Immunity AoE (Catherine)", "Dispel debuffs (Torrin)", "Multi-hit (Garett, Sutha) quebra espinhos", "Shield Dispel no boss"],
      timing: "Guarde TODOS ults pra wave 3. Catherine ult logo apos Skill 2 do boss."
    },
    teams: {
      community: [
        {
          source: "dragonheir.info S4",
          members: [
            { id: 20130, role: "Control Immunity" },
            { id: 23210, role: "Debuff Immunity AoE" },
            { id: 23280, role: "Shield / Buffs" },
            { id: 20040, role: "DPS" },
            { id: 20780, role: "ATK Penalty / Healer" }
          ],
          affinity: "Lightning+Radiance",
          notes: "Lydia Control Immunity. Catherine buffs contra Buff Prohibition."
        }
      ],
      custom: [
        {
          name: "DPS Race Dauntless",
          members: [
            { id: 20740, role: "DPS carry / Captain +24% ATK", artifact: "Thunder Deity's Spear" },
            { id: 21560, role: "DPS burst / ATK Speed", artifact: "Silverstar Horseshoe" },
            { id: 23020, role: "DPS burst / Feather enabler", artifact: "Kui Crown" },
            { id: 20660, role: "DPS / Crit DMG" },
            { id: 20420, role: "Debuff Immunity / Heal", artifact: "Mirror of the Living" }
          ],
          affinity: "5 Resplendence (4 Lightning + 1 Radiance)",
          result: "Lv18 CLEAR",
          notes: "Pure DPS race. 4 Dauntless + Acilia anti-debuff. ZERO healer/tank."
        }
      ],
      tested: []
    }
  },

  {
    id: "tempest_domain",
    name: "Tempest Domain",
    type: "gear_dungeon",
    boss: { name: "Storm Dragon", element: "Lightning" },
    drops: "Gear (varia)",
    cycle: "18s",
    mechanics: {
      skills: {
        passive: "Summons baby dragons mid-fight que CURAM o boss.",
        skill1: "Dano + buff que exige buffing previo.",
        skill2: "AoE + debuffs.",
        skill3: "Major hit."
      },
      what_kills: [
        "Baby dragons vivos = boss regen infinita",
        "Boss escala ao longo da luta",
        "AoE insuficiente = adds vivem"
      ],
      how_to_win: "AoE pra matar baby dragons ASAP. Healing Reduction no boss. ATK Penalty pro survival.",
      counters: ["AoE DPS (kill baby dragons)", "Healing Reduction (Eches)", "ATK Penalty", "Buff antes do Skill 1 do boss"],
      timing: "Meggan buff ANTES do Skill 1 do boss."
    },
    teams: {
      community: [
        {
          source: "dragonheir.info S4",
          members: [
            { id: 21670, role: "Tank / AoE Heal" },
            { id: 22290, role: "DPS / Baby Dragon Killer" },
            { id: 20650, role: "Debuffer / Ult Energy" },
            { id: 20130, role: "Buffer" },
            { id: 20280, role: "DPS / Baby Dragon Killer" }
          ],
          affinity: "Mixed",
          notes: "Voresh + Sigrid focam baby dragons. Meggan buffa antes do Skill 1."
        }
      ],
      custom: [
        {
          name: "Summon Necrosis",
          members: [
            { id: 23080, role: "DPS carry / Shadow Demon AoE", artifact: "Great Demon's Skull" },
            { id: 24780, role: "Amplifier / Summon clone" },
            { id: 22010, role: "Healing Reduction" },
            { id: 20690, role: "Heal / Dispel / Invisibility", artifact: "Gatekeeper's Staff" },
            { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar" }
          ],
          affinity: "5 Permafrost (Necrosis + Ice)",
          result: "Lv15 CLEAR, Lv16 bloqueado",
          notes: "Shadow Demon AoE mata adds. Eches Healing Reduction. Lv16 boss regen demais."
        }
      ],
      tested: []
    }
  },

  {
    id: "heretical_ruins",
    name: "Heretical Ruins",
    type: "gear_dungeon",
    boss: { name: "Dead Phoenix", element: "Fire" },
    drops: "ATK/Crit gear",
    cycle: "24s",
    mechanics: {
      skills: {
        passive: "Control Immunity — Boss IMUNE a controle.",
        skill1: "Scorch (2x por rotacao) — SPLASH em herois com Burn.",
        skill2: "Nirvana — Choca Eggs. Nestlings vivos = boss +1% Max HP/s + Total Damage bonus permanente.",
        skill3: "Fire of Dead Phoenix — AoE + 2 Burn stacks + Control Immunity nos Nestlings."
      },
      what_kills: [
        "Burn splash cascade",
        "Nestlings vivos buffam boss permanentemente",
        "Atacar boss durante Invisibilidade = desperdicio"
      ],
      how_to_win: "Debuff Immunity AoE (Catherine) previne Burn. Mate Nestlings RAPIDO. NAO ataque boss durante Invisibilidade.",
      counters: ["Debuff Immunity AoE (Catherine)", "AoE burst pra Nestlings", "NAO atacar boss durante Invisibilidade"],
      timing: "Catherine ult em ~17s do ciclo (apos 2o Scorch) = cobre Nirvana + Fire."
    },
    teams: {
      community: [],
      custom: [
        {
          name: "Super Ice",
          members: [
            { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar" },
            { id: 20770, role: "Support / Debuff", artifact: "Rift Hourglass" },
            { id: 20920, role: "Frost enabler", artifact: "Mark of the Ice Calamity" },
            { id: 20120, role: "DPS carry", artifact: "Ring of Winter" },
            { id: 21390, role: "Shield / Survival", artifact: "Aurelium Vest" }
          ],
          affinity: "5 Ice",
          result: "Lv11 CLEAR — 2:11",
          notes: "Felosia entrou no lugar do Auster porque versao anterior morria."
        }
      ],
      tested: [
        {
          name: "Super Ice (S1)",
          members: [
            { id: 20060, role: "Tank" }, { id: 20770, role: "Support" },
            { id: 20920, role: "Frost" }, { id: 20120, role: "DPS" }, { id: 21390, role: "Shield" }
          ],
          result: "Lv11 CLEAR — 2:11",
          notes: "Usado tambem na Grand Gladiator Arena."
        }
      ]
    }
  },

  // ============================================================
  // TORRES
  // ============================================================
  {
    id: "fey_meander",
    name: "Fey Meander",
    type: "tower",
    boss: { name: "3 Bosses Rotativos", element: "Poison" },
    drops: "Wyrmarrow, Affinity Solvent, Essence, Scrolls",
    cycle: "Auto-challenge",
    mechanics: {
      skills: {
        boss1: "Lady of Pristine Decay (Ravatrix) — Seed of Corrosion. Tank + debuff removal + AoE heal.",
        boss2: "Lady of Greeneries (Ravatrix) — Poison MASSIVO. #1 causa de wipe. Debuff Immunity OBRIGATORIA.",
        boss3: "Fungal Spider Mother — Skill 2 extremamente perigoso. Shield + ATK Penalty."
      },
      what_kills: [
        "Lady of Greeneries Poison sem Immunity = wipe garantido em andares altos",
        "Herois sub-level em andares 140+",
        "Nao ativar Elemental Affinity"
      ],
      how_to_win: "Catherine Debuff Immunity = mecanica #1. 5 herois mesmo elemento. Food buffs. Swap DPS por support em survival floors.",
      counters: ["Debuff Immunity AoE (Catherine — ESSENCIAL)", "5 herois mesmo elemento (bonus afinidade)", "Frurbath (tank + cleanse + AoE heal)", "Food buffs"],
      timing: "Floor 180: debuffers precisam 270+ ACC, tanks 90k+ HP."
    },
    teams: {
      community: [
        {
          source: "dragonheir.info S3 — vs Lady of Greeneries",
          members: [
            { id: 20420, role: "AoE Heal" },
            { id: 23210, role: "Debuff Immunity AoE (CORE)" },
            { id: 20410, role: "DPS / ATK Aura" }
          ],
          affinity: "Fire+Radiance",
          notes: "Catherine Debuff Immunity = CORE counter. Previne Poison = dano minimo."
        },
        {
          source: "dragonheir.info — Rally comp",
          members: [
            { id: 22290, role: "Tank / DEF" },
            { id: 21680, role: "Healer" },
            { id: 20130, role: "Support" },
            { id: 20300, role: "DPS / Crit DMG Aura" },
            { id: 20110, role: "DPS" }
          ],
          affinity: "Rally",
          notes: "Rally composition. Lorentheel Crit Damage Aura."
        }
      ],
      custom: [],
      tested: []
    }
  },

  {
    id: "fallen_shadow_spire",
    name: "Fallen Shadow Spire",
    type: "tower",
    boss: { name: "Waves de Monstros", element: "Necrosis" },
    drops: "Familiar Eggs, Materiais",
    cycle: "Wave-based",
    mechanics: {
      skills: {
        mode: "Tower Defense — defender stronghold de waves de monstros. Score por kills, bonus por streaks."
      },
      what_kills: ["Enemies escapando = score perdido", "Falta de AoE = waves lentas"],
      how_to_win: "AoE dominante. Clear speed > survivability. Consecutive-kill bonus.",
      counters: ["AoE DPS heroes", "Consistent damage output", "Speed of execution"],
      timing: "N/A — wave-based."
    },
    teams: {
      community: [],
      custom: [],
      tested: []
    }
  },

  // ============================================================
  // PVP
  // ============================================================
  {
    id: "grand_gladiator_arena",
    name: "Grand Gladiator Arena",
    type: "pvp",
    boss: { name: "PvP Assincrono", element: "Radiance" },
    drops: "Wyrmarrow, ranking rewards",
    cycle: "AI vs AI",
    mechanics: {
      skills: {
        mode: "Monte lineup defensivo. Ataque lineups de outros jogadores. Vitoria sobre rank maior = swap de ranks."
      },
      what_kills: [
        "Burst + CC do oponente mata antes dos supports agirem",
        "Frost meta domina high rank",
        "Comp sem sustain = morre na AI"
      ],
      how_to_win: "Herois 5.0 (stats > mecanicas). Vinyara drena ult + Frozen. Voresh strip + Buff Prohibition. Eurion tanque.",
      counters: ["5x herois 5.0 (stats > tudo)", "Vinyara (drena Ult + Frozen)", "Voresh (strip + Buff Prohibition)", "Eurion (Ally Protection + anti-morte)"],
      timing: "10 Champion Invitations/dia. Quick Challenge: vitoria instantanea vs rank menor."
    },
    teams: {
      community: [
        {
          source: "Community meta",
          members: [
            { id: 20740, role: "DPS carry / #1 overall" },
            { id: 20770, role: "Ult drain + Frozen + Shield" },
            { id: 20060, role: "Tank / Ally Protection + anti-morte" },
            { id: 22290, role: "Buff strip + Buff Prohibition" },
            { id: 22230, role: "DPS / Frost chain" }
          ],
          affinity: "5x herois 5.0",
          notes: "Raw stats > mecanicas em early game. Vinyara drena ult + Frozen."
        }
      ],
      custom: [
        {
          name: "Dauntless Burst",
          members: [
            { id: 20740, role: "DPS carry / Captain +24% ATK", artifact: "Thunder Deity's Spear" },
            { id: 21560, role: "DPS burst / ATK Speed", artifact: "Silverstar Horseshoe" },
            { id: 23020, role: "DPS burst / Feather enabler", artifact: "Kui Crown" },
            { id: 20660, role: "DPS / Crit DMG" },
            { id: 20420, role: "Debuff Immunity / Heal", artifact: "Mirror of the Living" }
          ],
          affinity: "5 Resplendence (Dauntless burst)",
          result: "Ativo",
          notes: "Dauntless burst comp. Acilia anti-debuff. Mid/late game dominant."
        }
      ],
      tested: [
        {
          name: "Super Ice (S1)",
          members: [
            { id: 20060, role: "Tank" }, { id: 20770, role: "Support" },
            { id: 20920, role: "Frost" }, { id: 20120, role: "DPS" }, { id: 21390, role: "Shield" }
          ],
          result: "Usado S1",
          notes: "Mesma comp do Heretical Ruins."
        }
      ]
    }
  },

  // ============================================================
  // MAIN
  // ============================================================
  {
    id: "temporal_vortex",
    name: "Temporal Vortex — Dahwan's Realm",
    type: "main",
    boss: { name: "Great River God Dahwan", element: "Multi (3 fases)" },
    drops: "Master Pages, Echoes of Clepsydra, Affinity Solvents",
    cycle: "20min endurance, fase rota a cada 18s via Mist",
    mechanics: {
      skills: {
        mode: "Luta de ENDURANCE. Dano total em 20 min = score. Ranking no servidor = rewards diarios.",
        mist: "Boss comeca com 100 Mist. Dano+buffs = +Mist. Shields+healing+debuffs = -Mist. Fase muda a cada 18s baseado no Mist.",
        fases: ">=140 Mist = Scorching (Enlightenment burst). 61-139 = Merciful (neutro). <=60 = Wrathful (Crit burst).",
        rotativas: "Regras rotativas semanais afetam qual elemento/school tem bonus ou penalty."
      },
      what_kills: [
        "Time morre cedo = DPS parado = score baixo",
        "Elemento/school errado pras regras rotativas",
        "Boss escala ao longo dos 20 min",
        "Mist management errado = nunca atingir a fase favoravel"
      ],
      how_to_win: "1) Entries pre-luta que favorecem seu time. 2) Survival. 3) Mist management (Wrathful p/ Crit, Scorching p/ Poison). 4) Ajustar time semanal.",
      counters: [
        "Dauntless: Nastjenka+DA+Tharivol+Ivellios+Zeffi (5 Vertigo, Wrathful Phase)",
        "Poison: Lothair+Durango+Twitch+Oggok+Frurbath (5 Devitalization, Scorching Phase)",
        "Wild Fire: Flora+Errich+Felicity+Caspar+Acilia (5 Incandescence, Scorching Phase)"
      ],
      timing: "Ajustar composicao semanalmente. Escolher entries que favorecem o Mist target do time."
    },
    teams: {
      community: [],
      custom: [
        "temporal-vortex-dauntless-aggro-s6",
        "temporal-vortex-poison-endurance-s6",
        "temporal-vortex-wild-fire-s6"
      ],
      tested: []
    }
  },

  // ============================================================
  // GROWTH
  // ============================================================
  {
    id: "goblin_lair",
    name: "Goblin Lair",
    type: "growth",
    boss: { name: "6 waves goblins", element: "Poison" },
    drops: "EXP Potions",
    cycle: "Speed clear",
    mechanics: {
      skills: {
        mode: "6 waves de goblins minion. HP baixo, ATK baixo. Speed de clear = eficiencia."
      },
      what_kills: ["Nada — teste de VELOCIDADE, nao sobrevivencia"],
      how_to_win: "AoE puro. Herois com grande area de ataque. Isitarian+Ladehlia sinergia: Shadow Demon = undead summoned -> dragon ataque extra.",
      counters: ["AoE heroes (Ladehlia Shadow Demon, Nastjenka feathers)", "Sinergia Isitarian+Ladehlia", "Sutha +30% ATK Speed aura", "4x reward multiplier"],
      timing: "N/A — auto-battle."
    },
    teams: {
      community: [],
      custom: [],
      tested: []
    }
  }
];
