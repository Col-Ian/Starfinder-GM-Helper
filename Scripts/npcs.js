// Import challenge rating array
import {challengeRatings} from "./UniversalScripts/challengeRatings.js";

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
]

let npcPage = {
    startNPC: function(){

        // Hiding the dropdown options
        const dropdownButton = document.querySelector(".dropdownButton")
        const dropdownMenu = document.querySelector('.dropdownMenuSelection')

        dropdownButton.addEventListener("click", ()=>{
            dropdownMenu.classList.toggle("hide")
        })

        window.addEventListener('click', (e)=>{
            if (e.target !== dropdownButton){
                dropdownMenu.classList.add('hide');
            }
        })

        // Show selections for drop down menus.
        // Challenge Rating
        let altsCR = document.querySelectorAll('.selectionCR')

        altsCR.forEach(function(e,i){
            e.textContent = challengeRatings[i]
        })

        // Skills
        let skills = document.querySelectorAll('.selectionSkill')

        skills.forEach(function(e,i){
            e.textContent = selectSkills[i]
        })

    }
}

npcPage.startNPC();
