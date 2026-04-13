"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black pointer-events-none" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Kafkha
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-300">
            Web Developer & Designer
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I build exceptional digital experiences with modern technologies.
          Passionate about creating beautiful, interactive interfaces with
          smooth animations and great performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#work"
            className="group px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-400">Scroll to explore</p>
            <svg
              className="w-5 h-5 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Elements (Background Decoration) */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl opacity-20 pointer-events-none" />
    </section>
  );
}
