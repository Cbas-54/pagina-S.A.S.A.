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
    icon: <ShieldCheck size={42} weight="duotone" />,
    accent: "border-[#020C1B]",
    textColor: "text-[#020C1B]",
    iconBg: "bg-[#020C1B]/5",
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
    icon: <Heart size={42} weight="duotone" />,
    accent: "border-[#059669]",
    textColor: "text-[#059669]",
    iconBg: "bg-[#059669]/5",
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
    icon: <Wheelchair size={42} weight="duotone" />,
    accent: "border-[#2563eb]",
    textColor: "text-[#2563eb]",
    iconBg: "bg-[#2563eb]/5",
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
    <section id="pilares" className="relative py-40 px-6 overflow-hidden bg-[#fdfdfd]">
      <div className="absolute inset-0 -z-10 bg-[#fdfdfd]" />
      
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto">
        {/* High Contrast Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24 p-12 md:p-20 bg-[#020C1B] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Decorative Internal Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-mid/10 rounded-full blur-[120px] -mr-40 -mt-40" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-glow/10 border border-blue-glow/20 mb-8">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-glow">
                El ADN de la Propiedad
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold font-serif text-white mb-8 leading-[1.1] tracking-tight">
              Los Tres Pilares
              <br />
              <span className="font-light italic text-blue-light/60">de la confianza definitiva</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Auditamos cada activo en tres dimensiones críticas para asegurar 
              una transacción sin fricciones y con absoluta transparencia física.
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
              whileHover={{ y: -10 }}
              className={`relative group bg-white p-10 md:p-12 border-t-8 ${pilar.accent} border-x border-b border-divider/10 rounded-2xl transition-all duration-500 overflow-hidden cursor-default shadow-sm hover:shadow-2xl`}
            >
              <div className="relative z-10">
                {/* Reference ID Detail */}
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-text-ter/50">
                    {pilar.ref}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl ${pilar.iconBg} flex items-center justify-center ${pilar.textColor} transition-transform duration-500 group-hover:scale-110`}>
                    {pilar.icon}
                  </div>
                </div>

                {/* Titles */}
                <p className={`text-[11px] font-black tracking-[0.3em] uppercase ${pilar.textColor} mb-3 flex items-center gap-2`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${pilar.textColor.replace('text', 'bg')}`} />
                  {pilar.subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-6 tracking-tight">
                  {pilar.title}
                </h3>
                <p className="text-text-sec leading-relaxed mb-10 text-[15px] font-medium opacity-80">
                  {pilar.description}
                </p>

                {/* Checklist Style Bullets */}
                <ul className="space-y-4 border-t border-divider/10 pt-8">
                  {pilar.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3.5 text-text-main text-[13px] font-bold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <span className={`${pilar.textColor} opacity-60 font-serif font-black`}>
                        {i + 1}.
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Stamp Element */}
              <div className="absolute -bottom-6 -right-6 text-[8rem] font-serif font-black text-divider/5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
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
