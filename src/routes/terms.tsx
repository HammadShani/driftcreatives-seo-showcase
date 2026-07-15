import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms &amp; Conditions — DriftCreatives" },
      { name: "description", content: "The terms governing use of DriftCreatives services and website." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const sections: [string, string][] = [
  ["1. Acceptance", "By accessing driftcreatives.com or engaging our services, you agree to these terms."],
  ["2. Services", "We provide SEO, Google Ads and web performance services under separate signed statements of work."],
  ["3. Fees & payment", "Retainers are billed monthly in advance. Invoices are due within 14 days. Late payments accrue 1.5% interest per month."],
  ["4. Deliverables", "All deliverables become the client's property upon full payment. We retain the right to reference the work in our portfolio."],
  ["5. Confidentiality", "Both parties agree to protect the other's confidential information, indefinitely."],
  ["6. Warranty & liability", "Services are provided on a best-efforts basis. Our aggregate liability is limited to fees paid in the prior 3 months."],
  ["7. Termination", "Either party may terminate with 30 days' written notice. Fees for work completed remain due."],
  ["8. IP & licences", "We use best-in-class third-party tools; associated licence terms apply."],
  ["9. Governing law", "These terms are governed by the laws of the State of California, USA."],
  ["10. Contact", "For questions, email legal@driftcreatives.com."],
];

function Terms() {
  return (
    <section className="container-page pt-32 pb-20">
      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold md:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>
        <div className="mt-10 space-y-8">
          {sections.map(([h, b]) => (
            <section key={h}>
              <h2 className="text-xl font-semibold">{h}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{b}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
