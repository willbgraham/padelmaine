"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUpVariants } from "@/lib/animations";
import type { TeamMember } from "@/lib/teamData";

interface TeamCardProps {
  member: TeamMember;
  dark?: boolean;
}

export default function TeamCard({ member, dark = false }: TeamCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="text-center"
    >
      <div className={`relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ${dark ? "ring-cream/10" : "ring-forest/10"}`}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
      <h3 className={`font-display text-xl font-bold ${dark ? "text-cream" : "text-charcoal"}`}>
        {member.name}
      </h3>
      <p className="text-forest font-medium text-sm mt-1">{member.title}</p>
      <p className={`text-sm mt-3 max-w-xs mx-auto leading-relaxed ${dark ? "text-cream/60" : "text-charcoal/60"}`}>
        {member.bio}
      </p>
    </motion.div>
  );
}
