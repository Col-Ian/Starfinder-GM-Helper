import { numberWithCommas } from "../../../UniversalScripts/numberWithCommas.js";
import { createBoldSpanInDiv } from "../../../UniversalScripts/createBoldSpanInDiv.js";
import { selectArray } from "../../../UniversalScripts/DropdownLists/array.js";

/*
<div class="statBlockWrapper">
    <div class="statblock">
        <div class="statHeadWrap">
            <div class="statHead">CR 7</div>
        </div>
        <div class="indentWrap">
            <div class="statXP">XP 3,200</div>
            <div class="statType">Creature Type (Subtype)</div>
            <div class="statInitSensePercep">
                <span class="spanBold">Init</span>
                <span> +2; </span>
                <span class="spanBold">Senses</span>
                <span> darkvision 60 ft. (nullable); </span>
                <span class="spanBold">Perception</span>
                <span> +14</span>
            </div>
        </div>
        <div class="statSubHeadWrap">
            <div class="statDefense">DEFENSE</div>
            <div class="statHP"><span class="spanBold">HP</span> 105</div>
        </div>
        <div class="indentWrap">
            <div class="statAC" id="statAC">
                <span class="spanBold">EAC</span>
                <span> 19; </span>
                <span class="spanBold">KAC</span>
                <span> 21</span>
            </div>
            <div class="statSavingThrows">
                <span class="spanBold">Fort</span>
                <span> +11; </span>
                <span class="spanBold">Ref</span>
                <span> +6; </span>
                <span class="spanBold">Will</span>
                <span> +9</span>
            </div>
            <div class="statDefOther">
                <span class="spanBold">Immunities</span> 
                <span> critical hits, lightning</span>; 
                <span class="spanBold">Resistances</span>
                <span> cold 10, acid 10</span>
            </div>
        </div>
        <div class="statSubHeadWrap">
            <div class="statSubHead" id="stateOffenceHead">OFFENSE</div>
        </div>
        <div class="indentWrap">
            <div class="statSpeed">
                <span class="spanBold">Speed</span> 30 ft.; fly 30 ft.
            </div>
            <div class="statMelee"><span class="spanBold">Melee</span> claw +17 (2d6+11 S)</div>
            <div class="statRanged"><span class="spanBold">Ranged</span> spike +14 (2d8+7 P)</div>
        </div>

        *************************************************
        <div class="statSubHeadWrap">
            <div class="statSubHead" id="statStatisticsHead">STATISTICS</div>
        </div>
        <div class="indentWrap">
            <div class="statAttributes">
                <span class="spanBold">Str</span>
                <span> +4; </span>
                <span class="spanBold">Dex</span>
                <span> +2; </span>
                <span class="spanBold">Con</span>
                <span> +5; </span>
                <span class="spanBold">Int</span>
                <span> -;</span>
                <span class="spanBold">Wis</span>
                <span> +0; </span>
                <span class="spanBold" id="spanBoldCha">Cha</span>
                <span> +0</span>
            </div>
            <div class="statSkills" id="statSkills"><span class="spanBold" id="spanBoldSkills">Skills</span> Athletics +19, Intimidate +14, Survival +14</div>
            <div class="statOtherAbilities"><span class="spanBold">Other Abilities</span> mindless</div>
        </div>
        *************************************************

        <div class="statSubHeadWrap">
            <div class="statSubHead">SPECIAL ABILITES</div>
        </div>
        <div class="indentWrap">
            <div class="statSpecialAbility"><span class="spanBold">Mutable (Ex)</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, earum mollitia in perferendis dolores hic assumenda eveniet sed ipsam, iusto iste vitae delectus ea impedit. Mollitia, iusto. Obcaecati, provident magni!</div>
        </div>
    </div>
</div>
*/



