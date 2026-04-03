"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function Phase2Page() {
  return (
    <main className="relative h-screen overflow-hidden">
      <Navigation />

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-forest/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-[0.2em] uppercase text-cream/50 font-medium mb-4"
        >
          Phase 2
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display text-5xl md:text-7xl font-bold text-cream mb-6"
        >
          Details Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-cream/60 text-lg max-w-md"
        >
          We&apos;re working on it. Check back soon.
        </motion.p>
      </div>
    </main>
  );
}
