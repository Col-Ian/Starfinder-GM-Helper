let resistance = {};

let giant = {
    description: 'This subtype is applied to giants and creatures related to giants.',
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
        'many NPCs with this subtype gain Intimidate and Perception as master skills'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function giantAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){
    skills[7].skillValue += mainStatistics.masterSkills[0]

}

export {giant, giantAdjustments}