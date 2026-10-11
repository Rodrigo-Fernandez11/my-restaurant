import type { Restaurant, RestaurantCategory, PriceRange } from "@/types/restaurant";

export interface CatalogFilters {
  category?: RestaurantCategory;
  price?: PriceRange;
  q?: string;
}

export function applyFilters(
  list: readonly Restaurant[],
  f: CatalogFilters
): Restaurant[] {
  return list.filter((r) => {
    if (f.category && r.category !== f.category) return false;
    if (f.price && r.priceRange !== f.price) return false;
    if (f.q) {
      const query = f.q.toLowerCase();
      const matchesName = r.name.toLowerCase().includes(query);
      const matchesDescription = r.description.toLowerCase().includes(query);
      if (!matchesName && !matchesDescription) return false;
    }
    return true;
  });
}
