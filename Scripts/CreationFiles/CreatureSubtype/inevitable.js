let resistance = {};

let inevitable = {
    description: 'Inevitables are construct-like outsiders built to enforce the laws of the universe.',
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
    lowLightVision: true,
    traits: [
        'darkvision 60 ft.',
        'low-light vision',
        'constructed',
        'regeneration (suppressed by chaotic-aligned attacks)',
        'truespeech'
    ],
    abilityNames: [
        'Constructed',
        'Regeneration (Ex) 1/2 CR (chaotic-aligned)',
        'Truespeech (Su)'
    ],
    abilityDescriptions: [
        'For effects targeting creatures by type, inevitable count as both constructs and humanoids (whichever type allows an ability to affect them for abilities that affect only one type, and whichever is worse for abilities that affect both types). They receive a +2 racial bonus to saving throws against disease, mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. In addition, inevitable do not breathe or suffer the normal environmental effects of being in a vacuum.',
        'The creature regains Hit Points at the start of its turn, as with fast healing, but it can\'t die as long as its regeneration is still functioning (although creatures with regeneration still fall unconscious when their Hit Points reach 0). Certain attacks, typically those that deal acid or fire damage, cause a creature\'s regeneration to stop functioning for 1 round. During this round, the creature doesn\'t regain Hit Points and can die normally. The creature\'s stat block describes the types of damage that suppress the regeneration.\nRegeneration doesn\'t restore Hit Points lost from starvation, thirst, or suffocation. Creatures with regeneration can regrow lost portions of their bodies and can reattach severed body parts if they\'re recovered within 1 hour of severing. Severed parts that aren\'t reattached wither and decompose normally.\nA creature usually must have a Constitution score or modifier to have this ability.',
        'The creature can speak with any other creature that has a language. This ability is always active.'
    ],
    otherAbilities: []
}

function inevitableAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {inevitable, inevitableAdjustments}