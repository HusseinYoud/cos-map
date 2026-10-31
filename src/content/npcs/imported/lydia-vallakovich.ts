import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "lydiaVallakovich",
  "name": "Lydia Vallakovich",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The Baron’s wife, caught in the strange social order of Vallaki and overshadowed by her husband’s instability."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "vallaki",
      "role": "associated"
    }
  ]
};

export default npc;
