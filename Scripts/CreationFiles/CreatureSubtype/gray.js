let resistance = {};

let gray = {
    description: 'This subtype is applied to the humanoid aliens known as grays and creatures related to grays.',
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
        'if the NPC is of the gray race, it also gains telepathy 100 ft. and the phase special ability'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function grayAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {gray, grayAdjustments}