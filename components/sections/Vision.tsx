"use client";

import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";
import { facilitySpecs, locationData } from "@/lib/facilityData";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  LayoutGrid,
  ShoppingBag,
  Wine,
  GraduationCap,
  Trophy,
  Crown,
} from "lucide-react";

const iconMap = {
  LayoutGrid,
  ShoppingBag,
  Wine,
  GraduationCap,
  Trophy,
  Crown,
};

export default function Vision() {
  return (
    <section id="vision" className="scroll-mt-20 py-24 md:py-32 bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="The Vision"
            title="Maine Padel at the Downs"
            description="Scarborough, Maine · Opening 2026"
            dark
          />

          {/* Facility Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {facilitySpecs.map((spec) => {
              const Icon = iconMap[spec.icon];
              return (
                <motion.div
                  key={spec.title}
                  variants={fadeUpVariants}
                  className="p-6 rounded-2xl border border-cream/10 bg-cream/5 backdrop-blur-sm hover:bg-cream/10 transition-colors duration-300"
                >
                  <Icon className="text-cream mb-4" size={28} />
                  <h3 className="font-display text-xl font-bold text-cream">
                    {spec.title}
                  </h3>
                  <p className="text-cream/60 mt-2 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Why The Downs? */}
          <motion.div variants={fadeUpVariants} className="mt-24">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-cream text-center mb-12">
              Why The Downs?
            </h3>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <motion.div variants={slideInLeftVariants}>
                <p className="text-cream text-sm font-medium tracking-[0.15em] uppercase mb-4">
                  {locationData.left.heading}
                </p>
                <p className="text-cream/70 text-lg leading-relaxed">
                  {locationData.left.body}
                </p>
              </motion.div>
              <motion.div variants={slideInRightVariants}>
                <p className="text-cream text-sm font-medium tracking-[0.15em] uppercase mb-4">
                  {locationData.right.heading}
                </p>
                <p className="text-cream/70 text-lg leading-relaxed">
                  {locationData.right.body}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
