"use client";

import { useEffect, useState } from "react";

const navItems = ["works", "about", "contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a
          href="/"
          className="text-charcoal font-medium text-base tracking-tight"
        >
          Kafkha
        </a>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-sm text-charcoal-muted hover:text-charcoal transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
