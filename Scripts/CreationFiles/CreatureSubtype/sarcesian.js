let resistance = {};

let sarcesian = {
    description: 'This subtype is applied to sarcesians and creatures related to sarcesians.',
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
    lowLightVision: true,
    traits: [
        'low-light vision',
        'if the NPC is of the sarcesian race, it also gains the void flyer special ability and an additional good skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function sarcesianAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {sarcesian, sarcesianAdjustments}