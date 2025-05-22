/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Permite cargar imágenes desde Unsplash
    domains: ["images.unsplash.com"],
    // O patrón remoto para mayor flexibilidad:
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Next.js generará WebP (y AVIF si lo agregas) según el Accept header
    formats: ["image/webp"],
    // opcionalmente puedes añadir también AVIF:
    // formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
