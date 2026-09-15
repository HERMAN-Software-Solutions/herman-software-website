import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { PortfolioContent } from "@/components/portfolio/PortfolioContent";
import { getProjects } from "@/sanity/queries";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Portfolio — Software Projects & Case Studies",
  description: "Explore HERMAN's delivered projects across retail, hospitality, agriculture, logistics, and education.",
  path: "/our-work",
});

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="bg-navy-dark py-20 text-center">
        <div className="container-site">
          <h1 className="text-white">Projects We&apos;re Proud Of</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
            Case studies across industries — retail, hospitality, agriculture, fintech, and more.
          </p>
        </div>
      </section>
      <section className="section-padding bg-surface">
        <div className="container-site">
          <PortfolioContent projects={projects} />
        </div>
      </section>
    </>
  );
}