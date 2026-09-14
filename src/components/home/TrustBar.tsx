"use client";

import { useState, useEffect } from "react";
import { CountUp } from "@/components/shared/CountUp";
import { getStats, getTechnologies } from "@/sanity/queries";

export function TrustBar() {
  const [stats, setStats] = useState<any[]>([]);
  const [technologies, setTechnologies] = useState<any[]>([]);

  useEffect(() => {
    getStats().then(setStats);
    getTechnologies().then(setTechnologies);
  }, []);

  return (
    <section className="border-b border-gray-light bg-surface-alt py-8 dark:bg-navy-dark dark:border-navy-light">
      <div className="container-site">
        <p className="mb-6 text-center text-body-sm font-medium uppercase tracking-wider text-gray-medium">
          Trusted technology partner for startups, SMEs, and enterprises across East Africa
        </p>

        {/* Stats with Animated Counters */}
        <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-heading dark:text-white">
                <CountUp end={parseInt(stat.value) || 0} suffix={stat.suffix || ""} />
              </div>
              <div className="text-body-sm text-gray-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="rounded-full border border-gray-medium/30 bg-surface px-4 py-1.5 text-xs font-medium text-gray-medium dark:bg-navy-light dark:border-navy dark:text-gray-medium"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}