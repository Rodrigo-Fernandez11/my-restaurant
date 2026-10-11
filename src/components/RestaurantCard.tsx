"use client";

import type { Restaurant } from "@/types";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

function FavoriteButton({ restaurant }: { restaurant: Restaurant }) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    const favorites: string[] = JSON.parse(
      window.localStorage.getItem("favorites") || "[]"
    ) as string[];
    setIsFavourite(favorites.includes(restaurant.id));
  }, [restaurant.id]);

  const handleFavoriteClick = () => {
    const favorites: string[] = JSON.parse(
      window.localStorage.getItem("favorites") || "[]"
    ) as string[];

    if (isFavourite) {
      const newFavorites = favorites.filter((id: string) => id !== restaurant.id);
      window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      favorites.push(restaurant.id);
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <button
      className={`text-xl text-red-500 ${isFavourite ? "opacity-100" : "opacity-20"}`}
      type="button"
      onClick={handleFavoriteClick}
    >
      ♥
    </button>
  );
}

const DynamicFavoriteButton = dynamic(async () => FavoriteButton, { ssr: false });

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article className="group rounded-xl overflow-hidden bg-white border border-charcoal-200 hover:border-ember-400 dark:bg-charcoal-900 dark:border-charcoal-800 dark:hover:border-ember-700 transition-colors shadow-card hover:shadow-card-hover">
      <Link href={`/${restaurant.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            alt={restaurant.name}
            src={restaurant.image}
            width={480}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/${restaurant.id}`}>
            <h2 className="text-lg font-bold text-charcoal-900 hover:text-ember-600 dark:text-charcoal-100 dark:hover:text-ember-400 transition-colors">
              {restaurant.name}
            </h2>
          </Link>
          <DynamicFavoriteButton restaurant={restaurant} />
        </div>
        <div className="flex items-center gap-3 mt-1 text-sm text-charcoal-500 dark:text-charcoal-400">
          <span>⭐ {restaurant.score} ({restaurant.ratings})</span>
        </div>
        <p className="mt-2 text-sm text-charcoal-600 dark:text-charcoal-300 line-clamp-2">{restaurant.description}</p>
        <p className="mt-1 text-xs text-charcoal-400 dark:text-charcoal-500">{restaurant.address}</p>
      </div>
    </article>
  );
}
