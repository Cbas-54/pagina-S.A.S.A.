"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

const categories = [
  {
    title: "Seguridad Antisiniestral",
    badge: "5 ítems",
    color: "text-blue-light",
    borderColor: "border-blue-mid/20",
    dotColor: "bg-blue-mid",
    accentGlow: "rgba(10, 77, 153, 0.15)",
    items: [
      "Extintores",
      "Detectores de humo",
      "Red de incendio",
      "Tableros eléctricos",
      "Puertas cortafuego",
    ],
  },
  {
    title: "Salud / Habitabilidad",
    badge: "5 ítems",
    color: "text-green-vibrant",
    borderColor: "border-green-muted/30",
    dotColor: "bg-green-mid",
    accentGlow: "rgba(102, 204, 51, 0.1)",
    items: [
      "Humedad capilar/cimientos",
      "Ventilación cruzada",
      "Estado de paredes",
      "Calidad del aire",
      "Instalaciones de gas",
    ],
  },
  {
    title: "Accesibilidad",
    badge: "5 ítems",
    color: "text-blue-glow",
    borderColor: "border-blue-struct/40",
    dotColor: "bg-blue-glow",
    accentGlow: "rgba(46, 139, 255, 0.1)",
    items: [
      "Rampas de acceso",
      "Ascensores adaptados",
      "Escaleras seguras",
      "Pasillos de circulación",
      "Señalización clara",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const AuditDetails = () => {
  return (
    <section id="auditoria" className="relative py-32 px-6 noise-overlay">
      <div className="absolute inset-0 -z-10 bg-bg-main" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,51,102,0.15)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-text-ter mb-3">
              Proceso profesional
            </p>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-text-main leading-tight">
              Checklist de
              <br />
              <span className="font-light italic text-blue-light/80">Auditoría Técnica</span>
            </h2>
          </div>
          <p className="text-text-sec text-sm max-w-sm font-light leading-relaxed">
            15 puntos críticos auditados y firmados por profesional matriculado.
            Todo queda documentado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px rounded-lg overflow-hidden bg-divider/30">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              className="p-8 md:p-10 bg-bg-alt relative overflow-hidden"
            >
              {/* Top accent glow */}
              <div
                className="absolute top-0 left-0 right-0 h-24 opacity-40"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${category.accentGlow}, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-divider">
                  <h3 className={`text-base font-bold font-serif ${category.color}`}>
                    {category.title}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 border ${category.borderColor} ${category.color} rounded-full opacity-70`}
                  >
                    {category.badge}
                  </span>
                </div>

                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    staggerChildren: 0.06,
                    delayChildren: catIndex * 0.12,
                  }}
                  className="space-y-4"
                >
                  {category.items.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="group/item flex items-center gap-3 hover:translate-x-1 transition-transform duration-300"
                    >
                      <div
                        className={`w-5 h-5 rounded-sm ${category.dotColor}/10 border ${category.borderColor} flex items-center justify-center shrink-0 transition-colors duration-300 group-hover/item:${category.dotColor}/20`}
                      >
                        <Check
                          size={10}
                          weight="bold"
                          className={`${category.color} opacity-60`}
                        />
                      </div>
                      <span className="text-text-sec text-sm font-light group-hover/item:text-text-main transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 p-5 glass-premium flex flex-col md:flex-row items-center justify-between gap-4 rounded-lg shimmer"
        >
          <p className="text-text-sec text-sm font-light">
            <span className="text-green-vibrant font-semibold">
              15 puntos auditados
            </span>{" "}
            · Firma profesional incluida · Entrega en brochure visual para el
            comprador
          </p>
          <a href="#contacto">
            <button className="text-green-vibrant text-sm font-bold border border-green-muted/30 px-5 py-2.5 rounded-md hover:bg-green-subtle hover:border-green-muted/50 transition-all shrink-0">
              Solicitar muestra →
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditDetails;
