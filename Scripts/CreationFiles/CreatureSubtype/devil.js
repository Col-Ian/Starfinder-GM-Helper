let resistance = {};

let devil = {
    description: 'Devils are fiends, or evil outsiders, native to Hell.',
    speeds: [],
    immunities: [
        'fire',
        'poison'
    ],
    resistances:[
        resistance = {
            resistanceType: 'acid ',
            resistanceDR: 10,
        },
        resistance = {
            resistanceType: 'cold ',
            resistanceDR: 10,
        }
    ],
    vulnerabilities: [],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'see in darkness',
        'immunity to fire and poison',
        'resistance 10 to acid and cold',
        'gains ability to summon allies',
        'telepathy'
    ],
    abilityNames: [
        'See in Darkness (Su)',
        'Summon Allies (Sp)'
    ],
    abilityDescriptions: [
        'The creature can see perfectly in darkness of any kind, including magical darkness.',
        'The creature can attempt to summon creatures of the same creature type as itself as a full action. The summoned ally cannot summon its own allies, is worth 0 experience points, and returns to the place from which it came after 1 hour.\n 1/day—summon allies (1 imp 60%).\nGuidelines: Choose either a creature of the same CR as the monster (with a 35% chance of success) or a creature with a CR no greater than the monster\'s CR - 5 (with a 60% chance of success).'
    ],
    otherAbilities: [
        'telepathy 100 ft.'
    ]
}

function devilAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {devil, devilAdjustments}