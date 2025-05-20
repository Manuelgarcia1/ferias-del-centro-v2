// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next.js generará WebP (y AVIF si lo agregas) según el Accept header
    formats: ["image/webp"],
    // opcionalmente puedes añadir también AVIF:
    // formats: ['image/avif','image/webp'],
  },
};

export default nextConfig;
