"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

const categories = [
  {
    title: "Seguridad Antisiniestral",
    badge: "05 ítems",
    color: "text-blue-mid",
    borderColor: "border-blue-mid/15",
    dotColor: "bg-blue-mid",
    accentGlow: "rgba(10, 77, 153, 0.05)",
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
    badge: "05 ítems",
    color: "text-green-vibrant",
    borderColor: "border-green-vibrant/20",
    dotColor: "bg-green-vibrant",
    accentGlow: "rgba(102, 204, 51, 0.05)",
    items: [
      "Humedad capilar/cimientos",
      "Ventilación cruzada",
      "Estado de paredes",
      "Calidad del aire",
      "Instalaciones de gas",
    ],
  },
  {
    title: "Accesibilidad Inclusiva",
    badge: "05 ítems",
    color: "text-blue-light",
    borderColor: "border-blue-light/25",
    dotColor: "bg-blue-light",
    accentGlow: "rgba(46, 139, 255, 0.05)",
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
    <section id="auditoria" className="relative py-40 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1200px] h-[1200px] bg-blue-mid/[0.015] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-mid/[0.04] border border-blue-mid/10 mb-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-mid/70">
                Process Audit Standard
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold font-serif text-text-main leading-[1.05] tracking-tight">
              Protocolo de
              <br />
              <span className="font-light italic text-blue-mid/80">Certificación Técnica</span>
            </h2>
          </div>
          <p className="text-text-sec text-lg max-w-sm font-medium leading-relaxed opacity-80 decoration-blue-mid/20 underline underline-offset-8">
            15 puntos críticos auditados bajo normas nacionales por ingenieros matriculados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 rounded-[3rem] overflow-hidden">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.8 }}
              className="p-10 md:p-14 bg-bg-alt/40 border border-divider/10 relative overflow-hidden rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(10,77,153,0.06)] hover:bg-white"
            >
              {/* Subtle top accent */}
              <div
                className="absolute top-0 inset-x-0 h-32 opacity-30"
                style={{
                  background: `linear-gradient(to bottom, ${category.accentGlow}, transparent)`,
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-12 pb-8 border-b border-divider/10">
                  <h3 className={`text-xl font-bold font-serif ${category.color} tracking-tight`}>
                    {category.title}
                  </h3>
                  <span
                    className={`text-[11px] font-black px-3 py-1 border ${category.borderColor} ${category.color} rounded-full bg-white shadow-sm`}
                  >
                    {category.badge}
                  </span>
                </div>

                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    staggerChildren: 0.08,
                    delayChildren: catIndex * 0.2,
                  }}
                  className="space-y-6"
                >
                  {category.items.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="group/item flex items-center gap-4 hover:translate-x-1.5 transition-transform duration-300"
                    >
                      <div
                        className={`w-7 h-7 rounded-lg ${category.dotColor}/[0.06] border ${category.borderColor} flex items-center justify-center shrink-0 transition-all duration-300 group-hover/item:${category.dotColor}/20 group-hover/item:scale-110 shadow-sm`}
                      >
                        <Check
                          size={13}
                          weight="bold"
                          className={`${category.color}`}
                        />
                      </div>
                      <span className="text-text-sec text-[15px] font-medium group-hover/item:text-text-main transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary horizontal card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 glass-premium flex flex-col md:flex-row items-center justify-center gap-6 rounded-[2.5rem] border border-green-vibrant/10 shadow-[0_20px_50px_rgba(102,204,51,0.05)] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-vibrant/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          <div className="flex items-center gap-3">
             <div className="w-2.5 h-2.5 rounded-full bg-green-vibrant animate-pulse" />
             <p className="text-text-main text-base font-bold tracking-tight">
               Firma técnica profesional habilitada en cada reporte.
             </p>
          </div>
          <div className="hidden md:block h-6 w-px bg-divider/10" />
          <p className="text-text-sec text-base font-medium opacity-80">
            Documentación lista para anexar al boleto de compra-venta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditDetails;
