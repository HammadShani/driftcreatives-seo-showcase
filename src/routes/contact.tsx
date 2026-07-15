import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { motion } from "framer-motion";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DriftCreatives — Book a Free SEO Strategy Call" },
      {
        name: "description",
        content:
          "Book a free 30-minute SEO strategy call with DriftCreatives, or reach us by email, phone or WhatsApp.",
      },
      { property: "og:title", content: "Contact DriftCreatives" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-primary">Contact</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              Let's talk about <span className="gradient-text">your growth</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a free 30-minute strategy call. We'll audit your site live, share what we'd do,
              and you decide if we're a fit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl glass-card p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We respond within one business day.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="First name" name="firstName" required />
                <Field label="Last name" name="lastName" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Website" name="website" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Budget</label>
                  <select className="mt-1.5 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary">
                    <option>Under $2,500/mo</option>
                    <option>$2,500 – $5,500/mo</option>
                    <option>$5,500 – $12,000/mo</option>
                    <option>$12,000+/mo</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Tell us about your goals</label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
              >
                Send message
              </button>
              {sent && (
                <p className="mt-4 text-sm text-primary">
                  Thanks — we'll be in touch within one business day.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-4">
            <InfoCard icon={Mail} title="Email us" body="hello@driftcreatives.com" href="mailto:hello@driftcreatives.com" />
            <InfoCard icon={Phone} title="Call us" body="+1 (555) 123-4567" href="tel:+15551234567" />
            <InfoCard
              icon={MessageCircle}
              title="WhatsApp"
              body="Chat with us instantly"
              href="https://wa.me/15551234567"
              accent
            />
            <InfoCard
              icon={MapPin}
              title="Visit"
              body="128 Market Street, Suite 400, San Francisco, CA"
            />
            <InfoCard
              icon={Clock}
              title="Business hours"
              body="Mon – Fri · 9am – 6pm PT"
            />
            <div className="rounded-3xl glass-card p-6">
              <h3 className="text-sm font-semibold">Follow us</h3>
              <div className="mt-3 flex gap-2">
                {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:bg-primary hover:text-primary-foreground"
                    aria-label="Social"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl glass-card">
          <div className="relative aspect-[16/6] w-full">
            <iframe
              title="Our location"
              src="https://www.google.com/maps?q=San+Francisco&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[30%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  href,
  accent,
}: {
  icon: typeof Mail;
  title: string;
  body: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div className={`rounded-3xl p-6 ${accent ? "gradient-primary text-primary-foreground" : "glass-card"}`}>
      <div
        className={`grid h-10 w-10 place-items-center rounded-2xl ${
          accent ? "bg-primary-foreground/20" : "gradient-primary"
        }`}
      >
        <Icon className={`h-5 w-5 ${accent ? "text-primary-foreground" : "text-primary-foreground"}`} />
      </div>
      <h3 className="mt-4 text-sm font-semibold">{title}</h3>
      <p className={`mt-1 text-sm ${accent ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
        {body}
      </p>
    </div>
  );
  return href ? (
    <a href={href} className="block transition hover:-translate-y-0.5">
      {inner}
    </a>
  ) : (
    inner
  );
}
