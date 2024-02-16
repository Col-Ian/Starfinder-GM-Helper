let magicalBeast = {
    descritpion: 'Magical beasts are similar to animals but can have Intelligence modifiers greater than -4 (in which case the magical beast knows at least one language, though it can\'t necessarily speak). Magical beasts usually have supernatural or extraordinary abilities.',
    immunities: [],
    resistances:[],
    darkvision: 60,
    lowLightVision: true,
    traits: [
        'Darkvision 60 ft.',
        'low-light vision.'
    ],
    adjustments: '+2 to Fortitude and Reflex saving throws, +1 to attack rolls.',
    otherAbilities:[]
};

function magicalBeastAdjustments(mainStatistics, attackStatistics, attributeBase){
    mainStatistics.fort += 2;
    mainStatistics.ref += 2;
    attackStatistics.highAttackBonus += 1;
    attackStatistics.lowAttackBonus += 1;
};

export {
    magicalBeast,
    magicalBeastAdjustments
}