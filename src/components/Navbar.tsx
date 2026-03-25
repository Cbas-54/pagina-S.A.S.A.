"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useReveal } from "@/context/RevealContext";
import { NAVBAR_TIMINGS } from "@/constants/animations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isReady } = useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={isReady ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ 
        duration: NAVBAR_TIMINGS.duration, 
        delay: NAVBAR_TIMINGS.delay, 
        ease: NAVBAR_TIMINGS.ease 
      }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 ${
        scrolled
          ? "glass-nav py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <a href="#inicio" className="flex items-center gap-3 group">
        <Image
          src="/logo-new.png"
          alt="SASA Logo"
          width={40}
          height={40}
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <div className="flex flex-col leading-none">
          <span className="text-sm font-black tracking-[0.25em] text-text-main uppercase">
            S.A.S.A.
          </span>
          <span className="text-[8px] font-medium tracking-[0.15em] text-text-sec uppercase hidden sm:block mt-0.5">
            Seguridad · Salud · Accesibilidad
          </span>
        </div>
      </a>

      <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-text-sec">
        {["Inicio", "Pilares", "Auditoría"/*, "Contacto"*/].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace("í", "i")}`}
            className="link-underline hover:text-text-main transition-colors duration-300 py-1"
          >
            {item}
          </a>
        ))}
      </div>

      
      {/* 
      <a href="#contacto">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative px-6 py-2.5 text-[13px] font-bold bg-green-vibrant text-bg-main rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(102,204,51,0.35)]"
        >
          <span className="relative z-10">Solicitar Reunión</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-vibrant to-green-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </a>
      */}
    </motion.nav>
  );
};

export default Navbar;
