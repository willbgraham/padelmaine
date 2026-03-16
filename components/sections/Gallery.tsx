"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";
import { galleryImages } from "@/lib/facilityData";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading subtitle="Gallery" title="The World of Padel" />

          {/* Masonry Grid */}
          <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="break-inside-avoid overflow-hidden rounded-xl group"
              >
                {/* TODO: Replace with real photography */}
                <div
                  className={`relative w-full ${
                    image.tall ? "h-80 md:h-96" : "h-56 md:h-64"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* YouTube Embed */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {/* TODO: Replace with preferred highlight video */}
              <iframe
                src="https://www.youtube.com/embed/LMLzqFNfXEw?rel=0&modestbranding=1"
                title="World Padel Tour Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-center text-charcoal/40 text-sm mt-4 italic">
              World Padel Tour — the sport&apos;s global showcase
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
