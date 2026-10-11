"use client";

import { useEffect, useState } from "react";
import { getRestaurants } from "@/api";
import type { Restaurant } from "@/types/restaurant";
import RestaurantCard from "@/components/RestaurantCard";
import Link from "next/link";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    const all = getRestaurants();
    setFavorites(all.filter((r) => ids.includes(r.id)));
  }, []);

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-charcoal-50">Your Favorites</h1>
        <span className="text-sm text-charcoal-400">{favorites.length} saved</span>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16 space-y-3">
          <p className="text-charcoal-400">No favorites yet.</p>
          <Link href="/" className="text-ember-400 hover:text-ember-300 text-sm transition-colors">
            Browse restaurants →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </section>
  );
}
