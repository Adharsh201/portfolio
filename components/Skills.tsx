const skillGroups = [
  {
    category: "Manual Testing",
    emoji: "🔍",
    color: "#6ee7b7",
    skills: ["Functional Testing", "Regression Testing", "Smoke / Sanity", "UI Testing", "Cross-Browser Testing", "Test Case Design", "Defect Tracking"],
  },
  {
    category: "Automation Testing",
    emoji: "⚡",
    color: "#38bdf8",
    skills: ["Vitest", "Playwright", "Cypress", "Selenium", "E2E Testing", "Script Development"],
  },
  {
    category: "API Testing",
    emoji: "🔌",
    color: "#a78bfa",
    skills: ["Postman", "REST APIs", "JSON Validation", "CRUD Testing", "Auth Testing"],
  },
  {
    category: "Performance Testing",
    emoji: "📊",
    color: "#fb923c",
    skills: ["Load Testing", "Stress Testing", "Response Analysis", "Bottleneck Detection"],
  },
  {
    category: "Methodologies",
    emoji: "📋",
    color: "#f472b6",
    skills: ["Agile / Scrum", "SDLC", "STLC", "Requirement Analysis", "Test Planning"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#6ee7b7] font-mono text-sm tracking-widest uppercase mb-3">What I do</p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-[#e2e8f0]">
            Skills &amp; Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.emoji}</span>
                <h3
                  className="font-display font-600 text-base"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-[#0a0a0f] border border-[#1e1e2e] text-[#94a3b8] text-xs font-mono hover:border-[#6ee7b7]/30 hover:text-[#6ee7b7] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
