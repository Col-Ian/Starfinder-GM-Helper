// Import the functions to create the dropdown and to fill the content
import { listContent, dropdownListFunction } from "./UniversalScripts/dropdownFunctions.js";

/*

Import lists

 */
// Average Party Level array
import { selectAveragePartyLevel } from "./UniversalScripts/Lists/averagePartyLevel.js"

// Challenge Rating array
import { selectChallengeRatings } from "./UniversalScripts/Lists/challengeRatings.js";

// Generate array
import { selectGenerate } from "./UniversalScripts/Lists/generateType.js";

let lootPage = {
    startLoot: function(){
        // Fill content of lists

        // Average Party Level
        let altAPL = document.querySelectorAll('.selectionAveragePartyLevel')

        listContent(altAPL, selectAveragePartyLevel)

        // Challenge Rating
        let altCR = document.querySelectorAll('.selectionChallengeRating')

        listContent(altCR, selectChallengeRatings)

        // Generate
        let altGen = document.querySelectorAll('.selectionGenerate')

        listContent(altGen, selectGenerate)

        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown')

    }
}

lootPage.startLoot()