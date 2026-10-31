import type { NPC } from "../../domain/models/npc";

export const bowenTackstovich = {
  id: "bowen-tackstovich",
  name: "Bowen Tackstovich",

  description: {
    summary: "The owner of Bowen Stables.",
    blocks: [
      {
        kind: "markdown",
        markdown:
          "The owner of Bowen Stables. Bowen Tackstovich is an old barovian sun touched male in his late 30’s",
      },
    ],
  },

  locationLinks: [
    {
      locationId: "bowen-stables",
      role: "owner",
    },
  ],
} satisfies NPC;