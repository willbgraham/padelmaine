import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maine Padel at the Downs - Maine's First Premier Padel Club",
  description:
    "Maine's first premier padel club, coming to The Downs in Scarborough. A first-mover investment opportunity in the fastest-growing racket sport in the world.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Maine Padel at the Downs",
    description:
      "A first-mover investment opportunity in Maine's first premier padel club.",
    images: ["/logo_final.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
