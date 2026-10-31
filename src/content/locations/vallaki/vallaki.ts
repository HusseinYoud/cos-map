import type { Town } from "../../../domain/models/location";

export const vallaki = {
  id: "vallaki",
  kind: "town",
  name: "Vallaki",

  description: {
    summary:
      "A tense town held together by fear, festivals, and fragile politics.",
    blocks: [
      {
        kind: "markdown",
        markdown: "Big town",
      },
    ],
  },
} satisfies Town;