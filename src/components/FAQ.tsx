"use client";

import React from "react";
import FadeIn from "./animations/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "¿Cómo se actualiza automáticamente Fluyo cuando hay cambios en los pliegos?",
    answer: "Fluyo utiliza inteligencia artificial para monitorear constantemente el SECOP y detectar actualizaciones en los pliegos. Cuando se identifican cambios, nuestro sistema actualiza la información y notifica a los usuarios de manera automática, garantizando acceso a datos siempre actualizados sin intervención manual."
  },

 

  {
    question: "¿Cómo mide Fluyo el éxito?",
    answer: "Fluyo ofrece análisis detallados que incluyen métricas como la detección de oportunidades, la reducción de errores en la contratación y la optimización en la toma de decisiones. Estas métricas te permiten evaluar el retorno de inversión y mejorar continuamente tu estrategia en licitaciones públicas."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Resuelve tus dudas sobre cómo Fluyo puede transformar el acceso a licitaciones públicas en tu empresa.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-lg mb-2">¿Aún tienes preguntas?</p>
              <a
                href="/Contact"
                className="text-primary font-medium hover:underline"
              >
                Contacta a nuestro equipo de soporte →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}