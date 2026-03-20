"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, House, ArrowRight } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section id="inicio" className="relative flex flex-col items-center justify-center min-vh-100 pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass text-accent-green text-sm font-bold tracking-wider uppercase border border-accent/20">
          <ShieldCheck size={20} weight="duotone" />
          Certificación Inmobiliaria de Elite
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Transformamos Propiedades en <br />
          <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">
            Productos Irresistibles
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
          S.A.S.A. es el sistema profesional de auditoría que convierte la incertidumbre técnica en confianza absoluta. 
          Seguridad, Salud y Accesibilidad certificadas por expertos.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="group flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-2xl hover:bg-accent/90 transition-all hover:translate-y-[-2px] shadow-lg shadow-accent/10">
            Comenzar Auditoría
            <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-2 px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
            Ver Certificaciones
            <House size={20} weight="duotone" />
          </button>
        </div>
      </motion.div>

      {/* Hero Image / Mockup Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 w-full max-w-5xl aspect-video glass rounded-3xl border border-white/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-white/30 italic">
            <ShieldCheck size={80} weight="duotone" />
            <p>Visualización del Sello S.A.S.A. en Propiedad</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
