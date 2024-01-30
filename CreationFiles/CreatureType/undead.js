let undead = {
    description: 'Undead are once-living creatures animated by magic or advanced technological forces.',
    traits: 'Darkvision 60 ft., undead immunities, unliving; set Constitution modifier to —.',
    adjustments: '+2 to Will saving throws.'
};

function undeadAdjustments(mainStatistics, attackStatistics){
    mainStatistics.will += 2;
};

export {
    undead,
    undeadAdjustments
};