"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="inicio" className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-bg-main relative">
      
      {/* Background Breathing Gradient */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-blue-struct)_0%,_transparent_50%)] opacity-20 -z-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/4 right-1/4 bg-[radial-gradient(circle_at_center,_var(--color-green-subtle)_0%,_transparent_40%)] w-[800px] h-[800px] -z-10 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-widest text-text-sec mb-4 uppercase">
          S.A.S.A.
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-main mb-6 leading-tight">
          El sistema que transforma propiedades en <br />
          <span className="italic font-light text-blue-light">productos irresistibles</span>
        </h1>

        <p className="text-lg md:text-xl text-text-sec mb-12 max-w-2xl font-light tracking-wide uppercase">
          Seguridad Antisiniestral, Salud y Accesibilidad
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex gap-6"
        >
          <button className="px-10 py-5 bg-green-vibrant text-bg-main font-bold text-lg rounded-none hover:bg-green-mid transition-all shadow-[0_0_30px_rgba(102,204,51,0.2)]">
            Agendar Auditoría Especializada
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
