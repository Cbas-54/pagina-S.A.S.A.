"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

const PILARES_DATA = [
  {
    ref: "REF: SASA-01",
    title: "Seguridad",
    subtitle: "Antisiniestral",
    description:
      "Evaluación rigurosa de instalaciones eléctricas, sistemas contra incendios y riesgos estructurales ocultos que pueden costar millones.",
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
    ref: "REF: SASA-02",
    title: "Salud",
    subtitle: "Habitabilidad",
    description:
      "Control exhaustivo de humedad, ventilación cruzada y calidad del aire interior. Un hogar saludable es irresistible.",
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
    ref: "REF: SASA-03",
    title: "Accesibilidad",
    subtitle: "Inclusión real",
    description:
      "Análisis de rampas, ascensores y movilidad interna. Una propiedad accesible amplía el mercado potencial de compradores.",
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
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const Pilares = React.memo(() => {
  return (
    <section id="pilares" className="relative py-40 px-6 overflow-hidden bg-[#020C1B]">
      {/* Background Technical Foundation */}
      <div className="absolute inset-0 -z-10 bg-[#020C1B]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-blue-glow/10 blur-[140px] -z-10 opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Integrated Section Header */}
        <div className="text-center mb-28 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-glow/5 border border-white/10 mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-glow animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-glow">
              Auditoría Pericial Integral
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold font-serif text-white mb-8 tracking-tight leading-[1.05]"
          >
            Los Tres Pilares
            <br />
            <span className="font-light italic text-blue-light/50">fundamentales de SASA</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Procesos de inspección técnica diseñados para garantizar la transparencia, 
            seguridad y rentabilidad de cada activo inmobiliario.
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
              whileHover={{ y: -15, scale: 1.02 }}
              className={`relative group bg-white p-12 lg:p-14 border-t-[10px] ${pilar.accent} border-x border-b border-divider/5 rounded-3xl transition-all duration-700 overflow-hidden cursor-default shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]`}
            >
              {/* Corner Watermark */}
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500">
                <p className="text-[6rem] font-serif font-black leading-none">{pilar.title.charAt(0)}</p>
              </div>

              <div className="relative z-10">
                {/* Header Row: ID & Icon */}
                <div className="flex justify-between items-center mb-14">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-text-ter/40">
                      IDENTIFICADOR
                    </span>
                    <span className="text-[13px] font-bold text-text-ter/70 font-mono">
                      {pilar.ref}
                    </span>
                  </div>
                  <div className={`${pilar.textColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {pilar.icon}
                  </div>
                </div>

                {/* Content Block */}
                <p className={`text-[11px] font-black tracking-[0.3em] uppercase ${pilar.textColor} mb-4 flex items-center gap-2.5`}>
                  <div className={`w-2 h-2 rounded-full ${pilar.textColor.replace('text', 'bg')}`} />
                  {pilar.subtitle}
                </p>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-8 tracking-tight">
                  {pilar.title}
                </h3>
                <p className="text-text-sec leading-relaxed mb-12 text-[16px] font-medium opacity-90">
                  {pilar.description}
                </p>

                {/* Audit Checklist */}
                <div className="border-t border-divider/10 pt-10">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-ter/50 mb-6">
                    PUNTOS DE INSPECCIÓN
                  </p>
                  <ul className="space-y-5">
                    {pilar.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-text-main text-[14px] font-bold group/item hover:translate-x-2 transition-transform duration-300"
                      >
                        <span className={`${pilar.textColor} font-serif font-black opacity-40 text-[16px] leading-none`}>
                          0{i + 1}
                        </span>
                        <span className="leading-tight">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Physical Edge Highlight (Top left paper corner feel) */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-l border-white/10 opacity-30" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Pilares.displayName = "Pilares";

export default Pilares;
