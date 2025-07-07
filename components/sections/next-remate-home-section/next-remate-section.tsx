"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { NextRemateHeader } from "./next-remate-header";
import { RemateCard } from "./remate-card";
import { nextRemateData } from "./remate-data";

export function NextRemateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <NextRemateHeader isInView={isInView} />

        {/* Tarjeta del remate */}
        <RemateCard remate={nextRemateData} isInView={isInView} />
      </div>
    </section>
  );
}
