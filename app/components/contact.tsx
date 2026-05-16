"use client";

import { useEffect, useRef, useState } from "react";
import { animateSectionHeading } from "@/app/lib/gsap-animations";
import { SectionWrapper } from "./SectionWrapper";

export default function Contact() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const headingTween = headingRef.current
      ? animateSectionHeading(headingRef.current)
      : null;

    return () => {
      headingTween?.scrollTrigger?.kill();
      headingTween?.kill();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mkokrddj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div ref={headingRef} className="section-heading">
        <p className="text-xs font-medium tracking-widest text-charcoal-muted mb-3">
          Contact
        </p>
        <h2 className="text-2xl font-medium text-charcoal mb-3">
          Let's create something together
        </h2>
        <p className="text-base text-charcoal-muted mb-10 max-w-md">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>
      </div>

      {submitted && (
        <div className="mb-6 rounded-xl border border-cream-border bg-cream-surface p-4 text-sm text-charcoal-muted">
          <p className="font-medium text-charcoal">Message sent.</p>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-xl border border-cream-border bg-cream-surface p-4 text-sm text-charcoal-muted">
          <p className="font-medium text-accent">Something went wrong.</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
          placeholder="Your name"
          className="border border-cream-border bg-transparent rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-muted focus:border-accent focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
          placeholder="your@email.com"
          className="border border-cream-border bg-transparent rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-muted focus:border-accent focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
          rows={5}
          placeholder="What's on your mind?"
          className="border border-cream-border bg-transparent rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-muted focus:border-accent focus:outline-none transition-colors resize-none disabled:opacity-60 disabled:cursor-not-allowed"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-charcoal text-cream rounded-xl px-8 py-3 text-sm font-medium w-fit hover:bg-accent transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send message ->"}
        </button>
      </form>

      <div className="mt-8 flex items-center gap-6 text-sm text-charcoal-muted">
        <a
          href="mailto:korqsz@proton.me"
          className="hover:text-accent transition-colors"
        >
          korqsz@proton.me
        </a>
        <a
          href="https://github.com/kafkha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub {"->"}
        </a>
        <a
          href="https://linkedin.com/in/kafkha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn {"->"}
        </a>
      </div>
    </SectionWrapper>
  );
}
