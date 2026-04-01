"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lightning, 
  Wind, 
  Detective,
  ChartLineUp,
  ArrowRight
} from "@phosphor-icons/react";

const DIFFERENCES_DATA = [
  {
    id: "01",
    title: "Transparencia Absoluta",
    desc: "Ofrecemos un diagnóstico honesto y técnico del activo, permitiendo una negociación basada en realidades físicas verificables, no en supuestos comerciales.",
    detail: "Eliminación de la Incertidumbre",
    icon: <Detective size={32} weight="duotone" className="text-blue-mid" />
  },
  {
    id: "02",
    title: "Celeridad en el Cierre",
    desc: "Acortamos drásticamente los plazos de venta al despejar todas las dudas técnicas del comprador potencial desde el primer contacto.",
    detail: "Aceleración de la Venta",
    icon: <Lightning size={32} weight="duotone" className="text-green-vibrant" />
  },
  {
    id: "03",
    title: "Anulación de Objeciones",
    desc: "El reporte SASA responde preventivamente a las inquietudes comunes sobre seguridad y habitabilidad, desactivando barreras de compra antes de que surjan.",
    detail: "Respuesta Proactiva",
    icon: <Wind size={32} weight="duotone" className="text-blue-light" />
  },
  {
    id: "04",
    title: "Protección Multilateral",
    desc: "Blindamos legamente al vendedor ante futuros reclamos por vicios ocultos y garantizamos la seguridad física y emocional del comprador.",
    detail: "Seguridad Legal y Física",
    icon: <ShieldCheck size={32} weight="duotone" className="text-blue-mid" />
  }
];

const SasaDifference = React.memo(() => {
  return (
    <section id="la-diferencia" className="relative pt-12 pb-16 md:pt-16 md:pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Sticky Title (Lewis Style) */}
        <div className="relative">
          <div className="lg:sticky lg:top-40 lg:self-start pt-4">
            {/* Removed: The SASA Standard */}
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-serif text-text-main font-bold leading-[1.05] tracking-tight mb-8"
            >
              La Diferencia <br />
              <span className="font-light italic text-blue-mid/80 text-6xl md:text-7xl">S.A.S.A.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-sec text-xl font-medium leading-relaxed max-w-md opacity-80"
            >
              Transformamos la incertidumbre técnica en una ventaja competitiva inalcanzable para el mercado tradicional.
            </motion.p>
          </div>
        </div>

        {/* Right Side: Scrolling Content */}
        <div className="space-y-32">
          {DIFFERENCES_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <span className="text-4xl font-serif italic text-blue-mid/20 font-black tracking-tighter">
                  {item.id}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-bg-alt flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm border border-divider">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif text-text-main font-bold mb-6 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-text-sec text-lg md:text-xl leading-relaxed mb-8 opacity-80">
                {item.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 rounded-full bg-blue-mid/[0.04] border border-blue-mid/10 text-[11px] font-bold text-blue-mid uppercase tracking-widest">
                  {item.detail}
                </span>
                {/* Removed: Saber más button */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Atmospheric Background Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-mid/[0.02] rounded-full blur-[150px]" />
      </div>
    </section>
  );
});

SasaDifference.displayName = "SasaDifference";

export default SasaDifference;
