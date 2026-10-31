import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "urwin-martikov",
  "name": "Urwin Martikov",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "Innkeeper of the Blue Water Inn"
      },
      {
        "kind": "markdown",
        "markdown": "The innkeeper of the Blue Water Inn, practical and observant, with ties that make him more important than he first appears."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "blue-water-inn",
      "role": "associated"
    },
    {
      "locationId": "vallaki",
      "role": "associated"
    }
  ]
};

export default npc;
