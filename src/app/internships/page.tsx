import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { Button } from "@/components/shared/Button";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const INTERN_HUB_URL = "https://herman-intern-hub.vercel.app";

export const metadata: Metadata = generatePageMetadata({
  title: "Internships — Launch Your Software Career | HERMAN Software Solutions",
  description:
    "Learn software engineering by building real production systems with real mentors at HERMAN Software Solutions. Remote-first, mentor-led, free to apply.",
  path: "/internships",
});

const skills = [
  {
    title: "Design & UX",
    description:
      "Wireframes, user flows, and interface thinking. You ship screens that real people use — not just endpoints.",
  },
  {
    title: "Documentation",
    description:
      "Specs, API docs, and READMEs. You learn how to explain your work so teams can build on it.",
  },
  {
    title: "Version Control",
    description:
      "Branches, pull requests, code reviews. Every line of code you write goes through a real review process.",
  },
  {
    title: "Client Communication",
    description:
      "Standups, demos, and feedback rounds. You present your work to real stakeholders.",
  },
  {
    title: "Testing & Quality",
    description:
      "You write tests, handle edge cases, and learn what 'production-ready' actually means.",
  },
  {
    title: "Professional Habits",
    description:
      "Time management, clear communication, and owning your work — the skills that separate juniors from engineers.",
  },
];

const deliverables = [
  {
    title: "Web Applications",
    description:
      "Next.js, React, and Tailwind CSS. Full-stack dashboards, marketing sites, and admin panels.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Backend Services",
    description:
      "Node.js and Python APIs, PostgreSQL databases, authentication, and background jobs.",
    tags: ["Node.js", "PostgreSQL", "Python"],
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform apps in React Native and Flutter for offline-first use cases.",
    tags: ["React Native", "Flutter"],
  },
  {
    title: "Real Deployments",
    description:
      "Vercel, Docker, and cloud infrastructure. Everything you build ships to real users.",
    tags: ["Vercel", "Docker", "AWS"],
  },
];

const steps = [
  { number: "01", title: "Apply", description: "Fill a short application online. No login needed." },
  { number: "02", title: "Get Approved", description: "We review personally. If accepted, you get an invite by email." },
  { number: "03", title: "Onboard", description: "Set up your profile, pick your tech stack, sign the agreement." },
  { number: "04", title: "Build", description: "Work on real projects with your mentor. Log daily, submit work." },
  { number: "05", title: "Get Certified", description: "Receive a verifiable certificate + experience letter." },
];

const stats = [
  { value: "5+", label: "Years building" },
  { value: "10+", label: "Production systems" },
  { value: "100%", label: "Mentor-led" },
  { value: "30+", label: "Interns planned" },
];

const faqs = [
  {
    question: "Who can apply?",
    answer:
      "Any student or recent graduate interested in software engineering. We welcome applicants from any university in Uganda and beyond — and from anywhere in the world with reliable internet.",
  },
  {
    question: "Is the internship paid?",
    answer:
      "Internships are unpaid by default — you gain experience, mentorship, and a verified certificate. If you're assigned to a billable client project with a signed agreement, compensation is arranged.",
  },
  {
    question: "How long is the internship?",
    answer:
      "Typically 3 months, but the duration is set during registration based on your availability and track.",
  },
  {
    question: "Where is the internship based?",
    answer:
      "The program is remote-first. You can work from anywhere with reliable internet. In-person meetups in Jinja can be arranged when needed.",
  },
  {
    question: "Do I need to know how to code already?",
    answer:
      "You should have some programming fundamentals. We'll teach you the tools, patterns, and professional workflows — but we don't start from zero.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. Every intern who completes the program receives a certificate of internship and an experience letter. Each certificate has a unique ID and QR code — anyone can verify it online.",
  },
];

