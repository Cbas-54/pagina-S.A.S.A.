"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "@/context/RevealContext";
import { NAVBAR_TIMINGS } from "@/constants/animations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true); // Hero is dark
  const { isReady } = useReveal();

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 40);
      
      // Determine if nav is over a dark section
      // In this specific design, the Hero is H-SCREEN (or similar)
      // So if scrollPos is less than roughly the viewport height, it's over the hero
      setIsOverDark(scrollPos < (window.innerHeight - 80));
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme-based class names
  const navClasses = scrolled
    ? isOverDark
      ? "glass-nav-dark py-3 shadow-2xl" // Special dark glass for when it might overlap slightly dark areas or for consistency
      : "glass-nav py-3 shadow-sm border-b border-divider"
    : "bg-transparent py-6";

  const textClass = isOverDark ? "text-white" : "text-text-main";
  const secTextClass = isOverDark ? "text-white/60" : "text-text-sec";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={isReady ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ 
        duration: NAVBAR_TIMINGS.duration, 
        delay: NAVBAR_TIMINGS.delay, 
        ease: NAVBAR_TIMINGS.ease 
      }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 transition-all duration-500 ${navClasses}`}
    >
      <a href="#inicio" className="flex items-center gap-3 group">
        <div className={`relative transition-transform duration-300 group-hover:scale-110`}>
          <Image
            src="/logo-new.png"
            alt="SASA Logo"
            width={40}
            height={40}
            className={`object-contain transition-all duration-500 ${isOverDark ? "" : "brightness-0 opacity-80"}`}
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className={`text-sm font-black tracking-[0.25em] uppercase transition-colors duration-500 ${textClass}`}>
            S.A.S.A.
          </span>
          <span className={`text-[8px] font-medium tracking-[0.15em] uppercase hidden sm:block mt-0.5 transition-colors duration-500 ${secTextClass}`}>
            Seguridad · Salud · Accesibilidad
          </span>
        </div>
      </a>

      <div className={`hidden md:flex items-center gap-10 text-[13px] font-medium transition-colors duration-500 ${secTextClass}`}>
        {["Inicio", "Pilares", "Auditoría"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace("í", "i")}`}
            className="link-underline hover:text-green-vibrant transition-colors duration-300 py-1"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
