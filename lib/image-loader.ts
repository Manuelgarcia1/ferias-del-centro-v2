// Archivo nuevo para configurar un cargador de imágenes personalizado
export default function customImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Para imágenes externas (URLs completas)
  if (src.startsWith("http")) {
    // Mantener la URL original para imágenes externas, pero asegurar la mejor calidad
    return `${src}${src.includes("?") ? "&" : "?"}w=${width}&q=${
      quality || 100
    }`;
  }

  // Para imágenes locales
  return `${src}?w=${width}&q=${quality || 100}`;
}
