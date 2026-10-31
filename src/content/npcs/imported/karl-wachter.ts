import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "karl-wachter",
  "name": "Karl Wachter",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "One of Lady Wachter’s sons, reckless, indulgent, and emblematic of Vallaki’s decaying nobility."
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
