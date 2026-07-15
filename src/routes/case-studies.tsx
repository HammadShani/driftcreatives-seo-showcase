import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { CTA } from "@/components/site/CTA";
import { caseStudies } from "@/data/caseStudies";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "SEO Case Studies — Real Results | DriftCreatives" },
      {
        name: "description",
        content:
          "See how DriftCreatives helped real brands grow organic traffic by 400%+. Detailed SEO case studies with results, keywords ranked and growth data.",
      },
      { property: "og:title", content: "SEO Case Studies — DriftCreatives" },
      { property: "og:description", content: "Real brands. Real SEO results." },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Case Studies" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-primary">Case Studies</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              The receipts, not <span className="gradient-text">the promises</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Deep dives into how we helped real brands turn organic search into their most
              profitable growth channel.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="space-y-8">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-4xl glass-card"
            >
              <div className="grid gap-0 lg:grid-cols-2">
                <div className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto ${i % 2 ? "lg:order-2" : ""}`}>
                  <img
                    src={c.image}
                    alt={c.client}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.industry}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">{c.client}</h2>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-background/50 p-3 text-center">
                      <div className="text-xl font-bold gradient-text">{c.trafficGrowth}</div>
                      <div className="text-[10px] uppercase text-muted-foreground">Traffic</div>
                    </div>
                    <div className="rounded-2xl bg-background/50 p-3 text-center">
                      <div className="text-xl font-bold gradient-text">{c.keywordsRanked}</div>
                      <div className="text-[10px] uppercase text-muted-foreground">Keywords</div>
                    </div>
                    <div className="rounded-2xl bg-background/50 p-3 text-center">
                      <div className="text-xl font-bold gradient-text">{c.duration}</div>
                      <div className="text-[10px] uppercase text-muted-foreground">Timeline</div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold text-foreground">The problem</h3>
                      <p className="mt-1 text-muted-foreground">{c.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Our solution</h3>
                      <p className="mt-1 text-muted-foreground">{c.solution}</p>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-semibold text-primary">
                        <TrendingUp className="h-4 w-4" /> The result
                      </h3>
                      <p className="mt-1 text-muted-foreground">{c.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
