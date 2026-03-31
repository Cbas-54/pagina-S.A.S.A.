"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendUp, Timer, CurrencyDollar, CheckCircle } from "@phosphor-icons/react";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
}

function AnimatedCounter({
  value,
  suffix,
  prefix = "",
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = (value / duration) * step;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const STATS_DATA: StatItem[] = [
  {
    value: 70,
    suffix: "%",
    label: "Menos Objeciones",
    sublabel: "técnicas resueltas preventivamente",
    icon: <CheckCircle size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    value: 3,
    suffix: "x",
    label: "Más Velocidad",
    sublabel: "en el tiempo promedio de cierre",
    icon: <Timer size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    value: 15,
    suffix: "%",
    prefix: "+",
    label: "Valor Percibido",
    sublabel: "de venta superior al mercado",
    icon: <CurrencyDollar size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    value: 100,
    suffix: "%",
    label: "Rigurosidad",
    sublabel: "certificada por matriculados",
    icon: <TrendUp size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
];

const Stats = React.memo(() => {
  return (
    <section id="stats" className="relative z-20 pt-32 pb-40 px-6 bg-[#0A0A0A] overflow-hidden">
      {/* Subtle Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-seal/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-mid/5 rounded-full blur-[150px] translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-gold-seal/40 transition-all duration-700 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] cursor-default"
            >
              <div className={`${stat.color} mb-8 p-6 rounded-2xl bg-white/[0.05] border border-white/5 group-hover:scale-110 group-hover:bg-gold-seal/10 group-hover:border-gold-seal/20 transition-all duration-500 relative`}>
                {/* Icon Inner Glow */}
                <div className="absolute inset-0 bg-gold-seal/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                <div className="relative z-10">{stat.icon}</div>
              </div>
              
              <h3 className="text-6xl md:text-7xl font-bold font-serif text-white leading-none mb-6 tracking-tighter">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </h3>
              
              <div className="space-y-2">
                <p className="text-gold-seal/90 font-bold text-[11px] uppercase tracking-[0.25em]">
                  {stat.label}
                </p>
                <p className="text-white/40 text-sm leading-relaxed max-w-[200px] font-medium italic">
                  {stat.sublabel}
                </p>
              </div>

              {/* Decorative Glass Light Leak */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = "Stats";

export default Stats;
