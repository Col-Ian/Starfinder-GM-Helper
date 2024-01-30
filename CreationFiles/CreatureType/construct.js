let construct = {
    description: 'A construct is a magically animated object or an artificially created creature.',
    traits: 'Darkvision 60 ft., low-light vision, construct immunities, unliving; set Constitution modifier to —; must have either the magical or technological subtype; if the construct is mindless, set Intelligence modifier to — and add mindless.',
    adjustments: '-2 to all saving throws, +1 to attack rolls.'
};

function constructAdjustments(mainStatistics, attackStatistics){
    mainStatistics.fort -= 2;
    mainStatistics.ref -= 2;
    mainStatistics.will -= 2;
    attackStatistics.highAttackBonus += 1;
    attackStatistics.lowAttackBonus += 1;
};

export {
    construct,
    constructAdjustments
};