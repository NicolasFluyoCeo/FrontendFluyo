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
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-center mb-10">Precios Transparentes</h2>
        </FadeIn>

        <ScaleIn>
          <motion.div
            className="max-w-2xl mx-auto bg-white rounded-lg border p-8 mb-12"
            whileHover={{
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-2xl font-medium mb-6">Calculadora</h3>

            <p className="text-lg mb-8">
              Fluyo cobra por cada acción automatizada: desde identificar una oportunidad en el SECOP hasta filtrar información irrelevante. Todo a partir de <strong>$0.30</strong> por acción.
            </p>

            <p className="text-lg mb-8">
              Ya seas una gran empresa o una startup emergente, el precio es el mismo para todos.
            </p>

            <p className="text-lg font-medium">
              Sin vueltas. Así es Fluyo.
            </p>
          </motion.div>
        </ScaleIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8">
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