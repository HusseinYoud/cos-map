import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "dragno-waror",
  "name": "Dragno Waror",
  "description": {
    "summary": "Dragno delivers mail in Vallaki and sells paper.",
    "blocks": []
  },
  "locationLinks": [
    {
      "locationId": "apostles-legs",
      "role": "merchant"
    }
  ]
};

export default npc;
