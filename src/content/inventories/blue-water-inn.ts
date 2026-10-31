import type { StockEntry } from "../../domain/models/item";
import { createStockEntry } from "../../domain/shops/createStockEntry";

export const inventory: StockEntry[] = [
  createStockEntry("purple-grapemash-mug", 8, "cp"),
  createStockEntry("purple-grapemash-pitcher", 5, "sp"),
  createStockEntry("red-dragon-crush-mug", 2, "sp"),
  createStockEntry("red-dragon-crush-pitcher", 10, "sp"),
  createStockEntry("goat-milk-cup", 1, "sp"),
  createStockEntry("wolfsteak", 1, "ep"),
  createStockEntry("egg", 5, "cp"),
  createStockEntry("beet-soup-bread", 3, "cp"),
  createStockEntry("bread", 2, "cp"),
  createStockEntry("hunk-of-cheese", 1, "sp"),
  createStockEntry("venison-cut", 3, "sp"),
  createStockEntry("fruit", 1, "cp"),
  createStockEntry("cheap-menu", 5, "sp"),
  createStockEntry("modest-menu", 8, "sp"),
  createStockEntry("urwins-special", 5, "sp"),
  createStockEntry("baron-sized-meal", 1),
];
