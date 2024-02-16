let resistance = {};

let maraquoi = {
    description: 'This subtype is applied to maraquoi and creatures related to maraquoi.',
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
        'if the NPC is of the maraquoi race, it also gains blindsense (sound) 30 ft., a climb speed of 20 ft., the prehensile tail racial trait, and Survival as a master skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function maraquoiAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {maraquoi, maraquoiAdjustments}