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
    <section id="problema" className="relative py-40 px-6 overflow-hidden bg-white">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="blob blob-blue top-[20%] left-[-15%] opacity-[0.03] scale-150" />
      <div className="blob blob-green bottom-[20%] right-[-15%] opacity-[0.03] scale-150" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-danger/[0.04] border border-red-danger/10 mb-8">
            <Warning size={16} weight="fill" className="text-red-danger" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-red-danger/70">
              Diagnóstico de Situación
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold font-serif text-text-main leading-[1.1] tracking-tight mb-16"
          >
            La duda técnica <br />
            <span className="italic font-light text-red-danger/80">
              paraliza el cierre
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center w-full"
          >
            <TextRevealCard
              text="Incertidumbre y riesgo oculto" 
              revealText="Valor real y venta blindada" 
              className="bg-bg-alt/40 border-divider/15 w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl rounded-[2.5rem]"
            >
              <TextRevealCardTitle className="text-2xl md:text-3xl">
                La Transformación Digital del Activo
              </TextRevealCardTitle>
              <TextRevealCardDescription className="text-base">
                Descubra cómo convertimos el miedo en confianza absoluta.
              </TextRevealCardDescription>
            </TextRevealCard>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch mt-24">
          {/* ANTES (Problema) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="group relative p-10 md:p-14 rounded-[2.5rem] border border-red-danger/10 bg-gradient-to-br from-white to-red-danger/[0.02] shadow-[0_10px_30px_rgba(239,68,68,0.03)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-red-danger/10" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-red-danger/5 flex items-center justify-center border border-red-danger/10">
                  <XCircle size={32} className="text-red-danger" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-text-main font-bold">Estado Crítico</h3>
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-text-ter">Sin Certificación S.A.S.A.</p>
                </div>
              </div>

              <ul className="space-y-8">
                {problems.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-5 items-start group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-danger/30 mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                    <p className="text-text-sec text-[15px] leading-relaxed font-medium">{p}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Transition Icon */}
          <div className="flex lg:flex-col items-center justify-center gap-6 py-12 lg:py-0">
            <div className="h-px w-10 lg:w-px lg:h-16 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-divider to-transparent" />
            <motion.div
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(102,204,51,0)", "0 0 0 15px rgba(102,204,51,0.08)", "0 0 0 0px rgba(102,204,51,0)"]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-white border border-divider flex items-center justify-center shadow-xl z-20"
            >
              <ArrowRight size={32} className="text-green-vibrant lg:rotate-0 rotate-90" weight="bold" />
            </motion.div>
            <div className="h-px w-10 lg:w-px lg:h-16 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-divider to-transparent" />
          </div>

          {/* DESPUÉS (Solución) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="group relative p-10 md:p-14 rounded-[2.5rem] border border-blue-mid/20 bg-gradient-to-br from-white to-blue-mid/[0.03] shadow-[0_25px_60px_rgba(10,77,153,0.06)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-green-vibrant/20" />
            <div className="absolute inset-0 bg-blue-mid/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-green-vibrant/10 flex items-center justify-center border border-green-vibrant/20">
                  <ShieldCheck size={32} className="text-green-vibrant" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-text-main font-bold">Activo Blindado</h3>
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-green-vibrant font-black">Sello S.A.S.A. Garantizado</p>
                </div>
              </div>

              <ul className="space-y-8">
                {solutions.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className="flex gap-5 items-start group/item"
                  >
                    <div className="p-1 rounded-full bg-green-vibrant/[0.08] border border-green-vibrant/20 mt-1 shrink-0 group-hover/item:bg-green-vibrant/20 transition-colors">
                      <ShieldCheck size={18} className="text-green-vibrant" weight="bold" />
                    </div>
                    <p className="text-text-main text-[15px] leading-relaxed font-bold">{s}</p>
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
