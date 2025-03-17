"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  scale?: number;
}

export default function ScaleIn({
  children,
  delay = 0,
  className = "",
  duration = 0.5,
  scale = 0.95,
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: scale,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
