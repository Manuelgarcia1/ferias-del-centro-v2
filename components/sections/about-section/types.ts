import type { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface AboutHeaderProps {
  isInView: boolean;
}

export interface AboutFeaturesProps {
  features: Feature[];
  isInView: boolean;
}

export interface AboutKeyPointsProps {
  keyPoints: string[];
  isInView: boolean;
}
