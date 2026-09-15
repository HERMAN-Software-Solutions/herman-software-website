"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getTeamMember } from "@/sanity/queries";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Button } from "@/components/shared/Button";
import { PortableText } from "@portabletext/react";

export default function TeamMemberPage() {
  const { slug } = useParams();
  const [member, setMember] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getTeamMember(slug as string).then((data) => {
        setMember(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <section className="section-padding bg-surface">
        <div className="container-site text-center">
          <p className="text-body-lg text-foreground">Loading...</p>
        </div>
      </section>
    );
  }

  if (!member) {
    return (
      <section className="section-padding bg-surface">
        <div className="container-site text-center">
          <h1 className="mb-4">Team Member Not Found</h1>
          <p className="text-body text-foreground">The team member you're looking for doesn't exist.</p>
          <Button href="/about" variant="primary" className="mt-6">Back to About</Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark py-16 md:py-20">
        <div className="container-site">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-surface md:h-40 md:w-40">
              {member.image ? (
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-heading">
                  {member.name.split(" ").map((n: string) => n[0]).join("").toUpperCase()}
                </div>
              )}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-white">{member.name}</h1>
              <p className="mt-2 text-body-lg text-teal">{member.role}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-md border border-gray-medium px-4 py-2 text-body-sm text-gray-medium hover:bg-surface hover:text-heading transition-colors">
                    LinkedIn
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="rounded-md border border-gray-medium px-4 py-2 text-body-sm text-gray-medium hover:bg-surface hover:text-heading transition-colors">
                    GitHub
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="rounded-md border border-gray-medium px-4 py-2 text-body-sm text-gray-medium hover:bg-surface hover:text-heading transition-colors">
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="About" />
            {member.fullBio ? (
              <div className="prose prose-lg max-w-none text-foreground">
                <PortableText value={member.fullBio} />
              </div>
            ) : (
              <p className="text-body text-foreground">{member.bio}</p>
            )}
          </div>
        </div>
      </section>

      {/* Skills */}
      {member.skills && member.skills.length > 0 && (
        <section className="section-padding bg-surface-alt">
          <div className="container-site">
            <SectionHeading title="Skills & Expertise" />
            <div className="flex flex-wrap justify-center gap-3">
              {member.skills.map((skill: string) => (
                <span key={skill} className="rounded-full bg-navy-dark px-4 py-2 text-body-sm font-medium text-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {member.projects && member.projects.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-site">
            <SectionHeading
              title="Projects Worked On"
              subtitle="Key projects this team member has contributed to."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {member.projects.map((project: any) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  sector={project.sector}
                  challenge={project.challenge}
                  result={project.result}
                  href={`/our-work/${project.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-dark py-16 text-center">
        <div className="container-site">
          <h2 className="text-white">Want to Work With Our Team?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-gray-medium">
            Let's discuss your project and find the right experts for the job.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}