// Likely irrelevant now as it's build into the dropdownListFunction, but will keep for now in case needed later

export function hideDropdownFunction(){
    const dropdownButton = document.querySelector(".dropdownButton")
    const dropdownMenu = document.querySelector('.dropdownMenuSelection')

    dropdownButton.addEventListener("click", ()=>{
        dropdownMenu.classList.toggle("hide")
    })

    window.addEventListener('click', (e)=>{
        if (e.target !== dropdownButton){
            dropdownMenu.classList.add('hide');
        }
    })
}