import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "sagan-von-faal",
  "name": "Sagan Von Faal",
  "description": {
    "summary": "The receptionist at the Vermillion Brigade guildhall.",
    "blocks": []
  },
  "locationLinks": [
    {
      "locationId": "vermillion-brigade",
      "role": "worker"
    }
  ]
};

export default npc;
