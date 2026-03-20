"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fire, Lightning, Wind, Stairs, IdentificationBadge, ChartLineUp } from "@phosphor-icons/react";

const AuditDetails = () => {
  const details = [
    {
      title: "Seguridad Antisiniestral",
      icon: <Fire size={32} weight="duotone" className="text-orange-500" />,
      items: ["Extintores", "Detectores de humo", "Red de incendio", "Tableros eléctricos", "Puertas cortafuego"]
    },
    {
      title: "Salud y Calidad de Aire",
      icon: <Wind size={32} weight="duotone" className="text-blue-400" />,
      items: ["Humedad cimiento/capilar", "Ventilación cruzada", "Estado de paredes", "Calidad del aire", "Instalaciones de gas"]
    },
    {
      title: "Accesibilidad e Inclusión",
      icon: <Stairs size={32} weight="duotone" className="text-green-500" />,
      items: ["Rampas de acceso", "Ascensores adaptados", "Escaleras seguras", "Pasillos de circulación", "Señalización clara"]
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 sticky top-32">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Auditoría Técnica Integral</h2>
          <p className="text-white/40 mb-8 leading-relaxed">
            Cada pilar es evaluado exhaustivamente por personal matriculado. No dejamos nada al azar. 
            El resultado es un informe completo que avala la calidad real de la propiedad.
          </p>
          <div className="p-6 glass rounded-2xl border-accent/20">
            <div className="flex items-center gap-3 text-accent font-bold mb-2">
              <ChartLineUp size={24} weight="duotone" />
              Impacto Comercial
            </div>
            <p className="text-white/60 text-sm">
              Las propiedades certificadas por S.A.S.A. se venden un 30% más rápido y con menos objeciones de precio.
            </p>
          </div>
        </div>

        <div className="md:w-2/3 grid gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-start hover:bg-white/[0.04] transition-colors"
            >
              <div className="p-4 rounded-full bg-white/5 w-fit shrink-0">
                {detail.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{detail.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {detail.items.map(item => (
                    <div key={item} className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors cursor-default">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditDetails;
