import type { Shop } from "../../../domain/models/location";
import { bowenStablesInventory } from "../../inventories/bowen-stables";

export const bowenStables = {
  id: "bowen-stables",
  kind: "shop",
  name: "Bowen Stables",
  areaId: "vallaki",

  description: {
    summary:
      "Bowen Stables, a merchant who deals with horses and carriages.",
    blocks: [
      {
        kind: "markdown",
        markdown:
          "Off in a little corner a bit off the main road you see a little stable with a few horses being brushed by a old brown haired man who has a little grass straw in his mouth. Not too far away from him you see a little house made of straw and wood with a candle lit in the window. Sur-rounding the estate is a wooden fence with spikes made of thin branches.",
      },
    ],
  },

  inventory: bowenStablesInventory,
} satisfies Shop;