let resistance = {};

let vesk = {
    description: 'This subtype is applied to vesk and creatures related to vesk.',
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
        'if the NPC is of the vesk race, it also gains the armor savant, fearless, and natural weapons racial traits'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function veskAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {vesk, veskAdjustments}