let resistance = {};

let dwarf = {
    description: 'This subtype is applied to dwarves and creatures related to dwarves.',
    speeds: [],
    immunities: [],
    resistances:[
        resistance = {
            resistanceType: '',
            resistanceDR: 0,
        }
    ],
    vulnerabilities: [],
    darkvision: 60,
    lowLightVision: false,
    traits: [
        'most creatures with this subtype gain darkvision 60 ft.',
        'if the NPC is of the dwarven race, it also gains the slow but steady, stonecunning, traditional enemies, and weapon familiarity racial traits'
    ],
    abilityNames: [
        'Slow but Steady',
        'Stonecunning',
        'Weapon Familiarity'
    ],
    abilityDescriptions: [
        'Dwarves have a land speed of 20 feet, which is never modified when they are encumbered or wearing heavy armor. They also gain a +2 racial bonus to saving throws against poisons, spells, and spell-like abilities, and when standing on the ground they gain a +4 racial bonus to their KAC against bull rush and trip combat maneuvers.',
        'Dwarves gain a +2 bonus to Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.',
        'Dwarves are proficient with basic and advanced melee weapons and gain specialization with those weapons at 3rd level.'
    ],
    otherAbilities: []
}

function dwarfAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {dwarf, dwarfAdjustments}