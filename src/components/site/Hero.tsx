import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 gradient-mesh opacity-40" aria-hidden />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Now booking Q2 2026 partnerships
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            The premium SEO agency for{" "}
            <span className="gradient-text">ambitious brands</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We build compounding organic growth engines for the brands defining the next decade.
            Data-driven SEO, Google Ads, and web performance — engineered around your revenue.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground"
            >
              View Case Studies
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span>4.9/5 from 180+ ambitious brands</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-4 rounded-3xl glass-card p-6 md:grid-cols-3 md:p-8">
            {[
              { k: "+420%", v: "Avg. organic traffic growth" },
              { k: "180+", v: "Ambitious brands served" },
              { k: "$200M+", v: "In tracked pipeline" },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <div className="text-3xl font-bold gradient-text md:text-4xl">{s.k}</div>
                <p className="mt-1.5 text-xs text-muted-foreground md:text-sm">{s.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
