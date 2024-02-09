let shapechanger = {
    description: 'This subtype is applied to creatures that can dramatically alter their forms.',
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
    lowLightVision: false,
    traits: [
        'change shape (specific details depend upon creature)'
    ],
    abilityNames: [
        'Change Shape (Su)'
    ],
    abilityDescriptions: [
        'The creature has the ability to assume the appearance of a specific creature or type of creature, but it retains most of its own physical qualities. If the form assumed has any of the following abilities, the creature gains them while in that form: blindsight (scent), darkvision, low-light vision, and swim 30 feet. The creature can retain its own breathing ability, or it can assume the ability to breathe in any environment the assumed shape can breathe in (including the no breath ability, which enables it to survive in the vacuum of space). If the ability doesn\'t specify what the creature can change shape into, it can assume the form of any creature of the humanoid type, but it can\'t mimic a specific humanoid. Change shape grants a +10 bonus to Disguise checks to appear as a creature of the type and subtype of the new form, and the DC of the creature\'s Disguise check isn\'t modified as a result of altering major features or disguising itself as a different race or creature type.\nA creature can assume a form that\'s one size category smaller or larger than its original form and become that size. Unless otherwise stated, it can remain in an alternate form indefinitely. Some creatures can transform into unique forms with special modifiers and abilities. These creatures adjust their ability scores, as noted in their description.'
    ],
    otherAbilities: []
}

export {shapechanger}