import {
  locations as legacyLocations,
  entries,
} from "./locations.js";

export const locations = legacyLocations.map((location) => {
  if (location.id !== "Jennys-Hut") {
    return location;
  }

  return {
    ...location,
    detailPage: "?map=vallaki&place=jennys-hut",
  };
});

export { entries };