"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type AnimationContextType = {
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <AnimationContext.Provider value={{ isTransitioning, setIsTransitioning }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
