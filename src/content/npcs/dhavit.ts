import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "dhavit",
  "name": "Dhavit",
  "description": {
    "summary": "The cook at Wachterhaus.",
    "blocks": []
  },
  "locationLinks": [
    {
      "locationId": "wachterhaus",
      "role": "worker"
    }
  ]
};

export default npc;
