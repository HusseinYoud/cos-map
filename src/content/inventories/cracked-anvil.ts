import type { StockEntry } from "../../domain/models/item";
import { createStockEntry } from "../../domain/shops/createStockEntry";

export const inventory: StockEntry[] = [
  createStockEntry("standard-saddle", 20),
  createStockEntry("exotic-saddle", 100),
  createStockEntry("saddlebag", 12),
  createStockEntry("bear-trap", 12),
  createStockEntry("barbed-net", 10),
  createStockEntry("hunting-trap", 8),
];
