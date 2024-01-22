
/*
Challenge Rating: {
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
        masterSkills:[ To be added to the best skill, Number of master skills to select (1 is standard, however it can be increased) ],
        goodSkills: [ To be added to the next best skills, Number of good skills to select (2 is standard, however it can be increased) ]
    }
*/
/*
let spellcasterArray= {
    crThird: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crHalf: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crOne: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTwo: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crThree: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crFour: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crFive: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crSix: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crSeven: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crEight: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crNine: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTen: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crEleven: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTwelve: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crThirteen: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crFourteen: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crFifteen: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crSixteen: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crSeventeen: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crEighteen: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crNineteen: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTwenty: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTwentyOne: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTwentyTwo: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTwentyThree: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTwentyFour: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
    crTwentyFive: {
        eAC: ,
        kAC: ,
        fort: ,
        ref: ,
        will: ,
        hitPoints: ,
        abilityDC: ,
        baseSpellDC: ,
        abilityScoreModifiers: [],
        specialAbilities: ,
        masterSkills: [, 1 ],
        goodSkills: [, 2 ]
    },
}

*/