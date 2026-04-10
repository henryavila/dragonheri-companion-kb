#!/usr/bin/env python3
"""Extract heroes from JSON into app/data/heroes.js"""
import json

with open('data/heroes-dragonheir-info-all.json') as f:
    heroes = json.load(f)

js_heroes = []
for h in heroes:
    hero = {
        'id': h['n'].lower().replace(' ', '-').replace("'", ''),
        'name': h['n'],
        'element': h['el'],
        'rarity': h['r'],
        'school': h.get('sc', ''),
        'season': h.get('se', 's1'),
        'type': h.get('at', ''),
        'race': h.get('ra', ''),
        'career': h.get('ca', ''),
        'captain': h.get('cp', ''),
        'skills': {
            'ultimate': {'name': h.get('un', ''), 'description': h.get('ud', '')},
            'battle': {'name': h.get('bn', ''), 'description': h.get('bd', '')},
            'passive': {'name': h.get('pn', ''), 'description': h.get('pd', '')}
        },
        'inspiration': [h.get(f'i{i}', '') for i in range(1, 6) if h.get(f'i{i}')]
    }
    js_heroes.append(hero)

with open('app/data/heroes.js', 'w', encoding='utf-8') as f:
    f.write('// heroes.js — 297 heroes database (extracted from dragonheir.info)\n')
    f.write(f'window.DATA_HEROES = {json.dumps(js_heroes, indent=2, ensure_ascii=False)};\n')

print(f'Extracted {len(js_heroes)} heroes')
