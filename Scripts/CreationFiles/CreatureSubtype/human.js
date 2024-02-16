let resistance = {};

let human = {
    description: 'This subtype is applied to humans and creatures related to humans.',
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
        'if the NPC is of the human race, it gains an additional special ability of any type and an additional good skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function Adjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {human}