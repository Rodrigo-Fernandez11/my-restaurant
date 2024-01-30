"use client";
// Importamos los tipos necesarios
import type { Restaurant } from "@/types";
import Image from "next/image";

// Importamos las funciones necesarias de React y Next.js
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Definimos el componente FavoriteButton
function FavoriteButton({ restaurant }: { restaurant: Restaurant }) {
  // Creamos un estado para saber si el restaurante es favorito
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  // Usamos useEffect para actualizar el estado cuando se monta el componente
  useEffect(() => {
    // Obtenemos la lista de favoritos del almacenamiento local
    const favorites: string[] = JSON.parse(
      window.localStorage.getItem("favorites") || "[]"
    ) as string[];

    // Actualizamos el estado si el restaurante está en la lista de favoritos
    setIsFavourite(favorites.includes(restaurant.id));
  }, [restaurant.id]);

  // Definimos la función que se ejecutará cuando se haga clic en el botón de favorito
  const handleFavoriteClick = () => {
    // Obtenemos la lista de favoritos del almacenamiento local
    const favorites: string[] = JSON.parse(
      window.localStorage.getItem("favorites") || "[]"
    ) as string[];

    if (isFavourite) {
      // Si el restaurante ya es favorito, lo eliminamos de la lista
      const newFavorites = favorites.filter(
        (id: string) => id !== restaurant.id
      );

      // Guardamos la nueva lista en el almacenamiento local
      window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      // Si el restaurante no es favorito, lo añadimos a la lista
      favorites.push(restaurant.id);
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    // Actualizamos el estado
    setIsFavourite(!isFavourite);
  };

  // Renderizamos el botón de favorito
  return (
    <button
      className={`text-xl text-red-500 ${
        isFavourite ? "opacity-100" : "opacity-20"
      }`}
      type="button"
      onClick={handleFavoriteClick}
    >
      ♥
    </button>
  );
}

// Usamos la función dynamic de Next.js para importar el componente FavoriteButton de forma dinámica
const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {
  ssr: false,
});

// Definimos el componente RestaurantCard
export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  // Renderizamos la tarjeta del restaurante
  return (
    <article>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex items-center gap-2 text-lg font-bold">
        <Link href={`/${restaurant.id}`}>
          <span>{restaurant.name}</span>
        </Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
        <DynamicFavoriteButton restaurant={restaurant} />
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
