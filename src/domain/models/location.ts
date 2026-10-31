import type { ServiceOffer } from "./service";
import type { Description } from "./description";
import type { StockEntry } from "./item";

export interface Location {
  id: string;
  name: string;
  description: Description;
  areaId?: string;
  inventory?: StockEntry[];
  services?: ServiceOffer[];
}

export interface Town extends Location {
  kind: "town";
}

export interface Shop extends Location {
  kind: "shop";
  inventory: StockEntry[];
}

export type SiteCategory =
  | "tavern"
  | "church"
  | "residence"
  | "landmark"
  | "wilderness"
  | "misc";

export interface Site extends Location {
  kind: "site";
  category: SiteCategory;
}

export type Place =
  | Town
  | Shop
  | Site;