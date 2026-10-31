import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "haliq",
  "name": "Haliq",
  "description": {
    "summary": "A valet who welcomes visitors at Wachterhaus.",
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
