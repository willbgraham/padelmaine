"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroStaggerVariants, heroFadeVariants } from "@/lib/animations";
import { heroStats } from "@/lib/facilityData";
import StatCard from "@/components/ui/StatCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroStaggerVariants}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 md:pt-0"
      >
        <motion.p
          variants={heroFadeVariants}
          className="text-cream/80 text-sm md:text-base font-medium tracking-[0.25em] uppercase mb-6"
        >
          Coming to The Downs, Scarborough
        </motion.p>

        <motion.h1
          variants={heroFadeVariants}
          className="font-display text-4xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] tracking-tight"
        >
          Maine&apos;s First Premier
          <br />
          Padel Club
        </motion.h1>

        <motion.p
          variants={heroFadeVariants}
          className="mt-6 text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          The fastest-growing racket sport in the world, arriving in
          Maine&apos;s most exciting new community.
        </motion.p>

        <motion.div
          variants={heroFadeVariants}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#opportunity"
            className="px-8 py-3.5 bg-cream hover:bg-white text-forest font-medium rounded-full transition-colors duration-200 text-sm tracking-wide"
          >
            Explore the Investment →
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-cream/30 hover:border-cream/60 text-cream font-medium rounded-full transition-colors duration-200 text-sm tracking-wide"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          variants={heroFadeVariants}
          className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto"
        >
          {heroStats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.value % 1 !== 0 ? 1 : 0}
              dark
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-cream/40" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
