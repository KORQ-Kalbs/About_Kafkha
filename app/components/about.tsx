"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-20 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Me
            </span>
          </h2>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm{" "}
                <span className="text-cyan-400 font-semibold">
                  Kafkha Yasin Albian
                </span>
                , a high school student based in Bogor Barat, Indonesia,
                passionate about web development and design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in building exceptional digital experiences that are
                not only visually stunning but also performant and
                user-friendly. My journey into web development started with
                curiosity, and it has evolved into a genuine passion.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently, I'm focused on mastering modern JavaScript frameworks
                like React and Next.js to take my frontend skills to the next
                level. I'm always eager to learn new technologies and best
                practices.
              </p>
            </div>

            {/* Key Things */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-semibold">Bogor Barat, ID</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-gray-400">Status</p>
                <p className="text-white font-semibold">High School</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:Korqsz@proton.me"
                  className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                >
                  Korqsz@proton.me
                </a>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-gray-400">GitHub</p>
                <a
                  href="https://github.com/KORQ-Kalbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                >
                  @KORQ-Kalbs
                </a>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">My Journey</h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600" />

              {/* Timeline Items */}
              <div className="space-y-8 pl-8">
                {/* Item 1 */}
                <div className="relative">
                  <div className="absolute -left-11 top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-black" />
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-cyan-400">
                      2024–Present
                    </p>
                    <h4 className="text-lg font-bold text-white">
                      Building My Portfolio
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Started creating modern portfolio websites with Next.js,
                      React, and GSAP animations.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative">
                  <div className="absolute -left-11 top-1 w-4 h-4 rounded-full bg-purple-400 border-4 border-black" />
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-purple-400">
                      2023
                    </p>
                    <h4 className="text-lg font-bold text-white">
                      Discovered Web Development
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Started learning PHP and TailwindCSS. Built first projects
                      with Laravel and Alpine.js.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative">
                  <div className="absolute -left-11 top-1 w-4 h-4 rounded-full bg-pink-400 border-4 border-black" />
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-pink-400">2022</p>
                    <h4 className="text-lg font-bold text-white">
                      Web Development Journey Begins
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Learned HTML, CSS, and JavaScript. Built first e-commerce
                      platform with PHP and MySQL.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="relative">
                  <div className="absolute -left-11 top-1 w-4 h-4 rounded-full bg-blue-400 border-4 border-black" />
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-blue-400">
                      Ongoing
                    </p>
                    <h4 className="text-lg font-bold text-white">
                      Continuous Learning
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Always exploring new technologies and improving my skills
                      in game development too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-16 p-8 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interests & Hobbies
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Web Development",
              "UI/UX Design",
              "Game Development",
              "Open Source",
              "Music Production",
              "Problem Solving",
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm hover:text-cyan-400 transition-colors cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
