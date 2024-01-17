// Import challenge rating array
import {challengeRatings} from "./UniversalScripts/challengeRatings.js";

// Import the functions to create the dropdown and to fill the content
import { listContent, dropdownListFunction } from "./UniversalScripts/dropdownFunctions.js";

let selectArray = [
    'Combatant',
    'Expert',
    'Spellcaster'
];

let selectSkills = [
    'Acrobatics',
    'Athletics',
    'Bluf',
    'Clture',
    'Diplomacy',
    'Disguise',
    'Intimidate',
    'Life Science',
    'Medicine',
    'Mysticism',
    'Physical Science',
    'Piloting',
    'Profession',
    'Sense Motive',
    'Sleight of Hand',
    'Stealth',
    'Survival',
];

let selectCreatureType = [
    'Aberration',
    'Animal',
    'Construct',
    'Dragon',
    'Fey',
    'Humanoid',
    'Magical Beast',
    'Monstrous Humanoid',
    'Ooze',
    'Outsider',
    'Plant',
    'Undead',
    'Vermin',
];

let selectCreatureSubtype = [
    'None',
    'Aeon',
    'Agathion',
    'Air',
    'Android',
    'Angel',
    'Aquatic',
    'Archon',
    'Azata',
    'Cold',
    'Daemon',
    'Demon',
    'Devil',
    'Dwarf',
    'Earth',
    'Elemental',
    'Elf',
    'Fire',
    'Giant',
    'Goblinoid',
    'Gray',
    'Halfling',
    'Human',
    'Ikeshti',
    'Incorporeal',
    'Inevitable',
    'Kasatha',
    'Lashunta',
    'Maraquoi',
    'Orc',
    'Plantlike',
    'Protean',
    'Reptoid',
    'Ryphorian',
    'Sarcesian',
    'Shapechanger',
    'Shirren',
    'Skittermander',
    'Swarm',
    'Verthani',
    'Vesk',
    'Water',
    'Ysoki',
    'Chaotic',
    'Evil',
    'Extraplanar',
    'Good',
    'Lawful',
    'Magical',
    'Native',
    'Technological'
]

let selectClassGraft = [
    'None',
    'Return later'
];

let selectTemplateGraft = [
    'None',
    'Return later'
];

let selectSpecialAbilities = [
    'None',
    'Return later'
];

let selectSpells = [
    'None',
    'Return later'
];

let npcPage = {
    startNPC: function(){
        
        // Show selections for drop down menus.***************

        // Challenge Rating
        let altCR = document.querySelectorAll('.selectionCR')

        listContent(altCR, challengeRatings)

        // Array
        let altArrays = document.querySelectorAll('.selectionArray')

        listContent(altArrays, selectArray)

        // Creature Type
        let altCreatureType = document.querySelectorAll('.selectionCreatureType')

        listContent(altCreatureType, selectCreatureType)

        // Creature Subtype
        let altCreatureSubtype = document.querySelectorAll('.selectionCreatureSubtype')

        listContent(altCreatureSubtype, selectCreatureSubtype)

        // Class Graft
        let altClassGraft = document.querySelectorAll('.selectionClassGraft')

        listContent(altClassGraft, selectClassGraft)

        // Template Graft
        let altTemplateGraft = document.querySelectorAll('.selectionTemplateGraft')

        listContent(altTemplateGraft, selectTemplateGraft)

        // Special Abilities
        let altSpecialAbilities = document.querySelectorAll('.selectionSpecialAbilities')

        listContent(altSpecialAbilities, selectSpecialAbilities)

        // Skills
        let altSkills = document.querySelectorAll('.selectionSkill')

        listContent(altSkills, selectSkills)

        // Spells
        let altSpells = document.querySelectorAll('.selectionSpells')

        listContent(altSpells, selectSpells)

        dropdownListFunction('.dropdown')
    }
}

npcPage.startNPC();
