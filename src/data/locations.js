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
    shortDescription: "Ayo it's me Krezk, what do we even know about meatballs?",
    npcs: ["The Abbot"],
  },
  {
    id: "Jennys-Hut",
    name: "Jenny's Hut",
    x: 1726,
    y: 2142,
    type: "misc",
    discovered: true,
    shortDescription: "A small hut on the outskirts of Vallaki, home to the enigmatic Jenny.",
    npcs: ["Jenny Greenteeth"],
  },
  {
    id: "Tserpoolencamp",
    name: "Tser Pool encampment",
    x: 3310,
    y: 1263,
    type: "misc",
    discovered: true,
    shortDescription: "pool encampment quite nice tbh",
    npcs: ["Tser Pool"]
  },
  {
    id: "Tserpool",
    name: "Tser Pool",
    x: 2915,
    y: 1497,
    type: "quest",
    discovered: true,
    shortDescription: "big water pool idk something about a ghost man who scary and stuff.",
    npcs: ["Tser Pool"]
  },
  {
    id: "Durstmill",
    name: "The old Durst mill",
    x: 2479,
    y: 1891,
    type: "quest",
    discovered: true,
    shortDescription: "The mill with 3 very nice sisters who don't sell dead people i swear *Gulp*",
    npcs: ["The old Durst mill"]
  },
  {
    id: "Mordekainen-base",
    name: "Mordenkainen's Magnificent Mansion",
    x: 2201,
    y: 2621,
    type: "quest",
    discovered: true,
    shortDescription: "Rumors have it of a weird man with memory loss throwing lighting bolts into Lake Zarovich to fish",
    npcs: ["Mordenkainen"]
  },
  {
    id: "Wizardstower",
    name: "Old Wizard's Tower",
    x: 1186,
    y: 2336,
    type: "quest",
    discovered: true,
    shortDescription:"Old Wizard's Tower currently occupied by Rudolf Van Richten",
    longDescription:[
      {type: "text",
        text: "The old Wizard's tower which was once home the wizard Khazan, who was known for his experiments with magic and his obsession with lichdom."
      },
      {type: "redacted",
        text: "Khazan is alive and has been creating dragons inside the Amber Temple for years therefore the party can find a blue dragon here"
      },
      {type: "text",
        text: "The tower now hosts a blue dragon as well as a teleportation circle, which Rudolf Van Richten has been using."
      }
      
    ]
  },

  {
    id: "LakeZarovich",
    name: "Lake Zarovich",
    x: 2178,
    y: 2434,
    type: "misc",
    discovered: false,
    shortDescription: "A large lake in the heart of Barovia, shrouded in mist and mystery.",
    longDescription: [
      {type: "text",
        text: "Lake Zarovich is a large body of water located just above Vallaki. Rumors have it that a powerful and wicked creature dwell in the depths of the lake."
      },
      {type: "text",
        text: "The lake is host to an Aboleth, a creature of great power and malevolence. The Aboleth is said to have control over the minds of those who venture too close to the lake, and it is rumored to be responsible for the strange disappearances of several villagers over the years."
      },
      {type: "redacted",
        text: "Deep within the lake the Aboleth has a lair where it keeps its most prized possesion, one of Strahds Wives. Which it has been able to control. It keeps it hidden from any outside influence so it can keep it down there."
      }
    ]
  }


];


export const entries = {
  ...villageEntries,
  ...vallakiEntries,
};