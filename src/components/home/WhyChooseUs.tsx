"use client";

import { useState, useEffect } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getValuePropositions } from "@/sanity/queries";

const defaultIcons: Record<number, React.ReactNode> = {
  0: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="22" x2="12" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
    </svg>
  ),
  1: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  2: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  3: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  ),
};

export function WhyChooseUs() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    getValuePropositions().then(setItems);
  }, []);

  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-site">
        <SectionHeading
          title="Why Clients Choose Us"
          subtitle="Four principles that set us apart and keep our clients coming back."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="card-base flex gap-5 p-6 transition-all duration-300 hover:shadow-cardHover"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-navy/5 text-heading">
                {defaultIcons[i] || defaultIcons[0]}
              </div>
              <div>
                <h3 className="mb-2 text-h4">{item.title}</h3>
                <p className="text-body-sm text-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}