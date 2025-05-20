"use client";

// Nuevo componente para manejar imágenes de carrusel con fallback
import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  priority?: boolean;
  className?: string;
}

export function CarouselImage({
  src,
  alt,
  fallbackSrc,
  priority = false,
  className = "",
}: CarouselImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Reiniciar estado cuando cambia la fuente
  useEffect(() => {
    setImgSrc(src);
    setLoading(true);
    setError(false);
  }, [src]);

  return (
    <>
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="w-10 h-10 border-4 border-customAccent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        fill
        priority={priority}
        quality={100}
        className={`object-cover transition-opacity duration-300 ${className} ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        sizes="(max-width: 768px) 100vw, 50vw"
        onLoadingComplete={() => setLoading(false)}
        onError={() => {
          setError(true);
          if (fallbackSrc) {
            setImgSrc(fallbackSrc);
          } else {
            // Usar un placeholder genérico si no hay fallback específico
            setImgSrc(
              `/placeholder.svg?height=800&width=1200&query=${encodeURIComponent(
                alt
              )}`
            );
          }
        }}
        unoptimized={true}
      />
    </>
  );
}
