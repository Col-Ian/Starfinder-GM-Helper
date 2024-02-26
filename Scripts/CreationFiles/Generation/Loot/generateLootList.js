import { basicMeleeListOH } from "../../basicMeleeListOH.js";
import { lightArmorList } from "../../lightArmorList.js";

export function generateLootList(
    finalItemList,
    maxItemLevelInt,
    encounterWealth
){
    // Create the list of items to pull from
    let equipmentList = [];

    // Get clones of original lists and push them to equipmentList.
    let tempWeaponList = JSON.parse(JSON.stringify(basicMeleeListOH));
    tempWeaponList.forEach(i=>{
        equipmentList.push(i);
    });

    let tempLightArmList = JSON.parse(JSON.stringify(lightArmorList));
    tempLightArmList.forEach(i=>{
        equipmentList.push(i);
    });
    

    // Items randomly generated will equal a maximum of 80% wealth. As well, the first item generated will be at 60% of cost to buy value.
    let itemBudget = Math.floor(encounterWealth*0.8);

    // Generate first item which must be between the item level or one lower.
    let randomFirstItemList = [];
    equipmentList.forEach(i=>{
        if(parseInt(i.level) <= maxItemLevelInt && parseInt(i.level) >= (maxItemLevelInt -1) && (i.price*0.6) <= itemBudget){
            randomFirstItemList.push(i);
        };
    });
    if(randomFirstItemList.length != 0){
        let randomFirstItem = Math.floor(Math.random()*randomFirstItemList.length);
        finalItemList.push(randomFirstItemList[randomFirstItem]);

        // Remove 60% of the item's cost from the budget.
        itemBudget -= Math.floor(randomFirstItemList[randomFirstItem].price*0.6);
    }

    // Spend the rest of the budget with any equipment that is 3 levels lower at most.
    while(itemBudget > 0){

        // Add items to temp list if they're within the remaining budget (full price)
        let tempList = [];
        equipmentList.forEach(i=>{
            if(i.price <= itemBudget && parseInt(i.level) <= maxItemLevelInt && parseInt(i.level) >= (maxItemLevelInt -3)){
                tempList.push(i);
            };
        });
        
        // If there are no items, break from while loop.
        if (tempList.length === 0){
            break
        };

        // Push the item to the tempList
        let randomItem = Math.floor(Math.random()*tempList.length);

        // Check if the item is already in finalItemList
        let isIn = false;
        finalItemList.forEach(i=>{
            if(i.name === tempList[randomItem].name){
                // If it is in generateItems, set isIn to true and increase the quantity of the item instead of adding it.
                isIn = true;
                i.quantity++
            };
        });
        // If the item is not in finalItemList, add it.
        if(!isIn){
            finalItemList.push(tempList[randomItem])
        };

        // Remove the price of the item from the budget.
        itemBudget -= tempList[randomItem].price;
    };
}