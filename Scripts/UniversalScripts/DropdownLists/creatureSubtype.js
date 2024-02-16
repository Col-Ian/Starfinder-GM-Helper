import { aeon, aeonAdjustments } from "../../CreationFiles/CreatureSubtype/aeon.js";
import { agathion, agathionAdjustments } from "../../CreationFiles/CreatureSubtype/agathion.js";
import { air, airAdjustments } from "../../CreationFiles/CreatureSubtype/air.js";
import { android, androidAdjustments } from "../../CreationFiles/CreatureSubtype/android.js";
import { angel, angelAdjustments } from "../../CreationFiles/CreatureSubtype/angel.js";
import { aquatic, aquaticAdjustments } from "../../CreationFiles/CreatureSubtype/aquatic.js";
import { archon, archonAdjustments } from "../../CreationFiles/CreatureSubtype/archon.js";
import { azata, azataAdjustments } from "../../CreationFiles/CreatureSubtype/azata.js";
import { cold, coldAdjustments } from "../../CreationFiles/CreatureSubtype/cold.js";
import { daemon, daemonAdjustments } from "../../CreationFiles/CreatureSubtype/daemon.js";
import { demon, demonAdjustments } from "../../CreationFiles/CreatureSubtype/demon.js";
import { devil, devilAdjustments } from "../../CreationFiles/CreatureSubtype/devil.js";
import { dwarf, dwarfAdjustments } from "../../CreationFiles/CreatureSubtype/dwarf.js";
import { earth, earthAdjustments } from "../../CreationFiles/CreatureSubtype/earth.js";
import { elemental, elementalAdjustments } from "../../CreationFiles/CreatureSubtype/elemental.js";
import { elf, elfAdjustments } from "../../CreationFiles/CreatureSubtype/elf.js";
import { fire, fireAdjustments } from "../../CreationFiles/CreatureSubtype/fire.js";
import { giant, giantAdjustments } from "../../CreationFiles/CreatureSubtype/giant.js";
import { goblinoid, goblinoidAdjustments } from "../../CreationFiles/CreatureSubtype/goblinoid.js";
import { gray, grayAdjustments } from "../../CreationFiles/CreatureSubtype/gray.js";
import { halfling, halflingAdjustments } from "../../CreationFiles/CreatureSubtype/halfling.js";
import { human } from "../../CreationFiles/CreatureSubtype/human.js";
import { ikeshti, ikeshtiAdjustments } from "../../CreationFiles/CreatureSubtype/ikeshti.js";
import { incorporeal, incorporealAdjustments } from "../../CreationFiles/CreatureSubtype/incorporeal.js";
import { inevitable, inevitableAdjustments } from "../../CreationFiles/CreatureSubtype/inevitable.js";
import { kasatha, kasathaAdjustments } from "../../CreationFiles/CreatureSubtype/kasatha.js";
import { lashunta, lashuntaAdjustments } from "../../CreationFiles/CreatureSubtype/lashunta.js";
import { maraquoi, maraquoiAdjustments } from "../../CreationFiles/CreatureSubtype/maraquoi.js";
import { none, noneAdjustments } from "../../CreationFiles/CreatureSubtype/none.js";
import { orc, orcAdjustments } from "../../CreationFiles/CreatureSubtype/orc.js";
import { otherAdjustments, otherSubtypes } from "../../CreationFiles/CreatureSubtype/otherSubtypes.js";
import { plantlike } from "../../CreationFiles/CreatureSubtype/plantlike.js";
import { protean, proteanAdjustments } from "../../CreationFiles/CreatureSubtype/protean.js";
import { reptoid, reptoidAdjustments } from "../../CreationFiles/CreatureSubtype/reptoid.js";
import { ryphorian, ryphorianAdjustments } from "../../CreationFiles/CreatureSubtype/ryphorian.js";
import { sarcesian, sarcesianAdjustments } from "../../CreationFiles/CreatureSubtype/sarcesian.js";
import { shapechanger, shapechangerAdjustments } from "../../CreationFiles/CreatureSubtype/shapechanger.js";
import { shirren, shirrenAdjustments } from "../../CreationFiles/CreatureSubtype/shirren.js";
import { skittermander, skittermanderAdjustments } from "../../CreationFiles/CreatureSubtype/skittermander.js";
import { swarm, swarmAdjustments } from "../../CreationFiles/CreatureSubtype/swarm.js";
import { verthani, verthaniAdjustments } from "../../CreationFiles/CreatureSubtype/verthani.js";
import { vesk, veskAdjustments } from "../../CreationFiles/CreatureSubtype/vesk.js";
import { water, waterAdjustments } from "../../CreationFiles/CreatureSubtype/water.js";
import { ysoki, ysokiAdjustments } from "../../CreationFiles/CreatureSubtype/ysoki.js";
import { humanoidAdjustments } from "../../CreationFiles/CreatureType/humanoid.js";
import { plantAdjustments } from "../../CreationFiles/CreatureType/plant.js";

// To use for Creature Subtype
let cs = {};

