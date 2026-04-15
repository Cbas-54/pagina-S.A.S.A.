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
                    className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] group"
                >
                    <video 
                        src="/Video_SASA.mp4" 
                        controls 
                        className="w-full h-full object-cover"
                        playsInline
                        preload="metadata"
                    >
                        <source src="/Video_SASA.mp4" type="video/mp4" />
                        Tu navegador no admite el elemento video.
                    </video>

                </motion.div>
            </div>
        </section>
    );
};

export default VideoDemo;
