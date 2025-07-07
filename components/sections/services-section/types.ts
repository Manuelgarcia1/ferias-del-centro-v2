import type { ReactNode } from "react";

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
  phone: string;
  text: (title: string) => string;
}

export interface ServicesHeaderProps {
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}

export interface FinancingCardProps {
  phone: string;
  className?: string;
}

export interface WhatsAppConfig {
  consultasNumber: string;
  financiacionNumber: string;
}
