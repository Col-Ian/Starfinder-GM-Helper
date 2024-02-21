export function appendChildWithClass(className, childToAppend, parent){
    childToAppend.classList.add(className)
    parent.appendChild(childToAppend)
}