"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-white border border-divider/10 w-[40rem] rounded-[2rem] p-10 relative overflow-hidden shadow-2xl shadow-blue-mid/5",
        className
      )}
    >
      {children}

      <div className="h-48 relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-white z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "0 10px 30px rgba(102, 204, 51, 0.2)", // soft green glow
            }}
            className="text-2xl sm:text-[3.5rem] py-10 font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-vibrant to-green-dark leading-none"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-48 w-[4px] bg-gradient-to-b from-transparent via-green-vibrant to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-2xl sm:text-[3.5rem] py-10 font-bold bg-clip-text text-transparent bg-text-ter/20 leading-none">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-text-main font-serif text-xl md:text-3xl font-bold mb-3 tracking-tight", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-text-sec text-sm md:text-base font-medium tracking-wide leading-relaxed", className)}>{children}</p>
  );
};

const Stars = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stars = React.useMemo(() => {
    if (!isMounted) return [];
    return [...Array(60)].map((_, i) => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 15,
      opacity: Math.random() * 0.4 + 0.1,
      moveX: Math.random() * 2 - 1,
      moveY: Math.random() * 2 - 1,
    }));
  }, [isMounted]);

  if (!isMounted) {
    return <div className="absolute inset-0" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${star.top}% + ${star.moveY}px)`,
            left: `calc(${star.left}% + ${star.moveX}px)`,
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "var(--green-vibrant)", 
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block blur-[0.5px]"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
