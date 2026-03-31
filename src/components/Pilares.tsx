"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

const PILARES_DATA = [
  {
    num: "01",
    title: "Seguridad",
    subtitle: "Antisiniestral",
    description:
      "Evaluación rigurosa de instalaciones eléctricas, sistemas contra incendios y riesgos estructurales ocultos que pueden costar millones.",
    bullets: [
      "Tableros eléctricos y conexiones",
      "Red de incendio y extintores",
      "Detección de riesgos estructurales",
    ],
    icon: <ShieldCheck size={42} weight="duotone" />,
    gradient: "from-blue-mid/[0.08] via-blue-mid/[0.02] to-transparent",
    borderHover: "group-hover:border-blue-mid/40",
    iconColor: "text-blue-mid",
    dotColor: "bg-blue-mid",
    glowColor: "rgba(10, 77, 153, 0.08)",
  },
  {
    num: "02",
    title: "Salud",
    subtitle: "Habitabilidad",
    description:
      "Control exhaustivo de humedad, ventilación cruzada y calidad del aire interior. Un hogar saludable es irresistible.",
    bullets: [
      "Humedad capilar y cimientos",
      "Ventilación cruzada verificada",
      "Instalaciones de gas certificadas",
    ],
    icon: <Heart size={42} weight="duotone" />,
    gradient: "from-green-vibrant/[0.08] via-green-vibrant/[0.02] to-transparent",
    borderHover: "group-hover:border-green-vibrant/40",
    iconColor: "text-green-vibrant",
    dotColor: "bg-green-vibrant",
    glowColor: "rgba(102, 204, 51, 0.08)",
  },
  {
    num: "03",
    title: "Accesibilidad",
    subtitle: "Inclusión real",
    description:
      "Análisis de rampas, ascensores y movilidad interna. Una propiedad accesible amplía el mercado potencial de compradores.",
    bullets: [
      "Rampas y accesos adaptados",
      "Ascensores y escaleras seguras",
      "Señalización y circulación",
    ],
    icon: <Wheelchair size={42} weight="duotone" />,
    gradient: "from-blue-light/[0.1] via-blue-light/[0.02] to-transparent",
    borderHover: "group-hover:border-blue-light/40",
    iconColor: "text-blue-light",
    dotColor: "bg-blue-light",
    glowColor: "rgba(46, 139, 255, 0.08)",
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
    <section id="pilares" className="relative py-40 px-6 overflow-hidden bg-bg-main">
      <div className="absolute inset-0 -z-10 bg-bg-main" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
      
      {/* Massive Technical Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10 overflow-hidden">
        <span className="text-[18vw] font-black font-serif text-blue-mid/[0.02] tracking-tighter uppercase whitespace-nowrap">
          DNA TÉCNICO & RIGOR
        </span>
      </div>

      {/* Decorative background grid */}
      <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Redesigned Header: High Contrast Dark Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24 p-12 md:p-20 bg-[#020C1B] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Internal Glow for Header */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-mid/20 rounded-full blur-[120px] -mr-40 -mt-40" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-glow/10 border border-blue-glow/20 mb-8">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-glow">
                El ADN de la Propiedad
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold font-serif text-white mb-8 leading-[1.1] tracking-tight">
              Los Tres Pilares
              <br />
              <span className="font-light italic text-blue-glow/80">de la confianza definitiva</span>
            </h2>
            <p className="text-blue-light/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Auditamos cada activo en tres dimensiones críticas para asegurar 
              una transacción sin fricciones y un valor de mercado superior.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {PILARES_DATA.map((pilar) => (
            <motion.div
              key={pilar.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group p-10 md:p-12 glass-premium border border-divider/15 ${pilar.borderHover} rounded-[2.5rem] transition-all duration-500 overflow-hidden cursor-default shadow-sm hover:shadow-2xl`}
            >
              {/* Internal glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${pilar.glowColor} 0%, transparent 70%)`,
                }}
              />

              {/* Watermark number */}
              <div className="absolute top-10 right-10 text-[9rem] leading-none font-black font-serif select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-700 text-blue-mid group-hover:scale-110">
                {pilar.num}
              </div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-10 w-16 h-16 rounded-2xl bg-bg-main border border-divider/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(10,77,153,0.15)]">
                  <div className={`${pilar.iconColor}`}>
                    {pilar.icon}
                  </div>
                </div>

                {/* Titles */}
                <p className="text-[11px] font-black tracking-[0.3em] uppercase text-text-ter mb-3 group-hover:text-blue-mid transition-colors flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${pilar.dotColor}`} />
                  {pilar.subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-6 tracking-tight">
                  {pilar.title}
                </h3>
                <p className="text-text-sec leading-relaxed mb-10 text-[15px] font-medium opacity-80">
                  {pilar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-4 border-t border-divider/10 pt-8">
                  {pilar.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3.5 text-text-main text-[13px] font-bold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${pilar.iconColor} opacity-50`}>
                        <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
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
