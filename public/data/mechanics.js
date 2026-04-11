// mechanics.js — All game mechanics data consolidated from .md docs
// Last source update: 2026-04-07 (S6: Hymn of Chess & Blade)

window.DATA_MECHANICS = {

  // === DATA GOVERNANCE ===
  data_governance: {
    canonical_source: "app/data/*.js",
    canonical_player_state: [
      "app/data/profile.js",
      "app/data/my-roster.js",
      "app/data/teams.js",
      "app/data/plan.js",
      "app/data/decisions.js"
    ],
    docs_policy: "docs/ e context/ sao referencia de apoio e podem ficar defasados",
    last_policy_update: "2026-02-20"
  },

  // === SUMMONING SYSTEM ===
  summoning: {
    cost_per_pull: 100,
    currency: "Wyrmarrow",
    rates: {
      legendary: 1.5,
      epic: 18.5,
      rare: 80
    },
    pity: {
      legendary: 70,
      epic: 10,
      banner_exclusive: 300
    },
    pity_carries_between_banners: false,
    banner_types: [
      {
        name: "Selected Summons",
        pool: "~14-16 Legendarios, 2 Premium (featured/rate-up)",
        rotation: "Muda periodicamente (numerados I, II, III...)",
        note: "NAO garante heroi especifico — Premium tem chance maior"
      },
      {
        name: "Prophecy Summons",
        pool: "Muitos herois Premium (~10+)",
        activation: "Via Prophecy Code (pre-gerado, 30 dias validade)",
        note: "Mesmas rates: 1.5% Legendary, 70 pity"
      },
      {
        name: "Banner Exclusivo (300 pulls)",
        cost: 30000,
        note: "Unica forma de GARANTIR heroi especifico. Alto custo de Wyrmarrow"
      },
      {
        name: "Echoing Shadow Summon (S6+)",
        pool: "Customizavel — jogador monta Wish List: 2 Rare DPS Legendarios + 4 Support Legendarios",
        activation: "Primeiros 10 dias da season",
        note: "Milestone-based: atingir milestones = obter herois escolhidos. Wish List TRAVADA apos confirmacao. Supports devem ser mesma faccao/elemento dos DPS. Pool: TODOS Rare DPS Legendarios pre-season."
      }
    ],
    guaranteed_sources: [
      { source: "Bau Selecao Lendario 1 (Dia 5)", hero: "Escolha entre 18", status: "Usado: Lossenia + Durango" },
      { source: "Bau Selecao Lendario 2 (Dia 10)", hero: "Escolha entre 6", status: "Usado: Auster (Ice SS, 17/Fev)" },
      { source: "Divine Ascetic", hero: "Legendary Lightning (gratis)", status: "OBTIDO" },
      { source: "Drizzt (evento D&D)", hero: "Legendary Ice A-tier (gratis)", status: "Dia 6+" }
    ],
    free_dice_sources: [
      "7 dice/dia (fontes diarias)",
      "110 dice da Campanha 15 (Monkey event + Season Journey)",
      "Login diario",
      "Season Journey milestones",
      "Exploracao do mapa",
      "Dungeon first-clear rewards",
      "Daily commissions",
      "Resonance Level: 200-400 Wyrmarrow a cada 10 niveis (~14.600 total ate lv99)"
    ],
    conversions: [
      { from: "100 Wyrmarrow", to: "1 Heliolite Dice" },
      { from: "800 Wyrmarrow", to: "10 Heliolite Dice (first time discount)" }
    ],
    strategy_f2p: [
      "Baus de selecao = fontes mais valiosas",
      "Acumular dice e pullar em ciclos de 70",
      "Priorizar banners onde heroi desejado e Premium",
      "300-pull exclusive e viavel mas caro — planejar com antecedencia",
      "Starlight Stone Dice — gastar livremente (da Epics, sem Legendary)",
      "~400 pulls gratuitos/mes / 70 pity = ~5-6 Legendarios/mes (aleatorios)"
    ],
    source_warning: "Fontes online (HH, AC) dizem 3% e pity 35. O jogo mostra 1.5% e pity 70. Confiar nos dados in-game."
  },

  // === SCHOOLS & ELEMENTS ===
  schools: [
    "Aura", "Burn", "Corrosion", "Dauntless", "Frost", "Ice Blast",
    "Poison", "Rally", "Shadow", "Summon", "Support", "Thunderbolt", "Toxin", "Wild"
  ],

  elements: ["Fire", "Ice", "Lightning", "Poison", "Necrosis", "Radiance"],
  rarities: ["Mythic", "Legendary", "Epic", "Rare", "Common"],

  // === ELEMENTAL AFFINITY ===
  // REGRA CRITICA: Ativa com QUALQUER combinacao de herois dos 2 elementos.
  // NAO precisa ter ambos elementos. Ex: 5 Radiance = Incandescence ativado.
  // 5 Ice = Devitalization ativado. 3 Poison + 2 Ice = Devitalization ativado.
  // IMPORTANTE: Afinidades MUDAM A CADA SEASON! Sempre confirmar in-game.
  affinities: {
    season: "S6 — Hymn of Chess & Blade",
    activation_rule: "Qualquer combinacao de herois dos 2 elementos da afinidade. NAO precisa ter ambos. 5 do mesmo elemento ATIVA.",

    // === S6 AFFINITIES (Abr/2026, confirmado in-game pelo Henry) ===
    groups: {
      "Devitalization":  { elements: ["Ice", "Poison"],          note: "NOVO S6: Ice + Poison (era Ice+Necrosis na S1)" },
      "Incandescence":   { elements: ["Fire", "Radiance"],       note: "NOVO S6: Fire + Radiance (era Poison+Fire na S1)" },
      "Vertigo":         { elements: ["Lightning", "Necrosis"],  note: "NOVO S6: Lightning + Necrosis (era Lightning+Radiance na S1)" }
    },

    // Bonus base: assume mesma estrutura de S1 (3 herois / 5 herois).
    // TODO: Confirmar valores exatos in-game para S6 (podem ter mudado).
    bonuses: {
      devitalization_3:  { atk_percent: 20, hp_percent: 20, note: "Devitalization 3+: TODO confirmar valores exatos in-game S6" },
      incandescence_3:   { atk_percent: 20, hp_percent: 20, note: "Incandescence 3+: TODO confirmar valores exatos in-game S6" },
      vertigo_3:         { atk_percent: 20, hp_percent: 20, note: "Vertigo 3+: TODO confirmar valores exatos in-game S6" },

      devitalization_5:  { elemental_damage_bonus_percent: 20, damage_resistance_percent: 2, note: "Devitalization 5+: TODO confirmar" },
      incandescence_5:   { elemental_damage_bonus_percent: 20, damage_resistance_percent: 2, note: "Incandescence 5+: TODO confirmar" },
      vertigo_5:         { elemental_damage_bonus_percent: 20, damage_resistance_percent: 2, note: "Vertigo 5+: TODO confirmar" }
    },

    // --- AFFINITY EVOLUTION (sistema de upgrade por caminho) ---
    // 3 afinidades x 2 caminhos (ATK e HP) = 6 opcoes. Escolher 4 de 6.
    // Lv 1-10. No max (Lv 10): +20% ATK ou +20% HP.
    // ATENCAO S6: Paths podem ter sido resetados/mudados com a nova rotacao.
    // TODO: Verificar in-game se os paths escolhidos em S1 ainda valem.
    evolution: {
      max_level: 10,
      max_bonus_percent: 20,
      slots: 4,    // de 6 opcoes, escolher 4
      total_paths: 6,

      paths: [
        { id: "devitalization_atk",  affinity: "Devitalization",  stat: "ATK", elements: ["Ice", "Poison"],         max: "+20% ATK" },
        { id: "devitalization_hp",   affinity: "Devitalization",  stat: "HP",  elements: ["Ice", "Poison"],         max: "+20% HP" },
        { id: "incandescence_atk",   affinity: "Incandescence",   stat: "ATK", elements: ["Fire", "Radiance"],      max: "+20% ATK" },
        { id: "incandescence_hp",    affinity: "Incandescence",   stat: "HP",  elements: ["Fire", "Radiance"],      max: "+20% HP" },
        { id: "vertigo_atk",         affinity: "Vertigo",         stat: "ATK", elements: ["Lightning", "Necrosis"], max: "+20% ATK" },
        { id: "vertigo_hp",          affinity: "Vertigo",         stat: "HP",  elements: ["Lightning", "Necrosis"], max: "+20% HP" }
      ],

      // Decisao Henry S1 (16/Fev/2026) — paths da S1 (Permafrost/Ulceration/Resplendence)
      // TODO: Confirmar in-game se evolution resetou na S6 ou se paths foram convertidos.
      chosen_s1: [
        {
          id: "resplendence_atk → vertigo_atk?",
          priority: 1,
          reason: "S1: Nastjenka + Garett + Sutha = 28 DPS slots. S6 Vertigo = Lightning+Necrosis — Lightning carries CONTINUAM beneficiados. Necrosis DPS (Ladehlia, Sintrellia) AGORA entram neste grupo.",
          key_heroes: ["Nastjenka", "Garett", "Sutha", "Schaltar", "Divine Ascetic", "Ladehlia", "Sintrellia"]
        },
        {
          id: "permafrost_atk → devitalization_atk?",
          priority: 2,
          reason: "S1: Ice DPS. S6 Devitalization = Ice+Poison — Ice carries (Auster, Lossenia, Hochadir, Hvitar) + Poison DPS (Lothair, Durango) AGORA no mesmo grupo! Sinergia muito melhor.",
          key_heroes: ["Auster", "Lossenia", "Hochadir", "Hvitar", "Lothair", "Durango", "Voresh"]
        },
        {
          id: "permafrost_hp → devitalization_hp?",
          priority: 3,
          reason: "S1: Eurion/Vinyara/Torrin tanks. S6: Eurion/Vinyara (Ice) + Ergander/Frurbath (Poison) = mais tanks cobertos.",
          key_heroes: ["Eurion", "Vinyara", "Ergander", "Frurbath"]
        },
        {
          id: "ulceration_atk → incandescence_atk?",
          priority: 4,
          reason: "S1: Poison+Fire DPS. S6 Incandescence = Fire+Radiance. Flora/Errich/Caspar + Huberg/Lorentheel/Donella agora juntos.",
          key_heroes: ["Flora", "Errich", "Caspar", "Felicity", "Huberg", "Lorentheel", "Donella"]
        }
      ],
      skipped_s6: [
        { id: "vertigo_hp",       reason: "Lightning/Necrosis DPS focados — HP nao ajuda. Torrin (Necrosis healer) poderia, mas melhor coberto por Devitalization HP." },
        { id: "incandescence_hp", reason: "Fire/Radiance: maioria DPS. Acilia (Radiance tank) e unica que se beneficia." }
      ],

      strategy_note_s6: "GRANDE mudanca na S6: Poison+Ice juntos (Devitalization) = Lothair+Hvitar+Lossenia+Durango no MESMO grupo de afinidade. Lightning+Necrosis (Vertigo) = Nastjenka+Ladehlia juntos. Fire+Radiance (Incandescence) = Flora+Huberg juntos. Novas sinergias cross-element muito mais fortes que S1."
    },

    // === HISTORICO DE ROTACAO ===
    rotation_history: [
      { season: "S1 (Reborn)", groups: { "Permafrost": ["Ice", "Necrosis"], "Ulceration": ["Poison", "Fire"], "Resplendence": ["Lightning", "Radiance"] } },
      { season: "S6 (Hymn of Chess & Blade)", groups: { "Devitalization": ["Ice", "Poison"], "Incandescence": ["Fire", "Radiance"], "Vertigo": ["Lightning", "Necrosis"] } }
    ],

    notes: [
      "TRES camadas: (1) bonus base com 3 herois, (2) bonus extra com 5 herois, (3) affinity evolution.",
      "S6 Devitalization (Ice+Poison): abre sinergias Lothair+Hvitar, Durango+Lossenia, Ergander+Eurion.",
      "S6 Incandescence (Fire+Radiance): Flora+Huberg, Errich+Lorentheel, Caspar+Donella.",
      "S6 Vertigo (Lightning+Necrosis): Nastjenka+Ladehlia, Garett+Sintrellia, Sutha+Ghulende.",
      "Camada 2 (5 herois da mesma afinidade): +20% Elemental Damage Bonus e +2% Damage Resistance (TODO confirmar S6).",
      "Camada 3: Affinity Evolution — 6 caminhos (3 ATK + 3 HP), escolher 4. Lv 10 max = +20% cada.",
      "3 herois ativam afinidade; 5 herois adicionam bonus extra de dano/mitigacao.",
      "AFINIDADES MUDAM A CADA SEASON — sempre confirmar in-game ao inicio de nova season."
    ],
    last_updated: "2026-04-07"
  },

  // === SCHOOL BONDS (confirmado in-game Fev/2026) ===
  school_bonds: {
    note: "Dois sistemas separados que STACKAM: Elemental Affinity + School Bond",
    schools: [
      {
        name: "Toxin",
        element: "Poison",
        bond_2: "Poison Pool success rate: 30%",
        bond_3: "Poison Pool success rate: 60%",
        jump: "GRANDE (dobra!)",
        worth_3rd: true
      },
      {
        name: "Wild",
        element: "Fire",
        bond_2: "During Burst, ally Wild dice roll result +2",
        bond_3: "During Burst, ally dice guaranteed max",
        jump: "GRANDE",
        worth_3rd: true
      },
      {
        name: "Frost",
        element: "Ice",
        bond_2: "Frozen lasts 5s",
        bond_3: "Frozen 5s + Inflict Frozen 5s on 1 target at battle start",
        jump: "MEDIO",
        worth_3rd: "DEPENDE"
      },
      {
        name: "Dauntless",
        element: "Lightning",
        bond_2: "Thundercloud has 40% chance coordinated attack",
        bond_3: "Thundercloud has 50% chance coordinated attack",
        jump: "PEQUENO (+10%)",
        worth_3rd: false
      },
      {
        name: "Summon",
        element: "Necrosis",
        bond_2: "Summons Darkflame Phoenix",
        bond_3: "Summons stronger Darkflame Phoenix",
        jump: "???",
        worth_3rd: null
      },
      {
        name: "Rally",
        element: "Radiance",
        bond_2: "Rally allies gain 1 stack at start. Triggers every 30s",
        bond_3: "Triggers every 20s",
        jump: "PEQUENO",
        worth_3rd: false
      },
      {
        name: "Support",
        element: "TODOS (cross-element)",
        bond_2: "Shield 30s: 10% MAX HP",
        bond_3: "Shield 30s: 15% MAX HP",
        jump: "PEQUENO (+5%)",
        worth_3rd: false
      }
    ],
    rules: [
      "Defense NAO existe como school. Sao 7 schools.",
      "Support e CROSS-ELEMENT — Support de qualquer elemento conta junto.",
      "Torrin e Support, NAO Summon — NAO ativa Summon bond com Ladehlia.",
      "Para Summon bond, Ladehlia precisa de outro Summon (Tioh B-tier)."
    ]
  },

  // === COMBAT SYSTEM ===
  combat: {
    type: "RPG em tempo real com formacao de herois",
    team_size: 5,
    auto_battle: true,
    speed_2x: true,
    formation: {
      front: "Tanks/Defensores (absorvem dano)",
      back: "DPS e Supports",
      tip: "Spread out para evitar AoE concentrado"
    },
    skill_types: [
      { name: "Passive", desc: "Trigger automatico em condicoes especificas" },
      { name: "Battle Skills", desc: "Usadas automaticamente, com recharge timer (primeiro uso mais rapido)" },
      { name: "Ultimate", desc: "Recarrega visivelmente, uso manual recomendado. Habilidade mais poderosa" }
    ],
    attributes: [
      { name: "HP", effect: "Vida total" },
      { name: "ATK", effect: "Dano base (maioria dos skills escala com ATK)" },
      { name: "DEF", effect: "Reducao de dano recebido" },
      { name: "Crit Rate", effect: "Chance de acerto critico" },
      { name: "Crit Damage", effect: "Multiplicador do critico" },
      { name: "Accuracy", effect: "Chance de acertar (relevante PvP)" },
      { name: "Attack Speed", effect: "Velocidade de ataque (relevante Dauntless)" },
      { name: "Skill Haste", effect: "Reduz cooldown de skills" }
    ],
    adventurer: {
      occupies_slot: true,
      note: "PC + 4 herois ou 5 herois normais",
      elements: ["Fire", "Ice", "Lightning"],
      element_swap: "Psychicore > Element Power (gratis, a qualquer momento)",
      limitations: ["Nao tem Poison, Necrosis ou Radiance", "Nenhuma tier list inclui o PC"],
      control_skill: "Inimigos mortos geram Energy Dust → AoE + Shield. Funciona mesmo fora do time (exceto Grand Gladiator)"
    },
    tips: [
      "Espalhe herois para evitar AoE",
      "Use ultimates manualmente em momentos estrategicos",
      "Analise info do inimigo ANTES da batalha",
      "Se falhar e sair, recursos sao reembolsados",
      "Troque herois conforme conteudo — resistencia elemental varia"
    ]
  },

  // === GEAR SYSTEM ===
  gear: {
    slots: [
      { name: "Arma (Weapon)", unlock: "Inicio", main_stat: "ATK 335 (Mythic lv1)", set_pool: "weapon_helmet" },
      { name: "Elmo (Helmet)", unlock: "Inicio", main_stat: "HP flat FIXO (7710 Mythic +20, 5070 Epic +20)", set_pool: "weapon_helmet" },
      { name: "Armadura (Armor/Chest)", unlock: "Inicio", main_stat: "Varia", set_pool: "armor_gloves" },
      { name: "Manopla (Gloves)", unlock: "Inicio", main_stat: "Varia", set_pool: "armor_gloves" },
      { name: "Artifact", unlock: "3* (Lv.50)" },
      { name: "Positive Rune", unlock: "4* (Lv.70)" },
      { name: "Negative Rune", unlock: "5* (Lv.90)" }
    ],
    rarities: "Common → Rare → Epic → Mythic",

    // SUBSTATS — confirmado in-game 2026-03-09
    // NAO EXISTEM em gear: ATK Speed, Skill Haste (somente em Runas)
    //
    // === SISTEMA DE UPGRADE ===
    // Gear comeca lv 0. A cada 4 lvs tem milestone:
    //   Lv 4:  libera substat 4 (custo: 5.250 gold)
    //   Lv 8:  1o upgrade — melhora 1 affix aleatorio (custo acumulado: 24.850 gold)
    //   Lv 12: 2o upgrade — melhora 1 affix aleatorio (custo acumulado: 87.150 gold)
    //   Lv 16: 3o upgrade — melhora 1 affix aleatorio (custo acumulado: 227.150 gold)
    //   Lv 20: 4o upgrade — melhora 1 affix aleatorio (custo acumulado: 528.150 gold)
    // Total: 4 upgrades aleatorios ao chegar em +20. Cada upgrade vai para 1 sub ALEATORIO.
    // Numero circulado ao lado do sub = quantos upgrades aquele sub recebeu.
    //
    // === QUALIDADE (BARRA) ===
    // Cada substat tem barra com 5 divisoes embaixo.
    // A barra mostra a qualidade do roll DENTRO do range min-max.
    // Mais preenchida = roll mais alto. Afeta TANTO base quanto upgrade amounts.
    //
    // === MAIN STATS POR SLOT ===
    // Weapon: SEMPRE flat ATK (fixo) — valor vem 100% dos subs
    // Helmet: SEMPRE flat HP (fixo) — valor vem 100% dos subs
    // Armor: VARIA — DEF flat, DEF%, HP%, ATK%, ACC, RES, Enlightenment, etc.
    // Gloves: VARIA — ATK flat, ATK%, DEF%, HP%, Crit Rate%, Crit Damage%, etc.
    // Main stat escala com level do gear (ex: ATK% 2.0% lv0 → 60.0% lv20, CritR 1.0% → 40.0%, CritD 3.0% → 80.0%)
    //
    // Main stats a +20: ATK%/HP%/DEF% = 60.0%, CritR = 40.0%, CritD = 80.0%, ACC = 96, RES = 120, Enlight = 120
    //
    // === RANGES DE SUBSTATS ===
    // Ranges documentados sao APROXIMADOS (base de poucos samples).
    // Ranges REAIS sao mais amplos, especialmente upgrades.
    // Confirmado: CritR upgrade pode ser ~4.0% (nao 3.2%), ATK% upgrade ~6.3% (nao 5.2%)
    // Gear Forged (Piece of Treasure) + Temper pode ter valores ACIMA dos ranges normais.
    substats: {
      atk_pct:      { base_min: 2.0, base_max: 5.8,  upgrade_min: 5.0, upgrade_max: 6.3,  unit: "%", note: "range upgrade revisado 09/Mar — observado 24.7% com 3 upgrades" },
      hp_pct:       { base_min: 2.0, base_max: 5.8,  upgrade_min: 5.0, upgrade_max: 6.3,  unit: "%", note: "assume mesmo range que ATK%" },
      def_pct:      { base_min: 2.0, base_max: 5.8,  upgrade_min: 5.0, upgrade_max: 6.3,  unit: "%", note: "assume mesmo range que ATK%" },
      hp_flat:      { base_min: 256, base_max: 744,   upgrade_min: 640, upgrade_max: 666,   unit: "flat" },
      crit_rate:    { base_min: 1.0, base_max: 3.8,   upgrade_min: 3.0, upgrade_max: 4.0,   unit: "%", note: "range revisado — observado 19.8% com 4 upgrades (base 3.8 + 4*4.0)" },
      crit_damage:  { base_min: 2.8, base_max: 7.8,   upgrade_min: 7.0, upgrade_max: 8.5,   unit: "%", note: "range revisado — forged pode ir muito acima (41.5% obs.)" },
      accuracy:     { base_min: 4,   base_max: 11,    upgrade_min: 9,   upgrade_max: 11,    unit: "flat", note: "range revisado — observado 43 com 3 upgrades" },
      resistance:   { base_min: 4,   base_max: 11,    upgrade_min: 9,   upgrade_max: 12,    unit: "flat", note: "range revisado — observado 57 em peca +20" },
      enlightenment:{ base_min: 4,   base_max: 12,    upgrade_min: 10,  upgrade_max: 12,    unit: "flat", note: "range revisado — observado 35 com 2 upgrades" },
      atk_flat:     { note: "existe como sub, valores flat — range nao documentado" },
      def_flat:     { note: "existe como sub, valores flat — range nao documentado" },
      // ATK Speed: NAO EXISTE em gear (somente Runas)
      // Skill Haste: NAO EXISTE em gear (somente Runas)
    },

    // MYTHIC 1-PIECE SETS — confirmado in-game 2026-03-06 (S1 Forge)
    // Mythic gear usa sets de 1 peça. Cada slot pool tem sets diferentes.
    mythic_sets_weapon_helmet: [
      { name: "Fearless Challenge", bonus: "+16% damage vs inimigos com Max HP >50% maior que o heroi", type: "DPS" },
      { name: "Chaos Symbiosis", bonus: "+6% ATK por aliado da mesma School presente", type: "DPS" },
      { name: "Magic Crystal Refinement", bonus: "+ATK adicional = 300% da Accuracy atual", type: "DPS nicho" },
      { name: "Monelisse's Teardrop", bonus: "Ao morrer: Immortality 3s + 15% DR 10s (CD 120s)", type: "Defensivo" },
      { name: "Impregnable", bonus: "Buffs ganhos tem 50% chance de serem enhanced + indispellable", type: "Utility" },
      { name: "Sky Code Treaty", bonus: "Ao dar Shield → dispel 1 debuff do alvo (CD 20s)", type: "Utility" }
    ],
    mythic_sets_armor_gloves: [
      { name: "Imposing Presence", bonus: "100% HP → +25% damage dealt", type: "DPS" },
      { name: "Strike the Unprepared", bonus: "+30% damage vs inimigos com Defense Penalty", type: "DPS condicional" },
      { name: "Death Record", bonus: "Ao causar Derivative Damage → marca alvo +20% Deriv. recebido 12s", type: "DPS nicho" },
      { name: "Mark of Austerity", bonus: "A cada 10% HP perdido → +15% ATK Speed", type: "Berserker" },
      { name: "Clean Sweep", bonus: "Quando ult termina de recarregar → dispel ALL debuffs do heroi", type: "Utility" },
      { name: "Ancestral Guidance", bonus: "50% Lifesteal em basic attacks (+50% extra abaixo 25% HP)", type: "Self-sustain" },
      { name: "Schadenfreude", bonus: "Ao aplicar debuff → self-heal 2% Max HP", type: "Tank utility" },
      { name: "Iron Bastion", bonus: "Ao receber Crit → 50% chance -30% Crit Rate do atacante 5s", type: "Defensivo" }
    ],

    // LOADOUT SYSTEM — confirmado in-game 12/Mar/2026
    // Quick Equip salva as 4 pecas de gear (weapon, helmet, armor, gloves).
    // PROBLEMA: Loadout NAO salva runas (positiva/negativa). Ao carregar loadout, REMOVE as runas do heroi.
    // Workaround: re-equipar runas manualmente apos carregar loadout.
    // Implicacao: gear swap "gratis" tem custo oculto de re-equipar runas toda vez.
    // TODO: verificar se versoes futuras corrigem isso.
    loadout_system: {
      saves_gear: true,
      saves_runes: false,
      saves_artifact: false, // TODO confirmar
      bug_removes_runes: true,
      note: "Ao carregar loadout, runas sao REMOVIDAS do heroi. Re-equipar manualmente."
    },

    s4_sets_note: "Sets S4 (Echoes of War, Whispers of the Order, Oasis Aspiration) NAO existem no S1. Sao multi-piece sets de seasons futuras.",
    s4_sets: [
      { name: "Echoes of War", bonus_2: "+ATK, +Atk Speed", bonus_3: "+Atk Speed, +basic atk dmg on crit", ideal: "Dauntless / basic attackers" },
      { name: "Whispers of the Order", bonus_2: "+ATK, +Skill Haste", bonus_3: "+Ultimate skill damage", ideal: "Casters / skill users" },
      { name: "Oasis Aspiration", bonus_2: "+HP, +Skill Haste", bonus_3: "-Damage taken when HP high", ideal: "Tanks" }
    ],
    // STAT PRIORITY POR HEROI — confirmado in-game 09/Mar/2026
    // O jogo mostra indicador de stats recomendados por heroi. Esses dados SAO confiaveis.
    // Derivative Damage escala com ATK + Enlightenment e NAO pode critar.
    // Direct Damage escala com ATK e PODE critar (beneficia de Crit Rate/Dmg).
    // Heals/Shields escalam com Enlightenment + %MaxHP do alvo.
    // DEF-scalers: dano e heals escalam com DEF (ex: Eurion shield, Garius heal).
    stat_profiles: [
      { id: "dps-crit", label: "DPS-Crit", stats: "ATK, Crit Rate, Crit Dmg", note: "Dano direto %ATK, pode critar" },
      { id: "dps-atk", label: "DPS-ATK puro", stats: "ATK", note: "ATK e stat dominante; kit tem crit built-in ou escala puramente com ATK" },
      { id: "atk-enlight", label: "ATK+Enlight", stats: "ATK, Enlightenment", note: "Derivative Damage ou hybrid (ATK+Enlight scaling). Crit NAO funciona na parte Derivative" },
      { id: "atk-enlight-acc", label: "ATK+Enlight+ACC", stats: "ATK, Enlightenment, ACC", note: "Hybrid derivative + precisa landar debuffs" },
      { id: "atk-acc", label: "DPS-ACC", stats: "ATK, ACC", note: "Dano direto + precisa landar debuffs/aplicar efeitos" },
      { id: "acc", label: "Debuffer-ACC", stats: "ACC", note: "Funcao principal e landar debuffs. Dano e secundario" },
      { id: "hp-acc", label: "Tank-HP/ACC", stats: "HP, ACC", note: "Tank que precisa landar efeitos" },
      { id: "hp-atk-acc", label: "Tank/DPS/ACC", stats: "HP, ATK, ACC", note: "Hibrido: shield escala ATK+HP, precisa ACC pra debuffs" },
      { id: "enlight", label: "Healer puro", stats: "Enlightenment", note: "Heals escalam com Enlight. HP secundario pra sobreviver" },
      { id: "hp-enlight", label: "Healer/Shielder", stats: "HP, Enlightenment", note: "Shields/heals escalam com Enlight + %MaxHP" },
      { id: "hp-def-enlight", label: "Tank/Healer", stats: "HP, DEF, Enlightenment", note: "Tank pesado que tambem heala/shielda" },
      { id: "def-acc", label: "Tank-DEF/Debuffer", stats: "DEF, ACC", note: "Dano/heal escala com DEF + precisa landar efeitos" },
      { id: "def", label: "Tank-DEF puro", stats: "DEF", note: "Dano e heals escalam com DEF" },
      { id: "hp", label: "Tank-HP puro", stats: "HP", note: "Sobrevivencia pura" }
    ],
    stat_priority_by_hero: {
      // LIGHTNING
      lightning: [
        { name: "Nastjenka",  id: 20740, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "DA",         id: 23020, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Sutha",      id: 21560, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Nimbus",     id: 22350, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Garett",     id: 20660, profile: "dps-atk",    ingame: "ATK" },
        { name: "Vani",       id: 20080, profile: "dps-atk",    ingame: "ATK" },
        { name: "Schaltar",   id: 20040, profile: "atk-enlight",ingame: "ATK, Enlight", note: "TODO dano Derivative — Crit INUTIL" },
        { name: "Tamar",      id: 20830, profile: "acc",        ingame: "ACC" },
        { name: "Iola",       id: 20640, profile: "acc",        ingame: "ACC" },
        { name: "Irina",      id: null,  profile: "acc",        ingame: "ACC" },
        { name: "Nathaniel",  id: null,  profile: "hp-enlight", ingame: "HP, Enlight" },
        { name: "Enna",       id: null,  profile: "hp",         ingame: "HP" }
      ],
      // ICE
      ice: [
        { name: "Auster",     id: 21030, profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Lossenia",   id: 20920, profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Hochadir",   id: 22230, profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Voresh",     id: 22290, profile: "atk-acc",    ingame: "ATK, ACC", note: "Voresh e ICE (confirmado)" },
        { name: "Rowena",     id: 21290, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Usah",       id: null,  profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Vinyara",    id: 20770, profile: "hp-atk-acc", ingame: "HP, ATK, ACC" },
        { name: "Eurion",     id: 20060, profile: "hp-acc",     ingame: "HP, ACC", note: "Skills escalam com DEF mas HP e prioridade pra sobreviver. Insp da DEF%+30%" },
        { name: "Lucien",     id: 20990, profile: "hp-acc",     ingame: "HP, ACC" },
        { name: "Felosia",    id: 21390, profile: "hp-enlight", ingame: "HP, Enlight" },
        { name: "Alphanarsy", id: 24770, profile: "hp-def-enlight", ingame: "HP, DEF, Enlight" },
        { name: "Dallban",    id: null,  profile: "hp-def-acc", ingame: "HP, DEF, ACC" },
        { name: "Vidimir",    id: 20250, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg", note: "Vidimir e LIGHTNING mas user listou aqui — manter referencia" }
      ],
      // NECROSIS
      necrosis: [
        { name: "Ladehlia",   id: 23080, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Zadok",      id: null,  profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Sintrellia", id: 24780, profile: "dps-atk",    ingame: "ATK" },
        { name: "Isitarian",  id: 21690, profile: "dps-atk",    ingame: "ATK" },
        { name: "Vassaka",    id: null,  profile: "dps-atk",    ingame: "ATK" },
        { name: "Ghulende",   id: 22310, profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Zharloth",   id: 22320, profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Torrin",     id: 20690, profile: "enlight",    ingame: "Enlight" },
        { name: "Meggan",     id: 20790, profile: "hp",         ingame: "HP", note: "Meggan e NECROSIS (corrigido)" }
      ],
      // FIRE
      fire: [
        { name: "Caspar",     id: 21970, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Errich",     id: 20400, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Felicity",   id: 20810, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Tonalnan",   id: 21800, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Rhash",      id: 21170, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Alfie",      id: 21260, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Flora",      id: 20410, profile: "atk-enlight",ingame: "ATK, Enlight", note: "TODO dano Derivative — Crit INUTIL" },
        { name: "Huldork",    id: 21150, profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Dane",       id: null,  profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Garrika",    id: 20190, profile: "acc",        ingame: "ACC" },
        { name: "Brody",      id: 20360, profile: "def-acc",    ingame: "DEF, ACC" },
        { name: "Adolphus",   id: 23250, profile: "enlight",    ingame: "Enlight" },
        { name: "Journ",      id: 21450, profile: "hp-acc",     ingame: "HP, ACC" },
        { name: "Isolde",     id: 23240, profile: "hp",         ingame: "HP" }
      ],
      // POISON
      poison: [
        { name: "Lothair",    id: 20200, profile: "atk-enlight",ingame: "ATK, Enlight" },
        { name: "Vicana",     id: 20630, profile: "atk-enlight",ingame: "ATK, Enlight" },
        { name: "Jathalea",   id: 20290, profile: "atk-enlight",ingame: "ATK, Enlight" },
        { name: "Durango",    id: 20670, profile: "atk-enlight-acc", ingame: "ATK, Enlight, ACC" },
        { name: "Twitch",     id: 22010, profile: "atk-enlight-acc", ingame: "ATK, Enlight, ACC" },
        { name: "Sigrid",     id: 20650, profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Ergander",   id: 21010, profile: "hp-acc",     ingame: "HP, ACC" },
        { name: "Oggok",      id: 21700, profile: "enlight-acc",ingame: "Enlight, ACC", note: "Perfil unico: healer + debuffer" },
        { name: "Talwer",     id: 21320, profile: "acc",        ingame: "ACC" },
        { name: "Eches",      id: 20750, profile: "acc",        ingame: "ACC" },
        { name: "Frurbath",   id: 21670, profile: "def-acc",    ingame: "DEF, ACC" }
      ],
      // RADIANCE
      radiance: [
        { name: "Huberg",     id: 20320, profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Philto",     id: null,  profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Gitouna",    id: null,  profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Hegio",      id: null,  profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Martina",    id: null,  profile: "dps-crit",   ingame: "ATK, Crit Rate, Crit Dmg" },
        { name: "Lorentheel", id: 20300, profile: "dps-atk",    ingame: "ATK" },
        { name: "Kailes",     id: null,  profile: "dps-atk",    ingame: "ATK" },
        { name: "Tathlyn",    id: null,  profile: "dps-atk",    ingame: "ATK" },
        { name: "Alvis",      id: null,  profile: "dps-atk",    ingame: "ATK" },
        { name: "Donella",    id: 21460, profile: "atk-acc",    ingame: "ATK, ACC" },
        { name: "Acilia",     id: 20420, profile: "hp-def-enlight", ingame: "HP, DEF, Enlight" },
        { name: "Catherine",  id: 23210, profile: "enlight",    ingame: "Enlight" },
        { name: "Garius",     id: 20210, profile: "def",        ingame: "DEF" },
        { name: "Sagomir",    id: 22060, profile: "hp-acc",     ingame: "HP, ACC" },
        { name: "Kamri",      id: null,  profile: "hp",         ingame: "HP" },
        { name: "Clovis",     id: null,  profile: "def-acc",    ingame: "DEF, ACC" },
        { name: "Dulling",    id: null,  profile: "def-acc",    ingame: "DEF, ACC" },
        { name: "Gumm",       id: null,  profile: "acc",        ingame: "ACC" }
      ]
    },
    rules: [
      "Troca de gear e GRATUITA",
      "Nao faca upgrade pesado em gear comum — espere Mythic",
      "4 pecas de gear podem ser guardadas entre seasons (Boundless Chest, 1x only)",
      "ATK Speed e Skill Haste NAO existem como substats de gear — somente em Runas",
      "Batch sell gear desnecessario para gold"
    ],
    forge_event: {
      name: "Piece of Treasure",
      description: "Cria 1 Mythic gear. Escolhe: slot, set (1-piece), main stat, 4 substats, 4 upgrades.",
      notes: [
        "Substats: escolhe QUAIS 4 stats, valores sao RANDOM dentro do min-max",
        "Upgrades (+8/+12/+16/+20): escolhe QUAL sub recebe cada upgrade",
        "Sets sao 1-piece only no Mythic",
        "Weapon/Helmet compartilham pool de sets. Armor/Gloves compartilham outro pool."
      ]
    }
  },

  // === GAME MODES — MECANICAS DETALHADAS ===
  game_modes: {

    // ============================================================
    // GEAR DUNGEONS (4 dungeons, cada um dropa tipo de gear diferente)
    // Regra geral: ciclo de skills 18s (exceto H.Ruins 24s), 3 waves, boss na wave 3
    // NOTA S6: affinity_recomendada abaixo era para S1 (Permafrost/Ulceration/Resplendence).
    // S6 pairings mudaram: Devitalization(Ice+Poison), Incandescence(Fire+Radiance), Vertigo(Lightning+Necrosis).
    // Os ELEMENTOS recomendados sao os mesmos, so o NOME da afinidade muda.
    // TODO: Henry confirmar in-game qual afinidade S6 usar em cada dungeon.
    // ============================================================

    grave_of_venom: {
      name: "Grave of Venom",
      type: "Gear Dungeon",
      drops: "Defense gear",
      boss: "Deadly Harpy",
      cycle: "18s (skill a cada 6s)",
      element_boss: "Poison",
      affinity_recomendada: "Permafrost",
      skills: {
        passive: "Shadow Poison — Ao atacar, invoca Poisonous Will-o-Wisps (adds). 60% chance. Boss ganha 1 stack de Damage Reduction (15%) por cada SHIELD ativo nos adds.",
        skill1: "Poisonous Fletching — Dano AoE + da Shield a TODOS os adds. Cada shield quebrado = 3% Max HP dano no boss.",
        skill2: "Harpys Wrath — AoE global no seu time + dispela 1 buff de cada heroi.",
        skill3: "Harpys Breath — Single-target devastador: dash + 3 chutes combo. Mira alvo aleatorio SE boss tem <2 debuffs. Se >=2 debuffs, mira o tank."
      },
      o_que_mata: [
        "Shields nos adds nao quebrados = boss acumula Damage Reduction infinita → dano cai pra zero",
        "Harpys Breath mira DPS/healer se boss tem <2 debuffs = one-shot",
        "Wisps (adds) acumulam se nao morrem = dano crescente"
      ],
      como_vencer: "Quebre shields dos adds (cada shield quebrado = 3% Max HP no boss). Mantenha 2+ debuffs no boss pra Breath mirar o tank. Vinyara ult dispela shields. Voresh Buff Prohibition impede adds de receber shields.",
      counters: ["Dispel shields dos adds (Vinyara, Shook)", "Buff Prohibition (Voresh) = adds NAO recebem shields", "Manter 2+ debuffs no boss (Attack Penalty, Poison)", "AoE pra limpar Wisps (Ladehlia Shadow Demon)"],
      timing_dica: "Use Vinyara ult APOS Skill 1 do boss (que acabou de dar shields pros adds) pra dispelamento maximo."
    },

    grave_of_curse: {
      name: "Grave of Curse",
      type: "Gear Dungeon",
      drops: "HP gear",
      boss: "Blood Prince Xenos",
      cycle: "18s (skill a cada 6s)",
      element_boss: "Necrosis",
      affinity_recomendada: "Resplendence",
      skills: {
        passive: "Blood Gush — Todo dano HP que o boss causa ROUBA HP e REDUZ Max HP permanentemente do alvo. Cada buff no boss = +10% recharge speed; cada debuff = -10%.",
        skill1: "Rage of Blood — Boss se buffa com ATK Up massivo + Accuracy Bonus II. Dano subsequente e devastador se nao dispelado.",
        skill2: "Punishment of Blood — Dano Necrotic single-target. ROUBA 2 buffs do alvo. Dano AMPLIFICADO se alvo tem <2 buffs.",
        skill3: "Vampiric Shield (Ult) — Dano Necrotic AoE. Se seus herois tem <2 buffs: 100% chance de Stun 5s + boss ganha 20% recharge."
      },
      o_que_mata: [
        "Max HP drain da passiva Blood Gush — a cada rotacao, seu time tem MENOS HP maximo. Sem counter = morte inevitavel",
        "Rage of Blood nao dispelado = spike de dano letal",
        "Herois com <2 buffs levam Stun 5s da Ult = time parado = morte",
        "Boss com muitos buffs = recharge acelerado = mais rotacoes = mais drain"
      ],
      como_vencer: "Tamar Buff Prohibition PREVINE Rage of Blood (testado 08/Mar — boss nunca bufou, ACC 300+ necessario). Felosia shields bloqueiam Max HP drain + 30% DR + Control Immunity (impede Stun 5s). Torrin+Eurion = sustain core. Vinyara dispel reativo funciona ate Lv14 mas Tamar prevencao proativa e superior. Voresh falhava por ACC baixa, NAO por resistencia inata do boss.",
      counters: ["Buff Prohibition (Tamar ACC 300+ — MELHOR counter, prevencao > cura. Voresh falha por ACC baixa, NAO resistencia do boss)", "Shields bloqueiam Blood Gush Max HP drain (Felosia INEGOCIAVEL — sem ela time morre)", "Felosia Control Immunity previne Stun 5s (substitui necessidade de 2+ buffs)", "Dispel buffs do boss (Vinyara — funcional mas inferior a Tamar Buff Prohibition)"],
      timing_dica: "Com Tamar: auto-battle funciona (boss nunca buffa). Sem Tamar: Vinyara Ult APOS Rage of Blood, ANTES do ataque — considerar Manual."
    },

    grave_of_rot: {
      name: "Grave of Rot",
      type: "Gear Dungeon",
      drops: "Accuracy gear",
      boss: "Colossal Scavenger",
      cycle: "18s (skill a cada 6s)",
      element_boss: "Poison",
      affinity_recomendada: "Resplendence",
      skills: {
        skill1: "Healing Prohibition AoE — Impede seus healers de curar o time. Precisa ser cleansado imediatamente.",
        skill2: "Stun AoE — Atordoa multiplos herois. Posicionamento importa — espalhe herois pra reduzir alvos.",
        skill3: "Big Hit — Maior dano da rotacao. Use DMG Reduction antes.",
        passive: "Corrosion — Boss aplica stacks de Corrosion nos herois. Stacks altos = one-shot. AoE healing limpa stacks de Corrosion."
      },
      o_que_mata: [
        "Healing Prohibition sem cleanse = time morre por atrito",
        "Stun AoE desarma rotacao de skills = ults atrasados = wipe",
        "Corrosion stacks acumulam e causam morte instantanea",
        "Skill 3 sem mitigacao = wipe"
      ],
      como_vencer: "Cleanse Healing Prohibition imediatamente (Torrin Battle dispela debuffs aliados). Espalhe herois pra minimizar Stun. AoE healing constante limpa Corrosion stacks. DMG Reduction antes do Skill 3.",
      counters: ["Debuff Dispel/Immunity (Torrin dispel + Invisibilidade, Catherine Debuff Immunity AoE)", "AoE Healing constante (limpa Corrosion stacks)", "Espalhar herois (reduz alvos do Stun AoE)", "Shield (Nathaniel AoE Shield) contra Corrosion burst damage"],
      timing_dica: "DMG Reduction ults ANTES do Skill 3 do boss. Isso cobre tambem o Skill 1 do proximo ciclo.",
      insight_2026_03_05: "No Lv18, o limitante principal e threshold de build: summons com crit muito alto (proximo de 100%) + debuffer em ~400 Accuracy para uptime de debuffs. Com stats abaixo disso, o boss chega no endgame e inicia Devour sequencial.",
      composicao_referencia_lv18: "Torrin + Ladehlia + Isitarian + Sintrellia/Zadok + debuffer com ~400 Accuracy"
    },

    heretical_ruins: {
      name: "Heretical Ruins",
      type: "Gear Dungeon",
      drops: "ATK/Crit gear",
      boss: "Dead Phoenix",
      cycle: "24s (skill a cada 6s — ciclo MAIS LONGO dos dungeons)",
      element_boss: "Fire",
      affinity_recomendada: "Resplendence",
      skills: {
        passive: "Control Immunity — Boss IMUNE a todos efeitos de controle.",
        skill1: "Scorch (usado 2x por rotacao!) — Bolas de fogo no alvo atual. SPLASH DAMAGE em TODOS os herois com Burn. Tambem aplica ATK Penalty II 10s.",
        skill2: "Nirvana — Choca todos os Phoenix Eggs. Se pelo menos 1 Nestling nasce: boss ganha Invisibilidade 12s. Se TODOS ovos chocam: Nestlings ganham 30% DMG Reduction. Se NENHUM choca: boss ganha 30% DMG Reduction.",
        skill3: "Fire of Dead Phoenix (Ult) — Dano Fire AoE em TODOS os herois + 2 stacks Burn 12s. Dispela todos debuffs dos Nestlings e da Control Immunity 12s a eles."
      },
      mecanica_nestlings: "Nestlings vivos entram em estado Worshipper: curam boss +1% Max HP/s + dao stack permanente de Total Damage Bonus. Quanto mais tempo vivos, mais forte o boss fica PERMANENTEMENTE.",
      mecanica_invisibilidade: "Boss ganha Invisibilidade 12s apos Nirvana (se pelo menos 1 Nestling nasce). Evitar atacar boss durante Invisibilidade.",
      o_que_mata: [
        "Burn splash do Scorch — se multiplos herois tem Burn, Scorch ataca TODOS = dano AoE cascata",
        "Atacar boss durante Invisibilidade = desperdicio de dano",
        "Nestlings vivos buffam boss permanentemente = apos 2-3 ciclos, boss fica impossivel",
        "Fire of Dead Phoenix AoE + Burn stacks = team wipe"
      ],
      como_vencer: "Debuff Immunity AoE (Catherine) cobre a janela de perigo: Scorch×2→Nirvana→Fire. Burn NAO se aplica = sem splash damage. Mate Nestlings RAPIDO antes do estado Worshipper. NAO ataque boss durante Invisibilidade.",
      counters: ["Debuff Immunity AoE (Catherine — core counter, previne Burn = sem splash)", "Matar Nestlings/Eggs rapido (AoE burst, Nastjenka feathers)", "NAO atacar boss durante Invisibilidade", "ATK Penalty + Shield antes de Fire of Dead Phoenix"],
      timing_dica: "Catherine ult em ~17s do ciclo (apos 2o Scorch) = cobre Nirvana + Fire of Dead Phoenix inteiro. Ciclo 24s = 0s Scorch, 6s Scorch, 12s Nirvana, 18s Fire."
    },

    frost_domain: {
      name: "Frost Domain",
      type: "Gear Dungeon",
      drops: "Gear (varia por season)",
      boss: "Ice Boss (3 waves, boss na wave 3)",
      cycle: "18-24s",
      element_boss: "Ice",
      affinity_recomendada: "Resplendence",
      skills: {
        passive: "Debuff-to-Shield — Quando boss aplica debuff no seu time, boss GANHA shield. Feedback loop: mais debuffs = boss mais tanky.",
        skill1: "Dano padrao + aplica debuffs (alimenta a passiva).",
        skill2: "CC forte + debuffs pesados. Janela critica pra Debuff Immunity.",
        buff_prohibition: "Em intervalos especificos, boss IMPEDE seus herois de receber buffs.",
        thorn_shield: "Boss ganha escudo de espinhos que reflete dano de volta."
      },
      o_que_mata: [
        "Ignorar shield do boss (gerado por debuffs no seu time) = boss fica imortal",
        "Debuffs sem cleanse = feed infinito de shields pro boss",
        "Buff Prohibition deixa time exposto na rotacao seguinte",
        "Gastar ults nas waves 1-2 = chegar no boss sem ults"
      ],
      como_vencer: "Catherine Debuff Immunity previne debuffs = boss nao gera shields. Torrin dispela debuffs ja aplicados. Multi-hit (Garett, Sutha) quebra escudo espinhos rapido. GUARDE ULTS pra wave 3 (boss).",
      counters: ["Debuff Immunity AoE (Catherine — previne debuffs = boss nao gera shields)", "Dispel debuffs aliados (Torrin Battle dispel)", "Multi-hit DPS (Garett, Sutha 5 hits — quebram escudo espinhos rapido)", "Shield Dispel no boss se escudo acumular"],
      timing_dica: "Guarde TODOS os ults pra wave 3. Quando sobrar 1-2 inimigos na wave 2, pare de usar skills. Catherine ult logo apos Skill 2 do boss (janela de debuff)."
    },

    ancient_battlefield: {
      name: "Ancient Battlefield",
      type: "Gear Dungeon",
      drops: "Gear (varia por season)",
      boss: "Boss Lightning com Shield Form",
      cycle: "18s (skill a cada 6s)",
      element_boss: "Lightning",
      affinity_recomendada: "Permafrost",
      skills: {
        shield_form: "Shield Form — Boss entra em modo Shield. Dano recebido e CONVERTIDO em shields, ficando progressivamente mais tanky. Tambem ganha ataques AoE mais fortes.",
        skill2: "Lightning Stun — Dano Lightning no heroi MAIS DISTANTE + Stun 5s. CRITICO: Se Stun FALHA ou e DISPELADO, boss toma dano Lightning e entra em Backfire 10s (janela de vulnerabilidade!).",
        skill3: "Self-Buff — Boss se buffa com ATK Up (perigoso). DISPELE imediatamente.",
        skill4: "Shield Form Attack — Dano massivo durante Shield Form."
      },
      o_que_mata: [
        "Shield Form nao countereado = boss imortal + dano AoE crescente",
        "ATK Up do Skill 3 nao dispelado = ataques subsequentes letais",
        "Stun no heroi mais distante (geralmente healer/support) = rotacao quebrada",
        "Nao explorar janela de Backfire = perder fase de vulnerabilidade"
      ],
      como_vencer: "Voresh Buff Prohibition BLOQUEIA self-buff do boss (Skill 3) = boss nao escala. Resistance alta no heroi mais distante pra resistir Stun do Skill 2. Se Stun falha = boss entra em Backfire 10s = janela de burst. ATK Penalty durante Shield Form.",
      counters: ["Buff Prohibition (Voresh — bloqueia self-buff ramp do boss)", "Resistance alta no heroi mais distante (resist Stun = boss entra em Backfire)", "Buff Dispel (Sigrid, Dane — remove ATK Up do Skill 3)", "ATK Penalty durante Shield Form"],
      timing_dica: "Voresh Buff Prohibition ativo ANTES do Skill 3 do boss. Se Stun do Skill 2 falhar, burst IMEDIATO nos 10s de Backfire."
    },

    // ============================================================
    // PVP & RANKING
    // ============================================================

    temporal_vortex: {
      name: "Temporal Vortex — Dahwan's Realm",
      type: "Ranked PvE Boss (daily)",
      boss: "Great River God Dahwan (3 formas)",
      cycle: "Skill a cada 5s, rotacao de fase a cada 18s",
      duracao: "20 minutos maximo",
      reward: "Master Pages, Echoes of Clepsydra, Affinity Solvents (baseado em ranking)",
      mecanica: "Luta de ENDURANCE. Dano total em 20 min = score. Ranking no servidor = rewards diarios.",

      // ============================================================
      // MIST SYSTEM — mecanica central do Dahwan's Realm
      // ============================================================
      mist: {
        descricao: "Dahwan comeca com 100 Mist. Mist e o recurso que determina em qual fase o boss opera. Gerenciar Mist e tao importante quanto DPS.",
        inicio: 100,
        gera_mist: [
          "Dano direto no boss gera Mist",
          "Buffs nos seus herois geram MAIS Mist"
        ],
        remove_mist: [
          "Shields e healing nos seus herois REMOVEM Mist",
          "Debuffs no boss removem MAIS Mist"
        ],
        fases: {
          scorching: {
            threshold: "Mist >= 140",
            duracao: "15 segundos",
            efeito: "Boss toma dano AUMENTADO de Enlightenment/Derivative. Janela de burst para Poison, Burn e Thunderbolt.",
            perigo: "Abyss of Chaos: 5 hits globais de Poison + reseta Mist ao maximo → volta pra Merciful",
            times_ideais: "Poison (Lothair+Twitch+Durango), Burn, Thunderbolt (Perkunte+Orfenna)"
          },
          merciful: {
            threshold: "Mist entre 61-139",
            duracao: "Ate proxima rotacao (18s)",
            efeito: "Neutro. Sem bonus nem penalidade extra.",
            times_ideais: "Qualquer — fase de transicao"
          },
          wrathful: {
            threshold: "Mist <= 60",
            duracao: "15 segundos",
            efeito: "Boss mais agressivo MAS toma dano direto AUMENTADO. Janela de burst para times Crit-focused.",
            perigo: "Boss ataca mais forte — precisa de survival robusto",
            times_ideais: "Dauntless (Nastjenka+Tharivol+Ivellios), Rally, Crit comps"
          }
        }
      },

      // ============================================================
      // ENTRIES — opcoes selecionaveis ANTES da luta
      // ============================================================
      entries: {
        descricao: "Antes da luta, voce escolhe como Mist e acumulado/dissipado. 1 entrada fixa + 2 entradas opcionais. Mudam a cada rotacao.",
        exemplos_conhecidos: [
          "Cada debuff no boss = +4% dano de todos os aliados",
          "Cada debuff no boss reduz DEF dele em 8%",
          "Max stacks de Poison sobe para 60, Burn para 15",
          "Herois com ATK base <1300 ganham +60% ATK",
          "Sem Legendary no time: +30% Ult Restoration, boss -40% DEF",
          "Single hits >10.000 = +30% dano; >500.000 = +60% dano",
          "Basic attack de todos aliados +35% dano"
        ],
        recomendacao_por_time: {
          dauntless_crit: {
            objetivo_mist: "BAIXAR Mist para <= 60 (Wrathful Phase)",
            priorizar: [
              "Entradas que amplificam dano de basic attack (Nastjenka+DA escalam com basic)",
              "Entradas que amplificam single hit / Crit damage",
              "Entradas que aumentam debuff no boss (remove mais Mist = Wrathful mais rapido)"
            ],
            evitar: [
              "Entradas que amplificam buffs nos aliados (gera Mist = afasta de Wrathful)"
            ]
          },
          poison_enlightenment: {
            objetivo_mist: "SUBIR Mist para >= 140 (Scorching Phase)",
            priorizar: [
              "Entradas que aumentam max stacks de Poison/Burn",
              "Entradas de Derivative/Enlightenment damage bonus",
              "Entradas de debuff scaling (cada debuff = +dano)"
            ],
            evitar: [
              "Entradas que amplificam healing/shield (remove Mist = afasta de Scorching)"
            ]
          },
          wild_fire: {
            objetivo_mist: "SUBIR Mist para >= 140 (Scorching Phase)",
            priorizar: [
              "Entradas de Derivative damage bonus",
              "Entradas de single hit damage boost (Flora Vortex explosion = hit massivo)",
              "Entradas de basic attack bonus (Wild dice = basic attacks)"
            ],
            evitar: [
              "Entradas de healing/shield amplification"
            ]
          }
        }
      },

      // ============================================================
      // BOSS ATTACKS
      // ============================================================
      boss_skills: {
        shorebreaker_strike: {
          tipo: "AoE",
          efeito: "Dano em area + aplica Defense Penalty",
          counter: "Posicionar herois para reduzir quantidade de atingidos. Tank/support na frente."
        },
        abyss_of_chaos: {
          tipo: "Global (Scorching Phase only)",
          efeito: "5 hits de Poison em todos os herois + reseta Mist ao maximo",
          counter: "Healing pre-emptivo (Oggok Ult antes) + Poison resist"
        },
        prismatic_cloak: {
          tipo: "Passiva",
          efeito: "Reflete Defense Penalty nos seus herois (ate 50% chance)",
          counter: "~10% variancia no dano por tentativa. Repetir lutas para score otimo."
        }
      },

      regras_rotativas: [
        "Fire/Poison: Boss tem Derivative/Poison Damage Penalties → favorece Poison comp",
        "Lightning: Basic attack bonus OU boss tem Crit/Lightning Penalties → favorece Dauntless",
        "Ice: Battle skill bonus OU boss tem Crit/Ice Penalties → favorece Ice Blast (Henry NAO tem core)",
        "Crit bonus: favorece Dauntless e Rally"
      ],

      stat_thresholds: {
        hp_minimo: "35.000+ por heroi",
        accuracy_debuffers: "280+ (tank/support que aplicam debuff)",
        accuracy_dps: "240+ (DPS com artefatos de Defense Penalty)",
        nota: "Artefatos como Witch's Remains e Crown of the Unclean aplicam Defense Penalty — precisam de Accuracy alta pra acertar"
      },

      o_que_mata: [
        "Time morre cedo = DPS parado = score baixo",
        "Elemento/school errado pras regras rotativas = dano drasticamente reduzido",
        "Boss escala ao longo dos 20 min = precisa sobreviver",
        "Mist management errado = nunca entrar na fase que beneficia seu time",
        "Abyss of Chaos mata herois frageis se Oggok/healer nao ativar antes"
      ],

      como_vencer: "1) Escolher entries que favorecem seu time. 2) Sobrevivencia PRIMEIRO. 3) Gerenciar Mist para a fase correta (Wrathful para Crit, Scorching para Poison). 4) Ajustar time pras regras rotativas semanais. 5) Repetir varias vezes — variancia de 10% por Prismatic Cloak.",

      posicionamento: {
        regra: "Reduzir herois atingidos por Shorebreaker Strike",
        tank_support: "Zeffi/Acilia/Frurbath NA FRENTE, absorbendo AoE",
        carry: "Nastjenka FORA da linha direta do boss",
        dps_ranged: "Tharivol e Ivellios no FUNDO, protegidos"
      }
    },

    arena: {
      name: "Grand Gladiator Arena",
      type: "PvP Assincrono (AI vs AI)",
      mecanica: "Monte lineup defensivo. Ataque lineups de outros jogadores. Se ganhar de alguem com rank maior, TROCA de rank. Se perder, nada acontece.",
      regras: [
        "Herois synced pro nivel do heroi mais alto = fairness",
        "10 Champion Invitations/dia (reset 6h UTC). +10 por 10 Wyrmarrow",
        "Quick Challenge: vitoria instantanea contra rank mais baixo",
        "Todos comecam rank 15.000. Cada 100 ranks melhorados = 10 Wyrmarrow"
      ],
      o_que_mata: [
        "Burst + CC do oponente mata antes de seus supports agirem",
        "Frost meta (Hvitar-based) domina high rank",
        "Comp sem sustain = morre na AI"
      ],
      como_vencer: "Herois 5.0 (Nastjenka, Vinyara, Eurion, Voresh, Hochadir) > mecanicas em early game. Rating individual alto = mais stats. Vinyara drena ult inimigo + Frozen. Voresh strip buffs + Buff Prohibition. Eurion tanque puro. No mid/late game, Dauntless burst toma conta.",
      counters: ["5x herois 5.0 (stats > tudo em early game)", "Vinyara (drena Ult + Frozen + shield aliado fraco)", "Voresh (strip + Buff Prohibition = oponente sem buffs)", "Eurion (Ally Protection todos + anti-morte)"]
    },

    sparkle_tournament: {
      name: "Sparkle Tournament (Guild War)",
      type: "PvP Semanal de Alianca",
      requisito: "Alianca com 20+ membros",
      mecanica: "Dia 1: Setup defensivo. Dia 2: Atacar Sharpteeth Gates (5 jogadores cada). Dia 3: Atacar boss Three Ears. Commander coordena a estrategia.",
      pontuacao: "Ganhar ataque + defesa: 200 pts. Um dos dois: 100 pts. Perder ambos: 0 pts.",
      reward: "Ore milestones: Wyrmarrow, Scholar Scrolls. Ranking individual bonus.",
      como_vencer: "Coordenacao da alianca > composicao individual. Commander precisa deployar membros estrategicamente. Roster diverso e essencial."
    },

    // ============================================================
    // TOWERS & TRIALS
    // ============================================================

    fae_meander: {
      name: "Fae Meander (Fey Meander / Fey Corridor)",
      type: "Torre Auto-Challenge (300 andares)",
      boss_cada: "5-10 andares",
      reward: "Wyrmarrow, Affinity Solvent, Essence of Creation, Heliolite Dice, Skill Scrolls",
      mecanica: "Time escala andares automaticamente. Andares normais: 4 inimigos, CC funciona. Boss floors: mecanicas especificas. Rewards escalam com andares.",
      bosses: {
        ravatrix_decay: {
          name: "Lady of Pristine Decay (Ravatrix)",
          floors: "5, 10, 40, 70, 100, 130, 160",
          mecanica: "Aplica Seed of Corrosion. Precisa de tank + debuff removal + AoE healing.",
          counter: "Frurbath (tank, cleanse, AoE heal, ATK Penalty)"
        },
        ravatrix_green: {
          name: "Lady of Greeneries (Ravatrix)",
          floors: "20, 50, 55, 65, 80, 110, 140, 170",
          mecanica: "Dano Poison MASSIVO com todas skills. #1 causa de wipe na torre.",
          counter: "Debuff Immunity OBRIGATORIA (Catherine AoE). Se previne Poison = dano minimo. Gerenciavel ate andar 140."
        },
        spider_mother: {
          name: "Fungal Spider Mother",
          floors: "30, 60, 90, 120, 150, 180",
          mecanica: "Skill 2 extremamente perigoso. Requer Shield + ATK Penalty.",
          counter: "AoE Shield + ATK Penalty no boss + Frurbath cleanse/heal"
        }
      },
      o_que_mata: [
        "Lady of Greeneries Poison sem Immunity = wipe garantido em andares altos",
        "Herois sub-level em andares 140+ (bosses tem 250 Resistance)",
        "Nao ativar Elemental Affinity (minimo 3 herois da afinidade) = perda grande de stats nos andares altos"
      ],
      como_vencer: "Debuff Immunity e a mecanica MAIS importante da torre. Catherine AoE Debuff Immunity cobre janelas de perigo. 5 herois mesmo elemento pra bonus de afinidade. Use food buffs. Troque DPS por support em andares de sobrevivencia.",
      counters: ["Debuff Immunity AoE (Catherine — essencial)", "5 herois mesmo elemento (bonus afinidade)", "Frurbath (tank + cleanse + AoE heal universal)", "Food buffs antes de andares dificeis"]
    },

    pillar_of_trials: {
      name: "Pillar of Trials",
      type: "Challenge multi-andar (3 waves por andar, boss a cada 10 andares)",
      tipos: [
        { name: "Pillar of Light", element: "Radiance", boss: "Pillar Giant Spirit: Bright + 2 Radiance adds", counter: "Rally heroes burst AoE. Frost debuffs." },
        { name: "Pillar of Taint", element: "Poison", boss: "Pillar Giant Spirit: Tainted + 2 Poison adds", counter: "Poison AoE DoT. Thunderbolt Electrocution." },
        { name: "Pillar of Dark", element: "Necrosis", boss: "Pillar Giant Spirit: Dark + 2 Necrosis adds", counter: "Crowd control + sinergias coordenadas." }
      ],
      o_que_mata: [
        "Usar herois CC em boss floors (bosses IMUNES a controle) = slot desperdicado",
        "Sub-gear — andar 60+ tem 250 Resistance, herois debuff precisam 270+ Accuracy",
        "Falta de AoE = waves normais demoram = time perde HP antes do boss"
      ],
      como_vencer: "TROQUE herois pra boss floors: remova CC e coloque debuffers (Voresh ATK Penalty, Donella Buff Dispel). AoE burst nas waves normais. Boss = debuffs + sustain. Mantenha 270+ Accuracy em debuffers.",
      counters: ["Swap CC→debuffers em boss floors", "AoE burst pra waves normais", "270+ Accuracy em debuffers", "Equip Witchs Remains / Crown of the Unclean em multi-hit ults"]
    },

    // ============================================================
    // FARMING
    // ============================================================

    goblin_lair: {
      name: "Goblin Lair",
      type: "EXP Dungeon (6 waves, sem boss)",
      custo: "10 Energy por run",
      reward: "EXP Potions (melhor ratio XP/stamina do jogo)",
      mecanica: "6 waves de goblins minion. HP baixo, ATK baixo. Speed de clear = eficiencia. 3-star pra desbloquear proximo difficulty. Stages 1-12.",
      o_que_mata: ["Nada — nao e teste de sobrevivencia, e teste de VELOCIDADE"],
      como_vencer: "AoE puro. Herois com grande area de ataque. Rotacao: 2 ults na wave 1, 3 skills restantes na wave 2, repita. Isitarian+Ladehlia sinergia: Shadow Demon = undead summoned → dragon ataque extra. Nastjenka feathers + Sutha phantom = DPS passivo.",
      counters: ["AoE heroes (Ladehlia Shadow Demon, Nastjenka feathers AoE)", "Sinergia Isitarian+Ladehlia (ataques extras por undead summoned)", "Sutha +30% ATK Speed aura (dungeon)", "4x reward multiplier quando disponivel"]
    },

    frey_corridor: {
      name: "Frey Corridor",
      type: "Boss Corridor (progressao de dificuldade)",
      mecanica: "Serie de bosses com dificuldade crescente. Mesmas mecanicas da Fae Meander porem focado em progressao de boss. Cada boss desbloqueado = rewards melhores.",
      como_vencer: "Composicoes especificas por boss. Modulo Torrin+Eurion = sobrevivencia universal. Em floors com Mithrasea/Donella, o diferencial e Manual: priorizar ultis na Mithrasea para impedir ciclo infinito de ressurreicao. Em floors de tank+sustain (ex: 2x Bionphray + Deverick), usar anti-buff dedicado (Tamar) com Accuracy alto. Em floors Fire/Wild (2x Felicity + Caspar), reduzir tempo de luta com controle de ult e foco no backline. Em floors com dive no backline (ex: Lothair), pivotar para Felosia e manter food Ice para segurar ate o fim.",
      counters: ["Modulo sobrevivencia Torrin+Eurion", "DPS de boss: Ladehlia+Sintrellia (Shadow Demon clone)", "Manual em lutas de suporte-duro (focar Mithrasea)", "Anti-buff (Tamar) contra comp de sustain/buff", "Comp Fire/Wild: priorizar Caspar/Felicity e encurtar a luta", "Anti-dive: Felosia (shield+DR+Control Immunity)", "No S1, sem lock persistente de alvo: reposicionar foco a cada janela de ult", "Ajustar time por boss especifico"]
    },

    // ============================================================
    // OUTROS MODOS
    // ============================================================

    adventure_mode: {
      name: "Adventure Mode (Historia Principal)",
      type: "Open-world PvE",
      priority: "#1 — desbloqueia todos os outros modos",
      desc: "Exploracao open-world dividida em shards/regioes. Side quests, puzzles, NPCs.",
      s4_map: "Sea of the Dead (novo mapa sandbox)",
      como_vencer: "Avance ate o cap atual. Thief lockpicking = loot extra. Explore baus escondidos. Complete side quests pra XP/recursos."
    },

    elemental_dungeons: {
      name: "Elemental Dungeons",
      type: "Material Farming",
      reward: "Materiais de evolucao",
      priority: "Alta",
      auto: true,
      como_vencer: "Auto-battle + 2x speed. Troque herois conforme resistencia elemental do dungeon."
    },

    catacombs: {
      name: "Catacombs",
      type: "Gear Farming",
      reward: "Gear drops",
      priority: "Media",
      auto: true,
      como_vencer: "Auto-battle. Foque em dungeons de gear sets que voce precisa."
    },

    ancestral_ruins: {
      name: "Ancestral Ruins (Reborn)",
      type: "Roguelike",
      desc: "Path selection → pick a card buff apos cada batalha. Herois rotativos gratis semanalmente.",
      como_vencer: "Bom pra testar herois que voce nao tem. Priorize buffs de dano nos cards. AoE > single-target."
    },

    infinite_challenge: {
      name: "Infinite Challenge (Reborn)",
      type: "Roguelike puro",
      desc: "Testa conhecimento de mecanicas. Skill-based.",
      como_vencer: "Conheca as mecanicas dos bosses. Adapte composicao a cada wave."
    },

    expedition_mode: {
      name: "Expedition Mode (Reborn)",
      type: "Guild/Team optimization",
      desc: "Foco em otimizacao de guild/time. Todos herois podem brilhar.",
      como_vencer: "Roster diverso importa. Herois de nicho ganham valor aqui."
    },

    // ============================================================
    // NOVOS MODOS S3+ / S6
    // ============================================================

    magichess: {
      name: "Magichess (S6 — Hymn of Chess & Blade)",
      type: "Auto-chess tatico",
      desc: "Modo auto-battler com duelos de 10 minutos. Herois usam School Bonds + Class Bonds para sinergias. Combinacoes certas desbloqueiam efeitos poderosos.",
      rewards: ["Raid Tickets (usados no Quick Raid)", "Dice", "Cosmeticos"],
      como_vencer: "Entenda School Bonds e Class Bonds dos herois. Planeje combinacoes antes de posicionar. Sinergias > stats individuais.",
      added_season: "S6"
    },

    quick_raid: {
      name: "Quick Raid (S6)",
      type: "QoL — Raid instantaneo",
      desc: "Apos completar dungeon pela 1a vez, raid instantaneo com Stamina/Keys + Raid Tickets.",
      applies_to: ["Growth Dungeons", "Equipment Dungeons (Normal)", "Pillar of Trial (todas dificuldades)"],
      cost: "Stamina ou Keys of Resonance + Raid Tickets",
      raid_tickets_source: "Magichess",
      tracks_events: true,
      note: "Missoes com condicoes especificas de batalha ainda exigem play manual.",
      added_season: "S6"
    },

    fallen_shadow_spire: {
      name: "Fallen Shadow Spire (S3+)",
      type: "Dungeon com 4 dificuldades",
      desc: "Dungeon introduzido na S3 (Snarls of Lava). Fonte de Familiar Eggs.",
      rewards: ["Familiar Eggs", "Materiais"],
      added_season: "S3"
    },

    island_system: {
      name: "Island System",
      type: "Progressao / Base building",
      desc: "Sistema de ilha pessoal. TODO: documentar mecanicas detalhadas in-game.",
      note: "Henry confirmou que tem island. Detalhes pendentes.",
      added_season: "S6?"
    }
  },

  // === GAME MODES — EVENTOS ===
  game_events: [
    {
      name: "Season Journey",
      desc: "Chapters com rewards progressivos. Completa-se jogando normalmente"
    },
    {
      name: "Thunder Rumble",
      desc: "Colete Turbid Bells → troque por itens valiosos",
      season: "S1"
    },
    {
      name: "D&D Collaboration",
      desc: "Drizzt Do'Urden, Guenhwyvar, Errtu the Balor. Recorrente.",
      note: "Drizzt e gratuito. Bigby retornou na S3. Eventos D&D recorrentes."
    },
    {
      name: "Adventure Team",
      desc: "Squad de 5 jogadores. 3.000 Wyrmarrow bonus por membro (Res Level 79)",
      note: "Veterano no squad = 1 Legendary Equipment Chest por membro"
    },
    {
      name: "Shadow Returns (HOMM3 Collaboration)",
      desc: "Heroes of Might and Magic III: Shadow's Return. Parceria com HOMM3.",
      rewards: ["Herois/artefatos exclusivos HOMM3", "Angelic Alliance artifact", "Master Genie familiar"],
      note: "Evento ativo na S6. Inicio em Abr/2026.",
      season: "S6"
    },
    {
      name: "Echoing Shadow Summon",
      desc: "Wish List customizavel: 2 Rare DPS Legendarios + 4 Support Legendarios. Milestone-based. Primeiros 10 dias da season.",
      note: "Wish List TRAVADA apos confirmar. Supports devem ser mesma faccao/elemento dos DPS. Pool inclui TODOS Rare DPS Legendarios pre-S6.",
      season: "S6"
    },
    {
      name: "Celebration Server",
      desc: "Servidor especial com rewards massivos para novos e retornando. Ate 1.500 draws e 12 SSR heroes.",
      note: "Lancado 30/Mar/2026. Dawn's Promise, Celebration Extravaganza, Merry Magichess.",
      season: "S6"
    },
    {
      name: "Easter Event",
      desc: "Easter Joy in Adenthia — CDK codes para rewards.",
      season: "S6"
    }
  ],

  // === FAMILIAR / PET SYSTEM (S3+) ===
  familiars: {
    introduced: "S3 — Snarls of Lava (Nov/2025)",
    concept: "Pets de combate que apoiam o time. Cada familiar tem 1 Active Spell + Passive Traits + Talents customizaveis via Fusion.",
    deployment: "1 familiar por time em batalha. Slot unico — escolha importa.",
    persistence: "Familiars carregam entre seasons (progresso permanente). Todo investimento eh de longo prazo.",
    dev_note: "Devs confirmaram: familiars sao 'strategic companions, not mandatory power checks'.",

    // --- Como obter e progredir ---
    how_to_get: [
      "Hatch de ovos obtidos em Fallen Shadow Spire (fonte principal, rodar diariamente)",
      "Eventos e atividades especiais tambem dão ovos",
      "Master Genie: gratis via evento HOMM3 Shadow Returns (completar Central Krewlod chapter)"
    ],
    progression: [
      "Hatch ovos → familiar com traits ALEATORIOS (stats e talents sao RNG)",
      "Merge familiars do MESMO tipo → aumenta raridade → desbloqueia mais skill slots",
      "Fusion → DESTROI 1 familiar e transfere talents/stats para outro (irreversivel)",
      "Maior raridade = mais skill slots ativos = exponencialmente mais forte"
    ],
    rarity_system: "Segue a progressao padrao do jogo (Common → Rare → Epic → Legendary). Mythic eh tier exclusivo (Master Genie). Mais raro = mais slots de habilidade.",

    // --- Meta: Max HP scaling domina ---
    meta_note: "Quase todos top familiars usam dano baseado em Max HP do alvo. Isso escala naturalmente com conteudo endgame (bosses tem HP alto). True Damage (Rollbot) ignora DEF completamente.",

    // --- TALENT SYSTEM ---
    // Cada familiar tem slots de talent. Maior raridade = mais slots ativos.
    // Talents sao ALEATORIOS no hatch. Fusion transfere talents entre familiars (irreversivel).
    talent_system: {
      how_it_works: [
        "Talents aleatorios ao hatch — RNG",
        "Fusion: destroi 1 familiar e transfere talents para outro (IRREVERSIVEL)",
        "Mais raridade = mais talent slots ativos = mais forte exponencialmente",
        "Talents sao slots independentes (nao arvore de skills)"
      ],
      universal_must_have: [
        { name: "Draining Recovery", priority: "CORE", note: "Must Have em TODOS familiars. Sustain/recuperacao. Mantém o familiar vivo." },
        { name: "Healing Boost", priority: "CORE", note: "Must Have em TODOS familiars. Amplifica cura recebida. Base de sobrevivencia." }
      ],
      common_4th: { name: "Accuracy Boost", note: "4o talent mais comum. Garante que habilidades do familiar acertem (debuffs, dano)." },
      per_familiar_talents: {
        Rollbot: {
          signature: ["Mechanical Defense", "Mechanical Damage Bonus"],
          core: ["Draining Recovery", "Healing Boost"],
          note: "Unico familiar com 2 talents de assinatura. Mechanical Damage Bonus > Accuracy Boost."
        },
        Tressym: {
          signature: ["Tressym Strike"],
          core: ["Draining Recovery", "Healing Boost", "Accuracy Boost"],
          note: "Tressym Strike amplifica o efeito de dano do time."
        },
        Stoneborn: {
          signature: ["Golems Defense"],
          core: ["Draining Recovery", "Healing Boost", "Accuracy Boost"],
          note: "Golems Defense garante sobrevivencia pra manter o debuff ativo no boss."
        },
        Mimic: {
          signature: ["Smite Chest", "Calamity Chest"],
          core: ["Healing Boost", "Draining Recovery"],
          note: "2 talents de assinatura. Ambos essenciais pro energy control funcionar. Flapping Wings (+60 Haste) necessario se Vinyara Insp < 3.",
          special_talent: { name: "Flapping Wings", effect: "+60 Skill Haste pro time. CRITICO para combo Vinyara+Mimic." }
        },
        Saberwinger: {
          signature: ["Flapping Wings"],
          core: ["Draining Recovery", "Healing Boost", "Accuracy Boost"],
          note: "Flapping Wings (+60 Haste) eh o talent assinatura."
        },
        Vulture: {
          signature: ["Vultures Majesty"],
          core: ["Draining Recovery", "Healing Boost", "Accuracy Boost"],
          note: "Vultures Majesty melhora a conversao overhealing→true damage."
        }
      },
      talent_priority_order: [
        "1. Talent(s) de assinatura do familiar (efeito unico, insubstituivel)",
        "2. Draining Recovery (sobrevivencia — universal)",
        "3. Healing Boost (sobrevivencia — universal)",
        "4. Accuracy Boost (garante acerto de habilidades)",
        "5. Demais talents conforme disponibilidade"
      ]
    },

    // --- Catalogo completo de familiars ---
    // Ratings: AllClash (Dez/2025). Nota: Tressym tem rating AllClash A/B+ boss,
    // mas na pratica eh DEFAULT para 5/6 bosses Imperial Shadow + Continental Boss.
    // O rating pratico para boss content organizado eh maior que o generico.
    familiars_catalog: [
      {
        name: "Rollbot",
        tier: "S",
        role: "DPS All-Rounder",
        active: "Dispel buffs do inimigo + true damage baseado em Max HP. Mira no inimigo mais fraco.",
        passive: "True damage ignora DEF completamente. Dispel remove shields/buffs antes do dano do time.",
        ratings: { pve: "A", pvp: "S+", boss: "S" },
        priority: "PRIMEIRO familiar a buildar. Versatil em todo conteudo.",
        key_mechanic: "True Damage + Max HP scaling = double-scaling contra bosses endgame (HP alto + DEF alta, ambos beneficiam Rollbot).",
        source: "AllClash S tier"
      },
      {
        name: "Tressym",
        tier: "A (AllClash) / S (pratico para bosses)",
        role: "Damage Amplifier",
        active: "Dano baseado em Max HP do alvo + amplificacao de dano do time.",
        passive: "Nao faz dano proprio significativo, mas MULTIPLICA o output de todos os herois.",
        ratings: { pve: "S", pvp: "B", boss: "B+ (AllClash generico) / S+ (pratico com Attack Aura)" },
        priority: "SEGUNDO familiar a buildar. DEFAULT para 5/6 bosses Imperial Shadow + Continental Boss.",
        note: "Discrepancia: AllClash avalia Boss B+ genericamente, mas guias de boss especifico (dragonheir.info, Imperial Shadow KB) recomendam como DEFAULT. Motivo: Tressym brilha ESPECIFICAMENTE com Attack Aura captain — em comps genericas sem Aura, eh menos efetivo.",
        key_mechanic: "Attack Aura hero (captain) + Tressym = buff ATK multiplicativo + amplificacao de dano = combo MULTIPLICATIVO (nao aditivo).",
        source: "AllClash A tier + dragonheir.info + Imperial Shadow KB"
      },
      {
        name: "Stoneborn",
        tier: "A",
        role: "Boss DPS Specialist",
        active: "Dano baseado em Max HP do alvo.",
        passive: "Aumenta dano RECEBIDO pelo inimigo com maior HP atual (debuff de vulnerabilidade).",
        ratings: { pve: "A", pvp: "B", boss: "S+" },
        priority: "Top para boss fights single-target. Debuff de vulnerabilidade beneficia TIME INTEIRO.",
        key_mechanic: "Debuff de vulnerabilidade = todo o time faz mais dano ao boss. Efeito parecido com Tressym mas via debuff no inimigo ao inves de buff no time.",
        source: "AllClash A tier"
      },
      {
        name: "Mimic",
        tier: "A",
        role: "Debuffer / Energy Control",
        active: "Melhor debuffer do jogo. Controla energia de recarga do inimigo.",
        passive: "Enhanced Recharging Speed Penalty — quando combinado com Vinyara, IMPEDE boss de usar skills.",
        ratings: { pve: "A", pvp: "S+", boss: "B (generico) / S (com Vinyara em boss especifico)" },
        priority: "TERCEIRO familiar. Essencial para Bionphray (Imperial Shadow) + PvP.",
        requirements: "Mimic precisa ser MYTHIC quality para combo Vinyara funcionar confiavelmente. Flapping Wings talent necessario se Vinyara Insp < 3.",
        key_mechanic: "Combo Vinyara+Mimic: Vinyara drena Ultimate Energy + Mimic aplica penalty de recarga → boss NUNCA usa skills → elimina pressao de sobrevivencia.",
        source: "AllClash A tier + dragonheir.info"
      },
      {
        name: "Saberwinger",
        tier: "A",
        role: "DPS + Sustain Hibrido",
        active: "Dano + healing, ambos baseados em Max HP do alvo.",
        passive: "Equilibrio entre dano e cura. Escala bem em todo conteudo.",
        ratings: { pve: "A+", pvp: "B+", boss: "A" },
        priority: "Familiar seguro para conteudo geral. Bom se nao tiver Rollbot.",
        key_mechanic: "Hibrido natural — nunca eh uma escolha ruim. Dano e cura ambos escalam com HP do alvo.",
        source: "AllClash A tier"
      },
      {
        name: "Vulture",
        tier: "B+",
        role: "Healing Support → True Damage",
        active: "Healing que converte OVERHEALING em True Damage (24% rate).",
        passive: "Converte cura excedente em dano. Conceito interessante mas scalers FRACOS.",
        ratings: { pve: "A", pvp: "B+", boss: "B+" },
        priority: "BAIXA. Taxa de conversao de 24% perde muito valor em cada etapa (heal → overheal → 24% vira dano).",
        key_mechanic: "Cadeia de conversao muito longa: cura → parte vira overheal → apenas 24% do overheal vira true damage. Muita perda.",
        source: "AllClash B+ tier"
      },
      {
        name: "Master Genie",
        tier: "S+ (Mythic)",
        role: "Adaptativo Universal",
        rarity: "Mythic (tier exclusivo)",
        active: "Lamp Wish — habilidade ADAPTATIVA que detecta comp do time e aplica efeito mais benefico automaticamente.",
        passive: "3 modos: (1) 1 support + high offense → burst damage buff. (2) 2 supports + endgame → stacking ATK + Crit DMG. (3) Vs sustain PvP → AoE damage + healing reduction.",
        ratings: { pve: "S", pvp: "S", boss: "S" },
        priority: "Se evento HOMM3 ativo: PEGAR IMEDIATAMENTE. Mythic gratis, universalmente forte.",
        how_to_get: "Evento Shadow Returns (HOMM3 Collab) — completar Central Krewlod chapter. GRATIS.",
        key_mechanic: "Adaptativo = nunca precisa trocar. Detecta sua comp e aplica o efeito certo automaticamente.",
        source: "EPlayWorld, VGC, HellHades"
      },
      {
        name: "Thalarin",
        tier: "B+",
        role: "Buffer (ACC/RES)",
        active: "Buffa ACC e RES do time.",
        passive: "Suporte via stats.",
        ratings: { pve: "B+", pvp: "B+", boss: "B+" },
        priority: "BAIXA. ACC e RES podem ser obtidos via gear, artefatos ou buffs de herois. Outros familiars dao efeitos INSUBSTITUIVEIS.",
        source: "AllClash B+ tier"
      },
      {
        name: "Foliage Spiker",
        tier: "B",
        role: "Defensive Melee Support",
        active: "Suporte defensivo para melee.",
        passive: "Protecao para herois corpo-a-corpo.",
        ratings: { pve: "B", pvp: "C+", boss: "B" },
        priority: "MUITO BAIXA. Super nicho — so util em comps melee especificas.",
        source: "AllClash B tier"
      },
      {
        name: "Batwing",
        tier: "?",
        role: "Novo (S5/S6)",
        active: "Introduzido na S5 Hymn of Chess & Blade (Abr/2026).",
        passive: "Dados limitados da comunidade ainda.",
        ratings: { pve: "?", pvp: "?", boss: "?" },
        priority: "Aguardar mais dados antes de investir.",
        source: "Patch notes S5"
      }
    ],

    // --- Hero-Familiar Synergies ---
    synergies: [
      {
        combo: "Attack Aura Captain + Tressym",
        how: "Captain com Attack Aura (Aschetius, Gladys, Beldelle, Irzillas, Rook, Shai'nachtan) + Tressym amplificando = buff ATK multiplicativo + amplificacao de dano. Efeito MULTIPLICATIVO.",
        usage: "Default para 5/6 bosses Imperial Shadow, Continental Boss, e maioria do PvE boss content.",
        heroes: ["Aschetius", "Gladys", "Beldelle", "Irzillas", "Rook", "Shai'nachtan", "Nastjenka", "Lothair"]
      },
      {
        combo: "Vinyara + Mimic (Energy Lock)",
        how: "Vinyara drena Ultimate Energy do boss + Mimic aplica Enhanced Recharging Speed Penalty → boss NUNCA usa skills.",
        usage: "Boss Bionphray (Imperial Shadow). Tambem util em bosses com skills devastadoras.",
        requirements: "Mimic MYTHIC quality. Vinyara Skill Haste > 175. Flapping Wings talent se Vinyara Insp < 3.",
        heroes: ["Vinyara"]
      },
      {
        combo: "Stoneborn + Single-Target DPS Team",
        how: "Stoneborn debuffa vulnerabilidade no alvo com maior HP (o boss). Time INTEIRO faz mais dano ao boss.",
        usage: "Alternativa ao Tressym em boss fights. Melhor quando nao tem Attack Aura captain.",
        heroes: []
      },
      {
        combo: "Rollbot + PvP Comps",
        how: "Dispel remove shields/buffs inimigos ANTES do dano do time chegar. True damage ignora DEF tanky.",
        usage: "PvP Arena, Crown Contest. Contra comps sustain/shield.",
        heroes: []
      },
      {
        combo: "Flora + Familiar integrado (hero-specific)",
        how: "Flora tem familiar PROPRIO na mecanica dela. Ally Wild dice >= 5 → familiar ataca (+25% ATK) + Flora ganha Insight. NAO eh o sistema geral de familiars.",
        usage: "Exclusivo do kit da Flora. Synergiza com Errich (+2 dice max).",
        heroes: ["Flora", "Errich"]
      }
    ],

    // --- Recomendacoes por game mode ---
    recommendations_by_mode: {
      boss_fights: {
        default: "Tressym (amplifica dano do time com Attack Aura captain)",
        exception: "Mimic para Bionphray (energy lock com Vinyara)",
        alternative: "Stoneborn (debuff vulnerabilidade, bom sem Attack Aura)",
        note: "Tressym + Attack Aura eh MULTIPLICATIVO. Sem Aura captain, Stoneborn pode ser melhor."
      },
      pvp: {
        top: "Rollbot (dispel + true damage) ou Mimic (energy control S+)",
        counter_sustain: "Master Genie (healing reduction em modo anti-sustain)",
        note: "Mimic eh S+ em PvP segundo AllClash — energy control domina."
      },
      pve_dungeons: {
        general: "Saberwinger (sustain hibrido A+) ou Rollbot (versatil)",
        aoe: "Tressym (PvE S) para clear AoE",
        note: "Vulture parece bom pra AoE mas taxa de conversao 24% eh fraca."
      },
      fallen_shadow_spire: "Rollbot ou Saberwinger — runs mais consistentes"
    },

    // --- Estrategia de investimento (medium spender) ---
    investment_priority: [
      "1. Rollbot — melhor all-rounder S tier, util em TUDO (buildar primeiro)",
      "2. Tressym — default para boss content com Attack Aura (Imperial Shadow, Continental Boss)",
      "3. Mimic — essencial para Bionphray + PvP S+. PRECISA ser Mythic quality para combo Vinyara.",
      "4. Master Genie — se evento HOMM3 ativo, pegar GRATIS (Mythic tier, universalmente S)",
      "5. Stoneborn — alternativa boss sem Attack Aura. Debuff de vulnerabilidade beneficia todo time.",
      "6. Saberwinger — safe pick para conteudo geral. Nao priorizar antes dos 5 acima."
    ],
    investment_tips: [
      "NAO hatch e level tudo aleatoriamente. Guardar ovos para batch sessions.",
      "Focar em 2-3 familiars top ao inves de espalhar recursos.",
      "Merge MESMO tipo para subir raridade (mais talent slots = exponencialmente mais forte).",
      "Fusion eh IRREVERSIVEL — planejar quais talents quer ANTES de sacrificar familiars.",
      "Prioridade de talent: Assinatura > Draining Recovery > Healing Boost > Accuracy Boost.",
      "Mimic PRECISA chegar a Mythic para combo Vinyara funcionar. Nao usar antes disso.",
      "Fallen Shadow Spire DIARIAMENTE — fonte principal de ovos."
    ],

    // --- Fontes ---
    sources: [
      "AllClash: allclash.com/best-familiars-in-dragonheir-silent-gods-builds/ (tier list Dez/2025)",
      "AllClash: builds individuais (Rollbot, Stoneborn, Mimic, Tressym, Saberwinger, Vulture)",
      "DragonHeir.info: dragonheir.info/article/2179 (Continental Challenge guide)",
      "DragonHeir.info: dragonheir.info/article/1780 (S3 Continental — Flapping Wings +60 Haste)",
      "HellHades: hellhades.com/dragonheir-x-heroes-iii-shadows-return-event-guide/",
      "Facebook Oficial: DragonheirGame (S3 announcement + Fusion guide)",
      "Imperial Shadow Recast KB: docs/imperial-shadow-recast-knowledge-base.md"
    ],
    last_updated: "2026-04-11"
  },

  // === SEASON SYSTEM ===
  season_system: {
    current: "S6 — Hymn of Chess & Blade",
    current_date: "2026-04-07",
    resets_eliminated: true,
    note: "Season resets foram ELIMINADOS no Reborn. Progresso e permanente. Seasons sao content expansions.",
    timeline: [
      { season: "S1", name: "Reborn Launch", date: "Jul/2025" },
      { season: "S2", name: "Fall of Increscent", date: "~Set-Out/2025" },
      { season: "S3", name: "Snarls of Lava", date: "Nov/2025", new_features: ["Familiars", "Fallen Shadow Spire", "Tower Defense"] },
      { season: "S4", name: "Phantom of San Ramalla", date: "~Jan-Fev/2026" },
      { season: "S5", name: "(Transicao)", date: "~Mar/2026" },
      { season: "S6", name: "Hymn of Chess & Blade", date: "Abr/2026", new_features: ["Magichess", "Quick Raid", "Echoing Shadow Summon", "HOMM3 Collab"] }
    ],
    duration_estimate: "~10-14 semanas por season"
  },

  // === RESONANCE LEVEL ===
  resonance: {
    concept: "Toda XP vai para pool unico da conta. Quando sobe, TODOS os herois sobem junto.",
    key_points: [
      "Heroi novo adquirido = imediatamente no Resonance Level atual",
      "Sem necessidade de farmar XP individual",
      "Foco em composicao e sinergia, nao grind de level"
    ],
    breakthrough: {
      frequency: "A cada 10 niveis",
      bonuses: ["Reducao de velocidade de ultimate inimigo", "Aumento de dano dos aliados"]
    },
    // CAPTAIN AURA — confirmado 06/Mar/2026: NAO stacka!
    // Apenas a aura do capitao e ativa. Herois com aura que NAO sao capitao NAO contribuem.
    // Escolha de aura: +24% ATK > +24% Crit DMG quando <3/5 herois tem crit alto.
    captain_aura: {
      stacks: false,
      note: "So 1 aura ativa — a do capitao escolhido. Demais herois com aura NAO contribuem.",
      tip: "+24% ATK e a escolha mais segura (amplifica tudo). +24% Crit DMG so compensa se maioria do time tem crit ~100%.",
      last_updated: "2026-03-06"
    },

    milestones: [
      { level: 20, unlock: "Recompensas de pre-registro" },
      { level: 30, unlock: "Captain Skill / Enhanced Skill (2*)" },
      { level: 50, unlock: "Artifact slot (3*)" },
      { level: 70, unlock: "Positive Rune slot (4*)" },
      { level: 79, unlock: "Adventure Team rewards (3.000 Wyrmarrow)" },
      { level: 90, unlock: "Negative Rune slot (5*)" },
      { level: 100, unlock: "Level maximo (Rank 5)" }
    ],
    farming: [
      "Goblin Dungeon: melhor ratio XP/stamina",
      "Adventure Mode: sempre avance ate o cap primeiro",
      "Daily stamina refills: 150 gems cada (primeiros 2)",
      "4x reward multiplier quando disponivel em dungeons"
    ]
  },

  // === CHEST SELECTION ===
  chests: {
    day5: {
      name: "Legendary Hero Option Chest I",
      total_heroes: 18,
      decisions: "Usados: Lossenia (Ice S) + Durango (Poison SS). Sintrellia obtida de outra fonte.",
      heroes: [
        { name: "Tharivol", element: "Lightning", ac_tier: "A", hh: "3.7", has: false },
        { name: "Errich", element: "Fire", ac_tier: "A", hh: "3.6", has: true },
        { name: "Rhash", element: "Fire", ac_tier: "SS", hh: "3.6", has: true },
        { name: "Caspar", element: "Fire", ac_tier: "S", hh: "4.1", has: true },
        { name: "Lossenia", element: "Ice", ac_tier: "S", hh: "4.0", has: true, source: "bau" },
        { name: "Hochadir", element: "Ice", ac_tier: "S", hh: "3.8", has: true },
        { name: "Garett", element: "Lightning", ac_tier: null, hh: "4.2", has: true, source: "bau aleatorio" },
        { name: "Sutha", element: "Lightning", ac_tier: "A", hh: "3.8", has: true },
        { name: "Divine Ascetic", element: "Lightning", ac_tier: "NEW", hh: null, has: true, source: "evento" },
        { name: "Jathalea", element: "Poison", ac_tier: "A", hh: "3.6", has: true },
        { name: "Vicana", element: "Poison", ac_tier: "S", hh: "3.4", has: true },
        { name: "Durango", element: "Poison", ac_tier: "SS", hh: "4.3", has: true, source: "bau" },
        { name: "Irzillas", element: "Necrosis", ac_tier: "A", hh: "3.6", has: true },
        { name: "Ladehlia", element: "Necrosis", ac_tier: "SS", hh: null, has: true },
        { name: "Sintrellia", element: "Necrosis", ac_tier: "S", hh: null, has: true, source: "outra fonte" },
        { name: "Lorentheel", element: "Radiance", ac_tier: "S", hh: "4.4", has: true, source: "banner x4" },
        { name: "Huberg", element: "Radiance", ac_tier: "S", hh: "4.0", has: true },
        { name: "Alfie", element: "Fire", ac_tier: "S", hh: "2.9", has: true, rarity: "Epic" }
      ]
    },
    day10: {
      name: "Legendary Hero Prime Chest I",
      total_heroes: 6,
      decisions: "Usado: Auster (Ice SS, 17/Fev). Melhor DPS Ice do jogo. 3 Frost = Frozen 5s + auto-Frozen.",
      heroes: [
        { name: "Felicity", element: "Fire", ac_tier: "A", hh: "4.0", has: true },
        { name: "Auster", element: "Ice", ac_tier: "SS", hh: "4.5", has: true, source: "bau" },
        { name: "Premtsa", element: "Necrosis", ac_tier: "SS", hh: "3.9", has: false },
        { name: "Ivellios", element: "Lightning", ac_tier: "B", hh: "4.4", has: true },
        { name: "Twitch", element: "Poison", ac_tier: "S", hh: "3.7", has: true },
        { name: "Philto", element: "Radiance", ac_tier: "S", hh: "4.3", has: true, source: "banner" }
      ]
    },
    legendary_option_II: {
      name: "Legendary Hero Option Chest II",
      total_heroes: 15,
      obtained: "2026-02-24",
      decisions: "Escolhida: Tamar (Lightning SS, DI #27). Anti-buff specialist. 24/Fev.",
      heroes: [
        { name: "Huldork", element: "Fire", ac_tier: "S", hh: "4.2", has: true, source: "Target Summons 3" },
        { name: "Journ", element: "Fire", ac_tier: "B", hh: "2.6", has: true },
        { name: "Eurion", element: "Ice", ac_tier: "A", hh: "4.1", has: true },
        { name: "Vinyara", element: "Ice", ac_tier: "A", hh: "4.0", has: true },
        { name: "Lucien", element: "Ice", ac_tier: "A", hh: "3.9", has: true, source: "banner atual" },
        { name: "Alphanarsy", element: "Ice", ac_tier: "S", hh: "0", has: true },
        { name: "Torrin", element: "Necrosis", ac_tier: "A", hh: "4.1", has: true },
        { name: "Ripekas", element: "Necrosis", ac_tier: "A", hh: "4.3", has: true, source: "Chest selecao S6 (08/Abr)" },
        { name: "Gillian", element: "Radiance", ac_tier: "A", hh: "3.6", has: true, source: "Echoing Shadow (09/Abr)" },
        { name: "Donella", element: "Radiance", ac_tier: "SS", hh: "3.3", has: true },
        { name: "Sagomir", element: "Radiance", ac_tier: "B", hh: "3.3", has: true },
        { name: "Tamar", element: "Lightning", ac_tier: "SS", hh: "4.0", has: true, source: "bau" },
        { name: "Bionphray", element: "Lightning", ac_tier: "C", hh: "2.8", has: true, source: "Echoing Shadow (09/Abr)" },
        { name: "Talwer", element: "Poison", ac_tier: "B", hh: "3.2", has: true },
        { name: "Oggok", element: "Poison", ac_tier: "A", hh: "4.0", has: true, source: "Target Summons 3" }
      ]
    },
    s1_legendary_prince: {
      name: "S1 Legendary Hero Prince Chest",
      total_heroes: 24,
      obtained: "2026-03-15",
      decisions: "Escolhido: Tharivol (Lightning Dauntless, DI #35). 15/Mar. Desbloqueia 4 comps AllClash Endgame. Battle ignora Immortality. Sinergia core com Nastjenka.",
      heroes: [
        { name: "Twitch", element: "Poison", ac_tier: "S", hh: "3.7", has: true },
        { name: "Jathalea", element: "Poison", ac_tier: "A", hh: "3.6", has: true },
        { name: "Vicana", element: "Poison", ac_tier: "S", hh: "3.4", has: true },
        { name: "Durango", element: "Poison", ac_tier: "SS", hh: "4.3", has: true },
        { name: "Philto", element: "Radiance", ac_tier: "S", hh: "4.3", has: true },
        { name: "Lorentheel", element: "Radiance", ac_tier: "S", hh: "4.4", has: true },
        { name: "Huberg", element: "Radiance", ac_tier: "S", hh: "4.0", has: true },
        { name: "Alton", element: "Radiance", ac_tier: "S", hh: "4.0", di: 19, has: false },
        { name: "Auster", element: "Ice", ac_tier: "SS", hh: "4.5", has: true },
        { name: "Lossenia", element: "Ice", ac_tier: "S", hh: "4.0", has: true },
        { name: "Hochadir", element: "Ice", ac_tier: "S", hh: "3.8", has: true },
        { name: "Felicity", element: "Fire", ac_tier: "A", hh: "4.0", has: true },
        { name: "Errich", element: "Fire", ac_tier: "A", hh: "3.6", has: true },
        { name: "Rhash", element: "Fire", ac_tier: "SS", hh: "3.6", has: true },
        { name: "Caspar", element: "Fire", ac_tier: "S", hh: "4.1", has: true },
        { name: "Ivellios", element: "Lightning", ac_tier: "B", hh: "4.4", has: true },
        { name: "Divine Ascetic", element: "Lightning", ac_tier: "NEW", hh: null, has: true },
        { name: "Sutha", element: "Lightning", ac_tier: "A", hh: "3.8", has: true },
        { name: "Tharivol", element: "Lightning", ac_tier: "A", hh: "3.7", di: 35, has: true, source: "bau" },
        { name: "Garett", element: "Lightning", ac_tier: null, hh: "4.2", has: true },
        { name: "Premtsa", element: "Necrosis", ac_tier: "SS", hh: "3.9", di: 25, has: false },
        { name: "Irzillas", element: "Necrosis", ac_tier: "A", hh: "3.6", di: 39, has: true },
        { name: "Ladehlia", element: "Necrosis", ac_tier: "SS", hh: null, has: true },
        { name: "Sintrellia", element: "Necrosis", ac_tier: "S", hh: null, has: true }
      ]
    },
    epic_s1: { decision: "Isolde (Fire Tank A, HH 3.8). Preenche lacuna de tank Fire.", done: true },
    rare_s1: { decision: "Guardou — ja tem todos os Raros S1. Abre quando lancarem novos.", done: true },
    // === S6 CHESTS — Disponíveis Abr/2026 ===
    s6_celebration_feast: {
      name: "Legendary Hero Prime Chest (Celebration Feast)",
      type: "evento",
      status: "disponivel",
      note: "Feenja escolhida (10/Abr). Restantes ainda disponiveis via Hero's Anthem",
      heroes: [
        { name: "Synarell", has: false },
        { name: "Theodemer", has: false },
        { name: "Feenja", has: true, source: "Celebration Feast (10/Abr)" },
        { name: "Dalk", has: false },
        { name: "Quaesitia", has: false },
        { name: "Astaion", has: false },
        { name: "Rose", has: false },
        { name: "Malak", has: false },
        { name: "Halramar", has: false }
      ]
    },
    s6_heros_anthem: {
      name: "Legendary Support Option Chest (Hero's Anthem)",
      type: "evento",
      status: "disponivel 10/Abr",
      note: "Recomendacao: Fathomdown (exclusivo deste bau, Vortex 5, Lightning). Feenja ja obtida via Celebration Feast",
      heroes: [
        { name: "Synarell", has: false },
        { name: "Theodemer", has: false },
        { name: "Feenja", has: true, source: "Celebration Feast (10/Abr)" },
        { name: "Dalk", has: false },
        { name: "Quaesitia", has: false },
        { name: "Astaion", has: false },
        { name: "Rose", has: false },
        { name: "Malak", has: false },
        { name: "Halramar", has: false },
        { name: "Phaessa", has: true, source: "Echoing Shadow (09/Abr)" },
        { name: "Ivira", has: false },
        { name: "Fathomdown", has: false },
        { name: "Rashaad", has: false }
      ]
    },
    s6_tier10: {
      name: "Legendary Hero Prime Chest I (Tier 10)",
      type: "tier",
      tier: 10,
      progress: "DC 9980/12000",
      status: "quase (faltam ~2020 DC)",
      note: "Premtsa é o único novo. PRIORIDADE: garantir Premtsa esta season",
      heroes: [
        { name: "Felicity", element: "Fire", has: true },
        { name: "Auster", element: "Ice", has: true },
        { name: "Premtsa", element: "Necrosis", has: false, pick: true },
        { name: "Ivellios", element: "Lightning", has: true },
        { name: "Twitch", element: "Poison", has: true },
        { name: "Philto", element: "Radiance", has: true }
      ]
    },
    s6_tier11: {
      name: "Legendary Hero Prime Chest II (Tier 11)",
      type: "tier",
      tier: 11,
      status: "futuro (apos tier 10)",
      note: "Apenas Garrika e Gulden são novos",
      heroes: [
        { name: "Garrika", has: false },
        { name: "Gulden", has: false },
        { name: "Zeffi", has: true },
        { name: "Acilia", has: true },
        { name: "Felosia", has: true },
        { name: "Ergander", has: true }
      ]
    },
    s6_tier12: {
      name: "Legendary Selection Chest I (Tier 12)",
      type: "tier",
      tier: 12,
      status: "futuro",
      note: "Apenas Lelwanis é nova. Todos os outros já obtidos",
      heroes: [
        { name: "Flora", element: "Fire", has: true },
        { name: "Hvitar", element: "Ice", has: true },
        { name: "Nastjenka", element: "Lightning", has: true },
        { name: "Thelendor", element: "Radiance", has: true },
        { name: "Lothair", element: "Poison", has: true },
        { name: "Lelwanis", element: "Necrosis", has: false }
      ]
    },
    s6_tier13: {
      name: "Legendary Selection Chest II (Tier 13)",
      type: "tier",
      tier: 13,
      status: "futuro",
      note: "Todos novos (S2 monsters)",
      heroes: [
        { name: "Khrysos", has: false },
        { name: "Elecebre", has: false },
        { name: "Grishnaar", has: false },
        { name: "Reytah", has: false },
        { name: "Berengar", has: false },
        { name: "Mithrasea", has: false }
      ]
    },
    s6_tier14: {
      name: "Legendary Hero Collection I (Tier 14)",
      type: "tier",
      tier: 14,
      status: "futuro",
      note: "Pool grande (~25+ heróis). Mistura S1-S3. Vários já obtidos via Echoing Shadow",
      heroes: [
        { name: "Fyfeir", has: false },
        { name: "Irmoush", has: false },
        { name: "The Dark Lady", has: false },
        { name: "Fredegonda", has: false },
        { name: "Alaura", has: false },
        { name: "Paixton", has: false },
        { name: "Ozul", has: false },
        { name: "Guinavivre", has: false },
        { name: "Rook", has: false },
        { name: "Aemonleyda", has: true, source: "Echoing Shadow (09/Abr)" },
        { name: "Chorak", has: false },
        { name: "Bernade", has: false },
        { name: "Beldelle", has: false },
        { name: "Perkunte", has: true, source: "Echoing Shadow (09/Abr)" },
        { name: "Sleight", has: false },
        { name: "Gladys", has: false },
        { name: "Aschetius", has: false },
        { name: "Elecebre", has: false },
        { name: "Mithrasea", has: false },
        { name: "Reytah", has: false },
        { name: "Lelwanis", has: false },
        { name: "Khrysos", has: false }
      ]
    },
    s6_tier15: {
      name: "Tier 15 (detalhes pendentes)",
      type: "tier",
      tier: 15,
      status: "futuro — Henry vai informar depois"
    },
    notes: [
      "Lothair NAO esta em nenhum bau (erro anterior corrigido 2026-02-11)",
      "Bau 1 = 18 opcoes, Bau 2 = 6 opcoes",
      "INSPIRACAO: So Legendarios tem. Duplicata → Inspiration level up.",
      "Legendario novo > Inspiracao no early game (diversidade > profundidade)",
      "Epicos/Raros duplicados dao apenas material — sempre heroi novo",
      "S6: Henry deve atingir Tier 10 esta season (Premtsa). Tiers 11+ ficam pra futuro"
    ]
  },

  // === COOKING — Migrado para public/data/cooking.js (DATA_COOKING) ===

  // === VERSION INFO ===
  version: "Reborn (Jul/2025)",
  current_season: "S1",
  season_name: "Season 1",
  season_start_date: "2026-02-07",
  season_end_date: "2026-04-18",
  season_duration_note: "Seasons Reborn duram ~70 dias. Server 139: 7/Fev — 18/Abr",

  // === SEASON PHASES (3 fases por season, War Order 28 dias cada) ===
  season_phases: [
    {
      id: 1,
      name: "Fase 1 — Fundação",
      start: "2026-02-07",
      end: "2026-02-28",
      days: 21,
      description: "Construir roster, desbloquear modos, subir poder",
      activities: [
        { name: "Clepsydra Torrent", days: "1-6", note: "Rebuild heróis grátis, recuperar materiais gastos", priority: "alta" },
        { name: "Banners Exclusivos", days: "1-14", note: "Banner 2 (Nastjenka DONE), Banner 4 (Lothair Day 14 confirmado)", priority: "alta" },
        { name: "Baús Lendários", days: "5, 10", note: "Dia 5: Lossenia+Durango DONE. Dia 10: Auster DONE", priority: "alta" },
        { name: "Echoes of Otherworld", days: "1-28", note: "80 Heliolite Summons → Legendary garantido", priority: "media" },
        { name: "Main Quest", days: "1-21", note: "Avançar até desbloquear todos os dungeons", priority: "alta" },
        { name: "Walker's Trails (War Order 1)", days: "1-28", note: "Quests diárias/semanais → Travel EXP → battle pass rewards", priority: "media" },
        { name: "Goblin Lair", days: "1+", note: "Farm XP Potions. Speed run com time AoE", priority: "media" },
        { name: "Temporal Vortex", days: "1+", note: "DPS ranking diário. Dificuldade 3 abre Dia 12", priority: "alta" },
        { name: "Gear Farming", days: "5+", note: "Farmar gear sets para DPS e Tank", priority: "media" },
        { name: "Affinity Evolution", days: "1+", note: "Resplendence ATK > Permafrost ATK > Permafrost HP > Ulceration ATK", priority: "media" }
      ]
    },
    {
      id: 2,
      name: "Fase 2 — Progressão",
      start: "2026-02-28",
      end: "2026-03-21",
      days: 21,
      description: "Otimizar times, subir dungeons, ranking competitivo",
      activities: [
        { name: "Champion Emblem", days: "caps 1-5", note: "Desafios individuais de alta dificuldade. Caps abrem sequencialmente", priority: "alta" },
        { name: "World Challenge", days: "caps 1-5", note: "Co-op do servidor. 5 capítulos progressivos", priority: "media" },
        { name: "Dungeon Racing Rankings", days: "progressivo", note: "Rankings de speed run abrem por estágio", priority: "media" },
        { name: "Walker's Trails (War Order 2)", days: "29-56", note: "Segunda fase do battle pass", priority: "media" },
        { name: "Arena Push", days: "contínuo", note: "PvP ranking. Time 5x 5.0 para early advantage", priority: "media" },
        { name: "Temporal Vortex Push", days: "contínuo", note: "Push Sea Deity challenges. Maximizar Echoes de Clepsydra", priority: "alta" },
        { name: "Fae Meander", days: "contínuo", note: "Subir andares (60 = Gumm)", priority: "alta" },
        { name: "Pillar of Trials", days: "contínuo", note: "3 trials → Lyker + Hero's Laurel", priority: "alta" },
        { name: "Gear Otimização", days: "contínuo", note: "Refinar loadouts, subir peças para +20", priority: "media" }
      ]
    },
    {
      id: 3,
      name: "Fase 3 — Endgame",
      start: "2026-03-21",
      end: "2026-04-18",
      days: 28,
      description: "Conteúdo final, maximizar rewards antes do reset",
      activities: [
        { name: "Otherworld Exploration", days: "57+", note: "Novo mapa (Snowland). Quests + Resurgent Dragon boss", priority: "alta" },
        { name: "Walker's Trails (War Order 3)", days: "57-84", note: "Terceira e última fase do battle pass", priority: "media" },
        { name: "Clepsydra Ranking Settlement", days: "final", note: "Rewards baseados no ranking final de Echoes", priority: "alta" },
        { name: "Temporal Vortex Final Push", days: "contínuo", note: "Maximizar Echoes → Pure Sandcores (100:1 conversão)", priority: "alta" },
        { name: "Boundless Chest", days: "antes do reset", note: "Escolher 4 peças de gear para carregar para S2", priority: "alta" },
        { name: "Preparação S2", days: "últimos dias", note: "Planejar pulls S2, verificar Wyrmarrow/Crystal budget", priority: "media" },
        { name: "Fae/Pillar Milestones", days: "contínuo", note: "Último push para milestones (Fae 180, Pillar completo)", priority: "media" },
        { name: "Season Shop", days: "antes do reset", note: "Gastar Pure Sandcores restantes", priority: "media" }
      ]
    }
  ],
  server_type: "Veteran",
  server_note: "Herois S1 disponiveis",
  seasons: ["S1"],

  // === SEASON ROADMAP (visao do futuro — Henry esta 3 seasons atras do jogo global) ===
  season_roadmap: [
    {
      season: "S1", name: "Reborn Launch",
      schools_added: [],
      exclusive_legendaries: ["Flora", "Hvitar", "Lothair", "Nastjenka", "Thelendor", "Lelwanis"],
      henry_targets: ["Nastjenka (DONE)", "Lothair (DONE)", "Flora (DONE)", "Hvitar (DONE 13/Mar)"],
      henry_verdict: "Investido. Nastjenka, Lothair, Flora, Hvitar — todos obtidos via banners S1"
    },
    {
      season: "S2", name: "Misty Sea Voyage",
      schools_added: ["Burn", "Thunderbolt", "Ice Blast"],
      exclusive_legendaries: ["Perkunte", "Beldelle", "Aschetius"],
      key_heroes: [
        { name: "Perkunte", element: "Lightning", school: "Thunderbolt", ac_tier: "S", note: "Thunderbolt god. Precisa time novo do zero" },
        { name: "Aschetius", element: "Fire", school: "Burn", ac_tier: "A", note: "Core Burn. Henry tem Fire fraco" },
        { name: "Beldelle", element: "Ice", school: "Ice Blast", ac_tier: "A", note: "Single target. Henry ja tem Ice forte" }
      ],
      free_at_start: "2 Legendarios gratis + Forthfaring Summons (10 pulls = 1 legendary)",
      henry_verdict: "POUPAR. Nenhum exclusivo sinergiza com times atuais. Usar summons gratis e acumular Wyrmarrow"
    },
    {
      season: "S3", name: "Snarls of Lava",
      schools_added: ["Shadow", "Aura", "Corrosion"],
      exclusive_legendaries: ["Rook", "Ozul", "Aemonleyda"],
      key_heroes: [
        { name: "Rook", element: "Poison", school: "Corrosion", ac_tier: "S", note: "TRUE DAMAGE. Perfeito pro time Poison (Lothair+Durango+Vicana)" },
        { name: "Aemonleyda", element: "Radiance", school: "Aura", ac_tier: "S", note: "Aura enabler. Desbloqueia Lorentheel(Insp3!)+Philto+Donella como time de dano" },
        { name: "Ozul", element: "Necrosis", school: "Shadow", ac_tier: "S", note: "Shadow DPS. Bom mas Necrosis ja esta forte" }
      ],
      free_at_start: "2 Legendarios gratis + Forthfaring Summons + Bigby (D&D event)",
      henry_verdict: "ALL-IN. Rook ou Aemonleyda no banner (300 pulls = 30k Wyrmarrow). Season mais importante"
    },
    {
      season: "S4", name: "Echoes of the Deep",
      schools_added: [],
      exclusive_legendaries: ["Maashtur", "Yfeir"],
      key_heroes: [
        { name: "Maashtur", element: "Lightning", school: "Defense", ac_tier: "?", note: "Tank Lightning. Eurion ja e excelente" },
        { name: "Yfeir", element: "Radiance", school: "Support", ac_tier: "?", note: "Clones, foco PVP" },
        { name: "Calavera", element: "Poison", school: "Support", ac_tier: "?", note: "GRATIS (evento continental). Healer Poison + DEF Up II" },
        { name: "Feliciberta", element: "Ice", school: "Support", ac_tier: "?", note: "Rouba buffs. Boa mas nao essencial" },
        { name: "Shahla", element: "Radiance", school: "Aura", ac_tier: "?", note: "Crit Damage enabler. Otima SE foi de Aemonleyda na S3" }
      ],
      free_at_start: "Calavera (continental reward) + Forthfaring Summons",
      henry_verdict: "Relaxar. Pegar Calavera gratis. Nenhum exclusivo vale 30k"
    }
  ],

  // === RESOURCE ACCUMULATION PLAN (cross-season) ===
  wyrmarrow_plan: {
    s1_spend: 30000,
    s1_note: "Tudo no Lothair. Zerado apos banner",
    s2_target: 30000,
    s2_note: "Acumular via dailies + first-clear dungeon resets. NAO gastar em banner S2",
    s3_spend: 30000,
    s3_note: "ALL-IN no Rook ou Aemonleyda (300 pulls garantido)",
    s4_note: "Sem pressao. Calavera e gratis"
  },

  artifact_refine: {
    max_level: 6,
    mythic_stat_range:     { min: 15, max: 335 },
    legendary_stat_range:  { min: 12, max: 250 },
    note: "Cristais nao transferem bem entre seasons - gastar quase tudo agora"
  }
};
