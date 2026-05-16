"use client";

import { useEffect, useRef } from "react";
import {
  animateSectionHeading,
  animateSkillGroups,
} from "@/app/lib/gsap-animations";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { SkillChip } from "@/app/components/SkillChip";

const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "Next.js",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["GitHub", "NPM", "Composer", "VS Code", "Figma", "Unity"],
  },
];

export default function Skills() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headingTween = headingRef.current
      ? animateSectionHeading(headingRef.current)
      : null;
    const groupTween = animateSkillGroups();

    return () => {
      headingTween?.scrollTrigger?.kill();
      headingTween?.kill();
      groupTween?.scrollTrigger?.kill();
      groupTween?.kill();
    };
  }, []);

  return (
    <SectionWrapper id="skills">
      <div ref={headingRef} className="section-heading">
        <p className="text-xs font-medium tracking-widest text-charcoal-muted mb-3">
          Stack
        </p>
        <h2 className="text-2xl font-medium text-charcoal mb-12">
          What I work with
        </h2>
      </div>

      {skills.map((group) => (
        <div key={group.category} className="skill-group mb-8">
          <p className="text-xs font-medium tracking-widest text-charcoal-muted mb-4">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <SkillChip key={item} label={item} />
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
