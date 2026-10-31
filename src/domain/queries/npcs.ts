import type { NPC } from "../models/npc";
import type { Place } from "../models/location";

export function getNPCById(
  npcs: readonly NPC[],
  npcId: string
): NPC | undefined {
  return npcs.find(
    (npc) => npc.id === npcId
  );
}

export function getNPCsAtLocation(
  npcs: readonly NPC[],
  locationId: string
): NPC[] {
  return npcs.filter((npc) =>
    npc.locationLinks.some(
      (link) => link.locationId === locationId
    )
  );
}

export function getLocationsForNPC(
  locations: readonly Place[],
  npc: NPC
): Place[] {
  return locations.filter((location) =>
    npc.locationLinks.some(
      (link) => link.locationId === location.id
    )
  );
}