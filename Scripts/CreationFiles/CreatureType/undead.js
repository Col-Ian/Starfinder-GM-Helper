// Notes: set Constitution modifier to —. (unliving)

let undead = {
    description: 'Undead are once-living creatures animated by magic or advanced technological forces.',
    immunities: ['undead immunities'],
    resistances:[],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'Darkvision 60 ft.',
        'undead immunities',
        'unliving'
    ],
    adjustments: '+2 to Will saving throws.',
    otherAbilities:[
        'undead immunities',
        'unliving'
    ]
};

function undeadAdjustments(mainStatistics, attackStatistics){
    mainStatistics.will += 2;
};

export {
    undead,
    undeadAdjustments
};