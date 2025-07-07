"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import type { AboutKeyPointsProps } from "./types";

export function AboutKeyPoints({ keyPoints, isInView }: AboutKeyPointsProps) {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="max-w-3xl mx-auto mb-16"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {keyPoints.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center"
          >
            <CheckCircle className="h-5 w-5 text-customAccent mr-3 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
