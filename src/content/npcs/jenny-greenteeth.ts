import type { NPC } from "../../domain/models/npc";

export const jennyGreenteeth: NPC = {
  id: "jenny-greenteeth",
  name: "Jenny Greenteeth",
  description: {
    summary: "Jenny lives in a small hut on the outskirts of Vallaki.",
    blocks: [],
  },
  locationLinks: [
    {
      locationId: "jennys-hut",
      role: "merchant",
    },
  ],
};