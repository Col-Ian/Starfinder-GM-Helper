let resistance = {};

let ikeshti = {
    description: 'This subtype is applied to ikeshtis and creatures related to ikeshtis.',
    speeds: [
        '30 ft.',
        'climb 30 ft.'
    ],
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
        'most creatures with this subtype gain a climb speed',
        'if the NPC is of the ikeshti race, it also gains the desert survivor, shed skin, and squirt blood racial traits'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function ikeshtiAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {ikeshti, ikeshtiAdjustments}