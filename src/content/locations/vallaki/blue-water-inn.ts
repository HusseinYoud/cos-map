import type { Place } from "../../../domain/models/location";
import { inventory } from "../../inventories/blue-water-inn";
import { services } from "../../services/blue-water-inn";

const location: Place = {
  "id": "blue-water-inn",
  "name": "Blue Water Inn",
  "areaId": "vallaki",
  "description": {
    "summary": "A central inn and meeting place in Vallaki.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "The Blue Water Inn is one of the safest and most useful gathering places in Vallaki."
      },
      {
        "kind": "markdown",
        "markdown": "Gray smoke issues from the chimney of this large, two-story wooden building with a stone foundation and sagging tile roof, upon which several ravens have perched. A painted wooden sign hanging above the main entrance depicts a blue waterfall."
      }
    ]
  },
  "kind": "site",
  "category": "tavern",
  inventory,
  services,
};

export default location;
