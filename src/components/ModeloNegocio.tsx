"use client";

import React from "react";
import { motion } from "framer-motion";
import { Buildings, Storefront, UserCircle, Users } from "@phosphor-icons/react";

const modelos = [
  {
    icon: <Buildings size={28} weight="duotone" />,
    title: "Franquicia / Oficina",
    text: "La oficina implementa S.A.S.A. como servicio estándar para todas las captaciones. Posicionamiento inmediato como referente de calidad.",
    metric: "20+",
    metricLabel: "propiedades/mes",
    color: "text-blue-light",
  },
  {
    icon: <Storefront size={28} weight="duotone" />,
    title: "Broker Independiente",
    text: "El broker ofrece S.A.S.A. como diferencial en su pitch de captación. Ideal para agentes premium.",
    metric: "5-15",
    metricLabel: "propiedades/mes",
    color: "text-green-vibrant",
  },
  {
    icon: <UserCircle size={28} weight="duotone" />,
    title: "Desarrollador",
    text: "Certifica unidades en pozo o terminadas antes de la entrega. Valor agregado para compradores exigentes.",
    metric: "Bulk",
    metricLabel: "por desarrollo",
    color: "text-gold-seal",
  },
  {
    icon: <Users size={28} weight="duotone" />,
    title: "Red / Cámara",
    text: "Una red inmobiliaria adopta S.A.S.A. como estándar para todos sus miembros. Alcance masivo.",
    metric: "100+",
    metricLabel: "agentes",
    color: "text-blue-glow",
  },
];

const ModeloNegocio = () => {
  return (
    <section className="relative py-32 px-6 noise-overlay">
      <div className="absolute inset-0 -z-10 bg-bg-alt" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_30%_80%,rgba(10,77,153,0.1)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-text-ter mb-4">
            Implantación Estratégica
          </p>
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-text-main leading-tight mb-4">
            S.A.S.A. se adapta
            <br />
            <span className="font-light italic text-blue-light/80">
              a su modelo de negocio
            </span>
          </h2>
          <p className="text-text-sec text-base max-w-xl font-light leading-relaxed">
            Ya sea una oficina, un broker independiente o una red completa,
            S.A.S.A. se integra a su operación actual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modelos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="group p-7 bg-bg-main/80 border border-divider rounded-md hover:border-white/10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(10,77,153,0.15)]"
            >
              <div className={`${m.color} mb-6 transition-all duration-500 group-hover:scale-110`}>
                {m.icon}
              </div>
              <h4 className="text-text-main font-bold font-serif text-lg mb-3 tracking-tight">
                {m.title}
              </h4>
              <p className="text-text-sec text-xs leading-relaxed font-light mb-6">
                {m.text}
              </p>

              {/* Metric */}
              <div className="pt-5 border-t border-divider">
                <span
                  className={`text-2xl font-bold font-serif ${m.color} tracking-tight`}
                >
                  {m.metric}
                </span>
                <span className="text-text-ter text-[10px] uppercase tracking-[0.15em] ml-2 font-medium">
                  {m.metricLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModeloNegocio;
