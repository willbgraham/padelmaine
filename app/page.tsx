import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import WhatIsPadel from "@/components/sections/WhatIsPadel";
import CelebrityPadel from "@/components/sections/CelebrityPadel";
import VideoSection from "@/components/sections/VideoSection";
import Vision from "@/components/sections/Vision";
import Opportunity from "@/components/sections/Opportunity";
import MarketAnalysis from "@/components/sections/MarketAnalysis";
import Financials from "@/components/sections/Financials";

import PadelShorts from "@/components/sections/PadelShorts";
import PriorityAccess from "@/components/sections/PriorityAccess";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { videoSections } from "@/lib/facilityData";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <main>
        {/* 1. Hero (dark) */}
        <Hero />

        {/* 2. What is Padel (light cream) */}
        <WhatIsPadel />

        {/* 3. Celebrity Padel (dark charcoal) */}
        <CelebrityPadel />

        {/* 4. Padel Myths (light cream) */}
        <VideoSection data={videoSections[0]} />

        {/* 5. Vision (dark forest) */}
        <Vision />

        {/* 6. Opportunity (light cream) */}
        <Opportunity />

        {/* 7. Market Analysis — TAM/SAM/SOM/LAM (dark forest) */}
        <MarketAnalysis />

        {/* 8. Business of Padel (light cream) */}
        <VideoSection data={videoSections[1]} reversed />

        {/* 9. Financials (white/light) */}
        <Financials />

        {/* 10. Padel Operations (dark charcoal) */}
        <VideoSection data={videoSections[2]} dark />

        {/* 11. Padel Shorts — horizontal scroll (dark charcoal) */}
        <PadelShorts />

        {/* 12. Priority Access (dark forest) */}
        <PriorityAccess />

        {/* 13. Team (light cream) */}
        <Team />

        {/* 14. Contact (dark forest) */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
