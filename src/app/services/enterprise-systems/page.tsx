import { Button } from "@/components/shared/Button";

export default function EnterpriseSystemsPage() {
  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Enterprise Systems</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            ERP, CRM, and POS platforms configured to fit your business — not the other way around.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="mb-6">Serious Tools for Serious Operations</h2>
          <p className="mb-4 text-body text-foreground">
            We configure, customize, and deploy enterprise platforms tailored to your industry and
            workflows. No bloated features, no unnecessary complexity. We handle data migration,
            training, and ongoing support with guaranteed SLAs.
          </p>

          <h3 className="mb-4 mt-10">Typical Technology Stack</h3>
          <div className="mb-8 flex flex-wrap gap-2">
            {["Odoo", "ERPNext", "Custom ERP", "POS Systems", "CRM", "PostgreSQL", "Docker"].map((tech) => (
              <span key={tech} className="rounded-full bg-navy/5 px-4 py-1.5 text-sm font-medium text-heading">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/get-quote" variant="primary">Discuss Enterprise Needs</Button>
          </div>
        </div>
      </section>
    </>
  );
}