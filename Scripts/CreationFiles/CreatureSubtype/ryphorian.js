let resistance = {};

let ryphorian = {
    description: 'This subtype is applied to ryphorians and creatures related to ryphorians.',
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
        'if the NPC is of the ryphorian race, it also gains an additional special ability of any type, the trimorphic racial trait, and Perception as a master skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function ryphorianAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {ryphorian, ryphorianAdjustments}