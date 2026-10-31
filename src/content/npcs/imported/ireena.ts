import type { NPC } from "../../../domain/models/npc";

const npc: NPC = {
  "id": "ireena",
  "name": "Ireena Kolyana",
  "description": {
    "summary": "",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "A strong-willed young woman marked by Strahd’s attention and central to Barovia’s tragedy."
      },
      {
        "kind": "markdown",
        "markdown": "Woman"
      }
    ]
  },
  "locationLinks": [
    {
      "locationId": "burgomasters-mansion",
      "role": "associated"
    },
    {
      "locationId": "baroviaVillage",
      "role": "associated"
    }
  ]
};

export default npc;
