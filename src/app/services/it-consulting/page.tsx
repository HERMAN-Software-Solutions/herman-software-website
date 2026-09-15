import { Button } from "@/components/shared/Button";

export default function ITConsultingPage() {
  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">IT Strategy & Consulting</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            Honest technical advisory — architecture assessments, cloud migration, cybersecurity, and digital transformation roadmaps.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="mb-6">Pragmatic Advice, Never Over-Engineered</h2>
          <p className="mb-4 text-body text-foreground">
            Not sure what technology you need? Planning a digital transformation or cloud migration?
            We provide independent assessments and actionable recommendations — always in plain
            language your stakeholders can understand.
          </p>

          <h3 className="mb-4 mt-10">Our Deliverables</h3>
          <div className="mb-8 space-y-3">
            {[
              "Technical Audit Reports",
              "System Architecture Documents",
              "Cloud Migration Plans",
              "Security Gap Analyses",
              "Technology Roadmaps",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-card border border-gray-light p-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-body-sm font-medium text-heading">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/get-quote" variant="primary">Request a Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}