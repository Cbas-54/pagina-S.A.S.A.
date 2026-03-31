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
    icon: <CheckCircle size={28} weight="duotone" />,
    color: "text-green-vibrant",
  },
  {
    value: 3,
    suffix: "x",
    label: "Más Velocidad",
    sublabel: "en el tiempo promedio de cierre",
    icon: <Timer size={28} weight="duotone" />,
    color: "text-blue-mid",
  },
  {
    value: 15,
    suffix: "%",
    prefix: "+",
    label: "Valor Percibido",
    sublabel: "de venta superior al mercado",
    icon: <CurrencyDollar size={28} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    value: 100,
    suffix: "%",
    label: "Rigurosidad",
    sublabel: "certificada por matriculados",
    icon: <TrendUp size={28} weight="duotone" />,
    color: "text-green-mid",
  },
];

const Stats = React.memo(() => {
  return (
    <section id="stats" className="relative z-20 pt-24 pb-12 px-6 bg-white border-y border-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className={`${stat.color} mb-8 bg-bg-alt p-5 rounded-2xl border border-divider group-hover:scale-110 group-hover:shadow-md transition-all duration-500`}>
                {stat.icon}
              </div>
              
              <h3 className="text-5xl md:text-6xl font-bold font-serif text-text-main leading-none mb-4 tracking-tighter">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </h3>
              
              <p className="text-text-main font-bold text-xs mb-2 uppercase tracking-[0.2em] opacity-80">
                {stat.label}
              </p>
              <p className="text-text-ter text-[13px] leading-relaxed max-w-[180px] font-medium">
                {stat.sublabel}
              </p>
              
              {/* Divider for mobile */}
              {i < STATS_DATA.length - 1 ? (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-divider hidden lg:block" />
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = "Stats";

export default Stats;