export function generateNPC(){

    // Find all selected options. They will have the .active from the dropdownFunctions
    let selections = document.querySelectorAll('.active')
    
    // Get the main wrapper to append to.
    let mainWrapperDiv = document.getElementById("statBlockWrapper");
    // Clear so it doesn't populate more than once when user clicks again.
    mainWrapperDiv.innerHTML = '';

    if(selections.length < 4){
        let noOptionDiv = document.createElement('div');
        noOptionDiv.appendChild(document.createTextNode('No option selected.'))
        mainWrapperDiv.appendChild(noOptionDiv)
    } else {
        // Initialize values

        let alienCR = selections[0].innerText;

        let alienArraySelected = selections[1].innerText;
        let alienArray = {};

        selectArray.forEach(i=>{
            if(alienArraySelected === i.value){
                alienArray = i;
            };
        });

        let arrayMain = {};
        alienArray.main.forEach(i=>{
            if(i.cr === alienCR){
                arrayMain = i;
            };
        });

        let arrayAttack = {};
        alienArray.attack.forEach(i=>{
            if(i.cr === alienCR){
                arrayAttack = i;
            };
        });

        let xpValue = numberWithCommas(3200)

        let creatureType = selections[2].innerText;
        let creatureSubtype = selections[3].innerText;

        let initiativeValue = 4;
        let sensesValue = ['blindsense 30 ft.','darkvision 60 ft.'];
        let perceptionValue = 14;

        let hpValue = 105;

        let eacValue = arrayMain.eAC;
        let kacValue = arrayMain.kAC;

        let fortValue = arrayMain.fort;
        let refValue = arrayMain.ref;
        let willValue = arrayMain.will;

        let immunitiesValue = [
            'critical hits',
            'lightning'
        ];
        let resistancesValue = [
            'cold 10',
            'acid 10'
        ];
        let weaknessesValue = ['fire'];

        let speedValue = [
            '30 ft.',
            'fly 30 ft.'
        ];

        let toHitMeleeValue = 17;
        let meleeDamageValue = '2d6+11';
        let toHitRangedValue = 14;
        let rangedDamageValue = '2d8+7';

        let attributeValues = {
            str: 4,
            dex: 2,
            con: 5,
            int: '-',
            wis: 0,
            cha: 0,
        }

        let otherAbilitiesValue = [
            'mindless'
        ]

        let specialAbilityNames = [
            'Mutable (Ex)',
            'Another (Su)'
        ]

        let specialAbilityDescriptions = [
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, earum mollitia in perferendis dolores hic assumenda eveniet sed ipsam, iusto iste vitae delectus ea impedit. Mollitia, iusto. Obcaecati, provident magni!',
            'This is a test to make sure it will add multiple abilites.'
        ]

        let statBlockDiv = document.createElement("div");
        statBlockDiv.classList.add("statBlock");
        mainWrapperDiv.appendChild(statBlockDiv);

        // Create the header that will display the CR
        let statHeadWrapDiv = document.createElement("div");
        statHeadWrapDiv.classList.add("statHeadWrap");
        statBlockDiv.appendChild(statHeadWrapDiv);

        let statHeadDiv = document.createElement('div');
        statHeadDiv.classList.add('statHead');
        let statHead = document.createTextNode(`CR ${alienCR}`);
        statHeadDiv.appendChild(statHead);

        statHeadWrapDiv.appendChild(statHeadDiv);

        // Fill the basic information
        let basicIndentDiv = document.createElement("div");
        basicIndentDiv.classList.add('indentWrap');
        statBlockDiv.appendChild(basicIndentDiv);

        // XP to add to basicIndentDiv
        let statXPDiv = document.createElement('div');
        statXPDiv.classList.add('statXP');
        let statXP = document.createTextNode(`XP ${xpValue}`)
        statXPDiv.appendChild(statXP)
        basicIndentDiv.appendChild(statXPDiv)

        // Creature Type/subtype to add to basicIndentDiv
        let statTypeDiv = document.createElement('div');
        statTypeDiv.classList.add('statType');
        // Don't display subtype if None is selected.
        if (creatureSubtype != 'None'){
            let typeSubTypeText = document.createTextNode(`${creatureType} (${creatureSubtype})`);
            statTypeDiv.appendChild(typeSubTypeText);
        } else {
            let typeSubTypeText = document.createTextNode(creatureType);
            statTypeDiv.appendChild(typeSubTypeText);
        };
        basicIndentDiv.appendChild(statTypeDiv);

        // Initiative, Senses, and Perception to add to basicIndentDiv
        let statInitSensePercepDiv = document.createElement('div');
        statInitSensePercepDiv.classList.add('statInitSensePercep');
        
        // Initiative
        createBoldSpanInDiv(statInitSensePercepDiv, 'Init', ` +${initiativeValue}; `);

        // If there are Senses to add
        if (sensesValue.length != 0){
            let text = sensesValue.join(', ');
            createBoldSpanInDiv(statInitSensePercepDiv, 'Senses', ` ${text}; `);
        };

        // Perception
        createBoldSpanInDiv(statInitSensePercepDiv, 'Perception', ` +${perceptionValue}`);

        basicIndentDiv.appendChild(statInitSensePercepDiv);

        // The Defenses sub heading
        let statSubHeadWrapDefDiv = document.createElement('div');
        statSubHeadWrapDefDiv.classList.add('statSubHeadWrap');
        statBlockDiv.appendChild(statSubHeadWrapDefDiv);

        let statDefenseDiv = document.createElement('div');
        statDefenseDiv.classList.add('statDefense');
        let statDefenseText = document.createTextNode('DEFENSE');
        statDefenseDiv.appendChild(statDefenseText);
        statSubHeadWrapDefDiv.appendChild(statDefenseDiv)

        let statHPDiv = document.createElement('div');
        statHPDiv.classList.add('statHP');
        let statHPSpan = document.createElement('span');
        statHPSpan.classList.add('spanBold');
        let statHPText = document.createTextNode('HP ');
        statHPSpan.appendChild(statHPText);
        statHPDiv.appendChild(statHPSpan);
        let statHPValue = document.createTextNode(hpValue);
        statHPDiv.appendChild(statHPValue);
        statSubHeadWrapDefDiv.appendChild(statHPDiv);

        // Fill the Defenses information
        let defensesIndentDiv = document.createElement('div');
        defensesIndentDiv.classList.add('indentWrap');
        statBlockDiv.appendChild(defensesIndentDiv);

        // Fill the AC line
        let statACDiv = document.createElement('div');
        statACDiv.classList.add('statAC');
        defensesIndentDiv.appendChild(statACDiv);

        // EAC
        createBoldSpanInDiv(statACDiv, 'EAC', ` ${eacValue}; `);

        // KAC
        createBoldSpanInDiv(statACDiv, 'kAC', ` ${kacValue}`);

        // Fill the SavingThrows line
        let statSavingThrowsDiv = document.createElement('div');
        statSavingThrowsDiv.classList.add('statSavingThrows');
        defensesIndentDiv.appendChild(statSavingThrowsDiv);

        // Fort
        createBoldSpanInDiv(statSavingThrowsDiv, 'Fort', ` ${fortValue}; `);

        // Ref
        createBoldSpanInDiv(statSavingThrowsDiv, 'Ref', ` ${refValue}; `);

        // Will
        createBoldSpanInDiv(statSavingThrowsDiv, 'Will', ` ${willValue}`);

        // Fill the other defenses line
        let statDefOtherDiv = document.createElement('div');
        statDefOtherDiv.classList.add('statDefOther');
        defensesIndentDiv.appendChild(statDefOtherDiv);

        // If the creature has immunities and Resistences/Weaknesses
        if(immunitiesValue.length != 0 && resistancesValue.length != 0 || weaknessesValue.length != 0){
            let text = immunitiesValue.join(', ');
            createBoldSpanInDiv(statDefOtherDiv, 'Immunities', ` ${text}; `)
        } else if (immunitiesValue.length != 0){
            let text = immunitiesValue.join(', ');
            createBoldSpanInDiv(statDefOtherDiv, 'Immunities', ` ${text}`)
        }

        // If the creature has Resistances and Weaknesses
        if(resistancesValue.length != 0 && weaknessesValue.length != 0){
            let text = resistancesValue.join(', ');
            createBoldSpanInDiv(statDefOtherDiv, 'Resistances', ` ${text}; `)
        } else if (resistancesValue.length != 0){
            let text = resistancesValue.join(', ');
            createBoldSpanInDiv(statDefOtherDiv, 'Resistances', ` ${text}`)
        }

        // If the creature has Weaknesses
        if(weaknessesValue.length != 0){
            let text = weaknessesValue.join(', ');
            createBoldSpanInDiv(statDefOtherDiv, 'Weaknesses', ` ${text}`)
        }

        // The Offense sub heading
        let statSubHeadWrapOffDiv = document.createElement('div');
        statSubHeadWrapOffDiv.classList.add('statSubHeadWrap');
        statBlockDiv.appendChild(statSubHeadWrapOffDiv);

        let statOffenseDiv = document.createElement('div');
        statOffenseDiv.classList.add('statSubHead');
        let statOffenseText = document.createTextNode('OFFENSE');
        statOffenseDiv.appendChild(statOffenseText);
        statSubHeadWrapOffDiv.appendChild(statOffenseDiv);

        // Fill the Offense information
        let offenseIndentDiv = document.createElement('div');
        offenseIndentDiv.classList.add('indentWrap');
        statBlockDiv.appendChild(offenseIndentDiv);

        // Fill the Speed line
        let statSpeedDiv = document.createElement('div');
        statSpeedDiv.classList.add('statSpeed');
        offenseIndentDiv.appendChild(statSpeedDiv);
        
        if (speedValue.length != 0){
            let text = speedValue.join(', ');
            createBoldSpanInDiv(statSpeedDiv, 'Speed', ` ${text}`);
        } else{
            createBoldSpanInDiv(statSpeedDiv, 'Speed', ` 30 ft.`);
        };

        // Fill the Melee Attack line
        let statMeleeDiv = document.createElement('div');
        statMeleeDiv.classList.add('statMelee');
        offenseIndentDiv.appendChild(statMeleeDiv);

        createBoldSpanInDiv(statMeleeDiv, 'Melee', ` +${toHitMeleeValue} (${meleeDamageValue})`);

        // Fill the Ranged Attack line
        let statRangedDiv = document.createElement('div');
        statRangedDiv.classList.add('statRanged');
        offenseIndentDiv.appendChild(statRangedDiv);

        createBoldSpanInDiv(statRangedDiv, 'Ranged', ` +${toHitRangedValue} (${rangedDamageValue})`);

        // The Statistics sub heading
        let statSubHeadWrapStatisticsDiv = document.createElement('div');
        statSubHeadWrapStatisticsDiv.classList.add('statSubHeadWrap');
        statBlockDiv.appendChild(statSubHeadWrapStatisticsDiv);

        let statStatisticsDiv = document.createElement('div');
        statStatisticsDiv.classList.add('statSubHead');
        let statStatisticsText = document.createTextNode('STATISTICS');
        statStatisticsDiv.appendChild(statStatisticsText);
        statSubHeadWrapStatisticsDiv.appendChild(statStatisticsDiv);

        // Fill the Statistics information
        let statisticsIndentDiv = document.createElement('div');
        statisticsIndentDiv.classList.add('indentWrap');
        statBlockDiv.appendChild(statisticsIndentDiv);

        // Fill the Attributes line
        let statAttributesDiv = document.createElement('div');
        statAttributesDiv.classList.add('statAttributes');
        statisticsIndentDiv.appendChild(statAttributesDiv);

        // Str
        createBoldSpanInDiv(statAttributesDiv, 'Str', ` ${attributeValues.str}; `);

        // Dex
        createBoldSpanInDiv(statAttributesDiv, 'Dex', ` ${attributeValues.dex}; `);

        // Con
        createBoldSpanInDiv(statAttributesDiv, 'Con', ` ${attributeValues.con}; `);

        // Int
        createBoldSpanInDiv(statAttributesDiv, 'Int', ` ${attributeValues.int}; `);

        // Wis
        createBoldSpanInDiv(statAttributesDiv, 'Wis', ` ${attributeValues.wis}; `);

        // Cha
        createBoldSpanInDiv(statAttributesDiv, 'Cha', ` ${attributeValues.cha}`);

        // Fill the Other Abilities line (Only while other abilities are present)
        if (otherAbilitiesValue.length != 0){
            let statOtherAbilitiesDiv = document.createElement('div');
            statOtherAbilitiesDiv.classList.add('statOtherAbilities');
            statisticsIndentDiv.appendChild(statOtherAbilitiesDiv);

            let text = otherAbilitiesValue.join(", ")

            createBoldSpanInDiv(statOtherAbilitiesDiv, 'Other Abilities', ` ${text}`)
        }

        // Special Abilities (Only while present)
        if (specialAbilityNames.length != 0){
            // The Special Abilities sub heading
            let statSubHeadWrapSpecialAbDiv = document.createElement('div');
            statSubHeadWrapSpecialAbDiv.classList.add('statSubHeadWrap');
            statBlockDiv.appendChild(statSubHeadWrapSpecialAbDiv);

            let statSpecialAbDiv = document.createElement('div');
            statSpecialAbDiv.classList.add('statSubHead');
            let statSpecialAbText = document.createTextNode('Special Abilities');
            statSpecialAbDiv.appendChild(statSpecialAbText);
            statSubHeadWrapSpecialAbDiv.appendChild(statSpecialAbDiv);

            // Fill the Special Abilities information
            let specialAbilitiesIndentDiv = document.createElement('div');
            specialAbilitiesIndentDiv.classList.add('indentWrap');
            statBlockDiv.appendChild(specialAbilitiesIndentDiv);

            // Add the ability for each existing one.
            specialAbilityNames.forEach(i=>{
                // Fill the Special Abilites
                let statAbilitesDiv = document.createElement('div');
                statAbilitesDiv.classList.add('statAttributes');
                specialAbilitiesIndentDiv.appendChild(statAbilitesDiv);

                let p = specialAbilityNames.indexOf(i)
                createBoldSpanInDiv(statAbilitesDiv, i, ` ${specialAbilityDescriptions[p]}`)
            })
        }
    }
};