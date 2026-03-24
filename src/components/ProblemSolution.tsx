"use client";

import React from "react";
import { motion } from "framer-motion";
import { Warning, ArrowRight, ShieldCheck, XCircle } from "@phosphor-icons/react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
const ProblemSolution = () => {
  const problems = [
    "Instalaciones eléctricas sin certificación — riesgo de incendio oculto.",
    "Falta de ventilación: habitabilidad comprometida, nunca declarada.",
    "Comprador teme cometer un error económico irreparable.",
    "Desconfianza hacia la inmobiliaria por falta de garantías.",
    "Negociaciones que reducen el precio un 10–20% por inseguridad técnica.",
  ];

  const solutions = [
    "Certificación técnica firmada por profesional matriculado.",
    "Checklist visual que el comprador puede leer y confiar.",
    "Eliminación de objeciones antes de que aparezcan.",
    "La inmobiliaria se posiciona como referente de calidad.",
    "El comprador paga el precio justo — confiado y rápido.",
  ];

  return (
    <section id="problema" className="relative py-32 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 bg-bg-alt" />
      <div className="blob blob-purple top-[20%] left-[-10%] opacity-5" />
      <div className="blob blob-green bottom-[20%] right-[-10%] opacity-5" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-danger/5 border border-red-danger/10 mb-6">
            <Warning size={14} weight="fill" className="text-red-danger" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-red-danger/70">
              Análisis de Riesgo
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold font-serif text-text-main leading-[1.1] tracking-tight"
          >
            La incertidumbre técnica <br />
            <span className="italic font-light text-red-danger/80">
              devora sus cierres
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center mt-12 w-full"
          >
            <TextRevealCard
              text="Incertidumbre técnica y legal" 
              revealText="Certidumbre y valor de mercado" 
              className="bg-bg-alt/50 border-divider/20 w-full max-w-4xl backdrop-blur-sm"
            >
              <TextRevealCardTitle>
                El verdadero valor de una propiedad
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Pase el cursor por encima para descubrir la transformación tras una auditoría S.A.S.A.
              </TextRevealCardDescription>
            </TextRevealCard>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 items-center mt-16">
          {/* ANTES (Problema) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="group relative p-8 md:p-12 rounded-3xl border border-divider/20 bg-bg-main/40 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-danger/20" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-red-danger/10 flex items-center justify-center border border-red-danger/20">
                  <XCircle size={28} className="text-red-danger" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-text-main font-bold">Sin Certificación</h3>
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-text-ter">Estado de Vulnerabilidad</p>
                </div>
              </div>

              <ul className="space-y-6">
                {problems.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-4 items-start group/item"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-danger/40 mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                    <p className="text-text-sec text-sm leading-relaxed font-light">{p}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Transition Icon */}
          <div className="flex lg:flex-col items-center justify-center gap-4 py-8 lg:py-0">
            <div className="h-px w-8 lg:w-px lg:h-12 bg-gradient-to-r lg:bg-gradient-to-b from-transparent to-divider" />
            <motion.div
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(102,204,51,0)", "0 0 0 10px rgba(102,204,51,0.1)", "0 0 0 0px rgba(102,204,51,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-bg-surface border border-divider flex items-center justify-center shadow-xl z-20"
            >
              <ArrowRight size={28} className="text-green-vibrant lg:rotate-0 rotate-90" weight="bold" />
            </motion.div>
            <div className="h-px w-8 lg:w-px lg:h-12 bg-gradient-to-r lg:bg-gradient-to-b from-divider to-transparent" />
          </div>

          {/* DESPUÉS (Solución) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="group relative p-8 md:p-12 rounded-3xl border border-blue-mid/30 bg-bg-surface/60 backdrop-blur-md overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-green-vibrant/40" />
            <div className="absolute inset-0 bg-blue-mid/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-green-vibrant/10 flex items-center justify-center border border-green-vibrant/20">
                  <ShieldCheck size={28} className="text-green-vibrant" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-text-main font-bold">Activo Certificado</h3>
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-green-vibrant">Sello S.A.S.A. Vigente</p>
                </div>
              </div>

              <ul className="space-y-6">
                {solutions.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex gap-4 items-start group/item"
                  >
                    <div className="p-0.5 rounded-full bg-green-vibrant/10 border border-green-vibrant/20 mt-1 shrink-0 group-hover/item:bg-green-vibrant/20 transition-colors">
                      <ShieldCheck size={14} className="text-green-vibrant" weight="bold" />
                    </div>
                    <p className="text-text-sec text-sm leading-relaxed font-light">{s}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
