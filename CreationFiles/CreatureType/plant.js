let plant = {
    description: 'This type describes vegetable creatures. Note that regular plants, such as those growing in gardens or fields, lack Wisdom and Charisma modifiers and are objects, not creatures, even though they are alive.',
    traits: 'Low-light vision, plant immunities.',
    adjustments: '+2 to Fortitude saving throws.'
};

function plantAdjustments(mainStatistics, attackStatistics){
    mainStatistics.fort += 2;
};

export {
    plant,
    plantAdjustments
}