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

export interface NPC {
  id: string;
  name: string;
  description: Description;
  locationLinks: LocationLink[];
}