export default function InternshipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-dark py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 2l24 14v28L30 58 6 44V16L30 2z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="container-site relative z-10 text-center">
          <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-body-sm font-medium text-teal">
            Applications Open
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-white">
            Launch Your Software Career at HERMAN
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-[#D1D5DB]">
            Real projects. Real mentors. Real software engineering — learn the way it&apos;s
            actually done, from a working team that ships production systems every day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-body-sm text-[#D1D5DB]">
            <span>Remote-first</span>
            <span className="text-teal">·</span>
            <span>100% Mentor-led</span>
            <span className="text-teal">·</span>
            <span>Free to apply</span>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={INTERN_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-teal px-8 py-4 text-body font-semibold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-lg"
            >
              Try It Out →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-body font-semibold text-white transition-all duration-200 hover:bg-white hover:text-navy-dark"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Why this program */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-overline">What Sets Us Apart</span>
            <h2 className="mt-3">Software engineering is more than writing code</h2>
            <p className="mt-4 text-body-lg text-foreground">
              At HERMAN, interns learn the full craft — from understanding a problem to
              shipping a solution. Real clients. Real deadlines. Real reviews.
            </p>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <div className="mb-12 text-center">
            <span className="text-overline">What You&apos;ll Learn</span>
            <h2 className="mt-3">Skills that actually matter in a real team</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-card border border-gray-light bg-surface p-6 transition-all duration-300 hover:shadow-cardHover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-teal/10 text-teal">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="mb-2 text-h4">{skill.title}</h3>
                <p className="text-body-sm text-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll ship */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="mb-12 text-center">
            <span className="text-overline">What You&apos;ll Ship</span>
            <h2 className="mt-3">Real systems. Real users. Real impact.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-foreground">
              You won&apos;t build toy apps. You&apos;ll work on systems that real people use
              every day — for schools, cooperatives, and businesses across East Africa.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-gray-light bg-surface p-8 transition-all duration-300 hover:shadow-cardHover"
              >
                <h3 className="mb-3 text-h4">{item.title}</h3>
                <p className="mb-4 text-body-sm text-foreground">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how-it-works" className="section-padding bg-navy-dark text-white">
        <div className="container-site">
          <div className="mb-12 text-center">
            <span className="text-overline text-teal">How It Works</span>
            <h2 className="mt-3 text-white">A structured path from applicant to engineer</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-lg font-bold text-white">
                  {step.number}
                </div>
                <h4 className="mb-2 text-white">{step.title}</h4>
                <p className="text-body-sm text-[#D1D5DB]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-light bg-surface-alt py-12">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-heading md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-body-sm text-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About HERMAN */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-overline">About HERMAN</span>
            <h2 className="mt-3">A Ugandan software company training the next generation</h2>
            <p className="mt-4 text-body-lg text-foreground">
              HERMAN Software Solutions is based in Jinja, Uganda — building robust web, mobile,
              and enterprise systems for clients across East Africa. We&apos;ve shipped production
              systems for schools, cooperatives, retailers, and media platforms, including a
              school platform serving 40+ pages, a voting portal handling live elections, and a
              desktop app on the Microsoft Store.
            </p>
            <p className="mt-4 text-body-lg text-foreground">
              Our internship program exists because we believe the best way to learn software
              engineering is to build real software.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-body-sm text-foreground">
              <span>🇺🇬 Built in Jinja, Uganda</span>
              <span className="text-teal">·</span>
              <span>Remote-first</span>
              <span className="text-teal">·</span>
              <span>Production clients since 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <div className="mb-10 text-center">
            <span className="text-overline">Common Questions</span>
            <h2 className="mt-3">Everything you need to know</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h2 className="text-white">Ready to start building?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-[#D1D5DB]">
            Applications are open. It takes 5 minutes — no login required.
          </p>
          <a
            href={INTERN_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-teal px-10 py-4 text-body-lg font-semibold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-lg"
          >
            Try It Out →
          </a>
          <p className="mt-4 text-body-sm text-[#9CA3AF]">
            Takes you to the HERMAN Intern Hub — our application platform.
          </p>
        </div>
      </section>
    </>
  );
}