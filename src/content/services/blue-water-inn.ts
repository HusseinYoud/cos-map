import type { ServiceOffer } from "../../domain/models/service";

export const services: ServiceOffer[] = [
  {
    "id": "room-night",
    "name": "Room per Night",
    "description": {
      "summary": "",
      "blocks": []
    },
    "price": {
      "amount": 5,
      "currency": "sp"
    },
    "priceNote": "Per person."
  },
  {
    "id": "room-breakfast",
    "name": "Room with Breakfast per Night",
    "description": {
      "summary": "",
      "blocks": []
    },
    "price": {
      "amount": 2,
      "currency": "ep"
    },
    "priceNote": "Ask the innkeeper whether this is per person or per room."
  }
];
