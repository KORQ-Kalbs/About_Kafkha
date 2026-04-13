"use client";

const projects = [
  {
    id: 1,
    title: "Toko Imaji",
    description:
      "Full-featured e-commerce platform with product management, cart, and checkout",
    tech: ["PHP", "MySQL", "Bootstrap"],
    color: "from-pink-500 to-rose-600",
    image: "🛍️",
  },
  {
    id: 2,
    title: "Takoyakin",
    description:
      "E-commerce website for selling Takoyaki with interactive menu system",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://produktif-tako.vercel.app/",
    color: "from-orange-500 to-red-600",
    image: "🍡",
  },
  {
    id: 3,
    title: "Music Verse",
    description:
      "Personal music taste showcase with playlist curation and recommendations",
    tech: ["PHP", "TailwindCSS", "Alpine.js"],
    color: "from-purple-500 to-violet-600",
    image: "🎵",
  },
  {
    id: 4,
    title: "Personal Website v2",
    description:
      "Responsive portfolio showcasing projects and skills with smooth interactions",
    tech: ["JavaScript", "TailwindCSS", "Alpine.js"],
    color: "from-blue-500 to-cyan-600",
    image: "💼",
  },
  {
    id: 5,
    title: "Personal Website v1",
    description:
      "First portfolio iteration with clean design and smooth navigation",
    tech: ["Laravel", "TailwindCSS", "Alpine.js"],
    color: "from-green-500 to-emerald-600",
    image: "🌐",
  },
  {
    id: 6,
    title: "Who's Note?",
    description:
      "Note and diary application with organizing and categorization features",
    tech: ["PHP", "TailwindCSS"],
    color: "from-yellow-500 to-amber-600",
    image: "📝",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-20 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-950/30 pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects I've built with passion and attention to
            detail
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:bg-white/10"
            >
              {/* Project Image/Icon Area */}
              <div
                className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
              >
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-cyan-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <div className="pt-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold group/link"
                    >
                      View Project
                      <span className="group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-gray-500 text-sm font-semibold">
                      In Development
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4">Want to see more?</p>
          <a
            href="https://github.com/KORQ-Kalbs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            View All Projects on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
