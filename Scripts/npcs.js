// Import the functions to create the dropdown and to fill the content
import { listContent, dropdownListFunction } from "./UniversalScripts/dropdownFunctions.js";

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
import { selectChallengeRatings } from "./UniversalScripts/Lists/challengeRatings.js";

// Array array
import{ selectArray } from "./UniversalScripts/Lists/array.js";

// Creature Type array
import { selectCreatureType } from "./UniversalScripts/Lists/creatureType.js";

// Creature Subtype array
import { selectCreatureSubtype } from "./UniversalScripts/Lists/creatureSubtype.js";

// Class Graft array
import { selectClassGraft } from "./UniversalScripts/Lists/classGraft.js";

// Template Graft array
import { selectTemplateGraft } from "./UniversalScripts/Lists/templateGraft.js";

// Special Abilities array
import { selectSpecialAbilities } from "./UniversalScripts/Lists/specialAbilities.js";

// Skills array
import { selectSkills } from "./UniversalScripts/Lists/skills.js";

// Spells array
import { selectSpells } from "./UniversalScripts/Lists/spells.js";


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

        // Class Graft
        listContent(selectClassGraft, "classGraftNPC", "dropdownSelectionCGNPC");

        // Template Graft
        listContent(selectTemplateGraft, "templateGraftNPC", "dropdownSelectedTGNPC");

        // Special Abilities
        listContent(selectSpecialAbilities, "specialAbilitiesNPC", "dropdownSelectedSANPC");

        // Skills
        listContent(selectSkills, "skillsNPC", "dropdownSelectedSkillsNPC");

        // Spells
        listContent(selectSpells, "spellsNPC", "dropdownSelectedSpellsNPC");

        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown');
    }
};

npcPage.startNPC();
