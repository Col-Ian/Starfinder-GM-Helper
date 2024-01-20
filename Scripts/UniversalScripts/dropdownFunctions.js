export function listContent(
    theList,
    ulSelected,
    defaultSelected
    ) {
    // Fill the content of the ul (ulSelected) with the items from the array (theList). If the first item (defaultSelected) is the defualt option selected, add the active class.
    theList.forEach(function(i){
        let tag = document.createElement("li");

        // Check if first item is the default option selected
        let defaultOption = document.getElementById(defaultSelected);
        if(defaultOption.textContent === i){
            tag.classList.add('active');
        };

        // Fill the li with the item from the list.
        let item = document.createTextNode(i);
        tag.appendChild(item);

        // Append the new li to our ul.
        let element = document.getElementById(ulSelected);
        element.appendChild(tag);
    });
};

export function dropdownListFunction(
    dropdownParam
){
    let dropdowns = document.querySelectorAll(dropdownParam);

    dropdowns.forEach(dropdown =>{
        let select = dropdown.querySelector('.dropdownSelect');
        let caret = dropdown.querySelector('.caret');
        let menu = dropdown.querySelector('.dropdownList');
        let options = dropdown.querySelectorAll('.dropdownList li');
        let selected = dropdown.querySelector('.dropdownSelected');
                
        select.addEventListener('click', ()=>{
            // Add/remove style to element
            select.classList.toggle('dropdownSelect-clicked');
            // Add the rotate styles to caret
            caret.classList.toggle('caret-rotate');
            // Add the open styles to the element
            menu.classList.toggle('dropdownList-open');
            
        });        
        options.forEach(option => {
            option.addEventListener('click',()=>{
                // change the selected inner text to clicked option
                selected.innerText = option.innerText;
                // remove the clicked styles from the element
                select.classList.remove('dropdownSelect-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('dropdownList-open');
                options.forEach(option=>{
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
        window.addEventListener('click', (e)=>{
            if (e.target !== select && e.target !== menu && e.target !== caret && e.target !== selected){
                // remove the clicked styles from the elements when you click off the element
                select.classList.remove('dropdownSelect-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('dropdownList-open');
            };
        });
    });
    
};