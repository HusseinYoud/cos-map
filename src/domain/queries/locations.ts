import type { Place } from "../models/location";

export function getLocationById(
  locations: readonly Place[],
  locationId: string
): Place | undefined {
  return locations.find(
    (location) => location.id === locationId
  );
}

export function getLocationsInArea(
  locations: readonly Place[],
  areaId: string
): Place[] {
  return locations.filter(
    (location) => location.areaId === areaId
  );
}