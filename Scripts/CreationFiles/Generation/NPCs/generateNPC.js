import { numberWithCommas } from "../../../UniversalScripts/numberWithCommas.js";
import { createBoldSpanInDiv } from "../../../UniversalScripts/createBoldSpanInDiv.js";
import { selectArray } from "../../../UniversalScripts/DropdownLists/array.js";
import { selectCreatureType } from "../../../UniversalScripts/DropdownLists/creatureType.js";
import { selectCreatureSubtype } from "../../../UniversalScripts/DropdownLists/creatureSubtype.js";
import { selectSkills } from "../../../UniversalScripts/DropdownLists/skills.js";
import { selectChallengeRatings } from "../../../UniversalScripts/DropdownLists/challengeRatings.js";

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

export function generateNPC(
){
    
    // Find all selected options. They will have the .active from the dropdownFunctions
    let selections = document.querySelectorAll('.active')
    
    // Get the main wrapper to append to.
    let mainWrapperDiv = document.getElementById("statBlockWrapper");
    // Clear so it doesn't populate more than once when user clicks again.
    mainWrapperDiv.innerHTML = '';
    
    // Confirm all options are selected
    if(selections.length < 4){
        let noOptionDiv = document.createElement('div');
        noOptionDiv.appendChild(document.createTextNode('All options must be selected.'))
        mainWrapperDiv.appendChild(noOptionDiv)
    } else {

        // Get the CR selected by user.
        let alienCRSelected = selections[0].innerText;
        let alienCRObject = {};
        selectChallengeRatings.forEach(i=>{
            if(alienCRSelected === i.value){
                alienCRObject = Object.assign(i)
            }
        })
        let alienCR = alienCRObject.value;

        // Get the array selected by user.
        let alienArraySelected = selections[1].innerText;

        // Get the matching array from array.js, and create a deep copy.
        let alienArray = {};
        selectArray.forEach(i=>{
            if(alienArraySelected === i.value){
                alienArray = JSON.parse(JSON.stringify(i));
            };
        });

        // Get a deep copy of the Main Statistics based on array.
        let arrayMain = {};
        alienArray.main.forEach(i=>{
            if(i.cr === alienCR){
                arrayMain = JSON.parse(JSON.stringify(i));
            };
        });

        // Get a deep copy of the Attack Statistics based on array.
        let arrayAttack = {};
        alienArray.attack.forEach(i=>{
            if(i.cr === alienCR){
                arrayAttack = JSON.parse(JSON.stringify(i));
            };
        });

        // Get the Creature Type selected by user.
        let creatureTypeSelected = selections[2].innerText;

        // Get a copy of the Creature Type from creatureType.js.
        let creatureTypeObject = {};
        selectCreatureType.forEach(i=>{
            if(i.value === creatureTypeSelected){
                creatureTypeObject = Object.assign(i);
            };
        });
        
        // Set the Creature Type to display in the stat block.
        let creatureType = creatureTypeObject.value

        // Get the Creature Subtype selected by user.
        let creatureSubtypeSelected = selections[3].innerText;

        // Get a copy of the Creature Subtype from creatureSubtype.js.
        let creatureSubtypeObject = {};
        selectCreatureSubtype.forEach(i=>{
            if(i.value === creatureSubtypeSelected){
                creatureSubtypeObject = Object.assign(i)
            };
        });
        
        // Set the Creature Subtype to display in the stat block.
        let creatureSubtype = creatureSubtypeObject.value

        // Set the base attribute values to 10. These will be changed to a modifier further down.
        let attributeBase = {
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10,
        };

        // Get a deep copy of the Skills from skills.js
        let allSkills = JSON.parse(JSON.stringify(selectSkills));

        creatureTypeObject.typeAdjustments(arrayMain, arrayAttack, attributeBase);
        creatureSubtypeObject.subtypeAdjustments(arrayMain, arrayAttack, attributeBase, allSkills)


        
        // Randomly assign the attribute bonuses given by the arrayMain
        arrayMain.abilityScoreModifiers.forEach(i=>{
            let tempAttributes = [
                attributeBase.str,
                attributeBase.dex,
                attributeBase.con,
                attributeBase.int,
                attributeBase.wis,
                attributeBase.cha
            ];
            while(true){
                // Select a random attribute
                let randomAttribute = Math.floor(Math.random()*tempAttributes.length);
                // If the bonus has not been applied to the attribute and the attribute isn't null (Animals can have negative values in Int)
                if(tempAttributes[randomAttribute] <= 10 && tempAttributes[randomAttribute] != "-"){
                    // Add the bonus to the base value
                    tempAttributes[randomAttribute] += i;

                    // Make new values represented in attributeBase.
                    attributeBase.str = tempAttributes[0]
                    attributeBase.dex = tempAttributes[1]
                    attributeBase.con = tempAttributes[2]
                    attributeBase.int = tempAttributes[3]
                    attributeBase.wis = tempAttributes[4]
                    attributeBase.cha = tempAttributes[5]

                    // Break from while loop
                    break;
                }
            }
        })
        
        // Create attribute modifier. (10-11 is +0, 12-13 is +1, 14-15 is +2, etc....)
        let attributeModifier = {
            str: (attributeBase.str != "-") ? Math.trunc((attributeBase.str - 10)/2) : "-",
            dex: (attributeBase.dex != "-") ? Math.trunc((attributeBase.dex - 10)/2) : "-",
            con: (attributeBase.con != "-") ? Math.trunc((attributeBase.con - 10)/2) : "-",
            int: (attributeBase.int != "-") ? Math.trunc((attributeBase.int - 10)/2) : "-",
            wis: (attributeBase.wis != "-") ? Math.trunc((attributeBase.wis - 10)/2) : "-",
            cha: (attributeBase.cha != "-") ? Math.trunc((attributeBase.cha - 10)/2) : "-",
        }

        // Get the Experience Points awarded and convert it to a ###,###,### format.
        let xpValue = numberWithCommas(arrayMain.xp)

        // Initiative is equal to the dexterity modifier.
        let initiativeValue = attributeModifier.dex;

        // Senses
        let sensesValue = [];

        // If there is a darkvision value over 0, add to the stat block.
        if(creatureTypeObject.type.darkvision > 0 || creatureSubtypeObject.subtype.darkvision > 0){
            // Get the largest darkvision value to add.
            if(creatureTypeObject.type.darkvision >= creatureSubtypeObject.subtype.darkvision){
                sensesValue.push(`darkvision ${creatureTypeObject.type.darkvision} ft.`)
            } else{
                sensesValue.push(`darkvision ${creatureSubtypeObject.type.darkvision} ft.`)
            }
        };

        // Low-Light vision
        // If lowLightVision = true, add it to the stat block.
        if(creatureTypeObject.type.lowLightVision || creatureSubtypeObject.subtype.lowLightVision){
            sensesValue.push('low-light vision')
        }

        // Perception
        let perceptionValue = 0

        // All creatures get perception as a Good skill, except Giants that get it as a master skill.
        if(creatureSubtype === 'Giant'){
            perceptionValue = arrayMain.masterSkills[0] + attributeModifier.wis;
        } else {
            perceptionValue =  arrayMain.goodSkills[0] + attributeModifier.wis;
        }

        // HP
        // Will add ability to choose Brute later.
        let hpValue = arrayMain.hitPoints;

        // Armor Class values
        let eacValue = arrayMain.eAC;
        let kacValue = arrayMain.kAC;

        // Saving Throw values
        let fortValue = arrayMain.fort;
        let refValue = arrayMain.ref;
        let willValue = arrayMain.will;

        // Immunities
        let immunitiesValue = [];

        // Add Immunities given through Type
        creatureTypeObject.type.immunities.forEach(i=>{
            immunitiesValue.push(i);
        });

        // Add Immunities given through Subtype
        creatureSubtypeObject.subtype.immunities.forEach(i=>{
            // Check to be sure it's not already in the list
            let isIn = false;
            immunitiesValue.forEach(a=>{
                if (i===a){
                    isIn = true;
                };
            });
            if(!isIn){
                immunitiesValue.push(i)
            };
        });

        // Resistances
        let resistancesValue = [];
        // Add Resistances given by subtype
        creatureSubtypeObject.subtype.resistances.forEach(i=>{
            if (i.resistanceType != ''){
                resistancesValue.push(`${i.resistanceType}${i.resistanceDR}`)
            };
        });

        // Weaknesses
        let weaknessesValue = creatureSubtypeObject.subtype.vulnerabilities;

        // Speed
        let speedValue = [];

        // Any additional speeds give by subtype.
        creatureSubtypeObject.subtype.speeds.forEach(i=>{
            speedValue.push(i)
        });

        // To Hit values

        // Randomly assign to hit values.
        let toHitBonus= [];
        let tempToHit = [
            arrayAttack.highAttackBonus,
            arrayAttack.lowAttackBonus
        ]

        // Get a random bonus
        let randomBonus = Math.floor(Math.random()*tempToHit.length);
        toHitBonus.push(tempToHit[randomBonus])
        tempToHit.splice(randomBonus, 1)
        toHitBonus.push(tempToHit[0])
        
        // To Hit values to display
        let toHitMeleeValue = toHitBonus[0];
        let toHitRangedValue = toHitBonus[1];

        // Damage values
        // Ranged damage. Bonus will be equal to the CR, if 1 or above.
        let energyRangedDamage = '';
        let keneticRangedDamage = '';
        if(alienCRObject.numberValue >= 1){
            let rangedDamageBonus = alienCRObject.numberValue
            energyRangedDamage = `(${arrayAttack.energyRangedDamageNumberDice}d${arrayAttack.energyRangedDamageDiceType} +${rangedDamageBonus} E)`;
            keneticRangedDamage = `(${arrayAttack.kineticRangedDamageNumberDice}d${arrayAttack.kineticRangedDamageDiceType} +${rangedDamageBonus} K)`;
        } else{
            energyRangedDamage = `(${arrayAttack.energyRangedDamageNumberDice}d${arrayAttack.energyRangedDamageDiceType} E)`;
            keneticRangedDamage = `(${arrayAttack.kineticRangedDamageNumberDice}d${arrayAttack.kineticRangedDamageDiceType} K)`;
        };
        

        /*
        energyRangedDamageNumberDice: '1',
        energyRangedDamageDiceType: '4',
        kineticRangedDamageNumberDice: '1',
        kineticRangedDamageDiceType: '4',
        standardMeleeDamageNumberDice: '1',
        standardMeleeDamageDiceType: '6',
        threeAttacksMeleeDamageNumberDice: '',
        threeAttacksMeleeDamageDiceType: '',
        fourAttacksMeleeDamageNumberDice: '',
        fourAttacksMeleeDamageDiceType: '',
        */

        // Ranged values array
        let rangedDamageArray = [
            energyRangedDamage,
            keneticRangedDamage
        ]

        // Melee damage. Bonus will be equal to CR, if 1 or above, plus Str.
        let standardMeleeDamage = '';
        let threeAttacksMeleeDamage = '';
        let fourAttacksMeleeDamage = '';
        let meleeDamageBonus = attributeModifier.str;

        // Melee values array. Empty as it will be filled depending on CR.
        let meleeDamageArray = [];
        // Fill array based on possibly having more attacks.
        if(alienCRObject.numberValue >= 1){
            meleeDamageBonus += alienCRObject.numberValue;
            standardMeleeDamage = `(${arrayAttack.standardMeleeDamageNumberDice}d${arrayAttack.standardMeleeDamageDiceType} +${meleeDamageBonus})`;
            meleeDamageArray.push(standardMeleeDamage);
            // If three attacks possible, add to the list
            if(arrayAttack.threeAttacksMeleeDamageNumberDice != ''){
                if(meleeDamageBonus > 0){
                    threeAttacksMeleeDamage = `(${arrayAttack.threeAttacksMeleeDamageNumberDice}d${arrayAttack.threeAttacksMeleeDamageDiceType} +${meleeDamageBonus}) x3`;
                    meleeDamageArray.push(threeAttacksMeleeDamage);
                } else {
                    threeAttacksMeleeDamage = `(${arrayAttack.threeAttacksMeleeDamageNumberDice}d${arrayAttack.threeAttacksMeleeDamageDiceType}) x3`;
                    meleeDamageArray.push(threeAttacksMeleeDamage);
                };
            };
            // If four attacks possible, add to the list
            if(arrayAttack.fourAttacksMeleeDamageNumberDice != ''){
                if(meleeDamageBonus > 0){
                    fourAttacksMeleeDamage = `(${arrayAttack.fourAttacksMeleeDamageNumberDice}d${arrayAttack.fourAttacksMeleeDamageDiceType} +${meleeDamageBonus}) x4`;
                    meleeDamageArray.push(fourAttacksMeleeDamage);
                } else {
                    fourAttacksMeleeDamage = `(${arrayAttack.fourAttacksMeleeDamageNumberDice}d${arrayAttack.fourAttacksMeleeDamageDiceType}) x4`;
                    meleeDamageArray.push(fourAttacksMeleeDamage);
                };
            };
        } else{
            if(meleeDamageBonus > 0){
                standardMeleeDamage = `(${arrayAttack.standardMeleeDamageNumberDice}d${arrayAttack.standardMeleeDamageDiceType} +${meleeDamageBonus})`;
            } else {
                standardMeleeDamage = `(${arrayAttack.standardMeleeDamageNumberDice}d${arrayAttack.standardMeleeDamageDiceType})`;
            };
            meleeDamageArray.push(standardMeleeDamage);
        };

        // Get the random positions in damage arrays.
        let randomRanged = Math.floor(Math.random()*rangedDamageArray.length);
        let randomMelee = Math.floor(Math.random()*meleeDamageArray.length);

        // Damage values to display in stat block
        let meleeDamageValue = meleeDamageArray[randomMelee];
        let rangedDamageValue = rangedDamageArray[randomRanged];

        // Our Other Abilities to be added to the stat block.
        let otherAbilitiesValue = []

        // Add Other Abilities added from Creature Type
        creatureTypeObject.type.otherAbilities.forEach(i=>{
            otherAbilitiesValue.push(i);
        });

        // Add Other Abilities added from Creature Subtype if they don't already exist
        creatureSubtypeObject.subtype.otherAbilities.forEach(i=>{
            let inList = false;
            otherAbilitiesValue.forEach(a=>{
                if(a === i){
                    inList = true;
                }
            });
            if (!inList){
                otherAbilitiesValue.push(i);
            }
        });

        // Special Abilities
        // Separate Names and Descriptions for display in stat block.
        // Only Subtypes offer special abilities.
        let specialAbilityNames = creatureSubtypeObject.subtype.abilityNames;
        let specialAbilityDescriptions = creatureSubtypeObject.subtype.abilityDescriptions;

        

        /*
        *********************************************
        Add Stat Block to HTML
        *********************************************
        */ 

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
        if(immunitiesValue.length != 0 && resistancesValue.length != 0 || immunitiesValue.length != 0 && weaknessesValue.length != 0){
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

        createBoldSpanInDiv(statMeleeDiv, 'Melee', ` +${toHitMeleeValue} ${meleeDamageValue}`);

        // Fill the Ranged Attack line
        let statRangedDiv = document.createElement('div');
        statRangedDiv.classList.add('statRanged');
        offenseIndentDiv.appendChild(statRangedDiv);

        createBoldSpanInDiv(statRangedDiv, 'Ranged', ` +${toHitRangedValue} ${rangedDamageValue}`);

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
        createBoldSpanInDiv(statAttributesDiv, 'Str', ` +${attributeModifier.str}; `);

        // Dex
        createBoldSpanInDiv(statAttributesDiv, 'Dex', ` +${attributeModifier.dex}; `);

        // Con (can be null)
        if(attributeModifier.con === "-"){
            createBoldSpanInDiv(statAttributesDiv, 'Con', ` ${attributeModifier.con}; `);
        } else{
            createBoldSpanInDiv(statAttributesDiv, 'Con', ` +${attributeModifier.con}; `);
        }

        // Int (can be null or negative)
        if(attributeModifier.int === "-" || attributeModifier.int < 0){
            createBoldSpanInDiv(statAttributesDiv, 'Int', ` ${attributeModifier.int}; `);
        } else {
            createBoldSpanInDiv(statAttributesDiv, 'Int', ` +${attributeModifier.int}; `);
        }

        // Wis
        createBoldSpanInDiv(statAttributesDiv, 'Wis', ` +${attributeModifier.wis}; `);

        // Cha
        createBoldSpanInDiv(statAttributesDiv, 'Cha', ` +${attributeModifier.cha}`);

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