export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-700 text-lg">
            <span className="text-[#6ee7b7]">A</span>dharsh
            <span className="text-[#6ee7b7]">.</span>
          </span>
          <span className="text-[#4a4a6a] text-sm font-mono">QA Engineer</span>
        </div>

        <p className="text-[#4a4a6a] text-xs font-mono text-center">
          © {new Date().getFullYear()} Adharsh Donthagani · Hyderabad, India
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/adharshdonthagani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a4a6a] hover:text-[#6ee7b7] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:adharshdont hagani18@gmail.com"
            className="text-[#4a4a6a] hover:text-[#6ee7b7] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
