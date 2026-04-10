// cooking.js — Cooking recipes, ingredients, merchants, activity mapping
// Fontes: dragonheir.info/cooking, naguide, in-game data
// Last update: 2026-04-10

window.DATA_COOKING = {

  // === REGRAS DO SISTEMA ===
  rules: {
    max_ingredients: 4,
    buff_duration_sec: 600,
    buff_duration_label: "10 min",
    stacking: "NAO acumulam — nova comida substitui buff anterior",
    offline: "Timer continua contando mesmo offline",
    archaeologist_bonus: "+1 nos dice rolls de culinaria",
    cookbook: "Receitas descobertas ficam salvas permanentemente"
  },

  golden_rule: "Buff elemental (+5%) so beneficia herois daquele elemento. Buff secundario (ATK/DEF/RES) aplica a todos os 5. Escolha o elemento da MAIORIA do time.",
  school_recipes: false, // Confirmado: NAO existem recipes de School Bond
  img_base: "https://i.dmzgame.com/dragonheir/img/item/",

  // === MAPA DE IMAGENS (recipe id → food code) ===
  images: {
    "flaming-chili-meatballs": "food_1001",
    "arctic-soothing-soup": "food_1002",
    "feast-of-thunder": "food_1004",
    "feast-of-light": "food_1005",
    "abyssal-crock": "food_1006",
    "corrupted-meat-pie": "food_1008",
    "northland-assorted-jelly": "food_1011",
    "ritual-of-the-dead": "food_1016",
    "prayers-caviar": "food_1018",
    "poisonous-mushroom-soup": "food_1026",
    "electric-light-rum": "food_1028",
    "aquitaine-meat-pie": "food_1029",
    "deer-horn-pie": "food_1031",
    "arbortean-beef-stew": "food_1032",
    "royal-fish-soup": "food_1035",
    "aquitaine-yogurt": "food_1036",
    "vanilla-stew": "food_1076",
    "bay-reach-grape-wine": "food_1077",
    "dragon-deitys-blessing-pie": "food_1078",
    "smoked-ham": "food_1086",
    "seafood-chowder": "food_1088",
    "sweet-fruit-wine": "food_1089"
  },

  // === INGREDIENTES — CATALOGO COMPLETO ===
  // Fonte: dragonheir.info/materials (verificado Abr/2026)
  // Formato: npc = nome do NPC, location = local exato, region = area do mapa
  ingredients: {
    // --- Elementais (ingrediente-chave por elemento) ---
    "Flaming Chili":        { element: "Fire",      cost: 2000, npc: "Barton the Merchant", location: "Arbortea Roost", region: "Trailblazer Riverland", category: "elemental",
                              alt_vendor: { cost: 2200, npc: "Crimson Crow Guide", location: "Near Grave of Course", region: "Northern Nytheria" } },
    "Arctic Cod":           { element: "Ice",       cost: 2200, npc: "Fishmonger", location: "Crimson Iris Port", region: "Crimson Iris Port", category: "elemental",
                              alt_vendor: { cost: 2200, npc: "Crimson Crow Guide", location: "Near Grave of Course", region: "Northern Nytheria" } },
    "High Ridge Ice":       { element: "Ice",       cost: 2200, npc: "Crimson Crow Liaison", location: "Field of Burrows", region: "Starfall Plains", category: "elemental",
                              alt_vendor: { cost: 2200, npc: "Barton the Merchant", location: "Arbortea Roost", region: "Trailblazer Riverland" } },
    "Charged Eel":          { element: "Lightning", cost: 2200, npc: "Crimson Crow Merchant", location: "Starfall Plain Wilderness", region: "Starfall Plains", category: "elemental",
                              alt_vendor: { cost: 2200, npc: "Crimson Crow Guide", location: "Near Grave of Course", region: "Northern Nytheria" } },
    "Crackling Fruit":      { element: "Lightning", cost: 2200, npc: "Barton the Merchant", location: "Arbortea Roost", region: "Trailblazer Riverland", category: "elemental" },
    "Poisonous Fly Agaric": { element: "Poison",   cost: 2200, npc: "Crimson Crow Guide", location: "Near Grave of Course", region: "Northern Nytheria", category: "elemental" },
    "Zombie Crab Shell":    { element: "Necrotic",  cost: 2200, npc: "Merchant", location: "Crimson Iris Port Market", region: "Crimson Iris Port", category: "elemental" },
    "Specter Innards":      { element: "Necrotic",  cost: 2200, npc: "Merchant", location: "Crimson Iris Port Market", region: "Crimson Iris Port", category: "elemental" },
    "Holy Light Fruit":     { element: "Radiant",   cost: 2200, npc: "Barton the Merchant", location: "Arbortea Roost", region: "Trailblazer Riverland", category: "elemental",
                              alt_vendor: { cost: 2200, npc: "Merchant", location: "Aquitaine", region: "Aquitaine" } },
    "Glowing Fish Eggs":    { element: "Radiant",   cost: 2200, npc: "Merchant", location: "Crimson Iris Port Market", region: "Crimson Iris Port", category: "elemental" },

    // --- Carnes ---
    "Beast Meat":           { element: null, cost: 1300, npc: "Ingredient Merchant", location: "Arbortea Market", region: "Trailblazer Riverland", category: "meat", note: "UNIVERSAL: usado em 8/10 Legendary ATK",
                              alt_vendor: { cost: 1300, npc: "Crimson Crow Merchant", location: "Starfall Plain Wilderness", region: "Starfall Plains" } },
    "Boar Meat":            { element: null, cost: 1500, npc: "Crimson Crow Cartographer Intern", location: "Ruined Trade Road", region: "Trailblazer Riverland", category: "meat" },
    "Minced Meat":          { element: null, cost: 800,  npc: "Ingredient Merchant", location: "Arbortea Market", region: "Trailblazer Riverland", category: "meat" },

    // --- Peixes ---
    "Bigmouthed Salmon":    { element: null, cost: 1300, npc: "Fishmonger", location: "Crimson Iris Port", region: "Crimson Iris Port", category: "fish" },
    "Piranha":              { element: null, cost: 1299, npc: "Fishmonger", location: "Crimson Iris Port", region: "Crimson Iris Port", category: "fish" },
    "Red Carp":             { element: null, cost: 800,  npc: "Fishmonger", location: "Crimson Iris Port", region: "Crimson Iris Port", category: "fish" },
    "Whisker Shrimp":       { element: null, cost: 600,  npc: "Fishmonger", location: "Crimson Iris Port", region: "Crimson Iris Port", category: "fish" },
    "White Clam":           { element: null, cost: 600,  npc: "Fishmonger", location: "Crimson Iris Port", region: "Crimson Iris Port", category: "fish" },

    // --- Vegetais / Frutas ---
    "Arbortean Tomato":     { element: null, cost: 1300, npc: "Crimson Crow Aide", location: "Road to Grand Arena", region: "Trailblazer Riverland", category: "produce" },
    "Aquitaine Apple":      { element: null, cost: 1300, npc: "Crimson Crow Merchant", location: "Starfall Plain Wilderness", region: "Starfall Plains", category: "produce" },
    "Elven Wheat":          { element: null, cost: 1200, npc: "Grocer", location: "Tavira Market", region: "Northern Nytheria", category: "produce" },
    "Brussel Sprout":       { element: null, cost: 400,  npc: "Crimson Crow Aide", location: "Arbortea (norte)", region: "Trailblazer Riverland", category: "produce" },
    "Wild Raspberry":       { element: null, cost: 400,  npc: "Various merchants", location: "Multiple", region: "Nytheria", category: "produce" },
    "Bay Reach Grapes":     { element: null, cost: 800,  npc: "Merchant", location: "Aquitaine", region: "Aquitaine", category: "produce" },
    "Wheat":                { element: null, cost: 300,  npc: "Various merchants", location: "Multiple", region: "Nytheria", category: "produce" },
    "Lumina Tarragon":      { element: null, cost: 600,  npc: "Ingredient Merchant", location: "Arbortea Market", region: "Trailblazer Riverland", category: "produce" },
    "Fleetfoot Berries":    { element: null, cost: 400,  npc: "Various merchants", location: "Multiple", region: "Nytheria", category: "produce" },
    "Regen Grass":          { element: null, cost: 200,  npc: "Various merchants", location: "Multiple", region: "Nytheria", category: "produce" },

    // --- Laticinios ---
    "Milk":                 { element: null, cost: 400,  npc: "Various merchants", location: "Multiple", region: "Nytheria", category: "dairy" },
    "Goat Milk":            { element: null, cost: 600,  npc: "Various merchants", location: "Multiple", region: "Nytheria", category: "dairy" },
    "Yak Milk":             { element: null, cost: 1400, npc: "Merchant", location: "Crimson Iris Port Market", region: "Crimson Iris Port", category: "dairy" },

    // --- Outros ---
    "Gapworm Larval Exoskeleton": { element: null, cost: 400, npc: "Various merchants", location: "Multiple", region: "Nytheria", category: "other" },
    "Black Speckled Moth Wings":  { element: null, cost: 200, npc: "Various merchants", location: "Multiple", region: "Nytheria", category: "other" },
    "Meat of Poisonous Swamp Boar": { element: "Poison", cost: 1800, npc: "Crimson Crow Guide", location: "Near Grave of Course", region: "Northern Nytheria", category: "meat" }
  },

  // === RECIPES — LEGENDARY (Tier 1: +5% Elem + Stat) ===
  legendary: [
    // --- ATK variants (DPS) ---
    {
      id: "flaming-chili-meatballs",
      name: "Flaming Chili Meatballs",
      element: "Fire",
      type: "atk",
      effect: "Fire Damage +5%, ATK +10%",
      stats: { elem_dmg: 5, atk_pct: 10 },
      ingredients: [
        { name: "Flaming Chili", qty: 2 },
        { name: "Beast Meat", qty: 1 }
      ],
      cost_total: 5700, // 2x2200 + 1x1300
      alt_ingredients: [
        [{ name: "Flaming Chili", qty: 2 }, { name: "Boar Meat", qty: 2 }]
      ]
    },
    {
      id: "arctic-soothing-soup",
      name: "Arctic Soothing Soup",
      element: "Ice",
      type: "atk",
      effect: "Cold Damage +5%, ATK +10%",
      stats: { elem_dmg: 5, atk_pct: 10 },
      ingredients: [
        { name: "Arctic Cod", qty: 2 },
        { name: "Beast Meat", qty: 1 }
      ],
      cost_total: 5700,
      alt_ingredients: [
        [{ name: "Arctic Cod", qty: 2 }, { name: "Boar Meat", qty: 1 }]
      ]
    },
    {
      id: "feast-of-thunder",
      name: "Feast of Thunder",
      element: "Lightning",
      type: "atk",
      effect: "Lightning Damage +5%, ATK +10%",
      stats: { elem_dmg: 5, atk_pct: 10 },
      ingredients: [
        { name: "Charged Eel", qty: 2 },
        { name: "Beast Meat", qty: 1 }
      ],
      cost_total: 5700
    },
    {
      id: "corrupted-meat-pie",
      name: "Corrupted Meat Pie",
      element: "Poison",
      type: "atk",
      effect: "Poison Damage +5%, ATK +10%",
      stats: { elem_dmg: 5, atk_pct: 10 },
      ingredients: [
        { name: "Poisonous Fly Agaric", qty: 2 },
        { name: "Beast Meat", qty: 2 }
      ],
      cost_total: 7000
    },
    {
      id: "abyssal-crock",
      name: "Abyssal Crock",
      element: "Necrotic",
      type: "atk",
      effect: "Necrotic Damage +5%, ATK +10%",
      stats: { elem_dmg: 5, atk_pct: 10 },
      ingredients: [
        { name: "Zombie Crab Shell", qty: 2 },
        { name: "Beast Meat", qty: 2 }
      ],
      cost_total: 7000,
      alt_ingredients: [
        [{ name: "Zombie Crab Shell", qty: 2 }, { name: "Boar Meat", qty: 1 }]
      ]
    },
    {
      id: "feast-of-light",
      name: "Feast of Light",
      element: "Radiant",
      type: "atk",
      effect: "Radiant Damage +5%, ATK +10%",
      stats: { elem_dmg: 5, atk_pct: 10 },
      ingredients: [
        { name: "Holy Light Fruit", qty: 2 },
        { name: "Beast Meat", qty: 1 }
      ],
      cost_total: 5700
    },

    // --- DEF/RES variants (Survival) ---
    // NOTA: Fire NAO tem variante DEF Legendary
    {
      id: "northland-assorted-jelly",
      name: "Northland Assorted Jelly",
      element: "Ice",
      type: "def",
      effect: "Cold Damage +5%, DEF +10%",
      stats: { elem_dmg: 5, def_pct: 10 },
      ingredients: [
        { name: "High Ridge Ice", qty: 4 }
      ],
      cost_total: 8800,
      alt_ingredients: [
        [{ name: "High Ridge Ice", qty: 2 }, { name: "Elven Wheat", qty: 2 }],
        [{ name: "Arctic Cod", qty: 2 }, { name: "Arbortean Tomato", qty: 2 }]
      ]
    },
    {
      id: "electric-light-rum",
      name: "Electric & Light Rum",
      element: "Lightning",
      type: "def",
      effect: "Lightning Damage +5%, DEF +10%",
      stats: { elem_dmg: 5, def_pct: 10 },
      ingredients: [
        { name: "Crackling Fruit", qty: 4 }
      ],
      cost_total: 8800,
      alt_ingredients: [
        [{ name: "Crackling Fruit", qty: 2 }, { name: "Aquitaine Apple", qty: 2 }]
      ]
    },
    {
      id: "poisonous-mushroom-soup",
      name: "Poisonous Mushroom Soup",
      element: "Poison",
      type: "def",
      effect: "Poison Damage +5%, RES +15",
      stats: { elem_dmg: 5, res_flat: 15 },
      ingredients: [
        { name: "Poisonous Fly Agaric", qty: 4 }
      ],
      cost_total: 8800,
      alt_ingredients: [
        [{ name: "Poisonous Fly Agaric", qty: 2 }, { name: "Elven Wheat", qty: 1 }],
        [{ name: "Meat of Poisonous Swamp Boar", qty: 1 }, { name: "Poisonous Fly Agaric", qty: 1 }, { name: "Brussel Sprout", qty: 1 }, { name: "Arbortean Tomato", qty: 1 }]
      ]
    },
    {
      id: "ritual-of-the-dead",
      name: "Ritual of the Dead",
      element: "Necrotic",
      type: "def",
      effect: "Necrotic Damage +5%, DEF +10%",
      stats: { elem_dmg: 5, def_pct: 10 },
      ingredients: [
        { name: "Zombie Crab Shell", qty: 2 },
        { name: "Piranha", qty: 2 }
      ],
      cost_total: 6800,
      alt_ingredients: [
        [{ name: "Zombie Crab Shell", qty: 2 }, { name: "Bigmouthed Salmon", qty: 2 }],
        [{ name: "Specter Innards", qty: 2 }, { name: "Piranha", qty: 1 }]
      ]
    },
    {
      id: "prayers-caviar",
      name: "Prayer's Caviar",
      element: "Radiant",
      type: "def",
      effect: "Radiant Damage +5%, DEF +10%",
      stats: { elem_dmg: 5, def_pct: 10 },
      ingredients: [
        { name: "Glowing Fish Eggs", qty: 2 },
        { name: "Piranha", qty: 1 }
      ],
      cost_total: 5600,
      alt_ingredients: [
        [{ name: "Glowing Fish Eggs", qty: 2 }, { name: "Bigmouthed Salmon", qty: 2 }],
        [{ name: "Holy Light Fruit", qty: 2 }, { name: "Bigmouthed Salmon", qty: 2 }]
      ]
    }
  ],

  // === RECIPES — EPIC (Tier 2: Stat generico forte) ===
  epic: [
    {
      id: "arbortean-beef-stew",
      name: "Arbortean Beef Stew",
      effect: "ATK +10%, Accuracy +15",
      stats: { atk_pct: 10, accuracy: 15 },
      ingredients: [
        { name: "Beast Meat", qty: 2 },
        { name: "Arbortean Tomato", qty: 1 }
      ],
      cost_total: 3400,
      use_case: "DPS em times mistos / quando nenhum elemento domina"
    },
    {
      id: "deer-horn-pie",
      name: "Deer Horn Pie",
      effect: "Max HP +10%, Accuracy +15",
      stats: { hp_pct: 10, accuracy: 15 },
      ingredients: [
        { name: "Elven Wheat", qty: 2 },
        { name: "Arbortean Tomato", qty: 1 }
      ],
      cost_total: 2000,
      use_case: "Tank/survival geral"
    },
    {
      id: "aquitaine-meat-pie",
      name: "Aquitaine Meat Pie",
      effect: "Max HP +10%, ATK +5%",
      stats: { hp_pct: 10, atk_pct: 5 },
      ingredients: [
        { name: "Elven Wheat", qty: 2 },
        { name: "Boar Meat", qty: 1 }
      ],
      cost_total: 2500,
      use_case: "Hibrido HP+DPS"
    },
    {
      id: "royal-fish-soup",
      name: "Royal Fish Soup",
      effect: "DEF +10%, Accuracy +15",
      stats: { def_pct: 10, accuracy: 15 },
      ingredients: [
        { name: "Bigmouthed Salmon", qty: 2 },
        { name: "Arbortean Tomato", qty: 1 }
      ],
      cost_total: 4400,
      use_case: "Sobrevivencia em conteudo dificil"
    },
    {
      id: "sweet-fruit-wine",
      name: "Sweet Fruit Wine",
      effect: "Accuracy +25",
      stats: { accuracy: 25 },
      ingredients: [
        { name: "Aquitaine Apple", qty: 3 }
      ],
      cost_total: 2400,
      use_case: "Quando accuracy e gargalo (bosses com evasion)"
    },
    {
      id: "aquitaine-yogurt",
      name: "Aquitaine Yogurt",
      effect: "Accuracy +20, RES +20",
      stats: { accuracy: 20, res_flat: 20 },
      ingredients: [
        { name: "Aquitaine Apple", qty: 2 },
        { name: "Yak Milk", qty: 2 }
      ],
      cost_total: 3200,
      use_case: "PvP / conteudo com debuffs pesados"
    },
    {
      id: "smoked-ham",
      name: "Smoked Ham",
      effect: "ATK +10%",
      stats: { atk_pct: 10 },
      ingredients: [
        { name: "Beast Meat", qty: 3 }
      ],
      cost_total: 3900,
      use_case: "ATK puro quando accuracy nao importa"
    },
    {
      id: "seafood-chowder",
      name: "Seafood Chowder",
      effect: "DEF +10%",
      stats: { def_pct: 10 },
      ingredients: [
        { name: "Bigmouthed Salmon", qty: 3 }
      ],
      cost_total: 5400,
      use_case: "DEF puro para auto-farm"
    },
    {
      id: "dragon-deitys-blessing-pie",
      name: "Dragon Deity's Blessing Pie",
      effect: "Max HP +10%, ATK +5%",
      stats: { hp_pct: 10, atk_pct: 5 },
      ingredients: [
        { name: "Elven Wheat", qty: 2 },
        { name: "Beast Meat", qty: 1 },
        { name: "Lumina Tarragon", qty: 1 }
      ],
      cost_total: 3800,
      use_case: "Versao premium do Aquitaine Meat Pie"
    },
    {
      id: "bay-reach-grape-wine",
      name: "Bay Reach Grape Wine",
      effect: "Accuracy +20, Max HP +4%",
      stats: { accuracy: 20, hp_pct: 4 },
      ingredients: [
        { name: "Wheat", qty: 2 },
        { name: "Bay Reach Grapes", qty: 2 }
      ],
      cost_total: 2200,
      use_case: "Accuracy + HP barato"
    },
    {
      id: "vanilla-stew",
      name: "Vanilla Stew",
      effect: "Accuracy +10, ATK +4%",
      stats: { accuracy: 10, atk_pct: 4 },
      ingredients: [
        { name: "Beast Meat", qty: 1 },
        { name: "Lumina Tarragon", qty: 2 }
      ],
      cost_total: 2500,
      use_case: "Balanced ATK+Accuracy barato"
    }
  ],

  // === MAPEAMENTO POR ATIVIDADE (S6 — Afinidades: Devitalization, Incandescence, Vertigo) ===
  food_by_activity: [
    // --- Vertigo (Lightning + Necrosis) ---
    { activity: "Grave Curse",      affinity: "Vertigo",       team_element: "Lightning", food_id: "feast-of-thunder",        reason: "4/5 Lightning" },
    { activity: "Grave Rot",        affinity: "Vertigo",       team_element: "Lightning", food_id: "feast-of-thunder",        reason: "4/5 Lightning" },
    { activity: "Heretical Ruins",  affinity: "Vertigo",       team_element: "Lightning", food_id: "feast-of-thunder",        reason: "4/5 Lightning" },
    { activity: "Temporal Vortex",  affinity: "Vertigo",       team_element: "Lightning", food_id: "feast-of-thunder",        reason: "PvP burst, Lightning core" },
    { activity: "World Bosses (3)", affinity: "Vertigo",       team_element: "Necrotic",  food_id: "abyssal-crock",           reason: "3/5 Necrosis + ATK universal" },

    // --- Devitalization (Ice + Poison) ---
    { activity: "Grave Venom",      affinity: "Devitalization", team_element: "Poison",   food_id: "corrupted-meat-pie",      reason: "5/5 Poison" },
    { activity: "Ancient Battlefield", affinity: "Devitalization", team_element: "Ice",   food_id: "arctic-soothing-soup",    reason: "Ice team + ATK" },
    { activity: "Fae Meander",      affinity: "Devitalization", team_element: "Ice",      food_id: "arctic-soothing-soup",    reason: "DPS checks" },
    { activity: "Pillar of Trials", affinity: "Devitalization", team_element: "Ice",      food_id: "arctic-soothing-soup",    reason: "Escala dificuldade, ATK > DEF" },
    { activity: "Goblin Lair",      affinity: "Devitalization", team_element: "Ice",      food_id: "northland-assorted-jelly", reason: "Auto-farm, DEF > ATK" },
    { activity: "Arena",            affinity: "Devitalization", team_element: "Ice",      food_id: "northland-assorted-jelly", reason: "PvP defensiva" },

    // --- Misto / Generico ---
    { activity: "Magichess",        affinity: "varies",        team_element: "mixed",     food_id: "arbortean-beef-stew",     reason: "ATK generico, times mistos por rodada" },
    { activity: "Island/Exploration", affinity: "varies",      team_element: "mixed",     food_id: "smoked-ham",              reason: "Barato, casual content" }
  ],

  // === TOP RECIPES PARA ESTOCAR (custo-beneficio x cobertura) ===
  stock_priority: [
    {
      rank: 1,
      food_id: "feast-of-thunder",
      covers: ["Grave Curse", "Grave Rot", "Heretical Ruins", "Temporal Vortex"],
      activities_count: 4,
      shopping: [
        { ingredient: "Charged Eel", qty: 2, merchant: "Crimson Crow Merchant — Starfall Plain Wilderness (Starfall Plains)", cost: 4400 },
        { ingredient: "Beast Meat", qty: 1, merchant: "Ingredient Merchant — Arbortea Market (Trailblazer Riverland)", cost: 1300 }
      ],
      cost_per_cook: 5700
    },
    {
      rank: 2,
      food_id: "arctic-soothing-soup",
      covers: ["Ancient Battlefield", "Fae Meander", "Pillar of Trials"],
      activities_count: 3,
      shopping: [
        { ingredient: "Arctic Cod", qty: 2, merchant: "Fishmonger — Crimson Iris Port (costa)", cost: 4400 },
        { ingredient: "Beast Meat", qty: 1, merchant: "Ingredient Merchant — Arbortea Market (Trailblazer Riverland)", cost: 1300 }
      ],
      cost_per_cook: 5700
    },
    {
      rank: 3,
      food_id: "northland-assorted-jelly",
      covers: ["Goblin Lair", "Arena"],
      activities_count: 2,
      shopping: [
        { ingredient: "High Ridge Ice", qty: 2, merchant: "Crimson Crow Liaison — Field of Burrows (Starfall Plains)", cost: 4400 },
        { ingredient: "Elven Wheat", qty: 2, merchant: "Grocer — Tavira Market (Northern Nytheria)", cost: 2400 }
      ],
      cost_per_cook: 6800
    },
    {
      rank: 4,
      food_id: "corrupted-meat-pie",
      covers: ["Grave Venom"],
      activities_count: 1,
      shopping: [
        { ingredient: "Poisonous Fly Agaric", qty: 2, merchant: "Crimson Crow Guide — Near Grave of Course (Northern Nytheria)", cost: 4400 },
        { ingredient: "Beast Meat", qty: 2, merchant: "Ingredient Merchant — Arbortea Market (Trailblazer Riverland)", cost: 2600 }
      ],
      cost_per_cook: 7000
    },
    {
      rank: 5,
      food_id: "abyssal-crock",
      covers: ["World Bosses (3)"],
      activities_count: 1,
      shopping: [
        { ingredient: "Zombie Crab Shell", qty: 2, merchant: "Merchant — Crimson Iris Port Market (costa)", cost: 4400 },
        { ingredient: "Beast Meat", qty: 2, merchant: "Ingredient Merchant — Arbortea Market (Trailblazer Riverland)", cost: 2600 }
      ],
      cost_per_cook: 7000
    }
  ],

  // === ROTA DE COMPRAS OTIMIZADA ===
  shopping_route: [
    { stop: 1, location: "Arbortea Market + Roost", region: "Trailblazer Riverland", npc: "Ingredient Merchant / Barton the Merchant", buy: ["Beast Meat", "Flaming Chili", "Holy Light Fruit", "Crackling Fruit", "Lumina Tarragon"], note: "Hub central: carnes, elementais Fire/Radiant/Lightning. Barton fica no Roost (area alta da cidade)" },
    { stop: 2, location: "Starfall Plain Wilderness", region: "Starfall Plains (oeste, perto de Athalean)", npc: "Crimson Crow Merchant", buy: ["Charged Eel", "Aquitaine Apple"], note: "NPC patrulha a estrada perto do settlement elfico Athalean" },
    { stop: 3, location: "Crimson Iris Port", region: "Crimson Iris Port (costa)", npc: "Fishmonger / Merchant", buy: ["Arctic Cod", "Bigmouthed Salmon", "Zombie Crab Shell", "Glowing Fish Eggs"], note: "Fishmonger no pier vende peixes. Merchant no Market vende elementais Necrotic/Radiant" },
    { stop: 4, location: "Near Grave of Course", region: "Northern Nytheria", npc: "Crimson Crow Guide", buy: ["Poisonous Fly Agaric", "Charged Eel"], note: "NPC fica na estrada ANTES da entrada da dungeon" },
    { stop: 5, location: "Tavira Market", region: "Northern Nytheria", npc: "Grocer", buy: ["Elven Wheat"], note: "Tavira fica ao norte, perto de Heretical Ruins" },
    { stop: 6, location: "Road to Grand Arena", region: "Trailblazer Riverland", npc: "Crimson Crow Aide", buy: ["Arbortean Tomato", "Brussel Sprout"], note: "NPC caminha pela estrada ao norte de Arbortea, rota para a Arena" }
  ],

  // === NOTAS DE REFERENCIA ===
  notes: [
    "Beast Meat e o ingrediente mais usado: 8/10 Legendary ATK recipes",
    "Fire NAO tem variante Legendary DEF — use Arbortean Beef Stew ou Smoked Ham como alternativa",
    "Recipes de School Bond NAO existem — cooking e 100% element + stats genericos",
    "Alt ingredients: algumas recipes tem combinacoes alternativas, verifique alt_ingredients",
    "Custo medio Legendary ATK: ~5700-7000 gold por cook",
    "Custo medio Epic: ~2000-4400 gold por cook",
    "Para atividades casuais, Epic recipes tem melhor custo-beneficio"
  ]
}
