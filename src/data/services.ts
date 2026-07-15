import {
  Search,
  FileText,
  Cog,
  Link2,
  MapPin,
  Brain,
  Code2,
  Megaphone,
  Globe,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  features: string[];
  process: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "SEO",
    short: "End-to-end organic growth strategy",
    description:
      "A complete organic growth engine — audits, keyword research, content strategy, technical fixes and authority building — engineered to compound revenue quarter after quarter.",
    icon: Search,
    gradient: "from-violet-500 to-fuchsia-500",
    features: [
      "Full technical + content audit",
      "Custom keyword strategy",
      "Monthly reporting & insights",
      "Dedicated SEO strategist",
    ],
    process: [
      { title: "Discovery", description: "Audit, benchmarks and goal alignment." },
      { title: "Strategy", description: "Roadmap, keyword clusters and priorities." },
      { title: "Execution", description: "Content, tech, off-page — shipped weekly." },
      { title: "Compound", description: "Iterate on data, scale what works." },
    ],
  },
  {
    slug: "on-page-seo",
    title: "On-Page SEO",
    short: "Content optimised for humans and crawlers",
    description:
      "We optimise every element on your pages — titles, meta, headings, internal links and content depth — so search engines and readers instantly understand your value.",
    icon: FileText,
    gradient: "from-fuchsia-500 to-pink-500",
    features: ["Metadata rewrites", "Content refresh", "Internal link architecture", "Entity optimisation"],
    process: [
      { title: "Audit", description: "Page-by-page opportunity scan." },
      { title: "Rewrite", description: "SEO-first content refresh." },
      { title: "Interlink", description: "Topical authority through structure." },
      { title: "Measure", description: "Track uplift per URL." },
    ],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    short: "A crawlable, indexable, lightning-fast site",
    description:
      "Core Web Vitals, crawlability, indexation, JavaScript rendering, structured data — the invisible foundation that lets great content actually rank.",
    icon: Cog,
    gradient: "from-cyan-500 to-blue-500",
    features: ["Crawl & index audit", "Core Web Vitals fixes", "Log-file analysis", "Rendering diagnostics"],
    process: [
      { title: "Crawl", description: "Discover technical debt." },
      { title: "Prioritise", description: "Impact vs. effort mapping." },
      { title: "Fix", description: "Hand-off or implement directly." },
      { title: "Validate", description: "Post-fix verification." },
    ],
  },
  {
    slug: "off-page-seo",
    title: "Off-Page SEO",
    short: "Authority through real, editorial links",
    description:
      "Digital PR, editorial link building and brand mentions from publications your audience actually reads. No spam, no PBNs — only links you'd be proud to show off.",
    icon: Link2,
    gradient: "from-emerald-500 to-teal-500",
    features: ["Editorial link building", "Digital PR", "HARO & expert quotes", "Brand mentions"],
    process: [
      { title: "Research", description: "Identify aligned publications." },
      { title: "Outreach", description: "Personalised, human pitches." },
      { title: "Placement", description: "Secure editorial coverage." },
      { title: "Report", description: "DR growth and referral traffic." },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    short: "Own the map pack in your city",
    description:
      "Google Business Profile optimisation, citations, reviews and local landing pages that put your business at the top of local search — where high-intent customers convert.",
    icon: MapPin,
    gradient: "from-orange-500 to-amber-500",
    features: ["GBP optimisation", "Citation building", "Review acquisition", "Local content"],
    process: [
      { title: "Setup", description: "Profile & citations." },
      { title: "Optimise", description: "Categories, services, media." },
      { title: "Reviews", description: "Automated review flow." },
      { title: "Rank", description: "Map-pack dominance." },
    ],
  },
  {
    slug: "semantic-seo",
    title: "Semantic SEO",
    short: "Topical authority at entity level",
    description:
      "We map your topics, entities and semantic relationships so search engines see you as the definitive source in your niche — the foundation for AI search and SGE visibility.",
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
    features: ["Topic clusters", "Entity mapping", "Knowledge graph optimisation", "AI search readiness"],
    process: [
      { title: "Map", description: "Topics + entities." },
      { title: "Build", description: "Cluster content." },
      { title: "Interlink", description: "Semantic structure." },
      { title: "Dominate", description: "Own the topic." },
    ],
  },
  {
    slug: "schema-markup",
    title: "Schema Markup",
    short: "Rich results and AI-ready structured data",
    description:
      "Custom schema implementation across your site — organisation, articles, products, FAQs, reviews — for rich results, better CTR and AI-search visibility.",
    icon: Code2,
    gradient: "from-rose-500 to-red-500",
    features: ["Custom JSON-LD", "Rich result validation", "Product & FAQ schema", "Knowledge Panel setup"],
    process: [
      { title: "Design", description: "Schema strategy." },
      { title: "Implement", description: "Custom JSON-LD." },
      { title: "Validate", description: "Rich Results tests." },
      { title: "Monitor", description: "Search Console tracking." },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    short: "Paid performance that pays for itself",
    description:
      "Full-funnel Google Ads — search, PMax, display and YouTube — engineered around ROAS, not vanity clicks. Every dollar tracked, every conversion optimised.",
    icon: Megaphone,
    gradient: "from-yellow-500 to-orange-500",
    features: ["Full-funnel campaigns", "Conversion tracking", "Bid strategy tuning", "Landing page CRO"],
    process: [
      { title: "Audit", description: "Account and tracking review." },
      { title: "Structure", description: "Rebuild for performance." },
      { title: "Launch", description: "Test & learn framework." },
      { title: "Scale", description: "Double down on winners." },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Fast, beautiful, SEO-native websites",
    description:
      "Bespoke websites built on modern frameworks — designed for conversion, engineered for speed, and SEO-native from the first line of code.",
    icon: Globe,
    gradient: "from-sky-500 to-cyan-500",
    features: ["Custom design", "Headless CMS", "Perfect Core Web Vitals", "Conversion-focused UX"],
    process: [
      { title: "Design", description: "Custom UI/UX." },
      { title: "Build", description: "Modern stack, clean code." },
      { title: "Optimise", description: "Perf + SEO baked in." },
      { title: "Launch", description: "Migrate with zero traffic loss." },
    ],
  },
  {
    slug: "website-speed-optimization",
    title: "Website Speed Optimization",
    short: "Perfect Core Web Vitals, guaranteed",
    description:
      "We shave seconds off load times — image optimisation, code splitting, caching, CDN, LCP fixes — so your users don't bounce and Google doesn't punish you.",
    icon: Gauge,
    gradient: "from-lime-500 to-emerald-500",
    features: ["Core Web Vitals audit", "Image & asset optimisation", "CDN & caching", "JS/CSS refactoring"],
    process: [
      { title: "Measure", description: "Lab + field data." },
      { title: "Fix", description: "Top-impact wins first." },
      { title: "Verify", description: "Real-user monitoring." },
      { title: "Maintain", description: "Continuous performance." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
