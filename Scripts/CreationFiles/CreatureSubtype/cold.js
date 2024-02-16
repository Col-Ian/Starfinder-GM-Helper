let resistance = {};

let cold = {
    description: 'Creatures with this subtype are usually native to frigid environments.',
    speeds: [],
    immunities: ['cold'],
    resistances:[
        resistance = {
            resistanceType: '',
            resistanceDR: 0,
        }
    ],
    vulnerabilities: ['fire'],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'immunity to cold',
        'vulnerable to fire'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function coldAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}
export {cold, coldAdjustments}