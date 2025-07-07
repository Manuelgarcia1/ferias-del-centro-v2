import type { ReactNode } from "react";

export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

export interface FooterSocialProps {
  socialLinks: SocialLink[];
}

export interface FooterSignatureProps {
  companyName: string;
  developerName: string;
  developerWhatsApp: string;
  developerGithub: string;
}
