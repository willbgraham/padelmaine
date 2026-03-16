// TODO: Replace all placeholder content with real content

export const navigationLinks = [
  { label: "About Padel", href: "#padel" },
  { label: "The Vision", href: "#vision" },
  { label: "The Opportunity", href: "#opportunity" },
  { label: "Financials", href: "#financials" },
  { label: "The Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 2.8, prefix: "$", suffix: "B", label: "Global padel market 2026" },
  { value: 25, suffix: "M+", label: "Players worldwide" },
  { value: 1, prefix: "#", suffix: "", label: "Fastest-growing racket sport globally" },
];

export const padelStats = [
  { value: 8, suffix: " million", label: "Players — Europe" },
  { value: 4, suffix: " million", label: "Players — Latin America" },
  { value: 250, suffix: ",000", label: "Players — United States (growing 40% YoY)" },
];

export const padelCopy = {
  headline: "A New Kind of Game",
  body: [
    "Padel is played in a glass-walled enclosed court roughly a third the size of a tennis court. It blends the accessibility of tennis with the social thrill of squash — players of all levels pick it up within an hour and keep coming back for years.",
    "Born in Mexico in 1969 and adopted by Spain as a national obsession, padel has spread to 78 countries. It is now the fastest-growing racket sport on Earth.",
  ],
};

export const facilitySpecs = [
  {
    icon: "LayoutGrid" as const,
    title: "4 Indoor + 2 Outdoor Courts",
    description: "Climate-controlled indoor & covered outdoor play",
  },
  {
    icon: "ShoppingBag" as const,
    title: "Pro Shop",
    description: "Premium racket brands, apparel",
  },
  {
    icon: "Wine" as const,
    title: "Bar & Restaurant",
    description: "Social hub for members and guests",
  },
  {
    icon: "GraduationCap" as const,
    title: "Training Academy",
    description: "Clinics, private lessons, junior programs",
  },
  {
    icon: "Trophy" as const,
    title: "Event Space",
    description: "Tournaments, corporate events, private parties",
  },
  {
    icon: "Crown" as const,
    title: "Premium Membership",
    description: "Founding member program now open",
  },
];

export const locationData = {
  left: {
    heading: "Location",
    body: "The Downs is Scarborough's landmark 500-acre mixed-use development — home to retail, dining, residential, offices, and entertainment. With 8 million annual visitors and direct highway access from I-95, it is the premier destination address in Southern Maine.",
  },
  right: {
    heading: "Market",
    body: "Southern Maine is home to a wealthy, active, year-round population. Greater Portland ranks among the top 10 U.S. cities for health and wellness spending. No padel facility exists within 100 miles. The market is entirely unserved.",
  },
};

export const opportunityValueProps = [
  {
    icon: "Target" as const,
    title: "Untapped Market",
    description: "Zero padel competition in Maine or northern New England",
  },
  {
    icon: "MapPin" as const,
    title: "Premium Real Estate",
    description: "Anchor tenant in the region's highest-traffic development",
  },
  {
    icon: "TrendingUp" as const,
    title: "Proven Model",
    description: "Replicating successful clubs in Boston, NYC, Miami, and LA",
  },
];

// TAM / SAM / SOM / LAM — real market data (sources: Misitrano Consulting, US Census, FRED)
export const tamSamSomLam = [
  {
    tier: "TAM",
    label: "Total Addressable Market",
    description:
      "US padel market — 688 courts across 180 facilities, $70M+ annual revenue, growing 51% YoY",
    value: "$70M+",
    widthPercent: 100,
  },
  {
    tier: "SAM",
    label: "Serviceable Addressable Market",
    description:
      "New England — 15M people, only 3 padel facilities (all in Boston), high income, strong racquet sport culture",
    value: "15M people",
    widthPercent: 75,
  },
  {
    tier: "SOM",
    label: "Serviceable Obtainable Market",
    description:
      "Greater Portland MSA — 571K residents, zero padel facilities in ME/NH/VT, $107K avg household income",
    value: "571K residents",
    widthPercent: 50,
  },
  {
    tier: "LAM",
    label: "Launch Addressable Market",
    description:
      "Scarborough + 15-min drive radius — 200K+ people, $125K median HHI, 86% professional workforce",
    value: "200K+",
    widthPercent: 30,
  },
];

export const marketHighlights = [
  { value: 571, suffix: "K", label: "Portland MSA Population" },
  { value: 125, prefix: "$", suffix: "K", label: "Scarborough Median HHI" },
  { displayValue: "0", value: 0, suffix: "", label: "Padel Courts in Maine" },
  { value: 104, suffix: " mi", label: "Nearest Padel Facility" },
];

// Real competitive landscape — Boston-area padel clubs
export const competitiveLandscape = [
  {
    facility: "Sensa Padel (Bosse Sports)",
    location: "Hyde Park, Boston, MA",
    courts: 4,
    distance: "104 miles",
    opened: "May 2024",
  },
  {
    facility: "PadelHub",
    location: "Seaport, Boston, MA",
    courts: 6,
    distance: "104 miles",
    opened: "Oct 2025",
  },
  {
    facility: "Padel Boston",
    location: "Dedham, MA",
    courts: 3,
    distance: "100 miles",
    opened: "Dec 2024",
  },
  {
    facility: "Serve & Smash",
    location: "Branford, CT",
    courts: 4,
    distance: "225 miles",
    opened: "2024",
  },
  {
    facility: "Maine Padel at the Downs",
    location: "Scarborough, ME",
    courts: 6,
    distance: "—",
    opened: "2026",
    highlight: true,
  },
];

// TODO: Replace with real photography
export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
    alt: "Padel court aerial view",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80",
    alt: "Padel players in action",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80",
    alt: "Indoor padel facility",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    alt: "Premium sports club interior",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    alt: "Athletes playing racket sport",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    alt: "Modern sports facility",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    alt: "Luxury club lounge",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    alt: "Premium fitness facility",
    tall: false,
  },
];

