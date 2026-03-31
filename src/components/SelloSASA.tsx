"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SealCheck, Check, ShieldCheck, Heartbeat, Users } from "@phosphor-icons/react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const FEATURES_DATA = [
  "Firmado por profesional matriculado con responsabilidad civil",
  "Resultado entregado en brochure visual para el comprador",
  "Código QR verificable por cualquier interesado",
  "Válido como documentación complementaria en escritura",
  "Reproduce la tranquilidad técnica que el comprador necesita",
];

const SelloSASA = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);

  return (
    <section id="sello" className="relative py-32 md:py-40 px-6 bg-[#0A0A0A] overflow-hidden border-t border-gold-seal/5">
      {/* Top transition glow (Gold Leak) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gold-seal/30 to-transparent blur-[1px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-24 bg-gold-seal/5 blur-[80px] -translate-y-1/2 rounded-full" />
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(201,169,110,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-20 lg:gap-32 items-center relative" ref={containerRef}>
        {/* Animated Beams (Desktop only for clarity) */}
        <div className="hidden lg:block">
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={item1Ref}
            toRef={sealRef}
            duration={3}
            curvature={20}
            pathColor="rgba(201,169,110,0.2)"
            gradientStartColor="#C9A96E"
            gradientStopColor="#C9A96E"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={item2Ref}
            toRef={sealRef}
            duration={3}
            delay={1}
            curvature={0}
            pathColor="rgba(201,169,110,0.2)"
            gradientStartColor="#C9A96E"
            gradientStopColor="#C9A96E"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={item3Ref}
            toRef={sealRef}
            duration={3}
            delay={0.5}
            curvature={-20}
            pathColor="rgba(201,169,110,0.2)"
            gradientStartColor="#C9A96E"
            gradientStopColor="#C9A96E"
          />
        </div>
        {/* Left: Seal Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative flex items-center justify-center lg:justify-start"
        >
          <div className="relative group">
            {/* Ambient gold glow */}
            <div className="absolute inset-0 w-80 h-80 bg-gold-seal/10 rounded-full blur-[120px] -z-10 mx-auto group-hover:bg-gold-seal/20 transition-colors duration-1000" />

            {/* Decorative orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-60px] rounded-full border border-gold-seal/10 border-dashed"
            />

            {/* Main Outer Seal Container */}
            <motion.div
               ref={sealRef}
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-20"
            >
              {/* Outer textured ring */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-gold-seal/30 flex items-center justify-center bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_40px_rgba(201,169,110,0.1)] backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none invert" />
                
                {/* Middle ring with inner shadow */}
                <div className="w-[85%] h-[85%] rounded-full border border-gold-seal/20 flex items-center justify-center shadow-2xl relative bg-gradient-to-br from-white/5 to-transparent">
                  
                  {/* Seal Center Card */}
                  <div className="flex flex-col items-center gap-4 relative z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold-seal/30 blur-2xl rounded-full" />
                      <SealCheck size={88} weight="fill" className="text-gold-seal relative drop-shadow-[0_8px_25px_rgba(201,169,110,0.5)] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="text-center">
                      <span className="block text-4xl font-black tracking-[0.25em] text-gold-seal font-serif mb-1 uppercase">
                        S.A.S.A.
                      </span>
                      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-seal/50 to-transparent mx-auto mb-2" />
                      <span className="block text-[12px] tracking-[0.4em] text-white/60 uppercase font-black">
                        Ingeniería Preventiva
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-[#111A28] px-8 py-4 rounded-2xl shadow-2xl border border-gold-seal/20 flex items-center gap-4 z-20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white/90">Status: Certificado</span>
              </motion.div>
            </motion.div>

            {/* Floating particles */}
            {[0, 120, 240].map((deg, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -40, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="absolute w-2 h-2 bg-gold-seal/40 rounded-full blur-[1px]"
                style={{
                  top: `${40 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-seal/[0.08] border border-gold-seal/30 mb-10 w-fit shadow-lg backdrop-blur-md">
            <span className="text-[11px] font-black tracking-[0.35em] uppercase text-gold-seal">
              Technical Authority Seal
            </span>
          </div>

          <h2 className="text-5xl md:text-8xl font-bold font-serif text-white mb-12 leading-[1.05] tracking-tight">
            Transmita el máximo<br />
            <span className="text-gold-seal italic font-light drop-shadow-md">
              Estatus Técnico
            </span>
          </h2>

          <p className="text-white/60 text-xl leading-relaxed font-medium mb-16 max-w-xl border-l-[3px] border-gold-seal/30 pl-8 italic">
            El reporte SASA es una declaración de fe técnica. No solo informa, sino que legitima el valor de su propiedad ante los ojos del comprador más exigente.
          </p>

          <div className="grid gap-6">
            {[
              { text: "Seguridad Antisiniestral Certificada", icon: <ShieldCheck size={20} weight="bold" />, ref: item1Ref },
              { text: "Habitabilidad y Salud Ambiental", icon: <Heartbeat size={20} weight="bold" />, ref: item2Ref },
              { text: "Accesibilidad e Inclusión Real", icon: <Users size={20} weight="bold" />, ref: item3Ref },
            ].map((item, i) => (
              <motion.div
                key={i}
                ref={item.ref}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-center gap-6 group/item bg-white/[0.03] p-6 rounded-3xl border border-white/5 hover:border-gold-seal/20 hover:bg-white/[0.07] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl border border-gold-seal/30 bg-gold-seal/5 flex items-center justify-center shrink-0 shadow-inner group-hover/item:scale-110 transition-transform relative z-30">
                  <div className="text-gold-seal">{item.icon}</div>
                </div>
                <span className="text-white/70 text-lg font-bold group-hover/item:text-white transition-colors tracking-tight">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex items-center gap-5 p-8 rounded-[2.5rem] bg-gold-seal/[0.05] border border-gold-seal/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-seal/5 to-transparent pointer-events-none" />
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-seal/30 shadow-2xl relative z-10">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Professional" alt="Signature" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <p className="text-[11px] font-black text-gold-seal tracking-widest uppercase mb-1">Validación por IA & Humano</p>
              <p className="text-base font-medium text-white/50 italic leading-snug">"Protocolo de inspección estandarizado bajo normas IRAM"</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

SelloSASA.displayName = "SelloSASA";

export default SelloSASA;
