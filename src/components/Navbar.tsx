"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto mt-4 max-w-7xl glass rounded-full"
    >
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.png" 
          alt="SASA Logo" 
          width={40} 
          height={40} 
          className="object-contain"
        />
        <span className="text-xl font-bold tracking-tighter text-white">S.A.S.A.</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#inicio" className="hover:text-accent transition-colors">Inicio</a>
        <a href="#pilares" className="hover:text-accent transition-colors">Pilares</a>
        <a href="#servicios" className="hover:text-accent transition-colors">Servicios</a>
        <a href="#contacto" className="hover:text-accent transition-colors">Contacto</a>
      </div>

      <button className="px-5 py-2 text-sm font-bold bg-accent text-primary rounded-full hover:scale-105 transition-transform">
        Auditoría Gratis
      </button>
    </motion.nav>
  );
};

export default Navbar;
