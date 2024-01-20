// Likely irrelevant now as it's build into the dropdownListFunction, but will keep for now in case needed later

export function hideDropdownFunction(){
    let dropdownButton = document.querySelector(".dropdownButton");
    let dropdownMenu = document.querySelector('.dropdownMenuSelection');

    dropdownButton.addEventListener("click", ()=>{
        dropdownMenu.classList.toggle("hide");
    });

    window.addEventListener('click', (e)=>{
        if (e.target !== dropdownButton){
            dropdownMenu.classList.add('hide');
        };
    });
};