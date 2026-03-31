"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

const PILARES_DATA = [
  {
    title: "Seguridad",
    subtitle: "Antisiniestral",
    description:
      "Evaluación rigurosa de instalaciones eléctricas, sistemas contra incendios y riesgos estructurales ocultos.",
    bullets: [
      "Tableros eléctricos y conexiones",
      "Red de incendio y extintores",
      "Detección de riesgos estructurales",
    ],
    icon: <ShieldCheck size={48} weight="duotone" />,
    accent: "border-[#020C1B]",
    textColor: "text-[#020C1B]",
  },
  {
    title: "Salud",
    subtitle: "Habitabilidad",
    description:
      "Control exhaustivo de humedad, ventilación cruzada y calidad del aire interior para un hogar sano.",
    bullets: [
      "Humedad capilar y cimientos",
      "Ventilación cruzada verificada",
      "Instalaciones de gas certificadas",
    ],
    icon: <Heart size={48} weight="duotone" />,
    accent: "border-[#059669]",
    textColor: "text-[#059669]",
  },
  {
    title: "Accesibilidad",
    subtitle: "Inclusión real",
    description:
      "Análisis de rampas, ascensores y movilidad interna para ampliar el mercado potencial.",
    bullets: [
      "Rampas y accesos adaptados",
      "Ascensores y escaleras seguras",
      "Señalización y circulación",
    ],
    icon: <Wheelchair size={48} weight="duotone" />,
    accent: "border-[#2563eb]",
    textColor: "text-[#2563eb]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const Pilares = React.memo(() => {
  return (
    <section id="pilares" className="relative py-24 md:py-32 bg-[#020C1B] overflow-hidden">
      
      {/* 📐 DIAGONAL SUPERIOR (Invertida: Sube / ) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[120px] fill-white"
        >
          <path d="M0,0 L0,120 L1200,0 Z"></path>
        </svg>
      </div>

      {/* 📐 DIAGONAL INFERIOR (Invertida: Baja \ ) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[120px] fill-white"
        >
          <path d="M1200,120 L1200,0 L0,120 Z"></path>
        </svg>
      </div>

      {/* Technical Background Foundation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto relative z-30 px-6">
        {/* Integrated Section Header */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-glow/5 border border-white/10 mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-glow animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-glow">
              Auditoría Pericial SASA
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold font-serif text-white mb-8 tracking-tight leading-[1.05]"
          >
            Nuestros Tres Pilares
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Auditamos cada activo para garantizar transparencia, seguridad y rentabilidad definitiva.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {PILARES_DATA.map((pilar) => (
            <motion.div
              key={pilar.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.01 }}
              className={`relative group bg-white p-12 lg:p-14 border-t-[10px] ${pilar.accent} border-x border-b border-divider/5 rounded-3xl transition-all duration-500 overflow-hidden cursor-default shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]`}
            >
              <div className="relative z-10">
                {/* Header Row: Icon Only */}
                <div className="flex justify-end items-start mb-14">
                  <div className={`${pilar.textColor} transition-all duration-500 group-hover:scale-110`}>
                    {pilar.icon}
                  </div>
                </div>

                {/* Subtitle & Title */}
                <p className={`text-[11px] font-black tracking-[0.3em] uppercase ${pilar.textColor} mb-4 flex items-center gap-2`}>
                   <div className={`w-1.5 h-1.5 rounded-full ${pilar.textColor.replace('text', 'bg')}`} />
                   {pilar.subtitle}
                </p>
                <h3 className="text-4xl lg:text-5xl font-serif font-bold text-text-main mb-8 tracking-tight">
                  {pilar.title}
                </h3>
                <p className="text-text-sec text-[15px] font-medium leading-relaxed mb-12 opacity-80">
                  {pilar.description}
                </p>

                {/* Checklist Style Bullets */}
                <ul className="space-y-4 border-t border-divider/10 pt-10">
                  {pilar.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-text-main text-[14px] font-bold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <span className={`${pilar.textColor} opacity-60 font-serif font-black text-[16px]`}>
                        0{i + 1}
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Stamp Element */}
              <div className="absolute -bottom-6 -right-6 text-[8rem] font-serif font-black text-divider/5 select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-700">
                {pilar.title.charAt(0)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Pilares.displayName = "Pilares";

export default Pilares;
