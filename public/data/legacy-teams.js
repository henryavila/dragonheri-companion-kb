// teams.js — Rebuilt from real results only
// Legacy dataset preserved in docs/backups/2026-03-16-teams-pre-reset.js
//
// NOTA S6 (Abr/2026): Afinidades mudaram!
// S1: Permafrost(Ice+Necro), Ulceration(Poison+Fire), Resplendence(Lightning+Radiance)
// S6: Devitalization(Ice+Poison), Incandescence(Fire+Radiance), Vertigo(Lightning+Necrosis)
// Times abaixo usam nomes S1 nos campos "affinity". Os HEROIS e ELEMENTOS sao os mesmos,
// apenas os NOMES das afinidades mudaram. TODO: Reavaliar composicoes cross-element para S6.

window.DATA_TEAMS = [
  {
    id: "heretical-ruins-lv11-survival",
    activity: "Heretical Ruins",
    activities: ["Heretical Ruins", "Grand Gladiator Arena"],
    name: "Super Ice",
    encounter: {
      mode: "stage",
      stage: 11
    },
    affinity: "5 Ice",
    status: "tested",
    dps_result: "Lv11 CLEAR — 2:11",
    result: {
      type: "clear_time",
      clear: true,
      stage: 11,
      time_seconds: 131,
      time_display: "2:11"
    },
    score: null,
    members: [
      { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar", artifact_level: 20 },
      { id: 20770, role: "Support / Debuff", artifact: "Rift Hourglass", artifact_level: 20 },
      { id: 20920, role: "Frost enabler", artifact: "Mark of the Ice Calamity", artifact_level: 20 },
      { id: 20120, role: "DPS carry", artifact: "Ring of Winter", artifact_level: 20 },
      { id: 21390, role: "Shield / Survival", artifact: "Aurelium Vest", artifact_level: 20 }
    ],
    tests: [
      {
        desc: "Heretical Ruins Lv11",
        result: "2:11",
        notes: "Clear real confirmado. Felosia entrou no lugar do Auster porque a versao com Auster estava morrendo."
      }
    ],
    notes: "Usado em Heretical Ruins e tambem na Grand Gladiator Arena. Em Heretical Ruins Lv11, concluiu em 2:11. Felosia foi necessaria no lugar do Auster porque a versao anterior morria."
  },
  {
    id: "planar-expedition-symbiotic-giga-elementa-lv220-fight-1",
    activity: "Planar Expedition",
    activities: ["Planar Expedition"],
    name: "Ice Elite",
    encounter: {
      mode: "guild_boss",
      boss: "Symbiotic Giga Elementa",
      level: 220,
      fight: 1,
      total_fights: 2
    },
    affinity: "5 Ice",
    status: "tested",
    dps_result: "11.199 pontos",
    result: {
      type: "points",
      points: 11199,
      points_display: "11.199"
    },
    score: null,
    members: [
      { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar", artifact_level: 20 },
      { id: 21030, role: "DPS / Team buffer", artifact: "Eyeball of the Giant", artifact_level: 20 },
      { id: 20120, role: "DPS carry", artifact: "Ring of Winter", artifact_level: 20 },
      { id: 20920, role: "Frost enabler", artifact: "Mark of the Ice Calamity", artifact_level: 20 },
      { id: 21390, role: "Shield / Survival", artifact: "Aurelium Vest", artifact_level: 20 }
    ],
    tests: [
      {
        desc: "Luta 1/2 — Symbiotic Giga Elementa (Lv220)",
        result: "11.199 pontos",
        notes: "Planar Expedition: primeira de 2 lutas no mesmo boss com o time Ice Elite. Melhor resultado atualizado em 2026-03-23."
      }
    ],
    mechanics: {
      boss: "Symbiotic Giga Elementa (Lv220)"
    },
    notes: "Megaevento da guilda. Esta foi a luta 1/2 contra o mesmo boss, sem repetir time. Entre as duas composicoes testadas nesta rodada, Ice Elite foi a mais consistente e subiu para 11.199 pontos."
  },
  {
    id: "planar-expedition-symbiotic-giga-elementa-lv220-fight-2",
    activity: "Planar Expedition",
    activities: ["Planar Expedition"],
    name: "Vortex",
    encounter: {
      mode: "guild_boss",
      boss: "Symbiotic Giga Elementa",
      level: 220,
      fight: 2,
      total_fights: 2
    },
    affinity: "5 Resplendence | 3 Dauntless + 2 Support",
    status: "tested",
    dps_result: "7.141 pontos",
    result: {
      type: "points",
      points: 7141,
      points_display: "7.141"
    },
    score: null,
    members: [
      { id: 20740, role: "Captain / DPS carry", artifact: "Thunder Deity's Spear" },
      { id: 23020, role: "DPS burst / Feather enabler", artifact: "Kui Crown" },
      { id: 20420, role: "Frontline sustain / Anti-debuff", artifact: "Mirror of the Living" },
      { id: 20890, role: "DPS single-target / ATK Speed ramp", artifact: "Artefato nao registrado" },
      { id: 23280, role: "Shield support / Sustain", artifact: "Artefato nao registrado" }
    ],
    tests: [
      {
        desc: "Luta 2/2 — Symbiotic Giga Elementa (Lv220)",
        result: "7.141 pontos",
        notes: "Poison Full ficou abaixo de 6k e nao foi salvo nesta rodada. O time Vortex (Nastjenka + Divine Ascetic + Acilia + Tharivol + Nathaniel) virou o registro oficial da luta 2 em 2026-03-23. Em 2026-03-24, o jogador reportou 13.250 pontos com a versao nova do Vortex, mas o lineup detalhado ainda nao foi normalizado neste dataset."
      }
    ],
    mechanics: {
      boss: "Symbiotic Giga Elementa (Lv220)"
    },
    notes: "Megaevento da guilda. Esta foi a luta 2/2 contra o mesmo boss, sem repetir time. O shell Poison Full testado na mesma janela ficou abaixo de 6k e nao foi mantido. O time Vortex foi salvo com 7.141 pontos como melhor segunda composicao desta rodada. Esse snapshot representa a versao antiga do lineup; em 2026-03-24 foi reportado um novo Vortex com 13.250 pontos, ainda pendente de normalizacao completa."
  },
  {
    id: "grave-of-curse-lv17-anti-buff",
    activity: "Grave of Curse",
    activities: ["Grave of Curse"],
    name: "Anti-Buff Survival",
    encounter: {
      mode: "stage",
      stage: 17
    },
    affinity: "3 Permafrost (Eurion+Felosia+Torrin)",
    status: "tested",
    dps_result: "Lv17 CLEAR (~10s restantes)",
    result: {
      type: "clear_time",
      clear: true,
      stage: 17,
      time_seconds: null,
      time_display: "~10s restantes"
    },
    score: null,
    members: [
      { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar", artifact_level: 20 },
      { id: 20690, role: "Healer / Dispel / Invisibility", artifact: "Gatekeeper's Staff", artifact_level: 20 },
      { id: 21390, role: "Shield / 30% DR / Control Immunity", artifact: "Aurelium Vest", artifact_level: 20 },
      { id: 20830, role: "Buff Prohibition / Debuffer", artifact: "Rift Hourglass", artifact_level: 20 },
      { id: 20740, role: "DPS carry / Captain +24% ATK", artifact: "Thunder Deity's Spear", artifact_level: 20 }
    ],
    tests: [
      {
        desc: "Grave of Curse Lv17",
        result: "CLEAR (~10s restantes)",
        notes: "Todos vivos. Nastjenka com ~50% Max HP drenado por Blood Gush. Tamar Buff Prohibition funciona mas tem gap de 8s no ciclo de 18s — boss recebe ATK Up nos gaps. Manual play recomendado para sincronizar Tamar Ult com Rage of Blood. Lv18 bloqueado por stat check (DPS insuficiente)."
      }
    ],
    mechanics: {
      boss: "Blood Prince Xenos (Necrosis)",
      cycle: "18s (skill a cada 6s)",
      key_mechanic: "Blood Gush drena Max HP permanentemente em todo HP damage. Shields BLOQUEIAM o drain. Buff Prohibition previne ATK Up do boss.",
      timing: "Tamar Ult 1-2s ANTES do Rage of Blood. Felosia Ult ANTES do Vampiric Shield (Stun). Eurion Ult ASAP. Torrin Ult quando Eurion <40% HP."
    },
    notes: "4 support + 1 DPS. Cada slot resolve mecanica especifica: Eurion (Ally Protection), Torrin (heal+dispel), Felosia (shield anti-Blood Gush + Control Immunity anti-Stun), Tamar (Buff Prohibition anti-Rage of Blood). Permafrost 3 ativado. Lv18 requer melhores stats (CritR 80%+, gear, artefatos)."
  },
  {
    id: "pillar-of-permafrost-ice-survival",
    activity: "Pillar of Permafrost",
    activities: ["Pillar of Permafrost"],
    name: "Ice Survival",
    encounter: {
      mode: "stage"
    },
    affinity: "5 Ice (Permafrost)",
    status: "tested",
    dps_result: null,
    result: {
      type: "clear",
      clear: true
    },
    score: null,
    members: [
      { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar", artifact_level: 20 },
      { id: 21030, role: "DPS / Frost chain", artifact: "Eyeball of the Giant", artifact_level: 20 },
      { id: 20920, role: "Frost enabler", artifact: "Mark of the Ice Calamity", artifact_level: 20 },
      { id: 20770, role: "Support / Dispel / Shield", artifact: "Ring of Winter", artifact_level: 20 },
      { id: 21390, role: "Shield / Survival", artifact: "Aurelium Vest", artifact_level: 20 }
    ],
    tests: [
      {
        desc: "Pillar of Permafrost",
        result: "CLEAR",
        notes: "Variante do Ice Elite com Vinyara no lugar de Hvitar. Mais defensivo — Vinyara traz dispel + shield + auto-resist Stun."
      }
    ],
    notes: "Variante defensiva do Ice Elite para Pillar of Permafrost. Vinyara substitui Hvitar: troca DPS por dispel/shield/CC immunity. 5 Ice = Permafrost completo. Mesmos artefatos do Ice Elite."
  },
  {
    id: "continental-boss-twitch-dauntless-sustain",
    activity: "Continental Boss",
    activities: ["Continental Boss", "Shadow World Expedition"],
    name: "Dauntless Sustain",
    encounter: {
      mode: "continental_boss",
      boss: "Twitch"
    },
    affinity: "5 Resplendence | 3 Dauntless + 1 Support + 1 Dauntless",
    status: "tested",
    dps_result: "177.000.000",
    result: {
      type: "damage",
      damage: 177000000,
      damage_display: "177.000.000"
    },
    score: 177000000,
    members: [
      { id: 20740, role: "Captain / DPS carry", artifact: "Thunder Deity's Spear" },
      { id: 23020, role: "DPS burst / Feather enabler", artifact: "Kui Crown" },
      { id: 20420, role: "Frontline sustain / Anti-debuff", artifact: "Mirror of the Living" },
      { id: 20890, role: "DPS single-target / ATK Speed ramp" },
      { id: 21560, role: "DPS burst / ATK Speed", artifact: "Silverstar Horseshoe" }
    ],
    tests: [
      {
        desc: "Continental Boss - Twitch",
        result: "64.916.184",
        notes: "Composicao nova: Tamar -> Acilia e Garett -> Tharivol. Primeira rodada bateu ~51.7M. Ajuste decisivo de posicionamento: Nastjenka saiu da frente do boss e trocou com a Acilia. Posicionamento salvo: Acilia na frente; Tharivol no fundo, atras da Acilia."
      },
      {
        desc: "Shadow World Expedition - Twitch",
        result: "177.000.000",
        notes: "Mesmo lineup (Nastjenka+DA+Acilia+Tharivol+Sutha). Score salta de 64.9M para 177M (+172%). Shadow World Expedition substitui Continental Challenge. Salvo em 2026-03-26."
      }
    ],
    mechanics: {
      boss: "Twitch",
      key_mechanic: "Pune comps de debuff. O shell Dauntless funciona melhor com sustain leve e carry protegido do foco inicial.",
      positioning: "Acilia na frente. Nastjenka fora da linha direta do boss. Tharivol no fundo, atras da Acilia."
    },
    notes: "Benchmark atualizado em Shadow World Expedition (2026-03-26). Mesmo lineup confirmado: Nastjenka + Divine Ascetic + Acilia + Tharivol + Sutha. Score: 64.9M → 177M."
  },
  {
    id: "continental-boss-thelandor-summon-army",
    activity: "Continental Boss",
    activities: ["Continental Boss", "Shadow World Expedition"],
    name: "Summon Army",
    encounter: {
      mode: "continental_boss",
      boss: "Thelandor"
    },
    affinity: "5 Permafrost (5 Necrosis) | 3 Summon",
    status: "tested",
    dps_result: "46.800.000",
    result: {
      type: "damage",
      damage: 46800000,
      damage_display: "46.800.000"
    },
    score: 46800000,
    members: [
      { id: 23080, role: "Captain / DPS carry" },
      { id: 24780, role: "Amplifier / Summon clone" },
      { id: 20690, role: "Healer / Dispel / Invisibility" },
      { id: 21690, role: "DPS summon" },
      { id: 22180, role: "Summon DPS / ATK Up summons" }
    ],
    tests: [
      {
        desc: "Continental Boss - Thelandor",
        result: "31.588.324",
        notes: "Mesmo time do save anterior de 26.1M. Sem troca de lineup; novo score salvo em 2026-03-20."
      },
      {
        desc: "Shadow World Expedition - Thelandor (novo lineup)",
        result: "46.800.000",
        notes: "Lineup refatorado: Ghul'ende sai, entram Torrin (heal/dispel) e Irzillas (Summon DPS + ATK Up). 3 Summon school (Ladehlia+Isitarian+Irzillas). Irzillas amplifica undead summons (+30% DMG Up) e escala battle skill com summons em campo. Score sobe de 31.5M para 46.8M. Salvo em 2026-03-27."
      }
    ],
    mechanics: {
      boss: "Thelandor",
      key_mechanic: "O boss recompensa summon com ATK alto. Core triplo Summon: Ladehlia + Isitarian + Irzillas. Irzillas Ult buffa summons (+20% ATK Up Summon allies, +30% DMG Up undead summons). Torrin garante survival (heal + dispel + invisibility).",
      positioning: "DPS summon no fundo. Torrin protegido."
    },
    notes: "Benchmark atualizado em Shadow World Expedition (2026-03-27). Lineup: Ladehlia+Sintrellia+Torrin+Isitarian+Irzillas. Triple Summon school. Score: 31.5M → 46.8M (+48%). Eurion NAO usado (reservado para Vasska Ice Elite)."
  },
  {
    id: "continental-boss-tamar-full-poison",
    activity: "Continental Boss",
    activities: ["Continental Boss", "Shadow World Expedition"],
    name: "Full Poison",
    encounter: {
      mode: "continental_boss",
      boss: "Tamar"
    },
    affinity: "5 Ulceration | 3 Toxin/Poison",
    status: "tested",
    dps_result: "86.000.000",
    result: {
      type: "damage",
      damage: 86000000,
      damage_display: "86.000.000"
    },
    score: 86000000,
    members: [
      { id: 20200, role: "DPS carry / Poison core" },
      { id: 20670, role: "DPS carry / Poison application" },
      { id: 22010, role: "DPS carry / Poison feedback" },
      { id: 21010, role: "Tank / Immortality anchor" },
      { id: 21700, role: "Heal / Damage amplifier" }
    ],
    tests: [
      {
        desc: "Continental Boss - Tamar",
        result: "48.303.293",
        notes: "Full Poison mantido como shell da luta. Novo score salvo em 2026-03-20."
      },
      {
        desc: "Shadow World Expedition - Tamar",
        result: "86.000.000",
        notes: "Mesmo lineup Full Poison. Score salta de 48.3M para 86M (+78%). Shadow World Expedition. Salvo em 2026-03-26."
      }
    ],
    mechanics: {
      boss: "Tamar",
      key_mechanic: "O boss escala com debuffs. O shell Full Poison segue sendo a resposta natural para acumular dano ao longo da luta.",
      positioning: "Twitch protegido atras do Oggok; Ergander ancora a frente."
    },
    notes: "Benchmark atualizado em Shadow World Expedition (2026-03-26). Mesmo lineup Full Poison. Score: 48.3M → 86M."
  },
  {
    id: "continental-boss-vinyara-fire-wild-brody",
    activity: "Continental Boss",
    activities: ["Continental Boss", "Shadow World Expedition"],
    name: "Fire Wild + Brody",
    encounter: {
      mode: "continental_boss",
      boss: "Vinyara"
    },
    affinity: "5 Wildfire | Wild",
    status: "tested",
    dps_result: "18.000.000",
    result: {
      type: "damage",
      damage: 18000000,
      damage_display: "18.000.000"
    },
    score: 18000000,
    members: [
      { id: 20410, role: "Captain / DPS #1 / Wild core" },
      { id: 20360, role: "Shield breaker / Utility frontline" },
      { id: 20400, role: "AoE fire / Wild amplifier" },
      { id: 21970, role: "Wild DPS / DEF ignore" },
      { id: 20810, role: "Boss-killer / Shield ignore" }
    ],
    tests: [
      {
        desc: "Continental Boss - Vinyara",
        result: "13.844.586",
        notes: "Time confirmado depois pelo jogador: Flora + Brody + Errich + Caspar + Felicity."
      },
      {
        desc: "Universal Challenge - Vinyara",
        result: "18.000.000",
        notes: "Mesmo time Fire Wild + Brody. Score sobe de 13.8M para 18M (+30%). Salvo em 2026-03-27."
      }
    ],
    mechanics: {
      boss: "Vinyara",
      key_mechanic: "O boss ganha shield forte, DEF Up e Damage Reduction. Brody e a peca chave para quebrar o shield e abrir janela de dano.",
      positioning: "Brody isolado na frente; 4 DPS no fundo bem espacados."
    },
    notes: "Benchmark real salvo em 2026-03-20 para o Vinyara. Mantem o shell Fire/Wild com Brody que ja estava mapeado como resposta natural do boss."
  },
  {
    id: "continental-boss-vasska-ice-elite",
    activity: "Continental Boss",
    activities: ["Continental Boss", "Shadow World Expedition"],
    name: "Ice Elite",
    encounter: {
      mode: "continental_boss",
      boss: "Vasska"
    },
    affinity: "5 Ice (Permafrost)",
    status: "tested",
    dps_result: "117.000.000",
    result: {
      type: "damage",
      damage: 117000000,
      damage_display: "117.000.000"
    },
    score: 117000000,
    members: [
      { id: 22230, role: "DPS Ice / Frost detonator" },
      { id: 21030, role: "DPS / Frost chain", artifact: "Eyeball of the Giant" },
      { id: 20120, role: "DPS carry", artifact: "Ring of Winter" },
      { id: 20920, role: "Frost enabler", artifact: "Mark of the Ice Calamity" },
      { id: 21390, role: "Shield / Survival", artifact: "Aurelium Vest" }
    ],
    tests: [
      {
        desc: "Shadow World Expedition - Vasska",
        result: "98.000.000",
        notes: "Ice Elite confirmado: Eurion+Auster+Hvitar+Lossenia+Felosia. Score salta de 40.7M (Continental) para 98M (+140%). Salvo em 2026-03-26."
      },
      {
        desc: "Universal Challenge - Vasska (Eurion → Hochadir)",
        result: "117.000.000",
        notes: "Eurion substituido por Hochadir: +19M (+19%). 4 DPS + 1 Support (Felosia) > 3 DPS + 1 Tank + 1 Support. Eurion liberado para outro boss. Salvo em 2026-03-27."
      }
    ],
    mechanics: {
      boss: "Vasska",
      key_mechanic: "Frost chain elite: Lossenia+Auster+Hvitar+Hochadir. 4 Ice DPS + Felosia survival. Raw damage bruto > debuff stacking neste boss."
    },
    notes: "Vasska atualizado no Universal Challenge (2026-03-27). Eurion trocado por Hochadir: 4 Frost DPS > 3 DPS + Tank. Score: 98M → 117M (+19%). Eurion liberado para outro boss."
  },
  {
    id: "continental-boss-khrysos-rally-resplendence",
    activity: "Continental Boss",
    activities: ["Continental Boss", "Shadow World Expedition"],
    name: "Rally Resplendence",
    encounter: {
      mode: "continental_boss",
      boss: "Khrysos"
    },
    affinity: "5 Resplendence (3 Radiance + 2 Lightning) | 3 Rally",
    status: "tested",
    dps_result: "7.600.000",
    result: {
      type: "damage",
      damage: 7600000,
      damage_display: "7.600.000"
    },
    score: 7600000,
    members: [
      { id: 20300, role: "Captain / Rally DPS (+24% CritDMG all battles)" },
      { id: 20840, role: "DPS carry / Rally consumer (AC SS, DI#15)" },
      { id: 20320, role: "Rally DPS / Stack generator" },
      { id: 22040, role: "Shield strip (totem 75%/s) / DEF Up II / Invincibility" },
      { id: 20830, role: "Buff Prohibition / Anti-shield" }
    ],
    tests: [
      {
        desc: "Universal Challenge - Khrysos (talentos corrigidos)",
        result: "7.600.000",
        notes: "Primeiro resultado real: 3M com talentos nao maxados. Apos maxar talentos: 7.6M. Testou Eurion no lugar de Tamar (1.7M) e Eurion no lugar de Zeffi (2.21M) — ambos piores. Anti-shield (Tamar+Zeffi) > tank (Eurion) neste boss. Salvo em 2026-03-27."
      }
    ],
    mechanics: {
      boss: "Khrysos",
      key_mechanic: "Boss usa shields + basic attacks ativam dano extra. Double anti-shield: Tamar Buff Prohibition impede criacao, Zeffi totem dispela o que passar. Thelendor com 3 Rally stacks ignora 30% DEF. Eurion TESTADO e DESCARTADO — perde DPS sem ganhar survival suficiente.",
      positioning: "Testar: Huberg/Tamar na frente, Thelendor e Lorentheel no fundo protegidos, Zeffi no meio."
    },
    notes: "Rally Resplendence confirmado para Khrysos (2026-03-27). Score: 7.6M (3M antes de maxar talentos). Eurion testado em 2 slots e descartado (1.7M e 2.2M). Anti-shield utility (Tamar+Zeffi) essencial neste boss."
  },
  {
    id: "grave-of-curse-lv20-permafrost",
    activity: "Grave of Curse",
    activities: ["Grave of Curse"],
    name: "Permafrost Invisibility",
    encounter: {
      mode: "stage",
      stage: 20
    },
    affinity: "5 Permafrost (4 Ice + 1 Necrosis)",
    status: "tested",
    dps_result: "Lv20 CLEAR (com folga)",
    result: {
      type: "clear_time",
      clear: true,
      stage: 20,
      time_seconds: null,
      time_display: "com folga"
    },
    score: null,
    members: [
      { id: 20060, role: "Tank / Ally Protection", artifact: "Drugo's Blast Jar", artifact_level: 20 },
      { id: 20770, role: "Support / Dispel / Shield", artifact: "Rift Hourglass", artifact_level: 20 },
      { id: 21030, role: "DPS carry / Frost", artifact: "Eyeball of the Giant", artifact_level: 20 },
      { id: 20920, role: "DPS / Frost enabler", artifact: "Mark of the Ice Calamity", artifact_level: 20 },
      { id: 21050, role: "Invisibility + Debuff Immunity + Heal + Healing Prohibition" }
    ],
    tests: [
      {
        desc: "Grave of Curse Lv20",
        result: "CLEAR (com folga)",
        notes: "Evolucao do time Lv17 (Anti-Buff Survival). Troca de Tamar+Nastjenka+Felosia+Torrin por Vinyara+Auster+Lossenia+Thia. 5 Permafrost ativado. Thia resolve 3 mecanicas: Debuff Immunity (anti-Stun), Invisibility (15% DR passiva), Healing Prohibition no boss. Lv17→Lv20 = 3 stages de avanco. Salvo em 2026-04-01."
      }
    ],
    mechanics: {
      boss: "Blood Prince Xenos (Necrosis)",
      cycle: "18s (skill a cada 6s)",
      key_mechanic: "Blood Gush drena Max HP em todo dano HP. Shields e Invisibility reduzem o drain. Thia Debuff Immunity bloqueia Stun 5s. Healing Prohibition impede boss de se curar.",
      timing: "Thia Ult ANTES do Vampiric Shield (Stun). Vinyara dispela buffs residuais."
    },
    notes: "5 Permafrost com 2 DPS (Auster+Lossenia) + Thia como support nicho. Thia (Epic B-tier) supera expectativa por sinergia direta com mecanicas do boss — confirma principio 'skill mechanic > tier'. Upgrade massivo vs time Lv17 (1 DPS → 2 DPS + survival via Invisibility)."
  },

  // ============================================================
  // TEMPORAL VORTEX — Dahwan's Realm (Abr/2026)
  // ============================================================
  {
    id: "temporal-vortex-dauntless-aggro-s6",
    activity: "Temporal Vortex",
    activities: ["Temporal Vortex"],
    name: "Dauntless Aggro S6",
    encounter: {
      mode: "endurance",
      boss: "Great River God Dahwan",
      duracao: "20 min",
      mist_target: "Wrathful (Mist <= 60)"
    },
    affinity: "5 Vertigo (5 Lightning) | 4 Dauntless",
    status: "recommended",
    dps_result: null,
    result: null,
    score: null,
    members: [
      { id: 20740, role: "Captain / DPS carry (+24% ATK all)", artifact: "Thunder Deity's Spear" },
      { id: 20890, role: "DPS single-target / ATK Speed ramp / Ignora Immortality" },
      { id: 20160, role: "DPS / Ult ignora 100% DEF" },
      { id: 23020, role: "Dauntless enabler / Obsession stacks / basic attack = feather Nastjenka", artifact: "Kui Crown" },
      { id: 22040, role: "Support / Invincibility <30% HP / DEF Up II / totem strip buffs" }
    ],
    tests: [],
    mechanics: {
      boss: "Great River God Dahwan (3 formas via Mist)",
      mist_strategy: "Zeffi healing/shield REMOVE Mist → empurra para Wrathful Phase (Mist <= 60). Na Wrathful, boss toma dano direto AUMENTADO por 15s = janela de Crit burst do Dauntless.",
      key_mechanic: "4 Dauntless = 50% Thundercloud (DPS massivo). 5 Lightning = 5 Vertigo (+20% Elemental DMG, +2% DR). Tharivol Battle 300% IGNORA IMMORTALITY = DPS consistente mesmo em fases defensivas do boss.",
      positioning: "Zeffi na frente (tankar Shorebreaker Strike). Nastjenka fora da linha direta do boss. Tharivol e Ivellios no fundo.",
      entries: "Priorizar: basic attack bonus, single hit/Crit damage, debuff scaling no boss. Evitar: buff amplification nos aliados (gera Mist demais)."
    },
    notes: "Evolucao do time que fez 31.3M em S1. Upgrades S6: Ivellios (5.0 Vortex) substitui Sutha (4.0). Zeffi substitui Acilia = completa 5 Vertigo (+20% Elemental DMG). Se survival insuficiente com Zeffi, trocar por Acilia (perde 5 Vertigo, ganha sustain testado). Baseline anterior: 31.3M com Acilia."
  },
  {
    id: "temporal-vortex-poison-endurance-s6",
    activity: "Temporal Vortex",
    activities: ["Temporal Vortex"],
    name: "Poison Endurance S6",
    encounter: {
      mode: "endurance",
      boss: "Great River God Dahwan",
      duracao: "20 min",
      mist_target: "Scorching (Mist >= 140)"
    },
    affinity: "5 Devitalization (5 Poison) | 3 Poison school",
    status: "recommended",
    dps_result: null,
    result: null,
    score: null,
    members: [
      { id: 20200, role: "Captain / DPS carry (+48 Enlightenment all)" },
      { id: 20670, role: "DPS / Multi-hit + AoE Poison + marca alvo" },
      { id: 22010, role: "DPS carry #1 (62k/s confirmado) / Poison feedback loop" },
      { id: 21700, role: "Tank-healer / Immortality AoE 5s + heal + dispel" },
      { id: 21670, role: "Tank / cleanse + AoE heal + ATK Penalty" }
    ],
    tests: [],
    mechanics: {
      boss: "Great River God Dahwan (3 formas via Mist)",
      mist_strategy: "Poison DoT constante GERA Mist rapidamente → empurra para Scorching Phase (Mist >= 140). Na Scorching, boss toma Enlightenment/Derivative damage AUMENTADO por 15s = janela de burst exponencial para Poison.",
      key_mechanic: "3 Poison school = 60% Poison Pool (DoT amplificado). Lothair captain +48 Enlightenment = boost massivo para Derivative damage. Twitch+Lothair = feedback loop multiplicativo (Twitch escala exponencialmente com Poison stacks). Oggok Immortality AoE segura time durante Abyss of Chaos (5 Poison hits globais na Scorching).",
      positioning: "Frurbath na frente. Twitch atras do Oggok (protecao extra). DPS no fundo.",
      entries: "Priorizar: max stacks Poison/Burn, Derivative/Enlightenment bonus, debuff scaling (+dano por debuff). Evitar: healing/shield amplification (remove Mist, afasta de Scorching)."
    },
    notes: "Composicao EXATA do guia S3 de dragonheir.info (Poison Damage Comp). Mesmo core que fez 86M no Continental Boss Tamar. Alternativa: Corrin (5.0 Vortex, Epic) no lugar de Twitch se precisar de Skill Haste damage (Corrin precisa Skill Haste >150). Vicana (4.5 Vortex) como 6a opcao. Ideal para semanas com Poison/Derivative bonus."
  },
  {
    id: "temporal-vortex-wild-fire-s6",
    activity: "Temporal Vortex",
    activities: ["Temporal Vortex"],
    name: "Wild Fire S6",
    encounter: {
      mode: "endurance",
      boss: "Great River God Dahwan",
      duracao: "20 min",
      mist_target: "Scorching (Mist >= 140)"
    },
    affinity: "5 Incandescence (4 Fire + 1 Radiance) | Wild school",
    status: "recommended",
    dps_result: null,
    result: null,
    score: null,
    members: [
      { id: 20410, role: "Captain / DPS carry (+24% ATK all) / Vortex 16 stacks Wild = 900% explosion" },
      { id: 20400, role: "DPS / AoE Fire + Meteorite Rain + +2 dice max para Wild" },
      { id: 20810, role: "DPS / Recast em dice >=4 (ate 3x) + multi-beam Ult" },
      { id: 21970, role: "DPS / Absurd Charade ignora DEF crescente / throwing knives" },
      { id: 20420, role: "Support / Sustain + anti-debuff / 5.0 Vortex" }
    ],
    tests: [],
    mechanics: {
      boss: "Great River God Dahwan (3 formas via Mist)",
      mist_strategy: "Wild Fire gera muito dano burst → GERA Mist rapido → empurra para Scorching Phase. Flora Vortex explosion 900% = hit massivo na janela Scorching.",
      key_mechanic: "Wild school feedback loop: Errich +2 dice max → Flora familiar ataca em dice >=5 → Felicity recast 3x em dice >=4 → Caspar ignora DEF. 4 Fire + 1 Radiance = 5 Incandescence (+20% Elemental DMG, +2% DR).",
      positioning: "Acilia na frente (tankar). Flora e Felicity no fundo. Caspar e Errich no meio.",
      entries: "Priorizar: Derivative damage, single hit damage boost (Flora explosion), basic attack bonus (Wild dice = basic). Evitar: healing/shield amplification."
    },
    notes: "Score anterior: 19M com Felosia (S1). S6: Acilia substitui Felosia como sustain solo. Alternativa: Tonalnan (4.5 Vortex) no lugar de Caspar para combo Felicity (+5 hits = +20% ATK Up + +5% Crit DMG por dice >=5). Ideal para semanas com Fire/Derivative bonus. Adolphus (4.5 Vortex, Fire Epic) como opcao de support extra se Acilia insuficiente."
  },

  // ============================================================
  // FEY MEANDER (Abr/2026)
  // ============================================================
  {
    id: "fey-meander-aura-s6",
    activity: "Fey Meander",
    activities: ["Fey Meander"],
    name: "Aura + Acilia",
    encounter: {
      mode: "tower",
      boss: "Torre auto-challenge (300 andares)"
    },
    affinity: "5 Incandescence (5 Radiance) | 4 Aura",
    status: "tested",
    dps_result: "Destruindo (clear facil)",
    result: {
      type: "clear",
      clear: true
    },
    score: null,
    members: [
      { id: 22800, role: "DPS burst / Aura Energy scaling / Crit DMG aura captain" },
      { id: 22790, role: "Amplifier / Aura Energy support" },
      { id: 21500, role: "Amplifier / Healer / Aura synergy" },
      { id: 23820, role: "Amplifier / Bond deploy (+20% Max HP, +20% DMG Bonus) / Shield AoE" },
      { id: 20420, role: "Support / Sustain + anti-debuff / 5.0 universal" }
    ],
    tests: [
      {
        desc: "Fey Meander (progressao ativa)",
        result: "Clear facil — destruindo",
        notes: "Time Aura S6 completo (sem Shahla). 4 Legendary Aura + Acilia sustain. 5 Radiance = 5 Incandescence (+20% Elemental DMG, +2% DR). Aemonleyda como carry principal. Anneliesis Bond deploya 5s depois com burst. Confirmado pelo jogador 10/Abr/2026."
      }
    ],
    mechanics: {
      key_mechanic: "4 Aura school = sinergia de Aura Energy entre os 4 herois. Anneliesis Bond com aliado no deploy (+20% Max HP, +20% DMG Bonus, +20 Ult Energy) amplifica o time inteiro. Acilia sustain solo suficiente para bosses.",
      positioning: "Acilia na frente. Aemonleyda carry principal. Anneliesis deploya 5s depois."
    },
    notes: "Primeiro time Aura funcional de Henry (S6). Shahla (5a Aura, buffer CritDMG) fica de fora — 4 Aura + Acilia sustain > 5 Aura sem sustain. Testado no Fey Meander com sucesso imediato. Potencial para outras atividades (Temporal Vortex, Heretical Ruins, etc)."
  }
];

window.DATA_HERO_FREQUENCY = (() => {
  const counts = new Map();

  for (const team of window.DATA_TEAMS) {
    const activities = Array.isArray(team.activities) && team.activities.length
      ? team.activities
      : (team.activity ? [team.activity] : []);
    const seen = new Set();
    for (const member of team.members || []) {
      if (seen.has(member.id)) continue;
      seen.add(member.id);

      const entry = counts.get(member.id) || {
        id: member.id,
        teams: 0,
        activities: new Set()
      };

      entry.teams += 1;
      for (const activity of activities) entry.activities.add(activity);
      counts.set(member.id, entry);
    }
  }

  return [...counts.values()]
    .map(entry => ({
      id: entry.id,
      teams: entry.teams,
      activities: [...entry.activities].join(", ")
    }))
    .sort((a, b) => b.teams - a.teams || a.id - b.id);
})();
