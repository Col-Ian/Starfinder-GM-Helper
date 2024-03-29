// Import the functions to create the dropdown and to fill the content
import { listContent, dropdownListFunction } from "./UniversalScripts/dropdownFunctions.js";

// Import function to generate NPCs
import { generateNPC } from "./CreationFiles/Generation/NPCs/generateNPC.js";

/*

listContent(
    the array with the values to fill the li elements,
    id of the ul in the html file to append to,
    id of the default selection for the ul
)

*/

/*

Import lists

 */

// Challenge Rating array
import { selectChallengeRatings } from "./UniversalScripts/DropdownLists/challengeRatings.js";

// Array array
import{ selectArray } from "./UniversalScripts/DropdownLists/array.js";

// Creature Type array
import { selectCreatureType } from "./UniversalScripts/DropdownLists/creatureType.js";

// Creature Subtype array
import { selectCreatureSubtype } from "./UniversalScripts/DropdownLists/creatureSubtype.js";

// Class Graft array
import { selectClassGraft } from "./UniversalScripts/DropdownLists/classGraft.js";

// Template Graft array
import { selectTemplateGraft } from "./UniversalScripts/DropdownLists/templateGraft.js";

// Special Abilities array
import { selectSpecialAbilities } from "./UniversalScripts/DropdownLists/specialAbilities.js";

// Skills array
import { selectSkills } from "./UniversalScripts/DropdownLists/skills.js";

// Spells array
import { selectSpells } from "./UniversalScripts/DropdownLists/spells.js";


let npcPage = {
    startNPC: function(){
        // Fill content of lists
        
        // Challenge Rating
        listContent(selectChallengeRatings, "challengeRatingNPC", "dropdownSelectedCRNPC");

        // Array
        listContent(selectArray, "arrayNPC", "dropdownSelectedArrayNPC");

        // Creature Type
        listContent(selectCreatureType, "creatureTypeNPC", "dropdownSelectedCTNPC");

        // Creature Subtype
        listContent(selectCreatureSubtype, "creatureSubtypeNPC", "dropdownSelectedCSNPC");

        // Class Graft (can be added for additional customization later)
        // listContent(selectClassGraft, "classGraftNPC", "dropdownSelectionCGNPC");

        // Template Graft (can be added for additional customization later)
        // listContent(selectTemplateGraft, "templateGraftNPC", "dropdownSelectedTGNPC");

        // Special Abilities (can be added for additional customization later)
        // listContent(selectSpecialAbilities, "specialAbilitiesNPC", "dropdownSelectedSANPC");

        // Skills (can be added for additional customization later)
        // listContent(selectSkills, "skillsNPC", "dropdownSelectedSkillsNPC");

        // Spells (can be added for additional customization later)
        // listContent(selectSpells, "spellsNPC", "dropdownSelectedSpellsNPC");

        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown');

        // Button functionality to add selection upon click.
        let btn = document.querySelector(".generateButton")
        btn.addEventListener('click', generateNPC);
    }
};

npcPage.startNPC();
