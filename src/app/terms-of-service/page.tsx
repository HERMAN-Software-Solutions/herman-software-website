export default function TermsPage() {
  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Terms of Service</h1>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site mx-auto max-w-3xl prose prose-lg">
          <p className="text-body text-foreground">
            By accessing and using the HERMAN Software Solutions Limited website and services,
            you agree to be bound by these Terms of Service.
          </p>

          <h2 className="mt-8">Services</h2>
          <p className="text-body text-foreground">
            HERMAN Software Solutions Limited provides custom software development, web
            development, mobile application development, IT consulting, and enterprise systems
            deployment services. The scope, timeline, and deliverables for each project are
            defined in a separate agreement with each client.
          </p>

          <h2 className="mt-8">Intellectual Property</h2>
          <p className="text-body text-foreground">
            Upon full payment, clients receive ownership of the custom code developed for their
            project. We retain the right to use non-proprietary components, libraries, and
            methodologies developed during the project.
          </p>

          <h2 className="mt-8">Limitation of Liability</h2>
          <p className="text-body text-foreground">
            HERMAN Software Solutions Limited shall not be liable for any indirect, incidental,
            or consequential damages arising from the use of our services, except as explicitly
            stated in a signed service agreement.
          </p>

          <h2 className="mt-8">Contact</h2>
          <p className="text-body text-foreground">
            For questions about these Terms, please contact us at infohermansoftware@gmail.com.
          </p>

          <p className="mt-8 text-body-sm text-gray-medium">
            Last updated: May 2026
          </p>
        </div>
      </section>
    </>
  );
}