import type { Site } from "../../../domain/models/location";

export const moonlitStreet: Site = {
  id: "MoonlitStreet",
  name: "Moonlit Street",
  kind: "site",
  category: "landmark",
  areaId: "vallaki",
  description: {
    summary:
      "A street in Vallakis west ward known for the way the moonlight hits it.",
    blocks: [
      {
        kind: "markdown",
        markdown:
          "As enter the street you notice how many people are travesing the street, it stretches for quite a while and ends by a rather huge building. You hear the sound of people fletching, you smell the smell of iron getting put into place and the general feeling of people living here is nostalgic to say the least.",
      },
      {
        kind: "markdown",
        markdown:
          "If entered by night the street is bathed in a soft silvery aura from the way the rocks reflect moonlight",
      },
    ],
  },
};