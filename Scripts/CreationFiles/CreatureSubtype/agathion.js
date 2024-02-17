let resistance = {};

let agathion = {
    description: 'Agathions are celestials, or good outsiders, native to Nirvana.',
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
        resistance = {
            resistanceType: 'cold ',
            resistanceDR: 10,
        },
        resistance = {
            resistanceType: 'sonic ',
            resistanceDR: 10,
        }
    ],
    vulnerabilities: [],
    darkvision: 0,
    lowLightVision: true,
    traits: [
        'low-light vision',
        '+4 to saving throws against poison',
        'immunity to electricity and petrification',
        'resistance 10 to cold and sonic',
        'healing channel (as per the healer mystic connection power)',
        'truespeech',
        'speak with animals (as per the xenodruid mystic connection power)'
    ],
    abilityNames: [
        'Truespeech (Su)',
        'Healing Channel (Su)',
        'Speak with Animals (Su)'

    ],
    abilityDescriptions: [
        'The creature can speak with any other creature that has a language. This ability is always active.',
        'You can heal yourself and your allies. You can spend 1 Resolve Point to channel this energy. Healing yourself with channeled energy is a move action, healing an ally you touch is a standard action, and healing all allies within 30 feet is a full action. This energy restores 2d8 Hit Points and increases by 2d8 at 3rd level and every 3 levels thereafter.',
        'You can communicate with any creature of the animal type, though this doesn\'t make it friendly. If an animal is friendly toward you, it may do you favors. This ability allows you to use Intimidate to bully animals, and you can use any other language-dependent effect against animals.'
    ],
    otherAbilities: []
}

function agathionAdjustments(
    mainStatistics,
    attackStatistics,
    attributeBase,
    skills
){

}
export {agathion,agathionAdjustments}