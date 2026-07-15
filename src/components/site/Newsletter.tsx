import { Mail } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  return (
    <section className="container-page py-16">
      <div className="glass-card rounded-3xl p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Mail className="h-3.5 w-3.5" /> Newsletter
            </span>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              SEO insights, straight to your inbox.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get weekly tips, case studies and playbooks from our team. No fluff.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setOk(true);
              setEmail("");
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-full border border-border bg-background/60 px-5 py-3 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
        {ok && <p className="mt-4 text-sm text-primary">Thanks! Check your inbox soon.</p>}
      </div>
    </section>
  );
}
