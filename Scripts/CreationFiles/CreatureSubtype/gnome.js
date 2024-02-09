let gnome = {
    description: 'This subtype is applied to gnomes and creatures related to gnomes.',
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
        'low-light vision',
        'if the NPC is of the gnome race it also gains the eternal hope and gnome magic racial traits and Culture as a master skill'
    ],
    abilityNames: [],
    abilityDescriptions: [],
    otherAbilities: []
}

export {gnome}