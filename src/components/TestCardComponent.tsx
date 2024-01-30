// ejemplo server components
// no se vuelve a renderizar, podemos obtener datos de manera eficiente escondido del cliente
// tarea: personalizar y a la pagina de detalle del restauran un enlace para volver (en el encabezado tambien)

import Link from "next/link";

import { redirect } from "next/navigation";

import api from "@/api";

import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const restaurants = await api.search(searchParams.q);

  // server components
  // diec: desde el servidor redireccioname el valor de query del formulario
  async function searchAction(formData: FormData) {
    "use server";

    redirect(`/?q=${formData.get("query")}`);
  }

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
      {/* <SearchBox /> */}
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => {
          return (
            <article key={restaurant.id}>
              <Image
                alt={restaurant.name}
                className="mb-3 h-[300px] w-full object-cover"
                src={restaurant.image}
              />
              <h2 className="inline-flex gap-2 text-lg font-bold">
                {/*desabilitamos el prefetching para evitar ver la informacion cacheada previamente y poder ver info nueva*/}
                <Link href={`/${restaurant.id}`} prefetch={false}>
                  {restaurant.name}
                </Link>
                <small className="inline-flex gap-1">
                  <span>⭐</span>
                  <span>{restaurant.score}</span>
                  <span className="font-normal opacity-75">
                    ({restaurant.ratings})
                  </span>
                </small>
              </h2>
              <p className="opacity-90">{restaurant.description}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
}
