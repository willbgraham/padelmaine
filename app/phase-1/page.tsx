"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const courtSpecs = [
  { label: "Glass", value: "10–12mm tempered" },
  { label: "Mesh", value: "50×50×4mm electrowelded" },
  { label: "Lighting", value: "200W · 26,000 lumens" },
  { label: "Anchoring", value: "Hilti-type expansion plugs" },
  { label: "Corrosion", value: "Powder-coated galvanized steel" },
  { label: "Colors", value: "Blue, Green, Black, Terracotta" },
];

const canopySpecs = [
  { label: "Footprint", value: "22m × 12m" },
  { label: "Side height", value: "7.0 – 7.4m" },
  { label: "Center height", value: "Up to 9.9m" },
  { label: "Snow load", value: "90 kg/m²" },
  { label: "Wind resistance", value: "110 km/h" },
  { label: "Roof membrane", value: "1,100 g/m² PVC (UV + fire resistant)" },
  { label: "Steel warranty", value: "10 years" },
  { label: "Service life", value: "30–50 years" },
  { label: "Certification", value: "TÜV Germany" },
];

const courtPhotos = [
  "https://www.unixpadel.com/wp-content/uploads/2025/10/IMG-20251009-WA0006.jpg",
  "https://www.unixpadel.com/wp-content/uploads/2025/10/IMG-20251009-WA0001.jpg",
  "https://www.unixpadel.com/wp-content/uploads/2025/10/IMG-20251009-WA0003.jpg",
  "https://www.unixpadel.com/wp-content/uploads/2025/10/IMG-20251009-WA0012.jpg",
  "https://www.unixpadel.com/wp-content/uploads/2025/10/IMG-20251009-WA0004.jpg",
  "https://www.unixpadel.com/wp-content/uploads/2025/10/IMG-20251009-WA0002.jpg",
];

