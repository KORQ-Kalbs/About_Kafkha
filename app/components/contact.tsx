"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:Korqsz@proton.me?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-20 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <a
            href="mailto:Korqsz@proton.me"
            className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 text-center space-y-3"
          >
            <div className="text-3xl">✉️</div>
            <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
              Email
            </h3>
            <p className="text-gray-400 text-sm break-all">Korqsz@proton.me</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/KORQ-Kalbs"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 text-center space-y-3"
          >
            <div className="text-3xl">💻</div>
            <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
              GitHub
            </h3>
            <p className="text-gray-400 text-sm">@KORQ-Kalbs</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/kafkha-yasin-albian-676b42369/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 text-center space-y-3"
          >
            <div className="text-3xl">🔗</div>
            <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
              LinkedIn
            </h3>
            <p className="text-gray-400 text-sm">Kafkha Yasin</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-6">
          <h3 className="text-2xl font-bold text-white">Send me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all duration-200 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-center text-gray-500">
            Alternatively, you can email directly at{" "}
            <a
              href="mailto:Korqsz@proton.me"
              className="text-purple-400 hover:text-purple-300"
            >
              Korqsz@proton.me
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Ready to start working together?</p>
          <a
            href="mailto:Korqsz@proton.me"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Get in Touch
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
