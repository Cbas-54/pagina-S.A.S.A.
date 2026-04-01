"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Certificate, Megaphone, UsersThree } from "@phosphor-icons/react";

const ECOSYSTEM_DATA = [
  {
    id: "01",
    category: "Rigor Técnico",
    title: "Auditoría Técnica Integral",
    desc: "Inspección exhaustiva de 48 a 72 puntos críticos. Incluye checklist visual profesional entregable al comprador para eliminar objeciones de inmediato.",
    size: "md:col-span-8",
    bg: "bg-[#020C1B]",
    textColor: "text-white",
    icon: <ShieldCheck size={40} weight="duotone" className="text-blue-200" />,
    image: "/images/service-obra-nueva.png",
    details: ["48-72 puntos auditados", "Checklist visual profesional", "Rigor pericial independiente"]
  },
  {
    id: "02",
    category: "Autoridad",
    title: "Sello & Identidad",
    desc: "Certificación oficial con Sello SASA e integración total con la identidad visual de su inmobiliaria.",
    size: "md:col-span-4",
    bg: "bg-white",
    textColor: "text-text-main",
    icon: <Certificate size={40} weight="duotone" className="text-blue-mid" />,
    image: "/images/service-official-seal.png",
    details: ["Sello oficial matriculado", "Co-branding corporativo"]
  },
  {
    id: "03",
    category: "Marketing",
    title: "Aceleración Comercial",
    desc: "Brochure comercial optimizado para portales y materiales de marketing listos para usar en redes sociales.",
    size: "md:col-span-6",
    bg: "bg-white",
    textColor: "text-text-main",
    icon: <Megaphone size={40} weight="duotone" className="text-blue-mid" />,
    image: "/images/service-marketing.png",
    details: ["Brochure premium PDF", "Assets para redes sociales", "Diferenciación en portales"]
  },
  {
    id: "04",
    category: "Estrategia",
    title: "Alianza & Respaldo",
    desc: "Capacitación al equipo de ventas, asesoramiento estratégico y actualización permanente ante cambios legislativos.",
    size: "md:col-span-6",
    bg: "bg-[#0A2B1A]", // SASA Deep Green
    textColor: "text-white",
    icon: <UsersThree size={40} weight="duotone" className="text-green-200" />,
    image: "/images/service-strategy.png",
    details: ["Capacitación de equipos", "Asesoramiento legal/técnico", "Actualización normativa"]
  }
];

const ServiceGallery = React.memo(() => {
  return (
    <section id="servicios" className="py-24 md:py-32 px-6 bg-[#F4F4F5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Seccional */}
        <div className="max-w-3xl mb-20">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-blue-mid/40" />
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-blue-mid/60">
              Ecosistema S.A.S.A.
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif text-text-main font-bold tracking-tight leading-[1.1] mb-8"
          >
            Servicios Incluidos en <br />
            <span className="italic font-light text-blue-mid/80">Cada Contrato Oficial</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-sec text-xl leading-relaxed opacity-70 border-l-2 border-blue-mid/20 pl-8"
          >
            Transformamos la gestión técnica en un activo comercial de alto rendimiento, proporcionando un ecosistema completo para asegurar la venta.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {ECOSYSTEM_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`${item.size} group relative rounded-[40px] p-10 md:p-12 overflow-hidden flex flex-col justify-between transition-all duration-700 hover:shadow-2xl hover:shadow-blue-mid/5 border border-divider ${item.bg} ${item.textColor}`}
            >
              {/* Background Image para la tarjeta principal */}
              {item.image && (
                <div className="absolute inset-0 opacity-10 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000">
                   <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                   <div className={`p-4 rounded-2xl ${item.bg === 'bg-white' ? 'bg-bg-alt' : 'bg-white/10'} backdrop-blur-sm border border-white/5`}>
                      {item.icon}
                   </div>
                   <span className="text-4xl font-serif font-black italic opacity-10 tracking-tighter">
                      {item.id}
                   </span>
                </div>

                <span className={`text-[10px] font-black tracking-[0.3em] uppercase mb-4 block ${item.bg === 'bg-white' ? 'text-blue-mid/60' : 'text-blue-200/60'}`}>
                   {item.category}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight leading-tight">
                   {item.title}
                </h3>
                
                <p className={`text-lg leading-relaxed mb-10 opacity-70 ${item.bg === 'bg-white' ? 'max-w-sm' : ''}`}>
                   {item.desc}
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-current/10 flex flex-wrap gap-3">
                 {item.details.map((detail, i) => (
                    <span 
                      key={i} 
                      className={`text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border ${item.bg === 'bg-white' ? 'border-divider text-text-sec' : 'border-white/10 text-white/60'}`}
                    >
                       {detail}
                    </span>
                 ))}
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute -bottom-4 -right-4 opacity-5 transition-transform duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4">
                 <ArrowRight size={120} weight="thin" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServiceGallery.displayName = "ServiceGallery";

export default ServiceGallery;
