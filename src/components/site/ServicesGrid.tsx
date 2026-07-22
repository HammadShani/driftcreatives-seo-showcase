import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.gradient} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />
              <div
                className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-lg`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.short}
              </p>
              <div className="relative mt-6 flex items-center gap-1 text-sm font-medium text-primary">
                {s.learnMore}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
