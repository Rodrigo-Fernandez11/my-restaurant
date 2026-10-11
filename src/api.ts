import { RESTAURANTS } from "@/data/restaurants";
import type { Restaurant } from "@/types/restaurant";

export function getRestaurants(): readonly Restaurant[] {
  return RESTAURANTS;
}

export function getRestaurant(id: string): Restaurant | null {
  return RESTAURANTS.find((r) => r.id === id) ?? null;
}

// Compatibility shim — consumed by existing pages until Phase 4 rewrites them.
// Remove this default export after Phase 4 is merged.
const api = {
  list: async (): Promise<readonly Restaurant[]> => {
    return RESTAURANTS;
  },

  fetch: async (id: string): Promise<Restaurant> => {
    const restaurant = RESTAURANTS.find((r) => r.id === id);
    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }
    return restaurant;
  },

  search: async (query: string): Promise<readonly Restaurant[]> => {
    if (!query) return RESTAURANTS;
    const q = query.toLowerCase();
    return RESTAURANTS.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)
    );
  },
};

export default api;
