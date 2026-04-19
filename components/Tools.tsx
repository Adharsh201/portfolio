type Tool = {
  name: string;
  desc: string;
  icon?: string;
  invert?: boolean;
  badge?: string;
};

const tools: Tool[] = [
  {
    name: "Git",
    desc: "Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    desc: "Collaboration",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "Postman",
    desc: "API Testing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Playwright",
    desc: "E2E Automation",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  },
  {
    name: "AI Agentic Testing",
    desc: "AI-Assisted QA",
    badge: "AI",
  },
  {
    name: "Cypress",
    desc: "E2E Testing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
    invert: true,
  },
  {
    name: "Vitest",
    desc: "Unit Testing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg",
  },
  {
    name: "Selenium",
    desc: "Web Automation",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  },
  {
    name: "JavaScript",
    desc: "Scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "JIRA",
    desc: "Bug Tracking",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "VS Code",
    desc: "Editor",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Chrome",
    desc: "DevTools / Testing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
  },
  {
    name: "GitHub Actions",
    desc: "CI/CD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
  },
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
              {tool.icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={tool.icon}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className={`w-10 h-10 object-contain${tool.invert ? " brightness-0 invert opacity-80" : ""}`}
                />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-[#6ee7b7] text-[#0a0a0f] flex items-center justify-center text-sm font-display font-800">
                  {tool.badge}
                </div>
              )}
              <div>
                <p className="text-[#e2e8f0] text-sm font-semibold font-display">{tool.name}</p>
                <p className="text-[#4a4a6a] text-xs font-mono mt-0.5">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
