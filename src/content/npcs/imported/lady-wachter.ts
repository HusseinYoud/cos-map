import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "lady-wachter",
  "name": "Lady Wachter",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "A dangerous political rival to the Baron."
      },
      {
        "kind": "markdown",
        "markdown": "A calm, intelligent, and deeply dangerous political rival to the Baron, representing a darker future for Vallaki."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "wachterhaus",
      "role": "associated"
    },
    {
      "locationId": "vallaki",
      "role": "associated"
    }
  ]
};

export default npc;
