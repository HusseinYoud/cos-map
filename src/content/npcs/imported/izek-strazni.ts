import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "IzekStrazni",
  "name": "Izek Strazni",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The Baron's enforcer and a dangerous wielder of a firey magical arm."
      },
      {
        "kind": "markdown",
        "markdown": "The Baron’s feared enforcer, brutal and unsettling, whose presence alone keeps many townsfolk silent."
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "BurgoMaster",
      "role": "associated"
    },
    {
      "locationId": "vallaki",
      "role": "associated"
    }
  ]
};

export default npc;
