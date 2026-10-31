export type MarkerIcon =
  | "town"
  | "shop"
  | "tavern"
  | "church"
  | "quest"
  | "misc";

export interface MapMarker {
  locationId: string;
  x: number;
  y: number;
  icon: MarkerIcon;
}

export interface MapDefinition {
  id: string;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  minZoom: number;
  maxZoom: number;
  markers: MapMarker[];
}