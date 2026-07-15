export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  description: string;
  image: string;
  content: { heading: string; body: string }[];
};

const img = (seed: string) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1200&q=80`;

const makeContent = (topic: string): { heading: string; body: string }[] => [
  {
    heading: `Why ${topic} matters in 2026`,
    body: `The search landscape has shifted dramatically. Generative AI answers, zero-click SERPs and evolving E-E-A-T signals mean ${topic.toLowerCase()} isn't optional — it's how modern brands stay visible. In this guide we break down the fundamentals, the modern playbook, and the mistakes that quietly cost you rankings.`,
  },
  {
    heading: "The fundamentals",
    body: `Start with intent. Every URL should map to a specific query, audience and stage in the funnel. Get this right and everything downstream — content, links, technical work — becomes exponentially more effective. Get it wrong and no amount of optimisation will save you.`,
  },
  {
    heading: "A step-by-step playbook",
    body: `Audit → strategy → execution → measurement. Sounds simple, and it is — the discipline is in the details. We use a proprietary scoring model that weighs opportunity size, competitive difficulty and business impact so every hour of work moves the needle.`,
  },
  {
    heading: "Common mistakes to avoid",
    body: `Chasing volume over intent. Optimising for keywords a competitor already owns. Ignoring internal links. Publishing without a distribution plan. Every one of these silently kills otherwise-good SEO work.`,
  },
  {
    heading: "Final thoughts",
    body: `${topic} isn't a one-time project — it compounds. Set up the foundations right, ship consistently, measure ruthlessly, and you'll build a moat that competitors can't easily copy. That's the whole game.`,
  },
];

export const categories = [
  "SEO Basics",
  "Keyword Research",
  "On-Page SEO",
  "Technical SEO",
  "Off-Page SEO",
  "Schema",
  "Semantic SEO",
  "Analytics",
  "Local SEO",
  "Performance",
  "Trends",
] as const;

export const blogs: BlogPost[] = [
  {
    slug: "what-is-seo",
    title: "What is SEO? A Complete Beginner's Guide for 2026",
    category: "SEO Basics",
    author: "Elena Vasquez",
    date: "2026-01-12",
    readingTime: "8 min read",
    description:
      "Everything a modern founder needs to understand about search engine optimisation, from the ground up.",
    image: img("photo-1432888622747-4eb9a8efeb07"),
    content: makeContent("SEO"),
  },
  {
    slug: "complete-keyword-research-guide",
    title: "The Complete Keyword Research Guide (2026 Edition)",
    category: "Keyword Research",
    author: "Marcus Chen",
    date: "2026-01-20",
    readingTime: "12 min read",
    description:
      "How to find the keywords that will actually drive revenue — not vanity metrics.",
    image: img("photo-1460925895917-afdab827c52f"),
    content: makeContent("Keyword Research"),
  },
  {
    slug: "on-page-seo-checklist",
    title: "The Definitive On-Page SEO Checklist",
    category: "On-Page SEO",
    author: "Priya Sharma",
    date: "2026-02-02",
    readingTime: "10 min read",
    description:
      "A page-by-page checklist that covers every on-page factor that still moves rankings in 2026.",
    image: img("photo-1499750310107-5fef28a66643"),
    content: makeContent("On-Page SEO"),
  },
  {
    slug: "technical-seo-guide",
    title: "Technical SEO Guide: A Framework That Actually Works",
    category: "Technical SEO",
    author: "David Okafor",
    date: "2026-02-14",
    readingTime: "14 min read",
    description:
      "Crawl budgets, rendering, structured data and Core Web Vitals — explained without the jargon.",
    image: img("photo-1518770660439-4636190af475"),
    content: makeContent("Technical SEO"),
  },
  {
    slug: "off-page-seo-strategy",
    title: "The Off-Page SEO Strategy We Use for Every Client",
    category: "Off-Page SEO",
    author: "Sophie Laurent",
    date: "2026-02-24",
    readingTime: "9 min read",
    description:
      "Digital PR, HARO and editorial links — the exact system we use to build real authority.",
    image: img("photo-1552664730-d307ca884978"),
    content: makeContent("Off-Page SEO"),
  },
  {
    slug: "schema-markup-guide",
    title: "Schema Markup Guide: From JSON-LD to Rich Results",
    category: "Schema",
    author: "Marcus Chen",
    date: "2026-03-04",
    readingTime: "11 min read",
    description:
      "How to design, implement and validate structured data that actually shows up in the SERPs.",
    image: img("photo-1461749280684-dccba630e2f6"),
    content: makeContent("Schema Markup"),
  },
  {
    slug: "semantic-seo-explained",
    title: "Semantic SEO Explained: Topics, Entities and Authority",
    category: "Semantic SEO",
    author: "Elena Vasquez",
    date: "2026-03-15",
    readingTime: "10 min read",
    description:
      "Move beyond keywords. Learn how to build topical authority the way modern search engines want you to.",
    image: img("photo-1451187580459-43490279c0fa"),
    content: makeContent("Semantic SEO"),
  },
  {
    slug: "google-search-console-guide",
    title: "The Google Search Console Guide for Serious Teams",
    category: "Analytics",
    author: "Priya Sharma",
    date: "2026-03-26",
    readingTime: "9 min read",
    description:
      "A tour of every report that matters — and how to turn the data into decisions.",
    image: img("photo-1551288049-bebda4e38f71"),
    content: makeContent("Google Search Console"),
  },
  {
    slug: "google-analytics-4-guide",
    title: "Google Analytics 4 for SEO: What Matters, What Doesn't",
    category: "Analytics",
    author: "David Okafor",
    date: "2026-04-05",
    readingTime: "12 min read",
    description:
      "GA4 is different. Here's the exact setup we use to measure real SEO business impact.",
    image: img("photo-1554224155-6726b3ff858f"),
    content: makeContent("Google Analytics 4"),
  },
  {
    slug: "local-seo-guide",
    title: "Local SEO Guide: Owning the Map Pack in Your City",
    category: "Local SEO",
    author: "Sophie Laurent",
    date: "2026-04-16",
    readingTime: "10 min read",
    description:
      "The GBP, citation and review playbook we use to rank local businesses at the top.",
    image: img("photo-1519677100203-a0e668c92439"),
    content: makeContent("Local SEO"),
  },
  {
    slug: "core-web-vitals-explained",
    title: "Core Web Vitals Explained (and How to Actually Fix Them)",
    category: "Performance",
    author: "Marcus Chen",
    date: "2026-04-28",
    readingTime: "11 min read",
    description:
      "LCP, INP, CLS — the practical fixes that get you into the green zone and keep you there.",
    image: img("photo-1551288049-bebda4e38f71"),
    content: makeContent("Core Web Vitals"),
  },
  {
    slug: "seo-trends-2026",
    title: "SEO Trends 2026: What's Actually Changing",
    category: "Trends",
    author: "Elena Vasquez",
    date: "2026-05-09",
    readingTime: "13 min read",
    description:
      "AI overviews, entity search, zero-click SERPs — a grounded look at the trends worth planning for.",
    image: img("photo-1526628953301-3e589a6a8b74"),
    content: makeContent("SEO Trends"),
  },
];

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);
