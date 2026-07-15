import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 420, suffix: "%", label: "Average traffic growth" },
  { value: 180, suffix: "+", label: "Clients served" },
  { value: 12, suffix: "M", label: "Keywords ranked" },
  { value: 98, suffix: "%", label: "Client retention" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 2, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="container-page py-12">
      <div className="grid grid-cols-2 gap-4 rounded-3xl glass-card p-8 md:grid-cols-4 md:p-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold gradient-text md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
