import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "Milivoj",
  "name": "Milivoj",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "A gravedigger at St. Andral's Church."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "st-andral",
      "role": "associated"
    }
  ]
};

export default npc;
