"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

const Beneficios = () => {
  const beneficios = [
    "Aumento en la velocidad de cierre de ventas.",
    "Mayor exclusividad en la captación de propiedades.",
    "Reducción de objeciones por estado técnico del inmueble.",
    "Posicionamiento de la inmobiliaria como referente de calidad.",
    "Diferenciación inmediata frente a la competencia.",
    "Aumento del valor percibido por el comprador final."
  ];

  return (
    <section className="py-24 px-6 bg-bg-alt border-y border-divider">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-mid bg-blue-mid/10 text-blue-light text-xs font-bold uppercase tracking-widest">
            Ventaja Competitiva
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-6">
            Beneficios para la Inmobiliaria
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-blue rounded-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle size={24} weight="fill" className="text-green-mid shrink-0 mt-0.5" />
                <p className="text-text-main text-lg font-light leading-snug">
                  {beneficio}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Beneficios;
