let fey = {
    description: 'A fey is a creature with supernatural abilities and connections to nature or to some other force or place.',
    immunities: [],
    resistances:[],
    darkvision: 0,
    lowLightVision: true,
    traits: ['Low-light vision.'],
    adjustments: '+2 to Fortitude and Reflex saving throws, -1 to attack rolls.',
    otherAbilities:[]
};

function feyAdjustments(mainStatistics, attackStatistics, attributeBase){
    mainStatistics.fort += 2;
    mainStatistics.ref += 2;
    attackStatistics.highAttackBonus -= 1;
    attackStatistics.lowAttackBonus -= 1;
};

export {
    fey,
    feyAdjustments
};