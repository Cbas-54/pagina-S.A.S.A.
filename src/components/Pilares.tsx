"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heartbeat, Wheelchair, CheckCircle } from "@phosphor-icons/react";

const Pilares = () => {
  const pilares = [
    {
      title: "Seguridad",
      description: "Confianza técnica certificada. Evaluamos instalaciones eléctricas, sistemas contra incendios y riesgos estructurales.",
      icon: <ShieldCheck size={48} weight="duotone" className="text-accent" />,
      features: ["Tableros Eléctricos", "Detectores de Humo", "Puertas Cortafuego"],
      color: "from-blue-500/10 to-transparent"
    },
    {
      title: "Salud",
      description: "Calidad de vida garantizada. Control de humedad, ventilación cruzada y calidad del aire en cada ambiente.",
      icon: <Heartbeat size={48} weight="duotone" className="text-red-400" />,
      features: ["Humedad Controlada", "Ventilación Natural", "Paredes Saludables"],
      color: "from-red-500/10 to-transparent"
    },
    {
      title: "Accesibilidad",
      description: "Inclusión verificada. Analizamos rampas, ascensores, señalización y facilidad de circulación interna.",
      icon: <Wheelchair size={48} weight="duotone" className="text-green-400" />,
      features: ["Rampas Seguras", "Ascensores Accesibles", "Señalización Clara"],
      color: "from-green-500/10 to-transparent"
    }
  ];

  return (
    <section id="pilares" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Los Tres Pilares del Sello S.A.S.A.</h2>
        <p className="text-white/50 max-w-2xl mx-auto text-lg">
          No vendemos metros cuadrados, vendemos tranquilidad certificada profesionalmente.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pilares.map((pilar, index) => (
          <motion.div
            key={pilar.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-all`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${pilar.color} -z-10`} />
            
            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit">
              {pilar.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
              {pilar.title}
            </h3>
            
            <p className="text-white/60 mb-8 leading-relaxed">
              {pilar.description}
            </p>

            <ul className="space-y-3">
              {pilar.features.map(feat => (
                <li key={feat} className="flex items-center gap-3 text-sm text-white/40">
                  <CheckCircle size={18} weight="bold" className="text-accent/60" />
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pilares;
