import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "JavaScript / TypeScript", level: 88, category: "frontend" },
  { name: "React.js / Redux", level: 87, category: "frontend" },
  { name: "HTML5 / CSS3 / SASS", level: 92, category: "frontend" },
  { name: "Bootstrap / jQuery", level: 82, category: "frontend" },
  { name: "Blazor / MudBlazor", level: 72, category: "frontend" },
  { name: "Figma / UI Design", level: 75, category: "frontend" },

  // Backend
  { name: "Node.js / Express.js", level: 80, category: "backend" },
  { name: "C# / .NET", level: 74, category: "backend" },
  { name: "Spring Boot (Kotlin)", level: 68, category: "backend" },
  { name: "REST APIs / WebSocket", level: 82, category: "backend" },
  { name: "Socket.io / WebRTC", level: 70, category: "backend" },

  // Programming Languages
  { name: "Java", level: 80, category: "  Programming Languages" },
  { name: "C / C++", level: 76, category: "Programming Languages" },
  { name: "Python", level: 74, category: "Programming Languages" },
  { name: "BrightScript / XML", level: 68, category: "Programming Languages" },
  { name: "PHP / Visual Basic", level: 55, category: "Programming Languages" },

  // Databases
  { name: "MySQL / PostgreSQL", level: 78, category: "databases" },
  { name: "MongoDB / Firebase", level: 72, category: "databases" },
  { name: "MS SQL / Entity Framework", level: 65, category: "databases" },
  { name: "TimescaleDB / Redis", level: 62, category: "databases" },

  // DevOps & Cloud
  { name: "Git / GitHub / GitLab", level: 90, category: "devops" },
  { name: "Docker", level: 70, category: "devops" },
  { name: "Jira / Confluence", level: 80, category: "devops" },
  { name: "AWS / Azure", level: 52, category: "devops" },
  { name: "SCCM / Hyper-V / VMware", level: 68, category: "devops" },
  { name: "CI/CD pipelines", level: 65, category: "devops" },

  // AI & Dev Tools
  { name: "Claude API / Anthropic SDK", level: 72, category: "AI" },
  { name: "GitHub Copilot / OpenCode", level: 78, category: "AI" },
  { name: "ML anomaly detection / RAG", level: 60, category: "AI" },
  { name: "Prompt Engineering", level: 70, category: "AI" },

  // Security & Networking
  { name: "Fortinet NSE 4 / FortiOS", level: 78, category: "security" },
  { name: "VPN / MFA / Networking", level: 74, category: "security" },
  { name: "Cisco networking", level: 65, category: "security" },

  // Testing & QA
  { name: "TDD / BDD / Gherkin", level: 72, category: "testing" },
  { name: "Unit & integration testing", level: 74, category: "testing" },
  { name: "Espresso (Android)", level: 60, category: "testing" },
];

const categories = ["all", "frontend", "backend", "Programming Languages", "databases", "devops", "AI", "security", "testing"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};