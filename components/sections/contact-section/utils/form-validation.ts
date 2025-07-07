import type { FormData } from "../types";

export function validateForm(data: FormData): string | null {
  const { nombre, email, asunto, mensaje } = data;

  if (!nombre.trim()) return "El nombre es requerido";
  if (!email.trim()) return "El email es requerido";
  if (!asunto.trim()) return "El asunto es requerido";
  if (!mensaje.trim()) return "El mensaje es requerido";

  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "El email no es válido";

  return null;
}

export function extractFormData(form: HTMLFormElement): FormData {
  return {
    nombre: (form.nombre as HTMLInputElement).value.trim(),
    email: (form.email as HTMLInputElement).value.trim(),
    asunto: (form.asunto as HTMLInputElement).value.trim(),
    mensaje: (form.mensaje as HTMLTextAreaElement).value.trim(),
  };
}
