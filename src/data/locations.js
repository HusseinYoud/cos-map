import { villageOfBarovia, entries as villageEntries } from "./villageofBarovia.js";

export const locations = [
  villageOfBarovia,
  {
    id: "vallaki",
    name: "Vallaki",
    x: 2006,
    y: 2144,
    type: "town",
    discovered: true,
    description: "A tense town held together by fear, festivals, and fragile politics.",
    npcs: ["Baron Vallakovich", "Lady Wachter", "Rictavio"],
  },
  {
    id: "krezk",
    name: "Krezk",
    x: 580,
    y: 2255,
    type: "settlement",
    discovered: false,
    description: "A secluded walled community that keeps outsiders at a distance.",
    npcs: ["The Abbot"],
  },
];

export const entries = {
  ...villageEntries,
};