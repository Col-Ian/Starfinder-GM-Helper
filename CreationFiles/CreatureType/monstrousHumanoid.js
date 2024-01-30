let monstrousHumanoid = {
    description: 'Monstrous humanoids are similar to humanoids, but they have monstrous or animalistic features. They often have magical abilities as well.',
    traits: 'Darkvision 60 ft.',
    adjustments: '+2 to Reflex and Will saving throws, +1 to attack rolls.'
}

function monstrousHumanoidAdjustments(){
    mainStatistics.ref += 2;
    mainStatistics.will += 2;
    attackStatistics.highAttackBonus += 1;
    attackStatistics.lowAttackBonus += 1;
};

export {
    monstrousHumanoid,
    monstrousHumanoidAdjustments
}