"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    const videoElement = document.getElementById('hero-video') as HTMLVideoElement;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsVideoPlaying(true);
      } else {
        videoElement.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn delay={0.2}>
            <h1 className="text-primary mb-6">
              Fluyo: Transparencia<br />
              en Contrataciones<br />
              Públicas
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl mb-10">
              La plataforma que derriba barreras en el acceso a licitaciones públicas. Descubre oportunidades reales y participa en un proceso transparente, libre de corrupción.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild size="lg" className="bg-primary text-white px-8">
                  <Link href="/Contact">Contactar a un humano</Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8">
                  <Link href="/#about-us">Ver la Magia</Link>
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.8} direction="up">
          <motion.div
            className="relative max-w-xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Video content */}
            <video
              id="hero-video"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/tech-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary/20 to-transparent"></div>

            {/* Video control button */}
            <motion.button
              onClick={toggleVideo}
              className="absolute inset-0 flex items-center justify-center z-10 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-white/90 transition-colors duration-300"
                initial={{ opacity: 0.7 }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                {isVideoPlaying ? (
                  <div className="w-10 h-10 flex items-center justify-center">
                    <div className="w-3 h-10 bg-primary mx-0.5 rounded-sm"></div>
                    <div className="w-3 h-10 bg-primary mx-0.5 rounded-sm"></div>
                  </div>
                ) : (
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent ml-1"></div>
                )}
              </motion.div>

              {/* Video info tag */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Demo de Fluyo
              </div>
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
