let dragon = {
    description: 'A dragon is a reptilian creature, usually winged, with magical or otherwise unusual abilities.',
    traits: 'Darkvision 60 ft., low-light vision, immunity to paralysis and sleep.',    
    adjustments: '+2 to all saving throws, +1 to attack rolls.'
};

function dragonAdjustments(mainStatistics, attackStatistics){
    mainStatistics.fort += 2;
    mainStatistics.ref += 2;
    mainStatistics.will += 2;
    attackStatistics.highAttackBonus += 1;
    attackStatistics.lowAttackBonus += 1;
};

// export {
//     dragon,
//     dragonAdjustments
// };

let crTwentyFive = {
    cr: '25',
    eAC: 41,
    kAC: 42,
    fort: 21,
    ref: 21,
    will: 26,
    hitPoints: 600,
    abilityDC: 30,
    baseSpellDC: 26,
    abilityScoreModifiers: [ 15, 12, 8 ],
    specialAbilities: 4,
    masterSkills: [ 46, 2 ],
    goodSkills: [ 41, 1 ]
};

let attackTemp = {
    random: 'Just for testing'
}
console.log(crTwentyFive)
dragonAdjustments(crTwentyFive, attackTemp)
console.log('After function:')
console.log(crTwentyFive)