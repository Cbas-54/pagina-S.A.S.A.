"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "@phosphor-icons/react";

const VideoDemo = () => {
    return (
        <section id="demo" className="relative py-24 bg-[#0A0A0A] overflow-hidden">
            {/* Background elements to match the dark theme flow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight"
                    >
                        S.A.S.A. <span className="font-light italic text-gold-seal drop-shadow-[0_0_15px_rgba(201,169,110,0.3)]">en Acción</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-xl max-w-2xl mx-auto font-medium"
                    >
                        Descubra cómo nuestra metodología transforma la seguridad técnica en una herramienta estratégica de venta.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] group cursor-pointer"
                >
                    {/* Placeholder Background (Simulated Video) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0D0D0D] to-[#1A1A1A] flex items-center justify-center">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        
                        {/* Play button with premium gold glow on hover */}
                        <div className="relative group/btn">
                            <div className="absolute inset-0 bg-gold-seal/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Play size={90} weight="fill" className="text-white/20 group-hover:text-gold-seal transition-all duration-500 z-10 scale-100 group-hover:scale-110" />
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

                    <div className="absolute bottom-10 left-10 z-10 flex items-center gap-4">
                        <div className="w-12 h-px bg-gold-seal/50" />
                        <p className="text-gold-seal/60 text-xs font-black tracking-[0.3em] uppercase">Video Demostrativo IA (Próximamente)</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoDemo;
