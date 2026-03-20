"use client";

import React from "react";
import { motion } from "framer-motion";
import { EnvelopeSimple, Phone, LinkedinLogo, MapPin, PaperPlaneTilt, IdentificationCard } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-accent/[0.02] -z-10 blur-3xl rounded-full" />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 glass rounded-[2rem] border border-white/10"
        >
          <h2 className="text-4xl font-bold text-white mb-4 italic">¿Listos para destacar?</h2>
          <p className="text-white/50 mb-10 text-lg">
            Completa el formulario y un consultor técnico se pondrá en contacto para coordinar una auditoría estratégica de tu cartera inmobiliaria.
          </p>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 ml-4">Nombre Completo</label>
                <input type="text" placeholder="Ej: Juan Pérez" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent/40 text-white placeholder:text-white/20 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 ml-4">Inmobiliaria</label>
                <input type="text" placeholder="Ej: Global Propiedades" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent/40 text-white placeholder:text-white/20 transition-all font-medium" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 ml-4">Email de Contacto</label>
              <input type="email" placeholder="email@empresa.com" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent/40 text-white placeholder:text-white/20 transition-all font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 ml-4">Mensaje (Opcional)</label>
              <textarea placeholder="Cuéntanos sobre tu interés..." rows={4} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent/40 text-white placeholder:text-white/20 transition-all font-medium resize-none" />
            </div>
            
            <button type="submit" className="group w-full py-5 bg-accent text-primary font-black rounded-2xl hover:bg-accent/90 transition-all flex items-center justify-center gap-3 text-lg">
              Enviar Solicitud
              <PaperPlaneTilt size={24} weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Información Directa</h2>
            <p className="text-white/40">Consultas técnicas y comerciales.</p>
          </div>

          <div className="grid gap-6">
            <div className="flex items-center gap-6 p-6 glass rounded-[1.5rem] border-white/5 group hover:bg-white/[0.04] transition-all">
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-accent/10 group-hover:text-accent transition-all text-white/60">
                <EnvelopeSimple size={32} weight="duotone" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-bold text-lg">maxiovelar@hotmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 glass rounded-[1.5rem] border-white/5 group hover:bg-white/[0.04] transition-all">
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-accent/10 group-hover:text-accent transition-all text-white/60">
                <Phone size={32} weight="duotone" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Teléfono</p>
                <p className="text-white font-bold text-lg">+54 9 221 643 0905</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 glass rounded-[1.5rem] border-white/5 group hover:bg-white/[0.04] transition-all">
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-accent/10 group-hover:text-accent transition-all text-white/60">
                <IdentificationCard size={32} weight="duotone" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Responsable Técnico</p>
                <p className="text-white font-bold text-lg">Lic. Maximiliano Martín Ovelar</p>
                <p className="text-white/30 text-xs">Matricula LHS-007462 PBA</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/20 px-4">
             <div className="h-px flex-1 bg-white/10" />
             <div className="text-xs font-bold tracking-widest uppercase italic">Misión S.A.S.A.</div>
             <div className="h-px flex-1 bg-white/10" />
          </div>
          
          <p className="text-center italic text-white/40 text-sm leading-relaxed px-10">
            "Ser el motor de las ventas del mercado inmobiliario argentino, 
            posicionando a las inmobiliarias adheridas como referentes de calidad garantizada."
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
