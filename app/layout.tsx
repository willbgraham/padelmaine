import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const siteUrl = "https://padelmaine.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maine Padel at the Downs — Maine's First Premier Padel Club",
    template: "%s | Maine Padel at the Downs",
  },
  description:
    "Maine's first premier padel club, coming to The Downs in Scarborough. Join the Priority Access list for the fastest-growing racket sport in the world.",
  keywords: [
    "padel",
    "padel club",
    "Maine padel",
    "The Downs Scarborough",
    "padel courts Maine",
    "racket sports Maine",
    "padel investment",
    "padel membership",
    "indoor padel",
    "outdoor padel",
    "Scarborough Maine",
    "padel New England",
  ],
  authors: [{ name: "Maine Padel at the Downs" }],
  creator: "Maine Padel at the Downs",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Maine Padel at the Downs",
    title: "Maine Padel at the Downs — Maine's First Premier Padel Club",
    description:
      "The fastest-growing racket sport in the world is coming to Maine's most exciting new community. Join the Priority Access list today.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Maine Padel at the Downs — Maine's First Premier Padel Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maine Padel at the Downs — Maine's First Premier Padel Club",
    description:
      "The fastest-growing racket sport in the world is coming to Maine's most exciting new community. Join the Priority Access list today.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Maine Padel at the Downs",
              description:
                "Maine's first premier padel club featuring 4 indoor and 2 outdoor courts, bar & restaurant, and pro shop.",
              url: siteUrl,
              image: `${siteUrl}/api/og`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Scarborough",
                addressRegion: "ME",
                postalCode: "04074",
                addressCountry: "US",
              },
              sport: "Padel",
              email: "william@padelmaine.com",
            }),
          }}
        />
      </head>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
