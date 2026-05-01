import { villageOfBarovia, entries as villageEntries } from "./villageofBarovia.js";
import { vallaki, entries as vallakiEntries } from "./vallaki.js";

export const locations = [
  villageOfBarovia,
  vallaki,
  {
    id: "krezk",
    name: "Krezk",
    x: 580,
    y: 2255,
    type: "settlement",
    discovered: false,
    description: "Ayo it's me Krezk, what do we even know about meatballs?",
    npcs: ["The Abbot"],
  },
  {
    id: "Jennys-Hut",
    name: "Jenny's Hut",
    x: 1726,
    y: 2142,
    type: "misc",
    discovered: true,
    description: "A small hut on the outskirts of Vallaki, home to the enigmatic Jenny.",
    npcs: ["Jenny Greenteeth"],
  },
  {
    id: "Tserpoolencamp",
    name: "Tser Pool encampment",
    x: 3310,
    y: 1263,
    type: "misc",
    discovered: true,
    description: "pool encampment quite nice tbh",
    npcs: ["Tser Pool"]
  },
  {
    id: "Tserpool",
    name: "Tser Pool",
    x: 2915,
    y: 1497,
    type: "quest",
    discovered: true,
    description: "big water pool idk something about a ghost man who scary and stuff.",
    npcs: ["Tser Pool"]
  },
  {
    id: "Durstmill",
    name: "The old Durst mill",
    x: 2479,
    y: 1891,
    type: "quest",
    discovered: true,
    description: "The mill with 3 very nice sisters who don't sell dead people i swear *Gulp*",
    npcs: ["The old Durst mill"]
  },
  {
    id: "Mordekainen-base",
    name: "Mordenkainen's Magnificent Mansion",
    x: 2201,
    y: 2621,
    type: "quest",
    discovered: true,
    description: "Rumors have it of a weird man with memory loss throwing lighting bolts into Lake Zarovich to fish",
    npcs: ["Mordenkainen"]
  }
];

export const entries = {
  ...villageEntries,
  ...vallakiEntries,
};