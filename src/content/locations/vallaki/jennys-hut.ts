import type { Shop } from "../../../domain/models/location";
import { jennyInventory } from "../../inventories/jenny-greenteeth";

export const jennysHut: Shop = {
  id: "jennys-hut",
  name: "Jenny's Hut",
  kind: "shop",
  areaId: "vallaki",
  description: {
    summary:
      "A small hut on the outskirts of Vallaki, home to the enigmatic Jenny.",
    blocks: [],
  },
  inventory: jennyInventory,
};