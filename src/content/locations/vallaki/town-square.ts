import type { Site } from "../../../domain/models/location";

export const townSquare: Site = {
  id: "Townsquare",
  name: "Town Square",
  kind: "site",
  category: "landmark",
  areaId: "vallaki",
  description: {
    summary: "The town square of Vallaki.",
    blocks: [
      {
        kind: "markdown",
        markdown:
          "The town square of Vallaki is the center of the town's festivals and public gatherings.",
      },
      {
        kind: "markdown",
        markdown:
          "The first time the party arrived here: The shops and homes that enclose the town square are decorated with limp, tattered garlands and painted wooden boxes filled with tiny, dead flowers. At the north end of the square stands a row of stocks, locked in which are several men, women, and children wearing crude, plaster donkey heads.",
      },
    ],
  },
};