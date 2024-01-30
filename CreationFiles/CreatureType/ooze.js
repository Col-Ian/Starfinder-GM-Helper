let ooze = {
    description: 'An ooze is an amorphous or mutable creature.',
    traits: 'Blindsight, mindless, ooze immunities, sightless; set Intelligence modifier to —.',
    adjustments: '+2 to Fortitude saving throws, -2 to Reflex and Will saving throws, no master or good skills unless the creature would have them naturally, rather than through training.'
};

function oozeAdjustments(mainStatistics, attackStatistics){
    mainStatistics.fort += 2;
    mainStatistics.ref -= 2;
    mainStatistics.will -= 2;
    mainStatistics.abilityScoreModifiers = [];
};

export {
    ooze,
    oozeAdjustments
};