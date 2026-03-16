"use client";

import Image from "next/image";
import { navigationLinks } from "@/lib/facilityData";

export default function Footer() {
  return (
    <footer className="bg-forest-dark py-12 border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="/logo_web.png"
              alt="Maine Padel at the Downs"
              width={150}
              height={32}
              className="h-6 w-auto opacity-60"
            />
            <p className="text-cream/30 text-xs">
              Maine&apos;s First Premier Padel Club
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/30 hover:text-cream/60 text-xs tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 pt-6 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/20 text-xs">
            Maine Padel at the Downs &copy; {new Date().getFullYear()} &middot;
            Scarborough, Maine &middot; william@padelmaine.com
          </p>
          <p className="text-cream/15 text-xs">
            All projections are estimates. Not a securities offering.
          </p>
        </div>
      </div>
    </footer>
  );
}
