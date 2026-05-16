"use client";

export function SkillChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center bg-cream-surface text-charcoal text-sm px-4 py-1.5 rounded-full border border-cream-border">
      {label}
    </span>
  );
}
