"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./movile-nav";
import { MobileMenuButton } from "./mobile-menu.button";
import { navItems } from "./navigation-data";
import type { HeaderProps } from "./types";

export function Header({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full h-[90px] py-4 ${
        className || ""
      }`}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-customGreen-dark shadow-lg z-0">
        {/* Patrón sutil */}
        <div className="absolute inset-0 opacity-10 bg-hero-pattern"></div>
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16 max-w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav navItems={navItems} />

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        navItems={navItems}
        isOpen={isOpen}
        onClose={handleMobileMenuClose}
      />
    </header>
  );
}
