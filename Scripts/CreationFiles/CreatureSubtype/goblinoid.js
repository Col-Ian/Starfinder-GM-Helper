let resistance = {};

let goblinoid = {
    description: 'This subtype is applied to humanoids of various goblinoid subspecies, such as space goblins.',
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
        'darkvision 60 ft.',
        'if the NPC is of the space goblin race, it also gains the fast and tinker racial traits, Engineering and Stealth as master skills, and Survival as a good skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function goblinoidAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {goblinoid, goblinoidAdjustments}