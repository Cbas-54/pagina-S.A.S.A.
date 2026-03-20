"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Certificate } from "@phosphor-icons/react";

const SelloSASA = () => {
  const points = [
    "Auditoría Técnica Completa",
    "Firma de Profesional Matriculado",
    "Checklist Visual para el Comprador",
    "Brochure Comercial Optimizado",
    "Ventaja Competitiva Real"
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-blue-struct to-bg-main">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
        
        <motion.div 
          className="relative flex items-center justify-center shrink-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Animated Gold Halo */}
          <motion.div 
            className="absolute inset-0 border border-[var(--gold-seal)] rounded-full border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -inset-8 border border-[var(--gold-seal)]/30 rounded-full"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="w-64 h-64 rounded-full bg-bg-main border-2 border-[var(--gold-seal)] flex flex-col items-center justify-center shadow-[0_0_80px_rgba(201,169,110,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--gold-seal)]/10 to-transparent" />
            <ShieldCheck size={80} weight="duotone" className="text-[var(--gold-seal)] mb-2" />
            <span className="font-serif font-bold text-2xl tracking-widest text-[var(--gold-seal)]">SELLO</span>
            <span className="font-sans font-black text-3xl tracking-tighter text-text-main">S.A.S.A.</span>
          </div>
        </motion.div>

        <div className="flex-1 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-[var(--gold-seal)] text-sm font-bold uppercase tracking-widest">
              <Certificate size={20} weight="fill" />
              Certificación Oficial
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main leading-tight">
              El Estándar de Oro Inmobiliario
            </h2>
          </motion.div>

          <motion.ul 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-4"
          >
            {points.map((point, i) => (
              <motion.li 
                key={i} 
                className="flex items-center gap-4 text-text-main text-lg font-light"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--gold-seal)]" />
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  );
};

export default SelloSASA;
