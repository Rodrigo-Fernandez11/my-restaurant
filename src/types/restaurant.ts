export type PriceRange = 1 | 2 | 3 | 4;

export type RestaurantCategory =
  | "italian"
  | "japanese"
  | "mexican"
  | "american"
  | "mediterranean"
  | "indian"
  | "chinese"
  | "french";

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
  image: string;
  category: RestaurantCategory;
  priceRange: PriceRange;
}
