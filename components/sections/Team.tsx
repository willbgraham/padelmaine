"use client";

import { motion } from "framer-motion";
import { staggerContainerVariants } from "@/lib/animations";
import { teamMembers } from "@/lib/teamData";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading subtitle="Leadership" title="Our Team" />

          {/* Team Cards */}
          <div className="flex justify-center mt-16">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
