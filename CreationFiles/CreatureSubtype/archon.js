let archon = {
    description: 'Archons are celestials, or good outsiders, native to Heaven.',
    speeds: [],
    immunities: [
        'electricity',
        'petrification'
    ],
    resistances:[
        resistance = {
            resistanceType: 'saving throws against poison +',
            resistanceDR: 4,
        },
    ],
    vulnerabilities: [],
    darkvision: 60,
    lowLightVision: true,
    traits: [
        'darkvision 60 ft.',
        'low-light vision',
        'aura of menace',
        '+4 to saving throws against poison',
        'immunity to electricity and petrification',
        'truespeech',
        'many archons can cast teleport as an at-will spell-like ability (caster level equal to its CR)'
    ],
    abilityNames: [
        'Aura of Menace (Su)',
        'Truespeech (Su)'
    ],
    abilityDescriptions: [
        'This ability imposes a divine penalty (usually -2) to the AC, attacks, and saving throws of each hostile creature within the aura (usually 20 feet) that fails a Will save. This penalty lasts for 24 hours or until that creature deals damage to the archon who generated the aura. A creature that has resisted or broken the effect can\'t be affected again by the same archon\'s aura for 24 hours. The aura of a more powerful or weaker archon might impose a larger or smaller penalty and might have a larger or smaller radius, respectively.',
        'The creature can speak with any other creature that has a language. This ability is always active.'
    ],
    otherAbilities: [
        'many archons can cast teleport as an at-will spell-like ability (caster level equal to its CR)'
    ]
}

export {archon}