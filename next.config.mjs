// Configuración corregida para Next.js

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Configurar dominios permitidos para imágenes externas
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "blob.v0.dev",
      },
    ],
    // Configurar formatos de imagen preferidos (solo los permitidos)
    formats: ["image/webp", "image/avif"],
    // Configurar tamaños de dispositivo para responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Configurar tamaños de imagen para responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Asegurarse de que los archivos estáticos se manejen correctamente
  output: "standalone",
};

export default nextConfig;
