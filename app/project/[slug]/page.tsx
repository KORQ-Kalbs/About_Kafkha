import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { SkillChip } from "@/app/components/SkillChip";
import Link from "next/link";

const projectDetails: Record<string, any> = {
  "toko-imaji": {
    title: "TOKO IMAJI",
    subtitle: "Full-Featured E-Commerce Platform",
    tech: ["PHP", "MYSQL", "BOOTSTRAP"],
    description:
      "A complete e-commerce solution built with PHP and MySQL. Features include product management, shopping cart, checkout system, and admin dashboard for inventory management.",
    highlights: [
      "Dynamic product catalog with search and filtering",
      "Secure checkout with payment integration",
      "User account management and order history",
      "Admin panel for product management",
    ],
  },
  takoyakin: {
    title: "TAKOYAKIN",
    subtitle: "Online Takoyaki Shop",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    description:
      "An interactive online shop for selling Takoyaki. Built with vanilla JavaScript and featuring a responsive design, menu showcase, and order system.",
    highlights: [
      "Responsive menu interface",
      "Interactive product selection",
      "Real-time order tracking",
      "Mobile-optimized design",
    ],
    link: "https://produktif-tako.vercel.app/",
  },
  "music-verse": {
    title: "MUSIC VERSE",
    subtitle: "Personal Music Showcase",
    tech: ["PHP", "TAILWINDCSS", "ALPINE.JS"],
    description:
      "A platform showcasing personal music taste and playlist recommendations. Built with Alpine.js for interactivity and TailwindCSS for modern styling.",
    highlights: [
      "Dynamic playlist curation",
      "Music discovery features",
      "Social sharing integration",
      "Responsive audio player",
    ],
  },
  "personal-v2": {
    title: "PORTFOLIO V2",
    subtitle: "Responsive Portfolio Design",
    tech: ["JAVASCRIPT", "TAILWINDCSS", "ALPINE.JS"],
    description:
      "Second iteration of personal portfolio featuring improved design and enhanced interactivity using Alpine.js for state management and smooth transitions.",
    highlights: [
      "Enhanced UI/UX",
      "Smooth page transitions",
      "Improved performance",
      "Better mobile experience",
    ],
  },
  "personal-v1": {
    title: "PORTFOLIO V1",
    subtitle: "First Portfolio Iteration",
    tech: ["LARAVEL", "TAILWINDCSS", "ALPINE.JS"],
    description:
      "First portfolio website built with Laravel backend and TailwindCSS frontend. Served as foundation for portfolio development and showcased initial projects.",
    highlights: [
      "Laravel backend setup",
      "TailwindCSS styling",
      "Alpine.js interactions",
      "Project showcase grid",
    ],
  },
  "whos-note": {
    title: "WHO'S NOTE?",
    subtitle: "Note and Diary Application",
    tech: ["PHP", "TAILWINDCSS"],
    description:
      "A note-taking application with diary features. Allows users to create, organize, and manage personal notes with categorization and search functionality.",
    highlights: [
      "Note creation and editing",
      "Categorization system",
      "Search functionality",
      "Persistent storage",
    ],
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <SectionWrapper id="project">
            <div className="text-center">
              <p className="text-xs font-medium tracking-widest text-charcoal-muted mb-3">
                Project
              </p>
              <h1 className="text-3xl md:text-4xl font-medium text-charcoal mb-4">
                Project not found
              </h1>
              <Link
                href="/#works"
                className="inline-flex items-center gap-2 text-sm text-charcoal border border-cream-border rounded-xl px-6 py-3 w-fit hover:border-accent hover:text-accent transition-colors"
              >
                Back to projects {"->"}
              </Link>
            </div>
          </SectionWrapper>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <SectionWrapper id="project">
          <div className="flex flex-col gap-6">
            <Link
              href="/#works"
              className="text-sm text-accent hover:text-accent-hover transition-colors"
            >
              &larr; Back to projects
            </Link>
            <h1 className="text-3xl md:text-5xl font-medium text-charcoal">
              {project.title}
            </h1>
            <p className="text-base text-charcoal-muted">{project.subtitle}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <SkillChip key={tech} label={tech} />
              ))}
            </div>

            <p className="text-base leading-relaxed text-charcoal-muted">
              {project.description}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-charcoal border border-cream-border rounded-xl px-6 py-3 w-fit hover:border-accent hover:text-accent transition-colors"
              >
                View live project {"->"}
              </a>
            )}
          </div>
        </SectionWrapper>

        <SectionWrapper id="highlights">
          <div className="section-heading mb-8">
            <p className="text-xs font-medium tracking-widest text-charcoal-muted mb-3">
              Highlights
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-charcoal">
              Key features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.highlights.map((highlight: string, index: number) => (
              <div
                key={index}
                className="bg-cream-surface border border-cream-border rounded-2xl p-6 text-base text-charcoal-muted"
              >
                {highlight}
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="cta">
          <div className="text-center">
            <p className="text-sm text-charcoal-muted mb-6">
              Want to work on something similar?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm text-charcoal border border-cream-border rounded-xl px-6 py-3 w-fit hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch {"->"}
            </Link>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
