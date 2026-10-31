import { expandedVallakiLocations, expandedVallakiNPCs } from "./locations/vallaki-expansion";
import { vallakiGoods } from "./items/vallaki-goods";
import type { Place } from "../domain/models/location";
import type { NPC } from "../domain/models/npc";
import type { Item } from "../domain/models/item";
import type { MapDefinition } from "../domain/models/map";

import { validateContent } from "../domain/validateContent";

import { vallaki } from "./locations/vallaki/vallaki";
import { bowenStables } from "./locations/vallaki/bowen-stables";
import { jennysHut } from "./locations/vallaki/jennys-hut";

import { townGates } from "./locations/vallaki/town-gates";
import { townSquare } from "./locations/vallaki/town-square";
import { moonlitStreet } from "./locations/vallaki/moonlit-street";

import { sortVallakiLocations } from "./locations/vallaki/location-order";

import { bowenTackstovich } from "./npcs/bowen-tackstovich";
import { jennyGreenteeth } from "./npcs/jenny-greenteeth";

import { mounts } from "./items/mounts";
import { jennyItems } from "./items/jenny-items";

import { importedPlaces } from "./imported/places";
import { importedNPCs } from "./imported/npcs";
import { importedMaps } from "./imported/maps";

// These places now have individually maintained content files.
const maintainedLocations: Place[] = [
  vallaki,
  bowenStables,
  jennysHut,
  ...townGates,
  townSquare,
  moonlitStreet,
  ...expandedVallakiLocations,
];

const maintainedIds = new Set(
  maintainedLocations.map((location) => location.id)
);

// Keep imported places until each has been moved to its own file.
const remainingImportedLocations = importedPlaces.filter(
  (location) => !maintainedIds.has(location.id)
);

export const locations: Place[] = sortVallakiLocations([
  ...maintainedLocations,
  ...remainingImportedLocations,
]);

export const npcs: NPC[] = [
  bowenTackstovich,
  jennyGreenteeth,
  ...importedNPCs,
  ...expandedVallakiNPCs,
];

export const items: Item[] = [
  ...mounts,
  ...jennyItems,
  ...vallakiGoods,
];

export const maps: MapDefinition[] = [
  ...importedMaps,
];

validateContent({
  locations,
  npcs,
  items,
  maps,
});