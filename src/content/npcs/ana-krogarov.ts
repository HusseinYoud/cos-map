import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "ana-krogarov",
  "name": "Ana Krogarov",
  "description": {
    "summary": "A bow maker at The Straight Arrow.",
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
