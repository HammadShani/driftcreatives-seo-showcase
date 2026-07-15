import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Newsletter } from "@/components/site/Newsletter";
import { Stats } from "@/components/site/Stats";
import { SectionHeader } from "@/components/site/Section";
import { caseStudies } from "@/data/caseStudies";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/site/BlogCard";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />

      <section id="services" className="container-page py-20">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to win in search."
          description="A full-stack SEO offering — technical, content, off-page, local and performance — under one senior team."
        />
        <ServicesGrid />
      </section>

      <WhyChooseUs />
      <Stats />
      <Process />

      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real brands. Real results."
          description="The receipts, not the promises."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {caseStudies.slice(0, 4).map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to="/case-studies"
                className="group block overflow-hidden rounded-3xl glass-card transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.client}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.industry}</p>
                  <h3 className="mt-1 text-xl font-semibold">{c.client}</h3>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold gradient-text">{c.trafficGrowth}</div>
                      <p className="text-xs text-muted-foreground">Organic traffic growth</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
      <Pricing />
      <FAQ />

      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Insights"
          title="Latest from the blog."
          description="Playbooks, teardowns and field notes from our team."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((b) => (
            <BlogCard key={b.slug} post={b} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-secondary"
          >
            View all articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Newsletter />
      <CTA />
    </>
  );
}
