import { motion } from "framer-motion";
import { Award, LineChart, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { icon: LineChart, title: "Data-driven, not opinion-led", body: "Every decision is backed by real search data and business outcomes." },
  { icon: Users, title: "Senior team, no hand-offs", body: "You work directly with strategists who have shipped for global brands." },
  { icon: Rocket, title: "Compounding, not sprints", body: "We build systems that keep paying off long after the retainer ends." },
  { icon: ShieldCheck, title: "Fully white-hat", body: "No PBNs, no shortcuts. Just sustainable growth built to last." },
  { icon: Award, title: "Proven at scale", body: "180+ clients, $200M+ in tracked revenue attributable to our work." },
  { icon: Sparkles, title: "Obsessive craft", body: "We sweat the details others ignore — because they compound." },
];

export function WhyChooseUs() {
  return (
    <section className="container-page py-20">
      <SectionHeader
        eyebrow="Why DriftCreatives"
        title="A partner that thinks like an owner."
        description="We're not a link farm or a content mill. We're a small, senior team obsessed with your growth."
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
