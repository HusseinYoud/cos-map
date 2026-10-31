import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "Arasek",
  "name": "Arasek",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The owner of Arasek Stockyard, the general goods store in Vallaki."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "Arasek",
      "role": "associated"
    }
  ]
};

export default npc;