export let selectCreatureSubtype = [
    cs ={
        value: 'None',
        subtype: none,
        subtypeAdjustments: noneAdjustments
    },
    cs ={
        value: 'Aeon',
        subtype: aeon,
        subtypeAdjustments: aeonAdjustments
    },
    cs ={
        value: 'Agathion',
        subtype: agathion,
        subtypeAdjustments: agathionAdjustments
    },
    cs ={
        value: 'Air',
        subtype: air,
        subtypeAdjustments: airAdjustments
    },
    cs ={
        value: 'Android',
        subtype: android,
        subtypeAdjustments: androidAdjustments
    },
    cs ={
        value: 'Angel',
        subtype: angel,
        subtypeAdjustments: angelAdjustments
    },
    cs ={
        value: 'Aquatic',
        subtype: aquatic,
        subtypeAdjustments: aquaticAdjustments
    },
    cs ={
        value: 'Archon',
        subtype: archon,
        subtypeAdjustments: archonAdjustments
    },
    cs ={
        value: 'Azata',
        subtype: azata,
        subtypeAdjustments: azataAdjustments
    },
    cs ={
        value: 'Cold',
        subtype: cold,
        subtypeAdjustments: coldAdjustments
    },
    cs ={
        value: 'Daemon',
        subtype: daemon,
        subtypeAdjustments: daemonAdjustments
    },
    cs ={
        value: 'Demon',
        subtype: demon,
        subtypeAdjustments: demonAdjustments
    },
    cs ={
        value: 'Devil',
        subtype: devil,
        subtypeAdjustments: devilAdjustments
    },
    cs ={
        value: 'Dwarf',
        subtype: dwarf,
        subtypeAdjustments: dwarfAdjustments
    },
    cs ={
        value: 'Earth',
        subtype: earth,
        subtypeAdjustments: earthAdjustments
    },
    cs ={
        value: 'Elemental',
        subtype: elemental,
        subtypeAdjustments: elementalAdjustments
    },
    cs ={
        value: 'Elf',
        subtype: elf,
        subtypeAdjustments: elfAdjustments
    },
    cs ={
        value: 'Fire',
        subtype: fire,
        subtypeAdjustments: fireAdjustments
    },
    cs ={
        value: 'Giant',
        subtype: giant,
        subtypeAdjustments: giantAdjustments
    },
    cs ={
        value: 'Goblinoid',
        subtype: goblinoid,
        subtypeAdjustments: goblinoidAdjustments
    },
    cs ={
        value: 'Gray',
        subtype: gray,
        subtypeAdjustments: grayAdjustments
    },
    cs ={
        value: 'Halfling',
        subtype: halfling,
        subtypeAdjustments: halflingAdjustments
    },
    cs ={
        value: 'Human',
        subtype: human,
        subtypeAdjustments: humanoidAdjustments
    },
    cs ={
        value: 'Ikeshti',
        subtype: ikeshti,
        subtypeAdjustments: ikeshtiAdjustments
    },
    cs ={
        value: 'Incorporeal',
        subtype: incorporeal,
        subtypeAdjustments: incorporealAdjustments
    },
    cs ={
        value: 'Inevitable',
        subtype: inevitable,
        subtypeAdjustments: inevitableAdjustments
    },
    cs ={
        value: 'Kasatha',
        subtype: kasatha,
        subtypeAdjustments: kasathaAdjustments
    },
    cs ={
        value: 'Lashunta',
        subtype: lashunta,
        subtypeAdjustments: lashuntaAdjustments
    },
    cs ={
        value: 'Maraquoi',
        subtype: maraquoi,
        subtypeAdjustments: maraquoiAdjustments
    },
    cs ={
        value: 'Orc',
        subtype: orc,
        subtypeAdjustments: orcAdjustments
    },
    cs ={
        value: 'Plantlike',
        subtype: plantlike,
        subtypeAdjustments: plantAdjustments
    },
    cs ={
        value: 'Protean',
        subtype: protean,
        subtypeAdjustments: proteanAdjustments
    },
    cs ={
        value: 'Reptoid',
        subtype: reptoid,
        subtypeAdjustments: reptoidAdjustments
    },
    cs ={
        value: 'Ryphorian',
        subtype: ryphorian,
        subtypeAdjustments: ryphorianAdjustments
    },
    cs ={
        value: 'Sarcesian',
        subtype: sarcesian,
        subtypeAdjustments: sarcesianAdjustments
    },
    cs ={
        value: 'Shapechanger',
        subtype: shapechanger,
        subtypeAdjustments: shapechangerAdjustments
    },
    cs ={
        value: 'Shirren',
        subtype: shirren,
        subtypeAdjustments: shirrenAdjustments
    },
    cs ={
        value: 'Skittermander',
        subtype: skittermander,
        subtypeAdjustments: skittermanderAdjustments
    },
    cs ={
        value: 'Swarm',
        subtype: swarm,
        subtypeAdjustments: swarmAdjustments
    },
    cs ={
        value: 'Verthani',
        subtype: verthani,
        subtypeAdjustments: verthaniAdjustments
    },
    cs ={
        value: 'Vesk',
        subtype: vesk,
        subtypeAdjustments: veskAdjustments
    },
    cs ={
        value: 'Water',
        subtype: water,
        subtypeAdjustments: waterAdjustments
    },
    cs ={
        value: 'Ysoki',
        subtype: ysoki,
        subtypeAdjustments: ysokiAdjustments
    },
    cs ={
        value: 'Chaotic',
        subtype: otherSubtypes,
        subtypeAdjustments: otherAdjustments
    },
    cs ={
        value: 'Evil',
        subtype: otherSubtypes,
        subtypeAdjustments: otherAdjustments
    },
    cs ={
        value: 'Extraplanar',
        subtype: otherSubtypes,
        subtypeAdjustments: otherAdjustments
    },
    cs ={
        value: 'Good',
        subtype: otherSubtypes,
        subtypeAdjustments: otherAdjustments
    },
    cs ={
        value: 'Lawful',
        subtype: otherSubtypes,
        subtypeAdjustments: otherAdjustments
    },
    cs ={
        value: 'Magical',
        subtype: otherSubtypes,
        subtypeAdjustments: otherAdjustments
    },
    cs ={
        value: 'Native',
        subtype: otherSubtypes,
        subtypeAdjustments: otherAdjustments
    },
    cs ={
        value: 'Technological',
        subtype: otherSubtypes,
        subtypeAdjustments: otherAdjustments
    },
];