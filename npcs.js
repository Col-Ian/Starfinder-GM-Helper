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