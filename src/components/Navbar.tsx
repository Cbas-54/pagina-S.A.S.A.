"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Navbar as AcerNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", link: "#inicio" },
    { name: "Pilares", link: "#pilares" },
    { name: "Auditoría", link: "#auditoria" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 opacity-100 translate-y-0">
      <AcerNavbar className="top-0">
        {/* Desktop Navigation */}
        <NavBody>
          <div className="w-40 flex items-center justify-start">
            <SasaLogo />
          </div>
          <NavItems items={navItems} />
          <div className="w-40 flex items-center justify-end" /> 
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="px-4">
          <MobileNavHeader>
            <SasaLogo small />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="mt-4"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-gray-100 last:border-0 hover:text-green-vibrant transition-colors"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </AcerNavbar>
    </div>
  );
}

const SasaLogo = ({ small = false }: { small?: boolean }) => {
  return (
    <a href="#inicio" className="flex items-center gap-3 group z-50">
      <div className="relative transition-transform duration-300 group-hover:scale-110">
        <Image
          src="/logo-new.png"
          alt="SASA Logo"
          width={small ? 32 : 40}
          height={small ? 32 : 40}
          className="object-contain"
          priority
        />
      </div>
    </a>
  );
};
