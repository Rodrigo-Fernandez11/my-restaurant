import type { Restaurant } from "@/types";

import { restaurants } from "@/data/restaurants";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async (): Promise<Restaurant[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
    //configuracion de revalidacion de cache con {cache: "no-store"} en la url
    // revalidad tag {next: {tags: {"restaurants"}}}
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTNZ7csRKT510_93aA6lvzCcB_i5tLz2idxcNgI6yjMGhTauf0kt6kl0vuVtqUbYM1Uh8BtbS6NM8V/pub?output=csv",
      { next: { tags: ["restaurants"] } }
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));

    // Convertimos cada línea en un objeto Restaurant, asegúrate de que los campos no posean `,`
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] =
        row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    // Lo retornamos
    return restaurants;
  },

  fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);

    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    return restaurant;
  },

  search: async (query: string): Promise<Restaurant[]> => {
    // Obtenemos los restaurantes
    const restaurants = await api.list();

    // Si el query está vacío, devolvemos todos los restaurantes
    if (!query) {
      return restaurants;
    }

    // Si no, filtramos por nombre
    const results = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );

    return results;
  },
};

export default api;
