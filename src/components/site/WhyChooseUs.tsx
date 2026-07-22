import { motion } from "framer-motion";
import { Award, LineChart, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { icon: LineChart, title: "Data-Driven SEO Strategies", body: "Every SEO strategy is based on keyword research, analytics, and real search data." },
  { icon: Users, title: "Experienced SEO Specialists", body: "Work directly with experienced SEO specialists who deliver long-term growth." },
  { icon: Rocket, title: "Long-Term SEO Growth", body: "Our SEO strategies build sustainable organic traffic that continues to grow over time." },
  { icon: ShieldCheck, title: "Fully white-hat", body: "We follow Google's White Hat SEO techniques for safe and sustainable rankings." },
  { icon: Award, title: "Proven SEO Results", body: "180+ successful projects with measurable SEO growth and increased organic traffic." },
  { icon: Sparkles, title: "Continuous SEO Optimization", body: "We continuously monitor and improve your website for better rankings and performance." },
];

export function WhyChooseUs() {
  return (
    <section className="container-page py-20">
      <SectionHeader
        eyebrow="Why DriftCreatives"
        title="Why Choose DriftCreatives as Your SEO Agency?"
        description="We combine technical expertise, data-driven SEO strategies, and transparent reporting to help businesses improve rankings, increase organic traffic, and achieve long-term growth."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-3xl glass-card p-7 transition-transform hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
