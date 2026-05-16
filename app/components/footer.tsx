export default function Footer() {
  return (
    <footer className="border-t border-cream-border py-8">
      <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-charcoal-muted">
          &copy; 2024 Kafkha Yasin Albian
        </p>

        <div className="flex items-center gap-5 text-sm text-charcoal-muted">
          <a
            href="mailto:korqsz@proton.me"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/kafkha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kafkha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
