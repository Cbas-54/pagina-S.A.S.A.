"use client";

import React from "react";
import { motion } from "framer-motion";
import { SealCheck, Check } from "@phosphor-icons/react";

const SelloSASA = () => {
  const features = [
    "Firmado por profesional matriculado con responsabilidad civil",
    "Resultado entregado en brochure visual para el comprador",
    "Código QR verificable por cualquier interesado",
    "Válido como documentación complementaria en escritura",
    "Reproduce la tranquilidad técnica que el comprador necesita",
  ];

  return (
    <section id="sello" className="relative py-32 px-6 overflow-hidden noise-overlay">
      <div className="absolute inset-0 -z-10 bg-bg-alt" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_40%,rgba(201,169,110,0.06)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-center">
        {/* Left: Seal Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 w-72 h-72 bg-gold-seal/10 rounded-full blur-[80px] -z-10 mx-auto" />

            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-dashed border-gold-seal/15 flex items-center justify-center"
            >
              {/* Inner ring */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-56 h-56 md:w-64 md:h-64 rounded-full border border-gold-seal/25 flex items-center justify-center bg-gold-seal/[0.03]"
              >
                {/* Seal center */}
                <div className="flex flex-col items-center gap-2">
                  <SealCheck size={56} weight="fill" className="text-gold-seal drop-shadow-[0_0_20px_rgba(201,169,110,0.4)]" />
                  <span className="text-xl font-black tracking-[0.3em] text-gold-seal font-serif">
                    S.A.S.A.
                  </span>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-seal/50 to-transparent" />
                  <span className="text-[9px] tracking-[0.25em] text-gold-seal/60 uppercase font-medium">
                    Propiedad Certificada
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating gold dots */}
            {[0, 90, 180, 270].map((deg) => (
              <motion.div
                key={deg}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: deg / 360,
                  ease: "easeInOut",
                }}
                className="absolute w-1.5 h-1.5 bg-gold-seal rounded-full"
                style={{
                  top: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 48 * Math.cos((deg * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col"
        >
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-gold-seal/70 mb-4">
            El sello que cierra ventas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-4 leading-snug">
            No es un papel.
            <br />
            <span className="text-gradient-gold italic font-light">
              Es la tranquilidad
            </span>
          </h2>
          <p className="text-text-sec text-base leading-relaxed font-light mb-10 max-w-lg">
            El Sello S.A.S.A. acompaña la propiedad como una certificación
            visual que cualquier comprador puede verificar. Transmite confianza
            antes de la primera visita.
          </p>

          <ul className="space-y-4">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3 group/item"
              >
                <div className="w-5 h-5 rounded-full border border-gold-seal/20 bg-gold-seal/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-gold-seal/10 transition-colors">
                  <Check size={10} weight="bold" className="text-gold-seal" />
                </div>
                <span className="text-text-sec text-sm leading-relaxed font-light group-hover/item:text-text-main transition-colors">
                  {f}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SelloSASA;
