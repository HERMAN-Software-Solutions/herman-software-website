import { Button } from "@/components/shared/Button";

export default function CustomSoftwarePage() {
  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Custom Software Engineering</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            Tailor-made systems for your unique workflows — built from the ground up.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="mb-6">Systems That Fit Your Operations</h2>
          <p className="mb-4 text-body text-foreground">
            Off-the-shelf software forces you to change how you work. We build systems that adapt to
            you — whether it&apos;s inventory management, logistics tracking, HR platforms, or bespoke
            internal tools. Every solution is designed around your unique workflows, not the other
            way around.
          </p>
          <p className="mb-4 text-body text-foreground">
            We&apos;ve built custom ERPs for agricultural cooperatives, inventory systems for retail
            chains, fleet management platforms for logistics companies, and membership portals for
            professional associations. If your operations have a unique shape, we build software
            that fits it perfectly.
          </p>

          <h3 className="mb-4 mt-10">Our Approach</h3>
          <div className="mb-8 space-y-4">
            {[
              { step: "Requirements Workshop", desc: "We sit with your team to understand workflows, pain points, and goals." },
              { step: "System Architecture", desc: "We design the data model, API structure, and system components." },
              { step: "Iterative Development", desc: "Two-week sprints with demos — you see progress and give feedback constantly." },
              { step: "Testing & QA", desc: "Automated tests, manual QA, and user acceptance testing before launch." },
              { step: "Deployment & Training", desc: "We deploy to production, train your team, and provide documentation." },
              { step: "Ongoing Support", desc: "Maintenance SLA with guaranteed response times and regular health checks." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-card border border-gray-light p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-heading">{item.step}</p>
                  <p className="text-body-sm text-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mb-4">Typical Technology Stack</h3>
          <div className="mb-8 flex flex-wrap gap-2">
            {["Python", "Django", "Node.js", "Laravel", "PostgreSQL", "React", "Docker", "AWS"].map((tech) => (
              <span key={tech} className="rounded-full bg-navy/5 px-4 py-1.5 text-sm font-medium text-heading">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/get-quote" variant="primary">Discuss Your Custom Project</Button>
          </div>
        </div>
      </section>
    </>
  );
}