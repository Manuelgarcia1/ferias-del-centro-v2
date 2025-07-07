"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { StatsHeader } from "./stats-header";
import { StatsGrid } from "./stats-grid";
import { statsData } from "./stats-data";

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-customGreen text-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <StatsHeader isInView={isInView} />

        {/* Grid de estadísticas */}
        <StatsGrid stats={statsData} isInView={isInView} />
      </div>
    </section>
  );
}
