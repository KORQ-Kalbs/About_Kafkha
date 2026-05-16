"use client";

import { useEffect, useRef } from "react";
import { animateSectionHeading } from "@/app/lib/gsap-animations";
import { SectionWrapper } from "./SectionWrapper";

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headingTween = headingRef.current
      ? animateSectionHeading(headingRef.current)
      : null;

    return () => {
      headingTween?.scrollTrigger?.kill();
      headingTween?.kill();
    };
  }, []);

  return (
    <SectionWrapper id="about">
      <div ref={headingRef} className="section-heading">
        <p className="text-xs font-medium tracking-widest text-charcoal-muted mb-3">
          About
        </p>
        <h2 className="text-2xl font-medium text-charcoal mb-8">
          A bit about me
        </h2>
      </div>

      <p className="text-base leading-relaxed text-charcoal-muted max-w-xl mb-8">
        I'm a high school student from Bogor Barat, Indonesia who fell in love
        with building things on the web. I started with pure HTML and CSS, and
        now I'm working my way through React, Next.js, and GSAP. When I'm not
        coding, I'm probably playing games or exploring new design ideas.
      </p>

      <ul className="flex flex-col gap-3 text-base text-charcoal-muted">
        {[
          { emoji: "🎓", text: "High school student" },
          { emoji: "📍", text: "Based in Bogor Barat, Indonesia" },
          { emoji: "🌱", text: "Currently mastering React & Next.js" },
          { emoji: "🎮", text: "Gamer on the side" },
        ].map(({ emoji, text }) => (
          <li key={text} className="flex items-center gap-3">
            <span>{emoji}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center gap-6 text-sm text-charcoal-muted">
        <a
          href="mailto:korqsz@proton.me"
          className="hover:text-accent transition-colors"
        >
          korqsz@proton.me
        </a>
        <a
          href="https://github.com/kafkha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/kafkha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </SectionWrapper>
  );
}
