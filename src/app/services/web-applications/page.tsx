import { Button } from "@/components/shared/Button";

export default function WebApplicationsPage() {
  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Web & Cloud Applications</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            High-performance websites and web apps built with modern stacks, deployed on reliable cloud infrastructure.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="mb-6">Fast, Scalable, Secure Web Solutions</h2>
          <p className="mb-4 text-body text-foreground">
            From corporate websites that convert visitors into clients, to complex web applications
            handling thousands of transactions daily — we build for speed, security, and scale. Every
            web application we deliver is responsive, accessible, optimized for search engines, and
            deployed on reliable cloud infrastructure.
          </p>

          <h3 className="mb-4 mt-10">What We Build</h3>
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {[
              "Corporate & Marketing Websites",
              "E-Commerce Platforms",
              "Custom Web Portals",
              "SaaS Applications",
              "Real-Time Dashboards",
              "Progressive Web Apps (PWAs)",
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

          <h3 className="mb-4">Typical Technology Stack</h3>
          <div className="mb-8 flex flex-wrap gap-2">
            {["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL", "Vercel", "AWS"].map((tech) => (
              <span key={tech} className="rounded-full bg-navy/5 px-4 py-1.5 text-sm font-medium text-heading">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/get-quote" variant="primary">Start Your Web Project</Button>
          </div>
        </div>
      </section>
    </>
  );
}