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
// Tier array
import { selectStarshipTier } from "./UniversalScripts/Lists/starshipTier.js";

// Frame array
import { selectFrame } from "./UniversalScripts/Lists/frame.js";

// Armament array
import { selectArmament } from "./UniversalScripts/Lists/armament.js"

let starshipPage = {
    startStarship: function(){
        // Fill content of lists

        // Tier
        listContent(selectStarshipTier, "tierStarship", "dropdownSelectedTierStarship");

        // Frame
        listContent(selectFrame, "frameStarship", "dropdownSelectedFrameStarship");

        // Armament
        listContent(selectArmament, "armamentStarship", "dropdownSelectedArmamentStarship")
        
        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown');
    }
}

starshipPage.startStarship();