import type { NPC } from "../../domain/models/npc";

const npc: NPC = {
  "id": "dimitri-valistov",
  "name": "Dimitri Valistov",
  "description": {
    "summary": "A skilled, reserved smith who works at The Cracked Anvil.",
    "blocks": []
  },
  "locationLinks": [
    {
      "locationId": "cracked-anvil",
      "role": "worker"
    }
  ]
};

export default npc;
