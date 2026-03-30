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

const Pilares = () => {
  return (
    <section id="pilares" className="relative py-40 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
      
      {/* Decorative background grid */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-mid/[0.04] border border-blue-mid/10 mb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-mid/80">
              El ADN de la Propiedad
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold font-serif text-text-main mb-8 leading-[1.1] tracking-tight">
            Los Tres Pilares
            <br />
            <span className="font-light italic text-blue-mid/80">de la confianza definitiva</span>
          </h2>
          <p className="text-text-sec text-lg max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
            Auditamos cada activo en tres dimensiones críticas para asegurar 
            una transacción sin fricciones y un valor de mercado superior.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pilares.map((pilar) => (
            <motion.div
              key={pilar.title}
              variants={cardVariants}
              className={`relative group p-12 bg-white border border-divider/15 ${pilar.borderHover} rounded-[2.5rem] transition-all duration-500 overflow-hidden cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(10,77,153,0.08)]`}
              style={{
                // @ts-expect-error css custom property
                "--glow": pilar.glowColor,
              }}
            >
              {/* Internal glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${pilar.glowColor} 0%, transparent 70%)`,
                }}
              />

              {/* Watermark number */}
              <div className="absolute top-10 right-10 text-[9rem] leading-none font-black font-serif select-none pointer-events-none opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 text-text-main group-hover:scale-110">
                {pilar.num}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`${pilar.iconColor} mb-10 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_8px_15px_var(--glow)]`}
                >
                  {pilar.icon}
                </div>

                {/* Titles */}
                <p className="text-[11px] font-black tracking-[0.25em] uppercase text-text-ter mb-2 group-hover:text-blue-mid transition-colors">
                  {pilar.subtitle}
                </p>
                <h3 className="text-4xl font-serif font-bold text-text-main mb-6 tracking-tight">
                  {pilar.title}
                </h3>
                <p className="text-text-sec leading-relaxed mb-10 text-[15px] font-medium opacity-80 decoration-blue-mid/20">
                  {pilar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-4 border-t border-divider/10 pt-8">
                  {pilar.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3.5 text-text-main text-sm font-bold"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${pilar.dotColor} shrink-0 shadow-sm`}
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
