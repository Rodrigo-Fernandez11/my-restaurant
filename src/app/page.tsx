import { getRestaurants } from "@/api";
import { applyFilters } from "@/lib/filters";
import RestaurantCard from "@/components/RestaurantCard";
import SearchBox from "@/components/SearchBox";
import CategoryFilter from "@/components/CategoryFilter";
import PriceFilter from "@/components/PriceFilter";
import type { RestaurantCategory, PriceRange } from "@/types/restaurant";
import { Suspense } from "react";
import SkeletonCard from "@/components/SkeletonCard";

interface HomeProps {
  searchParams: {
    search?: string;
    category?: string;
    price?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const all = getRestaurants();
  const categories = Array.from(new Set(all.map((r) => r.category))) as RestaurantCategory[];

  const restaurants = applyFilters([...all], {
    q: searchParams.search,
    category: searchParams.category as RestaurantCategory | undefined,
    price: searchParams.price ? (Number(searchParams.price) as PriceRange) : undefined,
  });

  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <Suspense>
          <SearchBox />
        </Suspense>
        <Suspense>
          <CategoryFilter categories={categories} />
        </Suspense>
        <Suspense>
          <PriceFilter />
        </Suspense>
      </div>

      {restaurants.length === 0 ? (
        <p className="text-charcoal-400 text-center py-12">No restaurants found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </section>
  );
}
