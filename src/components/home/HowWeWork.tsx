"use client";

import { useState, useEffect } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getProcessSteps } from "@/sanity/queries";

export function HowWeWork() {
  const [steps, setSteps] = useState<any[]>([]);

  useEffect(() => {
    getProcessSteps().then(setSteps);
  }, []);

  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-site">
        <SectionHeading
          title="How We Work"
          subtitle="A proven methodology that keeps your project on track, on budget, and aligned with your goals."
        />

        {/* Desktop: Horizontal Timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-12 h-0.5 bg-gray-medium/30" />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.stepNumber} className="relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-navy-dark text-lg font-bold text-white">
                  {String(step.stepNumber).padStart(2, "0")}
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-body-sm text-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="space-y-8 lg:hidden">
          {steps.map((step) => (
            <div key={step.stepNumber} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy-dark text-sm font-bold text-white">
                {String(step.stepNumber).padStart(2, "0")}
              </div>
              <div>
                <h4 className="mb-1">{step.title}</h4>
                <p className="text-body-sm text-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}