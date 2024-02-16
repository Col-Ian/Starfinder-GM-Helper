// Use for Chaotic, Evil, Extraplanar, Good, Lawful, Magical, Native, Technological
let resistance = {};

let otherSubtypes = {
    description: 'This otherSubtypes does not grant additional abilities to creatures.',
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
    traits: [],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function otherAdjustments(){}
export {otherSubtypes, otherAdjustments}