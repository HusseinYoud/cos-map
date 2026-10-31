import type { Place } from "./models/location";
import type { NPC } from "./models/npc";
import type { Item } from "./models/item";
import type { MapDefinition } from "./models/map";

interface Content {
  locations: readonly Place[];
  npcs: readonly NPC[];
  items: readonly Item[];
  maps: readonly MapDefinition[];
}

function uniqueIds(
  label: string,
  entries: readonly { id: string }[]
): Set<string> {
  const ids = new Set<string>();

  for (const entry of entries) {
    if (!entry.id.trim()) {
      throw new Error(`${label}: an entry has an empty id.`);
    }

    if (ids.has(entry.id)) {
      throw new Error(`${label}: duplicate id "${entry.id}".`);
    }

    ids.add(entry.id);
  }

  return ids;
}

export function validateContent(content: Content): void {
  const locationIds = uniqueIds("Locations", content.locations);
  const itemIds = uniqueIds("Items", content.items);

  uniqueIds("NPCs", content.npcs);
  uniqueIds("Maps", content.maps);

  const locationById = new Map(
    content.locations.map((location) => [location.id, location])
  );

  for (const location of content.locations) {
    if (location.parentLocationId) {
      const parent = locationById.get(location.parentLocationId);

      if (!parent) {
        throw new Error(`${location.id}: unknown parent "${location.parentLocationId}".`);
      }

      if (
        location.areaId &&
        parent.id !== location.areaId &&
        parent.areaId !== location.areaId
      ) {
        throw new Error(`${location.id}: parent belongs to another area.`);
      }

      const visited = new Set<string>();
      let ancestor: Place | undefined = location;

      while (ancestor) {
        if (visited.has(ancestor.id)) {
          throw new Error(`${location.id}: cycle in parent locations.`);
        }
        visited.add(ancestor.id);
        ancestor = ancestor.parentLocationId
          ? locationById.get(ancestor.parentLocationId)
          : undefined;
      }
    }

    if (location.areaId && !locationIds.has(location.areaId)) {
      throw new Error(
        `${location.id}: unknown area "${location.areaId}".`
      );
    }

    const serviceIds = new Set<string>();
    for (const service of location.services ?? []) {
      if (!service.id.trim() || serviceIds.has(service.id)) {
        throw new Error(`${location.id}: empty or duplicate service id "${service.id}".`);
      }
      serviceIds.add(service.id);
      if (service.price && (!Number.isFinite(service.price.amount) || service.price.amount < 0)) {
        throw new Error(`${location.id}: invalid service price for "${service.id}".`);
      }
      if (!service.price && !service.priceNote?.trim()) {
        throw new Error(`${location.id}: service "${service.id}" needs a price or price note.`);
      }
    }
    if (!location.inventory) continue;

    const inventoryIds = new Set<string>();

    for (const offer of location.inventory) {
      if (!itemIds.has(offer.itemId)) {
        throw new Error(
          `${location.id}: unknown item "${offer.itemId}".`
        );
      }

      if (inventoryIds.has(offer.itemId)) {
        throw new Error(
          `${location.id}: duplicate inventory item "${offer.itemId}".`
        );
      }

      inventoryIds.add(offer.itemId);

      if (!Number.isFinite(offer.price.amount) || offer.price.amount < 0) {
        throw new Error(
          `${location.id}: invalid price for "${offer.itemId}".`
        );
      }

      if (
        offer.stock.mode === "tracked" &&
        (!Number.isInteger(offer.stock.quantity) || offer.stock.quantity < 0)
      ) {
        throw new Error(
          `${location.id}: invalid quantity for "${offer.itemId}".`
        );
      }
    }
  }

  for (const npc of content.npcs) {
    if (npc.portrait) {
      const src = npc.portrait.src;
      if (
        !src.trim() ||
        src !== src.trim() ||
        src.startsWith("/") ||
        src.includes(":") ||
        src.includes("\\") ||
        src.split("/").some((part) => part === ".." || part === ".")
      ) {
        throw new Error(`${npc.id}: portrait must use a public-relative path.`);
      }
    }

    const linkedIds = new Set<string>();

    for (const link of npc.locationLinks) {
      if (!locationIds.has(link.locationId)) {
        throw new Error(
          `${npc.id}: unknown location "${link.locationId}".`
        );
      }

      if (linkedIds.has(link.locationId)) {
        throw new Error(
          `${npc.id}: duplicate link to "${link.locationId}".`
        );
      }

      linkedIds.add(link.locationId);
    }
  }

  for (const map of content.maps) {
    const markerIds = new Set<string>();

    for (const marker of map.markers) {
      if (!locationIds.has(marker.locationId)) {
        throw new Error(
          `${map.id}: marker references "${marker.locationId}".`
        );
      }

      if (markerIds.has(marker.locationId)) {
        throw new Error(
          `${map.id}: duplicate marker for "${marker.locationId}".`
        );
      }

      markerIds.add(marker.locationId);

      if (
        !Number.isFinite(marker.x) ||
        !Number.isFinite(marker.y) ||
        marker.x < 0 ||
        marker.y < 0 ||
        marker.x > map.imageWidth ||
        marker.y > map.imageHeight
      ) {
        throw new Error(
          `${map.id}: invalid coordinates for "${marker.locationId}".`
        );
      }
    }
  }
}