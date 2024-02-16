let resistance = {};

let orc = {
    description: 'This subtype is applied to orcs and creatures who are related to orcs.',
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
    lowLightVision: false,
    traits: [
        'most creatures of this subtype gain darkvision 60 ft. and the ferocity universal creature rule',
        'if the creature is of the half-orc race, it also gains Intimidate and Survival as master skills'
    ],
    abilityNames: [
        'Ferocity (Ex)'
    ],
    abilityDescriptions: [
        'When the creature is brought to 0 Hit Points, it can keep fighting for 1 more round. It can act normally until the end of its next turn; if it has 0 Hit Points at that point, it dies. If it would lose further Hit Points before this, it ceases to be able to act and dies.'
    ],
    otherAbilities: []
}

function orcAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {orc, orcAdjustments}