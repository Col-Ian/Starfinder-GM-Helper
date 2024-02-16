let animal = {
    description: 'An animal is a living, nonhumanoid creature, usually a vertebrate with no magical abilities and no innate capacity for language or culture.',
    immunities: [],
    resistances:[],
    darkvision: 0,
    lowLightVision: false,
    darkvision: 0,
    lowLightVision: true,
    traits: [
        'Low-light vision',
        'Intelligence modifier must be set to -4 or -5.'
    ],
    adjustments: '+2 to Fortitude and Reflex saving throws.',
    otherAbilities:[]
};

function animalAdjustments(mainStatistics, attackStatistics, attributeBase){
    mainStatistics.fort += 2;
    mainStatistics.ref +=2;
    attributeBase.int = 1; // This will make the value -9, making the modifier -4, later give user option of -4 or -5
};

export {
    animal,
    animalAdjustments
};