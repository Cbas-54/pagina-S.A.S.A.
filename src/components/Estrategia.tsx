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
    icon: <MagnifyingGlass size={28} weight="duotone" />,
    color: "from-blue-mid to-blue-light",
  },
  {
    num: "02",
    title: "Auditoría in situ",
    text: "Evaluación técnica de 15 puntos críticos realizada por profesionales matriculados.",
    icon: <ClipboardText size={28} weight="duotone" />,
    color: "from-blue-light to-green-vibrant",
  },
  {
    num: "03",
    title: "Certificación S.A.S.A.",
    text: "Emisión del Sello verificado con código QR único para validación inmediata.",
    icon: <SealCheck size={28} weight="duotone" />,
    color: "from-green-vibrant to-blue-light",
  },
  {
    num: "04",
    title: "Material de Venta",
    text: "Entrega de brochure técnico premium diseñado para disolver dudas del comprador.",
    icon: <PresentationChart size={28} weight="duotone" />,
    color: "from-blue-light to-blue-mid",
  },
  {
    num: "05",
    title: "Cierre Garantizado",
    text: "Soporte técnico continuo durante la negociación final para asegurar el éxito.",
    icon: <Handshake size={28} weight="duotone" />,
    color: "from-blue-mid to-bg-surface",
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
    <section id="estrategia" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 bg-bg-alt" />
      <div className="blob blob-purple top-[10%] left-[-5%] opacity-10" />
      <div className="blob blob-blue bottom-[10%] right-[-5%] opacity-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-vibrant/10 border border-green-vibrant/20 mb-6"
          >
            <ShieldCheck size={14} weight="fill" className="text-green-vibrant" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-mid">
              Workflow Técnico
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold font-serif text-text-main leading-tight tracking-tight"
          >
            Nuestra hoja de ruta hacia <br />
            <span className="text-gradient-green italic font-light">la venta blindada</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Technical Path (Desktop) */}
          <div className="hidden lg:block absolute top-[5rem] left-[5%] right-[5%] h-20 -z-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path 
                d="M0,50 Q250,0 500,50 T1000,50" 
                stroke="rgba(10, 77, 153, 0.15)" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
              />
              <motion.path 
                d="M0,50 Q250,0 500,50 T1000,50" 
                stroke="url(#pathGradient)" 
                strokeWidth="3" 
                strokeLinecap="round"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--blue-mid)" />
                  <stop offset="50%" stopColor="var(--green-vibrant)" />
                  <stop offset="100%" stopColor="var(--blue-light)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col items-center text-center px-4"
              >
                {/* Visual Connector Node */}
                <div className="relative mb-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] shadow-2xl transition-all duration-500 group-hover:shadow-blue-mid/20`}
                  >
                    <div className="w-full h-full rounded-[23px] bg-bg-elevated flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="text-text-main group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Step Chip */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-bg-surface border border-divider rounded-full shadow-lg">
                    <span className="text-[10px] font-bold text-blue-light tracking-widest">{step.num}</span>
                  </div>
                </div>

                {/* Text Content */}
                <h4 className="text-text-main font-bold font-serif text-xl mb-3 tracking-tight group-hover:text-green-vibrant transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-text-sec text-sm leading-relaxed font-light max-w-[200px]">
                  {step.text}
                </p>
                
                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden h-12 w-px bg-gradient-to-b from-divider to-transparent mt-8" />
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
