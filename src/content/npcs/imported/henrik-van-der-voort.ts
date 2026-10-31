import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "Henrik-Van-Der-Voort",
  "name": "Henrik Van Der Voort",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The coffin maker of Vallaki, known for his craftsmanship."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "Coffin",
      "role": "associated"
    }
  ]
};

export default npc;
