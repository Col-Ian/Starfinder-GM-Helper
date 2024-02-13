// Will create a bold text, followed by normal text, then placed inside a div.

export function createBoldSpanInDiv(parentDiv, spanText, spanValue){  
    let firstSpan = document.createElement('span');
    firstSpan.classList.add('spanBold');
    let firstSpanText = document.createTextNode(spanText);
    firstSpan.appendChild(firstSpanText);
    parentDiv.appendChild(firstSpan);
    let firstSpanValue = document.createTextNode(spanValue);
    parentDiv.appendChild(firstSpanValue);
}