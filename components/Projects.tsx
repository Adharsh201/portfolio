const projects = [
  {
    title: "IdeaCoach Platform",
    subtitle: "Manual Testing Project",
    type: "Manual QA",
    color: "#6ee7b7",
    docLink: "#",
    description:
      "Performed manual testing on the IdeaCoach platform — an AI-powered system that generates project ideas based on user preferences such as technology stack, problem domain, field of interest, and difficulty level.",
    bullets: [
      "Tested key workflows including user input submission, AI prompt generation, project recommendation output, and roadmap generation features.",
      "Designed structured test cases and executed functional, regression, and exploratory testing cycles to ensure system reliability.",
    ],
    tags: ["Functional Testing", "Regression", "Exploratory", "Test Case Design"],
    emoji: "💡",
  },
  {
    title: "Go Pomodoro CLI Tool",
    subtitle: "Manual Testing Project",
    type: "Manual QA",
    color: "#38bdf8",
    repoLink: "https://github.com",
    description:
      "Performed manual functional testing of the Go-based Pomodoro CLI tool using the GitHub project build to validate countdown accuracy and timer behavior.",
    bullets: [
      "Tested workflow scenarios including session start, pause, stop, and interruption handling to ensure correct CLI functionality.",
      "Identified usability and functional issues during testing and documented them for resolution.",
    ],
    tags: ["CLI Testing", "Functional Testing", "Usability", "Bug Documentation"],
    emoji: "🍅",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#111118]/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6ee7b7] font-mono text-sm tracking-widest uppercase mb-3">What I've tested</p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-[#e2e8f0]">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-2xl p-6 lg:p-8 card-hover flex flex-col"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{p.emoji}</span>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                >
                  {p.type}
                </span>
              </div>

              <h3 className="font-display text-xl font-700 text-[#e2e8f0] mb-1">{p.title}</h3>
              <p className="text-[#4a4a6a] text-xs font-mono mb-4">{p.subtitle}</p>

              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{p.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#94a3b8] leading-relaxed">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: p.color, opacity: 0.6 }} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-[#111118] border border-[#1e1e2e] text-[#4a4a6a] text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {p.docLink && (
                  <a
                    href={p.docLink}
                    className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-[#1e1e2e] text-[#94a3b8] hover:border-[#6ee7b7]/40 hover:text-[#6ee7b7] transition-all"
                  >
                    <span>📄</span> Docs
                  </a>
                )}
                {p.repoLink && (
                  <a
                    href={p.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-[#1e1e2e] text-[#94a3b8] hover:border-[#38bdf8]/40 hover:text-[#38bdf8] transition-all"
                  >
                    <span>🐙</span> Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
