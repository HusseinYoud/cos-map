import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "jablonski-huer",
  "name": "Jablonski Huer",
  "description": {
    "summary": "A skilled blacksmith who runs Jablonski and Sons.",
    "blocks": []
  },
  "locationLinks": [
    {
      "locationId": "jablonski-and-sons",
      "role": "owner"
    }
  ]
};

export default npc;
