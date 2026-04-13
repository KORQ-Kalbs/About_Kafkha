"use client";

const skillsData = {
  advanced: ["HTML", "CSS", "TailwindCSS", "Bootstrap", "PHP"],
  intermediate: ["Laravel", "JavaScript", "Node.js", "Alpine.js"],
  beginner: ["Vue.js", "React", "Next.js"],
  tools: ["VS Code", "GitHub", "Composer", "NPM", "MariaDB", "MySQL"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-20 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I'm skilled at using
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Advanced Skills */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
              Advanced
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skillsData.advanced.map((skill) => (
                <div
                  key={skill}
                  className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center cursor-default"
                >
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Intermediate Skills */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-600" />
              Intermediate
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillsData.intermediate.map((skill) => (
                <div
                  key={skill}
                  className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 text-center cursor-default"
                >
                  <p className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Beginner Skills */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-600" />
              Learning
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillsData.beginner.map((skill) => (
                <div
                  key={skill}
                  className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 text-center cursor-default"
                >
                  <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skillsData.tools.map((tool) => (
                <div
                  key={tool}
                  className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 text-center cursor-default"
                >
                  <p className="text-white font-semibold group-hover:text-green-400 transition-colors">
                    {tool}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interest Note */}
        <div className="mt-16 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <p className="text-gray-300 text-center">
            <span className="text-cyan-400 font-semibold">
              Currently focused on:
            </span>{" "}
            React, Next.js, and modern JavaScript frameworks to expand my
            frontend development skills.
          </p>
        </div>
      </div>
    </section>
  );
}
