"use client";

import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import { celebrityVideos } from "@/lib/facilityData";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CelebrityPadel() {
  return (
    <section
      id="padel-culture"
      className="scroll-mt-20 py-24 md:py-32 bg-charcoal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="Cultural Moment"
            title="Padel Goes Mainstream"
            description="From world-class athletes to Hollywood A-listers, padel has become the sport of choice for those who demand more from their game."
            dark
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {celebrityVideos.map((video) => (
              <motion.div key={video.videoId} variants={fadeUpVariants}>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="text-cream/50 text-sm mt-3 text-center">
                  {video.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
