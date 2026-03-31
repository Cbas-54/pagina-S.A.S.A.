"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Files, 
  MapPin, 
  Camera,
  DeviceMobile,
  Buildings,
  ArrowRight,
  Lightning
} from "@phosphor-icons/react";

const AUDIT_POINTS_DATA = [
  {
    title: "Mapeo Higrotérmico",
    desc: "Uso de cámaras infrarrojas para detectar puentes térmicos y filtraciones no visibles.",
    icon: <Camera size={24} weight="duotone" />
  },
  {
    title: "Peritaje Eléctrico",
    desc: "Certificación de tableros, puesta a tierra y protección magnetotérmica.",
    icon: <DeviceMobile size={24} weight="duotone" />
  },
  {
    title: "Análisis de Estructura",
    desc: "Inspección de fisuras, asentamientos y vicios ocultos en vigas y columnas.",
    icon: <Buildings size={24} weight="duotone" />
  }
];

const AuditDetails = React.memo(() => {
  return (
    <section id="auditoria" className="relative py-24 md:py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        
        {/* Left: Image Side (Conor Style: Large Architecture) */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[800px] rounded-[40px] overflow-hidden group">
          <Image
            src="/images/service-1.png"
            alt="Auditoría SASA"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-blue-mid/10 mix-blend-multiply" />
          
          {/* Overlapping Technical Box (Conor Portfolio Style) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-1/2 -translate-y-1/2 -right-10 lg:-right-20 p-10 md:p-16 bg-[#0A252E] text-white rounded-[40px] shadow-2xl max-w-lg hidden md:block"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Files size={24} className="text-white" />
              </div>
              <span className="font-bold tracking-widest text-[11px] uppercase opacity-60">
                Protocolo Certificado
              </span>
            </div>

            <h3 className="text-4xl font-serif font-bold mb-8 leading-tight">
              Reporte de <br />
              <span className="text-blue-glow font-light italic">Puntos Críticos</span>
            </h3>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Cada inspección concluye con un informe pericial que documenta con rigor fotográfico e instrumental cada métrica de la propiedad.
            </p>

            <div className="space-y-6">
              {AUDIT_POINTS_DATA.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 text-blue-glow">
                    <CheckCircle size={20} weight="fill" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-1">{point.title}</h4>
                    <p className="text-white/50 text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Complementary Content */}
        <div className="lg:col-span-5 lg:pl-32 py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-mid font-bold tracking-[0.3em] uppercase text-[11px] mb-6">
              Rigor Metodológico
            </p>
            <h2 className="text-5xl md:text-7xl font-serif text-text-main font-bold mb-10 leading-tight tracking-tight">
              Donde Otros Ven <br />
              <span className="font-light italic text-blue-mid/80">Estética,</span> <br />
              SASA Ve Datos.
            </h2>
            
            <p className="text-text-sec text-xl leading-relaxed mb-12 opacity-80">
              No permitimos que un acabado superficial oculte fallos estructurales o instalaciones obsoletas. Auditamos para proteger su patrimonio.
            </p>

            <ul className="space-y-8 mb-12">
              <li className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-bg-alt flex items-center justify-center text-blue-mid group-hover:bg-blue-mid group-hover:text-white transition-all duration-500">
                  <MapPin size={24} weight="duotone" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Cobertura Nacional</h4>
                  <p className="text-text-ter text-sm">Inspecciones en todo el territorio.</p>
                </div>
              </li>
              <li className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-bg-alt flex items-center justify-center text-blue-mid group-hover:bg-blue-mid group-hover:text-white transition-all duration-500">
                  <Lightning size={24} weight="duotone" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Reporte Express</h4>
                  <p className="text-text-ter text-sm">Informe preliminar en 24hs hábiles.</p>
                </div>
              </li>
            </ul>

            <button className="flex items-center gap-2 text-sm font-bold text-text-main hover:text-blue-mid transition-colors link-underline">
              Explorar ejemplo de reporte <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-alt -z-10" />
    </section>
  );
});

AuditDetails.displayName = "AuditDetails";

export default AuditDetails;
