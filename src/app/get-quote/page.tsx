import { QuoteForm } from "@/components/forms/QuoteForm";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Request a Quote — HERMAN Software Solutions",
  description: "Tell us about your software project. Free, honest feasibility assessment. No pressure, no obligation.",
  path: "/get-quote",
});
export default function QuotePage() {
  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Tell Us About Your Project</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            The more detail you share, the more accurate our response will be.
            Free feasibility assessment, no obligation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site mx-auto max-w-2xl">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}