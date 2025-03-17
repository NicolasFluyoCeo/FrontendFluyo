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
          <h2 className="text-3xl md:text-4xl text-center mb-12">3 Pasos para Automatizar el Acceso a Licitaciones</h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <StaggerChildren>
            <StaggerItem>
              <div className="mb-8">
                <h3 className="text-primary font-medium mb-2">Paso 1: Fluyo analiza</h3>
                <p className="text-lg">Utilizamos técnicas de IA, LLM y embeddings para escanear los pliegos del SECOP.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="mb-8">
                <h3 className="text-primary font-medium mb-2">Paso 2: Fluyo identifica</h3>
                <p className="text-lg">Filtramos y seleccionamos las oportunidades relevantes según el perfil de tu empresa.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <h3 className="text-primary font-medium mb-2">Paso 3: Fluyo notifica</h3>
                <p className="text-lg">Te avisamos en tiempo real sobre las licitaciones que se ajustan a tus necesidades.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>


      </div>
    </section>
  );
}
