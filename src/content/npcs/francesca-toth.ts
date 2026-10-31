import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "francesca-toth",
  "name": "Francesca Toth",
  "description": {
    "summary": "Francesca tends Auran Toth's Herbologist and enjoys talking with visitors.",
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
