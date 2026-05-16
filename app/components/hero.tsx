"use client";

import { useEffect } from "react";
import { animateHeroContent } from "@/app/lib/gsap-animations";

export default function Hero() {
  useEffect(() => {
    const tween = animateHeroContent();
    return () => {
      tween?.kill();
    };
  }, []);

  return (
    <section className="py-28 md:py-40">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="hero-content flex flex-col gap-5 max-w-xl">
            <span className="inline-flex items-center gap-2 text-sm text-accent bg-cream-surface border border-cream-border px-4 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </span>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-charcoal leading-none">
              Kafkha
              <br />
              Yasin Albian
            </h1>

            <p className="text-lg text-charcoal-muted font-normal">
              Web Developer & Designer
            </p>

            <p className="text-base leading-relaxed text-charcoal-muted max-w-md">
              A high school student from Bogor, Indonesia building clean,
              thoughtful web experiences with React, Next.js, and a lot of
              curiosity.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-charcoal border border-cream-border rounded-xl px-6 py-3 w-fit hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Let's talk
              <span>{"->"}</span>
            </a>
          </div>

          {/**
           * Avatar - only render if photo exists
           *
           * <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-cream-border flex-shrink-0">
           *   <Image src="/avatar.jpg" alt="Kafkha" width={224} height={224} className="object-cover w-full h-full" />
           * </div>
           */}
        </div>
      </div>
    </section>
  );
}
