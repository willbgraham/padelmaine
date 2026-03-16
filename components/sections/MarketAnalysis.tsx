"use client";

import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import {
  tamSamSomLam,
  marketHighlights,
  competitiveLandscape,
} from "@/lib/facilityData";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";

const tierColors: Record<string, string> = {
  TAM: "rgba(42, 74, 42, 0.4)",
  SAM: "rgba(42, 74, 42, 0.7)",
  SOM: "rgba(245, 240, 232, 0.25)",
  LAM: "rgba(245, 240, 232, 0.45)",
};

export default function MarketAnalysis() {
  return (
    <section
      id="market"
      className="scroll-mt-20 py-24 md:py-32 bg-forest"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="Go-To-Market"
            title="Market Opportunity"
            description="A disciplined market-sizing framework shows a clear path from macro opportunity to launch-ready demand."
            dark
          />

          {/* TAM / SAM / SOM / LAM Visualization */}
          <div className="mt-16 max-w-4xl mx-auto space-y-6">
            {tamSamSomLam.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                <div
                  className="flex items-center justify-between px-5 py-4 rounded-xl min-h-[60px] transition-all"
                  style={{
                    width: `${tier.widthPercent}%`,
                    backgroundColor: tierColors[tier.tier],
                    border:
                      tier.tier === "LAM"
                        ? "1px solid rgba(245, 240, 232, 0.3)"
                        : "1px solid rgba(245, 240, 232, 0.08)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-cream font-bold text-xs tracking-widest">
                      {tier.tier}
                    </span>
                    <span className="text-cream/90 font-display font-bold text-lg md:text-xl">
                      {tier.value}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-cream/80 text-sm font-medium">
                    {tier.label}
                  </p>
                  <p className="text-cream/50 text-sm leading-relaxed mt-0.5">
                    {tier.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Market Stats */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {marketHighlights.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                displayValue={stat.displayValue}
                dark
              />
            ))}
          </motion.div>

          {/* Competitive Landscape */}
          <motion.div variants={fadeUpVariants} className="mt-24">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-cream text-center mb-4">
              Nearest Competition
            </h3>
            <p className="text-cream/50 text-center text-sm mb-10 max-w-xl mx-auto">
              Players from Portland already drive 2+ hours to play padel in
              Boston. Maine Padel at the Downs eliminates that gap entirely.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-cream/10">
                    <th className="text-left py-4 px-4 text-xs font-medium text-cream/40 tracking-wider uppercase">
                      Facility
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-medium text-cream/40 tracking-wider uppercase">
                      Location
                    </th>
                    <th className="text-center py-4 px-4 text-xs font-medium text-cream/40 tracking-wider uppercase">
                      Courts
                    </th>
                    <th className="text-center py-4 px-4 text-xs font-medium text-cream/40 tracking-wider uppercase">
                      Opened
                    </th>
                    <th className="text-right py-4 px-4 text-xs font-medium text-cream/40 tracking-wider uppercase">
                      Distance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitiveLandscape.map((row) => (
                    <tr
                      key={row.facility}
                      className={`border-b border-cream/5 ${
                        row.highlight
                          ? "bg-cream/10"
                          : ""
                      }`}
                    >
                      <td
                        className={`py-4 px-4 text-sm ${
                          row.highlight
                            ? "text-cream font-bold"
                            : "text-cream/80"
                        }`}
                      >
                        {row.facility}
                      </td>
                      <td className="py-4 px-4 text-sm text-cream/50">
                        {row.location}
                      </td>
                      <td className="py-4 px-4 text-center text-sm text-cream/50">
                        {row.courts}
                      </td>
                      <td className="py-4 px-4 text-center text-sm text-cream/50">
                        {row.opened}
                      </td>
                      <td
                        className={`py-4 px-4 text-right text-sm ${
                          row.highlight
                            ? "text-cream font-bold"
                            : "text-cream/50"
                        }`}
                      >
                        {row.distance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
