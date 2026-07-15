import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { services, getService } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — DriftCreatives` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.title} — DriftCreatives` },
        { property: "og:description", content: s.description },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Services", to: "/services" }, { label: service.title }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className={`inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-glow`}
            >
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">{service.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{service.short}</p>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">{service.description}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl glass-card p-8">
            <h2 className="text-2xl font-bold">What's included</h2>
            <ul className="mt-6 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full gradient-primary text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl glass-card p-8">
            <h2 className="text-2xl font-bold">Our process</h2>
            <ol className="mt-6 space-y-5">
              {service.process.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full gradient-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold">Explore other services</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => {
            const OI = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-3xl glass-card p-6 transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white`}>
                  <OI className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
