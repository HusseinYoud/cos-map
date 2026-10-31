import type { StockEntry } from "../../domain/models/item";
import { createStockEntry } from "../../domain/shops/createStockEntry";

export const jennyInventory: StockEntry[] = [
  createStockEntry("amulet-proof-detection-location", 500),
  createStockEntry("bag-of-holding", 125),
  createStockEntry("eyes-of-the-eagle", 250),
  createStockEntry("silver-raven-figurine", 300),
  createStockEntry("lantern-of-revealing", 500),
  createStockEntry("rope-of-climbing", 300),
  createStockEntry("staff-of-birdcalls", 25),
  createStockEntry("wand-of-entangle", 400),
  createStockEntry("wand-of-web", 400),
  createStockEntry("gray-bag-of-tricks", 250),
  createStockEntry("bottled-breath", 250),
  createStockEntry("cap-of-water-breathing", 250),
  createStockEntry("dust-of-sneezing-and-choking", 250),
  createStockEntry("ring-of-jumping", 250),
  createStockEntry("ring-of-water-walking", 250),
  createStockEntry("sending-stones", 250),
  createStockEntry("staff-of-flowers", 25),
  createStockEntry("wand-of-smiles", 25),
  createStockEntry("broom-of-flying", 1000),
];