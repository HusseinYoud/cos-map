import type { ServiceOffer } from "../../domain/models/service";

export const services: ServiceOffer[] = [
  {
    "id": "letter-delivery",
    "name": "Delivering a Letter",
    "description": {
      "summary": "",
      "blocks": []
    },
    "price": {
      "amount": 20,
      "currency": "sp"
    }
  }
];