export default function Phase1Page() {
  const courtRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-cream min-h-screen">
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/padel_court_canopy.mp4"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-forest/70" />

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cream/15 border border-cream/30 text-cream/80 text-xs tracking-[0.2em] uppercase font-medium">
              Coming in 2026
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
          >
            Phase 1:<br />The Outdoor Court
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-cream/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Before the full facility opens its doors, we&apos;re bringing padel to Maine - starting with a professional outdoor court and all-weather canopy this year.
          </motion.p>

          <motion.div variants={fadeUp}>
            <button
              onClick={() => courtRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors cursor-pointer group"
            >
              <span className="text-sm tracking-wide">Explore Phase 1</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-cream/30 group-hover:border-cream/60 flex items-start justify-center pt-1.5 transition-colors"
              >
                <div className="w-1 h-2 bg-cream/60 rounded-full" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── OVERVIEW BANNER ─── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase text-forest/50 font-medium mb-3"
            >
              The first step
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-forest mb-5"
            >
              Real Padel. Real Soon.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Phase 1 is about planting the flag. A fully playable outdoor court with
              all-weather protection - bringing community-accessible padel to Maine months
              before the full indoor facility opens.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                number: "01",
                title: "Outdoor Court",
                subtitle: "Flat-Floor Padel Court",
                desc: "Professional-grade padel court installed without concrete - up and running faster with less disruption.",
              },
              {
                number: "02",
                title: "Canopy Structure",
                subtitle: "All-Weather Coverage",
                desc: "A certified steel + PVC canopy engineered to handle Maine winters - snow, wind, and all.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="bg-forest rounded-2xl p-8 flex flex-col gap-4"
              >
                <span className="text-cream/25 font-display text-6xl font-bold leading-none">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-cream mb-1">
                    {item.title}
                  </h3>
                  <p className="text-cream/50 text-sm tracking-wide mb-3">{item.subtitle}</p>
                  <p className="text-cream/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── OUTDOOR COURT ─── */}
      <section ref={courtRef} className="bg-forest py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16 max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase text-cream/40 font-medium mb-3"
            >
              The Court
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl font-bold text-cream mb-6"
            >
              No Concrete.<br />No Problem.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream/65 text-lg leading-relaxed"
            >
              Our flat-floor padel court system installs directly on uneven terrain -
              leveling ground differences of up to 6cm without ever pouring concrete. That
              means faster installation, lower costs, and no International Padel Federation
              concrete licensing required.
            </motion.p>
          </motion.div>

          {/* Video + specs two-column */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-2xl aspect-video bg-forest-dark"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src="/flat-floor-padel-court.mp4"
                poster="/flat-floor-padel-court.png"
              />
            </motion.div>

            {/* Specs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="flex flex-col gap-4"
            >
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-cream/20 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-cream/70 text-xs tracking-wide">
                    No concrete required
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-3">
                {courtSpecs.map((spec) => (
                  <motion.div
                    key={spec.label}
                    variants={fadeUp}
                    className="flex items-center justify-between py-3 border-b border-cream/10 last:border-0"
                  >
                    <span className="text-cream/50 text-sm">{spec.label}</span>
                    <span className="text-cream text-sm font-medium text-right max-w-[55%]">
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-2">
                </motion.div>
            </motion.div>
          </div>

          {/* Photo grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-cream/40 text-xs tracking-[0.15em] uppercase mb-6"
            >
              Court Gallery
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {courtPhotos.map((src, i) => (
                <motion.div
                  key={src}
                  variants={fadeUp}
                  className="aspect-[4/3] rounded-xl overflow-hidden bg-forest-light"
                >
                  <Image
                    src={src}
                    alt={`Flat-floor padel court photo ${i + 1}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CANOPY ─── */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase text-forest/40 font-medium mb-3"
            >
              The Canopy
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl font-bold text-forest mb-6"
            >
              All-Weather Coverage
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-charcoal/65 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Maine weather is no match for our canopy structure. Built to handle
              90&nbsp;kg/m² of snow load and 110&nbsp;km/h winds - play year-round from
              day one.
            </motion.p>
          </motion.div>

          {/* Video full-width */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl mb-16 aspect-video bg-forest"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src="/padel_court_canopy.mp4"
            />
          </motion.div>

          {/* Specs grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-forest/40 text-xs tracking-[0.15em] uppercase mb-8 text-center"
            >
              Technical Specifications
            </motion.p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {/* Highlight cards */}
              {[
                { value: "90 kg/m²", label: "Snow load capacity" },
                { value: "110 km/h", label: "Wind resistance" },
                { value: "30–50 yrs", label: "Service life" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="bg-forest rounded-2xl p-6 text-center"
                >
                  <p className="font-display text-3xl font-bold text-cream mb-1">
                    {stat.value}
                  </p>
                  <p className="text-cream/50 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Full specs table */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-dark"
            >
              {canopySpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-cream/40"
                  }`}
                >
                  <span className="text-charcoal/50 text-sm">{spec.label}</span>
                  <span className="text-charcoal font-medium text-sm text-right max-w-[60%]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4 text-center">
              <span className="text-forest/40 text-xs tracking-wide">
                TÜV Germany certified
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT'S NEXT / CTA ─── */}
      <section className="bg-forest py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase text-cream/40 font-medium mb-3"
            >
              The Roadmap
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-cream"
            >
              What&apos;s Next
            </motion.h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="relative mb-20"
          >
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-cream/15 -translate-x-px" />

            {[
              {
                step: "Phase 1",
                active: true,
                title: "Outdoor Court + Canopy",
                desc: "One professional flat-floor padel court with full canopy coverage. Open for play - no concrete, no delays.",
                timing: "2026",
              },
              {
                step: "Phase 2",
                active: false,
                title: "Full Indoor Facility at The Downs",
                desc: "4 indoor + 2 outdoor courts, pro shop, bar & restaurant, training academy, and event space.",
                timing: "2026+",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-cream/40 mt-1.5 z-10 bg-forest">
                  {item.active && (
                    <div className="absolute inset-0.5 rounded-full bg-cream" />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 text-xs font-medium tracking-wide ${
                      item.active
                        ? "bg-cream/15 border border-cream/30 text-cream"
                        : "bg-cream/5 border border-cream/15 text-cream/40"
                    }`}
                  >
                    {item.active && <span className="w-1.5 h-1.5 rounded-full bg-green-400" />}
                    {item.step} · {item.timing}
                  </div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream/55 leading-relaxed text-sm">{item.desc}</p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.p variants={fadeUp} className="text-cream/60 text-lg mb-8 max-w-xl mx-auto">
              Reserve your spot before Phase 1 opens. Priority access members get first
              pick of court times, founding rates, and early updates.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/#priority-access"
                className="inline-block px-8 py-4 bg-cream hover:bg-white text-forest font-display font-bold text-lg rounded-full transition-colors duration-200 shadow-lg"
              >
                Get Priority Access
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
