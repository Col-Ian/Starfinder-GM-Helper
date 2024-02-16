let resistance = {};

let swarm = {
    description: 'This subtype is applied to any collection of Fine, Diminutive, or Tiny creatures (usually vermin) that acts as a single creature.',
    speeds: [],
    immunities: [
        'swarm immunities'
    ],
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
        'swarm defenses',
        'swarm immunities',
        'distraction',
        'swarm attack'
    ],
    abilityNames: [
        'Swarm Defenses (Ex)',
        'Swarm Attack (Ex)',
        'Distraction (Ex)'
    ],
    abilityDescriptions: [
        'Swarms take damage from weapons differently depending on how the weapon targets them.\nA swarm is immune to attacks and effects that target a single creature (including single-target spells), with the exception of mind-affecting effects if the swarm has an Intelligence score and an ability similar to a formian\'s hive mind.\nA swarm takes half again as much damage (+50%) from effects that affect all targets in an area, such as grenades, blast and explode weapons, and many evocation spells.\nA swarm takes normal damage from an attack or effect that affects multiple targets (including lines and fully automatic mode attacks). For the purpose of automatic fire, the swarm counts as five targets. For example, if an automatic attack is made using 12 rounds of ammunition, it can attack a maximum of six targets, so it can damage a swarm normally. However, if two other targets are closer to the attacker than the swarm, they must be attacked first, leaving only four attacks to target the swarm, so it takes no damage.',
        'The creature automatically deals the listed damage to each creature whose space it occupies at the end of its turn with no attack roll needed. Swarm attacks aren\'t subject to a miss chance for concealment or cover.',
        'The creature can nauseate targets that it damages. A living creature that takes damage from a creature with the distraction ability is nauseated for 1 round; the target can negate the effect with a successful Fortitude save at the listed DC.'
    ],
    otherAbilities: []
}

function swarmAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}

export {swarm, swarmAdjustments}