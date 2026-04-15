"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    { name: "Estadísticas", link: "#stats" },
    { name: "Servicios", link: "#servicios" },
    { name: "¿Quiénes Somos?", link: "#equipo" },
    { name: "Contacto", link: "#contacto" },
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
            <nav>
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium py-2 hover:text-green-vibrant hover:pl-2 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </MobileNavMenu>
        </MobileNav>
      </AcerNavbar>
    </div>
  );
}

const SasaLogo = ({ small = false }: { small?: boolean }) => {
  return (
    <Link href="#inicio" aria-label="Ir al inicio" className="flex items-center gap-3 group">
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
    </Link>
  );
};
