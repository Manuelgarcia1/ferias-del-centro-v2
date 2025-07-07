"use client";

import type { FooterSocialProps } from "./types";

export function FooterSocial({ socialLinks }: FooterSocialProps) {
  return (
    <div className="flex space-x-2">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
