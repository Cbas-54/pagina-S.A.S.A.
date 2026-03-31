"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, House, Buildings, ShieldCheck } from "@phosphor-icons/react";

const services = [
  {
    title: "Inspección de Obra Nueva",
    desc: "Antes de recibir la llave, verificamos que cada detalle cumpla con los estándares de calidad prometidos. Protegemos su inversión desde el día cero.",
    image: "/images/service-1.png",
    icon: <House size={48} weight="duotone" className="text-blue-mid" />
  },
  {
    title: "Auditoría de Reventa",
    desc: "Identificamos vicios ocultos y problemas estructurales en propiedades usadas. Compre con la tranquilidad de un informe pericial completo.",
    image: "/images/service-2.png",
    icon: <Buildings size={48} weight="duotone" className="text-green-vibrant" />
  },
  {
    title: "Certificación de Seguridad",
    desc: "Evaluación integral de sistemas eléctricos, gas e instalaciones críticas. El sello SASA es garantía de habitabilidad segura.",
    image: "/images/service-3.png",
    icon: <ShieldCheck size={48} weight="duotone" className="text-blue-mid" />
  }
];

const ServiceGallery = () => {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#F4F4F5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-mid font-bold tracking-[0.3em] uppercase text-[11px] mb-4"
            >
              Nuestros Servicios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-text-main font-bold tracking-tight leading-tight"
            >
              Soluciones de Auditoría para <br />
              <span className="italic font-light text-blue-mid/80">Propiedades de Prestigio</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 border border-divider"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  {service.icon}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-serif font-bold text-text-main mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-text-sec text-lg leading-relaxed mb-8 opacity-80 min-h-[100px]">
                  {service.desc}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-bold text-text-main group-hover:text-blue-mid transition-colors link-underline">
                  Saber más <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;
