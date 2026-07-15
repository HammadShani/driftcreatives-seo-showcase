import { Link } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug transition group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.description}</p>
        <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
