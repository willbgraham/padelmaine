// TODO: Replace all placeholder financials with real data

export const revenueStreams = [
  {
    icon: "Clock" as const,
    title: "Court Bookings",
    description: "Peak/off-peak 90 minute rates ($60–$120 per court)",
  },
  {
    icon: "Users" as const,
    title: "Membership Subscriptions",
    description: "3 tiers: Explorer ($89/mo), Club ($149/mo), Unlimited ($199/mo)",
  },
  {
    icon: "GraduationCap" as const,
    title: "Coaching & Clinics",
    description: "Group and private instruction programs",
  },
  {
    icon: "ShoppingBag" as const,
    title: "Pro Shop",
    description: "Equipment, apparel, accessories",
  },
  {
    icon: "UtensilsCrossed" as const,
    title: "Food & Beverage",
    description: "Lounge revenue, events bar",
  },
  {
    icon: "Building" as const,
    title: "Corporate & Events",
    description: "Tournament hosting, team-building events",
  },
];

export const fiveYearProjections = [
  {
    year: "Year 1",
    courtRevenue: 340,
    memberships: 220,
    proShop: 30,
    restaurant: 40,
    lessons: 30,
    events: 20,
    total: 680,
  },
  {
    year: "Year 2",
    courtRevenue: 500,
    memberships: 380,
    proShop: 50,
    restaurant: 70,
    lessons: 55,
    events: 45,
    total: 1100,
  },
  {
    year: "Year 3",
    courtRevenue: 680,
    memberships: 560,
    proShop: 80,
    restaurant: 110,
    lessons: 90,
    events: 80,
    total: 1600,
  },
  {
    year: "Year 4",
    courtRevenue: 850,
    memberships: 740,
    proShop: 110,
    restaurant: 160,
    lessons: 130,
    events: 110,
    total: 2100,
  },
  {
    year: "Year 5",
    courtRevenue: 1050,
    memberships: 950,
    proShop: 150,
    restaurant: 220,
    lessons: 180,
    events: 150,
    total: 2700,
  },
];

export const keyMetrics = [
  { value: 4.2, prefix: "$", suffix: "M", label: "Total 5-Year Projected Revenue" },
  { value: 28, suffix: "%", label: "Projected EBITDA Margin (Year 3)" },
  { displayValue: "18–24", suffix: " Mo", label: "Projected Break-Even Timeline" },
  { value: 2.8, prefix: "$", suffix: "M", label: "Total Capital Raise Target" },
];

export interface InvestmentTier {
  name: string;
  minimum: string;
  returnTarget: string;
  perks: string[];
  highlighted?: boolean;
}

export const investmentTiers: InvestmentTier[] = [
  {
    name: "Founding Partner",
    minimum: "$250,000",
    returnTarget: "12–18% IRR",
    perks: [
      "Named court",
      "Lifetime membership",
      "Board seat",
    ],
    highlighted: true,
  },
  {
    name: "Club Partner",
    minimum: "$100,000",
    returnTarget: "10–15% IRR",
    perks: [
      "Founding membership",
      "Priority booking",
    ],
  },
  {
    name: "Community Partner",
    minimum: "$25,000",
    returnTarget: "8–12% IRR",
    perks: [
      "Complimentary membership",
      "Investor events",
    ],
  },
];

export const financialDisclaimer =
  "Projections are forward-looking estimates. Past performance of comparable facilities informs but does not guarantee results. Full financial model available in the investor deck.";
