let daemon = {
    description: 'Daemons are fiends, or evil outsiders, native to Abaddon.',
    speeds: [],
    immunities: [
        'acid',
        'death effects',
        'disease',
        'poison'
    ],
    resistances:[
        resistance = {
            resistanceType: 'cold',
            resistanceDR: 10,
        },
        resistance = {
            resistanceType: 'electricity',
            resistanceDR: 10,
        },
        resistance = {
            resistanceType: 'fire',
            resistanceDR: 10,
        }
    ],
    vulnerabilities: [],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'Immunity to acid, death effects, disease, and poison',
        'resistance 10 to cold, electricity, and fire',
        'gains ability to summon allies',
        'telepathy'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: [
        'summon allies',
        'telepathy'
    ]
}

export {daemon}