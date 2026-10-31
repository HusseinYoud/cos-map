import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "VictorVallakovich",
  "name": "Victor Vallakovich",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The Baron's son, who is sickly and kept hidden away in the mansion. Has access to a teleportation circle and for some reason has magical powers."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "BurgoMaster",
      "role": "associated"
    }
  ]
};

export default npc;
