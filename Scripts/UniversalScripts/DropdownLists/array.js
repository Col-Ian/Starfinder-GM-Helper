import { combatantArrayAttackStatistics } from "../../CreationFiles/ArrayStatistics/combatantArrayAttackStatistics.js";
import { combatantArrayMainStatistics } from "../../CreationFiles/ArrayStatistics/combatantArrayMainStatistics.js";
import { expertArrayAttackStatistics } from "../../CreationFiles/ArrayStatistics/expertArrayAttackStatistics.js";
import { expertArrayMainStatistics } from "../../CreationFiles/ArrayStatistics/expertArrayMainStatistics.js";
import { spellcasterArrayAttackStatistics } from "../../CreationFiles/ArrayStatistics/spellcasterArrayAttackStatistics.js";
import { spellcasterArrayMainStatistics } from "../../CreationFiles/ArrayStatistics/spellcasterArrayMainStatistics.js";

// To use for default Arrays
let arr = {};

export let selectArray = [
    arr ={
        value: 'Combatant',
        main: combatantArrayMainStatistics,
        attack: combatantArrayAttackStatistics
    },
    arr ={
        value: 'Expert',
        main: expertArrayMainStatistics,
        attack: expertArrayAttackStatistics
    },
    arr ={
        value: 'Spellcaster',
        main: spellcasterArrayMainStatistics,
        attack: spellcasterArrayAttackStatistics
    }
];