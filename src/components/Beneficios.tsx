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
    span: "md:col-span-12 md:h-[200px] flex-row items-center gap-8",
    delay: 0.6,
  },
];

const Beneficios = () => {
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={containerRef} id="beneficios" className="relative py-32 px-6 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 -z-10 bg-bg-main" />
      <div className="blob blob-blue top-[20%] right-[-10%] opacity-10" />
      <div className="blob blob-green bottom-[10%] left-[-10%] opacity-5" />

      {/* Decorative Parallax Typography (Chevron Effect) */}
      <div className="absolute top-[15%] left-0 w-[200vw] sm:w-[150vw] overflow-hidden pointer-events-none opacity-5 -z-0">
        <motion.h2 style={{ x: xLeft }} className="text-[12vw] sm:text-[10vw] font-serif font-black whitespace-nowrap leading-none tracking-tighter text-blue-light uppercase">
          Certificación · Valor · Transparencia · 
        </motion.h2>
      </div>
      <div className="absolute top-[40%] left-0 w-[200vw] sm:w-[150vw] overflow-hidden pointer-events-none opacity-[0.03] -z-0">
        <motion.h2 style={{ x: xRight }} className="text-[12vw] sm:text-[10vw] font-serif font-black whitespace-nowrap leading-none tracking-tighter uppercase">
          Confianza de Mercado · Innovación Técnica
        </motion.h2>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-mid/10 border border-blue-mid/20 mb-6"
            >
              <ShieldCheck size={14} weight="fill" className="text-green-vibrant" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-light">
                Ventajas Competitivas
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-serif text-text-main leading-[1.1]"
            >
              ¿Qué gana su agencia al <br />
              <span className="text-gradient-green italic font-light">
                certificar su cartera?
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-sec text-lg max-w-sm font-light leading-relaxed mb-4"
          >
            Una alianza estratégica que transforma la incertidumbre técnica en una herramienta de cierre imparable.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: b.delay,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className={`bento-item group ${b.span} ${i === 5 ? 'flex flex-col md:flex-row' : 'flex flex-col justify-start'}`}
            >
              {/* Card Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:bg-blue-mid/10 transition-colors duration-700`} />
              
              <div className={`relative z-10 ${i === 5 ? 'w-16 h-16 md:w-20 md:h-20 shrink-0' : 'w-14 h-14'} flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.05] ${b.color} mb-6 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-mid/30 group-hover:bg-blue-mid/5`}>
                {b.icon}
              </div>
              
              <div className="relative z-10 flex flex-col justify-center">
                <h4 className={`text-text-main font-bold font-serif ${i === 5 ? 'text-2xl mb-2' : 'text-xl mb-3'} tracking-tight`}>
                  {b.title}
                </h4>
                <p className={`text-text-sec ${i === 5 ? 'text-base' : 'text-sm'} leading-relaxed font-light max-w-md`}>
                  {b.text}
                </p>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full transform ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
