"use client";

import React from "react";
import { motion } from "framer-motion";

const Estrategia = () => {
  const steps = [
    { title: "Contacto Inicial", desc: "Reunión técnica y comercial para definir alcance." },
    { title: "Inspección Ocular", desc: "Relevamiento in situ por profesionales matriculados." },
    { title: "Auditoría Técnica", desc: "Análisis exhaustivo de Seguridad, Salud y Accesibilidad." },
    { title: "Certificación", desc: "Emisión del Sello S.A.S.A. y brochure de marketing." },
    { title: "Venta Acelerada", desc: "Posicionamiento premium de la propiedad certificada." }
  ];

  return (
    <section className="py-24 px-6 bg-bg-main">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-6">
            Estrategia de Implementación
          </h2>
          <p className="text-text-sec text-lg max-w-2xl mx-auto">
            Un proceso de 5 pasos diseñado para no entorpecer la comercialización, sino potenciarla desde el día 1.
          </p>
        </div>

        <div className="relative border-l-2 border-divider md:border-l-0 md:flex md:justify-between md:items-start ml-4 md:ml-0">
          {/* Animated horizontal line for desktop */}
          <motion.div 
            className="hidden md:block absolute top-[28px] left-0 h-0.5 bg-divider -z-10"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 md:mb-0 relative pl-10 md:pl-0 md:w-48 text-left md:text-center"
            >
              <div className="absolute left-[-29px] md:relative md:left-auto md:mx-auto md:mb-6 w-14 h-14 bg-bg-main rounded-full border-2 border-blue-struct flex items-center justify-center shadow-[0_0_15px_rgba(0,51,102,0.5)] z-10 transition-transform duration-300 hover:scale-110 hover:border-blue-mid">
                <span className="text-green-vibrant font-bold text-xl">{index + 1}</span>
              </div>
              <h4 className="text-text-main font-bold font-serif text-lg mb-2">{step.title}</h4>
              <p className="text-text-sec text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Estrategia;
