let resistance = {};

let elemental = {
    description: 'An elemental is a creature composed entirely of matter from one of the four Elemental Planes.',
    speeds: [],
    immunities: [
        'elemental immunities'
    ],
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
        'elemental immunities'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function elementalAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {elemental, elementalAdjustments}