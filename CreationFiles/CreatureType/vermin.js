let vermin = {
    description: 'This type includes insects, arachnids, other arthropods, worms, and similar invertebrates.',
    traits: 'Darkvision 60 ft., mindless; set Intelligence modifier to -.',
    adjustments: '+2 to Fortitude saving throws.'
};

function verminAdjustments(mainStatistics, attackStatistics){
    mainStatistics.fort += 2;
};

export {
    vermin,
    verminAdjustments
};