let resistance = {};

let aquatic = {
    description: 'These creatures are often native to environments that are mostly or entirely underwater.',
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
        'water breathing',
        'Athletics as a master or good skill',
        'if it can breathe air, it also gains the amphibious special ability'
    ],
    abilityNames: [
        'Water Breathing (Ex)',
        'Amphibious (Ex) (if it can breathe air)'
    ],
    abilityDescriptions: [
        'The creature can breathe water. It can\'t breathe air unless it has the amphibious special ability.',
        'The creature has the aquatic subtype or water breathing, but it can breathe air and survive on land.'
    ],
    otherAbilities: [
    ]
}

function aquaticAdjustments(
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

export {aquatic, aquaticAdjustments}