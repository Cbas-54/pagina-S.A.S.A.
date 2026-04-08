"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

interface PilaresProps {
  card1Ref?: React.RefObject<HTMLDivElement | null>;
  card2Ref?: React.RefObject<HTMLDivElement | null>;
  card3Ref?: React.RefObject<HTMLDivElement | null>;
  isDarkTheme?: boolean;
}

const Pilares = ({ card1Ref, card2Ref, card3Ref, isDarkTheme }: PilaresProps) => {
  const pilares = [
    {
      title: "Seguridad Técnica",
      description: "Nuestra prioridad es garantizar la integridad estructural y operativa de cada espacio, aplicando rigurosos protocolos de auditoría.",
      icon: <ShieldCheck size={48} weight="duotone" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      ref: card1Ref
    },
    {
      title: "Salud y Bienestar",
      description: "Auditamos la calidad del aire, iluminación y factores ambientales para asegurar que cada propiedad promueva una vida saludable.",
      icon: <Heart size={48} weight="duotone" />,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      ref: card2Ref
    },
    {
      title: "Accesibilidad Pro",
      description: "Diseñamos y verificamos la eliminación de barreras arquitectónicas, logrando espacios inclusivos para cualquier perfil de usuario.",
      icon: <Wheelchair size={48} weight="duotone" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      ref: card3Ref
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
            className={`text-4xl md:text-6xl font-bold font-serif mb-6 tracking-tight transition-colors duration-700 ${isDarkTheme ? "text-white" : "text-slate-900"}`}
          >
            Nuestros <span className="text-gold-seal italic font-light">PILARES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-xl max-w-2xl mx-auto font-bold transition-colors duration-700 ${isDarkTheme ? "text-white" : "text-slate-900"}`}
          >
            Tres dimensiones fundamentales que definen el estatus y la calidad de una propiedad certificada por S.A.S.A.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pilares.map((pilar, index) => (
            <motion.div
              key={index}
              ref={pilar.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl border transition-all duration-700 group relative overflow-hidden backdrop-blur-sm
                        ${isDarkTheme 
                          ? "bg-white/5 border-white/10 hover:bg-white/10" 
                          : "bg-white border-slate-100 hover:shadow-2xl shadow-slate-200/50"}`}
            >
              {/* Background accent glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-10 transition-colors duration-700
                              ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-rose-500" : "bg-emerald-500"}`} />

              <div className={`mb-8 p-4 rounded-2xl w-max transition-colors duration-700 
                              ${isDarkTheme ? "bg-white/10 text-white" : `${pilar.bgColor} ${pilar.color}`}`}>
                {pilar.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 tracking-tight transition-colors duration-700 ${isDarkTheme ? "text-white" : "text-slate-900"}`}>
                {pilar.title}
              </h3>
              
              <p className={`leading-relaxed transition-colors duration-700 ${isDarkTheme ? "text-white/60" : "text-slate-600"}`}>
                {pilar.description}
              </p>

              <div className="mt-8 flex items-center gap-2 group/btn cursor-pointer">
                <span className={`text-sm font-bold uppercase tracking-widest transition-colors duration-700 ${isDarkTheme ? "text-gold-seal" : "text-slate-900"}`}>
                  Ver detalles
                </span>
                <div className={`w-8 h-[1px] transition-all duration-300 group-hover/btn:w-12 ${isDarkTheme ? "bg-gold-seal" : "bg-slate-300"}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pilares;
