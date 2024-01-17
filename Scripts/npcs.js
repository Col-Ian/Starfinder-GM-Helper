// Import the functions to create the dropdown and to fill the content
import { listContent, dropdownListFunction } from "./UniversalScripts/dropdownFunctions.js";

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
        let altCR = document.querySelectorAll('.selectionCR')

        listContent(altCR, selectChallengeRatings)

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

        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown')
    }
}

npcPage.startNPC();
