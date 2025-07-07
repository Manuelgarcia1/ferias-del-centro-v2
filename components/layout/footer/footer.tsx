"use client";

import { Logo } from "@/components/common/logo";
import { FooterSocial } from "./footer-social";
import { FooterSignature } from "./footer-signature";
import { socialLinks, companyInfo, developerInfo } from "./footer-data";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-customGreen-dark to-customGreen text-white">
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* Top: Logo + social */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
          <div>
            <Logo className="h-12 w-auto mb-4" />
            <p className="text-white/80 max-w-sm">{companyInfo.description}</p>
          </div>
          <FooterSocial socialLinks={socialLinks} />
        </div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Signature */}
        <FooterSignature
          companyName={companyInfo.name}
          developerName={developerInfo.name}
          developerWhatsApp={developerInfo.whatsapp}
          developerGithub={developerInfo.github}
        />
      </div>
    </footer>
  );
}
