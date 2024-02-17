let construct = {
    description: 'A construct is a magically animated object or an artificially created creature.',
    immunities: ['construct immunities'],
    resistances:[],
    darkvision: 60,
    lowLightVision: true,
    traits: [
        'Darkvision 60 ft.', 
        'low-light vision',
        'construct immunities',
        'unliving',
        'Constitution modifier will be set to —.',
        'Must have either the magical or technological subtype.',
        'if the construct is mindless, its Intelligence modifier will be set to —.'
    ],
    adjustments: '-2 to all saving throws, +1 to attack rolls.',
    otherAbilities: [
        'construct immunities',
        'unliving',
    ]
};

function constructAdjustments(mainStatistics, attackStatistics, attributeBase){
    mainStatistics.fort -= 2;
    mainStatistics.ref -= 2;
    mainStatistics.will -= 2;
    attackStatistics.highAttackBonus += 1;
    attackStatistics.lowAttackBonus += 1;
    attributeBase.con = '-';
};

export {
    construct,
    constructAdjustments
};