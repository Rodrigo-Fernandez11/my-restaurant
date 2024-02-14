"use client";

import { Toaster, toast } from "sonner";

export const CopyLink = () => {
  // Definimos una función asíncrona 'handleClick' que se ejecutará cuando se haga clic en el botón
  async function handleClick() {
    // Hacemos una petición a la ruta '/opengraph-image' y obtenemos la imagen como un Blob
    const image = await fetch(`${location.pathname}/opengraph-image`).then(
      (res) => res.blob()
    );

    // Escribimos la imagen en el portapapeles del navegador
    await navigator.clipboard.write([
      new ClipboardItem({
        [image.type]: image,
      }),
    ]);

    // Mostramos una alerta indicando que la imagen ha sido copiada al portapapeles
    toast.success("se copio en el portapapeles con exito");
  }

  // Renderizamos un botón que, al hacer clic, ejecuta la función 'handleClick'
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        compartir restaurante favorito
      </button>
      <Toaster position="bottom-right" />
    </div>
  );
};
