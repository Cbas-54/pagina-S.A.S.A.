"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, Target, TrendUp, UsersThree } from "@phosphor-icons/react";

const ModeloNegocio = () => {
  const models = [
    { icon: <Handshake size={32} />, title: "Alianza Estratégica", text: "Acuerdo marco con la agencia para certificar un % del portfolio." },
    { icon: <Target size={32} />, title: "Propiedades Premium", text: "Focalización en inmuebles que justifican el valor agregado." },
    { icon: <TrendUp size={32} />, title: "Aceleración de ROI", text: "El costo se amortiza con el menor tiempo en el mercado." },
    { icon: <UsersThree size={32} />, title: "Soporte Técnico", text: "Acompañamiento en objeciones técnicas de potenciales compradores." }
  ];

  return (
    <section className="py-24 px-6 bg-bg-alt border-y border-divider">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main text-center mb-16">
          Modelo de Negocio
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {models.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 bg-bg-main border border-divider rounded-sm hover:border-blue-mid transition-colors group"
            >
              <div className="text-green-vibrant mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h4 className="text-text-main font-bold font-serif text-lg mb-3">
                {item.title}
              </h4>
              <p className="text-text-sec text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ModeloNegocio;
