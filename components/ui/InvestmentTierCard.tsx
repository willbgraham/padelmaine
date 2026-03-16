"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import type { InvestmentTier } from "@/lib/financialData";
import { Check } from "lucide-react";

interface InvestmentTierCardProps {
  tier: InvestmentTier;
}

export default function InvestmentTierCard({ tier }: InvestmentTierCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative p-8 rounded-2xl border transition-shadow duration-300 ${
        tier.highlighted
          ? "border-cream bg-forest text-cream shadow-xl shadow-cream/10"
          : "border-charcoal/10 bg-white text-charcoal hover:shadow-lg"
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cream text-forest text-xs font-medium tracking-wider uppercase px-4 py-1 rounded-full">
          Featured
        </div>
      )}

      <h3 className="font-display text-2xl font-bold">{tier.name}</h3>

      <div className="mt-4">
        <span
          className={`text-sm tracking-wider uppercase ${
            tier.highlighted ? "text-cream/60" : "text-charcoal/50"
          }`}
        >
          Minimum Investment
        </span>
        <p
          className={`text-3xl font-display font-bold mt-1 ${
            tier.highlighted ? "text-cream" : "text-forest"
          }`}
        >
          {tier.minimum}
        </p>
      </div>

      <div className="mt-4">
        <span
          className={`text-sm tracking-wider uppercase ${
            tier.highlighted ? "text-cream/60" : "text-charcoal/50"
          }`}
        >
          Target Return
        </span>
        <p className="text-xl font-bold mt-1">{tier.returnTarget}</p>
      </div>

      <ul className="mt-6 space-y-3">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-center gap-3">
            <Check
              size={16}
              className={
                tier.highlighted ? "text-cream" : "text-forest"
              }
            />
            <span
              className={`text-sm ${
                tier.highlighted ? "text-cream/80" : "text-charcoal/70"
              }`}
            >
              {perk}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
