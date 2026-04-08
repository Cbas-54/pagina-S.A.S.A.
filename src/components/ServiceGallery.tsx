"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Certificate, Megaphone, UsersThree } from "@phosphor-icons/react";

// --- HOISTING estático de datos ---
const ECOSYSTEM_DATA = [
  {
    id: "01",
    category: "Rigor Técnico",
    title: "Auditoría Técnica Integral",
    desc: "Inspección exhaustiva de puntos críticos. Incluye checklist visual profesional entregable al comprador para eliminar objeciones de inmediato.",
    size: "md:col-span-8",
    bg: "bg-[#020C1B]",
    textColor: "text-white",
    icon: <ShieldCheck size={40} weight="duotone" className="text-green-vibrant" />,
    image: "/images/service-obra-nueva.png",
    details: ["Auditoría exhaustiva", "Check list profesional in-situ", "Evaluación profesional objetiva"],
    titleColor: "text-green-vibrant",
    mistColor: "from-blue-mid/[0.45]"
  },
  {
    id: "02",
    category: "Autoridad",
    title: "Identidad y Sello",
    desc: "Certificación oficial con Sello SASA e integración total con la identidad visual de su inmobiliaria.",
    size: "md:col-span-4",
    bg: "bg-white",
    textColor: "text-text-main",
    icon: <Certificate size={40} weight="duotone" className="text-text-main" />,
    image: "/images/service-official-seal.png",
    details: ["Sello oficial matriculado", "Co-branding corporativo"],
    mistColor: "from-blue-mid/[0.15]"
  },
  {
    id: "03",
    category: "Marketing",
    title: "Aceleración Comercial",
    desc: "Brochure comercial optimizado y asistencia al sector de diseño y marketing para la realización de piezas técnicas.",
    size: "md:col-span-6",
    bg: "bg-white",
    textColor: "text-text-main",
    icon: <Megaphone size={40} weight="duotone" className="text-text-main" />,
    image: "/images/service-marketing.png",
    details: ["Brochure premium PDF", "Assets para redes sociales", "Asistencia técnica en diseño"],
    mistColor: "from-green-vibrant/[0.15]"
  },
  {
    id: "04",
    category: "Estrategia",
    title: "Alianza & Respaldo",
    desc: "Capacitación al equipo de ventas, asesoramiento estratégico y actualización permanente ante cambios legislativos.",
    size: "md:col-span-6",
    bg: "bg-[#0A2B1A]", // SASA Deep Green
    textColor: "text-white",
    icon: <UsersThree size={40} weight="duotone" className="text-blue-200" />,
    image: "/images/service-strategy.png",
    details: ["Capacitación de equipos", "Asesoramiento legal/técnico", "Actualización normativa"],
    titleColor: "text-blue-200"
  }
];

// --- HOISTING estático de JSX ---
const GalleryHeader = React.memo(() => (
  <div className="max-w-4xl mx-auto mb-20 text-center flex flex-col items-center">
    <motion.div
       initial={{ opacity: 0, scale: 0.9 }}
       whileInView={{ opacity: 1, scale: 1 }}
       viewport={{ once: true }}
       className="flex items-center gap-3 mb-6"
    >
      <div className="w-10 h-[1px] bg-blue-mid/40" />
      <span className="text-[11px] font-black tracking-[0.4em] uppercase text-blue-mid/60">
        Ecosistema S.A.S.A.
      </span>
      <div className="w-10 h-[1px] bg-blue-mid/40" />
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
      className="text-text-sec text-xl leading-relaxed opacity-70 max-w-2xl"
    >
      Transformamos la gestión técnica en un activo comercial de alto rendimiento, proporcionando un ecosistema completo para asegurar la venta.
    </motion.p>
  </div>
));
GalleryHeader.displayName = "GalleryHeader";

// --- MEMOIZATION ---
interface ServiceCardProps {
  item: typeof ECOSYSTEM_DATA[0];
  idx: number;
}
const ServiceCard = React.memo(({ item, idx }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${item.size} group relative rounded-[40px] p-10 md:p-12 overflow-hidden flex flex-col justify-between transition-all duration-700 hover:shadow-2xl hover:shadow-blue-mid/5 border border-divider ${item.bg} ${item.textColor}`}
    >
      {/* Background Image Layer */}
      {item.image && (
        <div className={`
          absolute inset-0 transition-all duration-1000
          ${item.bg === 'bg-white' 
            ? 'opacity-80 grayscale-0 group-hover:opacity-100' 
            : 'opacity-25 grayscale group-hover:opacity-60 group-hover:grayscale-0'}
          group-hover:scale-105
        `}>
           <Image src={item.image} alt={item.title} fill className="object-cover" />
           {/* Custom Mist Overlay */}
           {item.mistColor && (
             <div className={`absolute inset-0 bg-gradient-to-br ${item.mistColor} to-transparent`} />
           )}
        </div>
      )}

      {/* Main Content Layer */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-12">
           <div className="p-0 transition-transform duration-500 group-hover:scale-110">
              {item.icon}
           </div>
        </div>

        <span className={`text-[10px] font-black tracking-[0.3em] uppercase mb-4 block ${item.bg === 'bg-white' ? 'text-blue-mid/60' : 'text-blue-200/60'}`}>
           {item.category}
        </span>
        
        <h3 className={`text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight leading-tight ${item.titleColor || ''}`}>
           {item.title}
        </h3>
        
        <p className={`text-lg leading-relaxed mb-10 opacity-70 ${item.bg === 'bg-white' ? 'max-w-sm' : ''}`}>
           {item.desc}
        </p>
      </div>

      {/* Footer Details */}
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
  );
});
ServiceCard.displayName = "ServiceCard";

// --- HOISTING estático de decoraciones ---
const BackgroundDecorations = React.memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1400px] h-[500px] bg-white opacity-80 blur-[130px]" />
    <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-mid/[0.03] rounded-full blur-[150px]" />
  </div>
));
BackgroundDecorations.displayName = "BackgroundDecorations";

const ServiceGallery = React.memo(() => {
  return (
    <section 
      id="servicios" 
      className="relative pt-12 pb-12 md:pt-20 md:pb-12 px-6 bg-[#F4F4F5] overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1200px' }}
    >
      <BackgroundDecorations />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <GalleryHeader />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {ECOSYSTEM_DATA.map((item, idx) => (
            <ServiceCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
});

ServiceGallery.displayName = "ServiceGallery";

export default ServiceGallery;
