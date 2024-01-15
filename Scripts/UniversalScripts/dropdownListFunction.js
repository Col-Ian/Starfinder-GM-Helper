export function dropdownListFunction(selectionType, selectionList) {
    selectionType.forEach(function(e,i){
        e.textContent = selectionList[i]
    })
}