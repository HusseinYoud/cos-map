import type { StockEntry } from "../../domain/models/item";
import { createStockEntry } from "../../domain/shops/createStockEntry";

export const inventory: StockEntry[] = [
  createStockEntry("paper-sheet", 10, "sp"),
];
