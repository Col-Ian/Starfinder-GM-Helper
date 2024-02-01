let agathion = {
    description: 'Agathions are celestials, or good outsiders, native to Nirvana.',
    speeds: [],
    immunities: [
        'electricity',
        'petrification'
    ],
    resistances:[
        resistance = {
            resistanceType: 'saving throws against poison +',
            resistanceDR: 4,
        },
        resistance = {
            resistanceType: 'cold',
            resistanceDR: 10,
        },
        resistance = {
            resistanceType: 'sonic',
            resistanceDR: 10,
        }
    ],
    vulnerabilities: [],
    darkvision: 0,
    lowLightVision: true,
    traits: [
        'Low-light vision',
        '+4 to saving throws against poison',
        'immunity to electricity and petrification',
        'resistance 10 to cold and sonic',
        'healing channel (as per the healer mystic connection power)',
        'truespeech',
        'speak with animals (as per the xenodruid mystic connection power)'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: [
        'healing channel (as per the healer mystic connection power)',
        'truespeech',
        'speak with animals (as per the xenodruid mystic connection power)'
    ]
}

export {agathion}