"use client";

import { motion } from "framer-motion";
import {
  staggerContainerVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import type { VideoSectionData } from "@/lib/facilityData";

interface VideoSectionProps {
  data: VideoSectionData;
  dark?: boolean;
  reversed?: boolean;
}

export default function VideoSection({
  data,
  dark = false,
  reversed = false,
}: VideoSectionProps) {
  const videoBlock = (
    <motion.div
      variants={reversed ? slideInRightVariants : slideInLeftVariants}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
    >
      <YouTubeEmbed videoId={data.videoId} title={data.title} />
    </motion.div>
  );

  const copyBlock = (
    <motion.div
      variants={reversed ? slideInLeftVariants : slideInRightVariants}
      className="space-y-6"
    >
      {data.copy.map((paragraph, index) => (
        <p
          key={index}
          className={`text-lg leading-relaxed ${
            dark ? "text-cream/70" : "text-charcoal/70"
          }`}
        >
          {paragraph}
        </p>
      ))}
    </motion.div>
  );

  return (
    <section
      id={data.id}
      className={`scroll-mt-20 py-24 md:py-32 ${
        dark ? "bg-charcoal" : "bg-cream"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle={data.subtitle}
            title={data.title}
            dark={dark}
          />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
            {reversed ? (
              <>
                {copyBlock}
                {videoBlock}
              </>
            ) : (
              <>
                {videoBlock}
                {copyBlock}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
