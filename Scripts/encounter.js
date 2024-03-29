import { listContent, dropdownListFunction } from "./UniversalScripts/dropdownFunctions.js";

import { generateEncounter } from "./CreationFiles/Generation/Encounter/generateEncounter.js";
import { selectAveragePartyLevel } from "./UniversalScripts/DropdownLists/averagePartyLevel.js";

let encounterPage = {
    startEncounter: function (){

        // Average Party Level
        listContent(selectAveragePartyLevel, "averagePartyLevelEncounter", "dropdownSelectedAPLEncounter")

        // displayGeneratedEncounter()

        // Show selections for dropdown menus.***************
        dropdownListFunction('.dropdown');

        // Button functionality to add selection upon click.
        let btn = document.querySelector(".generateButton")
        btn.addEventListener('click', generateEncounter)
    }
}

encounterPage.startEncounter()