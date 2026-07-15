import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { BlogCard } from "@/components/site/BlogCard";
import { Newsletter } from "@/components/site/Newsletter";
import { blogs, getBlog } from "@/data/blogs";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const b = getBlog(params.slug);
    if (!b) throw notFound();
    return { post: b };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — DriftCreatives` },
        { name: "description", content: p.description },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pt-32">
        <div className="container-page">
          <Breadcrumb
            items={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />{" "}
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingTime}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="container-page mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div className="container-page mt-12 max-w-3xl">
          <div className="prose-styles space-y-8">
            {post.content.map((section: { heading: string; body: string }) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/80 md:text-lg">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="container-page py-20">
        <h2 className="text-2xl font-bold">Related reads</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((b) => (
            <BlogCard key={b.slug} post={b} />
          ))}
        </div>
        <div className="mt-8">
          <Link to="/blog" className="text-sm font-semibold text-primary hover:underline">
            ← Back to all articles
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
