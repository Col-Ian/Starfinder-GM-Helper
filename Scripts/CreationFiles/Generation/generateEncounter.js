import { selectAveragePartyLevel } from "../../UniversalScripts/Lists/averagePartyLevel.js";
import { generateEncounterList } from "./generateEncounterList.js";

// The idea of the function is to create an encounter that contains a creature close to the CR selected, while potentially adding more creatures to aid in the encounter.

export function generateEncounter(){
    
    // Set our list that will be displayed to user.
    let finalList = [];
            
    // Get the main wrapper to append to.
    let mainWrapperDiv = document.getElementById("encounterResultWrapper")
    // Clear so it doesn't populate more than once when user clicks again.
    mainWrapperDiv.innerHTML = ''

    // Get the currently selected item from the dropdown
    let dropdownSelected = document.getElementById('active')

    // If null, it means no option is selected.
    if (dropdownSelected === null){
        let noOptionDiv = document.createElement('div');
        noOptionDiv.appendChild(document.createTextNode('No option selected.'))
        mainWrapperDiv.appendChild(noOptionDiv)
    } else{

        // Initialize xpBudget
        let xpBudget = 0;

        // Find the xpBudget based on the Average Party Level selected.
        selectAveragePartyLevel.forEach(e=>{
            if (e.value === dropdownSelected.textContent){
                xpBudget = e.xpBudget
            };
        })

        // Parse the string into a float to pass into the next function.
        let aplFloat = parseFloat(dropdownSelected.textContent)

        // Function to fill finalList with our generated encounter.
        generateEncounterList(aplFloat, xpBudget, finalList)

        // Create the results divs before adding the class to them
        let resultWrapperDiv = document.createElement("div");
        resultWrapperDiv.classList.add("resultsWrapper")
        mainWrapperDiv.appendChild(resultWrapperDiv)


        let allResultsCRDiv = document.createElement("div");
        
        allResultsCRDiv.classList.add("allResultsCR");
        let allResultsNameDiv = document.createElement("div");
        allResultsNameDiv.classList.add("allResultsName");

        // Append to the wrapper
        resultWrapperDiv.appendChild(allResultsCRDiv);
        resultWrapperDiv.appendChild(allResultsNameDiv);

        // Fill allResultsCR div
        let resultCRDiv = document.createElement("div");
        resultCRDiv.classList.add("resultCR");

        // Create the div for the label
        let resultCRLabelDiv = resultCRDiv
        resultCRLabelDiv.classList.add("resultLabel");

        // Add the CR label to the results
        let labelCR = document.createTextNode("CR");
        resultCRLabelDiv.appendChild(labelCR);
        allResultsCRDiv.appendChild(resultCRLabelDiv);

        // Fill allResultsName div
        let resultNameDiv = document.createElement("div");
        resultNameDiv.classList.add("resultName");

        // Create the div for the label
        let resultNameLabelDiv = resultNameDiv
        resultNameLabelDiv.classList.add("resultLabel");
        
        // Add the Name label to the results
        let labelName = document.createTextNode("Name");
        resultNameLabelDiv.appendChild(labelName);
        allResultsNameDiv.appendChild(resultNameLabelDiv);

        finalList.forEach(i=>{
            // Fill the CR column
            let itemCR = document.createTextNode(i.creatureCR)
            
            let resCR = document.createElement("div");
            resCR.classList.add("resultCR");
            resCR.appendChild(itemCR)
            allResultsCRDiv.appendChild(resCR)

            // Fill the Name column
            let resName = document.createElement("div")
            resName.classList.add("resultName")

            let a = document.createElement("a")
            let itemName = document.createTextNode(i.name)
            a.appendChild(itemName)
            a.classList.add("linkToCreature")
            a.href = i.link
            
            resName.appendChild(a)
            allResultsNameDiv.appendChild(resName)
        })
    }
}