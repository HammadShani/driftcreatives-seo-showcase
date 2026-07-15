import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DriftCreatives" },
      { name: "description", content: "How DriftCreatives collects, uses and protects your data." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

const sections: [string, string][] = [
  ["1. Introduction", "DriftCreatives (\"we\", \"us\", \"our\") respects your privacy. This policy explains what data we collect, how we use it, and your rights."],
  ["2. Data we collect", "Contact information you submit (name, email, company), site usage analytics (anonymised), and communications you send us."],
  ["3. How we use data", "To respond to enquiries, deliver services, improve our website, and send you optional marketing you've opted into. We never sell your data."],
  ["4. Cookies", "We use essential cookies plus first-party analytics. You can disable non-essential cookies in your browser at any time."],
  ["5. Data sharing", "We share data with trusted subprocessors (analytics, email, hosting) under strict contractual protections. We never sell data."],
  ["6. Security", "We use industry-standard encryption in transit and at rest, and follow least-privilege access controls internally."],
  ["7. Your rights", "You have the right to access, correct, export or delete your personal data. Email privacy@driftcreatives.com to exercise them."],
  ["8. Retention", "We retain enquiry data for up to 24 months and client project data for the duration of the engagement plus 7 years for accounting."],
  ["9. Changes", "We may update this policy. Material changes will be notified via email or a site banner."],
  ["10. Contact", "Questions? Email privacy@driftcreatives.com."],
];

function Privacy() {
  return (
    <section className="container-page pt-32 pb-20">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
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
