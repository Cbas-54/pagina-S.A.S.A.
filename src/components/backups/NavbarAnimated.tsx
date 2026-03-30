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
import { useReveal } from "@/context/RevealContext";
import { motion, AnimatePresence } from "framer-motion";
import { NAVBAR_TIMINGS } from "@/constants/animations";

export default function Navbar() {
  const { isReady } = useReveal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", link: "#inicio" },
    { name: "Pilares", link: "#pilares" },
    { name: "Auditoría", link: "#auditoria" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={isReady ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ 
        duration: NAVBAR_TIMINGS.duration, 
        delay: NAVBAR_TIMINGS.delay, 
        ease: NAVBAR_TIMINGS.ease 
      }}
      className="fixed top-0 left-0 right-0 z-50 pt-4"
    >
      <AcerNavbar className="top-0">
        {/* Desktop Navigation */}
        <NavBody>
          <SasaLogo />
          <NavItems items={navItems} />
          {/* Espacio reservado para equilibrio visual sin botones */}
          <div className="w-40 hidden lg:block" /> 
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
    </motion.div>
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
        />
      </div>
    </a>
  );
};
