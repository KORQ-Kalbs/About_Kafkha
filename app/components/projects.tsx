"use client";

import { useEffect, useRef } from "react";
import {
  animateProjectCards,
  animateSectionHeading,
} from "@/app/lib/gsap-animations";
import { SectionWrapper } from "./SectionWrapper";
import { SkillChip } from "./SkillChip";

const projects = [
  {
    name: "Yellow Drink",
    description: "A point-of-sale system for managing orders and inventory.",
    tags: ["Laravel", "MySQL", "TailwindCSS"],
    link: "#",
  },
  {
    name: "Takoyaki",
    description: "A simple online shop with product browsing and cart flow.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    name: "Arcloom",
    description: "An ERD & PRD generation tool using AI-powered diagramming.",
    tags: ["Laravel", "React", "TailwindCSS", "MermaidJS", "PostgreSQL"],
    link: "#",
  },
  {
    name: "Portfolio V2",
    description: "This site - rebuilt with Next.js, Tailwind, and GSAP.",
    tags: ["Next.js", "TailwindCSS", "GSAP"],
    link: "#",
  },
  {
    name: "Portfolio V1",
    description:
      "My first portfolio - built from scratch with vanilla web tech.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    name: "Collect Stars",
    description: "A small interactive game built in Unity.",
    tags: ["Unity", "C#"],
    link: "#",
  },
  {
    name: "PKL Notes",
    description: "A productivity tool for note-taking during internship.",
    tags: ["Next.js", "TailwindCSS", "Supabase"],
    link: "#",
  },
];

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headingTween = headingRef.current
      ? animateSectionHeading(headingRef.current)
      : null;
    const cardsTween = animateProjectCards();

    return () => {
      headingTween?.scrollTrigger?.kill();
      headingTween?.kill();
      cardsTween?.scrollTrigger?.kill();
      cardsTween?.kill();
    };
  }, []);

  return (
    <SectionWrapper id="works">
      <div ref={headingRef} className="section-heading">
        <p className="text-xs font-medium tracking-widest text-charcoal-muted mb-3">
          Work
        </p>
        <h2 className="text-2xl font-medium text-charcoal mb-10">
          Selected projects
        </h2>
      </div>

      <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="project-card bg-cream-surface border border-cream-border rounded-2xl p-6 flex flex-col gap-4 group hover:border-accent transition-colors duration-200"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-medium text-charcoal">
                {project.name}
              </h3>
              <a
                href={project.link}
                className="text-charcoal-muted group-hover:text-accent transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore {"->"}
              </a>
            </div>

            <p className="text-sm leading-relaxed text-charcoal-muted">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <SkillChip key={tag} label={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
