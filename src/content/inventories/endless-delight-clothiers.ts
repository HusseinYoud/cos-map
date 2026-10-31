import type { StockEntry } from "../../domain/models/item";
import { createStockEntry } from "../../domain/shops/createStockEntry";

export const inventory: StockEntry[] = [
  createStockEntry("vallakian-clothes", 2),
  createStockEntry("costume-clothes", 10),
  createStockEntry("fine-clothes", 20),
  createStockEntry("traveler-clothes", 3),
  createStockEntry("padded-armor", 13),
  createStockEntry("leather-armor", 18),
  createStockEntry("studded-leather", 60),
  createStockEntry("wolf-pelt-winter-armor", 250),
];
