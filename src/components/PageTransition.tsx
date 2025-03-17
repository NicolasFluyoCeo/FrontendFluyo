"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Skip animation on initial page load
    setIsFirstRender(false);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Skip animation on first render to prevent animation when site loads
  if (isFirstRender) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
