"use client";

import React from "react";
import { motion } from "framer-motion";
import { SealCheck, Check } from "@phosphor-icons/react";

const FEATURES_DATA = [
  "Firmado por profesional matriculado con responsabilidad civil",
  "Resultado entregado en brochure visual para el comprador",
  "Código QR verificable por cualquier interesado",
  "Válido como documentación complementaria en escritura",
  "Reproduce la tranquilidad técnica que el comprador necesita",
];

const SelloSASA = React.memo(() => {
  return (
    <section id="sello" className="relative py-48 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(201,169,110,0.03)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-20 lg:gap-32 items-center">
        {/* Left: Seal Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative flex items-center justify-center lg:justify-start"
        >
          <div className="relative group">
            {/* Ambient gold glow */}
            <div className="absolute inset-0 w-80 h-80 bg-gold-seal/5 rounded-full blur-[100px] -z-10 mx-auto group-hover:bg-gold-seal/10 transition-colors duration-1000" />

            {/* Decorative orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] rounded-full border border-gold-seal/5 border-dashed"
            />

            {/* Main Outer Seal Container */}
            <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative"
            >
              {/* Outer textured ring */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-gold-seal/20 flex items-center justify-center bg-white shadow-[0_20px_50px_rgba(201,169,110,0.08)] backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none" />
                
                {/* Middle ring with inner shadow */}
                <div className="w-[85%] h-[85%] rounded-full border border-gold-seal/10 flex items-center justify-center shadow-inner relative">
                  
                  {/* Seal Center Card */}
                  <div className="flex flex-col items-center gap-4 relative z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold-seal/20 blur-xl rounded-full" />
                      <SealCheck size={80} weight="fill" className="text-gold-seal relative drop-shadow-[0_8px_15px_rgba(201,169,110,0.3)] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="text-center">
                      <span className="block text-3xl font-black tracking-[0.25em] text-gold-seal font-serif mb-1 uppercase">
                        S.A.S.A.
                      </span>
                      <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-seal/40 to-transparent mx-auto mb-2" />
                      <span className="block text-[11px] tracking-[0.4em] text-gold-seal/80 uppercase font-black">
                        Ingeniería Preventiva
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-2xl shadow-xl shadow-gold-seal/10 border border-gold-seal/10 flex items-center gap-3 z-20"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-text-main">Status: Certificado</span>
              </motion.div>
            </motion.div>

            {/* Floating particles */}
            {[0, 120, 240].map((deg, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -30, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i,
                }}
                className="absolute w-1.5 h-1.5 bg-gold-seal/40 rounded-full"
                style={{
                  top: `${40 + 40 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${60 + 40 * Math.cos((deg * Math.PI) / 180)}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-seal/[0.06] border border-gold-seal/20 mb-8 w-fit shadow-sm">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gold-seal/90">
              Technical Authority Seal
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold font-serif text-text-main mb-10 leading-[1.1] tracking-tight">
            Transmita el máximo<br />
            <span className="text-gradient-gold italic font-light drop-shadow-sm">
              Estatus Técnico
            </span>
          </h2>

          <p className="text-text-sec text-xl leading-relaxed font-medium mb-12 max-w-xl opacity-80 border-l-2 border-gold-seal/10 pl-6">
            El reporte SASA es una declaración de fe técnica. No solo informa, sino que legitima el valor de su propiedad ante los ojos del comprador más exigente.
          </p>

          <div className="grid sm:grid-cols-1 gap-6">
            {FEATURES_DATA.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-center gap-5 group/item bg-bg-alt/30 p-4 rounded-2xl border border-transparent hover:border-gold-seal/10 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl border border-gold-seal/20 bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-gold-seal/5 transition-colors">
                  <Check size={16} weight="bold" className="text-gold-seal" />
                </div>
                <span className="text-text-sec text-base font-semibold group-hover:text-text-main transition-colors">
                  {f}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex items-center gap-4 p-6 rounded-[2rem] bg-gold-seal/[0.04] border border-gold-seal/10">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-seal/20 shadow-md">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Professional" alt="Signature" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-black text-gold-seal tracking-widest uppercase">Validación por IA & Humano</p>
              <p className="text-sm font-medium text-text-sec italic">"Protocolo de inspección estandarizado bajo normas IRAM"</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

SelloSASA.displayName = "SelloSASA";

export default SelloSASA;
