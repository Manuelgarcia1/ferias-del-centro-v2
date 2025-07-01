"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export function VideoIntro() {
  const { ref: videoRef, inView: isInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const videoElement = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoElement.current;
    if (!video) return;

    if (isInView) {
      // Carga el video (lazy) y reproduce
      video.load();
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <video
        ref={(el) => {
          videoRef(el);
          videoElement.current = el;
        }}
        muted
        loop
        playsInline
        preload="none" // Desactiva preload automático
        poster="/video-poster.jpg" // Imagen de placeholder antes de la carga
        className="w-full h-auto rounded-xl"
      >
        {/* Fuente sólo cuando entra en viewport */}
        {isInView && <source src="/video.mp4" type="video/mp4" />}
        Tu navegador no soporta el video.
      </video>
    </div>
  );
}
