"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChartLineUp,
  UsersFour,
  Lightning,
  Star,
  Handshake,
  ArrowRight,
  ShieldCheck,
} from "@phosphor-icons/react";

const beneficios = [
  {
    icon: <Lightning size={32} weight="duotone" />,
    title: "Cierres más rápidos",
    text: "Reduce drásticamente el tiempo en el mercado eliminando objeciones técnicas antes de que surjan. La transparencia acelera la decisión del comprador.",
    color: "text-green-vibrant",
    span: "md:col-span-8 md:h-[300px]",
    delay: 0.1,
  },
  {
    icon: <Star size={32} weight="duotone" />,
    title: "Captación exclusiva",
    text: "El Sello S.A.S.A. es el diferencial definitivo para firmar mandatos exclusivos.",
    color: "text-gold-seal",
    span: "md:col-span-4 md:h-[300px]",
    delay: 0.2,
  },
  {
    icon: <ChartLineUp size={32} weight="duotone" />,
    title: "Valor Premium",
    text: "Propiedades certificadas perciben un valor mayor y se negocian con menos margen de descuento.",
    color: "text-blue-glow",
    span: "md:col-span-4 md:h-[280px]",
    delay: 0.3,
  },
  {
    icon: <UsersFour size={32} weight="duotone" />,
    title: "Autoridad de Marca",
    text: "Posicione su agencia como el estándar de confianza técnica y calidad en el mercado local.",
    color: "text-green-vibrant",
    span: "md:col-span-4 md:h-[280px]",
    delay: 0.4,
  },
  {
    icon: <Handshake size={32} weight="duotone" />,
    title: "Menos Conflictos",
    text: "Reducción total de reclamos post-venta al documentar el estado real y verificado.",
    color: "text-blue-light",
    span: "md:col-span-4 md:h-[280px]",
    delay: 0.5,
  },
  {
    icon: <ArrowRight size={32} weight="duotone" />,
    title: "Diferenciación de Mercado",
    text: "S.A.S.A. ofrece una herramienta técnica que su competencia no puede replicar sin el proceso de auditoría oficial.",
    color: "text-gold-seal",
    span: "md:col-span-12 md:h-[200px]",
    delay: 0.6,
  },
];

const Beneficios = () => {
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  return (
    <section ref={containerRef} id="beneficios" className="relative py-48 px-6 bg-transparent overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-mid/[0.015] rounded-full blur-[140px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-vibrant/[0.01] rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      {/* Parallax Background Typography - Ultra Subtle */}
      <div className="absolute top-[20%] left-0 w-[200vw] overflow-hidden pointer-events-none opacity-[0.03] -z-0">
        <motion.h2 style={{ x: xLeft }} className="text-[14vw] font-serif font-black whitespace-nowrap leading-none tracking-tighter text-blue-mid uppercase">
          Estrategia · Valor Técnico · Exclusividad ·
        </motion.h2>
      </div>
      <div className="absolute top-[50%] left-0 w-[200vw] overflow-hidden pointer-events-none opacity-[0.02] -z-0">
        <motion.h2 style={{ x: xRight }} className="text-[14vw] font-serif font-black whitespace-nowrap leading-none tracking-tighter text-text-main uppercase">
          Confianza Absoluta · Resultados SASA
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-28 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-mid/[0.04] border border-blue-mid/10 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-vibrant animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-mid/80">
                Alianza Estratégica
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-serif text-text-main leading-[1.05] tracking-tight font-bold"
            >
              Lidere el mercado <br />
              <span className="text-gradient-green italic font-light">
                con certeza técnica
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:max-w-sm"
          >
            <p className="text-text-sec text-xl font-medium leading-relaxed opacity-80 border-b-2 border-blue-mid/10 pb-6">
              Invierta en reputación. Ofrezca un activo auditado que se vende solo, eliminando el 90% de las fricciones técnicas del proceso.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Refined */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: b.delay,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className={`relative p-10 md:p-14 rounded-[3rem] border border-divider/10 bg-bg-alt/20 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-blue-mid/20 hover:bg-white hover:shadow-[0_40px_100px_rgba(10,77,153,0.08)] group ${b.span} flex flex-col justify-between`}
            >
              {/* Internal Decoration */}
              <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-white to-transparent rounded-full opacity-50 blur-3xl group-hover:from-blue-mid/10 transition-colors duration-1000`} />

              <div>
                <div className={`w-16 h-16 flex items-center justify-center rounded-[1.5rem] bg-white border border-divider/5 shadow-sm ${b.color} mb-12 transition-all duration-700 group-hover:scale-110 group-hover:shadow-xl group-hover:border-blue-mid/10`}>
                  {b.icon}
                </div>

                <h4 className={`text-text-main font-bold font-serif ${i === 0 || i === 5 ? 'text-3xl lg:text-4xl' : 'text-2xl'} mb-5 tracking-tight`}>
                  {b.title}
                </h4>
                <p className={`text-text-sec ${i === 0 || i === 5 ? 'text-lg lg:text-xl' : 'text-base font-medium'} leading-relaxed opacity-80 max-w-lg`}>
                  {b.text}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="mt-12 h-1 w-0 bg-gradient-to-r from-blue-mid to-transparent rounded-full group-hover:w-full transition-all duration-1000 ease-out opacity-20" />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-mid/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full transform ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
