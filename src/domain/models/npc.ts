import type { Description } from "./description";

export type LocationRole =
  | "owner"
  | "merchant"
  | "resident"
  | "worker"
  | "visitor"
  | "associated";

export interface LocationLink {
  locationId: string;
  role: LocationRole;
  note?: string;
}

export interface NPCPortrait {
  // Path relative to public/, for example portraits/npcs/bowen.jpg.
  src: string;
  alt?: string;
}

export interface NPC {
  id: string;
  name: string;
  description: Description;
  portrait?: NPCPortrait;
  locationLinks: LocationLink[];
}