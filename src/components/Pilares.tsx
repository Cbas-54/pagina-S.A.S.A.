"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

const Pilares = () => {
  const pilares = [
    {
      title: "Seguridad",
      description: "Evaluación rigurosa de instalaciones eléctricas, sistemas contra incendios y riesgos estructurales ocultos.",
      icon: <ShieldCheck size={48} weight="duotone" className="text-blue-light" />
    },
    {
      title: "Salud",
      description: "Control exhaustivo de humedad, ventilación cruzada y calidad del aire para una habitabilidad óptima.",
      icon: <Heart size={48} weight="duotone" className="text-blue-light" />
    },
    {
      title: "Accesibilidad",
      description: "Análisis de rampas, ascensores y movilidad interna garantizando una inclusión real y verificada.",
      icon: <Wheelchair size={48} weight="duotone" className="text-blue-light" />
    }
  ];

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="pilares" className="py-24 px-6 bg-bg-main relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-6">
            Los Tres Pilares del Sello S.A.S.A.
          </h2>
          <p className="text-text-sec text-lg max-w-2xl mx-auto">
            Garantizamos la tranquilidad de sus clientes certificando la calidad de 
            cada propiedad a través de un proceso de auditoría profesional.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pilares.map((pilar) => (
            <motion.div
              key={pilar.title}
              variants={cardVariants}
              className="p-10 bg-bg-alt border border-divider rounded-sm transition-all duration-300 hover:scale-[1.03] hover:border-blue-mid hover:shadow-[0_0_30px_rgba(10,77,153,0.3)] relative overflow-hidden group"
            >
              <div className="mb-8">
                {pilar.icon}
              </div>
              <h3 className="text-2xl font-serif text-text-main mb-4 group-hover:text-blue-light transition-colors">
                {pilar.title}
              </h3>
              <p className="text-text-sec leading-relaxed">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Pilares;
