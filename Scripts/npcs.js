// Import challenge rating array
import {challengeRatings} from "./UniversalScripts/challengeRatings.js";

// Import the function to create the drop down list
import { dropdownListFunction } from "./UniversalScripts/dropdownListFunction.js";

// Import the function to hide the dropdown div
import { hideDropdownFunction } from "./UniversalScripts/hideDropdownFunction.js";

let selectArray = [
    '-',
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
]

let npcPage = {
    startNPC: function(){

        // Hiding the dropdown options
        hideDropdownFunction()

        // Show selections for drop down menus.***************

        // Challenge Rating
        let altCR = document.querySelectorAll('.selectionCR')

        dropdownListFunction(altCR, challengeRatings)

        // Array
        let altArrays = document.querySelectorAll('.selectionArray')

        dropdownListFunction(altArrays, selectArray)

        // Skills
        let altSkills = document.querySelectorAll('.selectionSkill')

        dropdownListFunction(altSkills, selectSkills)
        // Set the value input of the Skills list
        let skillInputs = document.querySelectorAll('.skillInput')
        skillInputs.forEach(function(e,i){
            e.value = selectSkills[i]
        })
    }
}

npcPage.startNPC();
