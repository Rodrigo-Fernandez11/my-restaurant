// Importamos las dependencias necesarias
import { redirect } from "next/navigation";
import api from "@/api";
import RestaurantCard from "@/components/RestaurantCard";

// Definimos el componente Home
export default async function Home({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  // Aquí, estamos buscando restaurantes usando la API
  // Podríamos usar api.list() para obtener datos de Google Sheets
  const restaurants = await api.search(searchParams.q);

  // Esta es una función de acción de búsqueda que se ejecuta en el servidor
  // Redirige al usuario a una nueva URL basada en su consulta de búsqueda
  async function searchAction(formData: FormData) {
    "use server";
    redirect(`/?q=${formData.get("query")}`);
  }

  // Aquí es donde se renderiza el componente
  // Este es el formulario de búsqueda. Cuando se envía, se llama a searchAction
  return (
    <section>
      <form action={searchAction} className="mb-4 inline-flex gap-2">
        <input
          className="px-2"
          defaultValue={searchParams.q || ""}
          name="query"
        />
        <button className="bg-white/20 p-2" type="submit">
          Search
        </button>
      </form>
      {/* Aquí es donde se renderizan las tarjetas de los restaurantes */}
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
        })}
      </section>
    </section>
  );
}
