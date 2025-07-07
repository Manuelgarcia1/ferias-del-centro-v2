"use client";

import { StatCard } from "./stats-card";
import type { StatsGridProps } from "./types";

export function StatsGrid({ stats, isInView }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <StatCard
          key={`${stat.value}-${index}`}
          stat={stat}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
}
