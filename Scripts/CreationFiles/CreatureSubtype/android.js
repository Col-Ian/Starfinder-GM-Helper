let resistance = {};

let android = {
    description: 'This subtype is applied to androids and creatures related to androids.',
    speeds: [],
    immunities: [],
    resistances:[
        resistance = {
            resistanceType: '',
            resistanceDR: 0,
        }
    ],
    vulnerabilities: [],
    darkvision: 60,
    lowLightVision: true,
    traits: [
        'most creatures with this subtype gain darkvision 60 ft. and low-light vision',
        'if the NPC is of the android race, it also gains the constructed, flat affect, and upgrade slot racial traits'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function androidAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {android, androidAdjustments}