"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

const pilares = [
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
    icon: <ShieldCheck size={36} weight="duotone" />,
    gradient: "from-blue-mid/25 via-blue-mid/5 to-transparent",
    borderHover: "group-hover:border-blue-mid/60",
    iconColor: "text-blue-light",
    dotColor: "bg-blue-light",
    glowColor: "rgba(10, 77, 153, 0.3)",
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
    icon: <Heart size={36} weight="duotone" />,
    gradient: "from-green-muted/25 via-green-muted/5 to-transparent",
    borderHover: "group-hover:border-green-mid/60",
    iconColor: "text-green-vibrant",
    dotColor: "bg-green-vibrant",
    glowColor: "rgba(102, 204, 51, 0.2)",
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
    icon: <Wheelchair size={36} weight="duotone" />,
    gradient: "from-blue-struct/30 via-blue-struct/5 to-transparent",
    borderHover: "group-hover:border-blue-light/50",
    iconColor: "text-blue-glow",
    dotColor: "bg-blue-glow",
    glowColor: "rgba(46, 139, 255, 0.2)",
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

const Pilares = () => {
  return (
    <section id="pilares" className="relative py-32 px-6 overflow-hidden noise-overlay">
      <div className="absolute inset-0 -z-10 bg-bg-main" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,51,102,0.25)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-text-ter mb-4">
            El trípode de la confianza
          </p>
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-text-main mb-5">
            Los Tres Pilares
            <br />
            <span className="font-light italic text-blue-light/80">del Sello S.A.S.A.</span>
          </h2>
          <p className="text-text-sec text-base max-w-2xl mx-auto font-light leading-relaxed">
            Cada propiedad es auditada profesionalmente en estas tres dimensiones
            para garantizar que llega al mercado lista para venderse.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {pilares.map((pilar) => (
            <motion.div
              key={pilar.title}
              variants={cardVariants}
              className={`relative group p-10 bg-bg-alt border border-divider ${pilar.borderHover} rounded-md transition-all duration-500 overflow-hidden cursor-default`}
              style={{
                // @ts-expect-error css custom property
                "--glow": pilar.glowColor,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 60px ${pilar.glowColor}, 0 20px 60px ${pilar.glowColor}`,
                }}
              />

              {/* Top gradient wash */}
              <div
                className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${pilar.gradient} -z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Watermark number */}
              <div className="absolute top-4 right-6 text-[7rem] leading-none font-black font-serif select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 text-text-main">
                {pilar.num}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`${pilar.iconColor} mb-7 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_var(--glow)]`}
                >
                  {pilar.icon}
                </div>

                {/* Titles */}
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-ter mb-1">
                  {pilar.subtitle}
                </p>
                <h3 className="text-3xl font-serif font-bold text-text-main mb-4 tracking-tight">
                  {pilar.title}
                </h3>
                <p className="text-text-sec leading-relaxed mb-7 text-sm font-light">
                  {pilar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 border-t border-divider pt-6">
                  {pilar.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-text-sec text-xs"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${pilar.dotColor} shrink-0 opacity-60`}
                      />
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
};

export default Pilares;
