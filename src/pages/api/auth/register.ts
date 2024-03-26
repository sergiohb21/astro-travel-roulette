// Importa los módulos necesarios
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

// Define tu ruta de API
export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    // Analiza los datos del formulario
    const formData = await request.formData();

    // Obtiene los valores de los campos del formulario
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    // Verifica si alguno de los campos es nulo o vacío
    if (!name || !email || !password) {
      return new Response("Nombre, correo electrónico y contraseña son obligatorios", { status: 400 });
    }

    // Realiza la operación de registro con los datos del formulario
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    // Maneja el resultado de la operación de registro
    if (error) {
      return new Response(error.message, { status: 500 });
    }

    // Redirige al usuario a la página de inicio de sesión
    return redirect("/login");
  } catch (error) {
    // Maneja cualquier error que ocurra durante el proceso
    console.error("Error al procesar la solicitud:", error);
    return new Response("Error interno del servidor", { status: 500 });
  }
};
