// Notes: They must have a subtype that matches its race (such as human, lashunta, or shirren) or that is related to its race (such as goblinoid).

let humanoid = {
    description: 'A humanoid usually has two arms, two legs, and one head, or it has a humanlike torso, arms, and a head. Humanoids have few or no supernatural or extraordinary abilities, but most can speak and usually have well-developed societies.',
    immunities: [],
    resistances:[],
    darkvision: 0,
    lowLightVision: false,
    traits: ['Must have a subtype that matches its race (such as human, lashunta, or shirren) or that is related to its race (such as goblinoid).'],
    adjustments: '+2 to one type of saving throw.',
    otherAbilities:[]
};

function humanoidAdjustments(mainStatistics, attackStatistics, attributeBase){
    let savingThrows = [
        mainStatistics.fort,
        mainStatistics.ref,
        mainStatistics.will
    ];
    
    let randomSavingThrow = Math.floor(Math.random()*savingThrows.length);

    savingThrows[randomSavingThrow] += 2;
    mainStatistics.fort = savingThrows[0];
    mainStatistics.ref = savingThrows[1];
    mainStatistics.will = savingThrows[2];
};

export {
    humanoid,
    humanoidAdjustments
};