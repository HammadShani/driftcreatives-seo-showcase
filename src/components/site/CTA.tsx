import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="container-page py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-4xl gradient-primary p-10 text-center shadow-elegant md:p-16"
      >
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            Ready to dominate search in 2026?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/90 md:text-lg">
            Let's craft an SEO strategy that compounds. Book a free 30-minute strategy call today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
            >
              Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
