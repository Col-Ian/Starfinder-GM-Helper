let resistance = {};

let water = {
    description: 'This subtype is usually applied to outsiders with a connection to the Plane of Water.',
    speeds: [
        '30 ft.',
        'swim 30 ft.'
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
        'swim speed',
        'gains Athletics as a master or good skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function waterAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){
    let skillGoodMaster = [
        mainStatistics.goodSkills[0],
        mainStatistics.masterSkills[0]
    ];

    let randomGoodMaster = Math.floor(Math.random()*skillGoodMaster.length);
    skills[1].skillValue += skillGoodMaster[randomGoodMaster];
}

export {water, waterAdjustments}