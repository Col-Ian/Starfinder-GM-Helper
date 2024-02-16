let resistance = {};

let fire = {
    description: 'This subtype is usually applied to outsiders with a connection to the Plane of Fire and creatures with a strong affinity to fire.',
    speeds: [],
    immunities: [
        'fire'
    ],
    resistances:[
        resistance = {
            resistanceType: '',
            resistanceDR: 0,
        }
    ],
    vulnerabilities: [
        'cold'
    ],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'immunity to fire',
        'vulnerable to cold'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function fireAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {fire, fireAdjustments}