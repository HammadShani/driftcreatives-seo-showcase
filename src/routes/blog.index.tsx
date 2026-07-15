import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { BlogCard } from "@/components/site/BlogCard";
import { Newsletter } from "@/components/site/Newsletter";
import { blogs, categories } from "@/data/blogs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "SEO Blog — Playbooks &amp; Insights | DriftCreatives" },
      {
        name: "description",
        content:
          "Field notes, playbooks and teardowns on SEO, Google Ads and web performance from the DriftCreatives team.",
      },
      { property: "og:title", content: "SEO Blog — DriftCreatives" },
      { property: "og:description", content: "Field notes and playbooks on modern SEO." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const okCat = cat === "All" || b.category === cat;
      const okQ =
        q.trim() === "" ||
        b.title.toLowerCase().includes(q.toLowerCase()) ||
        b.description.toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [q, cat]);

  return (
    <>
      <section className="gradient-hero pt-32 pb-12">
        <div className="container-page">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-medium text-primary">The Blog</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              SEO playbooks, <span className="gradient-text">no fluff</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Everything we learn — shipped as concise, actionable guides you can use tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="glass-card rounded-3xl p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles…"
                className="w-full rounded-full border border-border bg-background/60 py-3 pl-11 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                  cat === c
                    ? "border-transparent gradient-primary text-primary-foreground"
                    : "border-border bg-background/50 text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">
            No articles matched your search.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </section>

      <Newsletter />
    </>
  );
}
