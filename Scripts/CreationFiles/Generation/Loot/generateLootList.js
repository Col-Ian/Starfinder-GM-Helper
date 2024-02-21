import { weaponList } from "../../weaponList.js";

export function generateLootList(
    finalItemList,
    finalCurrency,
    maxItemLevelInt,
    encounterWealth
){
    // Create the list of items to pull from
    let equipmentList = [];

    // Get clones of original lists and push them to equipmentList.
    let tempWeaponList = JSON.parse(JSON.stringify(weaponList))
    tempWeaponList.forEach(i=>{
        equipmentList.push(i);
    });


    // Generate a minimum of 20% wealth
    finalCurrency = Math.floor(encounterWealth*0.2)

    // Items randomly generated will equal a maximum of 80% wealth. As well, all items generated will be at 80% of cost to buy value.
    let itemBudget = Math.floor(encounterWealth*0.8)

    // Generate first item which must be between the item level or one lower.
    let randomFirstItemList = []
    equipmentList.forEach(i=>{
        if(parseInt(i.level) <= maxItemLevelInt && parseInt(i.level) >= (maxItemLevelInt -1) && (i.price*0.8) <= itemBudget){
            randomFirstItemList.push(i);
        };
    });
    let randomFirstItem = Math.floor(Math.random()*randomFirstItemList.length)
    finalItemList.push(randomFirstItemList[randomFirstItem]);

    // Remove 80% of the item's cost from the budget.
    itemBudget -= Math.floor(randomFirstItemList[randomFirstItem].price*0.8)

    // Spend the rest of the budget with any item
    while(itemBudget > 0){

        // Add items to temp list if they're within the remaining budget (full price)
        let tempList = [];
        equipmentList.forEach(i=>{
            if(i.price <= itemBudget){
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

    // Add any remaining budget to the finalCurrency
    console.log(finalCurrency)
    finalCurrency += itemBudget;
    console.log(finalCurrency)
}