"use client";

import FadeIn from "./animations/FadeIn";
import ScaleIn from "./animations/ScaleIn";
import { motion } from "framer-motion";
import { StaggerChildren, StaggerItem } from "./animations/StaggerChildren";

export default function StepsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            3 pasos para automatizar el acceso a licitaciones
          </h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <StaggerChildren>
            <StaggerItem>
              <div className="mb-8">
                <h3 className="text-primary font-medium mb-2">
                  Paso 1: Fluyo analiza
                </h3>
                <p className="text-lg">
                  Utilizamos técnicas de IA, LLM y embeddings para escanear los pliegos del SECOP.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="mb-8">
                <h3 className="text-primary font-medium mb-2">
                  Paso 2: Fluyo identifica
                </h3>
                <p className="text-lg">
                  Filtramos y seleccionamos las oportunidades relevantes según el perfil de tu empresa.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <h3 className="text-primary font-medium mb-2">
                  Paso 3: Fluyo notifica
                </h3>
                <p className="text-lg">
                  Te avisamos en tiempo real sobre las licitaciones que se ajustan a tus necesidades.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <ScaleIn delay={0.1}>
            <motion.div
              className="bg-secondary p-6 rounded-lg"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-medium mb-4">Tecnología Avanzada</h3>
              <p>
                Aprovechamos LLM y técnicas de IA para analizar grandes volúmenes de datos de forma precisa y eficiente.
              </p>
            </motion.div>
          </ScaleIn>

          <ScaleIn delay={0.2}>
            <motion.div
              className="bg-secondary p-6 rounded-lg"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-medium mb-4">Ahorro de Tiempo</h3>
              <p>
                Optimiza tus procesos y evita la saturación de información irrelevante, permitiéndote concentrarte en lo esencial.
              </p>
            </motion.div>
          </ScaleIn>

          <ScaleIn delay={0.3}>
            <motion.div
              className="bg-secondary p-6 rounded-lg"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-medium mb-4">Oportunidades Reales</h3>
              <p>
                Detectamos y te notificamos sobre las licitaciones que mejor se adaptan a las necesidades de tu negocio.
              </p>
            </motion.div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}