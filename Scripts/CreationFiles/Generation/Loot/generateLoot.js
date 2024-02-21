import { selectAveragePartyLevel } from "../../../UniversalScripts/DropdownLists/averagePartyLevel.js";
import { selectChallengeRatingsCapped } from "../../../UniversalScripts/DropdownLists/challengeRatingsCap.js";
import { appendChildWithClass } from "../../../UniversalScripts/appendChildWithClass.js";
import { generateLootList } from "./generateLootList.js";

export function generateLoot(){

    // Find all selected options. They will have the .active from the dropdownFunctions
    let selections = document.querySelectorAll('.active')

    // Set our lists that will be displayed to user.
    // Will be filled with items
    let finalItemList = [];
    // Will be filled with credits
    let finalCurrency = 0;
            
    // Get the main wrapper to append to.
    let mainWrapperDiv = document.getElementById("lootResultWrapper")
    // Clear so it doesn't populate more than once when user clicks again.
    mainWrapperDiv.innerHTML = ''

    // If null, it means no option is selected.
    // if (selections.length < 2){
    //     let noOptionDiv = document.createElement('div');
    //     noOptionDiv.appendChild(document.createTextNode('All options must be selected.'))
    //     mainWrapperDiv.appendChild(noOptionDiv)
    // } else{

        // Find the maximum item level based on the Average Party Level selected.
        let maxItemLevelInt = 1
        // selectAveragePartyLevel.forEach(e=>{
        //     if (e.value === selections[0]){
        //         maxItemLevelInt = parseInt(e.value);
        //     };
        // })

        // Find the encounterWealth based on the Challenge Rating selected.
        let encounterWealth = 460;
        // selectChallengeRatingsCapped.forEach(e=>{
        //     if (e.value === selections[1]){
        //         encounterWealth = e.encounterWealth;
        //     };
        // });

        // // The option to select how it's generated. To be added later
        // let generateSelection = selections[2];

        // Function to fill finalList with our generated loot.

        // Create the results wrapper
        let resultWrapperDiv = document.createElement('div');
        appendChildWithClass('resultsWrapper', resultWrapperDiv, mainWrapperDiv);

        // Create the result types for their columns.
        let resultsAmountDiv = document.createElement('div');
        appendChildWithClass('allResultsAmount', resultsAmountDiv, resultWrapperDiv);

        let resultsItemDiv = document.createElement('div');
        appendChildWithClass('allResultsItem', resultsItemDiv, resultWrapperDiv);

        let resultsLevelDiv = document.createElement('div');
        appendChildWithClass('allResultsLevel', resultsLevelDiv, resultWrapperDiv);

        let resultsBulkDiv = document.createElement('div');
        appendChildWithClass('allResultsBulk', resultsBulkDiv, resultWrapperDiv);

        generateLootList(finalItemList, finalCurrency, maxItemLevelInt, encounterWealth)
        console.log(finalItemList)
        console.log(finalCurrency)
    // }
}