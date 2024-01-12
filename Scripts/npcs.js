let selectChallengeRating = [
    '1/3',
    '1/2',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25'
];

let selectArray = [
    'Combatant',
    'Expert',
    'Spellcaster'
];

let npcPage = {
    startNPC: function(){

        // Hiding the dropdown options
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

        // Show selections for drop down menus.
        // Challenge Rating
        let altsCR = document.querySelectorAll('.selectionCR')

        altsCR.forEach(function(e,i){
            e.textContent = selectChallengeRating[i]
        })

    }
}

npcPage.startNPC();