"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-12 px-6 bg-black border-t border-white/10">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              KAFKHA
            </h3>
            <p className="text-gray-400 text-sm">
              Web developer & designer building exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm">Social</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://github.com/KORQ-Kalbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kafkha-yasin-albian-676b42369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:Korqsz@proton.me"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm">Get In Touch</h4>
            <p className="text-gray-400 text-sm">
              Interested in working together? Send me an email!
            </p>
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 Kafkha Yasin Albian. All rights reserved.
          </p>

          {/* Made with */}
          <p className="text-gray-500 text-sm text-center">
            Made with <span className="text-cyan-400">✨</span> using Next.js,
            React, TailwindCSS & GSAP
          </p>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
