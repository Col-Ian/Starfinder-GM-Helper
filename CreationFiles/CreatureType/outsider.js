let outsider = {
    description: 'An outsider is at least partially composed of the essence (but not necessarily the material) of a plane other than the Material Plane. Some creatures start out as another type and become outsiders when they attain a higher or lower state of spiritual existence.',
    traits: 'Darkvision 60 ft.; if the outsider is a member of a specific race (such as angel, devil, etc.), it must have a subtype to match its race.',
    adjustments: '+2 to one type of saving throw, +1 to attack rolls.'
};

function outsiderAdjustments(mainStatistics, attackStatistics){
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
    attackStatistics.highAttackBonus += 1;
    attackStatistics.lowAttackBonus += 1;
};

export {
    outsider,
    outsiderAdjustments
}