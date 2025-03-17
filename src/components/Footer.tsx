"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import ScaleIn from "./animations/ScaleIn";
import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto">

        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8">
              Concéntrate en hacer crecer tu negocio; deja que Fluyo automatice el acceso a oportunidades reales.
            </h2>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="bg-primary text-white px-8">
                <Link href="/Contact">Contáctanos</Link>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}