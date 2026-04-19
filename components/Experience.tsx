const experiences = [
  {
    company: "SkillHigh",
    role: "Testing Engineer Intern",
    period: "Sept 2025 – Present",
    location: "Hyderabad, IN",
    type: "Internship",
    color: "#6ee7b7",
    bullets: [
      "Performed manual testing on LMS and CRM modules, validating UI workflows, user interactions, and backend data consistency.",
      "Conducted automation testing using Vitest — creating and executing automated test cases for core application features.",
      "Executed performance testing to analyze response time and identify system bottlenecks under load conditions.",
      "Validated LMS user flows using Playwright-based testing, ensuring end-to-end feature reliability.",
      "Identified and reported multiple issues in testing scripts, improving automation stability and test execution reliability.",
      "Collaborated with developers to reproduce defects, verify fixes, and perform regression testing before production releases.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6ee7b7] font-mono text-sm tracking-widest uppercase mb-3">Where I've worked</p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-[#e2e8f0]">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#6ee7b7]/40 to-transparent md:left-8" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 md:pl-20 mb-12 last:mb-0">
              {/* Dot */}
              <div
                className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#6ee7b7] bg-[#0a0a0f] md:left-6"
                style={{ boxShadow: "0 0 8px rgba(110,231,183,0.5)" }}
              />

              <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6 lg:p-8 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <span
                      className="inline-block px-2.5 py-1 rounded-full text-xs font-mono mb-2"
                      style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                    >
                      {exp.type}
                    </span>
                    <h3 className="font-display text-xl font-700 text-[#e2e8f0]">{exp.role}</h3>
                    <p className="text-[#6ee7b7] font-600 text-base mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-mono text-sm text-[#6ee7b7]">{exp.period}</p>
                    <p className="font-mono text-xs text-[#4a4a6a] mt-1">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[#94a3b8] leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6ee7b7]/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
