import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "danika-martikov",
  "name": "Danika Martikov",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "Co-owner of the Blue Water Inn."
      },
      {
        "kind": "markdown",
        "markdown": "Co-owner of the Blue Water Inn and a steady presence in one of Vallaki’s few relatively welcoming spaces."
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
