"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { AboutHeader } from "./about-header";
import { AboutKeyPoints } from "./about-key-points";
import { AboutFeatures } from "./about-feature";
import { aboutFeatures, keyPoints } from "./about-data";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-white" ref={ref} id="about">
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <AboutHeader isInView={isInView} />

        {/* Puntos clave */}
        <AboutKeyPoints keyPoints={keyPoints} isInView={isInView} />

        {/* Tarjetas de características */}
        <AboutFeatures features={aboutFeatures} isInView={isInView} />
      </div>
    </section>
  );
}
