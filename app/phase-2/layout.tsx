import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phase 2 - Coming Soon",
  description:
    "Phase 2 of Maine Padel at the Downs - details coming soon. The full indoor padel facility in Scarborough, Maine.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://padelmaine.com/phase-2",
  },
};

export default function Phase2Layout({ children }: { children: React.ReactNode }) {
  return children;
}
