import type { StockEntry } from "../../domain/models/item";
import { createStockEntry } from "../../domain/shops/createStockEntry";

export const bowenStablesInventory: StockEntry[] = [
  createStockEntry("pony", 100),
  createStockEntry("draft-horse", 200),
  createStockEntry("riding-horse", 300),
  createStockEntry("warhorse", 600),
];