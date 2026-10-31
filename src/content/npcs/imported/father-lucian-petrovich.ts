import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "Father-Lucian-Petrovich",
  "name": "Father Lucian Petrovich",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The priest of St. Andral's Church."
      },
      {
        "kind": "markdown",
        "markdown": "A weary priest trying to preserve what little sanctuary and decency remains in Vallaki."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "st-andral",
      "role": "associated"
    },
    {
      "locationId": "vallaki",
      "role": "associated"
    }
  ]
};

export default npc;
