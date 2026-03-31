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
    default: "Maine Padel at the Downs | Maine's First Premier Padel Club",
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
    title: "Maine Padel at the Downs | Maine's First Premier Padel Club",
    description:
      "The fastest-growing racket sport in the world is coming to Maine's most exciting new community. Join the Priority Access list today.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Maine Padel at the Downs | Maine's First Premier Padel Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maine Padel at the Downs | Maine's First Premier Padel Club",
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
        <link rel="canonical" href={siteUrl} />
        {/* Structured Data: SportsActivityLocation + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SportsActivityLocation",
                  "@id": `${siteUrl}/#sports-location`,
                  name: "Maine Padel at the Downs",
                  description:
                    "Maine's first premier padel club featuring 4 indoor and 2 outdoor courts, bar & restaurant, and pro shop. Located at The Downs in Scarborough, Maine.",
                  url: siteUrl,
                  image: `${siteUrl}/api/og`,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "The Downs",
                    addressLocality: "Scarborough",
                    addressRegion: "ME",
                    postalCode: "04074",
                    addressCountry: "US",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 43.58,
                    longitude: -70.37,
                  },
                  sport: "Padel",
                  email: "william@padelmaine.com",
                  amenityFeature: [
                    { "@type": "LocationFeatureSpecification", name: "4 Indoor Climate-Controlled Courts", value: true },
                    { "@type": "LocationFeatureSpecification", name: "2 Outdoor Covered Courts", value: true },
                    { "@type": "LocationFeatureSpecification", name: "Bar & Restaurant", value: true },
                    { "@type": "LocationFeatureSpecification", name: "Pro Shop", value: true },
                  ],
                  potentialAction: {
                    "@type": "ReserveAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: `${siteUrl}/#priority-access`,
                      actionPlatform: "https://schema.org/DesktopWebPlatform",
                    },
                    name: "Join Priority Access List",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: "Maine Padel at the Downs",
                  url: siteUrl,
                  logo: `${siteUrl}/logo_final.png`,
                  email: "william@padelmaine.com",
                  description:
                    "Maine's first premier padel club, bringing the world's fastest-growing racket sport to The Downs in Scarborough.",
                  founder: {
                    "@type": "Person",
                    name: "William Graham",
                    jobTitle: "Club Director",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "The Downs",
                    addressLocality: "Scarborough",
                    addressRegion: "ME",
                    postalCode: "04074",
                    addressCountry: "US",
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": `${siteUrl}/#faq`,
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is padel?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Padel is a racket sport played on an enclosed glass-walled court about one-third the size of a tennis court. It combines elements of tennis and squash, and is easy for beginners to pick up while offering depth for advanced players. It is the fastest-growing racket sport in the world with over 25 million players across 78 countries.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Where is Maine Padel located?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Maine Padel is located at The Downs in Scarborough, Maine 04074 — Maine's most exciting new mixed-use community development.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How many padel courts will there be?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The facility will feature 4 indoor climate-controlled courts and 2 outdoor covered courts, for a total of 6 padel courts.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How much does it cost to play padel at Maine Padel?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Court bookings are available in 90-minute sessions ranging from $60 to $120 per court depending on peak or off-peak timing. Monthly membership plans are also available starting at $89/month (Explorer), $149/month (Club), and $199/month (Unlimited).",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is padel easy to learn?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Most people can learn the basics of padel within their first hour of play. The smaller court size and underhand serve make it accessible to players of all ages and fitness levels.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How can I sign up to play at Maine Padel?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Visit padelmaine.com and join the Priority Access list to be among the first to play when the club opens. Priority Access members receive early membership offers, exclusive event invitations, and founding member benefits.",
                      },
                    },
                  ],
                },
              ],
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
