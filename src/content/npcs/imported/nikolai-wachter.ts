import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "nikolai-wachter",
  "name": "Nikolai Wachter",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "One of Lady Wachter’s sons, more useful as a sign of the family’s rot than as a source of wisdom."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "vallaki",
      "role": "associated"
    },
    {
      "locationId": "wachterhaus",
      "role": "associated"
    }
  ]
};

export default npc;
