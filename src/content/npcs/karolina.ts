import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "karolina",
  "name": "Karolina",
  "description": {
    "summary": "Karolina serves customers at The Straight Arrow.",
    "blocks": []
  },
  "locationLinks": [
    {
      "locationId": "straight-arrow",
      "role": "merchant"
    }
  ]
};

export default npc;
