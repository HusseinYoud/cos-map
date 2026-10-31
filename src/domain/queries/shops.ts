import type { Place, Shop } from "../models/location";
import type { Item, StockEntry } from "../models/item";

export interface ResolvedStockEntry {
  item: Item;
  offer: StockEntry;
}

export function getShopsInArea(
  locations: readonly Place[],
  areaId: string
): Shop[] {
  return locations.filter(
    (location): location is Shop =>
      location.kind === "shop" &&
      location.areaId === areaId
  );
}

export function getShopInventory(
  shop: Pick<Shop, "id" | "inventory">,
  items: readonly Item[]
): ResolvedStockEntry[] {
  return shop.inventory.map((offer) => {
    const item = items.find(
      (candidate) => candidate.id === offer.itemId
    );

    if (!item) {
      throw new Error(
        `Shop "${shop.id}" references unknown item "${offer.itemId}".`
      );
    }

    return {
      item,
      offer,
    };
  });
}