let resistance = {};

let plantlike = {
    description: 'Plantlike creatures have many of the characteristics of plants.',
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
        'Most plantlike creatures have the plantlike universal creature rule'
    ],
    abilityNames: [
        'Plantlike (Ex)'
    ],
    abilityDescriptions: [
        'For effects targeting creatures by type, plantlike creatures count as both their type and plants (whichever type allows an ability to affect them for abilities that affect only one type, and whichever is worse for abilities that affect both types). They also receive a +2 racial bonus to saving throws against mind-affecting effects, paralysis, poison, polymorph, sleep, and stunning, unless the effect specifies that it works against plants.'
    ],
    otherAbilities: []
}

function plantlikeAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {plantlike, plantlikeAdjustments}