import { trustedLogos } from "@/data/testimonials";

export function TrustedBy() {
  return (
    <section className="container-page py-12">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
        Trusted by ambitious teams
      </p>
      <div className="mt-8 grid grid-cols-2 gap-6 opacity-60 sm:grid-cols-4 lg:grid-cols-8">
        {trustedLogos.map((name) => (
          <div
            key={name}
            className="text-center text-sm font-semibold tracking-tight text-muted-foreground transition hover:text-foreground"
            dangerouslySetInnerHTML={{ __html: name }}
          />
        ))}
      </div>
    </section>
  );
}
