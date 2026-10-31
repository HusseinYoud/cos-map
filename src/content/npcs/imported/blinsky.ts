import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "Blinsky",
  "name": "Blinsky",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The owner of Blinsky's Toys"
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "BlinskysToys",
      "role": "associated"
    }
  ]
};

export default npc;
