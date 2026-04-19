const tools = [
  { name: "Git", icon: "🔀", desc: "Version Control" },
  { name: "GitHub", icon: "🐙", desc: "Collaboration" },
  { name: "Postman", icon: "📮", desc: "API Testing" },
  { name: "Playwright", icon: "🎭", desc: "E2E Automation" },
  { name: "Cypress", icon: "🌲", desc: "E2E Testing" },
  { name: "Vitest", icon: "⚡", desc: "Unit Testing" },
  { name: "Selenium", icon: "🤖", desc: "Web Automation" },
  { name: "JavaScript", icon: "🟨", desc: "Scripting" },
  { name: "CI/CD Pipelines", icon: "🔄", desc: "Automation" },
  { name: "JIRA", icon: "📌", desc: "Bug Tracking" },
  { name: "VS Code", icon: "💻", desc: "Editor" },
  { name: "Chrome DevTools", icon: "🔧", desc: "Debugging" },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 bg-[#111118]/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6ee7b7] font-mono text-sm tracking-widest uppercase mb-3">My Toolkit</p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-[#e2e8f0]">
            Tools I Use
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-2xl p-4 flex flex-col items-center gap-3 card-hover text-center"
            >
              <span className="text-3xl">{tool.icon}</span>
              <div>
                <p className="text-[#e2e8f0] text-sm font-600 font-display">{tool.name}</p>
                <p className="text-[#4a4a6a] text-xs font-mono mt-0.5">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
