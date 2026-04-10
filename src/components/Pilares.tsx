"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

const Pilares = ({ isDarkTheme = true }: { isDarkTheme?: boolean }) => {
  const pilares = [
    {
      title: "Seguridad",
      description: "Auditoría de sistema antisiniestral.",
      icon: <ShieldCheck size={48} weight="duotone" className="text-blue-500" />
    },
    {
      title: "Salud",
      description: "Detección de vicios ocultos de habitabilidad.",
      icon: <Heart size={48} weight="duotone" className="text-green-500" />
    },
    {
      title: "Accesibilidad",
      description: "Auditoría técnica para el entorno accesible e inclusivo.",
      icon: <Wheelchair size={48} weight="duotone" className="text-cyan-500" />
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-bold font-serif mb-6 tracking-tight text-white`}
          >
            Nuestros <span className="text-gold-seal italic font-bold">TRES PILARES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-xl max-w-2xl mx-auto font-bold text-white`}
          >
            Tres aspectos escenciales que definen el estatus y la calidad de una propiedad certificada por S.A.S.A
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pilares.map((pilar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl border transition-all duration-300 group relative overflow-hidden backdrop-blur-sm
                        bg-white/5 border-gold-seal/30 hover:border-gold-seal/60 hover:bg-white/10`}
            >
              {/* Background accent glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-10 transition-colors duration-300
                              ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-green-500" : "bg-cyan-500"}`} />

              <div className={`mb-8 p-4 rounded-2xl w-max transition-all duration-300 bg-white/10`}>
                {pilar.icon}
              </div>

              <h3 className={`text-2xl font-bold mb-4 tracking-tight transition-colors duration-300 text-gold-seal`}>
                {pilar.title}
              </h3>

              <p className={`leading-relaxed transition-colors duration-300 text-white/70`}>
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pilares;
