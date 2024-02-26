import { selectAveragePartyLevel } from "../../../UniversalScripts/DropdownLists/averagePartyLevel.js";
import { selectChallengeRatingsCapped } from "../../../UniversalScripts/DropdownLists/challengeRatingsCap.js";
import { appendChildWithClass } from "../../../UniversalScripts/appendChildWithClass.js";
import { generateLootList } from "./generateLootList.js";

export function generateLoot(){

    // Find all selected options. They will have the .active from the dropdownFunctions
    let selections = document.querySelectorAll('.active')
    // Set the item list that will be displayed to user.
    let finalItemList = [];
            
    // Get the main wrapper to append to.
    let mainWrapperDiv = document.getElementById("lootResultWrapper")
    // Clear so it doesn't populate more than once when user clicks again.
    mainWrapperDiv.innerHTML = ''

    // If null, it means no option is selected.
    if (selections.length < 2){
        let noOptionDiv = document.createElement('div');
        noOptionDiv.appendChild(document.createTextNode('All options must be selected.'))
        mainWrapperDiv.appendChild(noOptionDiv)
    } else{

        // Find the maximum item level based on the Average Party Level selected.
        let maxItemLevelInt = 0;
        selectAveragePartyLevel.forEach(e=>{
            if (e.value === selections[0].innerText){
                maxItemLevelInt = parseInt(e.value);
            };
        })

        // Find the encounterWealth based on the Challenge Rating selected.
        let encounterWealth = 0;
        selectChallengeRatingsCapped.forEach(e=>{
            if (e.value === selections[1].innerText){
                encounterWealth = e.encounterWealth;
            };
        });

        // // The option to select how it's generated. To be added later
        // let generateSelection = selections[2];

        // Function to fill finalList with our generated loot.
        generateLootList(finalItemList, maxItemLevelInt, encounterWealth)
        

        // Reduce encounterWealth to get the total amount of credits awarded.
        // Set the currency that will be displayed to the user
        let finalCurrency = 0;

        // Generate a minimum of 20% wealth
        finalCurrency += Math.floor(encounterWealth*0.2);

        // Remove the 20% from the encounterWealth
        encounterWealth -= finalCurrency

        // Remove the price of the items in the finalItemList from the encounterWealth
        finalItemList.forEach(i=>{
            // Remove 60% of the first item's cost from the budget instead of at full value.
            if(finalItemList.indexOf(i) === 0){
                encounterWealth -= Math.floor(i.price*0.6);

                // Any quantity over 1 has full value.
                encounterWealth -= (i.price*(i.quantity-1))
            } else {
                encounterWealth -= i.price*i.quantity
            }
        });

        // Add the remaining wealth to the finalCurrency
        finalCurrency += encounterWealth
        


        /*
        *********************************************
        Add Results to HTML
        *********************************************
        */ 

        
        // Fill in the credits gained First
        let creditsGainedWrapper = document.createElement('div');
        appendChildWithClass('creditsGainedWrapper', creditsGainedWrapper, mainWrapperDiv)

        let creditsGained = document.createTextNode(`Credits: ${finalCurrency}`)
        let creditsDiv = document.createElement('div')
        appendChildWithClass('creditsGained', creditsDiv, creditsGainedWrapper)
        creditsDiv.appendChild(creditsGained)


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
        

        // Fill resultsAmount div
        let resultAmountDiv = document.createElement("div");
        appendChildWithClass('resultAmount', resultAmountDiv, resultsAmountDiv)

        // Create the label class.
        resultAmountDiv.classList.add("resultLabel");
        let labelAmount = document.createTextNode("#");

        // Add the Amount label to the results
        resultAmountDiv.appendChild(labelAmount);


        // Fill resultsItem div
        let resultItemDiv = document.createElement("div");
        appendChildWithClass('resultItem', resultItemDiv, resultsItemDiv)

        // Create the label class.
        resultItemDiv.classList.add("resultLabel");
        let labelItem = document.createTextNode("Item");

        // Add the Item label to the results
        resultItemDiv.appendChild(labelItem);


        // Fill resultsLevel div
        let resultLevelDiv = document.createElement("div");
        appendChildWithClass('resultLevel', resultLevelDiv, resultsLevelDiv)

        // Create the label class.
        resultLevelDiv.classList.add("resultLabel");
        let labelLevel = document.createTextNode("Level");

        // Add the Level label to the results
        resultLevelDiv.appendChild(labelLevel);


        // Fill allResultsBulk div
        let resultBulkDiv = document.createElement("div");
        appendChildWithClass('resultBulk', resultBulkDiv, resultsBulkDiv)

        // Create the label class.
        resultBulkDiv.classList.add("resultLabel");
        let labelBulk = document.createTextNode("Bulk");

        // Add the Bulk label to the results
        resultBulkDiv.appendChild(labelBulk);


        // Fill the columns with items from finalItemList
        finalItemList.forEach(i=>{

            // Fill the Amount column
            let itemAmount = document.createTextNode(i.quantity);
            
            let resAmount = document.createElement("div");
            appendChildWithClass('resultAmount', resAmount, resultsAmountDiv);
            resAmount.appendChild(itemAmount);

            // Fill the Item column
            let resItem = document.createElement("div");
            appendChildWithClass('resultItem', resItem, resultsItemDiv);

            // Add the text and link to the Item column
            let a = document.createElement("a");
            let itemName = document.createTextNode(i.name);
            a.appendChild(itemName);
            a.classList.add("linkToItem");
            a.href = i.link;
            
            resItem.appendChild(a);

            // Fill the Level column
            let resLevel = document.createElement('div');
            appendChildWithClass('resultLevel', resLevel, resultsLevelDiv);

            let itemLevel = document.createTextNode(i.level);
            resLevel.appendChild(itemLevel);

            // Fill the Bulk column
            let resBulk = document.createElement('div');
            appendChildWithClass('resultBulk', resBulk, resultsBulkDiv);

            let itemBulk = document.createTextNode(i.bulk);
            resBulk.appendChild(itemBulk);
        })
    }
}