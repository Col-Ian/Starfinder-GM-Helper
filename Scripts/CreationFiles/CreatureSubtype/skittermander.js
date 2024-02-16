let resistance = {};

let skittermander = {
    description: 'This subtype is applied to skittermanders and creatures related to skittermanders.',
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
        'if the NPC is of the skittermander race, it also gains the grappler, hyper, and six-armed racial traits'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function skittermanderAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {skittermander, skittermanderAdjustments}