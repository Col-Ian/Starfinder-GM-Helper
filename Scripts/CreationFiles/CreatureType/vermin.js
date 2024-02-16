let vermin = {
    description: 'This type includes insects, arachnids, other arthropods, worms, and similar invertebrates.',
    immunities: [],
    resistances:[],
    darkvision: 60,
    lowLightVision: false,
    traits: [
        'Darkvision 60 ft.',
        'mindless'
    ],
    adjustments: '+2 to Fortitude saving throws.',
    otherAbilities:['mindless']
};

function verminAdjustments(mainStatistics, attackStatistics, attributeBase){
    mainStatistics.fort += 2;
    // set Intelligence modifier to -. (mindless)
    attributeBase.int = '-'
};

export {
    vermin,
    verminAdjustments
};