// Video sections data — spread throughout the page
// TODO: Replace editorial copy with real content
export interface VideoSectionData {
  id: string;
  subtitle: string;
  title: string;
  videoId: string;
  copy: string[];
}

export const videoSections: VideoSectionData[] = [
  {
    id: "padel-myths",
    subtitle: "The Sport",
    title: "Debunking the Myths",
    videoId: "l0lQZdFXD4I", // "8 Padel Myths Players Still Believe"
    copy: [
      "Is padel just tennis with walls? Is it only for beginners? These are the kinds of assumptions that keep people from discovering one of the most dynamic racket sports ever created.",
      "The truth is padel demands real athleticism, deep strategy, and a level of social energy that no other court sport matches. Once you play your first game, the myths disappear — and the obsession begins.",
    ],
  },
  {
    id: "padel-business",
    subtitle: "The Investment",
    title: "The Business of Padel",
    videoId: "uQYfdTTwji8", // "How Much It REALLY Costs to Build a Padel Club"
    copy: [
      "Building a padel club is a significant capital investment — but the unit economics are remarkably compelling. Courts cost a fraction of tennis facilities to build, require less land, and generate higher revenue per square foot.",
      "With four players per court, 90 minute rates between $60–$120, and a sport that drives repeat bookings at rates traditional fitness can only dream of, the padel business model has been proven across Europe and is now taking hold in the United States.",
    ],
  },
  {
    id: "padel-operations",
    subtitle: "Operations",
    title: "Running a World-Class Club",
    videoId: "xHZQ45y3fH4", // "Busy Padel Clubs Can Quietly Fail"
    copy: [
      "A packed court sheet doesn't guarantee a profitable club. The difference between a thriving padel facility and one that merely survives comes down to operational excellence — membership strategy, staffing, programming, and community building.",
      "Our team brings direct operational experience from some of the most successful padel clubs in the country. We know what works, what doesn't, and how to build a facility that's as financially sound as it is beloved by its members.",
    ],
  },
];

export const celebrityVideos = [
  {
    videoId: "A2ygN0_zyxA", // "Why Celebrities Are All Playing Padel Right Now"
    title: "Why Celebrities Are All Playing Padel",
  },
  {
    videoId: "1v1nsB5N5vs", // "Joe Rogan FINDS OUT about Padel | JRE"
    title: "Joe Rogan Discovers Padel",
  },
];

// YouTube Shorts — curated padel content (mix of viral, women's, trick shots, celebrity, pro)
export interface PadelShort {
  videoId: string;
  title: string;
  category: "viral" | "womens" | "trickshot" | "celebrity" | "pro";
}

export const padelShorts: PadelShort[] = [
  // Viral rallies
  { videoId: "5ea1TqYFuLI", title: "Insane Padel Rally", category: "viral" },
  { videoId: "yIGv0NWCIC0", title: "Best Rally of the Year", category: "viral" },
  { videoId: "jhATBxFAK_I", title: "Mind-Blowing Padel Point", category: "viral" },
  { videoId: "CLhPMzlqeAo", title: "Padel at Its Finest", category: "viral" },
  // Women's padel
  { videoId: "vUVqQ-8LhDQ", title: "Best Women's Padel Shots", category: "womens" },
  // Trick shots
  { videoId: "nrwrLBOryxM", title: "Impossible Trick Shot", category: "trickshot" },
  { videoId: "mZaSQBF8PgU", title: "Padel Trick Shot Compilation", category: "trickshot" },
  { videoId: "BAzDKQXBPHQ", title: "Off the Glass Magic", category: "trickshot" },
  // Celebrity
  { videoId: "bJORFtA95IE", title: "Ronaldo Plays Padel", category: "celebrity" },
  { videoId: "Ykl7e6muINE", title: "Zidane on the Padel Court", category: "celebrity" },
  // Pro players
  { videoId: "eR28hGFA1mM", title: "Pro Padel Is Unreal", category: "pro" },
  { videoId: "J3wbwfmO5pY", title: "World Padel Tour Best Points", category: "pro" },
  { videoId: "LtObXf5poo8", title: "Lebron vs Galán", category: "pro" },
  { videoId: "pNOWhUCPaS4", title: "Championship Point", category: "pro" },
];

export const padelGalleryStrip = [
  { src: "/padel1.jpg", alt: "Padel action 1" },
  { src: "/padel2.jpg", alt: "Padel action 2" },
  { src: "/padel3.jpg", alt: "Padel action 3" },
  { src: "/padel4.jpg", alt: "Padel action 4" },
  { src: "/padel5.jpg", alt: "Padel action 5" },
  { src: "/padel6.jpg", alt: "Padel action 6" },
  { src: "/padel7.jpg", alt: "Padel action 7" },
  { src: "/padel8.jpg", alt: "Padel action 8" },
  { src: "/padel9.jpg", alt: "Padel action 9" },
];
