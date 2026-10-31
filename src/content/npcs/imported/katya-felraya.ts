import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "KatyaFelraya",
  "name": "Katya Felraya",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The owner of Katyas Kavern"
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "KatyasKavern",
      "role": "associated"
    }
  ]
};

export default npc;
