"use client";

import type { ReactNode } from "react";

export function SectionWrapper({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10">{children}</div>
    </section>
  );
}
