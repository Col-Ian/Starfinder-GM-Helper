let aberration = {
    description: 'An aberration has a bizarre anatomy, strange abilities, an alien mindset, or any combination of the three.',
    immunities: [],
    resistances:[],
    darkvision: 0,
    lowLightVision: false,
    darkvision: 60,
    lowLightVision: false,
    traits: ['Darkvision 60 ft.'],
    adjustments: '+2 to Will saving throws.',
    otherAbilities:[]
};

// Function to adjust will saving throw
function aberrationAdjustments(mainStatistics, attackStatistics){
    mainStatistics.will += 2
};

export {
    aberration,
    aberrationAdjustments
};