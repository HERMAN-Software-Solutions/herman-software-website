"use client";

import { useState, useEffect } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getPricingPlans, getFAQs } from "@/sanity/queries";
import { CardSkeleton } from "@/components/shared/Skeleton";

export default function PricingPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPricingPlans(), getFAQs()]).then(([p, f]) => {
      setPlans(p);
      setFaqs(f.filter((faq: any) => faq.category === "Pricing"));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <h1 className="text-white">Transparent Pricing</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            Honest estimates based on project scope. Every project is different — let&apos;s discuss yours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site">
          <SectionHeading
            title="What Does It Cost?"
            subtitle="Starting prices for common project types. All include discovery, design, development, testing, and deployment."
          />
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card-base flex flex-col p-6 transition-all duration-300 hover:shadow-cardHover ${
                    plan.highlighted ? "ring-2 ring-teal relative" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-h4 mb-2">{plan.name}</h3>
                  <div className="mb-1 text-2xl font-bold text-heading dark:text-white">{plan.price}</div>
                  {plan.timeline && <p className="mb-6 text-body-sm text-gray-medium">{plan.timeline}</p>}
                  <ul className="mb-8 flex-1 space-y-2">
                    {plan.features?.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2 text-body-sm text-foreground">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href={plan.href || "/get-quote"} variant={plan.highlighted ? "primary" : "secondary"} className="w-full text-center">
                    {plan.cta || "Get Started"}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <SectionHeading
            title="Not Sure What You Need?"
            subtitle="Book a free 30-minute consultation. We'll help you scope your project and give you a clear estimate."
          />
          <div className="text-center">
            <Button href="/contact" variant="primary">Schedule Free Consultation</Button>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-site mx-auto max-w-3xl">
            <SectionHeading title="Frequently Asked Questions" subtitle="Common questions about our pricing and process." />
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="card-base group">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground dark:text-white">
                    {faq.question}
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="px-4 pb-4 text-body-sm text-foreground dark:text-gray-medium">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fallback hardcoded FAQs if Sanity has none */}
      {faqs.length === 0 && !loading && (
        <section className="section-padding bg-surface">
          <div className="container-site mx-auto max-w-3xl">
            <SectionHeading title="Frequently Asked Questions" subtitle="Common questions about our pricing and process." />
            <div className="space-y-4">
              {[
                {
                  q: "Why the price range?",
                  a: "Every project is unique. The final cost depends on complexity, number of features, integrations required, and timeline. We provide a firm quote after understanding your requirements — never a surprise invoice.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes. For projects over $5,000, we typically split payments into milestones: 30% upfront, 30% at midpoint, and 40% on delivery. We're flexible — let's discuss what works for your budget.",
                },
                {
                  q: "What's included in the price?",
                  a: "All our prices include: discovery workshops, system architecture, UI/UX design, development, testing, deployment, documentation, and the included support period. No hidden fees.",
                },
                {
                  q: "Do you work with startups on a tight budget?",
                  a: "Absolutely. We've worked with many startups and can tailor solutions to fit your budget. Sometimes an MVP (Minimum Viable Product) is the right starting point — we can help you prioritize features.",
                },
              ].map((faq) => (
                <details key={faq.q} className="card-base group">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground dark:text-white">
                    {faq.q}
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="px-4 pb-4 text-body-sm text-foreground dark:text-gray-medium">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}