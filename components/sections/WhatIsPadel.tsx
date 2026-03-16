"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeUpVariants,
  staggerContainerVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";
import { padelStats, padelCopy, padelGalleryStrip } from "@/lib/facilityData";
import SectionHeading from "@/components/ui/SectionHeading";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import StatCard from "@/components/ui/StatCard";

export default function WhatIsPadel() {
  return (
    <section id="padel" className="scroll-mt-20 py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="The Sport"
            title={padelCopy.headline}
          />

          {/* Split Layout: Video + Copy */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
            {/* YouTube Embed */}
            <motion.div
              variants={slideInLeftVariants}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
            >
              <YouTubeEmbed videoId="3T-oWzguMsQ" title="What is Padel?" />
            </motion.div>

            {/* Editorial Copy */}
            <motion.div variants={slideInRightVariants} className="space-y-6">
              {padelCopy.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-charcoal/70 text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {padelStats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Horizontal Gallery Strip */}
      <div className="overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          className="mt-20 overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-4 px-6 lg:px-8 snap-x snap-mandatory min-w-max">
          {padelGalleryStrip.map((image, index) => (
            <div
              key={index}
              className="relative w-56 h-56 md:w-72 md:h-72 flex-shrink-0 rounded-2xl overflow-hidden snap-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 224px, 288px"
              />
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
}
