import { creatureList } from "../creatureList.js";

// The idea of the function is to create an encounter that contains a creature close to the CR selected, while potentially adding more creatures to aid in the encounter.

export function generateEncounterList(selectedCR, xpBudget, finalList){

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

