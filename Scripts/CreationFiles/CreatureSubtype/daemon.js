let resistance = {};

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
            resistanceType: 'cold ',
            resistanceDR: 10,
        },
        resistance = {
            resistanceType: 'electricity ',
            resistanceDR: 10,
        },
        resistance = {
            resistanceType: 'fire ',
            resistanceDR: 10,
        }
    ],
    vulnerabilities: [],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'immunity to acid, death effects, disease, and poison',
        'resistance 10 to cold, electricity, and fire',
        'gains ability to summon allies',
        'telepathy'
    ],
    abilityNames: [
        'Summon Allies (Sp)'
    ],
    abilityDescriptions: [
        'The creature can attempt to summon creatures of the same creature type as itself as a full action. The summoned ally cannot summon its own allies, is worth 0 experience points, and returns to the place from which it came after 1 hour.\n 1/day—summon allies (1 imp 60%).\nGuidelines: Choose either a creature of the same CR as the monster (with a 35% chance of success) or a creature with a CR no greater than the monster\'s CR - 5 (with a 60% chance of success).'
    ],
    otherAbilities: [
        'telepathy 100 ft.'
    ]
}

function daemonAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {daemon, daemonAdjustments}