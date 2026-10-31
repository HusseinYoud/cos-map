import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "BurgomasterVargas",
  "name": "Baron Vargas Vallakovich",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The burgomaster of Vallaki, believes that happiness is the key to safety and will punish anyone who threatens the town's happiness."
      },
      {
        "kind": "markdown",
        "markdown": "The unstable ruler of Vallaki, convinced that forced happiness and relentless festivals can keep darkness at bay."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "BurgoMaster",
      "role": "associated"
    },
    {
      "locationId": "vallaki",
      "role": "associated"
    }
  ]
};

export default npc;
