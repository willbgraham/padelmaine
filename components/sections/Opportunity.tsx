"use client";

import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import { opportunityValueProps } from "@/lib/facilityData";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, MapPin, TrendingUp } from "lucide-react";

const iconMap = { Target, MapPin, TrendingUp };

export default function Opportunity() {
  return (
    <section id="opportunity" className="scroll-mt-20 py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="The Opportunity"
            title="A First-Mover Opportunity"
          />

          {/* Three Value Props */}
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {opportunityValueProps.map((prop) => {
              const Icon = iconMap[prop.icon];
              return (
                <motion.div
                  key={prop.title}
                  variants={fadeUpVariants}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-forest/5 flex items-center justify-center">
                    <Icon className="text-forest" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    {prop.title}
                  </h3>
                  <p className="text-charcoal/60 mt-3 leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
