import type { Place } from "../../../domain/models/location";
import { inventory } from "../../inventories/straight-arrow";

const location: Place = {
  "id": "straight-arrow",
  "name": "The Straight Arrow",
  "kind": "shop",
  "areaId": "vallaki",
  "description": {
    "summary": "A shop selling bows, crossbows and ammunition.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "As you come closer to this building you notice string and cracked bows everywhere and hear from inside the building the sound of a woman struggling with something."
      },
      {
        "kind": "markdown",
        "markdown": "The building is a cobblestone building with a pitched wooden roof, probably the most normal looking building in the vicinity."
      },
      {
        "kind": "markdown",
        "markdown": "On a little, darker wooden sign you see chiseled in “The Straight Arrow” in a combination of lower case and upper case letters."
      },
      {
        "kind": "markdown",
        "markdown": "As you step in you notice all different types of bows, short bows, long bows, cross bows. Plastered around the top of the building. Behind a wooden counter a pale woman with no glint in her eyes and no real expression, dark blue hair long hair made in a very messy bun a hurt hand is standing behind the counter."
      },
      {
        "kind": "markdown",
        "markdown": "You hear a rough womans voice yelling in a room in the back yelling: “KAROLINA, WHO IS THERE??”"
      }
    ]
  },
  inventory,
};

export default location;
