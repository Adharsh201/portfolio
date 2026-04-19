"use client";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#6ee7b7 1px, transparent 1px), linear-gradient(90deg, #6ee7b7 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6ee7b7] opacity-[0.04] blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#38bdf8] opacity-[0.04] blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e1e2e] bg-[#111118] text-[#6ee7b7] text-xs font-mono mb-8 animate-fade-up animate-delay-100">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7] animate-pulse2" />
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-800 leading-[1.05] mb-6 animate-fade-up animate-delay-200">
            <span className="text-[#e2e8f0]">Adharsh</span>
            <br />
            <span className="shimmer">Donthagani</span>
          </h1>

          <p className="text-[#94a3b8] text-lg lg:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up animate-delay-300">
            QA &amp; Testing Engineer who breaks things on purpose — so your users never have to.
            <br />
            Manual · Automation · Performance.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up animate-delay-400">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[#6ee7b7] text-[#0a0a0f] text-sm font-600 font-sans hover:bg-[#34d399] transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-[#1e1e2e] text-[#94a3b8] text-sm hover:border-[#6ee7b7]/40 hover:text-[#6ee7b7] transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-5 justify-center lg:justify-start mt-10 animate-fade-up animate-delay-500">
            <a
              href="https://www.linkedin.com/in/adharshdonthagani"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#4a4a6a] hover:text-[#6ee7b7] transition-colors text-sm font-mono"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="mailto:adharshdont hagani18@gmail.com"
              className="group flex items-center gap-2 text-[#4a4a6a] hover:text-[#6ee7b7] transition-colors text-sm font-mono"
            >
              <MailIcon />
              Email
            </a>
            <a
              href="tel:+919666207144"
              className="group flex items-center gap-2 text-[#4a4a6a] hover:text-[#6ee7b7] transition-colors text-sm font-mono"
            >
              <PhoneIcon />
              Call
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex-shrink-0 animate-fade-up animate-delay-400">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl border border-[#1e1e2e] bg-[#111118] overflow-hidden relative glow">
            {/* Placeholder avatar */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6ee7b7] to-[#38bdf8] flex items-center justify-center text-[#0a0a0f] text-4xl font-display font-800">
                AD
              </div>
              <p className="text-[#4a4a6a] text-xs font-mono">Replace with photo</p>
            </div>
            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#6ee7b7] animate-pulse2" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-[#111118] border border-[#1e1e2e] rounded-2xl px-4 py-3 flex items-center gap-3">
            <span className="text-2xl">🐛</span>
            <div>
              <p className="text-xs font-mono text-[#6ee7b7]">Bug Hunter</p>
              <p className="text-xs text-[#4a4a6a]">QA Intern @ SkillHigh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse2">
        <p className="text-[#4a4a6a] text-xs font-mono">scroll</p>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="#4a4a6a" strokeWidth="1.5" />
          <circle cx="8" cy="7" r="2" fill="#6ee7b7" className="animate-bounce" />
        </svg>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
