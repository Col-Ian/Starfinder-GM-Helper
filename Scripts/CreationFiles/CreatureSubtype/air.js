let resistance = {};

let air = {
    description: 'This subtype is usually applied to outsiders with a connection to the Plane of Air.',
    speeds:[
        '30 ft.',
        'fly 30 ft. (Su, perfect)'
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
        'supernatural fly speed, usually with perfect maneuverability',
        'gains Acrobatics as a master or good skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

function airAdjustments(
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
    skills[0].skillValue += skillGoodMaster[randomGoodMaster];
}

export {air, airAdjustments}