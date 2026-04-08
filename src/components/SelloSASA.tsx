"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Check } from "@phosphor-icons/react";

interface SelloSASAProps {
  onThemeChange: (isDark: boolean) => void;
}

const SelloSASA = React.memo(({ onThemeChange }: SelloSASAProps) => {
  const titleRef = React.useRef(null);

  // Detecta si el título ha asomado por la parte inferior
  // margin: "10000px 0px 0px 0px" significa:
  // - Se activa en cuanto el elemento toca el borde inferior del viewport (0px)
  // - Permanece activo incluso si el elemento sube muchísimo por encima del viewport (10000px)
  // - Se desactiva solo si el elemento baja por debajo del borde inferior del viewport (scroll up)
  const isExcelenceActive = useInView(titleRef, {
    margin: "10000px 0px 0px 0px"
  });

  React.useEffect(() => {
    onThemeChange(isExcelenceActive);
  }, [isExcelenceActive, onThemeChange]);

  return (
    <section id="sello" className="relative pt-24 md:pt-32 pb-24 md:pb-32 px-6 overflow-hidden">
      {/* ── BACKGROUND WITH OVERLAY AND BLUE GLOW ── */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        {/* Image kept at very low opacity to remain "underneath" */}
        <Image
          src="/edificio gemini corte.png"
          alt="Fondo Excelencia"
          fill
          priority
          className="object-cover opacity-20 filter grayscale brightness-50"
        />

        {/* Blue Glow (Resplandor Azul) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

        {/* Dark overlay to ensure gradients are covered and match the bottom black */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-30">
        <div className="text-center">
          {/* Content: Autoridad Técnica */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2
                ref={titleRef}
                className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tight leading-tight drop-shadow-2xl"
              >
                La Síntesis de<br />
                <span className="text-gold-seal italic font-light uppercase tracking-wide drop-shadow-[0_0_20px_rgba(201,169,110,0.4)]">LA EXCELENCIA</span>
              </h2>
              <p className="text-white text-xl md:text-2xl leading-relaxed italic max-w-2xl mx-auto drop-shadow-md">
                "El sello S.A.S.A. no es solo una marca, es la representación visual de que su propiedad ha superado la auditoría más distinguida del mercado."
              </p>
            </div>

            <div className="grid gap-6 max-w-2xl mx-auto">
              {[
                "Propiedad certificada con el Sello S.A.S.A.",
                "Apta para comercialización segura, saludable e inclusiva",
                "Cumple con estándares profesionales de calidad habitacional",
                "Aporta valor agregado verificable y auditable",
                "Minimiza la recurrencia de consultas técnicas"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-gold-seal/30 transition-all text-left">
                  <div className="w-8 h-8 rounded-full bg-gold-seal/20 flex items-center justify-center text-gold-seal shrink-0">
                    <Check size={16} weight="bold" />
                  </div>
                  <span className="text-white/90 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="inline-block p-8 rounded-3xl bg-gold-seal/[0.15] backdrop-blur-xl border border-gold-seal/30 shadow-2xl">
              <div>
                <p className="text-[10px] font-black text-gold-seal uppercase tracking-widest mb-1">Validación por Auditoría</p>
                <p className="text-white/80 text-lg italic">"Respaldamos la calidad técnica en cada metro cuadrado."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

SelloSASA.displayName = "SelloSASA";

export default SelloSASA;
