"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { GLOBAL_REVEAL_BUFFER } from "@/constants/animations";

interface RevealContextType {
  isReady: boolean;
}

const RevealContext = createContext<RevealContextType>({ isReady: false });

export const RevealProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for hydration and a small buffer for smooth startup
    const timer = setTimeout(() => {
      setIsReady(true);
    }, GLOBAL_REVEAL_BUFFER);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RevealContext.Provider value={{ isReady }}>
      {children}
    </RevealContext.Provider>
  );
};

export const useReveal = () => useContext(RevealContext);
