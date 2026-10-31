import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "rictavio",
  "name": "Rictavio",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "A flamboyant traveler and storyteller whose cheerful persona conceals a far more serious purpose."
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
