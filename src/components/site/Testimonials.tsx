import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "./Section";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="container-page py-20">
      <SectionHeader eyebrow="Testimonials" title="Loved by teams who care about growth." />
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="relative rounded-3xl glass-card p-8 md:p-12">
          <Quote className="absolute -top-4 left-8 h-10 w-10 text-primary" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg leading-relaxed md:text-2xl">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-primary" : "w-1.5 bg-border"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-secondary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
