/*
    arr = {
        cr: Challenge rating selected,
        eAC: Energy Armor Class,
        kAC: Kenetic Armor Class,
        fort: Fortitude Saving Throw,
        ref: Reflex Saving Throw,
        will: Will Saving Throw,
        hitPoints: Hit Points,
        abilityDC: Ability Difficulty Class,
        baseSpellDC: Base Spell Difficulty Class,
        abilityScoreModifiers: [ Three scores to add to standard ability score array ],
        specialAbilities: Number of available Special Abilities,
        masterSkills:[ To be added to the best skill, Number of master skills to select (2 is standard, however it can be increased) ],
        goodSkills: [ To be added to the next best skills, Number of good skills to select (1 is standard, however it can be increased) ]
    }
*/

let arr = {};

let spellcasterArrayMainStatistics= [
    arr = {
        cr: '1/3',
        eAC: 9,
        kAC: 10,
        fort: 0,
        ref: 0,
        will: 2,
        hitPoints: 5,
        abilityDC: 10,
        baseSpellDC: 12,
        abilityScoreModifiers: [ 3, 1, 0 ],
        specialAbilities: 1,
        masterSkills: [ 7, 1 ],
        goodSkills: [ 3, 1 ]
    },
    arr = {
        cr: '1/2',
        eAC: 9,
        kAC: 10,
        fort: 0,
        ref: 0,
        will: 3,
        hitPoints: 11,
        abilityDC: 11,
        baseSpellDC: 13,
        abilityScoreModifiers: [ 3, 2, 1 ],
        specialAbilities: 1,
        masterSkills: [ 9, 2 ],
        goodSkills: [ 4, 1 ]
    },
    arr = {
        cr: '1',
        eAC: 10,
        kAC: 11,
        fort: 1,
        ref: 1,
        will: 4,
        hitPoints: 16,
        abilityDC: 12,
        baseSpellDC: 13,
        abilityScoreModifiers: [ 4, 2, 1 ],
        specialAbilities: 1,
        masterSkills: [ 10, 2 ],
        goodSkills: [ 5, 1 ]
    },
    arr = {
        cr: '2',
        eAC: 12,
        kAC: 13,
        fort: 1,
        ref: 1,
        will: 5,
        hitPoints: 21,
        abilityDC: 13,
        baseSpellDC: 14,
        abilityScoreModifiers: [ 4, 2, 1 ],
        specialAbilities: 2,
        masterSkills: [ 12, 2 ],
        goodSkills: [ 7, 1 ]
    },
    arr = {
        cr: '3',
        eAC: 13,
        kAC: 14,
        fort: 2,
        ref: 2,
        will: 6,
        hitPoints: 32,
        abilityDC: 14,
        baseSpellDC: 15,
        abilityScoreModifiers: [ 4, 2, 1 ],
        specialAbilities: 2,
        masterSkills: [ 13, 2 ],
        goodSkills: [ 8, 1 ]
    },
    arr = {
        cr: '4',
        eAC: 15,
        kAC: 16,
        fort: 3,
        ref: 3,
        will: 7,
        hitPoints: 43,
        abilityDC: 15,
        baseSpellDC: 15,
        abilityScoreModifiers: [ 5, 3, 1 ],
        specialAbilities: 2,
        masterSkills: [ 15, 2 ],
        goodSkills: [ 10, 1 ]
    },
    arr = {
        cr: '5',
        eAC: 16,
        kAC: 17,
        fort: 4,
        ref: 4,
        will: 8,
        hitPoints: 60,
        abilityDC: 15,
        baseSpellDC: 15,
        abilityScoreModifiers: [ 5, 3, 2 ],
        specialAbilities: 2,
        masterSkills: [ 16, 2 ],
        goodSkills: [ 11, 1 ]
    },
    arr = {
        cr: '6',
        eAC: 17,
        kAC: 18,
        fort: 5,
        ref: 5,
        will: 9,
        hitPoints: 75,
        abilityDC: 16,
        baseSpellDC: 16,
        abilityScoreModifiers: [ 5, 3, 2 ],
        specialAbilities: 2,
        masterSkills: [ 18, 2 ],
        goodSkills: [ 13, 1 ]
    },
    arr = {
        cr: '7',
        eAC: 18,
        kAC: 19,
        fort: 6,
        ref: 6,
        will: 10,
        hitPoints: 90,
        abilityDC: 17,
        baseSpellDC: 17,
        abilityScoreModifiers: [ 5, 4, 2 ],
        specialAbilities: 2,
        masterSkills: [ 19, 2 ],
        goodSkills: [ 14, 1 ]
    },
    arr = {
        cr: '8',
        eAC: 19,
        kAC: 20,
        fort: 7,
        ref: 7,
        will: 11,
        hitPoints: 105,
        abilityDC: 18,
        baseSpellDC: 17,
        abilityScoreModifiers: [ 6, 4, 2 ],
        specialAbilities: 2,
        masterSkills: [ 21, 2 ],
        goodSkills: [ 16, 1 ]
    },
    arr = {
        cr: '9',
        eAC: 21,
        kAC: 22,
        fort: 8,
        ref: 8,
        will: 12,
        hitPoints: 120,
        abilityDC: 18,
        baseSpellDC: 17,
        abilityScoreModifiers: [ 6, 4, 3 ],
        specialAbilities: 2,
        masterSkills: [ 22, 2 ],
        goodSkills: [ 17, 1 ]
    },
    arr = {
        cr: '10',
        eAC: 22,
        kAC: 23,
        fort: 9,
        ref: 9,
        will: 13,
        hitPoints: 140,
        abilityDC: 19,
        baseSpellDC: 18,
        abilityScoreModifiers: [ 8, 5, 3 ],
        specialAbilities: 2,
        masterSkills: [ 24, 2 ],
        goodSkills: [ 19, 1 ]
    },
    arr = {
        cr: '11',
        eAC: 23,
        kAC: 24,
        fort: 10,
        ref: 10,
        will: 14,
        hitPoints: 155,
        abilityDC: 20,
        baseSpellDC: 18,
        abilityScoreModifiers: [ 8, 5, 3 ],
        specialAbilities: 2,
        masterSkills: [ 25, 2 ],
        goodSkills: [ 20, 1 ]
    },
    arr = {
        cr: '12',
        eAC: 25,
        kAC: 26,
        fort: 11,
        ref: 11,
        will: 15,
        hitPoints: 170,
        abilityDC: 21,
        baseSpellDC: 19,
        abilityScoreModifiers: [ 8, 5, 4 ],
        specialAbilities: 3,
        masterSkills: [ 27, 2 ],
        goodSkills: [ 22, 1 ]
    },
    arr = {
        cr: '13',
        eAC: 26,
        kAC: 27,
        fort: 12,
        ref: 12,
        will: 16,
        hitPoints: 190,
        abilityDC: 21,
        baseSpellDC: 19,
        abilityScoreModifiers: [ 8, 6, 4 ],
        specialAbilities: 3,
        masterSkills: [ 28, 2 ],
        goodSkills: [ 23, 1 ]
    },
    arr = {
        cr: '14',
        eAC: 27,
        kAC: 28,
        fort: 12,
        ref: 12,
        will: 17,
        hitPoints: 215,
        abilityDC: 22,
        baseSpellDC: 19,
        abilityScoreModifiers: [ 8, 6, 4 ],
        specialAbilities: 3,
        masterSkills: [ 30, 2 ],
        goodSkills: [ 25, 1 ]
    },
    arr = {
        cr: '15',
        eAC: 28,
        kAC: 29,
        fort: 13,
        ref: 13,
        will: 18,
        hitPoints: 235,
        abilityDC: 23,
        baseSpellDC: 20,
        abilityScoreModifiers: [ 9, 7, 5 ],
        specialAbilities: 3,
        masterSkills: [ 31, 2 ],
        goodSkills: [ 26, 1 ]
    },
    arr = {
        cr: '16',
        eAC: 29,
        kAC: 30,
        fort: 14,
        ref: 14,
        will: 19,
        hitPoints: 255,
        abilityDC: 24,
        baseSpellDC: 20,
        abilityScoreModifiers: [ 10, 7, 5 ],
        specialAbilities: 3,
        masterSkills: [ 33, 2 ],
        goodSkills: [ 28, 1 ]
    },
    arr = {
        cr: '17',
        eAC: 30,
        kAC: 31,
        fort: 15,
        ref: 15,
        will: 20,
        hitPoints: 285,
        abilityDC: 24,
        baseSpellDC: 20,
        abilityScoreModifiers: [ 11, 8, 5 ],
        specialAbilities: 3,
        masterSkills: [ 34, 2 ],
        goodSkills: [ 29, 1 ]
    },
    arr = {
        cr: '18',
        eAC: 31,
        kAC: 32,
        fort: 16,
        ref: 16,
        will: 20,
        hitPoints: 320,
        abilityDC: 25,
        baseSpellDC: 21,
        abilityScoreModifiers: [ 11, 8, 6 ],
        specialAbilities: 4,
        masterSkills: [ 36, 2 ],
        goodSkills: [ 31, 1 ]
    },
    arr = {
        cr: '19',
        eAC: 32,
        kAC: 33,
        fort: 16,
        ref: 16,
        will: 21,
        hitPoints: 350,
        abilityDC: 26,
        baseSpellDC: 22,
        abilityScoreModifiers: [ 11, 9, 6 ],
        specialAbilities: 4,
        masterSkills: [ 37, 2 ],
        goodSkills: [ 32, 1 ]
    },
    arr = {
        cr: '20',
        eAC: 34,
        kAC: 35,
        fort: 17,
        ref: 17,
        will: 22,
        hitPoints: 395,
        abilityDC: 27,
        baseSpellDC: 23,
        abilityScoreModifiers: [ 12, 9, 6 ],
        specialAbilities: 4,
        masterSkills: [ 39, 2 ],
        goodSkills: [ 34, 1 ]
    },
    arr = {
        cr: '21',
        eAC: 35,
        kAC: 36,
        fort: 18,
        ref: 18,
        will: 23,
        hitPoints: 425,
        abilityDC: 27,
        baseSpellDC: 23,
        abilityScoreModifiers: [ 12, 10, 7 ],
        specialAbilities: 4,
        masterSkills: [ 40, 2 ],
        goodSkills: [ 35, 1 ]
    },
    arr = {
        cr: '22',
        eAC: 37,
        kAC: 38,
        fort: 18,
        ref: 18,
        will: 23,
        hitPoints: 470,
        abilityDC: 28,
        baseSpellDC: 24,
        abilityScoreModifiers: [ 13, 10, 7 ],
        specialAbilities: 4,
        masterSkills: [ 42, 2 ],
        goodSkills: [ 37, 1 ]
    },
    arr = {
        cr: '23',
        eAC: 38,
        kAC: 39,
        fort: 19,
        ref: 19,
        will: 24,
        hitPoints: 510,
        abilityDC: 29,
        baseSpellDC: 25,
        abilityScoreModifiers: [ 13, 11, 7 ],
        specialAbilities: 4,
        masterSkills: [ 43, 2 ],
        goodSkills: [ 38, 1 ]
    },
    arr = {
        cr: '24',
        eAC: 40,
        kAC: 41,
        fort: 20,
        ref: 20,
        will: 25,
        hitPoints: 550,
        abilityDC: 30,
        baseSpellDC: 26,
        abilityScoreModifiers: [ 15, 11, 8 ],
        specialAbilities: 4,
        masterSkills: [ 45, 2 ],
        goodSkills: [ 40, 1 ]
    },
    arr = {
        cr: '25',
        eAC: 41,
        kAC: 42,
        fort: 21,
        ref: 21,
        will: 26,
        hitPoints: 600,
        abilityDC: 30,
        baseSpellDC: 26,
        abilityScoreModifiers: [ 15, 12, 8 ],
        specialAbilities: 4,
        masterSkills: [ 46, 2 ],
        goodSkills: [ 41, 1 ]
    },
];

export{spellcasterArrayMainStatistics};