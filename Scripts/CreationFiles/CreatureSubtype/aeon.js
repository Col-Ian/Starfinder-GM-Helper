let resistance = {};

let aeon = {
    discription: 'Aeons are a race of neutral outsiders who maintain the balance of reality.',
    speeds: [],
    immunities:[
        'cold',
        'critical hits',
        'poison'
    ],
    resistances:[
        resistance = {
            resistanceType: 'electricity',
            resistanceDR: '10'
        },
        resistance = {
            resistanceType: 'fire',
            resistanceDR: '10'
        }
    ],
    vulnerabilities: [],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'immunity to cold, critical hits, and poison',
        'resistance 10 to electricity and fire',
        'bonus equal to CR to skill checks to recall knowledge',
        'extension of all,',
        'telepathy 100 ft. (non-verbal)'
    ],
    abilityNames: ['Extension of All (Ex)'],
    abilityDescriptions: ['Aeons can communicate telepathically with other aeons over vast distances. This ability works even across planes, albeit less effectively, allowing the communication of only vague impressions and feelings.'],
    otherAbilities: [
        'telepathy 100 ft. (non-verbal)'
    ]
}

function aeonAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {aeon, aeonAdjustments}