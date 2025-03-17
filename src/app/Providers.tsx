"use client";

import { AnimationProvider } from "@/contexts/AnimationContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AnimationProvider>
      {children}
    </AnimationProvider>
  );
}
