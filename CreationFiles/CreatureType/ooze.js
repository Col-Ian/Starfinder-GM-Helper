// Notes: set Intelligence modifier to —. (mindless)

let ooze = {
    description: 'An ooze is an amorphous or mutable creature.',
    immunities: [],
    resistances:[],
    darkvision: 0,
    lowLightVision: false,
    traits: [
        'Blindsight',
        'mindless',
        'ooze immunities',
        'sightless'],
    adjustments: '+2 to Fortitude saving throws, -2 to Reflex and Will saving throws, no master or good skills unless the creature would have them naturally, rather than through training.',
    otherAbilities:[
        'blindsight 60 ft.',
        'mindless',
        'ooze immunities',
        'sightless'
    ]
};

function oozeAdjustments(mainStatistics, attackStatistics){
    mainStatistics.fort += 2;
    mainStatistics.ref -= 2;
    mainStatistics.will -= 2;
    mainStatistics.abilityScoreModifiers = [];
};

export {
    ooze,
    oozeAdjustments
};

// let mindless = false;

// console.log(mindless)

// function isMindless(type){
//     type.traits.forEach(element => {
//         if(element === 'mindless'){
//             mindless = true;
//         };
//     });
// };

// isMindless(ooze)
// console.log(mindless)