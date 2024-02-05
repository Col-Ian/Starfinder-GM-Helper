import { listContent, dropdownListFunction } from "./UniversalScripts/dropdownFunctions.js";

import { displayGeneratedEncounter } from "../CreationFiles/Generation/generateEncounter.js";
import { selectAveragePartyLevel } from "./UniversalScripts/Lists/averagePartyLevel.js";

let encounterPage = {
    startEncounter: function (){

        // Average Party Level
        listContent(selectAveragePartyLevel, "averagePartyLevelEncounter", "dropdownSelectedAPLEncounter")

        displayGeneratedEncounter()

        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown');
    }
}

encounterPage.startEncounter()