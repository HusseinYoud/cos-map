import type { Place } from "../../../domain/models/location";
import { inventory } from "../../inventories/endless-delight-clothiers";
import { services } from "../../services/endless-delight-clothiers";

const location: Place = {
  "id": "endless-delight-clothiers",
  "name": "The Endless Delight Clothiers",
  "kind": "shop",
  "areaId": "vallaki",
  parentLocationId: "MoonlitStreet",
  "description": {
    "summary": "A clothier selling clothing, light armor and winter equipment.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "You get near to a store with covered up windows, the building like many others have cobble stone foundation and a wooden roof, what makes this building so different is behind every window you spot a different shade of cloth and a light source, making the ground around you look grassy when the cloth is green and furious when the colors are red."
      },
      {
        "kind": "markdown",
        "markdown": "As you step in you notice why the outside looked the way it did. The entire floor and all over the floor has different slips of cloth everywhere. In one corner you see a massive doll leaning on another doll, with all different outfits, you assume this is what the owner use as mannequins. Behind one of the mannequins a person is dusting the mannequins off. It is a rather older man with just a slit of hair, a hunched back and very long nails. His eyes are weirdly pretty, the same with the skin on his lips and face. Behind a counter you see a big sign where it says “Endless Delight Clothiers”"
      }
    ]
  },
  inventory,
  services,
};

export default location;
