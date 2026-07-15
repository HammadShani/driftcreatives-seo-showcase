import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CTA } from "@/components/site/CTA";
import { Process } from "@/components/site/Process";
import { FAQ } from "@/components/site/FAQ";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "SEO Services — DriftCreatives" },
      {
        name: "description",
        content:
          "Explore the full range of premium SEO, Google Ads and web performance services from DriftCreatives.",
      },
      { property: "og:title", content: "SEO Services — DriftCreatives" },
      {
        property: "og:description",
        content: "Premium SEO, Google Ads and web performance services for ambitious brands.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Services" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-primary">Services</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              A full-stack SEO offering, under <span className="gradient-text">one senior team</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From technical audits to editorial link building to Google Ads — every service is
              designed to compound alongside the others.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-page pb-10">
        <ServicesGrid />
      </section>

      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
