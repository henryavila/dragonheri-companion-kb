#!/usr/bin/env python3
"""Extract tier data from JSON into app/data/tiers.js"""
import json

with open('docs/heroes/tier-list-combined.json') as f:
    data = json.load(f)

heroes = data['heroes']

# Build tier entries
js_tiers = []
for h in heroes:
    entry = {
        'name': h['name'],
        'element': h['element'],
        'rarity': h['rarity'],
        'role': h.get('role', ''),
        'season': h.get('season', 1),
        'ac_tier': h.get('allclash', ''),
        'hh_overall': h.get('hh_overall', ''),
        'hh_type': h.get('hh_type', ''),
        'ratings': {
            'temporal_vortex': h.get('temporal_vortex'),
            'goblin_lair': h.get('goblin_lair'),
            'grave_venom': h.get('grave_venom'),
            'grave_curse': h.get('grave_curse'),
            'grave_rot': h.get('grave_rot'),
            'heretical_ruins': h.get('heretical_ruins'),
            'ancient_battlefield': h.get('ancient_battlefield'),
            'arena': h.get('arena'),
            'fae': h.get('fae'),
            'pillar': h.get('pillar'),
            'green_dragon': h.get('green_dragon'),
            'violet_dragon': h.get('violet_dragon'),
            'gloomland': h.get('gloomland')
        }
    }
    js_tiers.append(entry)

with open('app/data/tiers.js', 'w', encoding='utf-8') as f:
    f.write('// tiers.js — Tier list data for 301 heroes (AllClash + HellHades + DragonHeir.info)\n')
    f.write(f'window.DATA_TIERS = {json.dumps(js_tiers, indent=2, ensure_ascii=False)};\n')

print(f'Extracted {len(js_tiers)} tier entries')
