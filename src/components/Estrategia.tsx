"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MagnifyingGlass,
  ClipboardText,
  SealCheck,
  Handshake,
  PresentationChart,
  ShieldCheck,
} from "@phosphor-icons/react";

const steps = [
  {
    num: "01",
    title: "Diagnóstico Inicial",
    text: "Relevamiento exhaustivo de la propiedad: tipología, antigüedad y estado técnico base.",
    icon: <MagnifyingGlass size={30} weight="duotone" />,
    color: "from-blue-mid to-blue-light",
  },
  {
    num: "02",
    title: "Auditoría in situ",
    text: "Evaluación técnica de 15 puntos críticos realizada por profesionales matriculados.",
    icon: <ClipboardText size={30} weight="duotone" />,
    color: "from-blue-light to-green-vibrant",
  },
  {
    num: "03",
    title: "Certificación S.A.S.A.",
    text: "Emisión del Sello verificado con código QR único para validación inmediata.",
    icon: <SealCheck size={30} weight="duotone" />,
    color: "from-green-vibrant to-blue-light",
  },
  {
    num: "04",
    title: "Material de Venta",
    text: "Entrega de brochure técnico premium diseñado para disolver dudas del comprador.",
    icon: <PresentationChart size={30} weight="duotone" />,
    color: "from-blue-light to-blue-mid",
  },
  {
    num: "05",
    title: "Cierre Garantizado",
    text: "Soporte técnico continuo durante la negociación final para asegurar el éxito.",
    icon: <Handshake size={30} weight="duotone" />,
    color: "from-blue-mid to-blue-struct",
  },
];

const Estrategia = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section id="procesos" ref={containerRef} className="relative py-40 px-6 overflow-hidden bg-bg-alt/30">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
      <div className="blob blob-blue top-[10%] left-[-10%] opacity-[0.03] scale-150" />
      <div className="blob blob-green bottom-[10%] right-[-10%] opacity-[0.03] scale-150" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-vibrant/[0.06] border border-green-vibrant/15 mb-8"
          >
            <ShieldCheck size={16} weight="fill" className="text-green-vibrant" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-green-mid">
              Workflow de Excelencia
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold font-serif text-text-main leading-[1.1] tracking-tight"
          >
            Navegando hacia <br />
            <span className="text-gradient-green italic font-light">la venta definitiva</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Technical Path (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[5%] right-[5%] h-32 -z-0 pointer-events-none opacity-40">
            <svg width="100%" height="100%" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path 
                d="M0,50 Q250,110 500,50 T1000,50" 
                stroke="rgba(15, 23, 42, 0.08)" 
                strokeWidth="2" 
                strokeDasharray="12 12" 
              />
              <motion.path 
                d="M0,50 Q250,110 500,50 T1000,50" 
                stroke="url(#pathGradientLight)" 
                strokeWidth="4" 
                strokeLinecap="round"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="pathGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--blue-mid)" />
                  <stop offset="50%" stopColor="var(--green-vibrant)" />
                  <stop offset="100%" stopColor="var(--blue-light)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Visual Connector Node */}
                <div className="relative mb-12">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className={`w-32 h-32 rounded-[2.5rem] bg-gradient-to-br ${step.color} p-[1px] shadow-2xl shadow-blue-mid/5 transition-all duration-500 group-hover:shadow-blue-mid/15`}
                  >
                    <div className="w-full h-full rounded-[2.4rem] bg-white flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-bg-alt opacity-50 transition-opacity" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 text-text-main group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Step Chip */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white border border-divider shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-full z-20">
                    <span className="text-[11px] font-black text-blue-mid tracking-[0.2em]">{step.num}</span>
                  </div>
                </div>

                {/* Text Content */}
                <h4 className="text-text-main font-bold font-serif text-2xl mb-4 tracking-tight transition-colors duration-300 group-hover:text-green-vibrant">
                  {step.title}
                </h4>
                <p className="text-text-sec text-xs leading-relaxed font-medium max-w-[190px]">
                  {step.text}
                </p>
                
                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden h-12 w-px bg-gradient-to-b from-divider to-transparent mt-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estrategia;
