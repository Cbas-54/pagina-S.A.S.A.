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
      "Evaluación rigurosa de instalaciones eléctricas, sistemas contra incendios y riesgos estructurales ocultos.",
    bullets: [
      "Tableros eléctricos y conexiones",
      "Red de incendio y extintores",
      "Detección de riesgos estructurales",
    ],
    icon: <ShieldCheck size={44} weight="duotone" />,
    accent: "border-[#020C1B]",
    textColor: "text-[#020C1B]",
    glow: "bg-blue-glow/20",
  },
  {
    ref: "REF: SASA-02",
    title: "Salud",
    subtitle: "Habitabilidad",
    description:
      "Control exhaustivo de humedad, ventilación cruzada y calidad del aire interior para un hogar sano.",
    bullets: [
      "Humedad capilar y cimientos",
      "Ventilación cruzada verificada",
      "Instalaciones de gas certificadas",
    ],
    icon: <Heart size={44} weight="duotone" />,
    accent: "border-[#059669]",
    textColor: "text-[#059669]",
    glow: "bg-[#059669]/15",
  },
  {
    ref: "REF: SASA-03",
    title: "Accesibilidad",
    subtitle: "Inclusión real",
    description:
      "Análisis de rampas, ascensores y movilidad interna para ampliar el mercado potencial.",
    bullets: [
      "Rampas y accesos adaptados",
      "Ascensores y escaleras seguras",
      "Señalización y circulación",
    ],
    icon: <Wheelchair size={44} weight="duotone" />,
    accent: "border-[#2563eb]",
    textColor: "text-[#2563eb]",
    glow: "bg-blue-light/15",
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
    <section id="pilares" className="relative py-44 px-6 overflow-hidden bg-[#e2e8f0]">
      {/* Dynamic Radial Gradient Background (Depth Look) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#f0f4f8_0%,#cbd5e1_40%,#020c1b_100%)] opacity-95 -z-10" />
      
      {/* Technical Grid overlay with fade out */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-slate-300/50 mb-8 backdrop-blur-md"
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-600">
              Pilares de Auditoría
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold font-serif text-[#020C1B] mb-8 leading-tight tracking-[calc(-0.01em)]"
          >
            Nuestros Tres Pilares
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Construyendo confianza definitiva a través del análisis técnico riguroso.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12"
        >
          {PILARES_DATA.map((pilar) => (
            <div key={pilar.title} className="relative">
              {/* Backlit Glow Effect */}
              <div className={`absolute -inset-10 ${pilar.glow} rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10`} />
              
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.01 }}
                className="relative group bg-white/90 backdrop-blur-md p-10 md:p-14 border border-slate-200/60 border-t-[10px] rounded-3xl transition-all duration-700 shadow-[0_10px_40px_-15px_rgba(2,12,27,0.1)] hover:shadow-2xl overflow-hidden cursor-default"
                style={{ borderTopColor: pilar.accent.split('-')[1].replace('[', '').replace(']', '') }}
              >
                {/* Reference ID */}
                <div className="flex justify-between items-start mb-12">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-400">
                      ID AUDITORÍA
                    </span>
                    <span className="text-[12px] font-bold text-slate-500 font-mono">
                      {pilar.ref}
                    </span>
                  </div>
                  <div className={`${pilar.textColor} opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {pilar.icon}
                  </div>
                </div>

                {/* Subtitle & Title */}
                <p className={`text-[10px] font-black tracking-[0.3em] uppercase ${pilar.textColor} mb-4 flex items-center gap-2`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${pilar.textColor.replace('text', 'bg')}`} />
                  {pilar.subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                  {pilar.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-12 text-[15px] font-medium opacity-90">
                  {pilar.description}
                </p>

                {/* Checklist Section */}
                <div className="border-t border-slate-200/50 pt-10">
                  <ul className="space-y-4">
                    {pilar.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-slate-900 text-[14px] font-bold group/item hover:translate-x-2 transition-transform duration-300"
                      >
                        <span className={`${pilar.textColor} font-serif font-black opacity-30 text-[15px]`}>
                          0{i + 1}
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Watermark */}
                <div className="absolute -bottom-6 -right-6 text-[8rem] font-serif font-black text-slate-900/[0.03] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700">
                  {pilar.title.charAt(0)}
                </div>

                {/* Subtle paper texture overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-[0.03] pointer-events-none" />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Pilares.displayName = "Pilares";

export default Pilares;
