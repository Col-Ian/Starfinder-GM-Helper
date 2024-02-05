import { creatureList } from "../creatureList.js";

// let selectedCR = 6.0;

// let xpBudget = 2400;

let selectedCR = 3.0;

let xpBudget = 800;

let finalList = []

// The idea of the function is to create an encounter that contains a creature close to the CR selected, while potentially adding more creatures to aid in the encounter.

function generateEncounter(selectedCR, xpBudget, finalList){

    // Initialize the list of creatures to be pushed to the outside array.
    let listOfCreatures = [];
    
    // set a value for the remaining CR
    let remainingBudget = xpBudget;


    // Start with a creature that is close to the CR selected (minimum of 3 ratings lower)
    // Initialize a list to use for a placeholder
    let placeholderList = []

    // Fill the placeholder list with possible creatures
    creatureList.forEach((e)=>{
        if( e.crInt <= selectedCR && e.crInt >= (selectedCR -3)){
            placeholderList.push(e);
        }
    })

    // Select a random creature from the placeholder list to add to listOfCreatures and push it
    let randomFirstCreature = placeholderList[Math.floor(Math.random() * placeholderList.length)];
    listOfCreatures.push(randomFirstCreature);
    // Subtract from the XP Budget
    remainingBudget -= randomFirstCreature.exp;

    // Fill the list with CR that equals the sum of the selectedCR, while only running as long as there's enough room in remainingBudget to add another creature
    while ( remainingBudget > 0 ){

        // Temporary list to store the values
        let tempList = []

        // If the CR is less than or equal to the selected CR, while also being a minimum of 5 ratings lower than selected, add it to the tempList if it can fit in the budget
        creatureList.forEach( (e)=>{
            if( e.crInt <= selectedCR && e.crInt >= (selectedCR - 5) && e.exp <= remainingBudget){
                tempList.push(e);
            }
        })

        // If the tempList has no items, break from while loop.
        if (tempList.length === 0){
            break;
        }
        
        // Get random position within tempList to add to listOfCreatures
        let randomCreature = tempList[Math.floor(Math.random() * tempList.length)];
        // Push the creature to the listOfCreatures
        listOfCreatures.push(randomCreature);
        // Subtract the exp of the generated creature from the budget
        remainingBudget -= randomCreature.exp;
    }

    listOfCreatures.forEach( (cr) => {
        finalList.push(cr)
    })
};

generateEncounter(selectedCR, xpBudget, finalList)
console.log(finalList)

export function displayGeneratedEncounter(){
    // if (finalList.length != 0){
        // Get the wrapper to append to.
        let mainWrapperDiv = document.getElementById("encounterResultWrapper")

        // Create the results divs before adding the class to them
        let allResultsCRDiv = document.createElement("div");
        allResultsCRDiv.classList.add("allResultsCR");
        let allResultsNameDiv = document.createElement("div");
        allResultsNameDiv.classList.add("allResultsName");

        // Append to the wrapper
        mainWrapperDiv.appendChild(allResultsCRDiv);
        mainWrapperDiv.appendChild(allResultsNameDiv);

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
    // }
}