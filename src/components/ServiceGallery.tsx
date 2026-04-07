"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  HouseLine, 
  Lightning, 
  Plugs, 
  Wind, 
  ThermometerHot,
  Flame,
  CheckCircle,
  Eye,
  MagnifyingGlass,
  IdentificationBadge
} from "@phosphor-icons/react";

// --- HOISTING estático de datos ---
const SERVICES_DATA = [
  {
    icon: <Lightning size={24} weight="duotone" className="text-green-vibrant" />,
    title: "Seguridad Eléctrica",
    desc: "Diagnóstico profundo de tableros, cableados, protecciones (térmicas/disyuntores) y puestas a tierra según normativa vigente.",
    tags: ["Tableros", "Puesta a Tierra"],
    size: "lg"
  },
  {
    icon: <Flame size={24} weight="duotone" className="text-blue-mid" />,
    title: "Instalaciones de Gas",
    desc: "Pruebas de hermeticidad y verificación de ventilaciones reglamentarias para prevenir incidentes críticos.",
    tags: ["Hermeticidad", "Venteos"],
    size: "sm"
  },
  {
    icon: <Wind size={24} weight="duotone" className="text-green-vibrant" />,
    title: "Gestión de Humedad",
    desc: "Identificación de filtraciones y patologías constructivas que afectan la salubridad y estructura del activo.",
    tags: ["Salubridad", "Estructura"],
    size: "sm"
  },
  {
    icon: <ShieldCheck size={24} weight="duotone" className="text-blue-mid" />,
    title: "Medios de Salida",
    desc: "Auditoría de rutas de escape, señalización de emergencia y cumplimiento de anchos mínimos de evacuación.",
    tags: ["Evacuación", "Legal"],
    size: "lg"
  },
  {
    icon: <IdentificationBadge size={24} weight="duotone" className="text-green-vibrant" />,
    title: "Accesibilidad (SASA)",
    desc: "Garantizamos que el activo cumpla con estándares de accesibilidad universal, elevando su valor social y comercial.",
    tags: ["Inclusión", "Plusvalor"],
    size: "md"
  }
];

const HeaderService = React.memo(() => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-10 h-[2px] bg-green-vibrant" />
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-green-vibrant">
          Ecosistema de Certificación
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight"
      >
        Auditorías <br />
        <span className="text-slate-400 font-light italic">de Alto Espectro</span>
      </motion.h2>
    </div>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-slate-400 text-lg max-w-sm font-medium leading-relaxed"
    >
      Un blindaje técnico de 360° que protege al vendedor y enamora al comprador.
    </motion.p>
  </div>
));
HeaderService.displayName = "HeaderService";

// --- MEMOIZATION ---
interface ServiceCardProps {
  service: typeof SERVICES_DATA[0];
  index: number;
}
const ServiceCard = React.memo(({ service, index }: ServiceCardProps) => {
  const isLarge = service.size === "lg";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className={`group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-green-vibrant/40 transition-all duration-500 flex flex-col justify-between overflow-hidden
        ${isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}`}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-inner">
            {service.icon}
          </div>
          <div className="flex gap-2">
            {service.tags.map(tag => (
              <span key={tag} className="text-[9px] font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-white/5 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-green-vibrant transition-colors duration-300 tracking-tight">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {service.desc}
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-widest uppercase mt-auto group-hover:text-green-vibrant/60 transition-colors">
        <CheckCircle size={14} weight="fill" />
        Protocolo S.A.S.A.
      </div>

      {/* Decorative Glow */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-green-vibrant/5 blur-[60px] rounded-full group-hover:bg-green-vibrant/10 transition-all duration-700" />
    </motion.div>
  );
});
ServiceCard.displayName = "ServiceCard";

const ServiceGallery = React.memo(() => {
  return (
    <section 
      id="auditoria" 
      className="relative py-32 px-6 bg-[#0F172A] overflow-hidden" // Slate 900
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 900px' }}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-vibrant/[0.03] blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-mid/[0.03] blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <HeaderService />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

ServiceGallery.displayName = "ServiceGallery";

export default ServiceGallery;
