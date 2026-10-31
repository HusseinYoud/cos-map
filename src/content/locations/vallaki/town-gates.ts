import type { Site } from "../../../domain/models/location";

export const morningGate: Site = {
  id: "GatesEast",
  name: "Morning Gates",
  kind: "site",
  category: "landmark",
  areaId: "vallaki",
  description: {
    summary: "The eastern most gate of Vallaki.",
    blocks: [
      {
        kind: "markdown",
        markdown:
          "The Eastern Gates of vallaki. Also refered to as the Mourning Gates",
      },
    ],
  },
};

export const zarovichGate: Site = {
  id: "NorthGate",
  name: "Zarovich Gates",
  kind: "site",
  category: "landmark",
  areaId: "vallaki",
  description: {
    summary: "The northern gate of Vallaki.",
    blocks: [
      {
        kind: "markdown",
        markdown:
          "The nothern gates of Vallaki, sometimes refered to as the Gate to the Lake.",
      },
    ],
  },
};

export const sunsetGate: Site = {
  id: "WesternGate",
  name: "Sunset Gates",
  kind: "site",
  category: "landmark",
  areaId: "vallaki",
  description: {
    summary: "The western gate of Vallaki.",
    blocks: [
      {
        kind: "markdown",
        markdown:
          "The Sunset gate of Vallaki is the westernmost gate.",
      },
    ],
  },
};

export const townGates: Site[] = [
  morningGate,
  zarovichGate,
  sunsetGate,
];