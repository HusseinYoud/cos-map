import type { Description } from "./description";

export type Currency =
  | "cp"
  | "sp"
  | "ep"
  | "gp"
  | "pp";

export interface Money {
  amount: number;
  currency: Currency;
}

export type ItemCategory =
  | "mount"
  | "equipment"
  | "potion"
  | "weapon"
  | "armor"
  | "food"
  | "book"
  | "misc";

export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  description: Description;
}

export type Stock =
  | {
      mode: "tracked";
      quantity: number;
    }
  | {
      mode: "untracked";
    };

export interface StockEntry {
  itemId: string;
  price: Money;
  stock: Stock;
  note?: string;
}