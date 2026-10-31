import type { Currency, StockEntry } from "../models/item";

export function createStockEntry(
  itemId: string,
  amount: number,
  currency: Currency = "gp",
  quantity: number = 1
): StockEntry {
  return {
    itemId,
    price: {
      amount,
      currency,
    },
    stock: {
      mode: "tracked",
      quantity,
    },
  };
}