import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "auran-toth",
  "name": "Auran Toth",
  "description": {
    "summary": "Auran explores the valley and returns occasionally with ingredients for the shop.",
    "blocks": []
  },
  "locationLinks": [
    {
      "locationId": "auran-toths-herbologist",
      "role": "merchant"
    }
  ]
};

export default npc;
