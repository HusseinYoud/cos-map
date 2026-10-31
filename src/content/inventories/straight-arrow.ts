import type { StockEntry } from "../../domain/models/item";
import { createStockEntry } from "../../domain/shops/createStockEntry";

export const inventory: StockEntry[] = [
  createStockEntry("light-crossbow", 35),
  createStockEntry("hand-crossbow", 100),
  createStockEntry("heavy-crossbow", 90),
  createStockEntry("shortbow", 40),
  createStockEntry("sling", 4, "sp"),
  createStockEntry("longbow", 80),
  createStockEntry("dart", 5, "sp"),
  createStockEntry("net", 10),
  createStockEntry("arrows-20", 4),
  createStockEntry("blowgun-needles", 4),
  createStockEntry("crossbow-bolts", 4),
  createStockEntry("sling-bullets", 2, "sp"),
];
