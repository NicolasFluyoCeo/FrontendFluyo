import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import { StaggerChildren, StaggerItem } from "./animations/StaggerChildren";

export default function Footer() {
  return (
    <footer className="py-16 mt-20">
      <div className="container mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span>Accede a licitaciones con transparencia, </span>
              <span className="text-primary">sin barreras ni corrupción</span>
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col items-center justify-center mb-10">
          <StaggerChildren delay={0.1} staggerDelay={0.05}>
            <div className="flex flex-col items-center space-y-4">
              <StaggerItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Beneficios
                  </Link>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Planes
                  </Link>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Cómo funciona
                  </Link>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Política de privacidad
                  </Link>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/terms-of-service" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Términos y condiciones
                  </Link>
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>

        <FadeIn direction="up" delay={0.3}>
          <div className="text-center text-sm text-muted-foreground">
            <p className="uppercase font-medium">
              Copyright © 2025 Fluyo. Todos los derechos reservados.
            </p>
            <p>Bogotá, Colombia</p>

            <div className="mt-4">
              <motion.button
                className="text-xs underline"
                whileHover={{ color: "hsl(var(--primary))" }}
                transition={{ duration: 0.2 }}
              >
                Actualizar preferencias de cookies
              </motion.button>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}