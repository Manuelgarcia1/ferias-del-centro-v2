"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MobileMenuButtonProps } from "./types";

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden text-white p-2 relative z-50 !bg-transparent !text-white !shadow-none !ring-0 !outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none active:ring-0 active:bg-transparent"
      onClick={onClick}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  );
}
