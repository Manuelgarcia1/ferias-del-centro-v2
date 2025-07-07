import type { ReactNode } from "react";

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  details: string;
}

export interface ContactHeaderProps {
  isInView: boolean;
}

export interface ContactFormProps {
  isInView: boolean;
}

export interface ContactInfoCardProps {
  contactInfo: ContactInfo[];
  isInView: boolean;
}

export interface ContactMapProps {
  isInView: boolean;
}

export interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}
