import type { Description } from "./description";
import type { Money } from "./item";

export interface ServiceOffer {
  id: string;
  name: string;
  description: Description;
  price?: Money;
  priceNote?: string;
}
