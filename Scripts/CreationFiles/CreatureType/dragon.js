let dragon = {
    description: 'A dragon is a reptilian creature, usually winged, with magical or otherwise unusual abilities.',
    immunities: ['paralysis', 'sleep'],
    resistances:[],
    darkvision: 60,
    lowLightVision: true,
    traits: [
        'Darkvision 60 ft.',
        'low-light vision',
        'immunity to paralysis and sleep.'
    ],
    adjustments: '+2 to all saving throws, +1 to attack rolls.',
    otherAbilities:[]
};

function dragonAdjustments(mainStatistics, attackStatistics, attributeBase){
    mainStatistics.fort += 2;
    mainStatistics.ref += 2;
    mainStatistics.will += 2;
    attackStatistics.highAttackBonus += 1;
    attackStatistics.lowAttackBonus += 1;
};

export {
    dragon,
    dragonAdjustments
};