let elf = {
    description: 'This subtype is applied to elves and creatures related to elves.',
    speeds: [],
    immunities: [],
    resistances:[
        resistance = {
            resistanceType: '',
            resistanceDR: 0,
        }
    ],
    vulnerabilities: [],
    darkvision: 0,
    lowLightVision: true,
    traits: [
        'most creatures with this subtype gain low-light vision and gain Perception as an additional master skill',
        'if the NPC is of the drow race, it gains darkvision 60 ft. instead of low-light vision, as well as the drow immunities, drow magic, and light blindness racial traits',
        'if the NPC is of the elven race, it gains the elven immunities and elven magic racial traits and Mysticism as a master skill',
        'if the NPC is of the half-elven race, it gains the elven blood racial trait and an extra good skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
};

function elfSubtype(subtypeStats, selection){
    if(selection === 'drow'){
        elf.darkvision = 60;
        elf.lowLightVision = false;
        elf.abilityNames = [
            'Drow Immunities',
            'Drow Magic',
            'Light Blindness'

        ];
        elf.abilityDescriptions = [
            'Drow are immune to magical sleep effects and receive a +2 racial bonus to saving throws against enchantment spells and effects.',
            'Drow gain the following spell-like abilities. The caster level for these effects is equal to the drow\'s level.\nAt will—dancing lights, detect magic\nIn addition, drow count as having the Minor Psychic Power feat for the purpose of meeting prerequisites, and if a drow takes the Psychic Power feat, she can add the drow noble\'s limning light supernatural ability to the list of spell-like abilities available to her.\nLimning Light: As a standard action, a drow noble can cause all creatures and objects in a 5-foot-radius burst to shed a pale glow. Creatures outlined by the limning light take a -20 penalty to Stealth checks and don\'t benefit from the concealment usually provided by darkness. If an affected creature is benefiting from an effect such as invisibility, all others within line of sight of it become aware of its location (see page 260 of the Starfinder Core Rulebook). This effect lasts for a number of minutes equal to the drow level. This ability has a range of 100 feet.',
            'A drow exposed to bright light is blinded for 1 round, and dazzled as long as she remains in areas of bright light.'
        ];
    } else if(selection === 'elven'){
        elf.abilityNames = [
            'Elven Immunities',
            'Elven Magic'
        ];
        elf.abilityDescriptions = [
            'Elves are immune to magic sleep effects and receive a +2 racial bonus to saving throws against enchantment spells and effects.',
            'Elves receive a +2 racial bonus to caster level checks to overcome spell resistance. In addition, elves receive a +2 racial bonus to Mysticism skill checks.'
        ];
    } else {
        elf.abilityNames = [
            'Elven Blood'
        ];
        elf.abilityDescriptions = [
            'Half-elves are immune to magic sleep effects and receive a +2 racial bonus to saving throws against enchantment spells and effects.'
        ];
    }
    subtypeStats = elf;
};
export {
    elf,
    elfSubtype
};