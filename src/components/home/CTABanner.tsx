"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/shared/Button";
import { getSiteSettings } from "@/sanity/queries";

export function CTABanner() {
  const [settings, setSettings] = useState<any>({});

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  return (
    <section className="bg-navy-dark py-16 md:py-20">
      <div className="container-site text-center">
        <h2 className="text-white">Let&apos;s Talk About Your Requirements</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
          Whether you have a detailed technical brief or just an idea, we&apos;re ready to
          listen and advise. Honest feasibility assessment, no sales pressure.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/get-quote" variant="primary" className="min-w-[200px]">
            Start the Conversation
          </Button>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2 text-body-sm text-gray-medium sm:flex-row sm:justify-center sm:gap-6">
          <a href={`mailto:${settings?.email || "infohermansoftware@gmail.com"}`} className="hover:text-teal transition-colors">
            {settings?.email || "infohermansoftware@gmail.com"}
          </a>
          <span className="hidden sm:inline">|</span>
          <a href={`tel:${(settings?.phone || "+256772723188").replace(/\D/g, "")}`} className="hover:text-teal transition-colors">
            {settings?.phone || "+256772723188"}
          </a>
        </div>
      </div>
    </section>
  );
}