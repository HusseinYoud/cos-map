import type { Place } from "../../../domain/models/location";

const location: Place = {
  "id": "BlinskysToys",
  "name": "Blinskys Toys",
  "areaId": "vallaki",
  "description": {
    "summary": "A shop selling toys and games.",
    "blocks": [
      {
        "kind": "markdown",
        "markdown": "Blinskys Toys is a small shop that sells dolls and other toys"
      },
      {
        "kind": "markdown",
        "markdown": "Blinsky has started selling a collection of dolls that look like Ireena Kolyana."
      },
      {
        "kind": "redacted",
        "markdown": "",
        "revealed": false
      }
    ]
  },
  "kind": "shop",
  "inventory": []
};

export default location;
