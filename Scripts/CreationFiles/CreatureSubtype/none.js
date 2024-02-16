let resistance = {};

// Blank for defaults.
let none = {
    description: '',
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

function noneAdjustments(){}

export {
    none,
    noneAdjustments
}