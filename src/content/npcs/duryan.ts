import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "duryan",
  "name": "Duryan",
  "description": {
    "summary": "An arrow maker at The Straight Arrow.",
    "blocks": []
  },
  "locationLinks": [
    {
      "locationId": "straight-arrow",
      "role": "worker"
    }
  ]
};

export default npc;
