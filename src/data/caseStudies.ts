export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  result: string;
  trafficGrowth: string;
  keywordsRanked: string;
  duration: string;
};

const img = (seed: string) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1200&q=80`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "nordic-outfitters",
    client: "Nordic Outfitters",
    industry: "E-commerce / Outdoor Apparel",
    image: img("photo-1441986300917-64674bd600d8"),
    problem:
      "Nordic Outfitters had a strong brand but ranked outside the top 30 for every high-intent product query. Organic accounted for less than 8% of revenue.",
    solution:
      "We rebuilt the site architecture, launched 60 topic-cluster guides, executed a 6-month digital-PR campaign, and shipped a Core Web Vitals overhaul.",
    result:
      "Organic became the #1 revenue channel within 11 months, with a 4.6x increase in non-brand traffic and 3.2x return on investment.",
    trafficGrowth: "+412%",
    keywordsRanked: "2,180",
    duration: "11 months",
  },
  {
    slug: "beacon-legal",
    client: "Beacon Legal",
    industry: "Legal Services",
    image: img("photo-1589829545856-d10d557cf95f"),
    problem:
      "A multi-state law firm was invisible in local search. Only 1 of 12 offices ranked in the map pack for their core practice areas.",
    solution:
      "Full local SEO overhaul across 12 GBP profiles, 400+ citation cleanup, hyper-local landing pages, and a review automation flow.",
    result:
      "All 12 offices now rank top 3 in the map pack, driving a 7x increase in consultation requests.",
    trafficGrowth: "+287%",
    keywordsRanked: "1,540",
    duration: "8 months",
  },
  {
    slug: "flowstate-saas",
    client: "FlowState",
    industry: "B2B SaaS",
    image: img("photo-1551434678-e076c223a692"),
    problem:
      "FlowState was burning cash on paid acquisition. Organic accounted for <5% of pipeline and their content library was invisible for high-intent queries.",
    solution:
      "Entity-first content strategy, technical migration to a new stack, product-led SEO landing pages, and 30+ integration comparison pages.",
    result:
      "Organic pipeline grew from $40K to $780K MRR contribution in 14 months. CAC dropped 41%.",
    trafficGrowth: "+624%",
    keywordsRanked: "3,940",
    duration: "14 months",
  },
  {
    slug: "atelier-marchand",
    client: "Atelier Marchand",
    industry: "Luxury D2C",
    image: img("photo-1483985988355-763728e1935b"),
    problem:
      "A luxury brand launching D2C had zero organic footprint. Google Ads was too expensive to scale profitably.",
    solution:
      "Brand + category SEO foundation, editorial link building from tier-1 fashion publications, schema markup and international expansion into 4 markets.",
    result:
      "Ranked #1 for 18 category-level keywords within 9 months. Google Ads spend dropped 55% while revenue grew 3.8x.",
    trafficGrowth: "+512%",
    keywordsRanked: "1,860",
    duration: "9 months",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
