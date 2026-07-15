import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { SectionHeader } from "@/components/site/Section";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";
import { Testimonials } from "@/components/site/Testimonials";
import { Heart, Lightbulb, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DriftCreatives — A Premium SEO Agency" },
      {
        name: "description",
        content:
          "Meet the small, senior team behind DriftCreatives — an SEO agency obsessed with compounding growth for ambitious brands.",
      },
      { property: "og:title", content: "About DriftCreatives" },
      { property: "og:description", content: "The team, values and story behind DriftCreatives." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Client-first", body: "Your revenue is the only KPI that matters." },
  { icon: Target, title: "Data, always", body: "No hunches, no vanity metrics — only signal." },
  { icon: Lightbulb, title: "Craft", body: "We sweat the details that quietly compound." },
  { icon: Users, title: "Partnership", body: "We plug in like a senior in-house team." },
];

const team = [
  { name: "Elena Vasquez", role: "Founder &amp; Head of Strategy", avatar: "https://i.pravatar.cc/240?img=47" },
  { name: "Marcus Chen", role: "Head of Technical SEO", avatar: "https://i.pravatar.cc/240?img=12" },
  { name: "Priya Sharma", role: "Head of Content", avatar: "https://i.pravatar.cc/240?img=32" },
  { name: "David Okafor", role: "Head of Analytics", avatar: "https://i.pravatar.cc/240?img=15" },
];

function AboutPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="container-page">
          <Breadcrumb items={[{ label: "About" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-primary">About DriftCreatives</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              We build organic growth engines that <span className="gradient-text">compound</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded in 2019, DriftCreatives is a small, senior team of strategists, engineers and
              writers. We work with a limited number of clients each year — because obsessive
              craft doesn't scale by hiring more juniors.
            </p>
          </motion.div>
        </div>
      </section>

      <Stats />

      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Our Values"
          title="Four principles behind every decision."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl glass-card p-7"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeader
          eyebrow="The Team"
          title="Senior. Small. Obsessed with your growth."
          description="You'll work directly with the people building the strategy. No junior handoffs."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-3xl glass-card p-6 text-center"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-primary/30 transition group-hover:ring-primary">
                <img src={m.avatar} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold" dangerouslySetInnerHTML={{ __html: m.name }} />
              <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: m.role }} />
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
