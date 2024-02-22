// Import the functions to create the dropdown and to fill the content
import { generateLoot } from "./CreationFiles/Generation/Loot/generateLoot.js";
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
// Average Party Level array
import { selectAveragePartyLevel } from "./UniversalScripts/DropdownLists/averagePartyLevel.js";

// Challenge Rating array (Capped at 20)
import { selectChallengeRatingsCapped } from "./UniversalScripts/DropdownLists/challengeRatingsCap.js";

// Generate array
import { selectGenerate } from "./UniversalScripts/DropdownLists/generateType.js";

let lootPage = {
    startLoot: function(){
        // Fill content of lists

        // Average Party Level
        listContent(selectAveragePartyLevel, "averagePLLoot", "dropdownSelectedAPLLoot");

        // Challenge Rating
        listContent(selectChallengeRatingsCapped, "challengeRatingLoot", "dropdownSelectedCRLoot");

        // Generate
        // listContent(selectGenerate, "generateLoot", "dropdownSelectedGenerateLoot"); To be added later

        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown');

        // Button functionality to add selection upon click.
        let btn = document.querySelector(".generateButton")
        btn.addEventListener('click', generateLoot);

    }
};

lootPage.startLoot();