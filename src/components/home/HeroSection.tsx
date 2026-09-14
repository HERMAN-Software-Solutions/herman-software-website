"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/shared/Button";
import { getSiteSettings } from "@/sanity/queries";

export function HeroSection() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy-dark">
      {/* Hexagon Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 2l24 14v28L30 58 6 44V16L30 2z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-light/90" />

      {/* Content */}
      <div className="container-site relative z-10 py-20 text-center">
        <h1 className="mx-auto max-w-4xl text-white">
          {settings?.heroTitle || "Engineered Software, Measurable Results — From Jinja, for the World"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-body-lg text-[#D1D5DB]">
          {settings?.heroDescription || "We design, develop, and deploy robust software systems — websites, mobile apps, and enterprise platforms — built on sound architecture and delivered with clear, collaborative communication."}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/our-work" variant="primary" className="min-w-[180px]">
            Explore Our Work
          </Button>
          <Button href="/get-quote" variant="secondary" className="border-white text-white hover:bg-surface hover:text-heading min-w-[180px]">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}