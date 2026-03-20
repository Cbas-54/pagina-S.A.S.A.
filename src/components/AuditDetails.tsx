"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

const AuditDetails = () => {
  const categories = [
    {
      title: "Seguridad Antisiniestral",
      items: ["Extintores", "Detectores de humo", "Red de incendio", "Tableros eléctricos", "Puertas cortafuego"]
    },
    {
      title: "Salud / Habitabilidad",
      items: ["Humedad capilar/cimientos", "Ventilación cruzada", "Estado de paredes", "Calidad del aire", "Instalaciones de gas"]
    },
    {
      title: "Accesibilidad",
      items: ["Rampas de acceso", "Ascensores adaptados", "Escaleras seguras", "Pasillos de circulación", "Señalización clara"]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-24 px-6 bg-bg-main relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-4 border-l-4 border-blue-struct pl-6">
            Checklist de Auditoría Técnica
          </h2>
          <p className="text-text-sec text-lg ml-7">
            Validación integral en tres niveles para garantizar estándares de excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-divider rounded-lg overflow-hidden glass-blue">
          {categories.map((category, catIndex) => (
            <div 
              key={category.title} 
              className={`p-8 ${catIndex !== 2 ? 'border-b md:border-b-0 md:border-r border-divider' : ''}`}
            >
              <h3 className="text-xl font-bold font-serif text-text-main mb-8 tracking-wide">
                {category.title}
              </h3>
              <motion.ul 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ staggerChildren: 0.1, delayChildren: catIndex * 0.2 }}
                className="space-y-5"
              >
                {category.items.map((item, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-green-muted/30 flex items-center justify-center shrink-0">
                      <Check size={12} weight="bold" className="text-green-vibrant" />
                    </div>
                    <span className="text-text-sec text-sm md:text-base font-light">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AuditDetails;
