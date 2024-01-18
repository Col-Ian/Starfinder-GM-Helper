// Import the functions to create the dropdown and to fill the content
import { listContent, dropdownListFunction } from "./UniversalScripts/dropdownFunctions.js";


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
        let altTier = document.querySelectorAll('.selectionTier');

        listContent(altTier, selectStarshipTier);

        // Frame
        let altFrame = document.querySelectorAll('.selectionFrame');

        listContent(altFrame, selectFrame);

        // Armament
        let altArmament = document.querySelectorAll('.selectionArmament');

        listContent(altArmament, selectArmament)
        
        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown');
    }
}

starshipPage.startStarship();