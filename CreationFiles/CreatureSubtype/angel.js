let angel = {
    description: 'Angels are celestials, or good outsiders, native to the good-aligned Outer Planes.',
    speeds: [],
    immunities: [
        'acid',
        'cold',
        'petrification'
    ],
    resistances:[
        resistance = {
            resistanceType: 'saving throws against poison +',
            resistanceDR: 4,
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
    darkvision: 60,
    lowLightVision: true,
    traits: [
        'Darkvision 60 ft.',
        'low-light vision',
        'protective aura',
        '+4 to saving throws against poison',
        'immunity to acid, cold, and petrification',
        'resistance 10 to electricity and fire',
        'truespeech'
    ],
    abilityNames: ['Protective Aura (Su)'],
    abilityDescriptions:['For angels of CR 3 to CR 15, this ability grants creatures within the aura (usually 20 feet), including the angel, a divine bonus (usually +2) to AC against attacks made by evil creatures and a divine bonus (usually +4) to saving throws against effects created by evil creatures. The protective aura of a more powerful or a weaker angel might grant a larger or smaller bonus and have a larger or smaller radius, respectively.'],
    otherAbilities: [
        'protective aura',
        'truespeech'
    ]
}

export {angel}