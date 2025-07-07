export interface RemateData {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  animalCount: number;
  animalType: string;
  category: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface NextRemateHeaderProps {
  isInView: boolean;
}

export interface RemateCardProps {
  remate: RemateData;
  isInView: boolean;
}
