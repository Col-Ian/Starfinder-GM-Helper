import { aberration, aberrationAdjustments } from "../../CreationFiles/CreatureType/aberration.js";
import { animal, animalAdjustments } from "../../CreationFiles/CreatureType/animal.js";
import { construct, constructAdjustments } from "../../CreationFiles/CreatureType/construct.js";
import { dragon, dragonAdjustments } from "../../CreationFiles/CreatureType/dragon.js";
import { fey, feyAdjustments } from "../../CreationFiles/CreatureType/fey.js";
import { humanoid, humanoidAdjustments } from "../../CreationFiles/CreatureType/humanoid.js";
import { magicalBeast, magicalBeastAdjustments } from "../../CreationFiles/CreatureType/magicalBeast.js";
import { monstrousHumanoid, monstrousHumanoidAdjustments } from "../../CreationFiles/CreatureType/monstrousHumanoid.js";
import { ooze, oozeAdjustments } from "../../CreationFiles/CreatureType/ooze.js";
import { outsider, outsiderAdjustments } from "../../CreationFiles/CreatureType/outsider.js";
import { plant, plantAdjustments } from "../../CreationFiles/CreatureType/plant.js";
import { undead, undeadAdjustments } from "../../CreationFiles/CreatureType/undead.js";
import { vermin, verminAdjustments } from "../../CreationFiles/CreatureType/vermin.js";

// To use for default Creature Type
let ct = {};

export let selectCreatureType = [
    ct ={
        value: 'Aberration',
        type: aberration,
        typeAdjustments: aberrationAdjustments
    },
    ct ={
        value: 'Animal',
        type: animal,
        typeAdjustments: animalAdjustments
    },
    ct ={
        value: 'Construct',
        type: construct,
        typeAdjustments: constructAdjustments
    },
    
    ct ={
        value: 'Dragon',
        type: dragon,
        typeAdjustments: dragonAdjustments
    },
    ct ={
        value: 'Fey',
        type: fey,
        typeAdjustments: feyAdjustments
    },
    ct ={
        value: 'Humanoid',
        type: humanoid,
        typeAdjustments: humanoidAdjustments
    },
    ct ={
        value: 'Magical Beast',
        type: magicalBeast,
        typeAdjustments: magicalBeastAdjustments
    },
    ct ={
        value: 'Monstrous Humanoid',
        type: monstrousHumanoid,
        typeAdjustments: monstrousHumanoidAdjustments
    },
    ct ={
        value: 'Ooze',
        type: ooze,
        typeAdjustments: oozeAdjustments
    },
    ct ={
        value: 'Outsider',
        type: outsider,
        typeAdjustments: outsiderAdjustments
    },
    ct ={
        value: 'Plant',
        type: plant,
        typeAdjustments: plantAdjustments
    },
    ct ={
        value: 'Undead',
        type: undead,
        typeAdjustments: undeadAdjustments
    },
    ct ={
        value: 'Vermin',
        type: vermin,
        typeAdjustments: verminAdjustments
    },
];