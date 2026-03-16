"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import {
  revenueStreams,
  fiveYearProjections,
  keyMetrics,
  investmentTiers,
  financialDisclaimer,
} from "@/lib/financialData";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import InvestmentTierCard from "@/components/ui/InvestmentTierCard";
import RevenueCalculator from "@/components/ui/RevenueCalculator";
import {
  Clock,
  Users,
  GraduationCap,
  ShoppingBag,
  UtensilsCrossed,
  Building,
} from "lucide-react";

const iconMap = {
  Clock,
  Users,
  GraduationCap,
  ShoppingBag,
  UtensilsCrossed,
  Building,
};

export default function Financials() {
  return (
    <section id="financials" className="scroll-mt-20 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="Financials"
            title="Revenue Model & Projections"
            description="A diversified revenue model built for year-round profitability"
          />

          {/* Revenue Streams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {revenueStreams.map((stream) => {
              const Icon = iconMap[stream.icon];
              return (
                <motion.div
                  key={stream.title}
                  variants={fadeUpVariants}
                  className="p-6 rounded-2xl border border-charcoal/5 bg-cream/30 hover:bg-cream/50 transition-colors duration-300"
                >
                  <Icon className="text-forest mb-3" size={24} />
                  <h3 className="font-display text-lg font-bold text-charcoal">
                    {stream.title}
                  </h3>
                  <p className="text-charcoal/60 mt-2 text-sm leading-relaxed">
                    {stream.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Revenue Calculator */}
          <motion.div variants={fadeUpVariants} className="mt-24">
            <RevenueCalculator />
          </motion.div>

          {/* 5-Year Revenue Chart */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-24"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal text-center mb-10">
              5-Year Revenue Forecast
            </h3>
            <div className="w-full h-[400px] md:h-[450px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={fiveYearProjections}
                  margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e8e0d0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#2a2a2a", fontSize: 13 }}
                    axisLine={{ stroke: "#e8e0d0" }}
                  />
                  <YAxis
                    tick={{ fill: "#2a2a2a", fontSize: 13 }}
                    axisLine={{ stroke: "#e8e0d0" }}
                    tickFormatter={(value) =>
                      value >= 1000
                        ? `$${(value / 1000).toFixed(1)}M`
                        : `$${value}K`
                    }
                  />
                  <Tooltip
                    formatter={(value) => {
                      const num = Number(value);
                      return [
                        num >= 1000
                          ? `$${(num / 1000).toFixed(1)}M`
                          : `$${num}K`,
                        "",
                      ];
                    }}
                    contentStyle={{
                      backgroundColor: "#2a2a2a",
                      border: "none",
                      borderRadius: "8px",
                      color: "#f5f0e8",
                      fontSize: "13px",
                    }}
                    labelStyle={{ color: "#f5f0e8", fontWeight: "bold" }}
                    itemStyle={{ color: "#ffffff" }}
                  />
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Legend
                    wrapperStyle={{ fontSize: "13px", paddingTop: "16px" }}
                    {...{
                      payload: [
                        { value: "Court Revenue", type: "square", color: "#1a2e1a" },
                        { value: "Memberships", type: "square", color: "#2a4a2a" },
                        { value: "Pro Shop", type: "square", color: "#3d6b3d" },
                        { value: "Restaurant", type: "square", color: "#4e8a4e" },
                        { value: "Lessons", type: "square", color: "#6ba06b" },
                        { value: "Events", type: "square", color: "#8ab88a" },
                      ],
                    } as any}
                  />
                  <Bar
                    dataKey="courtRevenue"
                    name="Court Revenue"
                    stackId="a"
                    fill="#1a2e1a"
                  />
                  <Bar
                    dataKey="memberships"
                    name="Memberships"
                    stackId="a"
                    fill="#2a4a2a"
                  />
                  <Bar
                    dataKey="proShop"
                    name="Pro Shop"
                    stackId="a"
                    fill="#3d6b3d"
                  />
                  <Bar
                    dataKey="restaurant"
                    name="Restaurant"
                    stackId="a"
                    fill="#4e8a4e"
                  />
                  <Bar
                    dataKey="lessons"
                    name="Lessons"
                    stackId="a"
                    fill="#6ba06b"
                  />
                  <Bar
                    dataKey="events"
                    name="Events"
                    stackId="a"
                    fill="#8ab88a"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Key Financial Metrics */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {keyMetrics.map((metric) => (
              <StatCard
                key={metric.label}
                value={metric.value ?? 0}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
                decimals={metric.value && metric.value % 1 !== 0 ? 1 : 0}
                displayValue={metric.displayValue}
              />
            ))}
          </motion.div>

          {/* Investment Tiers */}
          <motion.div variants={fadeUpVariants} className="mt-24">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal text-center mb-10">
              Investment Tiers
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {investmentTiers.map((tier) => (
                <InvestmentTierCard key={tier.name} tier={tier} />
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-12 text-center text-xs text-charcoal/40 italic max-w-3xl mx-auto leading-relaxed"
          >
            {financialDisclaimer}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
