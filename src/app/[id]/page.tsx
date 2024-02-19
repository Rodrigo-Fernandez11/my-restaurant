// Importamos las dependencias necesarias
import api from "@/api";
import { CopyLink } from "@/components/CopyLink";

// Esta función genera metadatos específicos para las rutas que necesitamos
// Obtiene el id de los parámetros y lo usa para buscar un restaurante específico
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const restaurant = await api.fetch(id);

  // Devuelve un objeto con el título y la descripción del restaurante
  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}

// Esta función genera los parámetros estáticos para las rutas
// Obtiene una lista de restaurantes y devuelve un array de objetos, cada uno con un id de restaurante
export async function generateStaticParams() {
  const restaurants = await api.list();

  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }));
}

// Este es el componente de la página del restaurante
// Obtiene el id de los parámetros y lo usa para buscar un restaurante específico
export default async function RestaurantPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const restaurant = await api.fetch(id);

  // Renderiza la información del restaurante y un enlace para copiar
  return (
    <article key={restaurant.id}>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{restaurant.name}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
      <CopyLink />
    </article>
  );
}
