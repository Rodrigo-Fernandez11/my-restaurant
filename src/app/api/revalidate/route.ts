// revalidacion de manera manual con funciones
// buena practica: envolver endpoints utilitarios en secretos
// ¿como? --> definir una varible de entorno REVALIDATE_SECRET en la ruta api para ejecutarlar cuando nos envien una parametro "secret" con el valor
import { revalidatePath } from "next/cache";

export async function POST() {
  revalidatePath("/");

  return Response.json({ success: true });
}
