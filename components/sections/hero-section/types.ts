import type { StaticImageData } from "next/image";

export interface Slide {
  id: number;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
}

export interface HeroCarouselProps {
  slides: Slide[];
}

export type HeroTextSectionProps = {};
