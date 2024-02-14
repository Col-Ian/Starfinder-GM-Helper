/*
    arr = {
        cr: Challenge rating selected,
        Use the high value for the NPC’s best attacks and the low value for the rest. Use one value for all ranged attacks and the other for all melee attacks (you generally don’t need to worry about differences between one weapon and another in the same category).        
        highAttackBonus: ,
        lowAttackBonus: ,
        For a damage dice of 2d6, 2 is the number of dice, while 6 is the dice type. The damage bonus is generally equal to the creatures CR if > 1
        energyRangedDamageNumberDice: '',
        energyRangedDamageDiceType: '',
        kineticRangedDamageNumberDice: '',
        kineticRangedDamageDiceType: '',
        standardMeleeDamage:NumberDice ,''
        standardMeleeDamageDiceType: '',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 0
    }
*/

let arr = {};

let spellcasterArrayAttackStatistics = [
    arr = {
        cr: '1/3',
        highAttackBonus: 0,
        lowAttackBonus: -2,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '4',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 0,
    },
    arr = {
        cr: '1/2',
        highAttackBonus: 2,
        lowAttackBonus: 0,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '4',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 0,
    },
    arr = {
        cr: '1',
        highAttackBonus: 4,
        lowAttackBonus: 2,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '4',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 1,
    },
    arr = {
        cr: '2',
        highAttackBonus: 6,
        lowAttackBonus: 4,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '4',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 2,
    },
    arr = {
        cr: '3',
        highAttackBonus: 7,
        lowAttackBonus: 5,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '4',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 3,

    },
    arr = {
        cr: '4',
        highAttackBonus: 8,
        lowAttackBonus: 6,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '4',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 4,
    },
    arr = {
        cr: '5',
        highAttackBonus: 10,
        lowAttackBonus: 8,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '6',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 5,
    },
    arr = {
        cr: '6',
        highAttackBonus: 12,
        lowAttackBonus: 10,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '6',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '8',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '6',
        threeAttacksMeleeDamageNumberDice: '1',
        threeAttacksMeleeDamageDiceType: '4',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        damageBonus: 6,
    },
    arr = {
        cr: '7',
        highAttackBonus: 13,
        lowAttackBonus: 11,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '8',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '12',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '8',
        threeAttacksMeleeDamageNumberDice: '1',
        threeAttacksMeleeDamageDiceType: '4',
        fourAttacksMeleeDamageNumberDice: '1',
        fourAttacksMeleeDamageDiceType: '4',
        damageBonus: 7,
    },
    arr = {
        cr: '8',
        highAttackBonus: 15,
        lowAttackBonus: 13,
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '10',
        kineticRangedDamageNumberDice: '2',
        kineticRangedDamageDiceType: '6',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '12',
        threeAttacksMeleeDamageNumberDice: '1',
        threeAttacksMeleeDamageDiceType: '8',
        fourAttacksMeleeDamageNumberDice: '1',
        fourAttacksMeleeDamageDiceType: '4',
        damageBonus: 8,
    },
    arr = {
        cr: '9',
        highAttackBonus: 17,
        lowAttackBonus: 15,
        energyRangedDamageNumberDice: '2',
        energyRangedDamageDiceType: '6',
        kineticRangedDamageNumberDice: '2',
        kineticRangedDamageDiceType: '8',
        standardMeleeDamageNumberDice: '3',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '1',
        threeAttacksMeleeDamageDiceType: '10',
        fourAttacksMeleeDamageNumberDice: '1',
        fourAttacksMeleeDamageDiceType: '6',
        damageBonus: 9,
    },
    arr = {
        cr: '10',
        highAttackBonus: 18,
        lowAttackBonus: 16,
        energyRangedDamageNumberDice: '3',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '2',
        kineticRangedDamageDiceType: '8',
        standardMeleeDamageNumberDice: '2',
        standardMeleeDamageDiceType: '8',
        threeAttacksMeleeDamageNumberDice: '1',
        threeAttacksMeleeDamageDiceType: '10',
        fourAttacksMeleeDamageNumberDice: '1',
        fourAttacksMeleeDamageDiceType: '8',
        damageBonus: 10,
    },
    arr = {
        cr: '11',
        highAttackBonus: 19,
        lowAttackBonus: 17,
        energyRangedDamageNumberDice: '2',
        energyRangedDamageDiceType: '8',
        kineticRangedDamageNumberDice: '2',
        kineticRangedDamageDiceType: '10',
        standardMeleeDamageNumberDice: '2',
        standardMeleeDamageDiceType: '10',
        threeAttacksMeleeDamageNumberDice: '3',
        threeAttacksMeleeDamageDiceType: '4',
        fourAttacksMeleeDamageNumberDice: '1',
        fourAttacksMeleeDamageDiceType: '10',
        damageBonus: 11,
    },
    arr = {
        cr: '12',
        highAttackBonus: 21,
        lowAttackBonus: 19,
        energyRangedDamageNumberDice: '2',
        energyRangedDamageDiceType: '8',
        kineticRangedDamageNumberDice: '2',
        kineticRangedDamageDiceType: '10',
        standardMeleeDamageNumberDice: '2',
        standardMeleeDamageDiceType: '12',
        threeAttacksMeleeDamageNumberDice: '3',
        threeAttacksMeleeDamageDiceType: '4',
        fourAttacksMeleeDamageNumberDice: '1',
        fourAttacksMeleeDamageDiceType: '12',
        damageBonus: 12,
    },
    arr = {
        cr: '13',
        highAttackBonus: 22,
        lowAttackBonus: 20,
        energyRangedDamageNumberDice: '2',
        energyRangedDamageDiceType: '10',
        kineticRangedDamageNumberDice: '4',
        kineticRangedDamageDiceType: '6',
        standardMeleeDamageNumberDice: '6',
        standardMeleeDamageDiceType: '4',
        threeAttacksMeleeDamageNumberDice: '3',
        threeAttacksMeleeDamageDiceType: '6',
        fourAttacksMeleeDamageNumberDice: '3',
        fourAttacksMeleeDamageDiceType: '4',
        damageBonus: 13,
    },
    arr = {
        cr: '14',
        highAttackBonus: 23,
        lowAttackBonus: 21,
        energyRangedDamageNumberDice: '5',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '4',
        kineticRangedDamageDiceType: '8',
        standardMeleeDamageNumberDice: '6',
        standardMeleeDamageDiceType: '6',
        threeAttacksMeleeDamageNumberDice: '4',
        threeAttacksMeleeDamageDiceType: '6',
        fourAttacksMeleeDamageNumberDice: '3',
        fourAttacksMeleeDamageDiceType: '6',
        damageBonus: 14,
    },
    arr = {
        cr: '15',
        highAttackBonus: 24,
        lowAttackBonus: 22,
        energyRangedDamageNumberDice: '4',
        energyRangedDamageDiceType: '6',
        kineticRangedDamageNumberDice: '6',
        kineticRangedDamageDiceType: '6',
        standardMeleeDamageNumberDice: '5',
        standardMeleeDamageDiceType: '8',
        threeAttacksMeleeDamageNumberDice: '6',
        threeAttacksMeleeDamageDiceType: '4',
        fourAttacksMeleeDamageNumberDice: '2',
        fourAttacksMeleeDamageDiceType: '10',
        damageBonus: 15,
    },
    arr = {
        cr: '16',
        highAttackBonus: 26,
        lowAttackBonus: 24,
        energyRangedDamageNumberDice: '6',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '5',
        kineticRangedDamageDiceType: '8',
        standardMeleeDamageNumberDice: '6',
        standardMeleeDamageDiceType: '8',
        threeAttacksMeleeDamageNumberDice: '4',
        threeAttacksMeleeDamageDiceType: '8',
        fourAttacksMeleeDamageNumberDice: '3',
        fourAttacksMeleeDamageDiceType: '8',
        damageBonus: 16,
    },
    arr = {
        cr: '17',
        highAttackBonus: 27,
        lowAttackBonus: 25,
        energyRangedDamageNumberDice: '4',
        energyRangedDamageDiceType: '8',
        kineticRangedDamageNumberDice: '4',
        kineticRangedDamageDiceType: '12',
        standardMeleeDamageNumberDice: '8',
        standardMeleeDamageDiceType: '6',
        threeAttacksMeleeDamageNumberDice: '3',
        threeAttacksMeleeDamageDiceType: '12',
        fourAttacksMeleeDamageNumberDice: '6',
        fourAttacksMeleeDamageDiceType: '4',
        damageBonus: 17,
    },
    arr = {
        cr: '18',
        highAttackBonus: 28,
        lowAttackBonus: 26,
        energyRangedDamageNumberDice: '3',
        energyRangedDamageDiceType: '12',
        kineticRangedDamageNumberDice: '8',
        kineticRangedDamageDiceType: '6',
        standardMeleeDamageNumberDice: '8',
        standardMeleeDamageDiceType: '8',
        threeAttacksMeleeDamageNumberDice: '5',
        threeAttacksMeleeDamageDiceType: '8',
        fourAttacksMeleeDamageNumberDice: '4',
        fourAttacksMeleeDamageDiceType: '8',
        damageBonus: 18,
    },
    arr = {
        cr: '19',
        highAttackBonus: 29,
        lowAttackBonus: 27,
        energyRangedDamageNumberDice: '5',
        energyRangedDamageDiceType: '8',
        kineticRangedDamageNumberDice: '6',
        kineticRangedDamageDiceType: '10',
        standardMeleeDamageNumberDice: '9',
        standardMeleeDamageDiceType: '8',
        threeAttacksMeleeDamageNumberDice: '6',
        threeAttacksMeleeDamageDiceType: '8',
        fourAttacksMeleeDamageNumberDice: '3',
        fourAttacksMeleeDamageDiceType: '12',
        damageBonus: 19,
    },
    arr = {
        cr: '20',
        highAttackBonus: 30,
        lowAttackBonus: 28,
        energyRangedDamageNumberDice: '4',
        energyRangedDamageDiceType: '12',
        kineticRangedDamageNumberDice: '8',
        kineticRangedDamageDiceType: '8',
        standardMeleeDamageNumberDice: '13',
        standardMeleeDamageDiceType: '6',
        threeAttacksMeleeDamageNumberDice: '9',
        threeAttacksMeleeDamageDiceType: '6',
        fourAttacksMeleeDamageNumberDice: '5',
        fourAttacksMeleeDamageDiceType: '8',
        damageBonus: 20,
    },
    arr = {
        cr: '21',
        highAttackBonus: 37,
        lowAttackBonus: 29,
        energyRangedDamageNumberDice: '8',
        energyRangedDamageDiceType: '6',
        kineticRangedDamageNumberDice: '6',
        kineticRangedDamageDiceType: '12',
        standardMeleeDamageNumberDice: '15',
        standardMeleeDamageDiceType: '6',
        threeAttacksMeleeDamageNumberDice: '10',
        threeAttacksMeleeDamageDiceType: '6',
        fourAttacksMeleeDamageNumberDice: '4',
        fourAttacksMeleeDamageDiceType: '12',
        damageBonus: 21,
    },
    arr = {
        cr: '22',
        highAttackBonus: 32,
        lowAttackBonus: 30,
        energyRangedDamageNumberDice: '6',
        energyRangedDamageDiceType: '10',
        kineticRangedDamageNumberDice: '8',
        kineticRangedDamageDiceType: '10',
        standardMeleeDamageNumberDice: '17',
        standardMeleeDamageDiceType: '6',
        threeAttacksMeleeDamageNumberDice: '6',
        threeAttacksMeleeDamageDiceType: '12',
        fourAttacksMeleeDamageNumberDice: '8',
        fourAttacksMeleeDamageDiceType: '6',
        damageBonus: 22,
    },
    arr = {
        cr: '23',
        highAttackBonus: 33,
        lowAttackBonus: 31,
        energyRangedDamageNumberDice: '8',
        energyRangedDamageDiceType: '8',
        kineticRangedDamageNumberDice: '13',
        kineticRangedDamageDiceType: '6',
        standardMeleeDamageNumberDice: '12',
        standardMeleeDamageDiceType: '10',
        threeAttacksMeleeDamageNumberDice: '8',
        threeAttacksMeleeDamageDiceType: '10',
        fourAttacksMeleeDamageNumberDice: '6',
        fourAttacksMeleeDamageDiceType: '10',
        damageBonus: 23,
    },
    arr = {
        cr: '24',
        highAttackBonus: 35,
        lowAttackBonus: 33,
        energyRangedDamageNumberDice: '9',
        energyRangedDamageDiceType: '8',
        kineticRangedDamageNumberDice: '15',
        kineticRangedDamageDiceType: '6',
        standardMeleeDamageNumberDice: '21',
        standardMeleeDamageDiceType: '6',
        threeAttacksMeleeDamageNumberDice: '9',
        threeAttacksMeleeDamageDiceType: '10',
        fourAttacksMeleeDamageNumberDice: '8',
        fourAttacksMeleeDamageDiceType: '8',
        damageBonus: 24,
    },
    arr = {
        cr: '25',
        highAttackBonus: 36,
        lowAttackBonus: 34,
        energyRangedDamageNumberDice: '8',
        energyRangedDamageDiceType: '10',
        kineticRangedDamageNumberDice: '16',
        kineticRangedDamageDiceType: '6',
        standardMeleeDamageNumberDice: '12',
        standardMeleeDamageDiceType: '12',
        threeAttacksMeleeDamageNumberDice: '15',
        threeAttacksMeleeDamageDiceType: '6',
        fourAttacksMeleeDamageNumberDice: '6',
        fourAttacksMeleeDamageDiceType: '12',
        damageBonus: 25,
    },
];

export {spellcasterArrayAttackStatistics};