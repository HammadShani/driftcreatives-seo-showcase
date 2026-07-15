import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const steps = [
  { n: "01", title: "Discover", body: "Deep audit of your site, market and competitors — no assumptions." },
  { n: "02", title: "Strategise", body: "A roadmap tied to revenue, not vanity metrics." },
  { n: "03", title: "Execute", body: "Content, technical and off-page work — shipped every week." },
  { n: "04", title: "Compound", body: "Iterate on real data. Double down on what's working." },
];

export function Process() {
  return (
    <section className="container-page py-20">
      <SectionHeader
        eyebrow="Our Process"
        title="A calm, repeatable path to compounding growth."
        description="No smoke, no mirrors. Just a system designed to deliver quarter after quarter."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-3xl glass-card p-7"
          >
            <div className="text-5xl font-bold gradient-text">{s.n}</div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
