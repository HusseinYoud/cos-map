import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "ismark",
  "name": "Ismark Kolyanovich",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The son of the late burgomaster. Burdened by duty, fear, and the weight of protecting his sister."
      },
      {
        "kind": "markdown",
        "markdown": "Tired fella"
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "burgomasters-mansion",
      "role": "associated"
    },
    {
      "locationId": "baroviaVillage",
      "role": "associated"
    }
  ]
};

export default npc;
