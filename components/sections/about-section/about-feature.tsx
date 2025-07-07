"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { AboutFeaturesProps } from "./types";

export function AboutFeatures({ features, isInView }: AboutFeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
        >
          <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full">
            <CardContent className="p-6">
              <div className="rounded-full bg-customAccent/10 p-3 inline-flex mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-customGreen">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
