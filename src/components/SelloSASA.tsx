"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

const SelloSASA = React.memo(() => {
  return (
    <section 
      id="sello" 
      className="relative pt-24 md:pt-48 pb-24 md:pb-48 px-6 overflow-hidden"
    >
      {/* ── STATIC BACKGROUND ── */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        {/* Simple absolute background without parallax/reveal effects */}
        <Image 
          src="/Capacitor gemini.png" 
          alt="Fondo Excelencia" 
          fill 
          priority
          className="object-cover opacity-50 filter grayscale brightness-90"
        />
        
        {/* Blue Glow (Resplandor Azul) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-600/10 blur-[180px] rounded-full" />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-30">
        <div className="text-center">
          {/* Content: Autoridad Técnica */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-16"
          >
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tight leading-tight drop-shadow-2xl">
                La Síntesis de<br />
                <span className="text-gold-seal italic font-light uppercase tracking-wide drop-shadow-[0_0_20px_rgba(201,169,110,0.4)]">LA EXCELENCIA</span>
              </h2>
              <p className="text-white text-xl md:text-2xl leading-relaxed italic max-w-2xl mx-auto drop-shadow-md">
                "El sello S.A.S.A. no es solo una marca, es la representación visual de que su propiedad ha superado la auditoría más distinguida del mercado."
              </p>
            </div>

            <div className="grid gap-6 max-w-2xl w-full">
              {[
                "Propiedad certificada con el Sello S.A.S.A.",
                "Apta para comercialización segura, saludable e inclusiva",
                "Cumple con estándares profesionales de calidad habitacional",
                "Aporta valor agregado verificable y auditable",
                "Minimiza la recurrencia de consultas técnicas"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 hover:border-gold-seal/30 transition-all text-left group/item">
                  <div className="w-8 h-8 rounded-full bg-gold-seal/10 flex items-center justify-center text-gold-seal shrink-0 transition-colors group-hover/item:bg-gold-seal/20">
                    <Check size={16} weight="bold" />
                  </div>
                  <span className="text-white/80 font-medium text-lg leading-snug group-hover/item:text-white transition-colors">{text}</span>
                </div>
              ))}
            </div>

            {/* Visual: Nuclear Shield & Validation Badge - Moved to bottom */}
            <div 
              className="relative flex flex-col items-center group pt-8"
            >
              {/* Outer Rings (Atmospheric) */}
              <div className="absolute inset-0 -m-20 border border-gold-seal/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 -m-12 border border-gold-seal/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* The Shield Logo */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 mb-8"
              >
                <div className="w-64 h-64 md:w-72 md:h-72 flex items-center justify-center relative">
                  <Image 
                    src="/logo sasa borde blanco.png" 
                    alt="Escudo Oficial SASA" 
                    width={500} 
                    height={500} 
                    className="object-contain drop-shadow-[0_0_40px_rgba(201,169,110,0.5)] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Status Badge (The dark card from the image) */}
              <motion.div 
                className="relative z-30 bg-[#0D0D0D] backdrop-blur-2xl px-10 py-8 rounded-[2rem] border border-gold-seal/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(201,169,110,0.2)] flex flex-col items-center gap-3 text-center min-w-[340px]"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-pulse" />
                  <p className="text-[13px] font-black text-gold-seal uppercase tracking-[0.35em]">Validación Técnica</p>
                </div>
                <p className="text-white font-medium text-[17px] leading-relaxed drop-shadow-sm">
                  Respaldamos la calidad técnica <br /> en cada metro cuadrado.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

SelloSASA.displayName = "SelloSASA";

export default SelloSASA;
