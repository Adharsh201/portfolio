export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#6ee7b7] font-mono text-sm tracking-widest uppercase mb-3">Say hello</p>
        <h2 className="font-display text-4xl lg:text-5xl font-700 text-[#e2e8f0] mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-[#94a3b8] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Looking for a detail-oriented QA engineer who cares deeply about quality? I&apos;m open to internships, part-time roles, and freelance testing projects.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:adharshdont hagani18@gmail.com"
            className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-5 card-hover flex flex-col items-center gap-3 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">📧</span>
            <div>
              <p className="text-[#e2e8f0] text-sm font-600 font-display">Email</p>
              <p className="text-[#4a4a6a] text-xs font-mono mt-0.5 break-all">adharshdont hagani18<br/>@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+919666207144"
            className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-5 card-hover flex flex-col items-center gap-3 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">📱</span>
            <div>
              <p className="text-[#e2e8f0] text-sm font-600 font-display">Phone</p>
              <p className="text-[#4a4a6a] text-xs font-mono mt-0.5">+91 9666207144</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/adharshdonthagani"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-5 card-hover flex flex-col items-center gap-3 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">💼</span>
            <div>
              <p className="text-[#e2e8f0] text-sm font-600 font-display">LinkedIn</p>
              <p className="text-[#4a4a6a] text-xs font-mono mt-0.5">adharshdonthagani</p>
            </div>
          </a>
        </div>

        <a
          href="mailto:adharshdont hagani18@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#6ee7b7] text-[#0a0a0f] font-600 hover:bg-[#34d399] transition-colors duration-200 text-base"
        >
          <span>✉️</span>
          Send me a message
        </a>
      </div>
    </section>
  );
}
