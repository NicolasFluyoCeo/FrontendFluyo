"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.5,
}: FadeInProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 20 };
      case "down":
        return { y: -20 };
      case "left":
        return { x: 20 };
      case "right":
        return { x: -20 };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getDirectionOffset(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
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
