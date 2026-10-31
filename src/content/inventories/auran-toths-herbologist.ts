import type { StockEntry } from "../../domain/models/item";
import { createStockEntry } from "../../domain/shops/createStockEntry";

export const inventory: StockEntry[] = [
  createStockEntry("potion-of-healing", 65, "gp", 6),
  createStockEntry("potion-of-greater-healing", 120),
  createStockEntry("potion-of-unclouded-thought", 50),
  createStockEntry("beard-gro", 15),
  createStockEntry("entangling-sap", 30),
  createStockEntry("stinging-icor", 50),
  createStockEntry("fools-moss", 65),
  createStockEntry("deadmans-draught", 50, "gp", 2),
  createStockEntry("love-from-toth", 100),
  createStockEntry("night-mothers-kiss", 50),
  createStockEntry("potion-of-cure-disease", 50),
  createStockEntry("potion-of-cure-poison", 50),
  createStockEntry("potion-of-water-breathing", 30, "gp", 3),
  createStockEntry("daydreamer-peony-juice", 5),
  createStockEntry("alchemist-fire", 50),
  createStockEntry("ghost-briar-wood", 1),
  createStockEntry("daydreamer-peony", 1),
  createStockEntry("burnblister", 10),
];
