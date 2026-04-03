import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phase 1 - The Outdoor Court",
  description:
    "Phase 1 of Maine Padel: a professional flat-floor padel court with all-weather canopy coming to Scarborough, Maine in 2026. No concrete required - faster installation, lower cost.",
  keywords: [
    "outdoor padel court Maine",
    "padel court Scarborough",
    "flat floor padel court",
    "padel canopy",
    "Maine padel 2026",
    "padel court installation",
    "padel New England",
  ],
  openGraph: {
    title: "Phase 1: The Outdoor Court | Maine Padel at the Downs",
    description:
      "The first step is here. A professional outdoor padel court with all-weather canopy coverage - coming to Scarborough, Maine in 2026.",
    url: "https://padelmaine.com/phase-1",
  },
  twitter: {
    title: "Phase 1: The Outdoor Court | Maine Padel at the Downs",
    description:
      "The first step is here. A professional outdoor padel court with all-weather canopy coverage - coming to Scarborough, Maine in 2026.",
  },
  alternates: {
    canonical: "https://padelmaine.com/phase-1",
  },
};

export default function Phase1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
