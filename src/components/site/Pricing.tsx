import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { pricingPlans } from "@/data/pricing";
import { SectionHeader } from "./Section";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="pricing" className="container-page py-20">
      <SectionHeader
        eyebrow="Pricing"
        title="Plans that scale with your ambition."
        description="Transparent monthly retainers. Cancel anytime. No hidden fees."
      />
      <div className="mt-8 flex items-center justify-center gap-3">
        <span className={cn("text-sm", !yearly && "font-semibold")}>Monthly</span>
        <button
          onClick={() => setYearly((v) => !v)}
          className="relative h-7 w-14 rounded-full bg-secondary transition"
          aria-label="Toggle billing"
        >
          <span
            className={cn(
              "absolute top-1 h-5 w-5 rounded-full gradient-primary transition-all",
              yearly ? "left-8" : "left-1",
            )}
          />
        </button>
        <span className={cn("text-sm", yearly && "font-semibold")}>
          Yearly <span className="text-xs text-primary">(save 17%)</span>
        </span>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={cn(
              "relative flex flex-col rounded-3xl p-8",
              p.highlighted
                ? "gradient-primary text-primary-foreground shadow-elegant"
                : "glass-card",
            )}
          >
            {p.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-4 py-1 text-xs font-semibold text-primary">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p
              className={cn(
                "mt-2 text-sm",
                p.highlighted ? "text-primary-foreground/80" : "text-muted-foreground",
              )}
            >
              {p.tagline}
            </p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold">
                ${(yearly ? p.yearly / 12 : p.monthly).toLocaleString()}
              </span>
              <span
                className={cn(
                  "text-sm",
                  p.highlighted ? "text-primary-foreground/80" : "text-muted-foreground",
                )}
              >
                /mo
              </span>
            </div>
            {yearly && (
              <p
                className={cn(
                  "text-xs",
                  p.highlighted ? "text-primary-foreground/70" : "text-muted-foreground",
                )}
              >
                Billed ${p.yearly.toLocaleString()}/yr
              </p>
            )}
            <ul className="mt-8 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      p.highlighted ? "text-primary-foreground" : "text-primary",
                    )}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={cn(
                "mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105",
                p.highlighted
                  ? "bg-background text-foreground"
                  : "gradient-primary text-primary-foreground",
              )}
            >
              Get started
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
