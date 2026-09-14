import { Button } from "@/components/shared/Button";

export default function MobileDevelopmentPage() {
  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Mobile Development</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            Native and cross-platform mobile apps for Android and iOS — from concept to app store.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="mb-6">Applications in Your Users&apos; Hands</h2>
          <p className="mb-4 text-body text-foreground">
            Native and cross-platform mobile apps for Android and iOS. We handle everything from
            UI/UX design to App Store and Google Play publishing. Whether you need a customer-facing
            app or an internal field-force tool, we build mobile experiences that users love.
          </p>

          <h3 className="mb-4 mt-10">Typical Technology Stack</h3>
          <div className="mb-8 flex flex-wrap gap-2">
            {["Kotlin", "Swift", "React Native", "Flutter", "Firebase", "REST APIs", "Push Notifications"].map((tech) => (
              <span key={tech} className="rounded-full bg-navy/5 px-4 py-1.5 text-sm font-medium text-heading">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/get-quote" variant="primary">Discuss Your Mobile App</Button>
          </div>
        </div>
      </section>
    </>
  );
}