"use client";

import FadeIn from "./animations/FadeIn";
import { StaggerChildren, StaggerItem } from "./animations/StaggerChildren";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about-us" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <h3 className="text-xl text-primary mb-4">¿Qué es Fluyo y cómo transforma el proceso?</h3>
              <h2 className="text-3xl md:text-4xl mb-6">El Futuro de la Contratación Pública</h2>
              <p className="text-lg leading-relaxed">
                Fluyo es la plataforma digital que revoluciona el acceso a las licitaciones públicas. Con información clara y actualizada, derribamos las barreras del sistema tradicional, permitiendo a las empresas descubrir y postular a oportunidades reales de manera transparente y segura.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren delay={0.2} staggerDelay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <StaggerItem>
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-sm border"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="font-medium mb-2">Acceso Simplificado</h3>
                  <p className="text-sm">Consulta y postula a licitaciones de forma intuitiva.</p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-sm border"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="font-medium mb-2">Transparencia Total</h3>
                  <p className="text-sm">Accede a información veraz y actualizada en un solo lugar.</p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-sm border"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="font-medium mb-2">Asesoría Experta</h3>
                  <p className="text-sm">Soporte personalizado para navegar en el sistema de contrataciones.</p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-sm border"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="font-medium mb-2">Seguridad y Confianza</h3>
                  <p className="text-sm">Procesos claros y confiables para combatir la corrupción.</p>
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}