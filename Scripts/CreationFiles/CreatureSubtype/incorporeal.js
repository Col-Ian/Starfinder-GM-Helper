let resistance = {};

let incorporeal = {
    description: 'Creatures with this subtype have no physical bodies.',
    speeds: [],
    immunities: [],
    resistances:[
        resistance = {
            resistanceType: '',
            resistanceDR: 0,
        }
    ],
    vulnerabilities: [],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'incorporeal'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: [
        'incorporeal'
    ]
}

function incorporealAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {incorporeal, incorporealAdjustments}