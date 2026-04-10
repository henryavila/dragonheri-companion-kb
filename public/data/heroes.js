// heroes.js — 316 heroes database (dragonheir.info API, updated 2026-04-08)
// Source: https://i.dmzgame.com/dragonheir/json/en/heroes-2025.json
// Tier source: https://i.dmzgame.com/dragonheir/json/common/tier.json
window.DATA_HEROES = [
  {
    "id": 20420,
    "name": "Acilia",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Resistance by 50.0 in Grand Gladiator Arena battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4.5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Divine Favor",
        "description": "For each debuff dispelled or resisted, gains 1 stack of Oathkeeper's Glory, up to 10 stacks."
      },
      "battle": {
        "name": "Glory of Platinum",
        "description": "Heals allies within range by [+10%Target's Max HP][+1200%Enlightenment]."
      },
      "ultimate": {
        "name": "Holy Light Descension",
        "description": "Dispels all debuffs from all allies, granting them Debuff Immunity for 10.0s. Then heals all allies by [+1%Target's Max HP][+400%Enlightenment] every 0.5s for 5.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210007,
        "show_name": "Inspiration 2",
        "spell_tips": "When healing an ally with less than 50% HP, grants 1 stack of Recovery Over Time for 8.0s. This skill only takes effect once during a period."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Resistance +50"
      },
      {
        "id": 7240004,
        "show_name": "Inspiration 5",
        "spell_tips": "Has a 35% chance to get immune to the Control to be inflicted."
      }
    ],
    "tj_team": [
      20840,
      21270,
      20300,
      22410
    ],
    "tj_eq": [
      311190,
      311189,
      311188,
      311187,
      310328,
      310327,
      310326,
      310325,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000101,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 21390,
    "name": "Felosia",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Merciful Cure",
        "description": "While the hero is alive, 15% of the damage taken by any ally will be converted into a shield for them that lasts for 10.0s."
      },
      "battle": {
        "name": "Guarding Fence",
        "description": "Grants a [+10%Target's Max HP][+1500%Enlightenment] shield to each ally within range for 10.0s and grants them Defense Up I for 5.0s."
      },
      "ultimate": {
        "name": "Fearless Bulwark",
        "description": "Grants a [+12%Target's Max HP][+2900%Enlightenment] shield to each ally for 10.0s and grants them 30% Damage Reduction and Control Immunity for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210017,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero grants 15% more shield."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240010,
        "show_name": "Inspiration 5",
        "spell_tips": "Buffs granted with the battle skill cannot be dispelled."
      }
    ],
    "tj_team": [
      20120,
      20920,
      20770,
      20060,
      21690,
      23080,
      24780,
      20210
    ],
    "tj_eq": [
      310348,
      310346,
      310347,
      310345,
      310328,
      310326,
      310327,
      310325,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000127,
      8000188,
      8000131,
      8000089,
      8000063,
      8000068
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20410,
    "name": "Flora",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Pact Servant",
        "description": "When an ally's Wild dice roll is ≥5, the Familiar attacks the ally's current target 1 additional time, dealing [+25%Attack]Derivative. Flora gains 1 stack of Insight, up to  stacks."
      },
      "battle": {
        "name": "Flaming Sphere",
        "description": "The Familiar launches 2 fireballs at enemies, dealing [+100%Attack]Derivative. When the hero's Insight reaches max stacks, this skill's Wild dice roll will always be the max value."
      },
      "ultimate": {
        "name": "Pillar of Secret Flame",
        "description": "Deals [+300%Attack]Derivative to an enemy and inflicts a Vortex lasting 10.0s. During this time, the Vortex gains 1 energy stack each time the target takes damage from Wild skills. Vortex explodes upon expiration, dealing additional damage, with each stack dealing additional [+125%Attack]Derivative. If the Vortex energy reaches 16 stacks, deals extra [+900%Attack]Derivative."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210014,
        "show_name": "Inspiration 2",
        "spell_tips": "Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260020,
        "show_name": "Inspiration 5",
        "spell_tips": "Gains 10 stacks of Insight as the battle starts, 40 stacks at most."
      }
    ],
    "tj_team": [
      21400,
      23060,
      20810,
      23800
    ],
    "tj_eq": [
      310324,
      310323,
      310322,
      310321,
      310376,
      310375,
      310374,
      310373,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000113,
      8000134,
      8000066
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20430,
    "name": "Grishnaar",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Orc",
    "career": "?",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Reflection",
        "description": "Reduces the hero's damage taken by 25% and increases Resistance by 30%. When the hero grants Ally Protection to any ally, the hero also shares the aforementioned effects with that ally (the exact value of the increased Resistance will be shared)."
      },
      "battle": {
        "name": "War Devotee",
        "description": "Grants Ally Protection and Control Immunity to the ally with the highest Crit Damage for 10.0s. This state cannot be dispelled. Then grants a [+15%Target's Max HP]shield for 10.0s and Defense Up II to the hero and this ally. This skill is guaranteed to be cast as the battle starts, and no cast action is required upon releasing."
      },
      "ultimate": {
        "name": "Frenzy Massacre",
        "description": "Deals [+550%Defense]Lightning Damage to all enemies and reduces their Ultimate Energy by 30.0, with a 100% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7260011,
        "show_name": "Inspiration 5",
        "spell_tips": "The amount of shield granted by the hero's battle skill is now based on the hero's HP, changing the shield to [+15%Max HP] shield."
      },
      {
        "id": 7210017,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero grants 15% more shield."
      },
      {
        "id": 7260012,
        "show_name": "Inspiration 5",
        "spell_tips": "The Damage Reduction from the passive skill increases to 35%."
      },
      {
        "id": 7250000,
        "spell_tips": "DEF% +30%"
      },
      {
        "id": 7260013,
        "show_name": "Inspiration 5",
        "spell_tips": "The hero's battle skill takes effect on an extra ally with the lowest HP."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310328,
      310326,
      310327,
      310325,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20120,
    "name": "Hvitar",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Dragon",
    "career": "?",
    "captain": "Increases all allies' Attack by 30% in Grand Gladiator Arena battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Frigid Deadland",
        "description": "Changes the weather to Icewind for 15.0s as the battle starts. While Icewind is in effect and when enemies are inflicted with Frost, deals additional [+22%Attack]Derivative over time to them. Enemies with HP below 15% will be Executed. Boss units are immune to the Execution, but will receive an additional [+600%Attack]Derivative instead."
      },
      "battle": {
        "name": "Ice Storm",
        "description": "Unleashes Frost Breath, dealing [+400%Attack]Cold Damage to enemies within range, with a 75.0% chance to inflict Frost for 5.0s."
      },
      "ultimate": {
        "name": "Breath of Frost",
        "description": "Changes the weather to Icewind for 15.0s. Then attacks all enemies to deal [+640%Attack]Cold Damage; for enemies with Frozen, removes Frozen and deals additional [+360%Attack]Cold Damage. Each enemy with Frost increases this damage by 15%."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210015,
        "show_name": "Inspiration 2",
        "spell_tips": "For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260024,
        "show_name": "Inspiration 5",
        "spell_tips": "The ultimate skill increases the count of enemies inflicted with Frost by 2 additionally."
      }
    ],
    "tj_team": [
      20920,
      21390,
      20990,
      22330,
      21620,
      20240,
      21420,
      20210
    ],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310316,
      310314,
      310315,
      310313,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000110,
      8000182,
      8000079,
      8000078,
      8000060,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20450,
    "name": "Khrysos",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 30%.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Sunfire Blessing",
        "description": "When a shield granted by the hero is is reduced, dispelled, or vanishes in any way, converts 50% of the shield consumed into healing."
      },
      "battle": {
        "name": "Holy Fire Smite",
        "description": "Casts 3 Holy Fire attacks, each dealing [+100%Attack]Fire Damage to enemies within range, with a 75% chance of dispelling 1 buff from them. Grants a [+15%Target's Max HP] shield to the ally with the lowest Current HP for 5.0s."
      },
      "ultimate": {
        "name": "Might of Gold",
        "description": "Dispels all enemy shields and deals [+500%Attack][+10%Max HP]Fire Damage to them, with a 75.0% chance of inflicting Attack Penalty II for 10.0s. Meanwhile, grants a [+25%Target's Max HP] shield to each ally for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7260002,
        "show_name": "Inspiration 5",
        "spell_tips": "The hero gains a [+15%Max HP] shield when casting the battle skill."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7260003,
        "show_name": "Inspiration 5",
        "spell_tips": "The hero grants 30% more shield."
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7260004,
        "show_name": "Inspiration 5",
        "spell_tips": "The shield conversion rate of the passive skill to healing is increased to 75%."
      }
    ],
    "tj_team": [
      21400,
      23060,
      20810,
      23800
    ],
    "tj_eq": [
      311194,
      311193,
      311192,
      311191,
      311190,
      311189,
      311188,
      311187,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000196,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 21770,
    "name": "Lelwanis",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Melee",
    "race": "Dragon",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 30% in Grand Gladiator Arena battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Dragon God's Lineage",
        "description": "When any target on the field dies, permanently gains 1 stack of Dragon Blood. Takes 30% less damage from targets 3 tiles away or further."
      },
      "battle": {
        "name": "Lady of Dark Ruins",
        "description": "Targets the enemy with the lowest Current HP, dealing [+200%Attack]Necrotic Damage in an area around them, and summons 1 Corpse that lasts 15.0s."
      },
      "ultimate": {
        "name": "Dragon of Death",
        "description": "Sacrifices all ally undead summoned units (non-elite) and deals [+300%Attack]Necrotic Damage to all enemies. If the current number of Dragon Blood stacks reaches 20, Lelwanis transforms into her true dragon form to battle. If this sacrifice meets the conditions for transformation, elite undead summoned units will also be included in the sacrifice. When the true dragon form gains additional Dragon Blood, the stack limit can be increased to 70. Additional stacks can be gained through the following ways: If Duplicate is cast on the true dragon form, no clone is summoned; instead, the true dragon gains 10 stacks of Dragon Blood. Each time Natural Instinct is gained, 1 stack of Dragon Blood is acquired."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210015,
        "show_name": "Inspiration 2",
        "spell_tips": "For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260022,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the battle skill's recharge speed by 30%, and also recharges the hero's Ultimate Energy by 15.0 after casting the battle skill."
      }
    ],
    "tj_team": [
      20690,
      22220,
      22300,
      22180,
      21420,
      21690,
      21810,
      23130
    ],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000115,
      8000095,
      8000078,
      8000079,
      8000066,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20300,
    "name": "Lorentheel",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Guidance of the Golden Deer",
        "description": "Once the hero's ultimate skill fully recharges, grants 1 stack of Rally to all allies."
      },
      "battle": {
        "name": "Forest Wind Assault",
        "description": "Deals [+360%Attack]Radiant Damage to enemies within range. When an ally casts a spell that consumes Rally, the skill's recharge time resets."
      },
      "ultimate": {
        "name": "Residual Light of the Shard",
        "description": "Creates a domain for 15.0s. When allies consume Rally through ultimate skills within the domain, recharges their Ultimate Energy by 25.0. The following effects apply in order based on the number of Rally stacks consumed: [1] Grants 30% Crit Rate Up to Rally allies for 10.0s. [2] Increases the skill effect to 40% Crit Rate Up. [3] Grants 30% Crit Damage Up to all Rally allies for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240015,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the duration of buffs granted with the ultimate skill by 30%."
      }
    ],
    "tj_team": [
      20420,
      20840,
      22410,
      21270
    ],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310978,
      310977,
      310976,
      310975,
      310126,
      310124,
      310125,
      310123
    ],
    "tj_sq": [
      8000106,
      8000086,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20920,
    "name": "Lossenia",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Cryomancy",
        "description": "Basic attacks cast an Iceball that bounces between enemies, dealing [+100%Attack]Cold Damage, with a 75.0% chance of inflicting Frost for 10.0s when it hits. The Iceball bounces up to 2 times. The skill prioritizes enemies that are not inflicted with Frost."
      },
      "battle": {
        "name": "Snowfall Blessing",
        "description": "Marks an ally for 6.0s. Every 1.5s, the marked ally deals [+100%Attack]Cold Damage to surrounding enemies, with a 100.0% chance to inflict Frost for 5.0s."
      },
      "ultimate": {
        "name": "Call of Blizzard",
        "description": "Summons an ice tornado at the designated location that lasts for 6s, dealing [+150%Attack]Cold Damage to enemies within range every 1s, with a 100.0% chance of inflicting Frost for 5.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      20120,
      21030,
      20990,
      21390,
      20250,
      21620,
      20240,
      20210
    ],
    "tj_eq": [
      310316,
      310314,
      310315,
      310313,
      310356,
      310354,
      310355,
      310353,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000109,
      8000117,
      8000090,
      8000078,
      8000062,
      8000137
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20200,
    "name": "Lothair",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Poisonous Intention",
        "description": "Battle skill and ultimate skill deal additional [+0%Target's Max HP]Derivative to enemies with Poison. Each stack of Poison increases the damage by 100% (up to 40% of the hero's Attack each stack)."
      },
      "battle": {
        "name": "Pervading Darkness",
        "description": "Rushes towards the enemy with the lowest Current HP, dealing [+250%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting 2 stacks of Poison for 15.0s."
      },
      "ultimate": {
        "name": "Stroke of Midnight",
        "description": "Jumps up and strikes the designated area, dealing [+250%Attack][+1200%Enlightenment]Poison Damage to enemies within range. Follows up with two Tornado Slashes, each slash dealing [+250%Attack][+1200%Enlightenment]Poison Damage to enemies within range."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210012,
        "show_name": "Inspiration 2",
        "spell_tips": "Each time the hero's passive skill takes effect, increases the passive skill's damage dealt by 1%, up to 10 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260025,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores the enemy's Resistance when inflicting debuffs with the battle skill, with a 40% chance of taking effect on the target twice."
      }
    ],
    "tj_team": [
      20670,
      22010,
      20630,
      21700,
      22020,
      21300,
      21670,
      23180
    ],
    "tj_eq": [
      310324,
      310322,
      310323,
      310321,
      310308,
      310306,
      310307,
      310305,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000111,
      8000119,
      8000134,
      8000077,
      8000066,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20970,
    "name": "Mithrasea",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' HP by 24% in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Blessings of the Stars",
        "description": "When an ally takes fatal damage, grants Immortality for 5.0s and 1 stack(s) of Recovery Over Time for 5.0s to that ally. If the ally is a ranged hero, additionally grants Invisibility to them for 5.0s. This skill takes effect once only every 32.0s."
      },
      "battle": {
        "name": "Everlasting Glory",
        "description": "Heals allies within range by [+8%Max HP][+2400%Enlightenment] and grants 1 stack of Recovery Over Time to them for 5.0s."
      },
      "ultimate": {
        "name": "Omnisage's Grace",
        "description": "Grants Resurrection at Death to all surviving allies for 10.0s, and at the same time resurrects all dead allies at 75% of their Max HP, retaining 75% of the resurrected allies' Ultimate Energy before death. Then grants Debuff Immunity to all allies for 10.0s and grants Invisibility to ranged allies for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7260005,
        "show_name": "Inspiration 5",
        "spell_tips": "Extends the battle skill's range to the entire battlefield, with a 50% chance of inflicting 1 additional stack of Recovery Over Time for 5.0s."
      },
      {
        "id": 7210000,
        "show_name": "Inspiration 2",
        "spell_tips": "When granting a buff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7260006,
        "show_name": "Inspiration 5",
        "spell_tips": "Allies resurrected by the ultimate skill recover 100% of their Max HP"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7260007,
        "show_name": "Inspiration 5",
        "spell_tips": "Increase the available trigger count of the passive skill by 1."
      }
    ],
    "tj_team": [
      22330,
      20120,
      20920,
      20060,
      22320,
      20250,
      21620,
      21420
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310332,
      310330,
      310331,
      310329,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000101,
      8000098,
      8000087,
      8000086,
      8000064,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20740,
    "name": "Nastjenka",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Black Plume",
        "description": "For every 3.0s the hero survives, gains 1 stack of Black Stork's Feather permanently that cannot be dispelled, up to 10 stacks.  Every 10% of the hero's extra Attack Speed will be converted into 1% extra Crit Rate."
      },
      "battle": {
        "name": "Talon",
        "description": "Flashes to the enemy with the lowest Current HP and deals [+200%Attack]Lightning Damage 3 times. This skill is counted as a basic attack and is guaranteed to be cast as the battle starts."
      },
      "ultimate": {
        "name": "Wild Beak",
        "description": "Deals [+720%Attack]Lightning Damage to enemies in range. For the next 10.0s, when allies launch basic attacks on any enemy, has a 40% chance of launching a feather dealing additional [+125%Attack]Lightning Damage. Dauntless heroes have double the trigger chance, and these additional attacks count as basic attacks."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210014,
        "show_name": "Inspiration 2",
        "spell_tips": "Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260023,
        "show_name": "Inspiration 5",
        "spell_tips": "The passive skill stack cap is increased to 20 stacks, with each stack of Black Stork's Feather granting the hero an extra 2% Crit Damage."
      }
    ],
    "tj_team": [
      20890,
      20160,
      22040,
      20430,
      23020,
      20040,
      23280,
      20210
    ],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310324,
      310322,
      310323,
      310321,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000114,
      8000118,
      8000079,
      8000078,
      8000060,
      8000065
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21700,
    "name": "Oggok",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Forest Troll",
    "career": "?",
    "captain": "Increases all allies' Resistance by 40.0 in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Witchcraft Therapy",
        "description": "When healing an ally, dispels 1 debuff from them."
      },
      "battle": {
        "name": "Hidden Trajectory",
        "description": "Unleashes a shadow wave that bounces between targets for up to 6 times, healing allies hit by [+150%Attack][+1200%Enlightenment] while dealing [+150%Attack][+1200%Enlightenment]Poison Damage to enemies hit, with an 85.0% chance of inflicting Attack Penalty II on them for 5.0s."
      },
      "ultimate": {
        "name": "Specialized Area",
        "description": "Summons a totem and grants Immortality to all allies for 5.0s. Heals them by [+400%Attack][+3000%Enlightenment] after a delay of 5s."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7260000,
        "show_name": "Inspiration 5",
        "spell_tips": "The passive skill has a 50% chance of dispelling 1 extra debuff."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240007,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."
      }
    ],
    "tj_team": [
      20200,
      20670,
      22010,
      20630,
      20280,
      22020,
      21300,
      21670
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000102,
      8000087,
      8000086,
      8000064,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20840,
    "name": "Thelendor",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by 30% in dungeon battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "General under the Moon",
        "description": "For each stack of Rally consumed when casting an ultimate skill, that instance of ultimate skill ignores 10% of the enemy's Defense."
      },
      "battle": {
        "name": "Lunar Arrival",
        "description": "Deals [+450%Attack]Radiant Damage to surrounding enemies."
      },
      "ultimate": {
        "name": "Lunar Retribution",
        "description": "Unleashes a rain of moonlight for 6s. Channels a moonlight beam to strike a random enemy every 0.25s, dealing [+120%Attack]Radiant Damage. Each enemy can be struck up to 6 time(s). Defeating any enemy extends the duration of the moonlight rain by 1s, up to 3 time(s). The following effects apply in order based on the number of Rally stacks consumed: [1] Each enemy can be struck 3 more time(s). [2] Reduces the interval of channeling moonlight beams to 0.2s. [3] Moonlight beams first focus fire on the enemy with the lowest Current HP, increasing subsequent damage by 20% if this enemy is defeated."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210014,
        "show_name": "Inspiration 2",
        "spell_tips": "Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260021,
        "show_name": "Inspiration 5",
        "spell_tips": "The ultimate skill gains an extra permanent effect: summons a moonlight beam every 3s to strike 3 enemies at most; the particular moonlight beam is guaranteed to trigger the passive skill for 3 stacks of Defense Penetration."
      }
    ],
    "tj_team": [
      20420,
      20300,
      22410,
      21270
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000112,
      8000132,
      8000066
    ],
    "tf": [
      [
        0,
        1,
        0,
        1
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 22040,
    "name": "Zeffi",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Ratfolk",
    "career": "?",
    "captain": "Increases all allies' Defense by 30% in dungeon battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Profound Balance",
        "description": "Grants a [+200%Attack][+2000%Enlightenment] shield to the ally with the lowest Current HP for 10.0s whenever an ally's or enemy's buff is dispelled, transferred, or expires."
      },
      "battle": {
        "name": "Totem of Purification",
        "description": "Places a totem on the battlefield for 3.0s, dealing [+100%Attack][+900%Enlightenment]Lightning Damage to enemies within range every 1s, with a 75% chance of dispelling 1 buff from enemies."
      },
      "ultimate": {
        "name": "Bless the Believer",
        "description": "Creates a magic nexus for 8.0s, granting Defense Up II to all allies. Over the duration of magic nexus, if an ally's HP is below 30%, grants them an additional Invincibility for the remaining duration of the magic nexus."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210018,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance of the battle skill effect by 25%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by 5."
      }
    ],
    "tj_team": [
      20740,
      20890,
      20160,
      20430,
      23020,
      20040,
      20030,
      20440
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000127,
      8000131,
      8000083,
      8000063,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20730,
    "name": "Alton",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Pull Heartstrings",
        "description": "When a Rally ally consumes Rally to cast an ultimate skill, for each stack of Rally they have, they gain 1 stack of Ardent for 10.0s."
      },
      "battle": {
        "name": "Deadly Chord",
        "description": "Fires 3 orbs at random enemies, each dealing [+100%Attack]Radiant Damage with a 30% chance of gaining 1 stack of Rally."
      },
      "ultimate": {
        "name": "Entrancing Melody",
        "description": "Enhances the hero for 10s, during which fires one orb every 2s to attack a random enemy, dealing [+100%Attack]Radiant Damage with a 60% chance to grant one stack of Rally on a random ally. The following effects will apply in order based on the number of Rally stacks consumed: [1] Increases each orb's damage to [+120%Attack]Radiant Damage. [2] Reduces the orb firing interval to 1s. [3] When granting Rally, additionally grants 1 stack of Ardent to the target for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by 5."
      }
    ],
    "tj_team": [
      22710,
      20970,
      20110,
      20300
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310978,
      310977,
      310976,
      310975,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000066
    ],
    "tf": [
      [
        0,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 21030,
    "name": "Auster",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 30%.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Double Shot",
        "description": "When shooting arrows with basic attacks or skills, the hero fires a tracking arrow at up to 2 enemies inflicted with Frost, dealing [+55%Attack]Cold Damage to them with a 100.0% chance of inflicting Frost for 5.0s. Damage dealt by the tracking arrow also recharges the hero's Ultimate Energy by 2.5."
      },
      "battle": {
        "name": "Toxophilite",
        "description": "Fires 3 arrows at the enemy, each dealing [+120%Attack]Cold Damage, with a respective 50% chance of ignoring 100% of their Defense."
      },
      "ultimate": {
        "name": "Bone Chill",
        "description": "Jumps into the air and shoots a powerful arrow, dealing [+520%Attack]Cold Damage to enemies within range, with a 100.0% chance of inflicting Frost for 10.0s. The tracking arrows attached to this skill will fire at all enemies within range and deal [+110%Attack]Cold Damage."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      20120,
      20920,
      20990,
      21390,
      20250,
      21620,
      20240,
      20210
    ],
    "tj_eq": [
      310316,
      310314,
      310315,
      310313,
      310308,
      310306,
      310307,
      310305,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000117,
      8000106,
      8000084,
      8000078,
      8000062,
      8000137
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22220,
    "name": "Berengar",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 30%.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4.5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Evil Domain",
        "description": "At the start of battle, gains Evil Aura and applies Chaos for 30.0s to all allies and enemies. When receiving any healing, increases Max HP (by 100% of healing received), up to an additional 50%. When Max HP increase reaches the limit through this effect, all ally heroes gain Evil Aura and increase Max HP (by 10% of Berengar's Max HP)."
      },
      "battle": {
        "name": "Horrendous Slash",
        "description": "Casts Staggering Smite on the target, dealing [+300%Attack]Necrotic Damage to enemies within range, with a 100.0% chance of inflicting Fear for 3.0s. Then dispels all debuffs from the hero."
      },
      "ultimate": {
        "name": "Hellfire Balls",
        "description": "Channels and launches hellfire balls, dealing [+500%Attack][+15%Max HP]Necrotic Damage to enemies within range, with a 75.0% chance to inflict Recharging Speed Penalty for 10.0s, and a 75.0% chance to inflict Healing Reversal for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7260008,
        "show_name": "Inspiration 5",
        "spell_tips": "Allies in Chaos will be healed for 25% of their Max HP when the Chaos effect ends."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7260009,
        "show_name": "Inspiration 5",
        "spell_tips": "The healing from Evil Aura is increased by 25%."
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7260010,
        "show_name": "Inspiration 5",
        "spell_tips": "The duration of Chaos effect on all enemies is extended by 15s."
      }
    ],
    "tj_team": [
      22180,
      21770,
      22300,
      20690,
      21690,
      21930,
      21810,
      23130
    ],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310336,
      310334,
      310335,
      310333,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000098,
      8000088,
      8000086,
      8000067,
      8000069
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20670,
    "name": "Durango",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 40.0 in all battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Secret Keeper",
        "description": "Swiftly attacks all enemies as the battle starts, dealing [+150%Attack]Poison Damage with a 40.0% chance of inflicting 3 stacks of Poison for 15.0s. When the hero's basic attacks or skills trigger a critical hit, has a 40.0% chance of inflicting 1 stack of Poison for 15.0s."
      },
      "battle": {
        "name": "Blink Attack",
        "description": "Launches 3 attacks on the enemy, dealing [+100%Attack][+500%Enlightenment]Poison Damage each time. Recharges the hero's Ultimate Energy by 5.0 each time a critical hit is triggered."
      },
      "ultimate": {
        "name": "Exterminating Attack",
        "description": "Launches 3 swift attacks, each time dealing [+135%Attack][+640%Enlightenment]Poison Damage to enemies within range, with a 100.0% chance of inflicting 2 stacks of Poison for 15.0s. Ignores 30% of the target's Defense upon a successful critical hit."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210002,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance of the passive skill effect by 15%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [
      20630,
      22010,
      20200,
      21700,
      20280,
      21300,
      23180,
      21670
    ],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000109,
      8000119,
      8000090,
      8000084,
      8000065,
      8000137
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22330,
    "name": "Elecebre",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Nymph",
    "career": "?",
    "captain": "Increases all allies' Max HP by 24% in all battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Blinding Beauty",
        "description": "As the battle starts, if Elecebre's Accuracy is higher than her Resistance, her Resistance is increased to equal her Accuracy. Meanwhile, deals [+150%Attack]Cold Damage to all enemies, with a 50.0% chance of inflicting Blind for 5.0s."
      },
      "battle": {
        "name": "Nature's Blessing",
        "description": "Grants a [+30%Max HP] shield to an ally for 10.0s. This ally gains 30% of Elecebre's Resistance while the shield lasts."
      },
      "ultimate": {
        "name": "Siren Song",
        "description": "Elecebre sings a song that grants Recovery Over Time and Defense Up II to all allies for 10.0s, with a 50.0% chance of inflicting Charmed on all enemies for 5.0s and a 75% chance of reducing their Ultimate Energy by 50.0."
      }
    },
    "inspiration": [
      {
        "id": 7260014,
        "show_name": "Inspiration 5",
        "spell_tips": "The Blind inflicted with the passive skill will trigger every 15s in addition to once at the start of the combat."
      },
      {
        "id": 7210004,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance of the ultimate skill effect by 15%."
      },
      {
        "id": 7260015,
        "show_name": "Inspiration 5",
        "spell_tips": "The percentage of Resistance granted via the battle skill's shield is increased to 50%."
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7260016,
        "show_name": "Inspiration 5",
        "spell_tips": "Shield granted with the battle skill reduces the chance of an ally taking enemy critical hits by 30%."
      }
    ],
    "tj_team": [
      20120,
      20920,
      20990,
      20060,
      20250,
      21620,
      20240,
      20210
    ],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310356,
      310354,
      310355,
      310353,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000109,
      8000070,
      8000086,
      8000067,
      8000138
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21010,
    "name": "Ergander",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Eye for an Eye",
        "description": "When taking damage, has a 20% chance to inflict Attack Penalty II on the damage dealer for 5.0s."
      },
      "battle": {
        "name": "Avenging Slash",
        "description": "Deals [+200%Attack][+7%Max HP]Poison Damage to enemies within range, with a 100% chance of reducing their Ultimate Energy by 25.0. Grants [+20%Max HP] healing to the hero."
      },
      "ultimate": {
        "name": "Desperate Beast",
        "description": "Has a 100.0% chance of Taunting the enemies within range for 5.0s and deals [+400%Attack][+16%Max HP]Poison Damage. Meanwhile, the hero gains Immortality for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210002,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance of the passive skill effect by 15%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240005,
        "show_name": "Inspiration 5",
        "spell_tips": "When inflicted with Control, reduces its duration by 50%."
      }
    ],
    "tj_team": [
      22040,
      20120,
      20920,
      21390,
      23180,
      20280,
      22020,
      21300
    ],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000129,
      8000089,
      8000088,
      8000063,
      8000069
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20060,
    "name": "Eurion",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Undying Glory",
        "description": "When receiving fatal damage, becomes immune to death and removes all control effects and debuffs. Then raises shield and stops attacking, gaining Received Healing Up II, Invincibility and 2 stack(s) of Recovery Over Time for 5.0s (This effect triggers once every 60.0s)."
      },
      "battle": {
        "name": "Ever-victorious",
        "description": "Deals [+300%Defense]Cold Damage to enemies within range and dispels all their shields, with a 75.0% chance of inflicting Attack Penalty I for 4.0s."
      },
      "ultimate": {
        "name": "Shield of Oath",
        "description": "Grants Ally Protection to all allies except the hero for 10.0s. Then gains a [+600%Defense]shield for 10.0s, and gains 30% Damage Reduction and Defense Up I for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "DEF% +30%"
      },
      {
        "id": 7240004,
        "show_name": "Inspiration 5",
        "spell_tips": "Has a 35% chance to get immune to the Control to be inflicted."
      }
    ],
    "tj_team": [
      20120,
      20920,
      21390,
      20990,
      21690,
      23080,
      24780,
      23130
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000129,
      8000088,
      8000133,
      8000063,
      8000138
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20810,
    "name": "Felicity",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 2,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Burning Blood",
        "description": "Gains 3.0 Ultimate Energy when battle skill and ultimate skill trigger crit hits."
      },
      "battle": {
        "name": "Incineration",
        "description": "Fires a fireball and deals [+240%Attack]Fire Damage to the enemy. When Wild dice roll ≥4, casts this skill again, up to 3 times consecutively."
      },
      "ultimate": {
        "name": "Fiery Feather",
        "description": "Shoots 5 fire beams, each dealing [+150%Attack]Fire Damage, with a 100.0% chance to inflict Defense Penalty for 10.0s. Shoots 3 extra beams when a Wild dice roll is ≥5."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210011,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260038,
        "show_name": "Inspiration 5",
        "spell_tips": "Deals same damage to other enemies 1 tile around the target."
      }
    ],
    "tj_team": [
      21400,
      23060,
      23800,
      20410
    ],
    "tj_eq": [
      311130,
      311129,
      311128,
      311127,
      310376,
      310375,
      310374,
      310373,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20000,
    "name": "Gillian",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 4.5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Spare the Dying",
        "description": "When healing an ally with less than 50% HP, the cleric grants 1 stack of Recovery Over Time for 5.0s."
      },
      "battle": {
        "name": "Divine Favor Bestowal",
        "description": "Heals the ally with the lowest Current HP by [+10%Target's Max HP][+1800%Enlightenment] and grants the ally 30% Damage Reduction for 5.0s."
      },
      "ultimate": {
        "name": "Luminous Domain",
        "description": "Heals all allies by [+15%Target's Max HP][+3500%Enlightenment], dispels 1 debuff each and grants Defense Up I for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210000,
        "show_name": "Inspiration 2",
        "spell_tips": "When granting a buff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Resistance +50"
      },
      {
        "id": 7240005,
        "show_name": "Inspiration 5",
        "spell_tips": "When inflicted with Control, reduces its duration by 50%."
      }
    ],
    "tj_team": [
      23610,
      23820,
      22800,
      21500
    ],
    "tj_eq": [
      311194,
      311193,
      311192,
      311191,
      310978,
      310977,
      310976,
      310975,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        0
      ]
    ]
  },
  {
    "id": 20320,
    "name": "Huberg",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Leader's Prestige",
        "description": "When other allies cast a spell that consumes Rally, Huberg gains 1 stack of Rally."
      },
      "battle": {
        "name": "Watcher's Smite",
        "description": "Deals [+320%Attack]Radiant Damage to enemies within range, with a 30.0% chance of gaining 1 stack of Rally."
      },
      "ultimate": {
        "name": "Warrior's Holy Light",
        "description": "Summons 3 energy orb(s) to strike enemies within range, dealing [+100%Attack]Radiant Damage each time. When this skill is cast again, summons 1 additional energy orb(s), up to 7. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases the energy orb damage by 20%. [2] Casts this skill once more. [3] Summons 1 additional energy orb."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210003,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance of the battle skill effect by 15%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      20970,
      22060,
      20300,
      22410
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000120,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 20160,
    "name": "Ivellios",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 2,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Priest's Splendor",
        "description": "When an ally launches a basic attack, the hero has a 10% chance of launching a following attack, dealing [+60%Attack]Derivative. Dauntless heroes have a double chance of triggering this effect."
      },
      "battle": {
        "name": "Prayer of the Ancient",
        "description": "Deals [+300%Attack]Lightning Damage to enemies within range and grants Attack Speed Up I to all Dauntless allies for 4.0s."
      },
      "ultimate": {
        "name": "Wrath of the Ancient",
        "description": "Fires a mighty arrow, dealing [+200%Attack]Derivative to the enemy. The damage ignores 100% Defense of the target."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210010,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance of the passive skill effect by 5%."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240014,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the duration of buffs granted with the battle skill by 30%."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310324,
      310322,
      310323,
      310321,
      310308,
      310306,
      310307,
      310305,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000123,
      8000134,
      8000061
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20110,
    "name": "Philto",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Unintentional Combustion",
        "description": "Basic attacks will cause an arcane explosion upon hitting an enemy, dealing [+30%Attack]Radiant Damage to enemies within range.  The hero will not gain any Attack Speed bonus; instead, each 1% extra Attack Speed gained will be converted to 10 Attack."
      },
      "battle": {
        "name": "Barrage Flurries",
        "description": "Fires three cannon shots at the target. Each shot deals [+120%Attack]Radiant Damage to enemies within range. If more than 4 targets are hit, gains 1 stack of Rally."
      },
      "ultimate": {
        "name": "Heatwave",
        "description": "Deals [+550%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Deals additional [+550%Attack]Radiant Damage. [2] Deals additional [+550%Attack]Radiant Damage again. [3] Recharges Ultimate Energy by 20.0."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      22710,
      20970,
      20300,
      22410
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 22300,
    "name": "Premtsa",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "?",
    "captain": "Increases all allies' Attack by 30% in dungeon battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Tireless Devotion",
        "description": "When ally undead summoned units appear, they deal [+60%Attack]Derivative 7 times over 5s to enemies within 1 tile around themselves."
      },
      "battle": {
        "name": "Undead Puppet",
        "description": "Launches 2 soul attacks at random enemies, dealing [+240%Attack]Necrotic Damage and creating a Specter at the target location. Specters last 10.0s and continuously attack surrounding enemies."
      },
      "ultimate": {
        "name": "Myriad Descendants",
        "description": "Releases a soul torrent dealing [+520%Attack]Necrotic Damage to all enemies. Additionally, all ally undead summoned units immediately trigger Tireless Devotion AOE Damage."
      }
    },
    "inspiration": [
      {
        "id": 7200000,
        "show_name": "Inspiration 1",
        "spell_tips": "When an ally dies, heals the hero by [+15%Max HP]."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      22180,
      20690,
      22220,
      21770,
      21420,
      21690,
      21930,
      23130
    ],
    "tj_eq": [
      310324,
      310322,
      310323,
      310321,
      310308,
      310306,
      310307,
      310305,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000121,
      8000123,
      8000134,
      8000077,
      8000066,
      8000061
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21870,
    "name": "Reytah",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Swamp Lizardfolk",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 30%.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 4.5,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Sweet Dread",
        "description": "All enemies deal 10% less damage. For every debuff they have, their damage dealt is reduced additionally by 8%, up to 3 stacks on the same target."
      },
      "battle": {
        "name": "Wailing Echo",
        "description": "Deals [+250%Attack]Poison Damage to enemies within range with a 75.0% chance of inflicting Attack Penalty II for 5.0s. After a short pause, deals [+250%Attack]Poison Damage again to enemies within range with a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Queen's Retribution",
        "description": "Dispels all debuffs from all allies. Grants them Defense Up II for 10.0s. There is a 100.0% chance to inflict Recharging Speed Penalty on all enemies for 5.0s and extend the duration of all of their debuffs by 5.0s. (Except for Damage Debuff)"
      }
    },
    "inspiration": [
      {
        "id": 7260017,
        "show_name": "Inspiration 5",
        "spell_tips": "When present, all enemies deal 10% less damage."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7260018,
        "show_name": "Inspiration 5",
        "spell_tips": "The ultimate skill increases the duration of the enemy's debuff by an additional 2s."
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7260019,
        "show_name": "Inspiration 5",
        "spell_tips": "The debuff inflicted by the hero has a 50% chance of becoming undispellable."
      }
    ],
    "tj_team": [
      22330,
      22220,
      20120,
      20920,
      22320,
      21670,
      20250,
      21620
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000106,
      8000075,
      8000086,
      8000138,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 24780,
    "name": "Sintrellia",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Undead",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Game of Fatuity",
        "description": "While present, all ally undead summoned units gain Attack Up equal to 10% of Sintrellia's Attack (not exceeding 100% of target's Attack)."
      },
      "battle": {
        "name": "Twist of Fate",
        "description": "Fires 3 arrows randomly attacking enemies, each dealing [+180%Attack]Necrotic Damage and inflicting Banshee's Curse for 5.0s."
      },
      "ultimate": {
        "name": "Echo of Destiny",
        "description": "Selects the allied undead creature with the highest Attack, performs Duplicate on it, then grants Forbidden Knowledge to both the clone and the original unit. While the clone exists, the hero can only recover up to 50% Ultimate Energy. When the original unit dies, the clone immediately dies and grants the original's summoner 50% Ultimate Energy."
      }
    },
    "inspiration": [
      {
        "id": 2478091,
        "show_name": "Inspiration 1",
        "spell_tips": "Increases duration of Banshee's Curse inflicted by battle skills to 10s."
      },
      {
        "id": 2478092,
        "show_name": "Inspiration 2",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 2478095,
        "show_name": "Inspiration 5",
        "spell_tips": "After casting ultimate skill, clone unit and original unit gain doubled Banshee's Curse damage boost when attacking cursed enemies."
      }
    ],
    "tj_team": [
      23080,
      21390,
      20060,
      20690,
      21690,
      10000,
      21420,
      23130
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000095,
      8000106,
      8000076,
      8000181,
      8000061,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20830,
    "name": "Tamar",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Might of the Matriarch",
        "description": "Casts a lightning strike on the enemy whenever they gain a buff, dealing [+100%Attack]Derivative, with a 30% chance of dispelling 1 buff from them.  This skill only takes effect once on the same target in 5.0s."
      },
      "battle": {
        "name": "Thunder War Song",
        "description": "Unleashes forked lightning, dealing [+300%Attack]Lightning Damage to enemies within range and has a 75% chance of dispelling 1 buff from them and a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Tempest Surge",
        "description": "Unleashes a powerful lightning storm, dealing [+700%Attack]Lightning Damage to all enemies, with a 75.0% chance of inflicting Buff Prohibition for 10.0s. For enemies without any buff, there is a 75.0% chance of inflicting Stunned for 5.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210002,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance of the passive skill effect by 15%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20890,
    "name": "Tharivol",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 2,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Pursuit Hunting",
        "description": "Dealing direct damage to the same enemy target grants the hero 1 stack of Attack Speed Up for 5.0s, up to 15 stacks. Stacks are lost when switching targets."
      },
      "battle": {
        "name": "Certain Shot",
        "description": "Shoots a powerful arrow at an enemy, dealing [+300%Attack]Lightning Damage. This damage ignores Immortality."
      },
      "ultimate": {
        "name": "Marksmanship",
        "description": "Switches to a different shooting stance. The hero's Attack increases by 15% for the next 12.0s, and each basic attack has a 20% chance of triggering multishot, firing 3 arrows that deal [+120%Attack]Lightning Damage each. This chance is boosted at a rate equal to 30% of the hero's Crit Rate. If the multishot fails to trigger, the arrow fired will deal [+80%Attack]Lightning Damage instead."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240012,
        "show_name": "Inspiration 5",
        "spell_tips": "The hero gains 9% Damage Bonus permanently when an enemy dies. This effect stacks up to 3 times."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000118,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20770,
    "name": "Vinyara",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 40.0 in all battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 2,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Icy Thorn",
        "description": "When inflicted with Control, the hero is immune to it and has a 100.0% chance of inflicting Frozen on the caster for 5.0s. This skill takes effect once only every 6.0s."
      },
      "battle": {
        "name": "Withering Armor",
        "description": "Grants a shield equal to [+450%Attack][+10%Max HP] for 10.0s and Defense Up II for 5.0s to the hero and the ally with the lowest Current HP."
      },
      "ultimate": {
        "name": "Frozen Spike",
        "description": "Deals [+900%Attack]Cold Damage to the enemy, dispelling all their buffs and reducing their Ultimate Energy by 100.0, with a 100.0% chance of inflicting Frozen for 3.0s and Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210001,
        "show_name": "Inspiration 2",
        "spell_tips": "When inflicting a debuff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [
      20120,
      20920,
      20990,
      20060,
      20250,
      21620,
      20240,
      23180
    ],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310356,
      310354,
      310355,
      310353,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000109,
      8000070,
      8000086,
      8000067,
      8000138
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 24770,
    "name": "Alphanarsy",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Ironfrost Rust Armor",
        "description": "At battle start, gains 5 stacks of Death's Blessing. Dispels 1 stack after taking damage. Then gains 1 stack of Death's Blessing every 10s. (Max 10 stacks)."
      },
      "battle": {
        "name": "Lone Star Frostblade",
        "description": "Attacks enemies within range, dealing [+200%Attack][+1000%Enlightenment]Cold Damage. Gains 1 stack of Death's Blessing for each enemy hit. Also grants all allies Defense Up II for 5.0s."
      },
      "ultimate": {
        "name": "Desperate Tide",
        "description": "Grants a [+15%Max HP][+3600%Enlightenment] shield to each of the allies. While having this shield, they parry damage each time when taking damage, reducing damage by 10% Defense."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 2477092,
        "show_name": "Inspiration 2",
        "spell_tips": "Gains 2 stack(s) of  for each target hit by battle skill."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240004,
        "show_name": "Inspiration 5",
        "spell_tips": "Has a 35% chance to get immune to the Control to be inflicted."
      }
    ],
    "tj_team": [
      20120,
      20920,
      21390,
      20990,
      21690,
      23080,
      24780,
      23130
    ],
    "tj_eq": [
      310340,
      310338,
      310339,
      310337,
      310328,
      310326,
      310327,
      310325,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000127,
      8000129,
      8000131,
      8000089,
      8000063,
      8000068
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21970,
    "name": "Caspar",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 2,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Real Performer",
        "description": "When an ally Wild dice roll is even, the hero gains 1 stack of Absurd Charade, lasting 60.0s."
      },
      "battle": {
        "name": "Lucky Audience",
        "description": "Throws daggers, dealing [+100%Attack]Fire Damage 3 times. For each stack of Absurd Charade on the hero, this skill ignores the target's 1% Defense."
      },
      "ultimate": {
        "name": "Grand Entrance",
        "description": "Deals [+600%Attack]Fire Damage to an enemy and inflicts a mark for 10.0s. Within the mark's duration, whenever an ally successfully performs a Wild Spellcasting (dice roll ≥ 4), the hero launches a throwing knife at the marked enemy, each knife dealing [+120%Attack]Fire Damage."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      23060,
      20410,
      20810,
      20400
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000116,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 23020,
    "name": "Divine Ascetic",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Monkeyfolk",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 4,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 4.5,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Unsevered",
        "description": "When Dauntless allies launch basic attacks, the hero gains 1 stack of Obsession and 1 stack of Breakage, plus gaining 1.0 Ultimate Energy."
      },
      "battle": {
        "name": "Kui's Pursuit",
        "description": "Deals [+150%Attack]Lightning Damage to the enemy. For each 10 stack(s) of Obsession, performs 1 additional attack (up to 4 attacks). This skill counts as basic attack, with cast speed being affected by Attack Speed."
      },
      "ultimate": {
        "name": "Thunderous Might",
        "description": "Attacks enemies in range, dealing [+700%Attack]Lightning Damage. Also consumes all Breakage, with each stack consumed increasing damage by 2%."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 2302092,
        "show_name": "Inspiration 2",
        "spell_tips": "Each stack of  increases ultimate skill damage by 1%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2302095,
        "spell_tips": "Increases  stack limit to 40."
      }
    ],
    "tj_team": [
      21560,
      20160,
      20890,
      20430,
      20030,
      20040,
      20080,
      21820
    ],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310360,
      310358,
      310359,
      310357,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000190,
      8000182,
      8000084,
      8000078,
      8000060,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20400,
    "name": "Errich",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Fortune Sense",
        "description": "When Errich appears, upgrades all ally Wild heroes' dice, increasing their max value by 2."
      },
      "battle": {
        "name": "Pillar of Flame",
        "description": "Deals [+300%Attack]Fire Damage to enemies in the target area; if only one enemy is hit, deals 1 additional instance of damage (equal to 50% of the original damage)."
      },
      "ultimate": {
        "name": "Meteorite Rain",
        "description": "Calls down 5 meteor(s) to strike random enemies in range, each dealing [+160%Attack]Fire Damage. When Wild dice roll ≥5, it deals additional [+200%Attack]Fire Damage to all enemies in range."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      23060,
      20410,
      20810,
      23800
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310978,
      310977,
      310976,
      310975,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000106,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20660,
    "name": "Garett",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Sobering Pain",
        "description": "Increases Attack when taking damage, the increased volume equals to 20% of the damage taken, up to 200% of the hero's inherent Attack value."
      },
      "battle": {
        "name": "Bloodthirsty Lance",
        "description": "Performs three thrusts against the current target. Each thrust grants the hero [+2%Current HP][+0%Attack] and deals [+100%Attack][+2%Current HP]Lightning Damage to the target. This skill counts as a basic attack."
      },
      "ultimate": {
        "name": "Brutal Thrust",
        "description": "Gains Brutal Thrust for 10.0s while taking [+7%Current HP], then charges toward the enemy to immediately perform 5 thrusts, each dealing [+114%Attack]Lightning Damage. These thrusts count as basic attacks. While under Brutal Thrust, basic attacks are guaranteed to critically hit with 30% increased Crit Damage."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310312,
      310310,
      310311,
      310309,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000118,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20190,
    "name": "Garrika",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "War God's Gift",
        "description": "Gains 10.0 Ultimate Energy when an enemy gains a buff. When inflicting debuffs, reduces the target's Ultimate Energy by 25.0."
      },
      "battle": {
        "name": "Searing Smite",
        "description": "Deals [+320%Attack]Fire Damage to enemies within range, with a 75.0% chance of inflicting Accuracy Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Commander's Toss",
        "description": "Grants Accuracy Bonus II to all allies for 10.0s, and then deals [+640%Attack]Fire Damage to enemies within range, with a 75% chance of dispelling 1 buff from them. There is also a 75.0% chance of additionally inflicting Buff Prohibition on them for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210016,
        "show_name": "Inspiration 2",
        "spell_tips": "Recharges the hero's Ultimate Energy by 15.0 when taking damage over 20% of the hero's max HP. Takes effect once every 20.0s."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [
      20450,
      20230,
      20820,
      22340
    ],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310356,
      310354,
      310355,
      310353,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22310,
    "name": "Ghul'ende",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Fallen Soul",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Disorder",
        "description": "When the hero casts a skill on an enemy with HP less than 50%, there is a 50.0% chance of inflicting Charmed and Healing Reduction for 5.0s. If the hero fails to inflict Charmed on the enemy, inflicts Accuracy Penalty II instead for 5.0s."
      },
      "battle": {
        "name": "Siphon",
        "description": "Has a 100.0% chance of inflicting Stunned to the enemy for 3.0s. For the next 3.0s, deals [+150%Attack]Necrotic Damage on the enemy every 0.6s, each time stealing 3.0 of their Ultimate Energy and healing the hero by [+150%Attack]."
      },
      "ultimate": {
        "name": "Start Over",
        "description": "Deals [+720%Attack]Necrotic Damage to all enemies with a 75.0% chance of inflicting Attack Penalty II on them for 10.0s. Dispels all debuffs from all allies and heals them by [+10%Target's Max HP]. For each individual ally, grants an extra [+4%Target's Max HP] healing for each debuff successfully dispelled."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      22220,
      21390,
      20920,
      20120,
      21420,
      22320,
      21620,
      20250
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000106,
      8000086,
      8000074,
      8000067,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22230,
    "name": "Hochadir",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 3.5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Frostbite",
        "description": "When the hero is alive, extends the duration of Frost inflicted by allies by 5.0s."
      },
      "battle": {
        "name": "Frostfall",
        "description": "Grants 20% Attack Up on the Frost ally with the highest Attack for 5.0s, then deals [+360%Attack]Cold Damage to enemies in a designated area, with a 75.0% chance to inflict Frost for 5.0s."
      },
      "ultimate": {
        "name": "Frost Reign",
        "description": "Has a 50.0% chance of inflicting Frost on all enemies for 10.0s. Instantly detonates all enemies under Frost, dealing AOE [+500%Attack]Cold Damage centered on them. Then detonates all enemies under Frozen again, dealing [+500%Attack]Cold Damage."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210001,
        "show_name": "Inspiration 2",
        "spell_tips": "When inflicting a debuff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240010,
        "show_name": "Inspiration 5",
        "spell_tips": "Buffs granted with the battle skill cannot be dispelled."
      }
    ],
    "tj_team": [
      20120,
      20920,
      21390,
      20990,
      20250,
      21620,
      20240,
      20210
    ],
    "tj_eq": [
      310316,
      310314,
      310315,
      310313,
      310356,
      310354,
      310355,
      310353,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000182,
      8000079,
      8000086,
      8000060,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21150,
    "name": "Huldork",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Sharpshooter",
        "description": "When the hero's skill deals damage to enemies within 3 tiles, increases the damage dealt by 50%."
      },
      "battle": {
        "name": "Hawk-eye Shot",
        "description": "Deals [+280%Attack]Fire Damage to enemies within range, with a 100.0% chance of inflicting Blind for 5.0s. Reduces the target's Ultimate Energy by 10.0 when dealing damage to enemies within 3 tiles of the hero."
      },
      "ultimate": {
        "name": "Break Siege",
        "description": "Deals [+650%Attack]Fire Damage to enemies within range, with a 100% chance of dispelling 2 buffs on them and a 100.0% chance of inflicting Accuracy Penalty II for 10.0s. Reduces the target's Ultimate Energy by 50.0 when dealing damage to enemies within 3 tiles of the hero, with a 100.0% chance of inflicting Stunned for 5.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210001,
        "show_name": "Inspiration 2",
        "spell_tips": "When inflicting a debuff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by 5."
      }
    ],
    "tj_team": [
      20450,
      20820,
      20230,
      21760
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310356,
      310354,
      310355,
      310353,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22180,
    "name": "Irzillas",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "False King's Forces",
        "description": "Each time an ally's undead summoned unit dies, there's a 100% chance to summon 1 Skeleton where the undead summoned unit dies. Skeletons summoned by this skill will not trigger the same effect again."
      },
      "battle": {
        "name": "Usurper's Axe",
        "description": "Deals [+229%Attack]Necrotic Damage to enemies within range. For each ally's undead summoned unit on the field, the skill damage increases by 30%."
      },
      "ultimate": {
        "name": "Throne of Lament",
        "description": "Deals [+600%Attack]Necrotic Damage to enemies in range. Then grants 20% Attack Up to all Summon allies and 30% Damage Up to all undead summoned units for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240011,
        "show_name": "Inspiration 5",
        "spell_tips": "Buffs granted with the ultimate skill cannot be dispelled."
      }
    ],
    "tj_team": [
      20690,
      22220,
      21770,
      22300,
      21690,
      21930,
      21420,
      23130
    ],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310332,
      310330,
      310331,
      310329,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000095,
      8000183,
      8000078,
      8000076,
      8000066,
      8000060
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20290,
    "name": "Jathalea",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Cherished Wish",
        "description": "When the Thorny Poison inflicted by the hero is dispelled, each stack of Thorny Poison deals [+6%Target's Max HP]Derivative (up to 100% of the hero's Attack) to the dispeller."
      },
      "battle": {
        "name": "Headstrong",
        "description": "Deals [+300%Attack]Poison Damage with a single strike to an enemy, with a 75.0% chance to inflict 1 stacks of Poison for 15.0s, and a 50.0% chance to inflict Thorny Poison for 10.0s."
      },
      "ultimate": {
        "name": "Determination",
        "description": "Deals [+700%Attack]Poison Damage to enemies within range, inflicting 3 stack(s) of Thorny Poison and 1 stack(s) of 20% Enlightenment Penalty for 15.0s. Enemies killed by this skill cannot be resurrected."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      21320,
      20120,
      20920,
      22330,
      20210,
      20250,
      21620,
      22320
    ],
    "tj_eq": [
      310324,
      310322,
      310323,
      310321,
      310308,
      310306,
      310307,
      310305,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000096,
      8000123,
      8000134,
      8000083,
      8000067,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23080,
    "name": "Ladehlia",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 3.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Shadows of Night",
        "description": "Every 3s, Ladehlia gains 1 stack of Satisfied; also gains 1 stack of Satisfied for each enemy defeated. When Shadow Demon appears, it inherits Ladehlia's current Satisfied stack(s)."
      },
      "battle": {
        "name": "Blood-Consuming Shadow",
        "description": "Targets the enemy with the lowest HP, briefly teleports to their position, then deals AOE [+300%Attack]Necrotic Damage centered on them. This damage increases by 1% for each 1% HP the target has lost."
      },
      "ultimate": {
        "name": "Dark Pact",
        "description": "Launches Shadow Demon in the specified direction, dealing [+360%Attack]Necrotic Damage to enemies in its path. Shadow Demon then lands in the target area, dealing [+360%Attack]Necrotic Damage. If Shadow Demon is already present, it recovers all HP and channels for 5s, dealing [+140%Attack]Necrotic Damage to surrounding enemies each second."
      }
    },
    "inspiration": [
      {
        "id": 2308091,
        "show_name": "Inspiration 1",
        "spell_tips": "At battle start, Ladehlia gains 10 stack(s) of Satisfied."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 2308095,
        "show_name": "Inspiration 1",
        "spell_tips": "When any enemy's HP drops to 50% in battle, the hero casts Blood-Consuming Shadow on them, triggering once per battle."
      }
    ],
    "tj_team": [
      24780,
      21390,
      20690,
      20060,
      21690,
      10000,
      21420,
      23130
    ],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000095,
      8000183,
      8000078,
      8000181,
      8000066,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20990,
    "name": "Lucien",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Max HP by 30% in Grand Gladiator Arena.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Oath of Dawn",
        "description": "Grants a [+8%Max HP] shield to each ally for 10.0s as the battle starts. Any ally under this shield gains Control Immunity and is immune to the Ultimate Energy Reduction effects inflicted by enemies."
      },
      "battle": {
        "name": "Silverwing Charge",
        "description": "Charges toward the enemy with the highest Ultimate Energy, dealing [+300%Attack][+7%Max HP]Cold Damage with a 75.0% chance of inflicting Frozen for 3.0s."
      },
      "ultimate": {
        "name": "Frostdoom",
        "description": "Deals [+500%Attack][+11%Max HP]Cold Damage to enemies within range, with a 75.0% chance of inflicting Recharging Speed Penalty for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210017,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero grants 15% more shield."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240007,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."
      }
    ],
    "tj_team": [
      20120,
      20920,
      21390,
      21030,
      20250,
      21620,
      20240,
      20210
    ],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310356,
      310354,
      310355,
      310353,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000097,
      8000071,
      8000086,
      8000067,
      8000138
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21740,
    "name": "Ripekas",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "The Unstill",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Double Advantage",
        "description": "The hero gains healing equal to 50% of the healing enemies receive. This effect can only be triggered once every 1.0s."
      },
      "battle": {
        "name": "Double Quake",
        "description": "Unleashes a wide range slash with a 100.0% chance of Knocking Up enemies within range, and deals [+220%Attack][+150%Defense]Necrotic Damage with a 100.0% chance of inflicting Stunned for 3.0s."
      },
      "ultimate": {
        "name": "Ghost Mischief",
        "description": "Launches 3 spirit attacks at enemies, each dealing [+200%Attack][+100%Defense]Necrotic Damage to enemies within range, with a 85.0% chance of inflicting 1 random debuff from the following for 10.0s: Attack Penalty II, Recharging Speed Penalty, Healing Prohibition, Accuracy Penalty II, and Buff Prohibition."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240005,
        "show_name": "Inspiration 5",
        "spell_tips": "When inflicted with Control, reduces its duration by 50%."
      }
    ],
    "tj_team": [
      22220,
      21390,
      20120,
      20920,
      22290,
      22320,
      21620,
      20250
    ],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310356,
      310354,
      310355,
      310353,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000098,
      8000090,
      8000086,
      8000067,
      8000138
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22060,
    "name": "Sagomir",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Horsefolk",
    "career": "?",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Brave and Hungry",
        "description": "Provides a carrot to the ally with the lowest Current HP every 12.0s, granting them 1 stack of Recovery Over Time for 10.0s and recharging their Ultimate Energy by 20.0."
      },
      "battle": {
        "name": "Take the Lead",
        "description": "Rams into the enemy with the highest Attack, dealing [+6%Max HP][+250%Attack]Radiant Damage and Taunting this target for 5.0s. Gains Debuff Immunity for 5.0s and Defense Up II for 5.0s."
      },
      "ultimate": {
        "name": "Pure Horsepower",
        "description": "Tramples the ground and deals [+400%Attack][+0%Max HP]Radiant Damage to enemies within range. Then slashes and deals [+10%Max HP][+200%Attack]Radiant Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s, and a 75.0% chance of inflicting Accuracy Penalty II for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Resistance +50"
      },
      {
        "id": 7240005,
        "show_name": "Inspiration 5",
        "spell_tips": "When inflicted with Control, reduces its duration by 50%."
      }
    ],
    "tj_team": [
      20320,
      20970,
      20300,
      22410
    ],
    "tj_eq": [
      311190,
      311189,
      311188,
      311187,
      310352,
      310351,
      310350,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21560,
    "name": "Sutha",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "The Unstill",
    "career": "?",
    "captain": "Increases all allies' Attack Speed by 30% in dungeon battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Phantom Slash",
        "description": "When the hero triggers a critical hit against the target, a phantom will be generated. The phantom then launches a follow-up attack, dealing [+100%Attack]Lightning Damage to the target. The follow-up attack is counted as a basic attack."
      },
      "battle": {
        "name": "Piercing Slash",
        "description": "Launches a double-hit slash at the enemy to deal [+200%Attack]Lightning Damage twice. This skill is counted as a basic attack and has an additional 30% chance of triggering critical hit."
      },
      "ultimate": {
        "name": "Mighty Mutilation",
        "description": "Charges with the axe and swings it 5 times, dealing [+180%Attack]Lightning Damage each time to the enemy. The attacks are counted as basic attacks, with an additional 30% chance of triggering critical hit. Enemies killed by this skill cannot be resurrected."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310312,
      310310,
      310311,
      310309,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000118,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22010,
    "name": "Twitch",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Ratfolk",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Sneak Shots",
        "description": "When an enemy is inflicted with Poison from skills other than this passive skill, the hero has a 20.0% chance of dealing [+30%Attack]Derivative and inflicting 1 stack(s) of Poison for 15.0s to that target."
      },
      "battle": {
        "name": "Venomous Shots",
        "description": "Shoots an arrow at an enemy, dealing [+80%Attack][+900%Enlightenment]Poison Damage. Each 60 Enlightenment grants an additional arrow, up to 4 arrows per cast. Each arrow has a 75.0% chance of inflicting 1 stack(s) of Poison for 15.0s."
      },
      "ultimate": {
        "name": "Lethal Arrowstorm",
        "description": "Launches three attacks in target area, each dealing [+160%Attack][+1800%Enlightenment]Poison Damage with a 50.0% chance of inflicting 2 stack(s) of Poison for 15.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240008,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores the target's Resistance when inflicting debuffs or control effects on them with ultimate skill."
      }
    ],
    "tj_team": [
      20200,
      20670,
      20630,
      21700,
      20280,
      21300,
      23180,
      21670
    ],
    "tj_eq": [
      310324,
      310322,
      310323,
      310321,
      310308,
      310306,
      310307,
      310305,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000119,
      8000123,
      8000090,
      8000083,
      8000067,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20590,
    "name": "Utior",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Defense by 24% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "For My Purpose",
        "description": "When any other hero unit dies, gains 10.0 Ultimate Energy."
      },
      "battle": {
        "name": "Cavern's Curse",
        "description": "Deals [+420%Attack]Necrotic Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II and Healing Prohibition on the targets for 5.0s."
      },
      "ultimate": {
        "name": "Scion of Evil God",
        "description": "Grants Defense Up II and Resurrection at Death to all allies for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200000,
        "show_name": "Inspiration 1",
        "spell_tips": "When an ally dies, heals the hero by [+15%Max HP]."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by 5."
      }
    ],
    "tj_team": [
      20830,
      20060,
      20120,
      20920,
      22320,
      21420,
      20250,
      21620
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000188,
      8000086,
      8000085,
      8000138,
      8000068
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20630,
    "name": "Vicana",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Prey Selection",
        "description": "Poison Damage dealt by allies has its interval reduced by 2s."
      },
      "battle": {
        "name": "Triple Shot",
        "description": "Fires 3 bolts, each at a random enemy, dealing [+150%Attack]Poison Damage, with a 50.0% chance of inflicting 1 stack of Poison for 15.0s."
      },
      "ultimate": {
        "name": "Deadly Toxinbolt",
        "description": "Fires a bolt, dealing [+500%Attack]Poison Damage to enemies within range and marking the main target for 10.0s. Each time the marked enemy is inflicted with Poison, a toxic blast is triggered, dealing [+105%Attack]Derivative to enemies within range."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210011,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240007,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."
      }
    ],
    "tj_team": [
      22010,
      20200,
      20670,
      21700,
      22020,
      21300,
      23180,
      21670
    ],
    "tj_eq": [
      310324,
      310322,
      310323,
      310321,
      310308,
      310306,
      310307,
      310305,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000096,
      8000185,
      8000134,
      8000078,
      8000066,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21880,
    "name": "Bionphray",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Blood Rage",
        "description": "After releasing the skill, the next basic attack will cast a roar instead, Taunting enemies within range for 3.0s, and dealing [+150%Attack]Derivative. Grants a [+10%Max HP] shield to the hero for 10.0s."
      },
      "battle": {
        "name": "Weights of Wrath",
        "description": "Gains Control Immunity for 5.0s and raises the giant axe to charge. After the charge finishes, deals [+330%Attack]Lightning Damage to enemies within range, with a 75.0% chance of inflicting Stunned for 3.0s."
      },
      "ultimate": {
        "name": "Lightning Current",
        "description": "Deals [+520%Attack]Lightning Damage to enemies within range and grants Defense Up I to the hero for 6.0s. Meanwhile the hero gains Electrified for 10.0s and attacks a random enemy with electricity every 1.25s during this period, dealing [+100%Attack]Lightning Damage, with a 100.0% chance of inflicting Stunned for 1.5s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by 5."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21460,
    "name": "Donella",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Gnome",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 40.0 in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Attractive Friend",
        "description": "The magic puppet bird flies to a random enemy every 8.0s and deals [+200%Attack]Radiant Damage to them, with a 75.0% chance of inflicting Healing Prohibition for 5.0s."
      },
      "battle": {
        "name": "Blissful Vertigo",
        "description": "Activates the spanner to deal [+400%Attack]Radiant Damage to enemies, with a 100.0% chance of inflicting Stunned for 3.0s."
      },
      "ultimate": {
        "name": "Perfect Match",
        "description": "Deals [+700%Attack]Radiant Damage to all enemies, with a 75.0% chance of inflicting Accuracy Penalty II for 10.0s and a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210001,
        "show_name": "Inspiration 2",
        "spell_tips": "When inflicting a debuff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [
      20320,
      20970,
      20300,
      22410
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      311062,
      311061,
      311060,
      311059,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21450,
    "name": "Journ",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Gnome",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 5,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Seeker of Truth",
        "description": "The hero takes 30% less Fire Damage. Additionally, when the hero takes Fire Damage, there is a 30% chance of recharging his Ultimate Energy and that of surrounding allies by 10.0 and granting Defense Up II to the hero and surrounding allies for 5.0s. This effect can only be triggered once every 5.0s."
      },
      "battle": {
        "name": "Flamethrower",
        "description": "Sprays flames that burn enemies within range 5 times, each time dealing [+50%Attack][+2%Max HP]Fire Damage with a 50.0% chance of inflicting Attack Penalty I for 5.0s; the flames also backfire on the hero, each time dealing [+20%Attack][+0%Max HP]Fire Damage on himself."
      },
      "ultimate": {
        "name": "Unique Bomb",
        "description": "Deals [+500%Attack][+10%Max HP]Fire Damage to enemies within range, reducing their Ultimate Energy by 25.0, with a 75% chance of dispelling all of their buffs."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [
      20820,
      20230,
      21760,
      23060
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310978,
      310977,
      310976,
      310975,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 21170,
    "name": "Rhash",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Scorching Darkfire",
        "description": "When ally Wild dice roll ≥5, the hero gains 1 stack of Heartflame for 6.0s."
      },
      "battle": {
        "name": "Molten Reflexes",
        "description": "Shoots an arrow at the enemy, dealing [+300%Attack]Fire Damage. The damage then spreads, dealing [+300%Attack]Fire Damage to other enemies in range."
      },
      "ultimate": {
        "name": "Inferno Gale",
        "description": "Fires a powerful arrow at the enemy with the lowest Current HP, dealing [+800%Attack]Fire Damage. When under Heartflame, this skill's damage increases by 30% and the hero gains 10.0 Ultimate Energy."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      23060,
      20410,
      20810,
      23800
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000116,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 21320,
    "name": "Talwer",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Goblin",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Hunter's Mark",
        "description": "Each debuff on enemies on the field grants 2% Damage Reduction to the hero. The effect stacks up to 10 times."
      },
      "battle": {
        "name": "Snicker Mushroom",
        "description": "Plants a mushroom near enemies. The mushroom has a 100.0% chance of inflicting Taunt for 5.0s to enemies in range. When the mushroom dies, deals [+150%Attack][+900%Enlightenment]Derivative to enemies in range, and has a 100.0% chance of inflicting Stunned for 3.0s, and a 100.0% chance of inflicting Healing Reduction for 10.0s."
      },
      "ultimate": {
        "name": "Spore Storm",
        "description": "Releases a spore cloud lasting 4.0s that deals [+80%Attack][+600%Enlightenment]Derivative to enemies in range every 0.8s with a 100.0% chance of inflicting Accuracy Penalty II and Attack Penalty II for 10.0s. Each instance of damage transfers 1 negative effect from one enemy to another random enemy."
      }
    },
    "inspiration": [
      {
        "id": 7200000,
        "show_name": "Inspiration 1",
        "spell_tips": "When an ally dies, heals the hero by [+15%Max HP]."
      },
      {
        "id": 7210001,
        "show_name": "Inspiration 2",
        "spell_tips": "When inflicting a debuff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240000,
        "show_name": "Inspiration 5",
        "spell_tips": "Reduces the battle skill's initial recharge time by 3s."
      }
    ],
    "tj_team": [
      20830,
      20120,
      20920,
      22310,
      20640,
      20250,
      21620,
      22320
    ],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310336,
      310334,
      310335,
      310333,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000098,
      8000103,
      8000088,
      8000086,
      8000069,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22980,
    "name": "Drizzt Do'Urden",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Drow",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "avg": 3.125,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Planar Ally",
        "description": "Guenhwyvar fights alongside Drizzt, both gaining 1 stack of Planar Ally every 1s when they are attacking the same enemy. When Guenhwyvar and Drizzt are not attacking the same enemy, they both lose 1 stack of Planar Ally every 1s. Planar Ally cannot be dispelled and is capped at 10 stacks."
      },
      "battle": {
        "name": "Dual Wielder",
        "description": "Swings both Twinkle and Icingdeath, dealing [+75%Attack]Cold Damage to enemies within range, with a 50.0% chance of inflicting them with Frost for 10.0s. Each use of this skill will increase the number of hits for the next use, up to 3 hits."
      },
      "ultimate": {
        "name": "Dance of the Wild",
        "description": "Guenhwyvar and Drizzt release 3 hits separately on enemies within range, each dealing [+110%Attack]Cold Damage (Damage dealt by Guenhwyvar will be calculated based on his attributes). For enemies inflicted with Frost, this skill ignores their 15% Defense. For every 1% HP lost by the target, the damage is increased by 0.6%, up to 30%."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210011,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      20120,
      20920,
      21390,
      20060,
      20240,
      21620,
      21420,
      23130
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000189,
      8000182,
      8000084,
      8000078,
      8000060,
      8000065
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23370,
    "name": "Bigby",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Gnome",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Bigby's Forceful Hand",
        "description": "When taking damage within melee range, there is a 50% chance of using Bigby's Forceful Hand to Knock Back the source of damage 3 tiles, with a 100.0% chance of inflicting Attack Penalty II for 10.0s. The skill takes effect once every 4.0s."
      },
      "battle": {
        "name": "Bigby's Interposing Hand",
        "description": "Creates an Interposing Hand around the hero to support allies, reducing the damage taken by allies within range by 30%. The Interposing Hand vanishes when the total reduced damage taken exceeds 35000."
      },
      "ultimate": {
        "name": "Bigby's Clenched Fist",
        "description": "Bigby summons a fist to attack enemies within range, with a 50% chance to dispel all buffs from them, dealing [+620%Attack]Radiant Damage and reducing their Ultimate Energy by 25.0. This skill also has a 25.0% chance to inflict Stunned on enemies for 5.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240000,
        "show_name": "Inspiration 5",
        "spell_tips": "Reduces the battle skill's initial recharge time by 3s."
      }
    ],
    "tj_team": [
      20320,
      20970,
      20300,
      22410
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      311062,
      311061,
      311060,
      311059,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23360,
    "name": "Elminster Aumar",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Mystra's Shelter",
        "description": "For each debuff on an enemy, the hero gains 10.0 Resistance, up to 10 stacks."
      },
      "battle": {
        "name": "Radiant Shield",
        "description": "Grants a [+12%Target's Max HP][+3000%Enlightenment] shield to the hero and surrounding allies for 5.0s and Control Immunity for 5.0s."
      },
      "ultimate": {
        "name": "Silver Fire",
        "description": "Deals [+710%Attack][+5000%Enlightenment]Fire Damage to enemies within range, with a 75.0% chance of inflicting Accuracy Penalty II and Attack Penalty II on the targets for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [
      23060,
      20230,
      20820,
      21760
    ],
    "tj_eq": [
      310348,
      310346,
      310347,
      310345,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000153,
      8000131,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 23011,
    "name": "The Dark Lady",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dragon God",
    "career": "?",
    "captain": "Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Mother of All Things",
        "description": "While this hero is present, whenever any unit dies on the battlefield, all ally heroes share this unit's attributes (Attack, Defense, and HP) equally. The maximum increase per attribute for each hero cannot exceed 30% of the Dark Lady's corresponding attribute. Also heals ally heroes by 10% of the dead unit's Max HP, capped at 10% of each ally hero's own Max HP."
      },
      "battle": {
        "name": "Dragon God's Retribution",
        "description": "Deals damage to 3 random targets twice, inflicting Attack Penalty II."
      },
      "ultimate": {
        "name": "Absolute Rule",
        "description": "Has a 75% chance of dispelling all enemy buffs and shields, then damages all targets twice and inflicts Buff Prohibition."
      }
    },
    "inspiration": [
      {
        "id": 2301191,
        "show_name": "Inspiration 1",
        "spell_tips": "The battle skill can inflict Healing Prohibition on enemies."
      },
      {
        "id": 2301192,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance for the ultimate skill to dispel enemy buffs."
      },
      {
        "id": 2301193,
        "show_name": "Inspiration 3",
        "spell_tips": "The number of random targets selected by the battle skill increases to 5."
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2301195,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the cap for attributes gained via passive skills to 35%, and increases the HP restoration cap to the target's 15%."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 20690,
    "name": "Torrin",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "?",
    "captain": "Increases all allies' Resistance by 40.0 in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Shadow Protection",
        "description": "As the battle starts, Marks and enhances the first ally in front of the hero, granting them 20% of the cleric's Max HP and Defense. Then the hero gains Invisibility for 10.0s."
      },
      "battle": {
        "name": "Chaotic Prayer",
        "description": "Heals the ally with the lowest HP by [+12%Target's Max HP][+2400%Enlightenment]. And heals marked allies by [+6%Target's Max HP][+1200%Enlightenment]. When healing marked allies, there is a 100% chance to dispel 1 debuffs from them."
      },
      "ultimate": {
        "name": "Underworld Cloak",
        "description": "Grants Invisibility to all allies for 10.0s. The cleric then casts a spell over time that heals all allies by [+3%Target's Max HP][+600%Enlightenment] every 0.8s for 4.0s. The marked ally will not be granted Invisibility but will gain Debuff Immunity and an additional 25% of healing."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7260001,
        "show_name": "Inspiration 5",
        "spell_tips": "Each healing granted by the battle skill additionally dispels 1 debuffs from target allies."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240011,
        "show_name": "Inspiration 5",
        "spell_tips": "Buffs granted with the ultimate skill cannot be dispelled."
      }
    ],
    "tj_team": [
      22220,
      21770,
      22300,
      22180,
      21420,
      21690,
      21930,
      21810
    ],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000101,
      8000102,
      8000087,
      8000135,
      8000064,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21760,
    "name": "Aschetius",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s2",
    "type": "Melee",
    "race": "Dragon",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Fire Control",
        "description": "Basic-attacks enemies in the 3 adjacent tiles in front. Gains 3.0 Ultimate Energy each time an enemy inflicted with Burn is hit. For each stack of Burn on any target on the field, the hero gains 1 stack of Scorching Rhythm."
      },
      "battle": {
        "name": "Wrath of Lava",
        "description": "Deals [+400%Attack]Fire Damage to enemies within range and inflicts 50% Ignite."
      },
      "ultimate": {
        "name": "Pyrokinesis",
        "description": "Deals [+400%Attack]Fire Damage to all enemies and inflicts 50% Ignite. Then, marks all enemies inflicted with Burn, immediately triggering Blast (rounded down) for half of their Burn stacks. Deals extra [+100%Attack]Fire Damage centered on the marked enemies. This extra damage increases by 100% for each stack of Blast triggered."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210015,
        "show_name": "Inspiration 2",
        "spell_tips": "For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260028,
        "show_name": "Inspiration 5",
        "spell_tips": "When casting an ultimate skill, every stack of Burn removed will increase the hero's Attack by 2%, up to 20 times. This bonus applies to the current ultimate skill, until the next ultimate is cast."
      }
    ],
    "tj_team": [
      20450,
      22690,
      20230,
      20820
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000148,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 21120,
    "name": "Beldelle",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Frost's Favor",
        "description": "If the hero has Ice Crystal after casting a battle skill, consumes 1 stack of Ice Crystal and casts the skill again. At over 3 stacks of Ice Crystal, converts 300% of excess Crit Rate into Crit Damage."
      },
      "battle": {
        "name": "Runaway Storm",
        "description": "Deals [+420%Attack]Cold Damage to the enemy, ignoring the target's shield and increasing damage dealt by 50% against shielded units. Afterwards, the hero gains Crit Damage Up for 5.0s, up to 5 stacks."
      },
      "ultimate": {
        "name": "Frost Crystallization",
        "description": "Strikes an enemy 3 times, each dealing [+300%Attack]Cold Damage, with a 50% chance of gaining 1 stack of Ice Crystal."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210013,
        "show_name": "Inspiration 2",
        "spell_tips": "Each time the battle skill is cast, increases the damage dealt by 2%. This effect stacks up to 10 times."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260026,
        "show_name": "Inspiration 5",
        "spell_tips": "The conversion rate of Crit Damage from this passive skill is increased to 360%."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310304,
      310303,
      310302,
      310301,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000146,
      8000076,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21520,
    "name": "Perkunte",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Range",
    "race": "Dragon",
    "career": "?",
    "captain": "Increases all allies' Attack by 30% in Grand Gladiator Arena battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Bronze Gaze",
        "description": "When the hero's present, whenever an ally triggers a Lightning Chain that deals damage, there is a 75% chance of additionally triggering 1 Lightning Bolt, dealing [+150%Attack]Derivative."
      },
      "battle": {
        "name": "Thunderous Rapids",
        "description": "Deals [+200%Attack][+3000%Enlightenment]Lightning Damage to enemies within range, with a 75% chance of triggering 1 Lightning Chain."
      },
      "ultimate": {
        "name": "Lawful Retribution",
        "description": "Attacks all enemies twice, dealing [+240%Attack][+2400%Enlightenment]Lightning Damage. The first attack has a 100.0% chance of inflicting Electrocuted for 8.0s. The second attack triggers 2 Lightning Chains."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 2152092,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the damage of the passive skill [Lightning Bolt] by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2152095,
        "spell_tips": "The ultimate skill's second attack triggers 1 additional Lightning Chain."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310380,
      310379,
      310378,
      310377,
      310308,
      310307,
      310306,
      310305,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000147,
      8000134,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20930,
    "name": "Ardreth",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Defense by 24% in all battles.",
    "avg": 4.875,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Divine Blessing",
        "description": "After the battle starts, the hero gains 1 stack of Blessing every 5s. This buff is permanent and cannot be dispelled, up to 10 stacks. When the hero's Blessing reaches 10 stacks, grants 10 stacks of Blessing to all allies."
      },
      "battle": {
        "name": "Moonlight Prayer",
        "description": "Heals the ally with the lowest percentage of HP by [+280%Defense], and grants Defense Up II to them for 5.0s. When this skill is cast on a target below 50% HP, healing will be increased by 30% and reduces the recharge time for the target's next battle skill by 50%."
      },
      "ultimate": {
        "name": "Sanctuary's Blessing",
        "description": "Enhances the hero for 10s, increasing all allies' healing received by 50% in the duration, and increases the hero's basic attack, dealing [+300%Defense]Radiant Damage each time. When Enhanced, each of the hero's basic attacks grants the ally with the lowest HP with [+180%Defense] healing and has a 100% chance of dispelling 1 debuff from them."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "DEF% +30%"
      },
      {
        "id": 7240004,
        "show_name": "Inspiration 5",
        "spell_tips": "Has a 35% chance to get immune to the Control to be inflicted."
      }
    ],
    "tj_team": [
      20000,
      22800,
      22130,
      21500
    ],
    "tj_eq": [
      311190,
      311189,
      311188,
      311187,
      310328,
      310327,
      310326,
      310325,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000178,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        1,
        1
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21780,
    "name": "Shai'nachtan",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "The Unstill",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "avg": 4.75,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Chasing Peril",
        "description": "Shai'nachtan can be targeted by the Lightning Chain without consuming a chain count. If equidistant, the Lightning Chain prioritizes chaining to Shai'nachtan, transforming it into an Enhanced Lightning Chain. The Lightning Chain damage is increased to 150%."
      },
      "battle": {
        "name": "Shared Misfortune",
        "description": "Deals [+200%Attack][+2400%Enlightenment]Lightning Damage to up to 2 random enemies, with a 75% chance of triggering 1 Lightning Chain."
      },
      "ultimate": {
        "name": "Embracing Calamity",
        "description": "Grants 25% Attack Up to all Thunderbolt allies for 10.0s. Then deals [+500%Attack][+5000%Enlightenment]Lightning Damage to enemies within range and triggers 1 Lightning Chain."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310380,
      310379,
      310378,
      310377,
      310308,
      310307,
      310306,
      310305,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000145,
      8000134,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20230,
    "name": "Karf",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 4.625,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Fish in Troubled Waters",
        "description": "When the hero's skills hit an enemy inflicted with Burn, inflicts 1% Ignite for each stack of Burn they possess. When the hero's skills convert the target's Ignite into Burn, deals additional [+60%Attack]Fire Damage to the target."
      },
      "battle": {
        "name": "Marine Gunslinger",
        "description": "Attacks an enemy 6 times. Each attack deals [+60%Attack]Fire Damage and inflicts 20% Ignite."
      },
      "ultimate": {
        "name": "O Captain! My Captain!",
        "description": "The hero gains Accuracy Up II for 10.0s, then bombards all enemies on the field 4 times. Each bombardment deals [+200%Attack]Fire Damage and inflicts 75% Ignite."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [
      20820,
      21450,
      22340,
      20820
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310356,
      310355,
      310354,
      310353,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21200,
    "name": "Zhorak",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Orc",
    "career": "?",
    "captain": "",
    "avg": 4.625,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Shared Faith",
        "description": "When an ally casts a spell that consumes Ice Crystal, the hero fires an icicle at the current target, dealing [+150%Attack]Cold Damage and gaining 1 stack of Crit Rate Up for 10.0s, up to 10 stacks. The hero also has a 35% chance of gaining 1 stack of Ice Crystal."
      },
      "battle": {
        "name": "Ominous Retribution",
        "description": "Fires an icicle at an enemy, dealing [+360%Attack]Cold Damage, and consumes all the hero's Ice Crystals. Every stack of Ice Crystals consumed launches an additional icicle, dealing [+360%Attack]Cold Damage."
      },
      "ultimate": {
        "name": "Deadly Verdict",
        "description": "Grants 20% Damage Up to all Ice Blast allies for 10.0s, with a 100% chance of granting them 1 stack of Ice Crystal. Meanwhile, all Ice Blast allies gain the effect of Zhorak's passive skill for 10.0s. Except for the hero, other allies can not gain Ice Crystals by casting Icicles."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by 5."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310304,
      310303,
      310302,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000143,
      8000076,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21270,
    "name": "Rose",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Tireless",
        "description": "When the hero has a buff, the enemy cannot resist debuffs inflicted by the hero."
      },
      "battle": {
        "name": "Sin of Ignorance",
        "description": "Deals [+250%Attack][+2400%Enlightenment]Radiant Damage to enemies within range, with a 75.0% chance to inflict Recharging Speed Penalty for 5.0s. Meanwhile, the hero gains 20% Enlightenment Up for 5.0."
      },
      "ultimate": {
        "name": "Purged by Knowledge",
        "description": "Casts the spell 4 times, each dealing [+80%Attack][+800%Enlightenment]Radiant Damage to a random enemy and nearby enemies, with a 75.0% chance of inflicting Attack Penalty I on them for 6.0s. Meanwhile, heals 2 allies with the currently lowest percentage of HP by [+4%Target's Max HP][+600%Enlightenment], with a 100% chance of dispelling 1 debuff from them. The hero casts the spell 1 extra time for every 100 Enlightenment they have, up to 6 times."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210000,
        "show_name": "Inspiration 2",
        "spell_tips": "When granting a buff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240010,
        "show_name": "Inspiration 5",
        "spell_tips": "Buffs granted with the battle skill cannot be dispelled."
      }
    ],
    "tj_team": [
      20420,
      20840,
      20300,
      22410
    ],
    "tj_eq": [
      310978,
      310977,
      310976,
      310975,
      310352,
      310351,
      310350,
      310349,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 22340,
    "name": "Durem",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "?",
    "captain": "",
    "avg": 4.375,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Global Oversight",
        "description": "Whenever an enemy's Burn is dispelled (including by triggering Blast), the hero attacks that enemy once, dealing AOE [+250%Attack]Fire Damage centered on them."
      },
      "battle": {
        "name": "Free Blaze",
        "description": "Locks onto 3 random target(s) and fires missiles at them. Each missile deals [+160%Attack]Fire Damage to enemies within range and inflicts 25% Ignite."
      },
      "ultimate": {
        "name": "Red Horizon",
        "description": "Bombards the target area, dealing [+250%Attack]Fire Damage 3 times to enemies within range. Additionally, for enemies inflicted with Burn within range, each stack of Burn has a 100% chance of inflicting 1 stack of Incineration for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      20230,
      20820,
      21450,
      20820
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000144,
      8000077,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 21250,
    "name": "Malak",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "avg": 4.375,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Confined",
        "description": "When inflicted with Control or Ultimate Down, gains 15.0 Ultimate Energy and heals the hero by [+10%Max HP]. This effect can only occur once every 2.0s.  Also, if the hero fails to resist Control or Ultimate Down, there is an extra 40% chance to nullify those effects."
      },
      "battle": {
        "name": "Eternal Existence",
        "description": "Deals [+240%Attack][+6%Max HP]Poison Damage to the enemy and heals the hero by [+12%Max HP]. The healing is doubled if the enemy is inflicted with a debuff."
      },
      "ultimate": {
        "name": "Bone Gnawing Prison",
        "description": "Dispels all Control from allies and grants them Control Immunity for 10.0s. Meanwhile, deals [+420%Attack][+14%Max HP]Poison Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "DEF% +30%"
      },
      {
        "id": 7240005,
        "show_name": "Inspiration 5",
        "spell_tips": "When inflicted with Control, reduces its duration by 50%."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310328,
      310327,
      310326,
      310325,
      310392,
      310391,
      310390,
      310389,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22810,
    "name": "Shinnah",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Merfolk",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.",
    "avg": 4.125,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Dirge",
        "description": "If the hero has Ice Crystal after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. When this hero grants Ice Crystal to other Ice Blast allies, additionally grants 2% Crit Rate Up to all Ice Blast allies for 10.0s, up to 5 stacks."
      },
      "battle": {
        "name": "Frost Whisper",
        "description": "Generates a frost projectile after a brief channeling, dealing [+300%Attack]Cold Damage to the enemy. Generates an extra frost projectile for each stack of Ice Crystal the hero has. Each time a frost projectile hits the target, there is a 50% chance of granting 1 stack of Ice Crystal to an Ice Blast ally."
      },
      "ultimate": {
        "name": "Glacial Descent",
        "description": "Continuously casts the spell for 6s. During this period, strikes a random enemy every 0.5s, each time dealing [+80%Attack]Cold Damage, with a 50% chance of granting 1 stack of Ice Crystal to all Ice Blast allies."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210014,
        "show_name": "Inspiration 2",
        "spell_tips": "Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310376,
      310375,
      310374,
      310373,
      310126,
      310125,
      310124,
      310123
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21730,
    "name": "Dalk",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Range",
    "race": "Forest Troll",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Rotten and Stinking",
        "description": "Attacks the enemy with the highest Attack at the start of combat, dealing [+320%Attack]Necrotic Damage and marking that target to inflict them with 30 stacks of Attack Penalty. The target loses 1 stack of Attack Penalty every 1s for the next 30s."
      },
      "battle": {
        "name": "Rotten Affliction",
        "description": "Deals [+350%Attack]Necrotic Damage to the enemy with the highest Attack and has a 75.0% chance of inflicting Attack Penalty II on them for 5.0s."
      },
      "ultimate": {
        "name": "Shadowy Devouring",
        "description": "The hero gains Accuracy Up II for 10.0s. Then deals [+819%Attack]Necrotic Damage to the enemy with the highest Max HP, with a 75.0% chance to inflict Recharging Speed Penalty on them for 10.0s. And reduces the enemy's Ultimate Energy by 30.0, with a 75.0% chance to inflict Banished for 5.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by 5."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310360,
      310359,
      310358,
      310357,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 21480,
    "name": "Nissa",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Range",
    "race": "Deep Gnome",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.",
    "avg": 3.625,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Lightning Mark",
        "description": "At the start of battle, unleashes a mechanical creature to mark the enemy with the highest Crit Damage. The marked target is prioritized by Lightning Chains and takes Lightning Chain damage twice, with the second instance of damage reduced by 50%. If the target dies, the mechanical creature will select a new enemy to follow."
      },
      "battle": {
        "name": "Thunderous Crossbow",
        "description": "Deals [+450%Attack]Lightning Damage to an enemy, with a 75.0% chance of inflicting Electrocuted for 8.0s. If the target is already affected by Electrocuted, this skill will not inflict Electrocuted but will trigger 1 Lightning Chain."
      },
      "ultimate": {
        "name": "Chain Lightning",
        "description": "Selects an enemy. Deals [+100%Attack]Lightning Damage twice to the target and surrounding enemies, with a 100.0% chance of inflicting Electrocuted for 8.0s. Simultaneously, mechanical creatures will follow this target and generate an electric field centered on it for 10.0s. During this time, all enemies hit by a Lightning Chain within the field take damage twice, with the second instance of damage reduced by 50%."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by 5."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310380,
      310379,
      310378,
      310377,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23480,
    "name": "Bernade",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s2",
    "type": "Range",
    "race": "Half-orc",
    "career": "?",
    "captain": "Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Beast Lord",
        "description": "Each stack of Natural Instinct increases damage dealt by summoned units by 3% for 10.0s (up to 20 stacks). After granting Natural Instinct to a Summoner School hero or summoned unit, the next application grants 1 additional stack of Natural Instinct."
      },
      "battle": {
        "name": "Predation",
        "description": "Summons a temporary Bear Spirit to attack the target and grants Natural Instinct to all summoned units and Summoner School heroes. When the Bear Spirit disappears, it deals [+200%Attack]Necrotic Damage to surrounding enemies."
      },
      "ultimate": {
        "name": "Entrancing",
        "description": "Summons the Bear King back to the hero and grants Natural Instinct to all undead creatures and Summoner School heroes. For the next 6s, Bernade will ride the Bear King and continuously charges at the farthest enemy, dealing [+200%Attack]Necrotic Damage to surrounding enemies every 1s. At the end, Bernade returns to the initial position and re-summons the Bear King. During the charge, if any target on the field dies, Natural Instinct will be granted to all summoned units and Summoner School heroes."
      }
    },
    "inspiration": [
      {
        "id": 7200000,
        "show_name": "Inspiration 1",
        "spell_tips": "When an ally dies, heals the hero by [+15%Max HP]."
      },
      {
        "id": 2348092,
        "show_name": "Inspiration 2",
        "spell_tips": "The battle skill summons 2 Bear Spirits to attack."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2348095,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the duration of the ultimate skill by 2.0s."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310304,
      310303,
      310302,
      310301,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000095,
      8000181,
      8000066
    ],
    "tf": [
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1
      ]
    ]
  },
  {
    "id": 22410,
    "name": "Gladys",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s2",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Unwavering Support",
        "description": "The hero receives 1 additional stack upon gaining Rally. When an ally's Rally overflows, the excess is stored on Gladys, up to 5 stacks of Rally. When a Rally ally casts an ultimate skill, if their Rally is less than 3 stacks, Gladys's Rally stacks are consumed to perform a Rally Spellcasting."
      },
      "battle": {
        "name": "Journeying Together",
        "description": "Grants 1 stack of Rally to all Rally allies."
      },
      "ultimate": {
        "name": "Dawn's Revelation",
        "description": "Fires a light orb at each Rally hero, which then bounces to the enemy they are attacking, dealing [+500%Attack]Radiant Damage. When an orb hits an ally, it grants 40% Attack Up for 10.0s. The ally with the highest Crit Damage gains 10 Mark(s). Each time this Marked ally's ultimate skill deals damage, 1 Mark is consumed to deal additional damage based on Gladys' 100% Attack and the ally's 100% Attack. Consuming  stacks sequentially grants the following effects: [1] Increases the Mark count by 5. [2] Fires 1 additional light orb(s). [3] Increases the Mark count by 15."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 2241092,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero's Rally cannot be dispelled."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 2241095,
        "show_name": "Inspiration 5",
        "spell_tips": "The ultimate skill can fire two Light Orbs at each target."
      }
    ],
    "tj_team": [
      20420,
      21270,
      20840,
      20300
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310352,
      310351,
      310350,
      310349,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000193,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 24300,
    "name": "Naro",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Aether Shade",
        "description": "（已发包）自身对敌人施加减益状态时，同时对目标施加Empyrean Treads，持续5.0秒。"
      },
      "battle": {
        "name": "Vital Blaze",
        "description": "Slides forward, dealing [+320%Attack]Fire Damage to enemies in the path with a 75.0% chance of inflicting Healing Prohibition for 5.0s."
      },
      "ultimate": {
        "name": "Crimson Pulse",
        "description": "Deals [+520%Attack]Fire Damage to all enemies with a 75.0% chance of inflicting Attack Penalty II for 10.0s. Also grants [+25%Target's Max HP] healing to all allies."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240008,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores the target's Resistance when inflicting debuffs or control effects on them with ultimate skill."
      }
    ],
    "tj_team": [
      23250,
      20410,
      20810,
      20400
    ],
    "tj_eq": [
      311190,
      311189,
      311188,
      311187,
      311134,
      311133,
      311132,
      311131,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000192,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22430,
    "name": "Sleight",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s2",
    "type": "Range",
    "race": "Ratfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Press the Advantage",
        "description": "At the start of battle, has a 100.0% chance of inflicting 3 stack(s) of Potent Medicine on all enemies for 15.0s. When each stack of Potent Medicine expires, is dispelled, or is resisted, there is a 100.0% chance of inflicting 1 stack(s) of Poison on the target for 15.0s."
      },
      "battle": {
        "name": "Sustained Offensive",
        "description": "Attacks an enemy 4 times, dealing [+100%Attack][+1000%Enlightenment]Poison Damage with a 75.0% chance of inflicting 1 stack(s) of Poison for 15.0s. The last attack has a 100.0% chance of inflicting 1 stack(s) of Potent Medicine for 15.0s."
      },
      "ultimate": {
        "name": "Misdirection",
        "description": "Strikes enemies within range 3 times, each dealing [+240%Attack][+2400%Enlightenment]Poison Damage with a 100.0% chance of inflicting 1 stack(s) of Poison for 15.0s. For every 5 stack(s) of Poison the hit target possesses, there is a 100.0% chance of inflicting 1 stack(s) of Potent Medicine for 15.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210015,
        "show_name": "Inspiration 2",
        "spell_tips": "For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 2243095,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases Potent Medicine stack limit to 10."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310380,
      310379,
      310378,
      310377,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22800,
    "name": "Aemonleyda",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s3",
    "type": "Melee",
    "race": "Merfolk",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by  in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Misty Sea's Blessing",
        "description": "When taking direct damage, has a  chance of triggering Blaze, dealing  to the attacker. The triggered Blaze can be enhanced by consuming 5 Aura Energy, reducing the damage taken by  and adding  for this attack. Gains 1 stack of  afterward. For every  Attack Aemonleyda has, the damage reduction of Aura-enhanced Blaze is increased by an extra , up to a maximum of ."
      },
      "battle": {
        "name": "Glitter of Gold",
        "description": "Deals  centered on the current target and gains a  shield for s. If Aura Energy is above 50, consumes  Aura Energy to upgrade the shield to a  shield, also gaining  while the shield is active."
      },
      "ultimate": {
        "name": "Dazzling Kiss",
        "description": "Gains  Aura Energy and deals  to enemies within range. For each enemy hit, gains an additional  Aura Energy. Afterwards, launches follow-up attacks on the target area. For every 25 Aura Energy the hero has, an additional attack is made, dealing  and ."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by  after killing an enemy."
      },
      {
        "id": 2280092,
        "spell_tips": "While shielded, the hero deals  more damage."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7260031,
        "show_name": "Inspiration 5",
        "spell_tips": "The chance for Misty Sea Familiar to trigger Blaze is increased by . When Blaze is triggered this way, the Aura Energy enhancement is gained without consuming Aura Energy."
      }
    ],
    "tj_team": [
      23610,
      20000,
      23820,
      21500
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000156,
      8000079,
      8000060
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 22280,
    "name": "Ozul",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Shadow",
    "season": "s3",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by  in Grand Gladiator Arena battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Lord of Shadow",
        "description": "The hero permanently gains 1 undispellable stack of  for every  Shadow Energy obtained, up to  stacks."
      },
      "battle": {
        "name": "Nightmare Corrosion",
        "description": "Fires an orb at the target, dealing  to the target and enemies around them. Gains  Shadow Energy. When the hero is in Demon form, deals  to enemies within 2 tiles around the hero instead, and then gains  Shadow Energy."
      },
      "ultimate": {
        "name": "Prince of Evil Domain",
        "description": "Transforms into a Demon in the designated location. While in Demon form, the hero gains  and , with his basic attacks splashing on enemies around the target. Basic attacks increase to . Then deals  to enemies within range. The hero consumes  Shadow Energy every s in Demon form and exits it when Shadow Energy is depleted."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by ."
      },
      {
        "id": 2228092,
        "spell_tips": "While in Demon Form, Ozul ignores  of the enemy's Defense."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260030,
        "show_name": "Inspiration 5",
        "spell_tips": "Gains  stack(s) of  at the start of battle, and increases the max stacks of  to 8."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310962,
      310961,
      310960,
      310959,
      310308,
      310307,
      310306,
      310305,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000155,
      8000083,
      8000065
    ],
    "tf": [
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22050,
    "name": "Rook",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Corrosion",
    "season": "s3",
    "type": "Range",
    "race": "Ratfolk",
    "career": "?",
    "captain": "Increases all allies' Attack by  in all battles.",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Double Face",
        "description": "Each time True Damage is dealt by consuming Corrosion, this damage is increased by ."
      },
      "battle": {
        "name": "Indiscriminate Assault",
        "description": "Summons a giant mouse to strike enemies within range, dealing ."
      },
      "ultimate": {
        "name": "Black Death",
        "description": "Gains 1 stack of  (up to  stacks) upon casting this skill. Then casts 3 spells, with each spell dealing  to enemies within range. Each spell launches  follow-up attack(s) with  Corrosion consumed from the target, dealing  each hit. At the end of the skill, performs additional follow-up attacks, each consuming  of the target's Corrosion to deal . (The follow-up attack count increases by 1 for each cast of the ultimate skill, up to a boost of .)"
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes  less crit damage."
      },
      {
        "id": 2205092,
        "spell_tips": "Each time the hero's ultimate skill is cast, increases the skill's True Damage dealt by , up to  stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7260029,
        "show_name": "Inspiration 5",
        "spell_tips": "Enhanced Black Death: The follow-up attack count increases by  for each cast of the ultimate skill, up to a boost of ."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000154,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0
      ]
    ]
  },
  {
    "id": 21710,
    "name": "Trolgar",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s3",
    "type": "Melee",
    "race": "Frost Troll",
    "career": "?",
    "captain": "",
    "avg": 5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Body of Chill",
        "description": "The first time an enemy is inflicted with , removes the target's shield and deals an additional . After casting a skill, for each enemy hit, gains 1 stack of . While possessing , dispelling 1 stack of  changes the basic attack to a Tornado Slash. The Tornado Slash deals  to all enemies within range and inflicts ."
      },
      "battle": {
        "name": "Arctic Axe",
        "description": "Jumps up and strikes the enemy with the lowest Current HP, dealing  with a  chance of inflicting  for s."
      },
      "ultimate": {
        "name": "Winter's Vengeance",
        "description": "Grants  to all Frost heroes for s. Leaps to a target location, dealing  to enemies within range with a  chance of inflicting  stack(s) of  for s. Afterward, deals  with a  chance of inflicting  stack(s) of  for s."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by  after killing an enemy."
      },
      {
        "id": 2171092,
        "show_name": "Inspiration 2",
        "spell_tips": "When inflicting , ignores  of the target's Resistance."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2171095,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases passive skill damage to 15% Max HP (up to 1,500% of the hero's Attack)."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310308,
      310307,
      310306,
      310305,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000092,
      8000078,
      8000065
    ],
    "tf": [
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 21070,
    "name": "Aspalta",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Shadow",
    "season": "s3",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by  in all battles.",
    "avg": 4.875,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Resentment",
        "description": "At the start of battle, grants  stack(s) of  to all Shadow allies. They lose  stack(s) every s afterward."
      },
      "battle": {
        "name": "Deathbringer",
        "description": "Throws a shadow blade at the target, dealing  to them and  to enemies within a target-centered range in the meantime. Gains  Shadow Energy for each enemy hit, and gains an additional  Shadow Energy when casting this skill in battle for the first time."
      },
      "ultimate": {
        "name": "Frontal Assault",
        "description": "Grants  Shadow Energy to all Shadow allies. Strikes enemies within range 3 times, with each strike dealing , ignoring  of the enemies' Defense."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by  after killing an enemy."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains  Damage Bonus when their HP is higher than ."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores  of the target's Defense."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310384,
      310383,
      310382,
      310381,
      310376,
      310375,
      310374,
      310373,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000159,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23000,
    "name": "Feenja",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Range",
    "race": "Undead",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by  in all battles.",
    "avg": 4.875,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Bride's Last Wish",
        "description": "Whenever an ally gains or loses a buff, the hero heals them by . This effect can only be triggered once every s. When healing Theodemer, the healing effect is further increased by ."
      },
      "battle": {
        "name": "Manner of Hospitality",
        "description": "Dispels all debuffs from the ally with the currently lowest percentage of HP. Heals them by , and grants them  for s."
      },
      "ultimate": {
        "name": "Mourning Matrimony",
        "description": "Heals all allies by  twice and grants them  for s. Deals  twice to enemies within range in the meantime, with a  chance to inflict  on them for s, ignoring  of their Resistance."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes  less crit damage."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below , heals the hero by  per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 2300095,
        "show_name": "Inspiration 5",
        "spell_tips": "The battle skill additionally grants  to two other allies for 5s."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310978,
      310977,
      310976,
      310975,
      310400,
      310399,
      310398,
      310397,
      310134,
      310133,
      310132,
      310131
    ],
    "tj_sq": [
      8000150,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1
      ]
    ]
  },
  {
    "id": 21020,
    "name": "Quaesitia",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' Defense by  in Grand Gladiator Arena battles.",
    "avg": 4.875,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Ironfist",
        "description": "When taking damage, there is a  chance of inflicting  on the attacker for s. Additionally, when taking damage, triggers Total Defense and restores  (Total Defense triggers once every s)."
      },
      "battle": {
        "name": "Oppression",
        "description": "Briefly shoots down all incoming ranged basic attacks towards the hero. Then, teleports to the location with the most enemies, dealing  to surrounding enemies, with a  chance of inflicting  for s."
      },
      "ultimate": {
        "name": "Deadly Slash",
        "description": "Attacks all enemies, dealing , then deals  again with a  chance of inflicting  for s, while pulling targets towards the hero. After the pull, deals  to surrounding enemies, with each attack reducing the target's Ultimate Energy by ."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by  after killing an enemy."
      },
      {
        "id": 2102092,
        "show_name": "Inspiration 2",
        "spell_tips": "The ultimate skill ignores  of the target's Resistance."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 2102095,
        "show_name": "Inspiration 5",
        "spell_tips": "Each time Adaptive Defense is triggered, HP restoration increases to ."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310974,
      310973,
      310972,
      310971,
      310336,
      310335,
      310334,
      310333,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        1,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22990,
    "name": "Theodemer",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "Increases all allies' Defense by  in Grand Gladiator Arena battles.",
    "avg": 4.875,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Necrotic Tenacity",
        "description": "The hero cannot obtain a shield. For each enemy on the field that targets him, gains 1 stack of , up to  stacks. The hero gains the following additional effects when deployed with Feenja:  and  for s and  Ultimate Energy when his HP drops to 0 for the first time during a battle."
      },
      "battle": {
        "name": "Fallen Kingdom Swordplay",
        "description": "Strikes the enemy 3 times, with each strike dealing  and reducing their Ultimate Energy by . If the target's Ultimate Energy is reduced to 0, the hero gains additional  Ultimate Energy. Also, the third strike has a  chance of inflicting  on them for s."
      },
      "ultimate": {
        "name": "Spite of the Wronged Dead",
        "description": "Gains  and  for s, and deals  to all enemies, with a  chance of inflicting  on them for s."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by  when under Control."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below , heals the hero by  per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240005,
        "show_name": "Inspiration 5",
        "spell_tips": "When inflicted with Control, reduces its duration by ."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310336,
      310335,
      310334,
      310333,
      310974,
      310973,
      310972,
      310971,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000103,
      8000133,
      8000068
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        0
      ]
    ]
  },
  {
    "id": 21310,
    "name": "Stanguem",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Ridge Halfling",
    "career": "?",
    "captain": "Increases all allies' Resistance by  in Grand Gladiator Arena battles.",
    "avg": 4.75,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Thunderstorm Incoming",
        "description": "When in possession of a buff, basic attacks bounce between enemies up to  times. Each hit deals , with a  chance of dispelling 1 buff from them. The subsequent damage will be reduced by ."
      },
      "battle": {
        "name": "Absolute Alert",
        "description": "The hero gains  for s, and gains a  shield for s when exiting this state."
      },
      "ultimate": {
        "name": "Breeze of Nature",
        "description": "Dispels all debuffs from the hero, and grants  and  to all allies for s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to  of the hero's Max HP, has a  chance of dispelling  debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210017,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero grants  more shield."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores  of the target's Resistance."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310392,
      310391,
      310390,
      310389,
      310982,
      310981,
      310980,
      310979,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21500,
    "name": "Diantha",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Nymph",
    "career": "?",
    "captain": "Increases all allies' Attack by  in all battles.",
    "avg": 4.625,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Fall with Wind",
        "description": "Diantha's Aura Energy is capped at  and regenerates by  every s. Diantha's basic attacks launch a Bouncing Orb that can bounce between enemies up to  times, dealing  with each hit."
      },
      "battle": {
        "name": "Caution of the Forest",
        "description": "Deals  to enemies within range and grants all Aura allies  Aura Energy. If the hero's Aura Energy is above 50, consumes  Aura Energy to grant Aura allies  more Aura Energy."
      },
      "ultimate": {
        "name": "Blooming Flowers",
        "description": "Deals  to enemies within range and creates a magic circle in the target area. When enemies inside the circle are hit by an attack that includes bonus damage from an Aura hero's HP, the attacker restores  Aura Energy. Every  times this energy restoration effect is triggered, Diantha deals an additional  to enemies within range. The magic circle initially lasts s. Diantha can consume Aura Energy to extend its duration. Every  Aura Energy consumed extends the duration by s, up to s."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by  when under Control."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains  Damage Bonus when their HP is higher than ."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores  of the target's Defense."
      }
    ],
    "tj_team": [
      23610,
      23820,
      23090,
      22790
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310978,
      310977,
      310976,
      310975,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000109,
      8000086,
      8000060
    ],
    "tf": [
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22790,
    "name": "Lincos",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Merfolk",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .",
    "avg": 4.625,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Sonata Form",
        "description": "Gains  Aura Energy at the start of battle. The Aura ally with the highest Attack (other than the hero) also gains  Aura Energy."
      },
      "battle": {
        "name": "Forte Variation",
        "description": "Gains  Aura Energy, then attacks enemies within range three times, dealing  each time."
      },
      "ultimate": {
        "name": "Ode to the Misty Sea",
        "description": "Deals  to all enemies. The hero and the Aura ally with the highest Attack gain  Aura Energy and  for s. Afterward, summons an Accompanist to follow the Aura ally with the highest Attack. The Accompanist disappears when Lincos runs out of Aura Energy."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by ."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains  Damage Bonus when their HP is higher than ."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores  of the target's Defense."
      }
    ],
    "tj_team": [
      23610,
      23820,
      23090,
      21500
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310978,
      310977,
      310976,
      310975,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000162,
      8000086,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 22250,
    "name": "Daphne",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Shadow",
    "season": "s3",
    "type": "Range",
    "race": "Undead",
    "career": "?",
    "captain": "Increases all allies' Attack by  in dungeon battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Soul Shiver",
        "description": "The hero gains an additional  Shadow Energy. Also, if the hero possesses a target when gaining Shadow Energy, the possessed target gains the same amount of Shadow Energy."
      },
      "battle": {
        "name": "Twining Dead Moon",
        "description": "Randomly attacks up to  enemies, dealing  and gaining  Shadow Energy on each enemy hit. This skill can be cast when possessing an ally."
      },
      "ultimate": {
        "name": "Embrace of Wail",
        "description": "Possesses the nearest ally for s, during which time the possessed target deals  to surrounding enemies every s (damage dealt in this way will not grant Shadow Energy to Daphne). The possessed target gains Attack Up equal to  of Daphne's Attack. When the possessed target deals damage,  of the damage dealt will be converted to their HP."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by ."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than  HP, the hero gains  Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores  of the target's Defense."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000106,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22690,
    "name": "Synarell",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Dawn's Protection",
        "description": "When the hero's skill hits an enemy, there is a  chance of inflicting  on them for s, and the infliction cannot be resisted. Also, when the hero uses a skill to heal an ally, the hero himself gains an healing of  of the current healing granted."
      },
      "battle": {
        "name": "Flame of Exaltation",
        "description": "Fires 3 fireballs to strike random enemies, with each fireball dealing  and healing the ally with the currently lowest percentage of HP by ."
      },
      "ultimate": {
        "name": "Daylight Domain",
        "description": "Selects an ally, dispels all of their debuffs and grants them  for s. When  on the ally expires, the hero deals  to all enemies and heals all allies by ."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by  when under Control."
      },
      {
        "id": 7210007,
        "show_name": "Inspiration 2",
        "spell_tips": "When healing an ally with less than  HP, grants  stack of  for s. This skill only takes effect once during a period."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2269095,
        "show_name": "Inspiration 5",
        "spell_tips": "The battle skill can grant an additional stack of  for 5s."
      }
    ],
    "tj_team": [
      20450,
      20230,
      20820,
      21760
    ],
    "tj_eq": [
      311194,
      311193,
      311192,
      311191,
      310352,
      310351,
      310350,
      310349,
      310126,
      310125,
      310124,
      310123
    ],
    "tj_sq": [
      8000102,
      8000085,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1
      ]
    ]
  },
  {
    "id": 21100,
    "name": "Sacredeia",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Corrosion",
    "season": "s3",
    "type": "Range",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by  in dungeon battles.",
    "avg": 4.25,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 5,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Source of Corrosion",
        "description": "When enemies are under Corrosion, increases their damage taken by  and True Damage taken by ."
      },
      "battle": {
        "name": "Swarm of Rampage",
        "description": "Deals  to all enemies within range centered on the target."
      },
      "ultimate": {
        "name": "Grip of Venom",
        "description": "Deals  twice to enemies within range, with a  chance of inflicting  for s."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by  when under Control."
      },
      {
        "id": 7210011,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to an enemy, for every  of the target's Max HP over that of the hero, the damage dealt will increase by , up to ."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores  of the target's Defense."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310308,
      310307,
      310306,
      310305,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21410,
    "name": "Victor",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Gnome",
    "career": "?",
    "captain": "Increases all allies' Accuracy by  in all battles.",
    "avg": 4.125,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Deeper Investigation",
        "description": "Marks the enemy when the hero inflicts a debuff on them. The mark lasts the same as the debuff. Healing received by the marked enemy reduces by . The Ultimate Energy of their healer will also be reduced by  as the enemy receives healing. This effect can only be triggered once every s."
      },
      "battle": {
        "name": "Pinpoint Positioning",
        "description": "Deals  to an enemy, and dispels all of their buffs and removes all of their shield, with a  chance of inflicting  on them for s."
      },
      "ultimate": {
        "name": "Power Overload",
        "description": "Deals  to all enemies, and converts up to  of their buffs to random negative effects which inherit the remaining duration of the original buffs. After the conversion, if any enemy has less than  negative effects, there is a  chance of additionally inflicting  random negative effects on them for s. Randomly selected from the following: , , , , ."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by  when under Control."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below , heals the hero by  per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240005,
        "show_name": "Inspiration 5",
        "spell_tips": "When inflicted with Control, reduces its duration by ."
      }
    ],
    "tj_team": [
      20450,
      20230,
      20820,
      21760
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310356,
      310355,
      310354,
      310353,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 20570,
    "name": "Aladiah",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Range",
    "race": "Iskalland Dwarf",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Winter Thaw",
        "description": "When an ally with a shield takes damage, there is a  chance of inflicting  on the attacker for s. Grants a  shield to all allies for s as the battle starts."
      },
      "battle": {
        "name": "Melting Chant",
        "description": "Deals  to an enemy and removes all of their shield. Targeting a non-elite enemy will steal their shield instead."
      },
      "ultimate": {
        "name": "Snowstorm Embrace",
        "description": "Deals  to all enemies, with a  chance of inflicting them with  for s. Grants a  shield and  to all allies for s in the meantime."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by  when under Control."
      },
      {
        "id": 7210017,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero grants  more shield."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by ."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310978,
      310977,
      310976,
      310975,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000127,
      8000086,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 21400,
    "name": "Chorak",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s3",
    "type": "Range",
    "race": "Goblin",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Enter the Tyrant",
        "description": "Each time the hero casts a skill, grants  to 1 random Wild ally for s. ( stacks up to  time.) Each time granting , the hero gains 1 stack of . ( stacks up to  times.)"
      },
      "battle": {
        "name": "Ring of Deathfire",
        "description": "Unleashes two fire rings on random enemies, dealing . When a target hit by a fire ring is damaged again by a Wild skill, dispels  fire ring(s) and deals  again based on the next Wild dice roll. The damage triggered by Wild dice roll increases by  with each +1 dice roll result."
      },
      "ultimate": {
        "name": "All Burn Down",
        "description": "If the roll is ≤3, deals  to the current target  times and grants  stack(s) of  to a number of random allies equal to the roll. If the roll is >3 and ≤6, deals  to the current target  times and grants  stack(s) of  to a number of random allies equal to the roll. If the roll is ≥7, deals  to the current target  times."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes  less crit damage."
      },
      {
        "id": 2140095,
        "show_name": "Inspiration 5",
        "spell_tips": " granted by the hero can stack up to 2 times."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2140092,
        "show_name": "Inspiration 2",
        "spell_tips": "The ultimate skill can deal  extra instance(s) of damage."
      }
    ],
    "tj_team": [
      23060,
      20410,
      20810,
      23800
    ],
    "tj_eq": [
      310324,
      310323,
      310322,
      310321,
      310376,
      310375,
      310374,
      310373,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000206,
      8000134,
      8000066
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23680,
    "name": "Guinavivre",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s3",
    "type": "Melee",
    "race": "Construct",
    "career": "?",
    "captain": "Increases all allies' Attack by  in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Intersecting Blades",
        "description": "Basic attacks pierce enemies in a straight line for an extra tile. After every  basic attack, the next one will become a 3-hit combo, each hit dealing ."
      },
      "battle": {
        "name": "Whirling Shadow",
        "description": "Displaces the enemy with the lowest HP, dealing  and marking the target for s. If the target is hit by a basic attack while the mark is active, there is a  chance of dealing ."
      },
      "ultimate": {
        "name": "Deadly Ballet",
        "description": "Grants  to all Dauntless allies for 10s. Changes the attack form, turning the passive 3-hit combo into a 5-hit combo, with each hit dealing . After triggering the 5-hit combo  times, reverts to the 3-hit combo."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by  after killing an enemy."
      },
      {
        "id": 2368092,
        "show_name": "Inspiration 2",
        "spell_tips": "After casting an ultimate skill, the hero can trigger the 5-hit combo  times before reverting to the 3-hit combo."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2368095,
        "show_name": "Inspiration 2",
        "spell_tips": "Enhanced Whirling Shadow: Increases the chance for enemies marked by the battle skill to take damage to ."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310962,
      310961,
      310960,
      310959,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000118,
      8000082,
      8000065
    ],
    "tf": [
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22030,
    "name": "Whisk",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Corrosion",
    "season": "s3",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Boneface",
        "description": "When under , damage dealt is increased by , and Corrosion Intensity is increased by ."
      },
      "battle": {
        "name": "Execution",
        "description": "Gains  for s, and strikes the farthest enemy from the hero 3 times, each dealing ."
      },
      "ultimate": {
        "name": "Massacre",
        "description": "Gains  for s and  for s. Then, attacks enemies within range 7 times, dealing  each hit."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes  less crit damage."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains  Damage Bonus when their HP is higher than ."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240001,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the ultimate skill's initial energy by ."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000157,
      8000078,
      8000060
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20350,
    "name": "Gaiolere",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s4",
    "type": "Range",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Darkness Bestowal",
        "description": "When an ally summons an undead creature, makes this summoned unit deal [+40%Attack]Derivative 7 times to nearby enemies within 5.0s."
      },
      "battle": {
        "name": "Undead Thrall",
        "description": "Summons a skeleton which lasts for 20.0s."
      },
      "ultimate": {
        "name": "Double Taboo",
        "description": "Duplicates an ally undead creature, which then gains 50.0 Ultimate Energy."
      }
    },
    "inspiration": [
      {
        "id": 7200000,
        "show_name": "Inspiration 1",
        "spell_tips": "When an ally dies, heals the hero by [+15%Max HP]."
      },
      {
        "id": 7210000,
        "show_name": "Inspiration 2",
        "spell_tips": "When granting a buff, there is a 70% chance of extending its duration by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240011,
        "show_name": "Inspiration 5",
        "spell_tips": "Buffs granted with the ultimate skill cannot be dispelled."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 21960,
    "name": "Phaessa",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 40.0 in all battles.",
    "avg": 3.75,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Cataclysm",
        "description": "At the start of battle, there is a 100.0% chance of inflicting Recharging Speed Penalty and Accuracy Penalty II on all enemies for 5.0s. Whenever an enemy loses a negative effect, reduces their Ultimate Energy by 5.0. Afterward, increases the success rate of all allies to apply any effect by 20%, while reduces the success rate of all enemies to apply any effect by 20%. The base chance change effect persists after the hero's death."
      },
      "battle": {
        "name": "Golden Prayer",
        "description": "Heals 3 allies with the lowest HP for [+10%Target's Max HP][+1000%Enlightenment], dispelling negative effects and granting Damage Delay for 5.0s. For each negative effect successfully dispelled, the hero's battle skill and ultimate skill recharge for an addition 1s."
      },
      "ultimate": {
        "name": "Sunfire's Glare",
        "description": "Deals [+720%Attack]radiant damage to all enemies, with a 50.0% chance of inflicting Accuracy Penalty II and Recharging Speed Penalty for 10.0s. Then grants Debuff Immunity to all allies for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200000,
        "show_name": "Inspiration 1",
        "spell_tips": "When an ally dies, heals the hero by [+15%Max HP]."
      },
      {
        "id": 2196092,
        "show_name": "Inspiration 2",
        "spell_tips": "The ultimate skill ignores 20% of the target's Resistance."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 2196095,
        "show_name": "Inspiration 5",
        "spell_tips": "The battle skill can apply to 4 target(s)."
      }
    ],
    "tj_team": [
      20930,
      22800,
      22130,
      21500
    ],
    "tj_eq": [
      310978,
      310977,
      310976,
      310975,
      310352,
      310351,
      310350,
      310349,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 23780,
    "name": "Alaura",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s4",
    "type": "Range",
    "race": "Fey",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Leaping Notes",
        "description": "Gains 1 stack of Spark each time the hero deals damage. At 200 stacks of Spark, immediately unleashes Variations for 10.0s. While Variations is active, the chain count of ally Lightning Chains is increased by 1. Additionally, damage from Lightning Chains/Lightning Bolts is increased by 10% (each Variations unleashed afterwards further increases the damage by 8%, up to 5 stacks)."
      },
      "battle": {
        "name": "Dual Melody",
        "description": "Unleashes 1 Lightning Chain that attacks enemies."
      },
      "ultimate": {
        "name": "Summer Night's Ode",
        "description": "Unleashes a sonic wave that deals 3 instances of [+100%Attack]Derivative to all enemies and inflicts Sweet Timbre for 10.0s. Each time an enemy affected by Sweet Timbre is hit by a Lightning Chain/Lightning Bolt, the hero deals an additional [+50%Attack]Derivative and inflicts 1 stack of Oscillation for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 2378092,
        "show_name": "Inspiration 2",
        "spell_tips": "Variations increases the chain count of Lightning Chains by 1."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2378095,
        "show_name": "Inspiration 5",
        "spell_tips": "Increases the max stack count of Oscillation to 8 stacks."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310324,
      310323,
      310322,
      310321,
      310978,
      310977,
      310976,
      310975,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000165,
      8000134,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0
      ]
    ]
  },
  {
    "id": 22470,
    "name": "Astaion",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Sun Pursuer",
        "description": "At the start of battle, the hero has a 100.0% chance of inflicting Silence on the nearest enemy for 10.0s, and stealing 30% of their HP and 30% of their Defense. 50% of the stolen attributes will be transferred to the ally with the highest Attack. HP stolen will not exceed 100% of the hero's Max HP. Defense stolen will not exceed 30% of the hero's Defense."
      },
      "battle": {
        "name": "Sun Shader",
        "description": "Deals [+300%Attack]Necrotic damage to enemies within range with a 50.0% chance of inflicting Stunned for 3.0s. Also grants Crit-hit Resistance for 5.0s to the ally with the highest Attack. For each enemy hit, the hero gains 5.0 Ultimate Energy."
      },
      "ultimate": {
        "name": "Sun Eclipser",
        "description": "Summons a domain that lasts for 10s at the target's location, dealing [+60%Attack]Necrotic damage to enemies within range every 1s. Heals all allies by [+2%Max HP] simultaneously every second. When enemies within range gain a buff, there is a 40% chance to replace the buff with a random debuff."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210016,
        "show_name": "Inspiration 2",
        "spell_tips": "Recharges the hero's Ultimate Energy by 15.0 when taking damage over 20% of the hero's max HP. Takes effect once every 20.0s."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 2247095,
        "show_name": "Inspiration 5",
        "spell_tips": "The range of the ultimate skill's domain becomes a 5x5 rectangle."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310970,
      310969,
      310968,
      310967,
      310352,
      310351,
      310350,
      310349,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22680,
    "name": "Calavera",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Mystery of Love",
        "description": "When casting a skill, a temporary illusion is briefly generated at the hero's location. This illusion will follow the hero as they cast and produce additional effects."
      },
      "battle": {
        "name": "Pas de Deux",
        "description": "Dispels 1 debuff from each nearby ally and grants Recovery Over Time to them for 5.0s. Illusion spellcasting has a 75% chance to dispel 1 buff from each nearby enemy, with a 100.0% to inflict Recovery Over Time on them for 5.0s."
      },
      "ultimate": {
        "name": "Love Versus Hatred",
        "description": "Heals all allies by [+400%Defense] and grants them Defense Up II for 10.0s. Illusion spellcasting deals [+400%Attack]poison damage to all enemies, with a 75.0% chance to inflict Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210007,
        "show_name": "Inspiration 2",
        "spell_tips": "When healing an ally with less than 50% HP, grants 1 stack of Recovery Over Time for 8.0s. This skill only takes effect once during a period."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240004,
        "show_name": "Inspiration 5",
        "spell_tips": "Has a 35% chance to get immune to the Control to be inflicted."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310974,
      310973,
      310972,
      310971,
      310970,
      310969,
      310968,
      310967,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000178,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 23390,
    "name": "Fredegonda",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s4",
    "type": "Range",
    "race": "Birdfolk",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Flash Storm",
        "description": "Marks the first Ice Blast ally in front. When they consume Ice Crystal, the hero replenishes the consumed amount for them. When the hero consumes Ice Crystal, a pursuit attack is launched to deal [+400%Attack]cold damage. When the hero gains Ice Crystal, gains 1 stack of Ice Feather for 10.0s at the same time."
      },
      "battle": {
        "name": "Rampant Icicles",
        "description": "Launches 3 frost projectiles at a random enemy, dealing [+400%Attack]cold damage. For each Ice Crystal on the hero at the time of casting, an additional frost projectile is launched. Triggering additional frost projectile costs a fixed number of 2 Ice Crystals."
      },
      "ultimate": {
        "name": "Howling Snowstorm",
        "description": "Deals [+720%Attack]cold damage to all enemies based on the Ice Crystal count. Each stack of Ice Crystal grants a 20% damage bonus. Also grants all Ice Blast ally heroes Howling Blizzard for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200000,
        "show_name": "Inspiration 1",
        "spell_tips": "When an ally dies, heals the hero by [+15%Max HP]."
      },
      {
        "id": 2339092,
        "show_name": "Inspiration 2",
        "spell_tips": "The Crit Rate and Crit Damage bonus from Howling Blizzard is increased to 50%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2339095,
        "show_name": "Inspiration 5",
        "spell_tips": "（已发包）Howling Blizzard额外附加35%战技释放速度增加。"
      }
    ],
    "tj_team": [],
    "tj_eq": [
      311058,
      311057,
      311056,
      311055,
      310982,
      310981,
      310980,
      310979,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000143,
      8000076,
      8000066
    ],
    "tf": [
      [
        0,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 21370,
    "name": "Halramar",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "Increases all allies' Resistance by 40.0 in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Lingering Overcast",
        "description": "As the battle starts, summons Dark Cloud. Halramar cannot gain extra Attack Speed, but Dark Cloud will launch additional attacks following Halramar's basic attacks. Dark Cloud has a 10% chance to inflict （已忽略）#精灵术士小龙自闭buff on enemies for s. The chance of inflicting （已忽略）#精灵术士小龙自闭buff by Dark Cloud depends on Halramar's Resistance. Every 10 Resistance increases the chance by 1%. When Halramar is on the battlefield, enemies' Ultimate Energy obtained through skills and Artifacts will be reduced by 80%."
      },
      "battle": {
        "name": "Gazing Overcast",
        "description": "Commands Dark Cloud to deal [+300%Attack]poison damage to the enemy with the highest Attack, with a 75.0% chance to inflict Attack Penalty II on them for 5.0s and a 75.0% chance to inflict Oriented Taunt on them for 5.0s."
      },
      "ultimate": {
        "name": "Darkmane's Regards",
        "description": "Deals [+700%Attack]poison damage to all enemies, with a 75.0% chance to inflict Recharging Speed Penalty for 5.0s on them, and a 75.0% chance to inflict Oriented Charm for 5.0s. At the same time, reduces 25.0 of the targets' Ultimate Energy."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Resistance +50"
      },
      {
        "id": 2137095,
        "show_name": "Inspiration 5",
        "spell_tips": "Summons 2 Dark Clouds. When performing a basic attack, the second Dark Cloud attacks another random target."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310970,
      310969,
      310968,
      310967,
      310142,
      310141,
      310140,
      310139
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        0
      ]
    ]
  },
  {
    "id": 24290,
    "name": "Irmoush",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Undead",
    "career": "?",
    "captain": "Increases all allies' HP by 30% in Grand Gladiator Arena.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Bow of Sundering",
        "description": "When transforming into Bow Form, gains Scatter and Spiritual Suppression for 10.0s."
      },
      "battle": {
        "name": "Indomitable",
        "description": "Grants all allies Defense Up II and Debuff Immunity for 5.0s, and dispels all their negative effects."
      },
      "ultimate": {
        "name": "Thundersurge Cleave",
        "description": "Switches to Greatsword Form, leaps to a designated target, and slashes all enemies to deal [+750%Attack]lightning damage 2 times. There is a 100.0% chance of inflicting Silence for 5.0s, and a 100.0% chance of inflicting Attack Penalty II for 10.0s. Leaves Dissipated Energy at the jump's start point for 10s, healing allies for  [+100%Defense]HP every 2s."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 2429092,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the duration of buffs granted with the battle skill by s."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 2429095,
        "show_name": "Inspiration 5",
        "spell_tips": "In melee form, reduces all damage taken by 25%."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310974,
      310973,
      310972,
      310971,
      310982,
      310981,
      310980,
      310979,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22460,
    "name": "Majtan",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "Increases all allies' Attack by 30% in Grand Gladiator Arena battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Fire in Stone",
        "description": "Attacks all enemies 2 times at the start of battle, each time dealing [+100%Attack]fire damage and inflicting 100% Ignite. Basic attacks inflict an additional 20% Ignite. This Ignite effect is converted into Burn, ignoring the target's Resistance. Each conversion grants the hero 3 stack(s) of Blazing Light. When any target's Burn expires or is dispelled, the hero gains 1 stack(s) of Blazing Light. Each stack of Blazing Light allows the hero's skills to ignore 2% of the target's Defense and grants 1% Damage Reduction to the hero."
      },
      "battle": {
        "name": "Visage in Ember",
        "description": "Recovers [+20%Max HP] and gains Blazing Light matching the highest number of Burn stacks on an enemy. Then deals [+450%Attack]fire damage to the enemy with the most Burn stacks."
      },
      "ultimate": {
        "name": "Blossom in Sand",
        "description": "Gains 20% Attack Up for 10.0s, then deals [+720%Attack]fire damage to surrounding enemies. If an enemy hero is defeated, restores 75.0 Ultimate Energy. (This effect can only trigger once per skill cast.)"
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      23060,
      20230,
      20820,
      22340
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000144,
      8000082,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 22490,
    "name": "Miro",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s4",
    "type": "Melee",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Guidance of Treasure Map",
        "description": "If the hero possesses Ice Crystal after casting the battle skill, consumes 1 stack of Ice Crystal and casts the battle skill again. When an ally casts a battle skill by consuming Ice Crystal, inflicts Map Pin on the enemy."
      },
      "battle": {
        "name": "Treasure! Mark It!",
        "description": "Deals [+450%Attack]cold damage to the enemy and inflicts Map Pin on them."
      },
      "ultimate": {
        "name": "Treasure! Mine It!",
        "description": "Deals [+900%Attack]cold damage to the enemy and grants Map Marker to the ally with the highest Attack for 12.0s. Gains 1 stack(s) of Ice Crystal."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240004,
        "show_name": "Inspiration 5",
        "spell_tips": "Has a 35% chance to get immune to the Control to be inflicted."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      311058,
      311057,
      311056,
      311055,
      310352,
      310351,
      310350,
      310349,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000178,
      8000079,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 22370,
    "name": "Orfenna",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s4",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Galvanic Contact",
        "description": "When dealing damage to enemies with basic attacks, there is a 75.0% chance of inflicting Electrocuted on the target."
      },
      "battle": {
        "name": "Power Experience",
        "description": "Attacks the enemy 3 times, each dealing [+175%Attack]lightning damage. The third attack has a 75.0% chance of inflicting Electrocuted for 10.0s."
      },
      "ultimate": {
        "name": "Hyper Overdrive",
        "description": "Enters the Overload state for 15s and gains Attack Speed Up II for 15.0s. While in the Overload state, a basic attack shoots 2 extra bullets to deal [+300%Attack]lightning damage, with each bullet prioritizing a different target."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310962,
      310961,
      310960,
      310959,
      311058,
      311057,
      311056,
      311055,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000144,
      8000082,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 20820,
    "name": "Paixton",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s4",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Enlightenment by 60.0.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "War Fanatic",
        "description": "Each time any target is inflicted with Burn, the hero gains 1 stack of Morale. When the hero's Morale reaches 20 stacks, grants Scorching to all Burn allies. Scorching will be advanced to Molten Armor and Ashen Blight when the hero's Morale reaches 50 and 100 stacks, respectively. When Paixton is deployed, the stack limit of the team's Burn inflicted is increased to 20."
      },
      "battle": {
        "name": "Burning to Ashes",
        "description": "Deals [+300%Attack][+3000%Enlightenment]fire damage to surrounding enemies. Hitting an enemy with Burn reduces this skill's recharge time by 50%."
      },
      "ultimate": {
        "name": "Demon Flame",
        "description": "Attacks all enemies 3 times, each time dealing [+100%Attack]fire damage and inflicting 20% Ignite. Enemies with Burn take an additional [+180%Attack]Derivative (damage increases by 10% for each stack of Burn they have). Each time the field effect applied by the hero's Morale is advanced, it will enable this skill to perform 1 additional global attack."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 2082092,
        "show_name": "Inspiration 2",
        "spell_tips": "Seared grants 25% Attack Up. Molten Armor grants 25% Defense Penetration."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2082095,
        "show_name": "Inspiration 5",
        "spell_tips": "The ultimate skill delivers 1 additional hit."
      }
    ],
    "tj_team": [
      21760,
      20230,
      21450,
      23060
    ],
    "tj_eq": [
      310324,
      310323,
      310322,
      310321,
      310978,
      310977,
      310976,
      310975,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000162,
      8000083,
      8000062
    ],
    "tf": [
      [
        0,
        1,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 22710,
    "name": "Yfeir",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 30% in Grand Gladiator Arena battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "See Me Not",
        "description": "At the start of battle, enters an undispellable Invisibility for 3.0s. For every 15 times of damage dealt or taken by the hero and their clones, they will enter an undispellable Invisibility for 3.0s. The hero and their clones have Homeland's Blessing. At the start of battle, one  can be deployed. Up to 5 clones can exist simultaneously."
      },
      "battle": {
        "name": "Omnipresent Me",
        "description": "The hero and their clones simultaneously unleash battle blades at the enemy with the highest Attack, dealing [+400%Attack]radiant damage and dispelling 1 buff. Then, summons 1 clone around the target. Upon deployment, the clone has a 100.0% chance of inflicting Taunt on all enemies for 5.0s."
      },
      "ultimate": {
        "name": "Witness True Power!",
        "description": "Leaps toward an enemy, dealing [+800%Attack]radiant damage to the target and surrounding enemies, with a 75.0% chance of inflicting Attack Penalty II for 10.0s. Simultaneously, the hero and their clones gain Forest Rune for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 2271091,
        "show_name": "Inspiration 1",
        "spell_tips": "For each clone summoned by the hero on the battlefield, the hero's damage taken is reduced by 4%."
      },
      {
        "id": 2271092,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero or their clones become Invisible, the ally with the lowest HP on the field also becomes Invisible for 3s. (The effect does not trigger if only the hero and clones are on the field.)"
      },
      {
        "id": 7260036,
        "show_name": "Inspiration 3",
        "spell_tips": "Duration of buffs and debuffs inflicted by Ultimate Skill is increased by 30%."
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 2271095,
        "show_name": "Inspiration 5",
        "spell_tips": "Clones inherit 60% of the hero's attributes."
      }
    ],
    "tj_team": [
      20970,
      20110,
      20300,
      22410
    ],
    "tj_eq": [
      310970,
      310969,
      310968,
      310967,
      311134,
      311133,
      311132,
      311131,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000208,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22780,
    "name": "Fathomdown",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s5",
    "type": "Melee",
    "race": "Merfolk",
    "career": "?",
    "captain": "Increases all allies' Attack by 30% in dungeon battles.",
    "avg": 4.75,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Unshakable",
        "description": "When taking damage, there is a 30% chance of reducing the damage taken by 50% and healing the hero for [+5%Max HP]. This effect can trigger once every 3.0s. When an ally takes fatal damage for the first time, they become immune to death for this instance, and Fathomdown dispels all the negative effects on them and heals them for [+30%Max HP] of his Max HP. This effect can trigger once every 20s."
      },
      "battle": {
        "name": "Raging Thunder",
        "description": "Gains Debuff Immunity for 5.0s, dealing [+360%Attack]lightning damage to enemies within range, with a 100.0% chance of inflicting Knocked Up and a 75.0% chance of inflicting 3.0-sec Stunned. When successfully inflicting Stunned, also inflicts Resistance Penalty on the target for 10.0s and dispels all their buffs."
      },
      "ultimate": {
        "name": "Thunderbolt",
        "description": "Casts the spell for 8s. Summons Lightning Bolts to strike random enemies every 1s, dealing [+150%Attack]lightning damage to the target and all surrounding enemies, with a 75.0% chance of inflicting Attack Penalty II on them for 5.0s. Reduces their Ultimate Energy by 5.0 and inflicts Recharging Speed Penalty for 5.0s. The hit enemies with ≥50% Ultimate Energy lose 10% more Ultimate Energy."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210006,
        "show_name": "Inspiration 2",
        "spell_tips": "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 2278091,
        "show_name": "Inspiration 5",
        "spell_tips": "When the ultimate skill hits, enemies with less than 50% Ultimate Energy will also have their Ultimate Energy reduced. Ultimate Energy reduction is increased to 15%."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 24580,
    "name": "Caroux",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s5",
    "type": "Range",
    "race": "Gnome",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "The Clamor of Gears",
        "description": "Each basic attack grants a stack of Agitated Notes, up to 15 stacks. When Agitated Notes reaches 15 stacks, casts an additional ultimate skill without consuming Ultimate Energy, and all allies around the hero gain Damage Reduction."
      },
      "battle": {
        "name": "Frequency Tuning",
        "description": "Deals [+300%Attack]radiant damage to enemies within a 3x6 rectangular area in front of the hero, and inflicts Knock Back on them. For each enemy hit, grants the hero a stack of Agitated Notes."
      },
      "ultimate": {
        "name": "Let's Rock",
        "description": "Throws a Resonance Bomb onto the frontmost ally, then plays violent rock music, granting a [+20%Max HP] shield for 10.0s and Control Immunity to all allies within a 5x5 area around the hero and the target respectively. At the same time, deals [+600%Attack]radiant damage and inflicts Stunned on all enemies within the area."
      }
    },
    "inspiration": [
      {
        "id": 7200002,
        "show_name": "Inspiration 1",
        "spell_tips": "Reduces the hero's damage taken by 20% when under Control."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7240004,
        "show_name": "Inspiration 5",
        "spell_tips": "Has a 35% chance to get immune to the Control to be inflicted."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22450,
    "name": "Ivira",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s5",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by 30% in Grand Gladiator Arena battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "First Impression",
        "description": "At the start of battle, inflicts Datura Mark on the enemy with the highest Attack. When the target under Datura Mark dies, reselects a target. When the target under Datura Mark gains a buff, reduces the recharge time of the hero's battle skill by 20% and grants 10.0 Ultimate Energy to the hero. This effect can trigger once every 5.0s. If any enemy with Frozen dies, blocks their resurrection."
      },
      "battle": {
        "name": "Another Drink",
        "description": "Teleports to the enemy with the highest Attack, dispelling their shield, stealing 1 buff(s), and dealing [+300%Attack][+1200%Enlightenment]cold damage. Also inflicts Frozen on the target for 5.0s. This effect ignores the target's 35% Resistance."
      },
      "ultimate": {
        "name": "Stay Awhile",
        "description": "Deals [+500%Attack][+2400%Enlightenment]cold damage to enemies within range, with a 75.0% chance of inflicting Frozen for 5.0s. This effect ignores the target's 35% Resistance."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210005,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 2245095,
        "show_name": "Inspiration 5",
        "spell_tips": "While the hero is on the field, blocks resurrection for all enemies. (Can trigger up to 1 time)"
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 20620,
    "name": "Maashtur",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s5",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "Increases all allies' Max HP by 30% in Grand Gladiator Arena.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Majesty",
        "description": "At the start of battle, grants Great River's Favor to the ally with the highest Attack. If the target dies, redirects to the next ally with the highest Attack. When any target on the battlefield loses a buff or shield, heals the hero and the ally with the lowest HP for [+10%Max HP]. (This effect can trigger once every 3.0s.)"
      },
      "battle": {
        "name": "River God's Verdict",
        "description": "Throws a flying shield at the enemy with the highest Ultimate Energy, attacking and ricocheting to up to 3 target(s), dealing [+240%Attack][+8%Max HP]lightning damage and reducing the target's 20.0 Ultimate Energy. If the target's Ultimate Energy remains higher than 50% after the reduction, has a(n) 100.0% chance to inflict Stunned for 5.0s. Afterwards, grants all allied heroes a [+5%Max HP] shield for 10.0s. For each successful Ultimate Energy reduction, the granted shield value increases by 50%."
      },
      "ultimate": {
        "name": "Edge's Regards",
        "description": "Attacks an enemy 3 times, each dealing [+200%Attack][+4%Max HP]lightning damage with a 75.0% chance of inflicting Attack Penalty II, Accuracy Penalty II, and Recharging Speed Penalty for 10.0s in sequence. If the hero's Max HP is higher than the target's, the states inflicted by this skill cannot be resisted. Then, grants a number of random buffs to all ally heroes equal to the number of debuffs on the target (up to 5 buffs at a time) for 10.0s. Random buffs include: 20% Attack Up, Defense Up II, Resistance Up II, Accuracy Up II, and Recovery Over Time."
      }
    },
    "inspiration": [
      {
        "id": 2062093,
        "spell_tips": "When any target on the battlefield loses a buff or shield, the passive skill heals all allies."
      },
      {
        "id": 7260032,
        "show_name": "Inspiration 1",
        "spell_tips": "Battle skill will inflict Stunned on the target regardless the 50% Ultimate Energy prerequisite."
      },
      {
        "id": 2062091,
        "show_name": "Inspiration 2",
        "spell_tips": "The damage dealt by the hero and allies marked with Great River's Favor is increased by 15%, and damage taken is reduced by 15%."
      },
      {
        "id": 7260033,
        "show_name": "Inspiration 3",
        "spell_tips": "Increases the duration of debuffs inflicted by the ultimate skill by 30%."
      },
      {
        "id": 2062092,
        "show_name": "Inspiration 5",
        "spell_tips": "The ultimate skill inflicts debuffs on all enemies."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 24680,
    "name": "Pardis",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Corrosion",
    "season": "s5",
    "type": "Melee",
    "race": "Satyresque",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Let's Drink All Night",
        "description": "While the hero is on the field, for every [30% target's Max HP] Corrosion inflicted on an enemy, there is a 100.0% chance of inflicting a random debuff on the target for 10.0s. Randomly selects an enemy every 10s, with a 100.0% chance of inflicting a random debuff on the target for 10.0s. Random debuffs include: Recharging Speed Penalty, Healing Prohibition, and Attack Penalty II."
      },
      "battle": {
        "name": "Drink to Your Heart's Content",
        "description": "Deals [+360%Attack]poison damage to surrounding enemies."
      },
      "ultimate": {
        "name": "Light Up the Night",
        "description": "Summons 5 fireflies, which are retrieved after a 8-sec flight. During this time, the fireflies automatically attack enemies on the field, dealing [+80%Attack]poison damage with a 100.0% chance of inflicting 10% Damage Penalty for 10.0s. After retrieving all fireflies, heals all allies for [+100%Attack]."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240008,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores the target's Resistance when inflicting debuffs or control effects on them with ultimate skill."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 24420,
    "name": "Rashaad",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s5",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Steadfast Heart",
        "description": "When an enemy gains a shield, the hero gains 10.0 Ultimate Energy. This effect can trigger once every 5.0s. When an ally gains a shield, the hero grants an additional [+50%Attack] healing to them. This effect can trigger once every 5.0s."
      },
      "battle": {
        "name": "Sound of Judgment",
        "description": "Performs 3 consecutive strikes on enemies in front, dealing [+130%Attack]fire damage and dispelling all their buffs, with a 75.0% chance of inflicting Accuracy Penalty II for 10.0s."
      },
      "ultimate": {
        "name": "Gavel of Justice",
        "description": "Slams a hammer into the ground, dispelling 2 debuff(s) from allies, dealing [+750%Attack]fire damage damage to enemies around the hero, and stealing shields from them. The stolen shields are distributed evenly among allies. If these enemies have no shields, there is a 75.0% chance of inflicting Stunned for 5.0s. Then, heals all allies for [+200%Attack]. For each target whose shield is dispelled, increases this healing amount by 20%."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210017,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero grants 15% more shield."
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 2442091,
        "spell_tips": "When casting a battle skill, grants a [+50%Attack] shield to the hero and a random ally."
      }
    ],
    "tj_team": [
      20820,
      23360,
      20230,
      21760
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      311194,
      311193,
      311192,
      311191,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 22880,
    "name": "Saverio",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Shadow",
    "season": "s5",
    "type": "Melee",
    "race": "Werewolf",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Parting the Clouds",
        "description": "At the start of battle, ignores Resistance to inflict 50 undispellable stack(s) of Bloodmoon Power on all enemies. This state lasts indefinitely."
      },
      "battle": {
        "name": "Moon's Shadow",
        "description": "The hero gains Attack Speed Up II for 5.0s and deals 3 instances of [+160%Attack]Derivative to the current target. Each hit grants 5 Shadow Energy. The first time this skill is cast in battle, grants an additional 200% Shadow Energy."
      },
      "ultimate": {
        "name": "Raging Bloodmoon",
        "description": "Selects and teleports to the enemy hero with the lowest Current HP, dealing [+450%Attack]Derivative to the target and [+450%Attack]Derivative to enemies within range around the target 5 times. Each attack ignores Resistance to inflict 5 stacks of Bloodmoon Power on the selected target and restores 5 Shadow Energy to all Shadow allies. Within a single ultimate skill cast, targets selected 5 times will also be inflicted with Bloodmoon Curse for 10.0s. During the ultimate skill, each time this skill kills a selected target, the number of remaining attacks is increased by 3, up to 11 additional attacks per ultimate skill cast."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 2288093,
        "spell_tips": "When the battle starts and the battle skill is cast, the battle skill cooldown is reduced by 20%.\nThe battle skill grants  to the hero fors."
      },
      {
        "id": 2288092,
        "show_name": "Inspiration 5",
        "spell_tips": "Each time the ultimate skill is landed, inflicts 3 stacks of Bloodmoon Power on all enemies."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 2288091,
        "show_name": "Inspiration 2",
        "spell_tips": "The additional damage granted by each stack of Bloodmoon Power is increased to 250% Attack."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 23060,
    "name": "Scaarr",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s5",
    "type": "Melee",
    "race": "Troll",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Vitality Extraction",
        "description": "While Scaarr is on the battlefield, all allied heroes recover HP after dealing damage, equal to 20% of the damage dealt (not exceeding 1000% of Scaarr's Defense). When Scaarr has cumulatively taken [20% of the target's Max HP] damage, one random buff is granted to Scaarr for 15.0s. Random Buff Scope: Defense Up II, Resistance Up II, Accuracy Up II."
      },
      "battle": {
        "name": "Fight Together",
        "description": "Shares the hero's buffs with three allies, then grants Battle Will to the hero and the selected allies for 6.0s."
      },
      "ultimate": {
        "name": "Flame Hammer",
        "description": "Grants all ally heroes 15% Damage Up and 15% Damage Reduction for 10.0s. Then, deals 2 instances of [+450%Defense]fire damage to all enemies."
      }
    },
    "inspiration": [
      {
        "id": 2306093,
        "spell_tips": "When Scaarr's passive skill grants a buff to himself, there is also a(n)  chance to inflict Attack Penalty II on a random enemy for 20s."
      },
      {
        "id": 2306091,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero's battle skill grants 20% Attack Up to all allies and shares the buff status, additionally granting 20% Attack Up to allies."
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 2306092,
        "show_name": "Inspiration 5",
        "spell_tips": "Buffs applied by the ultimate skill become 25% Damage Up and 25% Damage Reduction, and cannot be dispelled."
      }
    ],
    "tj_team": [
      20820,
      21760,
      20230,
      23060
    ],
    "tj_eq": [
      310328,
      310327,
      310326,
      310325,
      310352,
      310351,
      310350,
      310349,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000101,
      8000087,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22440,
    "name": "Seyir",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Shadow",
    "season": "s5",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Mastermind",
        "description": "After casting an ultimate skill, Seyir enters the Invisibility state for 10.0s. During this state, reduces Seyir's AOE damage taken by 50%."
      },
      "battle": {
        "name": "Weakness Break",
        "description": "Deals 2 instances of [+200%Attack]Derivative to the current target, and gains 5 Shadow Energy each time damage is dealt. For every 50 Enlightenment the hero has more than the target, gains an additional 5 Shadow Energy at the end of the skill, up to 30 additional Shadow Energy per skill cast."
      },
      "ultimate": {
        "name": "Strategist",
        "description": "Unleashes a sustained Dominance Domain that lasts 5s. For every 80 Enlightenment the hero has, the domain's duration is extended by 1s, up to an increase of 5s. While the domain is active, it heals all allies and deals [+100%Attack]Derivative to all enemies every 1s. Shadow allies also gain Enlightenment and Attack bonuses equal to 20% of the caster's Enlightenment and Attack."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 7210011,
        "show_name": "Inspiration 2",
        "spell_tips": "When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%."
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22130,
    "name": "Shahla",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s5",
    "type": "Range",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Soothing Fragrance",
        "description": "When an Aura ally consumes Aura Energy, the hero and the Aura ally with the highest Attack gain 1 stack(s) of Crit Damage Up, up to 20 stacks."
      },
      "battle": {
        "name": "Boding of Evil",
        "description": "Gains 15 Aura Energy and deals [+300%Attack][+10%Max HP]radiant damage to the target and surrounding enemies. If the hero's Aura Energy is ≥50, consumes 30 Aura Energy and gains an additional 15.0 Ultimate Energy."
      },
      "ultimate": {
        "name": "Echoing Prophecy",
        "description": "Gains 20 Aura Energy and unleashes an energy wave that can bounce between enemies up to 4 times, dealing [+300%Attack][+10%Max HP]radiant damage with each bounce and granting 5.0 Ultimate Energy to 1 Aura ally with the lowest Ultimate Energy."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 7210009,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero gains 15% Damage Bonus when their HP is higher than 85%."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7240019,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 15% of the target's Defense."
      }
    ],
    "tj_team": [
      20930,
      20000,
      22800,
      21500
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000158,
      8000086,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 24560,
    "name": "Szecedith",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Corrosion",
    "season": "s5",
    "type": "Melee",
    "race": "Dragon",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Greetings from the Festering Mire",
        "description": "When an enemy is hit by the hero's battle skill, consumes Corruption to deal damage. After Corruption is consumed, Corruption is reinflicted on the enemy after an interval of 10s. For every [1% target's Max HP] Corrosion inflicted on an enemy, the interval for gaining Corruption is reduced by 1s."
      },
      "battle": {
        "name": "No One Survives",
        "description": "When there is no Corruption on the field, deals [+340%Attack]poison damage to enemies in a cross-shaped area around the target. When there is Corruption on the field, deals [+340%Attack]poison damage to enemies in a cross-shaped area around the target with Corruption, consumes the target's Corruption, and deals an additional [+300%Attack]real damage (up to 3 targets)."
      },
      "ultimate": {
        "name": "Endless Hate",
        "description": "Charges toward the target, dealing [+300%Attack]poison damage three times to the target and surrounding enemies. Afterwards, leaves 2 Poisoned Scales on the battlefield. After a brief delay, the Poisoned Scales track the nearest enemy, dealing [+160%Attack]poison damage with a(n) 100.0% chance to sequentially inflict Mire Toxin for 5.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 2456091,
        "show_name": "Inspiration 2",
        "spell_tips": "When an attack consumes Corruption, damage increases to [+600%Attack]real damage, and the refresh interval of Corruption is reduced to 8s."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2456092,
        "show_name": "Inspiration 5",
        "spell_tips": "The ultimate skill summons 4 Dragon Scales to attack enemies. The Mire Toxin effect can stack up to 3 times."
      }
    ],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 23090,
    "name": "Talethia",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s5",
    "type": "Range",
    "race": "Dragon",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Crystal Light Flow",
        "description": "Each time the hero gains Aura Energy, gains 1 additional stack(s) of Condensation. Each time an ally consumes Aura Energy, the hero gains 1 additional stack(s) of Condensation. For every 10 stacks of Condensation gained, immediately fires 3 Crystal Arrows that randomly attack enemies, each dealing [+100%Attack]radiant damage. Can consume 5 Aura Energy to upgrade a Crystal Arrow to a Dazzling Crystal Arrow, which deals [+200%Attack][+20%Max HP]radiant damage."
      },
      "battle": {
        "name": "Brilliant Arrow",
        "description": "After a brief charge, fires an arrow that deals [+300%Attack][+15%Max HP]radiant damage to the current enemy and inflicts Cutting Edge for 8.0s."
      },
      "ultimate": {
        "name": "Daybreak",
        "description": "Deals 2 instances of [+300%Attack][+15%Max HP]radiant damage to all enemies. The hero enters an enhanced state for 10s, restoring 5 Aura Energy every 1s. In the enhanced state, the hero's Crystal Arrows and Dazzling Crystal Arrows ignore 60% of the enemy's Defense. Dazzling Crystal Arrows also deal AOE damage centered on the target. Each time a Dazzling Crystal Arrow is fired, it restores 5 Aura Energy to 1 other Aura ally with the lowest Aura Energy."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 2309092,
        "show_name": "Inspiration 5",
        "spell_tips": "During the ultimate skill enhancement period, when Condensation is triggered, fires 1 additional Dazzling Crystal Arrow at a random target without cost."
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 2309091,
        "show_name": "Inspiration 2",
        "spell_tips": "For every 8 stacks of Condensation accumulated, fires a Focused Arrow."
      }
    ],
    "tj_team": [
      23610,
      23820,
      22790,
      21500
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000158,
      8000132,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 21640,
    "name": "Stegamoffyn",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s6",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 3.75,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Demon in the Woods",
        "description": "When an ally deals damage to an enemy, it triggers [+100%Attack] healing. For each debuff the target has, this healing is increased by 10%. (This effect can trigger once every 6.0s.)"
      },
      "battle": {
        "name": "Soulseeker Arrow",
        "description": "Randomly curses 2 targets, dealing [+240%Attack]poison damage and randomly inflicting 1 debuff (selected from the following debuffs) for 6.0s: Recharging Speed Penalty, Attack Penalty II, Accuracy Penalty I."
      },
      "ultimate": {
        "name": "Cursed Domain",
        "description": "Summons a magic circle at the target location for 8s, dealing [+150%Attack]poison damage to all enemies. While the circle persists, it deals [+150%Attack]poison damage to all enemies every 2s. While the circle exists, enemy units that die within its area cannot be Resurrected."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 2164092,
        "show_name": "Inspiration 2",
        "spell_tips": "Reduces the passive effect interval by 1.0s."
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 2164095,
        "show_name": "Inspiration 5",
        "spell_tips": "The number of random targets selected by the battle skill increases to 5."
      }
    ],
    "tj_team": [
      21870,
      22050,
      24560,
      21100
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      311062,
      311061,
      311060,
      311059,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000138
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 24490,
    "name": "Aethereal",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s6",
    "type": "Range",
    "race": "Elemental Lord",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Glacial Calamity",
        "description": "Basic Attack range is 2. Deals [+100%Attack]cold damage to the target and enemies within a surrounding 3×3 area, with a 75.0% chance to apply Frost for 5.0s. When Frost is successfully applied, allied Frost heroes gain 5% Ultimate Energy. After an enemy has been affected by Frost  times, Aethereal has a 100.0% chance to apply Frost to the target for 5.0s."
      },
      "battle": {
        "name": "Chillblade Edge",
        "description": "Summons 1 Ice Blade at the location with the most enemies, dealing [+240%Attack]Derivative with a 100.0% chance to apply Frost for 5.0s. Each time the hero performs a basic attack, the Ice Blade also attacks once, dealing [+240%Attack]Derivative with a 100.0% chance to apply Frost for 5.0s. The Ice Blade lasts for 5s. When the Ice Blade expires, it deals [+240%Attack]Derivative and has a 100.0% chance to apply Frost for 5.0s."
      },
      "ultimate": {
        "name": "Icethorn Ambush",
        "description": "Condenses Icethorns to attack all enemies, dealing [+120%Attack]Derivative 10 times. Each hit has a 100.0% chance to apply Frost for 5.0s, and a 100.0% chance to apply Bone-Chilling Frost for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 7200004,
        "show_name": "Inspiration 1",
        "spell_tips": "Damage dealt to enemies with a shield is increased by 20%."
      },
      {
        "id": 2449092,
        "show_name": "Inspiration 5",
        "spell_tips": "Each segment of the ultimate skill deals progressively increased damage equal to [20% ATK][+120%Attack]Derivative, and each hit applies 3 stacks of Bone-Chilling Frost."
      },
      {
        "id": 7250000,
        "spell_tips": "Enlightenment +60"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2449091,
        "show_name": "Inspiration 2",
        "spell_tips": "The chance for the passive skill to apply  is increased to 100%. When Aethereal is deployed, allied Frost damage is increased to [+5% Max HP] Cold Damage, and the cap on Attack-scaling damage is increased."
      }
    ],
    "tj_team": [
      21390,
      20990,
      20121,
      21710
    ],
    "tj_eq": [
      310324,
      310323,
      310322,
      310321,
      311130,
      311129,
      311128,
      311127,
      310126,
      310125,
      310124,
      310123
    ],
    "tj_sq": [
      8000117,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22700,
    "name": "Alarys",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s6",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Gladiatorial Technique",
        "description": "While the hero is on the battlefield, whenever an allied unit other than the hero is inflicted with a negative effect by an enemy, there is a 40% chance to directly transfer that negative effect to the hero. After a successful transfer, the duration of the transferred effect is reduced by 50%. This effect has a cooldown of 6.0s. Each time a negative effect is successfully transferred, gains Defense Up, up to 10 stacks, and simultaneously gains 10.0 Ultimate Energy."
      },
      "battle": {
        "name": "Intimidating Slash",
        "description": "Slashes the target and adjacent enemies, dealing [+250%Attack]lightning damage and inflicting Crit Rate Penalty and Crit Damage Penalty for 6.0s."
      },
      "ultimate": {
        "name": "Will to Survive",
        "description": "Throws a massive axe, dealing [+600%Attack]lightning damage to all enemies in a frontal area. At the same time, grants all allied units a [+20%Max HP] shield and applies Recovery Over Time for 10.0s. For each type of debuff currently on the hero, the hero additionally restores [+5%Max HP] HP."
      }
    },
    "inspiration": [
      {
        "id": 7200003,
        "show_name": "Inspiration 1",
        "spell_tips": "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."
      },
      {
        "id": 7210017,
        "show_name": "Inspiration 2",
        "spell_tips": "The hero grants 15% more shield."
      },
      {
        "id": 7250000,
        "spell_tips": "Accuracy +50"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7240002,
        "show_name": "Inspiration 5",
        "spell_tips": "Ignores 35% of the target's Resistance."
      }
    ],
    "tj_team": [
      22040,
      20740,
      23680,
      20160
    ],
    "tj_eq": [
      311190,
      311189,
      311188,
      311187,
      311194,
      311193,
      311192,
      311191,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000127,
      8000086,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 23820,
    "name": "Anneliesis",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s6",
    "type": "Melee",
    "race": "Elemental Lord",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Radiant Descent",
        "description": "During deployment, Anneliesis can be placed behind an allied hero to bond with that hero. At the start of battle, Anneliesis possesses the bonded hero, granting them 20% Max HP and 20% Damage Bonus, along with 20.0 Ultimate Energy. 5s after battle starts, Anneliesis releases her ultimate skill and enters the battlefield."
      },
      "battle": {
        "name": "Holylight Protection",
        "description": "Restores 30 Aura Energy to all Radiance heroes and applies [+10%Target's Max HP]Shield to all allies. When a shield granted by this skill is lost, deals [+100%Attack]radiant damage and [+5%Max HP]radiant damage to enemies within a 3×3 area around the protected ally. If that ally still has a shield, deals [100% Shield] Radiant Damage to enemies within range."
      },
      "ultimate": {
        "name": "Light of Judgment",
        "description": "Anneliesis takes flight and descends upon the most densely populated enemy position, dealing [+150%Attack][+10%Max HP]radiant damage 2 times to all enemies with a 100.0% chance to apply Knocked Up and Stunned for 5.0s. Has a 100% chance to remove all buff effects from enemies, and a 100% chance to remove all debuff effects from all allied heroes. Thereafter, consumes 20 Aura Energy every 1s. Each energy consumption provides [+5%Target's Max HP] healing to all allies, lasting up to 8s."
      }
    },
    "inspiration": [
      {
        "id": 2382091,
        "spell_tips": "When the battle skill grants a Shield to an ally, deals [+100%Attack]radiant damage to enemies within a 3×3 area around that ally. If the ally has a Shield, additionally deals [100% Shield] Radiant Damage to enemies in the area."
      },
      {
        "id": 2382092,
        "spell_tips": "When allied heroes have a Shield, damage dealt is increased by 10%."
      },
      {
        "id": 2382093,
        "spell_tips": "At the start of battle, all heroes gain 10% Max HP and 10% Damage Bonus."
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 2382095,
        "spell_tips": "When casting the ultimate skill, grants  to all allies, which is removed when the ultimate skill's effect ends. Also deals an additional [+150%Attack][+10%Max HP]radiant damage."
      }
    ],
    "tj_team": [
      23090,
      23610,
      22790,
      21500
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311194,
      311193,
      311192,
      311191,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000162,
      8000086,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1
      ]
    ]
  },
  {
    "id": 23670,
    "name": "Blah Blah",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s6",
    "type": "Range",
    "race": "Construct",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Concerto Module",
        "description": "While Blah Blah is present, all heroes can gain 1 Aura by completing tasks. Auras enhance all allied targets. After a hero gains 1 Aura, that hero completes all tasks. Effects of the same Aura can stack up to 3 times. Damage Task: Deal 150 instances of damage to gain Inspiring Verse: Each stack grants 4% Damage Up. Survival Task: Grant 120 instances of healing or shields to gain Healing Verse: Each stack grants 8% increased shields and healing. Confrontation Task: Apply or resist 30 debuffs to gain Noise Interference: Each stack grants 12% Accuracy and Resistance."
      },
      "battle": {
        "name": "Custom Performance",
        "description": "Heals all allies for [+10%Target's Max HP][+1500%Enlightenment] and has a 100% chance to dispel 1 buff from all enemies."
      },
      "ultimate": {
        "name": "Full-Arena Surround",
        "description": "Deals [+300%Attack]poison damage to all enemies with a 100.0% chance to apply Attack Penalty II for 10.0s, and grants all allied targets a [+25%Max HP]shield. Additional effects are applied based on the number of Auras on the field: When Inspiring Verse is the most abundant, deals additional [+300%Attack]poison damage, with a 100.0% chance to apply 10% Vulnerability for 10.0s. When Healing Verse is the most abundant, deals additional [+300%Attack]poison damage and grants 20% Damage Reduction to allies for 10.0s. When Noise Interference is the most abundant, deals additional [+300%Attack]poison damage, with a 100.0% chance to apply Buff Prohibition for 10.0s and a 100.0% chance to apply Stunned for 5.0s."
      }
    },
    "inspiration": [
      {
        "id": 2367091,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero can gain all 3 types of Auras, and the stack limit of all Auras is increased by 1."
      },
      {
        "id": 2367092,
        "show_name": "Inspiration 2",
        "spell_tips": "When the battle skill heals, there is a  chance to apply  for s."
      },
      {
        "id": 2367094,
        "spell_tips": "All Aura effects are increased by 50%"
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 2367093,
        "show_name": "Inspiration 5",
        "spell_tips": "The ultimate skill can trigger the performance effects of all Auras simultaneously."
      }
    ],
    "tj_team": [
      21870,
      22050,
      24560,
      21100
    ],
    "tj_eq": [
      311194,
      311193,
      311192,
      311191,
      310978,
      310977,
      310976,
      310975,
      310134,
      310133,
      310132,
      310131
    ],
    "tj_sq": [
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22890,
    "name": "Ethyreis",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s6",
    "type": "Range",
    "race": "Werewolf",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Moonlit Prayer",
        "description": "For every 5s this unit is on the field, all allies receive a 2% increase to healing received, up to 10 stacks. When an ally receives healing, 0% of the amount is converted into Attack for this unit, up to 35% base Attack."
      },
      "battle": {
        "name": "Circle of the Pack",
        "description": "Grants [+15%Target's Max HP][+2000%Enlightenment]healing to allies within range and has a 100% chance to dispel 1 debuff from each target."
      },
      "ultimate": {
        "name": "Abyssal Arcanum",
        "description": "Deals [+700%Attack]Necrotic damage to all enemies and grants Damage Delay to all allied heroes for 8.0s. Then enters the Darkfire Surge state for 10.0s. While in this state, whenever any allied hero takes damage or loses a buff, grants [+10%Target's Max HP]healing. When Darkfire Surge has restored a total amount equal to [+100% Max HP][+10000% Enlightenment] of the hero, the hero exits this state early. Upon exiting Darkfire Surge for any reason, grants 30% Damage Reduction to all allied heroes for 10.0s."
      }
    },
    "inspiration": [
      {
        "id": 2289091,
        "show_name": "Inspiration 1",
        "spell_tips": "Battle skill also applies  to allies for s."
      },
      {
        "id": 2289092,
        "show_name": "Inspiration 2",
        "spell_tips": "The  applied by the ultimate skill is replaced with , and the delay ratio is increased to 60%."
      },
      {
        "id": 2289094,
        "show_name": "Inspiration 3",
        "spell_tips": "The battle skill heals all allies."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 2289093,
        "show_name": "Inspiration 5",
        "spell_tips": "Passive skill enhancement: when an ally receives healing, a portion is converted into Attack, granting up to 50% base Attack."
      }
    ],
    "tj_team": [
      23011,
      21770,
      23480,
      22180
    ],
    "tj_eq": [
      311194,
      311193,
      311192,
      311191,
      310978,
      310977,
      310976,
      310975,
      310134,
      310133,
      310132,
      310131
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23050,
    "name": "Kurvida",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s6",
    "type": "Melee",
    "race": "Chaotic Evil",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Kiss of the Night",
        "description": "When Kurvida takes damage, she has a 75% chance to dodge that damage. Upon a successful dodge, Kurvida instantly blinks near the damage source, dealing 2 instances of [+180%Attack]lightning damage and applying Darkfeather for 10s, with a 50% chance to additionally apply Omen for 5.0s. After a successful dodge and blink, this effect enters a cooldown of 8s. If the damage source cannot be targeted, a random enemy on the battlefield will be selected instead. This skill is treated as a basic attack."
      },
      "battle": {
        "name": "Phantom Deceit",
        "description": "Kurvida sequentially blinks to the 3 nearest enemies, dealing 2 instances of [+180%Attack]lightning damage to each and applying Darkfeather for 10s, with a 50% chance to additionally apply Omen for 5.0s. This skill is treated as a basic attack."
      },
      "ultimate": {
        "name": "Feast of Pain",
        "description": "Kurvida deals 5 instances of [+200%Attack]lightning damage to a clustered enemy area and applies 30% Lightning Vulnerability for 10.0s. In addition, each enemy hit by the last hit has a 75.0% chance to receive one of the following random effects: Stunned, Charmed, or Blind, lasting 5.0s. Enemies already affected by Omen are guaranteed to receive a random effect. After the attack, all existing Darkfeather on the battlefield are immediately triggered, and all enemies are reapplied with 1 stack of Darkfeather for 10s."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 2305091,
        "show_name": "Inspiration 2",
        "spell_tips": "The number of Darkfeather applied by the ultimate skill is increased to 3."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2305090,
        "show_name": "Inspiration 5",
        "spell_tips": " has a 100% chance to trigger an additional 1 time."
      }
    ],
    "tj_team": [
      20620,
      20890,
      20740,
      23680
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310352,
      310351,
      310350,
      310349,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000060
    ],
    "tf": [
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 22420,
    "name": "Perseus",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s6",
    "type": "Melee",
    "race": "The Corrupted",
    "career": "?",
    "captain": "Increases all allies' Max HP by 24% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Venomous Tentacle",
        "description": "Basic attacks deal damage in two instances. When basic attacks, battle skills, or ultimate skills deal damage to enemies, simultaneously inflicts 1 stack of Fallen Poison. When an enemy with Fallen Poison is defeated, transfers all stacks of Fallen Poison to the nearest other enemy."
      },
      "battle": {
        "name": "Devastation",
        "description": "Deals [+100%Attack]Necrotic damage four times to enemies around the hero, and each instance of damage grants 5.0 Ultimate Energy."
      },
      "ultimate": {
        "name": "Predation",
        "description": "Rushes to an enemy and strikes them 12 times, each dealing [+70%Attack]Necrotic damage; there is a 100% chance to dispel all buffs from them, with a 75.0% chance to inflict Stunned on them for 5.0s, and a 75.0% chance to inflict Buff Prohibition on them for 10.0s. The hero gains [+30%Max HP]healing simultaneously. The enemy's HP limit will be reduced by 20% of the damage dealt, no more than 40% of the enemy's Max HP. (This is invalid for Bosses) The enemy with the highest Attack will be attacked first."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210008,
        "show_name": "Inspiration 2",
        "spell_tips": "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 2242092,
        "show_name": "Inspiration 5",
        "spell_tips": "When an enemy's Fallen Poison reaches maximum stacks or the target dies, gains 20% Ultimate Energy and inflicts Fear on all enemies."
      }
    ],
    "tj_team": [
      23480,
      22890,
      21770,
      22180
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      311062,
      311061,
      311060,
      311059,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 23610,
    "name": "Suwalah",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s6",
    "type": "Range",
    "race": "Birdfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Undying Melody",
        "description": "When Suwalah's HP reaches 0, the hero falls into slumber at her location. After 16s, she Resurrects. Upon Resurrecting, she grants allies [+30%Max HP]healing and dispels 2 debuffs. After Resurrecting, she restores 50% Max HP and gains 50% Ultimate Energy. While Suwalah is present, all allied Healing is increased by 10%."
      },
      "battle": {
        "name": "Supreme Chant",
        "description": "Releases 2 Prayer Cylinder that follow random 2 enemies for 5.0s. When Prayer Cylinder expires, it applies Stunned to the current enemy for 5.0s."
      },
      "ultimate": {
        "name": "Flawless Wings",
        "description": "Suwalah enters Guardian Form for 5s. During Guardian Form, the hero cannot move or attack and protects all allies within range. During this time, Suwalah gains an undispellable [+50%Max HP]shield. 50% of the damage taken by allies is transferred to Suwalah. Allies gain the Guardian of Purity state, and Suwalah becomes immune to all control effects."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 2361091,
        "show_name": "Inspiration 2",
        "spell_tips": "The Ultimate Skill affects all allied units."
      },
      {
        "id": 7250000,
        "spell_tips": "HP% +30%"
      },
      {
        "id": 7250000,
        "spell_tips": "Skill Haste +30"
      },
      {
        "id": 2361092,
        "show_name": "Inspiration 5",
        "spell_tips": "Resurrection time is reduced to 12s."
      }
    ],
    "tj_team": [
      23820,
      23090,
      22790,
      21500
    ],
    "tj_eq": [
      311190,
      311189,
      311188,
      311187,
      310328,
      310327,
      310326,
      310325,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000178,
      8000088,
      8000063
    ],
    "tf": [
      [
        1,
        0,
        1,
        1
      ],
      [
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23800,
    "name": "Thorgos",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s6",
    "type": "Melee",
    "race": "Elemental Lord",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Blazing Reignition",
        "description": "When taking lethal damage, immediately rolls the dice. If the dice roll is ≥ 1, gains Immunity to this damage instance and briefly enter Invincibility for 1.0s, while permanently gaining 1 stack of Blazing Crown. Each time this effect triggers, the required roll value for the next trigger increases by 1."
      },
      "battle": {
        "name": "Pyre of Bones",
        "description": "Enters the Frenzy state for 10.0s. Then performs Tornado Slash once, dealing [+320%Attack]fire damage to surrounding enemies and gaining 10.0 Ultimate Energy. If the dice roll is ≥ 4, performs an additional Tornado Slash."
      },
      "ultimate": {
        "name": "Strife Unleashed",
        "description": "Deals [+600%Attack]fire damage to the current target. For each die roll point, this damage ignores 6% Defense. When hitting enemies affected by Vortex, the die roll points are converted into energy and applied to the Vortex. If the die roll result is ≥ 5, recasts this skill. Each additional cast deals 10% reduced damage, and can be recast consecutively up to 3 times."
      }
    },
    "inspiration": [
      {
        "id": 7200001,
        "show_name": "Inspiration 1",
        "spell_tips": "Heals the hero by [+8%Max HP] after killing an enemy."
      },
      {
        "id": 2380091,
        "show_name": "Inspiration 2",
        "spell_tips": "The damage area of the battle skill is expanded to a 5×5 rectangle and changes to triggering 2 Tornado Slashes. If the roll result is ≥ 4, deal an additional 2 Tornado Slashes."
      },
      {
        "id": 7250000,
        "spell_tips": "Crit Rate +10%,Crit Damage +20%"
      },
      {
        "id": 7250000,
        "spell_tips": "ATK% +30%"
      },
      {
        "id": 2380092,
        "show_name": "Inspiration 5",
        "spell_tips": "The maximum dice value of all skills is increased by 3."
      }
    ],
    "tj_team": [
      21400,
      23060,
      20810,
      20410
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000116,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 23250,
    "name": "Adolphus",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "?",
    "captain": "",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Life Transfusion",
        "description": "If the target already has a shield when the hero grants them a shield, additionally heals them equal to 75% of the shield granted."
      },
      "battle": {
        "name": "Aura of Protection",
        "description": "Grants a [+10%Target's Max HP][+2800%Enlightenment] Shield to an ally for 10.0s, increasing their Ultimate Energy by 10.0."
      },
      "ultimate": {
        "name": "Fiery Wall",
        "description": "Deals [+450%Attack][+3200%Enlightenment]Fire Damage to enemies within range and grants a [+15%Target's Max HP][+3150%Enlightenment] Shield to all allies."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000127,
      8000131,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21300,
    "name": "Corrin",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Enlightenment by 48.0.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Outlander's Curse",
        "description": "When an enemy inflicted with Poison dies, their Poison spreads to nearby enemies and deals [+80%Attack][+480%Enlightenment]Poison Damage to them."
      },
      "battle": {
        "name": "Outlander's Bad Luck",
        "description": "Launches 3 venomous attacks on the nearest enemy, dealing [+100%Attack]Poison Damage with a 75.0% chance of inflicting Poison for 15.0s each time."
      },
      "ultimate": {
        "name": "Outlander's Bane",
        "description": "Refreshes the duration of Poison on an enemy, up to 30 stacks, then triggers Poison Explosion, spreading Poison to nearby enemies and dealing [+400%Attack][+900%Enlightenment]Poison Damage."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310316,
      310314,
      310315,
      310313,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21670,
    "name": "Frurbath",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Forest Troll",
    "career": "?",
    "captain": "Increases all allies' Defense by 24% in dungeon battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Torment and Delight",
        "description": "When dealing damage to enemies under debuffs, the hero has a 30% chance of healing the ally with the lowest Current HP by [+150%Defense] and dispelling 1 debuffs from them. The more debuffs on the targets, the higher the healing amount. This effect can only be triggered once every 1.0s."
      },
      "battle": {
        "name": "Voodoo Therapy",
        "description": "Generates a healing nexus around the hero for 6.0s, healing allies within range by [+50%Defense] every 1s."
      },
      "ultimate": {
        "name": "Voodoo Conjuration",
        "description": "Deals [+600%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000101,
      8000087,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20210,
    "name": "Garius",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Defense by 18% in all battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 5,
      "ancient_battlefield": 4.5,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Rugged Tenacity",
        "description": "When taking damage, the hero has a 50% chance to gain 1 stack of Defense Up permanently. The status is undispellable and can be stacked up to 30 stacks."
      },
      "battle": {
        "name": "Selfish Gains",
        "description": "Deals [+400%Defense]Radiant Damage to the enemy with a 100.0% chance to knock up the target. Then grants Hit Recovery to the hero for 5.0s."
      },
      "ultimate": {
        "name": "Hold Your Horses",
        "description": "Dispels all debuffs from the hero, and heals all allies by [+500%Defense]."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310328,
      310326,
      310327,
      310325,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000087,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20640,
    "name": "Iola",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "avg": 4.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Mistakes Denied",
        "description": "When attacking enemies under Silence, there is a 40% chance of changing Silence into Stunned."
      },
      "battle": {
        "name": "Flaws Denounced",
        "description": "Fires two lightning orbs at the enemy, each dealing [+200%Attack]Lightning Damage, with a 50.0% chance of inflicting Silence for 5.0s."
      },
      "ultimate": {
        "name": "Resounding Truth",
        "description": "Summons lightning to strike the target area 3 times, dealing [+229%Attack]Lightning Damage each time to enemies within range, with a 50.0% chance of inflicting Silence for 5.0s and a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23210,
    "name": "Catherine",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Glory's Blessing",
        "description": "When the ally's HP is fully restored, 50% of the overflowing healing from the hero is converted into a shield for 10.0s."
      },
      "battle": {
        "name": "Aegis of Perseverance",
        "description": "Heals the ally with the lowest Current HP by [+15%Target's Max HP][+2500%Enlightenment] and grants the ally Defense Up I for 5.0s."
      },
      "ultimate": {
        "name": "Unfading Radiance",
        "description": "Heals allies within range by [+15%Target's Max HP][+2500%Enlightenment] and grants them Debuff Immunity for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20700,
    "name": "Dane",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 24%.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 5,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "At Your Weakest",
        "description": "When the hero deals damage to enemies with less than 50% HP by skills, recharges Ultimate Energy by 15.0. This effect can only be triggered once every 5.0s."
      },
      "battle": {
        "name": "Firebath",
        "description": "Deals [+300%Attack]Fire Damage to enemies within range. When dealing damage to enemies with HP less than 50%, has a 75.0% chance of inflicting Fear for 3.0s and Healing Prohibition for 5.0s on them."
      },
      "ultimate": {
        "name": "Yours? Mine!",
        "description": "Has a 75% chance to dispel 2 buffs from enemies within range, dealing [+650%Attack]Fire Damage, with a 75.0% chance of inflicting Attack Penalty I for 10.0s. When targetting enemies with HP below 50%, steals all their buffs instead."
      }
    },
    "inspiration": [],
    "tj_team": [
      23250,
      21800,
      21490,
      21260
    ],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310356,
      310355,
      310354,
      310353,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23130,
    "name": "Estella",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 24%.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Flickering Candlelight",
        "description": "As the battle starts, marks the ally with the highest HP and increases the healing and shield they receive by 25%."
      },
      "battle": {
        "name": "Aid Mark",
        "description": "Grants Debuff Immunity and Defense Up II to an ally for 5.0s. The skill prioritizes allies marked by the hero."
      },
      "ultimate": {
        "name": "Defense Domain",
        "description": "Casts the spell for 6s. Grants [+1%Max HP][+500%Enlightenment] healing to two allies with the lowest percentage of HP every 0.2s in this period."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21160,
    "name": "Gardrus",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Resistance by 30.0 in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Powerful Lineage",
        "description": "The hero has a 25% chance to immunize the inflicted debuff. Each time the hero gets immune, recharges Ultimate Energy by 25.0."
      },
      "battle": {
        "name": "Take Aim",
        "description": "Deals [+400%Attack]Cold Damage to the enemy, with a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Mighty Arrow",
        "description": "Shoots a magic Crossbow Bolt in a designated direction, dealing [+620%Attack]Cold Damage to enemies within range, with a 100.0% chance of inflicting Knocked Up and Knocking Back enemies to the farthest point possible. Then there is a 100.0% chance of inflicting Stunned for 3.0s and a 100.0% chance of inflicting Recharging Speed Penalty for 5.0s on them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23170,
    "name": "Gareth",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Frontier Resilience",
        "description": "When receiving single-instance damage exceeding 10% of Current HP, recovers HP equal to 50% of that damage."
      },
      "battle": {
        "name": "Steady as He Goes",
        "description": "The hero gains Defense Up II for 5.0s, then strikes at an enemy, dealing [+340%Defense]Poison Damage, and reduces the damage taken from that enemy by 30% for 5s."
      },
      "ultimate": {
        "name": "Desolate Slash",
        "description": "Deals [+620%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty I for 6.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23180,
    "name": "Garian",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 24%.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Duty Calls",
        "description": "For each ally with less than 50% HP on the field, the hero gains 1 stack of Recharging Speed Boost, and on top of that, for each ally with less than 20% HP on the field, the hero gains an extra stack of Recharging Speed Boost."
      },
      "battle": {
        "name": "Helping Hand",
        "description": "Heals the ally with the lowest Current HP by [+15%Target's Max HP][+2000%Enlightenment] and grants the ally Debuff Immunity for 5.0s."
      },
      "ultimate": {
        "name": "United We Stand",
        "description": "Generates a healing nexus at the designated area for 8s, healing allies within range by [+1%Target's Max HP][+350%Enlightenment] every 1s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23230,
    "name": "Gumm",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Forest Troll",
    "career": "?",
    "captain": "Increases all allies' Resistance by 30.0 in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3.5,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Ancestor's Blessing",
        "description": "When inflicting a debuff on an enemy, there is a 30% chance of dispelling 1 debuff from a random ally."
      },
      "battle": {
        "name": "Shroud of Holylight",
        "description": "Deals [+320%Attack]Radiant Damage to enemies within range, with a 75.0% chance of inflicting Blind and Attack Penalty I on the targets for 5.0s."
      },
      "ultimate": {
        "name": "Might of Mountains",
        "description": "Launches 3 attacks, dealing [+229%Attack]Radiant Damage to enemies within range each time, with a 30.0% chance of inflicting Stunned for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20070,
    "name": "Hegio",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 5,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Knight Spirit",
        "description": "After casting an ultimate skill, the hero has a 50.0% chance of gaining 1 stack of Rally and granting it to a random ally."
      },
      "battle": {
        "name": "Royal Swordsmanship",
        "description": "Launches 2 attacks on the target, each dealing [+300%Attack]Radiant Damage. The second attack recharges the hero's Ultimate Energy by 10.0 and has a 50.0% chance of granting the hero 1 stack of Rally."
      },
      "ultimate": {
        "name": "Revolving Sword Dance",
        "description": "Jumps to the target area, dealing [+500%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Further increases damage by 30%. [3] Further increases damage by 30% to enemies below 50% HP."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20140,
    "name": "Horrus",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Max HP by 18% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Indomitable",
        "description": "When taking damage, the hero has a 50% chance of obtaining a [+10%Max HP] shield for 5.0s. This effect only takes effect once every 5.0s."
      },
      "battle": {
        "name": "Hammer of Fortitude",
        "description": "Deals [+360%Defense]Fire Damage to the enemy, with a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Guardian Shield",
        "description": "Stops attacking and unleashes a battle cry forward, with a 100.0% chance of Taunting enemies within range for 5.0s and dealing [+600%Defense]Fire Damage. Gains 30% Damage Reduction for 5.0s and Hit Recovery for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [
      23250,
      21280,
      22380,
      20010
    ],
    "tj_eq": [
      311190,
      311189,
      311188,
      311187,
      311134,
      311133,
      311132,
      311131,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21820,
    "name": "Ihuicatl",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "Increases all allies' Defense by 18% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4.5,
      "arena": 3.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Little Trickery",
        "description": "When an ally casts an ultimate skill, the hero grants a [+10%Target's Max HP][+1350%Enlightenment] Shield to them for 5.0s."
      },
      "battle": {
        "name": "Touch of Retribution",
        "description": "Deals [+300%Attack]Lightning Damage to the enemy and removes all of their shield, with a 75% chance of dispelling 1 buff from them."
      },
      "ultimate": {
        "name": "Not Yet Over",
        "description": "Grants Defense Up II to allies in range for 10.0s and performs [+10%Target's Max HP][+2200%Enlightenment] healing."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000102,
      8000131,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21690,
    "name": "Isitarian",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Constant Shadow",
        "description": "At battle start, summons dragon remnant to assist in combat."
      },
      "battle": {
        "name": "Evil Flame's Call",
        "description": "Attacks the enemy with lowest HP, dealing AOE [+120%Attack]Necrotic Damage centered on them. For each existing undead summoned unit, dragon remnant performs 1 additional attack on the target, up to 3 times. Additional attacks deal [+120%Attack]Necrotic Damage."
      },
      "ultimate": {
        "name": "Ancient Dragon Spell",
        "description": "Grants 25% Attack Up and Defense Up II to 2 undead summoned units with highest Attack for 10.0s. If dragon remnant has been defeated, resummons it."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000095,
      8000181,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23240,
    "name": "Isolde",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Defense by 18% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Comrades in Arms",
        "description": "Shield granted by the hero reduces ally's damage taken by 15%."
      },
      "battle": {
        "name": "Pursue Vengeance",
        "description": "Deals [+300%Attack][+8%Max HP]Fire Damage to the current target and grants Defense Up I to allies within range for 5.0s."
      },
      "ultimate": {
        "name": "Flame Guardian",
        "description": "Deals [+400%Attack][+9%Max HP]Fire Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s; Meanwhile, grants a [+14%Max HP] Shield to allies within range for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23260,
    "name": "Liko",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 40.0 in Grand Gladiator Arena battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 4.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 4,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Element Bloodline",
        "description": "Grants Accuracy Up to the hero if they don't have any buffs. Otherwise, grants them Resistance Up."
      },
      "battle": {
        "name": "Fire's Kiss",
        "description": "Heals the ally with the lowest Current HP by [+20%Target's Max HP] and grants the ally Defense Up II for 5.0s."
      },
      "ultimate": {
        "name": "Smoldering Breath",
        "description": "Deals [+780%Attack]Fire Damage to enemies within range with a 100.0% chance of inflicting Buff Prohibition for 10.0s. If the hero has any buffs, they have a 100% chance of dispelling 1 buff on the targets."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20440,
    "name": "Lydia",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Faith in Kinship",
        "description": "Every 5th basic attack grants a [+20%Max HP] shield to the hero and a [+10%Max HP] shield to the ally with the lowest Current HP for 12.0s."
      },
      "battle": {
        "name": "Relentless Heart",
        "description": "Gains Immortality for 5.0s."
      },
      "ultimate": {
        "name": "United Defense",
        "description": "Grants Control Immunity to all allies for 10.0s and unleashes the battle skill once."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310328,
      310326,
      310327,
      310325,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 22350,
    "name": "Nimbus",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in dungeon battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Gust of Speed",
        "description": "The hero gains Attack Speed Up II for 10.0s when obtaining a buff. This effect will not trigger the passive skill again."
      },
      "battle": {
        "name": "Rolling Thunderclap",
        "description": "Deals [+220%Attack]Lightning Damage to the enemy. Every 1% extra Attack Speed gained by the hero grants 1% Damage Bonus to the skill."
      },
      "ultimate": {
        "name": "Thunderous Pursuit",
        "description": "Locks on an enemy for 2s, during which time a missile is launched at them every 0.5s, each dealing [+100%Attack]Lightning Damage. The lock-on duration is affected by the hero's Attack Speed. Each 1% extra Attack Speed increases the duration by 0.02s, up to 6s. This skill is considered a basic attack."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000118,
      8000082,
      8000137
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21620,
    "name": "Rava",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 4,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Icy Echo",
        "description": "For each enemy under Frost on the field, the hero gains a stack of Attack Up, up to 3 stacks."
      },
      "battle": {
        "name": "Permeating Coldness",
        "description": "Fires at most 3 Orbs at random enemies, each dealing [+260%Attack]Cold Damage with a 75.0% chance of inflicting Frost for 5.0s."
      },
      "ultimate": {
        "name": "Chill Formation",
        "description": "Summons a nexus that lasts 10.0s in a designated area, dealing [+50%Attack]Cold Damage to enemies within range every 1.5s, with a 75.0% chance of inflicting Frost for 10.0s. Upon expiration, the nexus will explode, dealing [+360%Attack]Cold Damage to enemies within range."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20040,
    "name": "Schaltar",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Brutality",
        "description": "Basic attacks have a 30% chance of releasing Lightning Chain to deal [+75%Attack]Derivative to enemies. Each Lightning Chain can bounce 4 times among enemies at most."
      },
      "battle": {
        "name": "Lightning Shield",
        "description": "Grants Lightning Shield to an ally for 4.0s. Lightning Shield deals [+55%Attack]Derivative to nearby enemies every 0.8s."
      },
      "ultimate": {
        "name": "Blessings of Thunder",
        "description": "Enhances all allies with Lightning Force, granting them Blessings of Thunder for 15.0s. When launching basic attacks, all allies with Blessings of Thunder have a 30% chance of summoning a Lightning Strike on the enemy, dealing [+95%Attack]Derivative. Dauntless Heroes have a double chance of triggering this effect."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310324,
      310322,
      310323,
      310321,
      310308,
      310306,
      310307,
      310305,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000183,
      8000134,
      8000062
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23290,
    "name": "Shook",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Ratfolk",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 5,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "At Your Service",
        "description": "The hero gains 10.0 Ultimate Energy when an enemy gains a buff. This skill only takes effect once every 5.0s."
      },
      "battle": {
        "name": "Hit Where It Counts",
        "description": "Shoots 3 arrows at the enemy, each dealing [+150%Attack]Lightning Damage with a 75% chance of reducing their Ultimate Energy by 5.0."
      },
      "ultimate": {
        "name": "Rest Assured",
        "description": "Deals [+675%Attack]Lightning Damage to enemies within range. Dispels all of their shields, with a 75.0% chance of inflicting Attack Penalty II for 10.0s. Has a 75.0% chance of inflicting Recharging Speed Penalty to them for 10.0s upon successfully dispelling their shields."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23200,
    "name": "Theodore",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 40.0 in dungeon battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Veer with the Wind",
        "description": "When an enemy is inflicted with Control, grants 10.0 Ultimate Energy to the ally with the highest Attack. This effect can only be triggered once every 3.0s. When an ally is inflicted with Control, reduces the Ultimate Energy of the enemy with the highest Attack by 20.0. This effect can only be triggered once every 3.0s."
      },
      "battle": {
        "name": "Money Talks",
        "description": "Shoots 2 arrows at an enemy, dealing [+210%Attack]Poison Damage with a 75.0% chance of inflicting Recharging Speed Penalty for 5.0s."
      },
      "ultimate": {
        "name": "Never Miss",
        "description": "Deals [+760%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Stunned for 5.0s, and a 50.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21050,
    "name": "Thia",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 40.0 in dungeon battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Stealth Instinct",
        "description": "Grants Invisibility to the hero for 5.0s when damage higher than 10% of their Max HP is sustained. This can only take effect once every 10.0s. In addition, allies under Invisibility take 15% less damage."
      },
      "battle": {
        "name": "Protection of Darkness",
        "description": "Heals the ally with the lowest Current HP and the allies with Invisibility by [+200%Attack][+2000%Enlightenment]. Each ally can be healed only once per cast."
      },
      "ultimate": {
        "name": "Deadly Accuracy",
        "description": "Grants Invisibility and Debuff Immunity to all ranged allies for 10.0s, then deals [+850%Attack]Necrotic Damage with a 75.0% chance of inflicting Healing Prohibition on enemies for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310134,
      310132,
      310133,
      310132
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21800,
    "name": "Tonalnan",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Wild",
    "season": "s1",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4.5,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Flaming Lineage",
        "description": "When an ally's Wild dice roll ≥5, gains additional 5% Crit Damage, up to 20 stacks."
      },
      "battle": {
        "name": "Vigilant Guard",
        "description": "Brandishes dual blades, dealing [+90%Attack]Fire Damage 3 times to the target. The greater the buff count difference between the hero and the target, the higher this skill's damage."
      },
      "ultimate": {
        "name": "Mad Blade of Flames",
        "description": "Gains 20% Attack Up for 10.0s, then deals [+160%Attack]Fire Damage 5 times to the enemy."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000091,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20250,
    "name": "Vidimir",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 5,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 1,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Icebreaker",
        "description": "When an enemy inflicted with Frost dies, gains 25% Attack Up for 10.0s and recharges Ultimate Energy by 15.0."
      },
      "battle": {
        "name": "Icicle",
        "description": "Deals [+350%Attack]Cold Damage to enemies within range, with a 75.0% chance of inflicting Frost for 5.0s."
      },
      "ultimate": {
        "name": "Ice Nova",
        "description": "Releases an iceball that can bounce up to 5 times between enemies, dealing [+260%Attack]Cold Damage each time it hits. The iceball is more likely to hit the enemies inflicted with Frost. When the enemies with Frost are hit, their Frost will be removed and cause an explosion on the spot to deal [+260%Attack]Cold Damage to nearby enemies."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22290,
    "name": "Voresh",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 5,
      "ancient_battlefield": 5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Breath of Ice",
        "description": "Heals the ally with the lowest Current HP by [+70%Attack] when dealing damage. This effect will only trigger once when dealing damage to multiple targets."
      },
      "battle": {
        "name": "Glacial Blow",
        "description": "Deals [+120%Attack]Cold Damage to the enemy 3 times. When dealing damage, has a 30% chance of dispelling 1 buff from them."
      },
      "ultimate": {
        "name": "Glacial Curse",
        "description": "Deals [+180%Attack]Cold Damage 3 times to all enemies with a 75.0% chance of inflicting Buff Prohibition for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20220,
    "name": "Zadok",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Deep-Rooted Hatred",
        "description": "When an allied undead summoned unit dies, gains 5.0 Ultimate Energy and 1 stack of Soul Lantern, up to 20 stacks."
      },
      "battle": {
        "name": "Undead Companions",
        "description": "Deals [+300%Attack]Necrotic Damage to the target and gains 2 stacks of Soul Lantern."
      },
      "ultimate": {
        "name": "Moment of Revenge",
        "description": "Shoots 3 energy waves in a designated direction, each dealing [+235%Attack]Necrotic Damage."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 22320,
    "name": "Zhar'loth",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Fallen Soul",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Corrupting Order",
        "description": "Every 4th basic attack heals the ally with the lowest Current HP by [+300%Attack], with a 100.0% chance of inflicting Silence on the enemy for 5.0s."
      },
      "battle": {
        "name": "Shadow of Chaos",
        "description": "Deals [+380%Attack]Necrotic Damage to enemies within range, with a 75.0% chance of inflicting Recharging Speed Penalty for 5.0s."
      },
      "ultimate": {
        "name": "Abysmal Dread",
        "description": "Summons a prison at the designated location for 5.0s, dealing [+162%Attack]Necrotic Damage to enemies within range every 1.0s for the duration of the prison, with a 35.0% chance of inflicting Fear on enemies for 5.0s. Heals all allies by [+30%Attack] at the meantime. Each enemy hit by this skill increases the healing by 15%."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21260,
    "name": "Alfie",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in dungeon battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Slow Simmer",
        "description": "When an ally's Wild dice roll ≥5, inflicts 20% Attack Up lasting 10.0s."
      },
      "battle": {
        "name": "Focused Broiling",
        "description": "Launches 3 fireballs at the enemy, each dealing [+200%Attack]Fire Damage."
      },
      "ultimate": {
        "name": "Stoking the Flames",
        "description": "Creates a magic circle lasting 15s in the target area. Ally Wild dice rolls within have a 70% chance to increase the result by 1."
      }
    },
    "inspiration": [],
    "tj_team": [
      23250,
      20140,
      21800,
      21490
    ],
    "tj_eq": [
      311130,
      311129,
      311128,
      311127,
      310376,
      310375,
      310374,
      310373,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000116,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20950,
    "name": "Alvis",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Heart of Arrogance",
        "description": "Gains 1 stack of Rally if any target on the field gains Rally."
      },
      "battle": {
        "name": "Incitement",
        "description": "Deals [+200%Attack]Radiant Damage to enemies within range and grants 15% Attack Up to the Rally ally with the highest Attack for 8.0s, with a 40.0% chance of granting 1 stack of Rally."
      },
      "ultimate": {
        "name": "Targeted Inspiration",
        "description": "Grants 20% Crit Rate Up to the ally with the highest Attack for 8.0s. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases the skill effect to 30% Crit Rate Up. [2] Extends the duration to 12.0s. [3] The skill effect applies to 1 additional ally."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310306,
      310307,
      310305,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000106,
      8000076,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20360,
    "name": "Brody",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 5,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Raider's Protection",
        "description": "When an enemy obtains a shield, the hero also gains shield which equals to 50% of the enemy's shield, up to 80% of the hero's Max HP. This effect can only be triggered once every 0.5s."
      },
      "battle": {
        "name": "Raider's Scimitar",
        "description": "Deals [+330%Defense]Fire Damage to enemies within range, with a 50.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Raider's Fury",
        "description": "Removes shield from enemies in range and deals [+600%Defense]Fire Damage, then gains Defense Up I for 6.0s."
      }
    },
    "inspiration": [],
    "tj_team": [
      22920,
      23250,
      21280,
      20010
    ],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      311062,
      311061,
      311060,
      311059,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21950,
    "name": "Caraman",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Wild",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in Grand Gladiator Arena battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Searing Godspeed",
        "description": "When the hero's Wild dice roll ≥4, gains 15% Attack Up and Attack Speed Up I for 5.0s."
      },
      "battle": {
        "name": "Blazing Kill",
        "description": "Blinks behind the enemy with the lowest Current HP and deals [+420%Attack]Fire Damage, then selects this target for attacks. Resets this skill's recharge time after killing an enemy."
      },
      "ultimate": {
        "name": "Firestorm's Fury",
        "description": "Charges at an enemy, dealing [+750%Attack]Fire Damage. This damage ignores 30% of the target's Defense."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000091,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21420,
    "name": "Dallbam",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Gnome",
    "career": "?",
    "captain": "Increases all allies' Resistance by 40.0 in Grand Gladiator Arena battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Blessing of the Curse",
        "description": "Generates crystal armor for protection when the hero takes fatal damage in combat for the first time, gaining Invincibility for 5.0s and Recovery Over Time for 5.0s."
      },
      "battle": {
        "name": "Rewards of Digging",
        "description": "Gains a [+15%Max HP] shield for 10.0s and Defense Up II for 5.0s."
      },
      "ultimate": {
        "name": "My Precious!",
        "description": "Uses the crystal lamp from behind, dealing [+520%Defense]Cold Damage to all enemies, with a 50.0% chance to inflict Blind on them for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23150,
    "name": "Deverick",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 2,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 4.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Buried Radiance",
        "description": "When the hero hits an enemy with a skill, has a 30% chance of dispelling 1 buff from the enemy."
      },
      "battle": {
        "name": "Leave None Alive",
        "description": "Launches 3 attacks at an enemy, dealing [+120%Attack]Necrotic Damage, with a 50.0% chance of inflicting Accuracy Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Dead End",
        "description": "Selects up to 3 enemies to launch 3 attacks, each dealing [+250%Attack]Necrotic Damage, with a 50.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20240,
    "name": "Dorkuraz",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Frost Troll",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Snow Mountain Descent",
        "description": "Basic attacks have a 60% chance of dealing [+40%Attack]Derivative and inflicting Frost on the target for 5.0s. Prioritizes attacks on the enemy not under Frost."
      },
      "battle": {
        "name": "Snow Shadow",
        "description": "Deals [+280%Attack]Cold Damage to enemies within range with a 75.0% chance of inflicting Frost for 5.0s. Recharges Ultimate Energy by 25.0."
      },
      "ultimate": {
        "name": "Iceball Assault",
        "description": "Throws iceballs, dealing [+480%Attack]Cold Damage to enemies within range."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20750,
    "name": "Eches",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Agonizing Poison",
        "description": "When inflicting debuffs on enemies, reduces their damage dealt by 10% at the same time."
      },
      "battle": {
        "name": "Blade Cyclone",
        "description": "Deals [+280%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Healing Reduction for 5.0s."
      },
      "ultimate": {
        "name": "Bewitching Dance",
        "description": "Deals [+550%Attack]Poison Damage to enemies within range, with a 35.0% chance of inflicting Charmed for 5.0s and an 85.0% chance of inflicting Recharging Speed Penalty for 10.0s. Then dispels 1 debuff from all allies."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20280,
    "name": "Eli",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "No Loose Ends",
        "description": "When dealing damage to enemies under Poison, additionally deals [+40%Attack]Derivative."
      },
      "battle": {
        "name": "Poisonous Arrow",
        "description": "Gains Attack Speed Up I for 6.0s. In each subsequent basic attack, shoots an additional crossbow bolt at a random enemy, dealing [+120%Attack]Poison Damage with a 100.0% chance of inflicting 1 stack(s) of Poison for 15.0s."
      },
      "ultimate": {
        "name": "Hail of Arrows",
        "description": "Shoots 3 waves of bolts in a designated direction, each wave dealing [+265%Attack]Poison Damage."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310306,
      310307,
      310305,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21490,
    "name": "Follie",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Deep Gnome",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Stroke of Luck",
        "description": "When an ally Wild dice roll ≥5, accumulates 1 fireball. On the next basic attack, launches all accumulated fireballs, with each fireball dealing 1 basic attack's worth of damage."
      },
      "battle": {
        "name": "Measured Force",
        "description": "For 7.0s after casting, the number of Orbs shot by the hero's basic attack is modified to 2."
      },
      "ultimate": {
        "name": "Risky Experiment",
        "description": "Deals [+420%Attack]Fire Damage to enemies. When Wild dice roll ≥4, casts this skill again on a random enemy, up to 3 times consecutively."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000091,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23140,
    "name": "Gladros",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "Increases all allies' Resistance by 40.0 in Grand Gladiator Arena battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 2,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Shadow Companion",
        "description": "When an ally with a shield is inflicted with any Control effect, dispels their shield to grant immunity to that instance of Control effect."
      },
      "battle": {
        "name": "Sneaky Hand",
        "description": "Deals [+300%Attack]Necrotic Damage to the enemy with the highest Attack with a 75% chance of stealing 25% of their Attack for 5.0s. The stolen Attack is capped at 50% of the hero's Attack."
      },
      "ultimate": {
        "name": "Encircling Guard",
        "description": "Grants a [+300%Attack][+4%Max HP] shield to each ally within range for 10.0s. Any ally under this shield gains Debuff Immunity during the shield duration."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000138
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20130,
    "name": "Horace",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by 36.0 in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Twist the Knife",
        "description": "When the hero deals damage to an enemy under Poison, every stack of Poison on the target increases  1% Crit Rate of this damage."
      },
      "battle": {
        "name": "Poison Bomb",
        "description": "Hurls a poison bomb at the target, dealing [+340%Attack]Poison Damage to enemies within a target-centered range, with a 50.0% chance of inflicting 3 stacks of Poison for 15.0s."
      },
      "ultimate": {
        "name": "Bullet Storm",
        "description": "Deals [+600%Attack]Poison Damage to enemies within range. When hitting enemies under Poison, triggers Poison Explosion once."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310306,
      310307,
      310305,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21930,
    "name": "Joyce",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in dungeon battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Soul Linkage",
        "description": "Gains 10.0 Ultimate Energy for each summoned unit created."
      },
      "battle": {
        "name": "Mimicry Performance",
        "description": "Deals [+210%Attack]Necrotic Damage to the enemy with the lowest Current HP. When there is a Fortune Phantom summoned by the hero on the field, it will emulate casting this skill and deal [+210%Attack]Necrotic Damage."
      },
      "ultimate": {
        "name": "Reprise",
        "description": "Summons a Fortune Phantom at the designated location for 45.0s. Up to 3 Fortune Phantoms can exist at the same time."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000095,
      8000181,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20470,
    "name": "Kamari",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 4.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Embattle",
        "description": "When a battle begins, grants Defense Up II to allies within range for 10.0s."
      },
      "battle": {
        "name": "True Courage",
        "description": "Charges toward the enemy, with a 100.0% chance of Knocking Up the target and dealing [+200%Attack][+8%Max HP]Radiant Damage."
      },
      "ultimate": {
        "name": "Mercy of Holy Light",
        "description": "Resurrects the most recently dead ally at 60% of their Max HP, restoring 75% of the resurrected ally's Ultimate Energy before death. Heals the ally with the lowest Current HP by [+40%Target's Max HP] if there is no dead ally."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310328,
      310326,
      310327,
      310325,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20170,
    "name": "Martina",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Cheerful Inspiration",
        "description": "When gaining Rally, the hero recharges Ultimate Energy by 10.0. This effect can only be triggered once every 0.5s."
      },
      "battle": {
        "name": "Sunburst Attack",
        "description": "Deals [+310%Attack]Radiant Damage to surrounding enemies. If 2 or more enemies are hit, guarantees a critical hit and gains 1 stack of Rally."
      },
      "ultimate": {
        "name": "Divine Slash",
        "description": "Deals [+620%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] This skill guarantees a critical hit. [3] Ignores 20% of the enemy's Defense."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21290,
    "name": "Rowena",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Piercing Cold",
        "description": "When attacking enemies under Frost, ignores 20% of their Defense. For every 5% Crit Rate the hero possesses, the attack ignores 1% more Defense, up to 20%."
      },
      "battle": {
        "name": "Frost Reaping",
        "description": "Deals [+365%Attack]Cold Damage to the enemy with the lowest Current HP, with a 50.0% chance of inflicting Frost for 10.0s."
      },
      "ultimate": {
        "name": "Reaping Frostbolts",
        "description": "Deals [+560%Attack]Cold Damage to enemies within range that are not inflicted with Frost and [+800%Attack]Cold Damage to enemies inflicted with Frost within range."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000092,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20030,
    "name": "Shagrol",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Orc",
    "career": "?",
    "captain": "Increases all allies' Attack Speed by 18% in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Wrath of the Ancestors",
        "description": "Basic attacks have a 25% chance to attack twice."
      },
      "battle": {
        "name": "Terror Fall",
        "description": "Leaps at the enemy with the lowest Current HP and launches an attack, dealing [+380%Attack]Lightning Damage."
      },
      "ultimate": {
        "name": "Destructive Flurry",
        "description": "Leaps toward an enemy and makes 5 slashes, with each slash dealing [+160%Attack]Lightning Damage. Killing the enemy with this skill will grant the hero 40% Attack Up for 10.0s. This skill is counted as a basic attack."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000093,
      8000084,
      8000137
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22020,
    "name": "Shink",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "One More Round",
        "description": "When attacking enemies inflicted with Poison, the target's 1% Defense is ignored for every stack of Poison they have."
      },
      "battle": {
        "name": "Bestow Revelry",
        "description": "Throws a dagger that bounces between enemies up to 5 times, dealing [+105%Attack]Poison Damage upon hit, with a 75.0% chance of inflicting 1 stack of Poison for 15.0s."
      },
      "ultimate": {
        "name": "Rulebreaker's Bane",
        "description": "Strikes enemies within range 5 times, dealing [+105%Attack]Poison Damage each time, with a 50.0% chance of inflicting 1 stack of Poison on them for 15.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310316,
      310314,
      310315,
      310313,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20940,
    "name": "Tathlyn",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 24% in Grand Gladiator Arena battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Sage's View",
        "description": "Launching every 5 basic attack(s) grants 1 stack of Rally to a Rally ally."
      },
      "battle": {
        "name": "Arrow of Dusk",
        "description": "Deals [+320%Attack]Radiant Damage to an enemy, while recharging a Rally ally with 10.0 Ultimate Energy."
      },
      "ultimate": {
        "name": "Moonlight Rain",
        "description": "Launches 3 attacks on enemies within range, each dealing [+150%Attack]Radiant Damage. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Further increases damage by 30%. [3] Enhances the hero's basic attacks for 10s, granting each attack a 50% chance of striking twice."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000065
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21130,
    "name": "Thurnus",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in dungeon battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 5,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Togetherness",
        "description": "The hero gains an extra 20% Attack Speed for every Dauntless ally on the team. The effect is capped at 3 stacks."
      },
      "battle": {
        "name": "Thunderous Gale",
        "description": "Deals [+300%Attack]Lightning Damage to enemies within range. The hero gains 15% Attack Up for 10.0s when hitting 3 or more targets with this skill."
      },
      "ultimate": {
        "name": "Thunder's Mark",
        "description": "Jumps up and strikes an enemy, dealing [+468%Attack]Lightning Damage. For the next 10.0s, when an ally launches a basic attack against this enemy, the hero has a 50% chance of additionally dealing [+52%Attack]Lightning Damage to them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310312,
      310310,
      310311,
      310309,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000118,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20080,
    "name": "Vani",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Pursuit",
        "description": "Every 3rd basic attack will deal additional damage."
      },
      "battle": {
        "name": "Thunder Blast",
        "description": "Gains 30% Attack Up for 5.0s and deals [+450%Attack]Lightning Damage to the enemy."
      },
      "ultimate": {
        "name": "Haste",
        "description": "Grants Attack Speed Up I to all Dauntless allies for 6.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000118,
      8000082,
      8000137
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23190,
    "name": "Vicuc",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 2,
      "heretical_ruins": 5,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 5,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Mark of the Forest",
        "description": "When the hero is inflicted with a debuff, there is a 100.0% chance of inflicting Accuracy Penalty II on the debuff caster for 5.0s."
      },
      "battle": {
        "name": "Valor of the Forest",
        "description": "Deals [+300%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "ultimate": {
        "name": "Blessing of the Forest",
        "description": "Dispels 2 debuffs from each ally and heals them by [+15%Target's Max HP]. For each debuff successfully dispelled on an ally, the healing on that ally is increased by 25%."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20540,
    "name": "Clovis",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Defense by 18% in all battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 1,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Persistence",
        "description": "The hero gains 1 stack of Persistence for each enemy that is nearby, up to 3 stacks."
      },
      "battle": {
        "name": "Knight Duel",
        "description": "Has a 75.0% chance to Taunt enemies for 5.0s. If successfully inflicting Taunt, doubles passive Defense gain during this period."
      },
      "ultimate": {
        "name": "Valiant Charge",
        "description": "Charges into the target, dealing [+750%Defense]Radiant Damage, reducing 20.0 Ultimate Energy, with a 100.0% chance of inflicting Attack Penalty II for 10.0s. Also Knocks Back the target. If the knocked-back target hits the target behind them, has a 100.0% chance of inflicting Stunned for 3.0s on both targets and dealing additional [+100%Attack]Radiant Damage to them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23220,
    "name": "Duling",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Defense by 24% in Grand Gladiator Arena battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Heart of Stone",
        "description": "The hero takes 1% less damage for every 3% HP lost."
      },
      "battle": {
        "name": "Drunken Brawl",
        "description": "Deals [+300%Defense]Radiant Damage to enemies within range, with a 75.0% chance of inflicting Taunt and Attack Penalty I on the targets for 5.0s."
      },
      "ultimate": {
        "name": "Honey Whiskey",
        "description": "Grants Ally Protection to allies within range for 10.0s, and gains Defense Up II and Recovery Over Time for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21210,
    "name": "Gitouna",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 3.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Speed Surge",
        "description": "When gaining Rally, gains 20.0 Ultimate Energy and blinks to the farthest enemy, dealing [+200%Attack]Radiant Damage. This effect triggers once every 5.0s."
      },
      "battle": {
        "name": "Blade Echo",
        "description": "For 8.0s after being cast, each basic attack deals an extra [+68%Attack]Radiant Damage."
      },
      "ultimate": {
        "name": "Golden Brilliance",
        "description": "Deals [+600%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Deals additional [+120%Attack]True Damage. [3] Deals additional [+120%Attack]True Damage again."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000084,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20980,
    "name": "Kailes",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Energy Surge",
        "description": "Basic attacks have a 20% chance of being enhanced to spread after hitting an enemy, dealing [+175%Attack]Radiant Damage to enemies within range."
      },
      "battle": {
        "name": "Synergy",
        "description": "The hero has a 100.0% chance of gaining 25% Attack Up and granting it to the ally with the highest Attack for 5.0s."
      },
      "ultimate": {
        "name": "Gleaming Lens",
        "description": "Deals [+600%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Further increases damage by 20%. [3] The damage ignores the enemy's 20% Defense."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21580,
    "name": "Naguk",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Orc",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Lightning Ground",
        "description": "A static field exists around the hero, dealing [+32%Attack]Lightning Damage to surrounding enemies every 1.0s. Upon taking damage from the static field every 10 times, an enemy has a 100.0% chance of being inflicted with Stunned for 3.0s."
      },
      "battle": {
        "name": "Lightning Blessing",
        "description": "Gains a [+10%Max HP] shield for 10.0s."
      },
      "ultimate": {
        "name": "Rolling Thunder",
        "description": "Deals [+520%Attack]Lightning Damage to all enemies, extending the range of the static field to the entire battlefield for 12.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23280,
    "name": "Nathaniel",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Max HP by 18% in all battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 4.5,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Slumber's Breath",
        "description": "When a buff expires or is dispelled from any target on the field, heals the ally with the lowest Current HP by [+5%Max HP]. This effect can only be triggered once every 1.0s."
      },
      "battle": {
        "name": "Guiding Light",
        "description": "Dispels 1 debuff from allies within range and grants them with 1 stack of Recovery Over Time for 5.0s."
      },
      "ultimate": {
        "name": "Dawning Light",
        "description": "Deals [+550%Attack]Lightning Damage to enemies within range and grants a [+10%Target's Max HP][+1800%Enlightenment] shield and Defense Up I to all allies for 10.0s. For each enemy hit by the skill, the shield increases by 10%."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000127,
      8000131,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21910,
    "name": "Olgan",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Vow to Defend",
        "description": "For 10.0s after being cast, deals [+20%Attack]Cold Damage to nearby enemies every 1s with a 100.0% chance of inflicting Frost for 5.0s."
      },
      "battle": {
        "name": "Intruders Die",
        "description": "Deals [+330%Attack]Cold Damage to an enemy. If the target is inflicted with Frost, the hero has a 100.0% chance of inflicting Frozen on them for 5.0s."
      },
      "ultimate": {
        "name": "Banishment",
        "description": "Deals [+550%Attack]Cold Damage to enemies within range and grants 25% Attack Up to Frost allies for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20600,
    "name": "Questa",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in Grand Gladiator Arena battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Bloodthirst",
        "description": "Every time an enemy hero dies, grants Recovery Over Time to all allies for 10.0s."
      },
      "battle": {
        "name": "Tormentation",
        "description": "Charges toward the enemy with the lowest Current HP, dealing [+420%Attack]Necrotic Damage with a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Marrow Devouring",
        "description": "Jumps toward an enemy, dealing [+950%Attack]Necrotic Damage, stealing 30.0 of their Ultimate Energy and healing the hero by  [+475%Attack]."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000138
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21680,
    "name": "Sifris",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Dragon Queen Blessing",
        "description": "When the hero's HP drops below 30% for the first time, gains Resurrection at Death for 10.0s."
      },
      "battle": {
        "name": "Self Devotion",
        "description": "Consumes 10% of the hero's Current HP to heal all the other allies by [+20%Max HP]."
      },
      "ultimate": {
        "name": "Cult Frenzy",
        "description": "Consumes 30% of the hero's Current HP and resurrects 2 random allies at 30% of their Max HP, retaining 75% of the resurrected allies' Ultimate Energy before death. Then grants Defense Up I to all allies for 6.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000098,
      8000135,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22270,
    "name": "Vasska",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s1",
    "type": "Melee",
    "race": "The Unstill",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in Grand Gladiator Arena battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Bloodthirsty Scythe",
        "description": "When the hero or their summoned units deal damage, the hero receives [+100%Attack] healing."
      },
      "battle": {
        "name": "Restless Soul",
        "description": "Summons a Spirit lasting 15.0s, and gains 15% Attack Up for 5.0s."
      },
      "ultimate": {
        "name": "Death Reaping",
        "description": "Deals [+730%Attack]Necrotic Damage to enemies in the target area. When this skill kills an enemy, summons a Spirit lasting 15.0s at the target's location."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000060
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23160,
    "name": "Elvis",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 24%.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Warrior Spirit",
        "description": "When dealing damage to an enemy, has a 50.0% chance of inflicting the target with Recharging Speed Penalty for 5.0s."
      },
      "battle": {
        "name": "Stalwart Shield",
        "description": "Gains a [+375%Defense] Shield for 5.0s. When the shield is broken, dispelled, or wears off in any form, it deals [+260%Defense]Cold Damage to enemies within range."
      },
      "ultimate": {
        "name": "Devout Frost Armor",
        "description": "Gains Defense Up II for 10.0s, during which the hero deals [+75%Defense]Cold Damage to enemies within range when the hero takes damage. This effect can only be triggered once every 1.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21000,
    "name": "Soveliss",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 4.5,
      "ancient_battlefield": 2,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Investigation",
        "description": "When an enemy is inflicted with Invisibility, shoots an arrow to them, dealing [+200%Attack]Cold Damage and removing their Invisibility, with a 100.0% chance of inflicting Attack Penalty II on them for 5.0s. This skill only takes effect on the same target once every 10.0s."
      },
      "battle": {
        "name": "Driftwood as Home",
        "description": "Heals an ally by [+10%Target's Max HP] and grants them Hit Recovery for 5.0s."
      },
      "ultimate": {
        "name": "Protective Isolation",
        "description": "Fires 2 rounds of Hail of Arrows, each dealing [+320%Attack]Cold Damage to enemies within range, with a 50% chance of reducing their Ultimate Energy by 30.0."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21080,
    "name": "Lethander",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "?",
    "captain": "",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Vigilant Gaze",
        "description": "When an enemy dies, the hero gains their remaining Ultimate Energy."
      },
      "battle": {
        "name": "Frosty Beams",
        "description": "Deals [+430%Attack]Cold Damage to the enemy, with a 30.0% chance of inflicting Frozen for 5.0s."
      },
      "ultimate": {
        "name": "Shattering Ice Blast",
        "description": "Deals [+720%Attack]Cold Damage to enemies within range, with a 75.0% chance of inflicting Recharging Speed Penalty and Accuracy Penalty I on the targets for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23120,
    "name": "Irma",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Ridge Halfling",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Night Sentinel",
        "description": "Has a 30% chance of recharging the hero's Ultimate Energy by 3.0 when taking damage. This effect can only be triggered once every 5.0s."
      },
      "battle": {
        "name": "Heart of Guardian",
        "description": "Deals [+355%Defense]Necrotic Damage to an enemy and gains Hit Recovery for 5.0s."
      },
      "ultimate": {
        "name": "Serene Domain",
        "description": "Deals [+740%Defense]Necrotic Damage to enemies within range and grants Control Immunity and 30% Damage Reduction to allies within range for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22110,
    "name": "Bleddyn",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Max HP by 18% in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Ranger Spirit",
        "description": "If the hero has Ice Crystals after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. When the hero's skill triggers a critical hit, there is a 20% chance of granting 1 stack of Ice Crystal to 1 Ice Blast ally."
      },
      "battle": {
        "name": "Tundra Archery",
        "description": "Strikes the enemy twice, each dealing [+190%Attack]Cold Damage, with an additional 20% chance of triggering a critical hit."
      },
      "ultimate": {
        "name": "Winter Hunter",
        "description": "Grants 20% Attack Up for 10.0s and 2 stacks of Ice Crystal to the hero and the Ice Blast ally with the highest Attack. Then strikes the enemy 3 times, each dealing [+260%Attack]Cold Damage, with an additional 20% chance of triggering a critical hit."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310307,
      310306,
      310305,
      310376,
      310375,
      310374,
      310373,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000143,
      8000076,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 22590,
    "name": "Vex",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Nimble Steps",
        "description": "Basic attacks have a 20.0% chance of inflicting Electrocuted for 8.0s."
      },
      "battle": {
        "name": "Illusion Trap",
        "description": "Attacks the current enemy twice, each dealing [+210%Attack]Lightning Damage. If the target has Electrocuted, the hero has a 40% chance of gaining 10.0 Ultimate Energy."
      },
      "ultimate": {
        "name": "Traceless Rat",
        "description": "Attacks an enemy 3 times, each dealing [+290%Attack]Lightning Damage. The final attack triggers 1 Lightning Chain."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310380,
      310379,
      310378,
      310377,
      310308,
      310307,
      310306,
      310305,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000145,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20850,
    "name": "Hirvolm",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "",
    "avg": 3.375,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Electric Induction",
        "description": "Each time a Lightning Chain triggers on the field, the hero gains 10.0 Ultimate Energy. This effect can only occur once every 3.0s."
      },
      "battle": {
        "name": "Lightning Impact",
        "description": "Deals [+320%Attack]Lightning Damage to enemies within range, with a 40.0% chance of inflicting Electrocuted for 8.0s."
      },
      "ultimate": {
        "name": "Thundrous Moment",
        "description": "Deals [+400%Attack]Lightning Damage to enemies within range, and triggers 1 Lightning Chain."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310380,
      310379,
      310378,
      310377,
      310308,
      310307,
      310306,
      310305,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000145,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20020,
    "name": "Zraacs",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Goblin",
    "career": "?",
    "captain": "",
    "avg": 3.375,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Joy of the Torturer",
        "description": "When the hero or their summoned units deal damage to enemies inflicted with Burn, they additionally inflict 10% Ignite on the targets."
      },
      "battle": {
        "name": "Arcane Grenade",
        "description": "Deals [+320%Attack]Fire Damage to enemies within range and inflicts 50% Ignite."
      },
      "ultimate": {
        "name": "Mystical Turret",
        "description": "Summons a turret at the target location for 25.0s. The turret will attack enemies within range periodically."
      }
    },
    "inspiration": [],
    "tj_team": [
      20140,
      23250,
      21280,
      20010
    ],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      311130,
      311129,
      311128,
      311127,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000162,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21180,
    "name": "Gerthin",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in dungeon battles.",
    "avg": 3.25,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Crystal Trigger",
        "description": "If the hero has Ice Crystal after casting a battle skill, consumes 1 stack of Ice Crystal and casts the skill again. Upon obtaining Ice Crystal, the hero gains 15% Crit Damage Up for 5.0s, up to 5 stacks."
      },
      "battle": {
        "name": "Heart of Frost",
        "description": "Strikes an enemy twice, each dealing [+290%Attack]Cold Damage. Then the hero gains 20% Crit Rate Up for 5.0s. Gains 1 stack of Ice Crystal immediately if the skill kills any enemy."
      },
      "ultimate": {
        "name": "Frozen Moment",
        "description": "Jumps toward an enemy, dealing [+780%Attack]Cold Damage and gaining 1 stack of Ice Crystal."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310304,
      310303,
      310302,
      310301,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000143,
      8000076,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21280,
    "name": "Lyle",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "avg": 3.25,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Fire Frenzy",
        "description": "For each enemy on the field inflicted with Burn, the hero gains 1 stack of 5% Attack Up, up to 10 stacks."
      },
      "battle": {
        "name": "Screaming Fire Spirit",
        "description": "Unleashes a Fireball that bounces between enemies up to 5 times. Each hit deals [+100%Attack]Fire Damage and inflicts 20% Ignite. The Fireball prioritizes bouncing to enemies not inflicted with Burn."
      },
      "ultimate": {
        "name": "Fire Booster",
        "description": "Deals [+550%Attack]Fire Damage to enemies within range. Triggers Blast once on enemies inflicted with Burn."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310384,
      310383,
      310382,
      310381,
      310304,
      310303,
      310302,
      310301,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000144,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21540,
    "name": "Manda",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Range",
    "race": "Gnome",
    "career": "?",
    "captain": "",
    "avg": 3.125,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Flanking Maneuver",
        "description": "The hero and the turrets will prioritize enemies that are not inflicted with Electrocuted. In addition, each time the hero and the turrets successfully inflict Electrocuted, each turret gains 1 stack of Attack Up, up to 10 stacks. A newly created turret will inherit all Attack Up stacks previously gained."
      },
      "battle": {
        "name": "Crystal Cannon",
        "description": "Summons a turret, which occupies one tile on the battlefield and has a certain amount of HP, with unlimited duration. It will attack enemies at regular intervals. There can be up to two turrets on the battlefield at the same time. When reaching max turrets upon casting this skill, heals all turrets on the field by [+50%Target's Max HP]."
      },
      "ultimate": {
        "name": "Overclock",
        "description": "Grants Attack Speed Up II and 15% Attack Up to all turrets for 10.0s. The chance of inflicting Electrocuted by the turrets' basic attacks is increased to 40% within the next 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310308,
      310307,
      310306,
      310305,
      310126,
      310125,
      310124,
      310123
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000065
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23270,
    "name": "Volthug",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s2",
    "type": "Melee",
    "race": "Orc",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Resistance by 40.0.",
    "avg": 1.875,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Lone Wanderer",
        "description": "For each buff on the hero, the hero gains extra 15.0 Accuracy and 15% Defense Up. This effect stacks up to 10 times."
      },
      "battle": {
        "name": "Indomitable Will",
        "description": "Gains Defense Up I for 5.0s and deals [+300%Defense]Lightning Damage to enemies within range. Meanwhile, gains a [+15%Max HP]shield for 10.0s."
      },
      "ultimate": {
        "name": "Who Dares Stop Me",
        "description": "Hammers 3 times at the target direction, each dealing [+250%Defense]Lightning Damage to enemies within range, with a 50% chance to dispel 1 buff from them. If enemies don't have any buff after 3 hammer strikes, the skill has a 75.0% chance to inflict Attack Penalty I and Accuracy Penalty II on them for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310328,
      310327,
      310326,
      310325,
      310392,
      310391,
      310390,
      310389,
      310130,
      310129,
      310128,
      310127
    ],
    "tj_sq": [
      8000103,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22380,
    "name": "Eirnin",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Forward Planning",
        "description": "Damage dealt to enemies inflicted with Burn is increased by 4% for each stack of Burn they possess."
      },
      "battle": {
        "name": "Surprise Raid",
        "description": "Fires a bullet that bounces between enemies up to 4 times. Each hit deals [+165%Attack]Fire Damage and inflicts 20% Ignite. Prioritizes bouncing to targets inflicted with Burn."
      },
      "ultimate": {
        "name": "Forceful Raid",
        "description": "Fires three waves of projectiles, each dealing [+200%Attack]Fire Damage to enemies within range. If a hit enemy is inflicted with Burn, deals [+125%Attack]Fire Damage to the target and surrounding enemies."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310384,
      310383,
      310382,
      310381,
      310304,
      310303,
      310302,
      310301,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000144,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        1
      ],
      [
        1,
        1,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22080,
    "name": "Nadja",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Ice Outburst",
        "description": "If the hero has Ice Crystals after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. When possessing 3 and above stacks of Ice Crystal, skills released will have additional effects."
      },
      "battle": {
        "name": "Piercing Icelance",
        "description": "Deals [+275%Attack]Cold Damage to an enemy, with every stack of Ice Crystal on the hero increasing the damage dealt by 10%. Additional Effect: Additionally deals [+4%Target's Max HP]Cold Damage (No more than 200% of the hero's Attack)"
      },
      "ultimate": {
        "name": "Ice Volley",
        "description": "Throws an Ice Lance at an enemy to deal [+600%Attack]Cold Damage to them and the nearby enemies. Upon hitting each enemy, the hero has a 30% chance to obtain 1 stack of Ice Crystal Additional Effect: The hero gains 15% Attack Up for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310304,
      310303,
      310302,
      310301,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000143,
      8000076,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 22260,
    "name": "Taldie",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Shadow",
    "season": "s3",
    "type": "Range",
    "race": "The Unstill",
    "career": "?",
    "captain": "Increases all allies' Defense by  in Grand Gladiator Arena battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Ally of Darkness",
        "description": "When gaining Shadow Energy, grants  of the obtained energy to another Shadow ally."
      },
      "battle": {
        "name": "Envoy of Nightfall",
        "description": "Casts the spell  times. Each time gains  Shadow Energy."
      },
      "ultimate": {
        "name": "Tide of Shadow",
        "description": "Strikes enemies within range 3 times, with each strike dealing , granting all Shadow allies  Shadow Energy."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310307,
      310306,
      310305,
      310376,
      310375,
      310374,
      310373,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000106,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        1,
        0,
        1
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21830,
    "name": "Dargo",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Corrosion",
    "season": "s3",
    "type": "Range",
    "race": "Swamp Lizardfolk",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .",
    "avg": 3.75,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Silent Affliction",
        "description": "When attacking enemies whose current Corrosion is less than  of their Max HP, Corrosion Intensity is increased by ."
      },
      "battle": {
        "name": "Exotic Venom",
        "description": "Deals  to the enemy with the highest Corrosion."
      },
      "ultimate": {
        "name": "Medicine Test",
        "description": "Summons 5 orbs to strike random enemies in turn. (Enemies without Corrosion will be attacked first.) Each strike deals  to them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310308,
      310307,
      310306,
      310305,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000066
    ],
    "tf": [
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22820,
    "name": "Theohein",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Gnome",
    "career": "?",
    "captain": "Increases all allies' Attack by  in Grand Gladiator Arena battles.",
    "avg": 3.625,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "High Purity Extraction",
        "description": "When using a basic attack, the hero can consume  Aura Energy to deal an additional ."
      },
      "battle": {
        "name": "Small-scale Testing",
        "description": "Gains  Aura Energy and attacks enemies within range three times, dealing  each time."
      },
      "ultimate": {
        "name": "Formal Bombing",
        "description": "Gains  Aura Energy and deals  to enemies within range. If Aura Energy is above 50, consumes  Aura Energy to deal an additional ."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310966,
      310965,
      310964,
      310963,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000158,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        1,
        1,
        1
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21990,
    "name": "Chitter",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Shadow",
    "season": "s3",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by  in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Heart of Treachery",
        "description": "Deals additional  whenever the hero's skill deals damage to enemies."
      },
      "battle": {
        "name": "Nickel and Dime",
        "description": "Deals  to enemies within range and ignores  of the enemies' Defense when the skill hits  enemies and more, then gains  Shadow Energy."
      },
      "ultimate": {
        "name": "Merciless",
        "description": "Strikes enemies within range 3 times, with each strike dealing ."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000159,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        1,
        1
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21190,
    "name": "Careth",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases Crit Damage for all allies by  in Fey Meander and Trial Breakthrough battles.",
    "avg": 3.375,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Mark of Courage",
        "description": "When any ally Aura hero has over 50 Aura Energy, the hero grants  to them."
      },
      "battle": {
        "name": "Fearless",
        "description": "Gains  Aura Energy, dealing  to enemies within range."
      },
      "ultimate": {
        "name": "Ancestral Power",
        "description": "Grants  Aura Energy to all Aura allies. Then deals  to enemies within range with a 100% chance of inflicting  for s. Consumes all of the hero's Aura Energy, extending the duration of  by s for every  Aura Energy."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310966,
      310965,
      310964,
      310963,
      310376,
      310375,
      310374,
      310373,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000106,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        0,
        0
      ]
    ]
  },
  {
    "id": 20880,
    "name": "Narzilla",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by  in all battles.",
    "avg": 3.375,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Sing Your Heart Out",
        "description": "For each buff on the hero, the hero gains  Damage Up, up to  stacks."
      },
      "battle": {
        "name": "Lightbreaker Arrow",
        "description": "Gains  Aura Energy and deals  to the enemy. If Aura Energy is above 50, consumes  Aura Energy to extend the duration of all of the hero's current buffs by s."
      },
      "ultimate": {
        "name": "Archery Show",
        "description": "Gains  Aura Energy and  for s, and deals  to the enemy. For the next s, whenever an Aura ally attacks, the hero performs a coordinated attack, dealing . This effect can only trigger once every s. Each coordinated attack can consume  Aura Energy to deal an additional ."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310966,
      310965,
      310964,
      310963,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000158,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 21510,
    "name": "Gegnu",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Corrosion",
    "season": "s3",
    "type": "Melee",
    "race": "Deep Gnome",
    "career": "?",
    "captain": "",
    "avg": 3.25,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Fatal Curse",
        "description": "When surrounding enemies take Poison Damage from Corrosion heroes, Corrosion Intensity is increased by ."
      },
      "battle": {
        "name": "Spike Trap",
        "description": "Deals  to enemies within range."
      },
      "ultimate": {
        "name": "Battering Ram",
        "description": "Strikes enemies within range 3 times, with each strike dealing ."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000157,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21360,
    "name": "Tatoth",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Shadow",
    "season": "s3",
    "type": "Range",
    "race": "Goblin",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .",
    "avg": 3.25,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Malicious Joy",
        "description": "Each enemy defeated restores the hero's Shadow Energy by ."
      },
      "battle": {
        "name": "Bouncing Bomb",
        "description": "Fires an orb that can bounce up to  times between enemies. Each hit deals  and grants  Shadow Energy."
      },
      "ultimate": {
        "name": "Spikeball Mayhem",
        "description": "Strikes enemies within range over time, with each strike consuming  Shadow Energy and dealing  to them. During a single cast of this skill, each strike increases the damage of the subsequent strike by , up to  times."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000159,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21590,
    "name": "Gragrir",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Corrosion",
    "season": "s3",
    "type": "Melee",
    "race": "Orc",
    "career": "?",
    "captain": "",
    "avg": 3.125,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Crazy Bravery",
        "description": "When an enemy with Corrosion dies, the hero gains  for s and restores  Ultimate Energy. (The effect triggers once every s.)"
      },
      "battle": {
        "name": "Affliction Slash",
        "description": "Strikes an enemy twice, each dealing ."
      },
      "ultimate": {
        "name": "Eradication",
        "description": "Deals  to enemies within range. Then consumes the target's  Corrosion to deal ."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1
      ]
    ]
  },
  {
    "id": 20910,
    "name": "Nessa",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by  in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 1,
      "ancient_battlefield": 3,
      "arena": 1,
      "turret": "-",
      "grave_of_venom": 1,
      "grave_of_curse": 5,
      "grave_of_rot": 5
    },
    "skills": {
      "passive": {
        "name": "Leverage",
        "description": "When the hero's skill deals damage to enemies with debuffs, reduces their Ultimate Energy by ."
      },
      "battle": {
        "name": "Twilight Strike",
        "description": "Throws a dagger, inflicting  on the enemy for s, then rushes to the target and slashes them to deal ."
      },
      "ultimate": {
        "name": "Glaring Steps",
        "description": "Flashes to the target and slashes at them twice. The first slash deals  to the target, with a  chance of inflicting  for s. The second slash deals , with a  chance of inflicting  for s. Finally, returns to the hero's original location."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310352,
      310351,
      310350,
      310349,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 20150,
    "name": "Araces",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s4",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "avg": 3.375,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Last Lineage",
        "description": "When the hero deals damage to the enemy with a basic attack, there is a 30.0% chance of inflicting the enemy with 1 stack of Burn for 10.0s."
      },
      "battle": {
        "name": "Fire Shell",
        "description": "Gains a [+250%Attack] shield for 5.0s. Then deals [+60%Attack]fire damage to enemies around the hero every 0.8s for 4.0s."
      },
      "ultimate": {
        "name": "Flame Domain",
        "description": "Deals [+475%Attack]fire damage to enemies within range. If the targets are under Burn, dispels all Burn from them. Every stack of Burn dispelled deals additional [+220%Attack]fire damage to them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22840,
    "name": "Baelvernal",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Merfolk",
    "career": "?",
    "captain": "",
    "avg": 3.375,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 4,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Smoke and Mirrors",
        "description": "When an ally takes damage, there is a 10% chance of converting 20% of their damage taken into healing. When an enemy receives healing, there is a 10% chance of converting 20% of their healing received into damage."
      },
      "battle": {
        "name": "Woozy Dizzy",
        "description": "Fires an orb that can bounce up to 6 times between enemies, dealing [+160%Attack]Necrotic damage each time, with a 20.0% chance of inflicting Stunned for 3.0s."
      },
      "ultimate": {
        "name": "Come On Strong",
        "description": "Strikes enemies within range 3 times, each dealing [+220%Attack]Necrotic damage, with a 50% chance of reducing their Ultimate Energy by 10.0."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310978,
      310977,
      310976,
      310975,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000138
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 21850,
    "name": "Kyrza",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Swamp Lizardfolk",
    "career": "?",
    "captain": "",
    "avg": 3.125,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Turn the Tides",
        "description": "The hero gains 10.0 Ultimate Energy whenever an ally is inflicted with a debuff. This skill only takes effect once every 5.0s."
      },
      "battle": {
        "name": "Violent Breakthrough",
        "description": "Deals [+310%Attack]Necrotic damage to the enemies around the hero and has a 75.0% chance of inflicting Healing Prohibition on them for 5.0s."
      },
      "ultimate": {
        "name": "Greedy Plunder",
        "description": "Strikes the enemy 3 times, each dealing [+300%Attack]Necrotic damage, with a 50.0% chance of inflicting Recharging Speed Penalty on them for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 21440,
    "name": "Seidic",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Ice Blast",
    "season": "s4",
    "type": "Range",
    "race": "Gnome",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Energy Canister",
        "description": "If the hero has Ice Crystals after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. The hero's skill has a 50% chance of ignoring 30% enemy Defense."
      },
      "battle": {
        "name": "Magic Crystal Arrow",
        "description": "Strikes the enemy 3 times, each dealing [+50%Attack]cold damage, and inflicting Crit Damage Up for 3.0s, up to 5 stacks. Each cast of this skill increases damage by 10%, up to 5 stacks."
      },
      "ultimate": {
        "name": "Mineral Survey",
        "description": "Deals [+720%Attack]cold damage to enemies within range, with a 75% chance of gaining 1 stack of Ice Crystal."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      311058,
      311057,
      311056,
      311055,
      310982,
      310981,
      310980,
      310979,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000143,
      8000076,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 21900,
    "name": "Pargu",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "",
    "avg": 1.75,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 1,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Aura Suppression",
        "description": "When using skills to deal damage to a target inflicted with any debuff, reduces the duration of a random buff on them by 2.0s."
      },
      "battle": {
        "name": "Frozen Roar",
        "description": "Deals [+400%Attack]cold damage to the enemy, with a 100.0% chance to inflict Frozen for 3.0s. Prioritizes attacks on the enemy with the most debuffs."
      },
      "ultimate": {
        "name": "Crippled Morale",
        "description": "Deals [+300%Attack]cold damage to the target 3 times, with a 50.0% chance to inflict the target with 3 debuffs randomly selected from the following for 10.0s: Attack Penalty II, Recharging Speed Penalty, Healing Prohibition, Accuracy Penalty II, Buff Prohibition."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310978,
      310977,
      310976,
      310975,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21350,
    "name": "Ghellid",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Goblin",
    "career": "?",
    "captain": "Increases Accuracy for all allies by 40.0 in Fey Meander and Trial Breakthrough battles.",
    "avg": 1.375,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 2,
      "heretical_ruins": 1,
      "ancient_battlefield": 1,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Special Poisonous Herb",
        "description": "Basic attacks trigger Toxic Blast on the enemy, dealing [+50%Attack]poison damage to surrounding enemies within range, with a 50.0% chance of inflicting Accuracy Penalty I for 5.0s."
      },
      "battle": {
        "name": "Dizzy Spell",
        "description": "Deals [+400%Attack]poison damage to the enemy and has a 75.0% chance of inflicting Stunned on them for 3.0s, with a 100.0% chance to Knock Back the target for 1 tile."
      },
      "ultimate": {
        "name": "Seeing Stars",
        "description": "Deals [+720%Attack]poison damage to enemies within range and has a 75.0% chance of inflicting Stunned on them for 5.0s, with a 100.0% chance to Knock Back the target for 3 tiles."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22140,
    "name": "Ashqar",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Tiger Roar",
        "description": "When attempting to inflict debuffs or control effects on the enemies yet the effects are resisted or invalidated, gains [+15%Max HP] healing, with a 100.0% chance to inflict Fear on nearby enemies for 3.0s. This skill only takes effect once every 10.0s."
      },
      "battle": {
        "name": "Searing Heat",
        "description": "Deals [+300%Attack]fire damage to the target and nearby enemies, with a 75.0% chance to inflict Recharging Speed Penalty on them for 5.0s. After dealing damage, if the enemies' HP is lower than 60%, additionally reduces their Ultimate Energy by 20.0."
      },
      "ultimate": {
        "name": "Intrepid Charge",
        "description": "Deals [+600%Attack][+10%Max HP]fire damage to enemies within range, with a 75.0% chance to inflict Taunt on them for 5.0s. When successfully inflicting Taunt on them, there is a 100.0% chance to inflict Attack Penalty II on them for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310970,
      310969,
      310968,
      310967,
      310352,
      310351,
      310350,
      310349,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000162,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22100,
    "name": "Balsaazer",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Thunderbolt",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Chain Reaction",
        "description": "Basic attacks have a 10% chance of triggering Lightning Chain. This chance is increased by 5% for each enemy on the field affected by Electrocuted. (Can only trigger once every 10s.)"
      },
      "battle": {
        "name": "Glory of the Guard",
        "description": "Gains Attack Speed Up I and 20% Enlightenment Up for 10.0s."
      },
      "ultimate": {
        "name": "Impious Punishment",
        "description": "Deals [+700%Attack]lightning damage to targets within range and inflicts Electrocuted."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310962,
      310961,
      310960,
      310959,
      311058,
      311057,
      311056,
      311055,
      310122,
      310121,
      310120,
      310119
    ],
    "tj_sq": [
      8000162,
      8000082,
      8000065
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ]
    ]
  },
  {
    "id": 22160,
    "name": "Cervinia",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Shadowmeld",
        "description": "When taking damage exceeding 10% of Max HP, gains Invisibility and Recovery Over Time for 10.0s."
      },
      "battle": {
        "name": "Shadow Leap",
        "description": "Jumps to the area with the most enemies, dealing [+300%Attack]lightning damage to enemies within range with a 75.0% chance of inflicting Thunder's Breath for 5.0s."
      },
      "ultimate": {
        "name": "Shadow's Pursuit",
        "description": "Deals [+200%Attack]lightning damage to enemies within range 3 times, with a 50.0% chance of inflicting Thunder's Breath for 8.0s. If the target is already affected by Thunder's Breath, there is a 100.0% chance of inflicting Recharge Down for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310970,
      310969,
      310968,
      310967,
      310352,
      310351,
      310350,
      310349,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000169,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21530,
    "name": "Deeno",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Toxin",
    "season": "s4",
    "type": "Range",
    "race": "Gnome",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by 36.0 in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Poisoned Arrow",
        "description": "Basic attacks have a 60.0% chance to inflict Toxin for 15.0s."
      },
      "battle": {
        "name": "Arrow Chain",
        "description": "Shoots 3 arrows at the current enemy, each dealing [+120%Attack]poison damage to them, with a 75.0% chance to inflict Toxin for 15.0s."
      },
      "ultimate": {
        "name": "One by One",
        "description": "Shoots 1 arrow at the current target and enemies with Toxin, dealing [+500%Attack]poison damage to them. For every stack of Toxin on them, the hero additionally deals [+20%Attack]Derivative to them. After that, grants the hero Attack Speed Up II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310324,
      310323,
      310322,
      310321,
      310978,
      310977,
      310976,
      310975,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000165,
      8000134,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22520,
    "name": "Dielke",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s4",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Marksman",
        "description": "Basic attacks have a  chance of dealing [+0%Attack]radiant damage to enemies within range"
      },
      "battle": {
        "name": "Arrow's Gleam",
        "description": "Deals [+300%Attack]radiant damage to the target. If this attack is a critical hit, the hero gains 1 stack of Rally"
      },
      "ultimate": {
        "name": "Hawkeye Hunt",
        "description": "Deals [+150%Attack]radiant damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Inflicts 25% Damage Resistance Penalty on all enemies. [2] The next basic attack is guaranteed to trigger the passive skill. [3] For the next 5s, damage from the passive skill is increased by 50%."
      }
    },
    "inspiration": [
      {
        "id": 7200005,
        "show_name": "Inspiration 1",
        "spell_tips": "The hero takes 20% less crit damage."
      },
      {
        "id": 7210002,
        "show_name": "Inspiration 2",
        "spell_tips": "Increases the chance of the passive skill effect by 15%."
      },
      {
        "id": 7220002,
        "show_name": "Inspiration 3",
        "spell_tips": "Gains 30.0 extra Skill Haste."
      },
      {
        "id": 7230004,
        "show_name": "Inspiration 4",
        "spell_tips": "Gains 50.0 extra Resistance."
      },
      {
        "id": 7240000,
        "show_name": "Inspiration 5",
        "spell_tips": "Reduces the battle skill's initial recharge time by 3s."
      }
    ],
    "tj_team": [],
    "tj_eq": [
      310962,
      310961,
      310960,
      310959,
      311058,
      311057,
      311056,
      311055,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000120,
      8000079,
      8000060
    ],
    "tf": [
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21340,
    "name": "Mera",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s4",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Phantom Evocation",
        "description": "Summons a Phantom Eater to assist in the battle as the battle starts. The hero takes on 25% damage for the Phantom Eater. And when the hero gains a buff, the Phantom Eater also gains the same buff."
      },
      "battle": {
        "name": "Shadow Onslaught",
        "description": "Commands the Phantom Eater to attack the enemy with the highest Attack, dealing [+360%Attack]Necrotic damage to them and nearby enemies. Afterwards, the Phantom Eater will choose this enemy as the target to attack. If the Phantom Eater is dead, deals [+360%Attack]Necrotic damage to the enemy with the highest Attack."
      },
      "ultimate": {
        "name": "Moonlit Howl",
        "description": "Grants 20% Attack Up to the hero for 10.0s. Deals [+350%Attack]Necrotic damage to the enemy with the highest Attack, with the damage ignoring 30% of the enemy's Defense. The hero commands the Phantom Eater to deal [+350%Attack]Necrotic damage to the current enemy which ignores 30% of the enemy's Defense. If the Phantom Eater is dead, the hero summons another Phantom Eater at the enemy's location and gains 30.0 Ultimate Energy."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      311058,
      311057,
      311056,
      311055,
      310982,
      310981,
      310980,
      310979,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000095,
      8000181,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23510,
    "name": "Molothorn",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Clever Ploy",
        "description": "When an ally loses a buff, has a 100.0% chance of granting them Defense Up I. Can only trigger once every 15s per target."
      },
      "battle": {
        "name": "Leader Hunt",
        "description": "Deals [+300%Attack]cold damage to the enemy with the highest Ultimate Energy and inflicts Accuracy Penalty II for 10s"
      },
      "ultimate": {
        "name": "Temporary Alliance",
        "description": "Slashes forward with a blade wave 3 tiles wide, dealing [+700%Attack]cold damage, while granting all allies a [+10%Target's Max HP] Shield and 50% Ultimate Down Resistance. Each enemy hit grants a thicker shield, and the duration of the 50% Ultimate Down Resistance effect is extended (up to 3 targets counted)."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310982,
      310981,
      310980,
      310979,
      310970,
      310969,
      310968,
      310967,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000127,
      8000086,
      8000138
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22850,
    "name": "Pearl",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Merfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Lucubration",
        "description": "When any ally takes an AOE Damage, dispels 1 debuff from all allies. This skill only takes effect once every 5.0s."
      },
      "battle": {
        "name": "Neurotoxin",
        "description": "Deals [+400%Attack]poison damage to the target, with a 50.0% chance to inflict Silence on them for 7.5s."
      },
      "ultimate": {
        "name": "Seaweed Extract",
        "description": "Deals [+715%Attack]poison damage to enemies within range, with a 100% chance to dispel 1 buff from them. The hero also has a 75.0% chance to inflict Healing Prohibition and Buff Prohibition on them for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310978,
      310977,
      310976,
      310975,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22540,
    "name": "Tarulla",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Another Mug",
        "description": "When successfully dispelling any debuff, heals the ally with the currently lowest percentage of HP by [+10%Target's Max HP][+1200%Enlightenment]."
      },
      "battle": {
        "name": "Fluttering Peplum",
        "description": "Deals [+320%Attack]radiant damage to enemies within range, with a 50% chance to dispel 1 buff from them."
      },
      "ultimate": {
        "name": "Elegant Steps",
        "description": "Dispels all debuffs from the ally with the highest Attack, and grants them Debuff Immunity and Control Immunity for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22720,
    "name": "Thalorian",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s4",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 24%.",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Dual Wielding",
        "description": "Basic attacks have a 20% chance to trigger a double hit, and every extra 1% Attack Speed will increase the trigger chance by 0%. The total trigger chance is capped at 50%."
      },
      "battle": {
        "name": "Lightning Speed",
        "description": "Strikes an enemy twice, each dealing [+220%Attack]lightning damage. This skill is regarded as a basic attack. Meanwhile, grants Attack Speed Up I to all Dauntless allies for 5.0s."
      },
      "ultimate": {
        "name": "Thunderbolt Followup",
        "description": "Strikes an enemy 4 times, each dealing [+210%Attack]lightning damage. This skill is regarded as a basic attack. The subsequent 5 times of basic attacks are guaranteed to trigger double hits."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22920,
    "name": "Varathas",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s4",
    "type": "Melee",
    "race": "Werewolf",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Fiery Smoke",
        "description": "When an enemy is inflicted with Burn, the hero has a 20% chance of dealing [+200%Attack]fire damage to surrounding enemies."
      },
      "battle": {
        "name": "Loyal Claw",
        "description": "Deals [+240%Attack]fire damage to enemies within range and inflicts 20% Ignite."
      },
      "ultimate": {
        "name": "Focused Strike",
        "description": "Enhances the hero. For the next 10s, skills additionally inflict 10% Ignite and deals [+700%Attack]fire damage to enemies within range."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      311058,
      311057,
      311056,
      311055,
      310352,
      310351,
      310350,
      310349,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000144,
      8000079,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21610,
    "name": "Fihrah",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s6",
    "type": "Range",
    "race": "Orc",
    "career": "?",
    "captain": "Increases all allies' Resistance by 30.0 in all battles.",
    "avg": 2.625,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 5,
      "arena": 1,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 5,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Armor-clad",
        "description": "For each debuff present on enemies on the battlefield, gains Resistance Up, up to 10 stacks. Each time the hero successfully inflicts a debuff on an enemy, gains Permanent Resistance Up for this battle, up to 10 stacks."
      },
      "battle": {
        "name": "All In",
        "description": "Deals [+350%Attack]fire damage to the enemy. If the enemy does not have any buff, there is a 75.0% chance of inflicting Buff Prohibition on them for 5.0s."
      },
      "ultimate": {
        "name": "Wildfire",
        "description": "Deals [+650%Attack]fire damage to enemy targets within range, with a(n) 75% chance to remove 2 buff(s) from the target, and a(n) 75.0% chance to inflict Accuracy Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [
      23250,
      21800,
      21490,
      21260
    ],
    "tj_eq": [
      310352,
      310351,
      310350,
      310349,
      310356,
      310355,
      310354,
      310353,
      310138,
      310137,
      310136,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22390,
    "name": "Altair",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "?",
    "captain": "Increases all allies' Attack Speed by 18% in dungeon battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 5,
      "goblin_lair": 1,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 4,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Lightning Ambush",
        "description": "When dealing damage to enemies with HP below 50%, the hero gains Attack Speed Up II for 5.0s. This effect can only be triggered once every 4.0s."
      },
      "battle": {
        "name": "Enhanced Shots",
        "description": "Grants Extra Damage to allies in range for 8.0s. Allies with Extra Damage deal additional [+80%Attack]Lightning Damage with each basic attack."
      },
      "ultimate": {
        "name": "Lightning Blast",
        "description": "Shoots 3 crossbow bolts to the enemy, each dealing [+200%Attack]Lightning Damage. Every 1% extra Attack Speed gained by the hero grants 1% Damage Bonus to the skill."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000093,
      8000076,
      8000137
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20650,
    "name": "Sigrid",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 20.0 in all battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 5,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 4,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Hastened Demise",
        "description": "When an enemy inflicted with debuff dies, the hero gains 25.0 Ultimate Energy."
      },
      "battle": {
        "name": "Venom Arrow",
        "description": "Shoots two toxic arrows at the enemy, each dealing [+210%Attack]Poison Damage. This skill has a 75.0% chance of inflicting Healing Prohibition for 5.0s."
      },
      "ultimate": {
        "name": "Venomous Blast",
        "description": "Deals [+760%Attack]Poison Damage to an enemy and all enemies inflicted with debuffs with a 75.0% chance of inflicting Healing Prohibition and Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310306,
      310307,
      310305,
      310352,
      310350,
      310351,
      310349,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20180,
    "name": "Usha",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Max HP by 18% in dungeon battles.",
    "avg": 4,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 4,
      "heretical_ruins": 4,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Freezing Over",
        "description": "Every 2nd basic attack at an enemy under Frost deals double damage."
      },
      "battle": {
        "name": "Glacial Stronghold",
        "description": "Gains a [+300%Attack] shield and Attack Speed Up II for 10.0s."
      },
      "ultimate": {
        "name": "Icebreaker Slash",
        "description": "Slashes forcefully twice, each dealing [+400%Attack]Cold Damage to enemies within range, with a 100.0% chance of inflicting Frost for 10.0s. This skill deals double damage to enemies inflicted with Frost."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000084,
      8000060
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20270,
    "name": "Dench",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 2,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 3.5,
      "arena": 2.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Malice",
        "description": "Every 3rd basic attack additionally deals [+240%Attack]Derivative to the enemy, with a 100.0% chance of inflicting 1 stack of Poison for 15.0s."
      },
      "battle": {
        "name": "Poison Blast",
        "description": "Fires an orb, dealing [+240%Attack]Poison Damage to enemies within range, with a 50.0% chance of inflicting 1 stack(s) of Poison for 15.0s."
      },
      "ultimate": {
        "name": "Poison Mist",
        "description": "Sprays poisonous mist to the area for 4.0s, dealing [+80%Attack][+400%Enlightenment]Derivative to enemies within range every 0.8s, with an 80.0% chance of inflicting 1 stack of Poison for 15.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310324,
      310322,
      310323,
      310321,
      310352,
      310350,
      310351,
      310349,
      310118,
      310116,
      310117,
      310115
    ],
    "tj_sq": [
      8000119,
      8000134,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21810,
    "name": "Eleuia",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "Increases all allies' Attack Speed by 12% in all battles.",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 3.5,
      "goblin_lair": 2.5,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "To Work!",
        "description": "Every 5 basic attack(s) summons a Spirit that lasts 15.0s."
      },
      "battle": {
        "name": "No Delay!",
        "description": "Deals [+330%Attack]Necrotic Damage to up to 3 random enemies. This skill is considered a basic attack."
      },
      "ultimate": {
        "name": "No Rest for the Undead",
        "description": "Grants Attack Speed Up II and 20% Attack Up to all allies' undead summoned units for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000095,
      8000084,
      8000137
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20260,
    "name": "Enna",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 2,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Tree's Protection",
        "description": "Restores [+15%Max HP] when taking damage that exceeds 25% of the hero's Max HP. This effect can only be triggered once every 10.0s."
      },
      "battle": {
        "name": "Leaf's Aid",
        "description": "Grants Hit Recovery to an ally for 10.0s."
      },
      "ultimate": {
        "name": "Flower's Solace",
        "description": "Dispels 1 debuff from each ally."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000101,
      8000087,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20480,
    "name": "Irina",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 2.5,
      "goblin_lair": 2,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Heart of Protector",
        "description": "When the hero deals damage to enemies by skills, grants a [+10%Target's Max HP] shield to the nearest ally for 10.0s. This effect can only be triggered once every 1.0s."
      },
      "battle": {
        "name": "Lightning Chain",
        "description": "Unleashes Lightning Chain, dealing [+360%Attack]Lightning Damage to enemies hit. Lightning Chain can bounce among enemies up to 3 times."
      },
      "ultimate": {
        "name": "Lightning Storm",
        "description": "Deals [+710%Attack]Lightning Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty I for 6.0s and a 75% chance of dispelling 1 buff from them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20310,
    "name": "Wellby",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "",
    "avg": 3.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 5,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Harmony Brings Wealth",
        "description": "When gaining Rally, gains 15% Attack Up for 5.0s."
      },
      "battle": {
        "name": "Pay Up Now",
        "description": "Deals [+300%Attack]Radiant Damage to the target, with a 50.0% chance of granting 1 stack of Rally to a random ally."
      },
      "ultimate": {
        "name": "Fair or Foul",
        "description": "Deals [+660%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 10%. [2] Recharges Ultimate Energy by 30.0. [3] Increases the Ultimate Energy gain to 50.0."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 22190,
    "name": "Fitz",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 2,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Masochist",
        "description": "Damage taken decreases with each debuff on the hero."
      },
      "battle": {
        "name": "Optimism",
        "description": "Randomly dispels 1 debuff from the hero."
      },
      "ultimate": {
        "name": "Glutton for Punishment",
        "description": "Gains [+10%Max HP] and transfers all allies' debuffs to the hero. Each successful transfer grants additional healing."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310328,
      310326,
      310327,
      310325,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000187,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20580,
    "name": "Grover",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 20.0 in all battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 4,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Hide and Seek",
        "description": "Enters Invisibility for 10.0s if the hero's Current HP falls below 35% when attacked. This effect can only be triggered once every 5.0s."
      },
      "battle": {
        "name": "Cunning Swordplay",
        "description": "Strikes an enemy two times, dealing [+135%Attack]Lightning Damage each time, with a 15% chance of stealing 10.0 Ultimate Energy."
      },
      "ultimate": {
        "name": "Thieving Techniques",
        "description": "Flashes to an enemy and launches two attacks, each dealing [+370%Attack]Lightning Damage and stealing a random buff from them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21720,
    "name": "Gulal",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Frost Troll",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2.5,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Spirit Summoning",
        "description": "As the battle starts, summons a vulture for 30.0s."
      },
      "battle": {
        "name": "Shared Animosity",
        "description": "Calls the Vulture on the battlefield to attack an enemy along with the hero, dealing [+180%Attack]Cold Damage."
      },
      "ultimate": {
        "name": "Snow Mountain Hunter",
        "description": "Summons a vulture from the sky to strike the target area, dealing [+650%Attack]Cold Damage to enemies within range, with a 75.0% chance to inflict Attack Penalty I for 6.0s. The vulture will exist for 30.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21630,
    "name": "Gusni",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "?",
    "captain": "Increases all allies' HP by 12% in all battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2.5,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 2.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Unforgivable",
        "description": "Whenever an enemy is inflicted with Frozen, extends the duration of all debuffs on the enemy for 5.0s."
      },
      "battle": {
        "name": "Protection of Orc",
        "description": "Grants a [+10%Target's Max HP][+2000%Enlightenment] shield to the ally for 10.0s and grants Defense Up II for 5.0s."
      },
      "ultimate": {
        "name": "Grudge of Orc",
        "description": "Deals [+500%Attack][+3000%Enlightenment]Cold Damage to enemies within range, with a 50.0% chance of inflicting Frozen for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000083,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20780,
    "name": "Heksandra",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Enlightenment by 24.0 in all battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Whisper of Protection",
        "description": "When healing allies with HP below 40%, the amount of healing is increased by 30%."
      },
      "battle": {
        "name": "Whispered Blessing",
        "description": "Heals an ally by [+150%Attack][+1500%Enlightenment] and dispels 1 debuff from them."
      },
      "ultimate": {
        "name": "Silent Prayer",
        "description": "Heals allies within range by [+20%Target's Max HP]."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310134,
      310132,
      310133,
      310131
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23330,
    "name": "Letalis",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in dungeon battles.",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3.5,
      "ancient_battlefield": 3.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Trembling Voice",
        "description": "When the hero deals damage to an enemy, there is a 30.0% chance of inflicting the target with Attack Penalty I for 5.0s."
      },
      "battle": {
        "name": "Ringing Doom",
        "description": "Deals [+250%Attack]Poison Damage to an enemy and reduces 20.0 of their Ultimate Energy."
      },
      "ultimate": {
        "name": "Reaping Rhapsody",
        "description": "Deals [+720%Attack]Poison Damage to enemies within range, has a 75.0% chance of inflicting Healing Reduction to enemies above 50% HP for 10.0s and a 75.0% chance of inflicting Healing Prohibition on enemies below 50% HP for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21750,
    "name": "Loris",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 2.5,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Dragon's Ice Pick",
        "description": "When taking damage, has a 10.0% chance of inflicting Frozen on the attacker for 2.0s. This effect can only be triggered once every 5.0s."
      },
      "battle": {
        "name": "Dragon Scale Mail",
        "description": "Deals [+300%Attack][+150%Defense]Cold Damage to an enemy."
      },
      "ultimate": {
        "name": "Faith's Pilgrim",
        "description": "Has a 100.0% chance of Taunting the enemy for 5.0s and a 100.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20790,
    "name": "Meggan",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Sanctuary",
        "description": "When casting a skill on an ally, dispels 1 Defense Penalty from them."
      },
      "battle": {
        "name": "Brisk Pace",
        "description": "Heals an ally by [+10%Target's Max HP] and recharges their Ultimate Energy by 15.0."
      },
      "ultimate": {
        "name": "Shield of Darkness",
        "description": "Grants Defense Up I and Recovery Over Time to allies within range for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000101,
      8000087,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20960,
    "name": "Quarion",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Beneficence",
        "description": "When healing allies, gains a 20% chance of increasing the healing amount by 50%."
      },
      "battle": {
        "name": "Moon Crown",
        "description": "Grants a [+10%Target's Max HP] shield to the ally for 10.0s and grants Recovery Over Time for 10.0s."
      },
      "ultimate": {
        "name": "Crescent Protection",
        "description": "Heals allies within range by [+15%Target's Max HP]."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20710,
    "name": "Wilt",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3.5,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Frost Cantrips",
        "description": "When the hero successfully inflicts Frost on enemies, recharges Ultimate Energy by 10.0. This effect can only be triggered once every 5.0s."
      },
      "battle": {
        "name": "Icy Shot",
        "description": "Fires 3 ice lances at the enemy. Each lance deals [+100%Attack]Cold Damage with a 60.0% chance of inflicting Frost for 5.0s. Prioritizes attacks on enemies not under Frost."
      },
      "ultimate": {
        "name": "Freezing Wind",
        "description": "Deals [+550%Attack]Cold Damage to enemies within range, with a 30.0% chance of inflicting Frost for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000117,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21840,
    "name": "Yagnatz",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Swamp Lizardfolk",
    "career": "?",
    "captain": "",
    "avg": 3,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Mutant Thrust",
        "description": "Every 3rd basic attack deals extra [+50%Attack]Lightning Damage."
      },
      "battle": {
        "name": "Intimidation",
        "description": "Deals [+300%Attack]Lightning Damage to an enemy. This skill is considered a basic attack."
      },
      "ultimate": {
        "name": "Frenzied Slayer",
        "description": "Hurls three javelins, each dealing [+280%Attack]Lightning Damage to the target. This skill is considered a basic attack."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310312,
      310310,
      310311,
      310309,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000065
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23320,
    "name": "Altin",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "By My Oath!",
        "description": "When an ally's HP drops below 30% for the first time, grants the ally Ally Protection for 10.0s."
      },
      "battle": {
        "name": "Victory Is Mine!",
        "description": "Has a 100% chance of dispelling 1 debuff from the hero and the ally with the lowest Current HP."
      },
      "ultimate": {
        "name": "Behold My Might!",
        "description": "Deals [+600%Attack]Poison Damage to the enemy, with a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20680,
    "name": "Arlow",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 1.5,
      "goblin_lair": 2.5,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Radiant Splash",
        "description": "The hero's basic attacks also deal splash [+50%Attack]Radiant Damage to other enemies in the target enemy's proximity."
      },
      "battle": {
        "name": "Keen Edge",
        "description": "Charges toward the enemy with the lowest Current HP, dealing [+380%Attack]Radiant Damage."
      },
      "ultimate": {
        "name": "Rupturing Light",
        "description": "Launches a leap attack, dealing [+670%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 10%. [2] Ignores 20% of the enemy's Defense. [3] Increases the Defense ignored to 30%."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310312,
      310310,
      310311,
      310309,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000084,
      8000137
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21140,
    "name": "Berrik",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Max HP by 18% in dungeon battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2.5,
      "ancient_battlefield": 2.5,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Sturdiness",
        "description": "Has a 40% chance to reduce the damage taken by 50% when hit."
      },
      "battle": {
        "name": "Mighty Hammer Strike",
        "description": "Hits an enemy hard with a warhammer, dealing [+200%Attack][+200%Defense]Radiant Damage, with a 60.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Clan Protection",
        "description": "Gains Defense Up I and Recovery Over Time for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20860,
    "name": "Broll",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Call of the Open Sea",
        "description": "The hero additionally obtains 30% Crit Damage Up for 10.0s after gaining Rally."
      },
      "battle": {
        "name": "Shatter Strike",
        "description": "Deals [+350%Attack]Radiant Damage to the enemy, and ignores 30% of the enemy's Defense."
      },
      "ultimate": {
        "name": "Boarding Action",
        "description": "Deals [+600%Attack]Radiant Damage to enemies within range, recharging Ultimate Energy by 25.0 if any enemy is defeated by this skill. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] This damage guarantees a critical hit. [3] Increases the Ultimate Energy gain to 50.0."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20900,
    "name": "Caledo",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2.5,
      "goblin_lair": 1,
      "heretical_ruins": 2.5,
      "ancient_battlefield": 2.5,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Guardian Heart",
        "description": "Gains Defense Up I for 10.0s when casting a skill. When the skill takes effect on an ally with less than 60% HP, grants Defense Up I to the ally for 10.0s."
      },
      "battle": {
        "name": "Support",
        "description": "Grants Ally Protection to the ally with the lowest Current HP for 5.0s."
      },
      "ultimate": {
        "name": "Crescent Luster",
        "description": "Heals allies within range by [+10%Target's Max HP][+2200%Enlightenment]."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310360,
      310358,
      310359,
      310357,
      310352,
      310350,
      310351,
      310349,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000102,
      8000087,
      8000064
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21240,
    "name": "Dain",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' Defense by 18% in dungeon battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2.5,
      "ancient_battlefield": 2.5,
      "arena": 2.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Shared Glory",
        "description": "At the start of the battle, grants Defense Up that equals to 30% of the hero's Defense to the ally with the lowest HP within 1 tile."
      },
      "battle": {
        "name": "Quelling Hammer",
        "description": "Deals [+375%Attack]Radiant Damage to the enemy, with a 75.0% chance of inflicting Stunned for 3.0s."
      },
      "ultimate": {
        "name": "Stand United",
        "description": "Grants Ally Protection to the ally for 10.0s, then grants 30% Damage Reduction to this ally and nearby allies for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310328,
      310326,
      310327,
      310325,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21660,
    "name": "Dubok",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "?",
    "captain": "Increases all allies' Defense by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3.5,
      "arena": 2.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Rushed Rescue",
        "description": "When allies are inflicted with Control, recharges the hero's Ultimate Energy by 25.0. This effect can only be triggered once every 5.0s."
      },
      "battle": {
        "name": "Blinding Flare",
        "description": "Deals [+300%Attack]Fire Damage to the enemy, with a 50.0% chance of inflicting Stunned for 5.0s."
      },
      "ultimate": {
        "name": "Warming Fire",
        "description": "Grants a [+15%Max HP] shield to each ally within range for 10.0s and dispels all Control from them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000138
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20870,
    "name": "Evania",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Radiant Sunshine",
        "description": "When gaining Rally, the hero has a 75.0% chance of granting 1 stack of Rally to an ally."
      },
      "battle": {
        "name": "Standard Swordsmanship",
        "description": "Strikes the enemy twice, each hit dealing [+180%Attack]Radiant Damage, with a 30.0% chance of gaining 1 stack of Rally."
      },
      "ultimate": {
        "name": "Crescent Slash",
        "description": "Deals [+600%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 10%. [2] Further increases damage by 10%. [3] Further increases damage by 20%."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310306,
      310307,
      310305,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20050,
    "name": "Forbrit",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "?",
    "captain": "Increases all allies' HP by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 2.5,
      "ancient_battlefield": 2.5,
      "arena": 2.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Rugged Tenacity",
        "description": "When taking damage from an enemy inflicted with a debuff, reduces the damage taken by 30%."
      },
      "battle": {
        "name": "Rampage",
        "description": "Deals [+400%Attack]Cold Damage to the enemy with a 100.0% chance of Knocking Up the target."
      },
      "ultimate": {
        "name": "Blunt Strike",
        "description": "Stomps on the ground, dealing [+700%Attack]Cold Damage to enemies within range, with a 75.0% chance of inflicting Stunned for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22360,
    "name": "Gloin",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 4,
      "arena": 2.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Aerial Support",
        "description": "Grants a [+10%Max HP] Shield to an ally for 10.0s when they are under Control. This effect can only be triggered once every 10.0s."
      },
      "battle": {
        "name": "Precise Strike",
        "description": "Deals [+315%Attack]Fire Damage to enemies within range, with a 50.0% chance of inflicting Blind for 3.0s."
      },
      "ultimate": {
        "name": "Purifying Fire",
        "description": "Launches 3 blasts of flame, each dealing [+240%Attack]Fire Damage to enemies within range, with a 50% chance of dispelling 1 buff from them."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21940,
    "name": "Haug",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "Increases all allies' Attack Speed by 18% in dungeon battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Relentless Onslaught",
        "description": "Gains Attack Speed Up II for 15.0s whenever an enemy dies."
      },
      "battle": {
        "name": "Lightning Arrow",
        "description": "Throws 2 javelins at an enemy, each dealing [+185%Attack]Lightning Damage. This skill is considered a basic attack."
      },
      "ultimate": {
        "name": "Piercing Spear",
        "description": "Launches a lightning spear at an enemy, dealing [+680%Attack]Lightning Damage, with a 100.0% chance of inflicting Mark for 5.0s. During this period, basic attacks deal additional [+40%Attack]Lightning Damage."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310312,
      310310,
      310311,
      310309,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000118,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20340,
    "name": "Korth",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2.5,
      "goblin_lair": 2,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Shadow Enhanced",
        "description": "When allies summon undead creatures, grants the summoned unit 15% Attack Up for 6.0s."
      },
      "battle": {
        "name": "Shadow Servant",
        "description": "Summons a Spirit lasting 15.0s."
      },
      "ultimate": {
        "name": "Shadow Inspired",
        "description": "Throws a potion that grants Attack Speed Up II to all allied undead creatures within range for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000095,
      8000181,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20610,
    "name": "Livia",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 4,
      "ancient_battlefield": 4,
      "arena": 2.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Tactical Defense",
        "description": "As the battle starts, gains a [+20%Target's Max HP] shield that lasts for 10.0s."
      },
      "battle": {
        "name": "Breaking Free",
        "description": "Unleashes Tornado Slash and deals [+390%Attack]Fire Damage to enemies within range and gains Defense Up I for 5.0s."
      },
      "ultimate": {
        "name": "Clearing the Path",
        "description": "Deals [+400%Attack][+10%Max HP]Fire Damage to enemies within range with a 100% chance of dispelling 1 buff from them. Upon a successful dispelling, there is a 50.0% chance of inflicting Buff Prohibition for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20550,
    "name": "Mulier",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Strong Morale",
        "description": "When gaining Rally, gains 15% Attack Up for 10.0s."
      },
      "battle": {
        "name": "Wrath",
        "description": "Slashes an enemy with all strength, dealing [+300%Attack]Radiant Damage."
      },
      "ultimate": {
        "name": "Ring of Faith",
        "description": "Unleashes a ring slash, dealing [+500%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Deals additional [+200%Attack]Radiant Damage. [3] Deals additional [+200%Attack]Radiant Damage again."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000094,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20390,
    "name": "Nedda",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "?",
    "captain": "Increases all allies' Attack by 18% in dungeon battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Wild Swing",
        "description": "The hero's Wild dice roll result +1."
      },
      "battle": {
        "name": "Fireball",
        "description": "Launches a fireball dealing [+350%Attack]Fire Damage to the enemy."
      },
      "ultimate": {
        "name": "Sunburst",
        "description": "Hurls a massive fireball, dealing [+800%Attack]Fire Damage to the enemy."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000091,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21470,
    "name": "Rephe",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Gnome",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2.5,
      "ancient_battlefield": 2.5,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Secondary Damage",
        "description": "When the hero is dealing damage to enemies inflicted with Frozen, there is a 50% chance of reducing their Ultimate Energy by 10.0."
      },
      "battle": {
        "name": "Cold Iron Hammer",
        "description": "Deals [+380%Attack]Cold Damage to the enemy, with a 75.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "ultimate": {
        "name": "Frozen Bomb",
        "description": "Deals [+700%Attack]Cold Damage to enemies within range, with a 50.0% chance of inflicting Frozen for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21890,
    "name": "Tauricen",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 1,
      "grave_of_curse": 1,
      "grave_of_rot": 1
    },
    "skills": {
      "passive": {
        "name": "Raging Fury",
        "description": "Gains Attack Speed Up I for 10.0s as the battle starts."
      },
      "battle": {
        "name": "Wrathful Slash",
        "description": "Launches 2 attacks on an enemy, each dealing [+200%Attack]Lightning Damage. This skill is considered a basic attack."
      },
      "ultimate": {
        "name": "Impetuous Whirlwind",
        "description": "Deals [+695%Attack]Lightning Damage to surrounding enemies."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310312,
      310310,
      310311,
      310309,
      310304,
      310302,
      310303,
      310301,
      310122,
      310120,
      310121,
      310119
    ],
    "tj_sq": [
      8000093,
      8000084,
      8000137
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21040,
    "name": "Tioh",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Summon",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "Increases all allies' Attack by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2.5,
      "goblin_lair": 3,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 3,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Mourning",
        "description": "Upon an ally's death, summons a Corpse at their fallen position for 15.0s."
      },
      "battle": {
        "name": "Death and Decay",
        "description": "Deals [+300%Attack]Necrotic Damage to enemies within range and summons a Corpse for 15.0s."
      },
      "ultimate": {
        "name": "Sacrifice",
        "description": "Sacrifices all Corpses the hero summoned, and deals [+550%Attack]Necrotic Damage to enemies within range. The more Corpses that are sacrificed, the higher the damage."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23300,
    "name": "Uloar",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "?",
    "captain": "Increases all allies' Accuracy by 20.0 in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 1.5,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Life Conservation",
        "description": "Heals an ally by [+220%Attack] when the hero deals damage with their skills."
      },
      "battle": {
        "name": "Shadow Eclipse",
        "description": "Deals [+200%Attack]Necrotic Damage to the enemy, with a 100% chance of dispelling 1 buff from them."
      },
      "ultimate": {
        "name": "Creeping Shadows",
        "description": "Deals [+300%Attack]Necrotic Damage to enemies within range, with a 100.0% chance of inflicting Accuracy Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20560,
    "name": "Urzog",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Orc",
    "career": "?",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 3,
      "ancient_battlefield": 2.5,
      "arena": 1.5,
      "turret": "-",
      "grave_of_venom": 1,
      "grave_of_curse": 1,
      "grave_of_rot": 1
    },
    "skills": {
      "passive": {
        "name": "Killing Intent",
        "description": "When dealing damage to enemies under Frost, additionally deals [+20%Attack]Derivative."
      },
      "battle": {
        "name": "Battle Cry",
        "description": "Unleashes a battle cry, gaining 15% Attack Up for 5.0s."
      },
      "ultimate": {
        "name": "Raging Plunder",
        "description": "Launches a hammer strike, dealing [+670%Attack]Cold Damage to enemies within range, with a 50.0% chance of inflicting Frost for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22210,
    "name": "Vojeh",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2.5,
      "goblin_lair": 3.5,
      "heretical_ruins": 3,
      "ancient_battlefield": 3,
      "arena": 2.5,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Strength Absorption",
        "description": "When an enemy inflicted with Frost dies, the hero gains 40% Attack Up for 10.0s."
      },
      "battle": {
        "name": "Perfected Skill",
        "description": "Deals [+380%Attack]Cold Damage to an enemy."
      },
      "ultimate": {
        "name": "Spreading Cold",
        "description": "Deals [+680%Attack]Cold Damage to enemies within range, with a 100.0% chance of inflicting Frost for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000117,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 23340,
    "name": "Yamyra",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "Increases all allies' Defense by 12% in all battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2.5,
      "ancient_battlefield": 2.5,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Empty Rhetoric",
        "description": "All subsequent damage to the hero from the damage dealer will be reduced by 1% after taking damage. The effect can be stacked up to 20 stacks to the same target."
      },
      "battle": {
        "name": "Nullified Harm",
        "description": "Gains Defense Up I for 5.0s."
      },
      "ultimate": {
        "name": "Unruly Flame",
        "description": "Deals [+800%Attack]Fire Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22000,
    "name": "Zadie",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "?",
    "captain": "",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 4,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 4,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Defiance",
        "description": "Has a 100.0% chance of inflicting Attack Penalty I to an enemy for 5.0s when their buff wears off or is dispelled."
      },
      "battle": {
        "name": "Rupturing Flames",
        "description": "Deals [+330%Attack]Fire Damage to enemies within range, with a 50.0% chance of inflicting Accuracy Penalty II for 5.0s."
      },
      "ultimate": {
        "name": "Claw Suppression",
        "description": "Jumps at the enemy, dealing [+830%Attack]Fire Damage with a 75% chance of dispelling 1 buff from them. If the target has no buff, reduces their Ultimate Energy by 25.0."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21980,
    "name": "Zethos",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Valley Minotaur",
    "career": "?",
    "captain": "Increases all allies' Max HP by 18% in dungeon battles.",
    "avg": 2.5,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 3,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Lonely Heart",
        "description": "When target has Frost, increases the hero's basic attack damage by 50%."
      },
      "battle": {
        "name": "Solitary Patrol",
        "description": "Throws 2 ice lances at a random enemy, each dealing [+250%Attack]Cold Damage with a 75.0% chance of inflicting Frost for 5.0s."
      },
      "ultimate": {
        "name": "Explosive Resolve",
        "description": "For 10.0s after being cast, the hero throws ice lances as basic attack, each dealing [+250%Attack]Cold Damage with a 75.0% chance of inflicting Frost for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21380,
    "name": "Bronwyn",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "?",
    "captain": "",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 4,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Wrathful Admonishment",
        "description": "When an ally's Wild dice roll is ≥ 4, the hero's next basic attack damage is increased, dealing [+250%Attack]Fire Damage."
      },
      "battle": {
        "name": "Flaming Retribution",
        "description": "Deals [+360%Attack]Fire Damage to an enemy."
      },
      "ultimate": {
        "name": "Raging Wildfire",
        "description": "Deals [+750%Attack]Fire Damage to an enemy, ignoring the target's shield."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000091,
      8000084,
      8000061
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23310,
    "name": "Edgar",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 1,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Live in Shadows",
        "description": "When the hero has a shield, damage taken is reduced by 20%."
      },
      "battle": {
        "name": "Iron Guise",
        "description": "Gains a [+15%Max HP] shield for 10.0s."
      },
      "ultimate": {
        "name": "Hatred",
        "description": "Deals [+500%Attack][+10%Max HP]Necrotic Damage to all enemy targets within range, gaining a [+25%Max HP] shield and Defense Up I both for 10.0s. For each enemy hit by this skill, the hero gains 10% more shield."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310332,
      310330,
      310331,
      310329,
      310328,
      310326,
      310327,
      310325,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20500,
    "name": "Immeral",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "?",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Natural Instinct",
        "description": "Gains 20% Attack Up for 10.0s as the battle starts."
      },
      "battle": {
        "name": "Nature's Gift",
        "description": "Performs a mysterious elven dance and gains Attack Speed Up I for 10.0s."
      },
      "ultimate": {
        "name": "Agile Leap",
        "description": "Jumps to the target spot, dealing [+750%Attack]Lightning Damage to enemies within range."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310312,
      310310,
      310311,
      310309,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000093,
      8000084,
      8000137
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20460,
    "name": "Jijel",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Forest Troll",
    "career": "?",
    "captain": "",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Precise Defense",
        "description": "When using the battle skill on enemies under Healing Prohibition, reduces target's Ultimate Energy by 10.0."
      },
      "battle": {
        "name": "Rough Stab",
        "description": "Deals [+409%Attack]Poison Damage to the enemy, with a 100.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "ultimate": {
        "name": "Spear of Venom",
        "description": "Attacks the enemy 3 times, dealing [+300%Attack]Poison Damage. The third attack has a 75.0% chance of inflicting Healing Prohibition for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20090,
    "name": "Lorarii",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 2,
      "heretical_ruins": 2.5,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 4,
      "grave_of_curse": 4,
      "grave_of_rot": 4
    },
    "skills": {
      "passive": {
        "name": "Swoop In",
        "description": "When dealing damage to an enemy, each stack of Poison on them allows the damage to ignore 1% of the target's Defense."
      },
      "battle": {
        "name": "Poisoned Pike",
        "description": "Deals [+350%Attack]Poison Damage to the enemy, with a 75.0% chance of inflicting 2 stacks of Poison for 15.0s."
      },
      "ultimate": {
        "name": "Banishing Smite",
        "description": "Wields the pike to deal [+600%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting 3 stacks of Poison for 15.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310316,
      310314,
      310315,
      310313,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000119,
      8000086,
      8000062
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21110,
    "name": "Noteera",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 3,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Assassinator Technique",
        "description": "Approaches and assaults the target quickly when the target is far away. Gains 20% Damage Bonus against enemies under Poison."
      },
      "battle": {
        "name": "Shadow Poison Dart",
        "description": "Throws a poison dart at an enemy, with a 75.0% chance of inflicting 2 stack(s) of Poison for 10.0s."
      },
      "ultimate": {
        "name": "Abyssal Thrust",
        "description": "Charges toward the enemy's position, dealing [+60%Attack]Poison Damage 4 times. Killing the enemy with this skill will create a ranged explosion that deals 300[+240%Attack]Poison Damage to enemies within range, with a 100.0% chance of inflicting Poison for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310306,
      310307,
      310305,
      310316,
      310314,
      310315,
      310313,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20760,
    "name": "Thea",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Wild",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Wild Resonance",
        "description": "When an ally's Wild dice roll ≥4, the hero gains 3.0 Ultimate Energy."
      },
      "battle": {
        "name": "Sprint Strike",
        "description": "Charges into an enemy, dealing [+350%Attack]Fire Damage."
      },
      "ultimate": {
        "name": "Chain Slash",
        "description": "Gains 20% Attack Up for 10.0s, then strikes the target three times, each dealing [+280%Attack]Fire Damage."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310308,
      310306,
      310307,
      310305,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000091,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20510,
    "name": "Vethak",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "avg": 2,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 1,
      "grave_of_curse": 1,
      "grave_of_rot": 1
    },
    "skills": {
      "passive": {
        "name": "Swoop In",
        "description": "After dealing damage to enemies under Poison, gains 15% Attack Up for 5.0s."
      },
      "battle": {
        "name": "Pierce",
        "description": "Reaches out and pierces an enemy with the pike, dealing [+300%Attack]Poison Damage."
      },
      "ultimate": {
        "name": "Fierce Attack",
        "description": "Thrusts the pike forward 3 times, each dealing [+200%Attack]Poison Damage to enemies within range, with a 50.0% chance of inflicting 1 stack of Poison for 15.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310306,
      310307,
      310305,
      310304,
      310302,
      310303,
      310301,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21060,
    "name": "Adrie",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "?",
    "captain": "",
    "avg": 1.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1.5,
      "ancient_battlefield": 1.5,
      "arena": 1.5,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Disguise",
        "description": "Ignores 30% Resistance of the enemies inflicted with debuffs."
      },
      "battle": {
        "name": "Obstacle",
        "description": "Deals [+360%Attack]Necrotic Damage to an enemy."
      },
      "ultimate": {
        "name": "Ambush",
        "description": "Shoots 3 arrows at the enemy. Each deals [+280%Attack]Necrotic Damage and reduces their Ultimate Energy by 10.0, with a 75.0% chance of inflicting Recharging Speed Penalty for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20370,
    "name": "Awstin",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 1.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1.5,
      "ancient_battlefield": 1.5,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Perfect Timing",
        "description": "The hero gains Accuracy Bonus I for 5.0s when an enemy resists a debuff or Control inflicted by the hero."
      },
      "battle": {
        "name": "Chain Arrows",
        "description": "Fires 3 shots at an enemy, each dealing [+120%Attack]Radiant Damage, with a 25.0% chance of inflicting 1 debuff randomly selected from the following for 5.0s: Attack Penalty I, Healing Prohibition, and Accuracy Penalty I."
      },
      "ultimate": {
        "name": "Stun Arrows",
        "description": "Deals [+800%Attack]Radiant Damage to the enemy, with a 75.0% chance of inflicting Stunned for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000138
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21220,
    "name": "Dora",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "?",
    "captain": "",
    "avg": 1.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1.5,
      "ancient_battlefield": 1.5,
      "arena": 1.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Fine Tune",
        "description": "For each debuff on any enemy on the battlefield, the hero gains extra 10% Accuracy Up."
      },
      "battle": {
        "name": "Slowed Pace",
        "description": "Deals [+400%Attack]Lightning Damage to the enemy, with a 50.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "ultimate": {
        "name": "Focus On Work",
        "description": "Grants Accuracy Bonus II to allies within range for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000138
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21330,
    "name": "Fizzle",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Goblin",
    "career": "?",
    "captain": "",
    "avg": 1.5,
    "ratings": {
      "temporal_vortex": 1.5,
      "goblin_lair": 1.5,
      "heretical_ruins": 2,
      "ancient_battlefield": 1.5,
      "arena": 3,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Electric Shield",
        "description": "Reduces damage taken by 40% when taking damage that exceeds 35% of Max HP."
      },
      "battle": {
        "name": "Tingly Strike",
        "description": "Deals [+150%Attack][+250%Defense]Lightning Damage to the enemy, with a 50.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "ultimate": {
        "name": "Electrical Charge",
        "description": "Releases a lightning chain that bounces between enemies, each hit dealing [+300%Attack][+500%Defense]Lightning Damage with a 40.0% chance of inflicting Stunned for 3.0s. Lightning chain bounces up to 3 times."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000067
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21550,
    "name": "Gerana",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Gnome",
    "career": "?",
    "captain": "Increases all allies' Defense by 18% in dungeon battles.",
    "avg": 1.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1.5,
      "ancient_battlefield": 3,
      "arena": 1.5,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 4,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Electrostatic Touch",
        "description": "Every 3rd basic attack dispels 1 buff on the target."
      },
      "battle": {
        "name": "Weak Electric Field",
        "description": "Deals [+260%Attack]Lightning Damage to enemies within range, with a 75.0% chance of inflicting Accuracy Penalty I for 5.0s."
      },
      "ultimate": {
        "name": "Deflecting Force",
        "description": "Grants a [+12%Max HP] shield to each ally within range for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310352,
      310350,
      310351,
      310349,
      310360,
      310358,
      310359,
      310357,
      310138,
      310136,
      310137,
      310135
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000065
    ],
    "tf": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 23350,
    "name": "Sallyanne",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Max HP by 18% in dungeon battles.",
    "avg": 1.5,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1.5,
      "ancient_battlefield": 1.5,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Tenacity",
        "description": "Gains a [+50%Max HP] shield for 5.0s when HP drops below 25% for the first time, and gains Defense Up I and 30% Damage Reduction for 10.0s."
      },
      "battle": {
        "name": "Silent Guard",
        "description": "Has a 100% chance of dispelling 1 debuff from the hero. Upon successful dispelling, the hero gains a [+20%Max HP] Shield."
      },
      "ultimate": {
        "name": "Mind Your Manners",
        "description": "Deals [+740%Attack]Lightning Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty I for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310336,
      310334,
      310335,
      310333,
      310332,
      310330,
      310331,
      310329,
      310130,
      310128,
      310129,
      310127
    ],
    "tj_sq": [
      8000103,
      8000088,
      8000063
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 20100,
    "name": "Hector",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "Increases all allies' Attack Speed by 12% in all battles.",
    "avg": 1,
    "ratings": {
      "temporal_vortex": 1.5,
      "goblin_lair": 1,
      "heretical_ruins": 1,
      "ancient_battlefield": 1.5,
      "arena": 1,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Fighting Spirit",
        "description": "Gains Attack Speed Up I for 10.0s as the battle starts."
      },
      "battle": {
        "name": "Impaling Attack",
        "description": "Deals [+300%Attack]Cold Damage to an enemy."
      },
      "ultimate": {
        "name": "Cleave",
        "description": "Deals [+600%Attack]Cold Damage to enemies within range."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310304,
      310302,
      310303,
      310301,
      310312,
      310310,
      310311,
      310309,
      310114,
      310112,
      310113,
      310111
    ],
    "tj_sq": [
      8000185,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 21600,
    "name": "Aryasso",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "Orc",
    "career": "?",
    "captain": "",
    "avg": 2.375,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 2,
      "ancient_battlefield": 3,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Side by Side",
        "description": "For each enemy inflicted with Electrocuted on the field, the hero gains a stack of 5% Attack Up, up to 10 stacks."
      },
      "battle": {
        "name": "Hammer of Thunder",
        "description": "Deals [+400%Attack]Lightning Damage to the enemy, with a 50.0% chance of inflicting Electrocuted for 8.0s."
      },
      "ultimate": {
        "name": "Supreme Lightning",
        "description": "Deals [+660%Attack]Lightning Damage to enemies within range, with a 30.0% chance of inflicting Electrocuted for 8.0s. There is also a 50% chance of triggering 1 Lightning Chain."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310307,
      310306,
      310305,
      310380,
      310379,
      310378,
      310377,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000145,
      8000078,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 20010,
    "name": "Beags",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Goblin",
    "career": "?",
    "captain": "",
    "avg": 2.25,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Light Them Up",
        "description": "Every 5 basic attacks also inflict 20% Ignite on the enemy."
      },
      "battle": {
        "name": "Beags' Incendiary",
        "description": "Selects an enemy and throws incendiaries to their sides, dealing [+200%Attack]Fire Damage to hit enemies and inflicting 20% Ignite."
      },
      "ultimate": {
        "name": "Blasting Potion",
        "description": "Attacks enemies within range 5 times. Each attack deals [+130%Attack]Fire Damage and inflicts 30% Ignite."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310396,
      310395,
      310394,
      310393,
      310312,
      310311,
      310310,
      310309,
      310122,
      310121,
      310120,
      310119
    ],
    "tj_sq": [
      8000109,
      8000090,
      8000065
    ],
    "tf": [
      [
        1,
        1,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21920,
    "name": "Percival",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "The Unstill",
    "career": "?",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 18%.",
    "avg": 2.125,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 2,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Searing Brand",
        "description": "The hero's skills deal 30% increased damage to enemies inflicted with Burn."
      },
      "battle": {
        "name": "Dance of Flames",
        "description": "Attacks an enemy 3 times. Each attack deals [+135%Attack]Fire Damage and inflicts 25% Ignite."
      },
      "ultimate": {
        "name": "Skyfire",
        "description": "Grants 20% Attack Up to all Burn allies for 10.0s. Then attacks and deals [+650%Attack]Fire Damage to enemies within range."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310307,
      310306,
      310305,
      310360,
      310359,
      310358,
      310357,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000106,
      8000086,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        0
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  {
    "id": 22150,
    "name": "Nord",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Melee",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 1.625,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 1,
      "ancient_battlefield": 2,
      "arena": 1,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Glacial Support",
        "description": "If the hero has Ice Crystals after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. When the hero deals damage, there is a 20% chance of granting 1 stack of Ice Crystal to the Ice Blast ally with the highest Attack other than the hero."
      },
      "battle": {
        "name": "Frosty Slash",
        "description": "Strikes an enemy twice, each dealing [+210%Attack]Cold Damage."
      },
      "ultimate": {
        "name": "Raging Hailstorm",
        "description": "Deals [+700%Attack]Cold Damage to enemies within range, with a 75% chance of gaining 1 stack of Ice Crystal."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310307,
      310306,
      310305,
      310376,
      310375,
      310374,
      310373,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000143,
      8000076,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21430,
    "name": "Haldy",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "Gnome",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Unite as One",
        "description": "When the hero is on the battlefield, grants Accuracy Up to all Thunderbolt allies."
      },
      "battle": {
        "name": "Lightning Hammer",
        "description": "Attacks an enemy twice, each dealing [+200%Attack]Lightning Damage with a 50.0% chance of inflicting Electrocuted for 5.0s."
      },
      "ultimate": {
        "name": "Thunderbolt Resonance",
        "description": "Grants 10% Enlightenment Up to all Thunderbolt allies for 10.0s. Then deals [+400%Attack][+3000%Enlightenment]Lightning Damage to surrounding enemies with a 50% chance of triggering 1 Lightning Chain."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310307,
      310306,
      310305,
      310360,
      310359,
      310358,
      310357,
      310118,
      310117,
      310116,
      310115
    ],
    "tj_sq": [
      8000106,
      8000086,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        1,
        1,
        1
      ]
    ]
  },
  {
    "id": 22870,
    "name": "Roberta",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Merfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Echo of Frost",
        "description": "If the hero possesses Ice Crystals after releasing the battle skill, consumes 1 stack of Ice Crystal and releases the battle skill again."
      },
      "battle": {
        "name": "Arcane Piercer",
        "description": "Shoots 2 projectiles at the enemy, each dealing [+150%Attack]Cold Damage. This skill ignores 40% of the enemy's Defense. If the skill consumes Ice Crystals, the projectiles will be enhanced, each dealing [+180%Attack]Cold Damage."
      },
      "ultimate": {
        "name": "Freezing Wave",
        "description": "Strikes the enemies within range 3 times, each dealing [+250%Attack]Cold Damage and with a 50% chance to grant 1 stack of Ice Crystal to the hero."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310304,
      310303,
      310302,
      310301,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000143,
      8000076,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0
      ],
      [
        0,
        0,
        1,
        1
      ]
    ]
  },
  {
    "id": 21090,
    "name": "Cifla",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Shadow",
    "season": "s3",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "?",
    "captain": "",
    "avg": 2.75,
    "ratings": {
      "temporal_vortex": 4,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Timed Strike",
        "description": "Once the hero's ultimate skill is fully recharged, gains  for s."
      },
      "battle": {
        "name": "Energy Draining Sword",
        "description": "Slashes an enemy twice. Each slash deals . Then gains  Shadow Energy."
      },
      "ultimate": {
        "name": "Shadow Explosion",
        "description": "Consumes  Shadow Energy to strike the targeted location 3 times. Each strike deals  to enemies within range, with a  chance of ignoring the targets'  Defense. If the remaining Shadow Energy exceeds , casts this skill again."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000159,
      8000078,
      8000060
    ],
    "tf": [
      [
        1,
        0,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 21860,
    "name": "Sabrina",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Corrosion",
    "season": "s3",
    "type": "Range",
    "race": "Swamp Lizardfolk",
    "career": "?",
    "captain": "Increases all allies' Attack by  in Grand Gladiator Arena battles.",
    "avg": 2.625,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 3,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Fully Recorded",
        "description": "When the hero's skill damages the target, consumes the target's  Corrosion to deal ."
      },
      "battle": {
        "name": "Territorial Surveillance",
        "description": "Fires an orb that can bounce up to  times between enemies. Each hit deals ."
      },
      "ultimate": {
        "name": "Code of Authority",
        "description": "Deals  to enemies within range and gains  for s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310308,
      310307,
      310306,
      310305,
      310384,
      310383,
      310382,
      310381,
      310126,
      310125,
      310124,
      310123
    ],
    "tj_sq": [
      8000098,
      8000086,
      8000066
    ],
    "tf": [
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22860,
    "name": "Cykkol",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Aura",
    "season": "s3",
    "type": "Melee",
    "race": "Merfolk",
    "career": "?",
    "captain": "Increases all allies' Attack by  in dungeon battles.",
    "avg": 2.375,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 3,
      "heretical_ruins": 3,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Brave the Billows",
        "description": "Gains  Aura Energy at the start of battle."
      },
      "battle": {
        "name": "Vortex Slash",
        "description": "Gains  Aura Energy, dealing  to enemies within range."
      },
      "ultimate": {
        "name": "Tsunami Strike",
        "description": "Strikes enemies within range 2 times, dealing  each time. If Aura Energy is above 50 with each strike, consumes  Aura Energy to deal an additional ."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310966,
      310965,
      310964,
      310963,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000158,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        1,
        0,
        1
      ],
      [
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0
      ]
    ]
  },
  {
    "id": 21570,
    "name": "Rasran",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Corrosion",
    "season": "s3",
    "type": "Melee",
    "race": "Orc",
    "career": "?",
    "captain": "Increases all allies' Crit Damage by  in all battles.",
    "avg": 2.125,
    "ratings": {
      "temporal_vortex": 3,
      "goblin_lair": 2,
      "heretical_ruins": 2,
      "ancient_battlefield": 2,
      "arena": 2,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Bloody Fangs",
        "description": "Basic attacks have a  chance of dealing an additional  and increasing the hero's Corrosion Intensity by ."
      },
      "battle": {
        "name": "Bloodthirst",
        "description": "Deals  to enemies within range."
      },
      "ultimate": {
        "name": "Chronic Mortality",
        "description": "Attacks enemies within range 3 times, dealing  each hit."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [
      310376,
      310375,
      310374,
      310373,
      310384,
      310383,
      310382,
      310381,
      310114,
      310113,
      310112,
      310111
    ],
    "tj_sq": [
      8000157,
      8000078,
      8000060
    ],
    "tf": [
      [
        0,
        0,
        1,
        0
      ],
      [
        1,
        1,
        0,
        1
      ],
      [
        0,
        0,
        0,
        0
      ]
    ]
  },
  {
    "id": 22660,
    "name": "Alistair",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Practice Makes Perfect",
        "description": "When inflicting Debuffs or Control to enemies, the hero reduces their Ultimate Energy by 15.0. When their Ultimate Energy is reduced to 0 by this effect, the hero obtains an extra 20.0 Ultimate Enegy."
      },
      "battle": {
        "name": "Insatiable Curiosity",
        "description": "Strikes an enemy twice, each dealing [+220%Attack]fire damage. The second attack has a 50.0% chance to inflict Stunned on them for 3.0s."
      },
      "ultimate": {
        "name": "Latecomer Starts Early",
        "description": "Deals [+720%Attack]fire damage to enemies within range, with a 75.0% chance to inflict Recharging Speed Penalty on them for 10.0."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22640,
    "name": "Bronagh",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Toxin",
    "season": "s4",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Pilferage",
        "description": "When dealing damage to enemies, the hero has a 50.0% chance to inflict 1 stack of Toxin on them for 15.0s."
      },
      "battle": {
        "name": "Master Thief",
        "description": "Strikes an enemy twice, each dealing [+120%Attack]poison damage. The hero gains Attack Speed Up I for 5.0s."
      },
      "ultimate": {
        "name": "Robbery",
        "description": "The chance of inflicting Poison through Pilferage is increased to  for 10s. Then strikes the enemy 5 times, each dealing [+150%Attack]poison damage."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22770,
    "name": "Ylindra",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Unfulfilled Wish",
        "description": "Damage taken reduces by 15%."
      },
      "battle": {
        "name": "Life and Death",
        "description": "Strikes the enemy twice, each dealing [+200%Attack]Necrotic damage. And heals the hero by [+350%Attack]."
      },
      "ultimate": {
        "name": "Underworldly Curse",
        "description": "Moves to the enemy and strikes them 3 times, each dealing [+250%Attack]Necrotic damage. Dispels 2 buffs from the enemy, with a 100.0% chance to inflict Buff Prohibition for 10.0s. This skill prioritizes the enemy with the most buffs."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 20800,
    "name": "Merideth",
    "element": "Radiance",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 2.625,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 3,
      "ancient_battlefield": 4,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 3,
      "grave_of_curse": 3,
      "grave_of_rot": 3
    },
    "skills": {
      "passive": {
        "name": "Prayer of Life",
        "description": "Healing from the hero increases by 10%."
      },
      "battle": {
        "name": "Healing Words",
        "description": "Heals an ally by [+20%Target's Max HP]."
      },
      "ultimate": {
        "name": "Circle of Healing",
        "description": "Heals allies within range by [+25%Target's Max HP]."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 20720,
    "name": "Cato",
    "element": "Radiance",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 1.75,
    "ratings": {
      "temporal_vortex": 2,
      "goblin_lair": 1,
      "heretical_ruins": 2,
      "ancient_battlefield": 1,
      "arena": 2,
      "turret": "-",
      "grave_of_venom": 2,
      "grave_of_curse": 2,
      "grave_of_rot": 2
    },
    "skills": {
      "passive": {
        "name": "Secondary Protection",
        "description": "Has a 50.0% chance to gain 30% Damage Reduction for 5.0s when casting skills."
      },
      "battle": {
        "name": "Light Orb",
        "description": "Deals [+300%Attack]radiant damage to an enemy."
      },
      "ultimate": {
        "name": "Circle of Protection",
        "description": "Grants Defense Up II to allies within range for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 20530,
    "name": "Dollaad",
    "element": "Poison",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Goblin",
    "career": "?",
    "captain": "",
    "avg": 1.125,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 2,
      "heretical_ruins": 1,
      "ancient_battlefield": 1,
      "arena": 1,
      "turret": "-",
      "grave_of_venom": 1,
      "grave_of_curse": 1,
      "grave_of_rot": 1
    },
    "skills": {
      "passive": {
        "name": "Overestimated Force",
        "description": "If allies outnumber enemies as the battle starts, the hero gains Defense Up I for 10.0s."
      },
      "battle": {
        "name": "Unity",
        "description": "Inspires surrounding allies and grants them Defense Up I for 5.0s."
      },
      "ultimate": {
        "name": "Poison Vial",
        "description": "Throws a vial, dealing [+700%Attack]poison damage to enemies within range."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 20380,
    "name": "Dillon",
    "element": "Lightning",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Human",
    "career": "?",
    "captain": "",
    "avg": 1,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1,
      "ancient_battlefield": 1,
      "arena": 1,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Relentlessness",
        "description": "Every 3rd basic attack or skill cast grants the hero Attack Speed Up I for 5.0s."
      },
      "battle": {
        "name": "Precise Shot",
        "description": "Deals [+300%Attack]lightning damage to an enemy."
      },
      "ultimate": {
        "name": "Blinding Arrow",
        "description": "Deals [+600%Attack]lightning damage to the enemy, with a 50.0% chance of inflicting Accuracy Penalty I for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 22200,
    "name": "Olaf",
    "element": "Necrosis",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Undead",
    "career": "?",
    "captain": "",
    "avg": 1,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1,
      "ancient_battlefield": 1,
      "arena": 1,
      "turret": "-",
      "grave_of_venom": 1,
      "grave_of_curse": 1,
      "grave_of_rot": 1
    },
    "skills": {
      "passive": {
        "name": "Unholy Weapon",
        "description": "Damage dealt by basic attacks and skills will carry additional [+15%Attack]Necrotic damage."
      },
      "battle": {
        "name": "Void Swing",
        "description": "Slashes at an enemy and deals [+300%Attack]Necrotic damage."
      },
      "ultimate": {
        "name": "Skeleton Spin",
        "description": "Consumes a certain amount of HP to deal [+350%Attack]Necrotic damage to enemies within range, and gains Attack Speed Up II for 10.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 20490,
    "name": "Sailla",
    "element": "Lightning",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "?",
    "captain": "",
    "avg": 1,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1,
      "ancient_battlefield": 1,
      "arena": 1,
      "turret": "-",
      "grave_of_venom": 1,
      "grave_of_curse": 1,
      "grave_of_rot": 1
    },
    "skills": {
      "passive": {
        "name": "Instinct",
        "description": "Gains Defense Up I for 5.0s as the battle starts."
      },
      "battle": {
        "name": "Nature's Gift",
        "description": "Gains Attack Speed Up I for 5.0s."
      },
      "ultimate": {
        "name": "Precise Assault",
        "description": "Thrusts at a target, dealing [+600%Attack]lightning damage."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 20520,
    "name": "Vekuzz",
    "element": "Poison",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Forest Troll",
    "career": "?",
    "captain": "",
    "avg": 1,
    "ratings": {
      "temporal_vortex": 1,
      "goblin_lair": 1,
      "heretical_ruins": 1,
      "ancient_battlefield": 1,
      "arena": 1,
      "turret": "-"
    },
    "skills": {
      "passive": {
        "name": "Battle Frenzy",
        "description": "Gains 15% Attack Up for 5.0s as the battle starts."
      },
      "battle": {
        "name": "Self-Healing",
        "description": "Restores HP by [+100%Attack]."
      },
      "ultimate": {
        "name": "Flying Axe",
        "description": "Throws a flying axe, dealing [+600%Attack]poison damage to an enemy, with a 50.0% chance to inflict Stunned for 5.0s."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  },
  {
    "id": 10000,
    "name": "Traveler",
    "element": "Fire",
    "rarity": "Special",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "",
    "career": "?",
    "captain": "",
    "avg": 0,
    "ratings": {},
    "skills": {
      "passive": {
        "name": "Morale Up",
        "description": "Gains 15% Attack Up for 15.0s as the battle starts."
      },
      "battle": {
        "name": "Holy Fire Smite",
        "description": "Shoots 1 ray, dealing [+125%Attack]Fire Damage to an enemy 3 times."
      },
      "ultimate": {
        "name": "Fireball",
        "description": "Deals [+500%Attack]Fire Damage to enemies in range. If this achieves a kill, triggers Chain Break."
      }
    },
    "inspiration": [],
    "tj_team": [],
    "tj_eq": [],
    "tj_sq": []
  }
];
