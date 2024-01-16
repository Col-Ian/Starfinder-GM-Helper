export function listContent(selectionType, selectionList) {
    // Fill the content of the list (selectionType) with the items from the array (selectionList)
    selectionType.forEach(function(e,i){
        e.textContent = selectionList[i]
    })
}

export function dropdownListFunction(
    dropdown
){
    let dropdowns = document.querySelectorAll(dropdown);

        dropdowns.forEach(dropdown =>{
            let select = dropdown.querySelector('.dropdownSelect')
            let caret = dropdown.querySelector('.caret')
            let menu = dropdown.querySelector('.dropdownList')
            let options = dropdown.querySelectorAll('.dropdownList li')
            let selected = dropdown.querySelector('.dropdownSelected')

            select.addEventListener('click', ()=>{
                // Add/remove style to element
                select.classList.toggle('dropdownSelect-clicked')
                // Add the rotate styles to caret
                caret.classList.toggle('caret-rotate')
                // Add the open styles to the element
                menu.classList.toggle('dropdownList-open')

            });

            options.forEach(option => {
                option.addEventListener('click',()=>{
                    // change the selected inner text to clicked option
                    selected.innerText = option.innerText;
                    // remove the clicked styles from the element
                    select.classList.remove('dropdownSelect-clicked');
                    caret.classList.remove('caret-rotate')
                    menu.classList.remove('dropdownList-open');
                    options.forEach(option=>{
                        option.classList.remove('active')
                    })
                    option.classList.add('active');
                })
            });
        })
}