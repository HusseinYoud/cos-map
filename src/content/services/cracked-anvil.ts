import type { ServiceOffer } from "../../domain/models/service";

export const services: ServiceOffer[] = [
  {
    "id": "creating-horseshoes",
    "name": "Creating Horseshoes",
    "description": {
      "summary": "",
      "blocks": []
    },
    "price": {
      "amount": 6,
      "currency": "gp"
    }
  },
  {
    "id": "silvering-barovian-steel",
    "name": "Silvering Weapons / Barovian Steel",
    "description": {
      "summary": "",
      "blocks": []
    },
    "price": {
      "amount": 200,
      "currency": "gp"
    }
  },
  {
    "id": "bone-briar-knacks",
    "name": "Bone Briar Knacks to Armor",
    "description": {
      "summary": "",
      "blocks": []
    },
    "price": {
      "amount": 25,
      "currency": "gp"
    }
  },
  {
    "id": "horse-armor",
    "name": "Horse Armor",
    "description": {
      "summary": "",
      "blocks": []
    },
    "priceNote": "Ask the smith for a quote based on the horse and armor."
  }
];
