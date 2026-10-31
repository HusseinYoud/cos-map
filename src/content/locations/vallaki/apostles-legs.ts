import type { Place } from "../../../domain/models/location";
import { inventory } from "../../inventories/apostles-legs";
import { services } from "../../services/apostles-legs";

const location: Place = {
  "id": "apostles-legs",
  "name": "The Apostles Legs",
  "kind": "shop",
  "areaId": "vallaki",
  "description": {
    "summary": "A letter delivery service and paper shop.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "You come closer to a rather small building; you’ve almost reached the end of the street. You see a wooden house not all that big with different stained glass windows and a roof made out of stone you see chiseled into a wooden plank and nailed onto a rather rusty fence “The Apostles Legs, the fastest delivery service in all of Barovia, also the only one” Inside the building you spot a man with a very long beard, thin arms and legs just eyeing you as you come in."
      },
      {
        "kind": "markdown",
        "markdown": "The building is very cold but spot free. Like it gets cleaned routinely."
      }
    ]
  },
  inventory,
  services,
};

export default location;
