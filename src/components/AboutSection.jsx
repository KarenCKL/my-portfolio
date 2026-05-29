import { Briefcase, Code, User } from "lucide-react";
import { img } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
          <div className="flex justify-center md:col-span-1">
            <img
              src={img("/assets/profile.png")}
              alt="Karen Chan Kwong Lun"
              className="w-64 h-64 md:w-72 md:h-72 rounded-4xl object-cover object-top overflow-hidden border-4 border-primary/50 shadow-xl"
            />
          </div>

          <div className="space-y-4 md:col-span-2 text-center md:text-left">
            <h3 className="text-2xl font-semibold">Software Developer</h3>

            <p className="text-muted-foreground">
              I'm a Software Engineering (Co-op) graduate from the University of Ottawa
              (June 2026, CGPA 9.7/10, Dean's Honor Award every term), with over 16 months
              of hands-on co-op experience across full-stack development, frontend, and
              embedded systems at Warner Bros. Discovery and the University of Ottawa.
            </p>

            <p className="text-muted-foreground">
              I'm dedicated, hardworking, detail-oriented, and eager to learn — passionate about building
              reliable, accessible, and people-centered software with real-world impact. I hold a Fortinet NSE 4
              certification and continuously expand my expertise in AI/ML, cybersecurity,
              DevOps (Docker, CI/CD), and cloud platforms (AWS/Azure).
            </p>

            <p className="text-muted-foreground">
              Open to full-stack, frontend, backend, cloud/DevOps, and AI-driven or cybersecurity-focused roles.
              Fluent in English and French.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href={img("/Karen Kim Niet Chan Kwong Lun_Resume.pdf")}
                download="Karen_Chan_Kwong_Lun_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: skill cards full width */}
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                  <li>Languages: Java, Python, C/C++, C#, JavaScript, TypeScript (ES6), PHP</li>
                  <li>Frontend: React.js/Redux, Blazor, HTML5, CSS3/SASS, Bootstrap, jQuery, Figma, WebRTC, WebSocket</li>
                  <li>Backend: Node.js, Express.js, Spring Boot, .NET, REST APIs, Socket.io, HTTP/2</li>
                  <li>Databases: MySQL, MongoDB, PostgreSQL, Firebase, MS SQL Server, Entity Framework</li>
                  <li>DevOps & Cloud: Docker, Git, GitHub/GitLab, AWS/Azure, CI/CD, Postman</li>
                  <li>AI & Dev Tools: GitHub Copilot, Claude API / Anthropic SDK, RAG, LLM-assisted development</li>
                  <li>Testing: TDD, BDD, Gherkin, unit & integration testing</li>
                  <li>Actively exploring AI/ML integration, real-time communication systems, and cloud-native architectures.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Cybersecurity & Networking</h4>
                <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                  <li>Certified Fortinet NSE 4 administrator — experienced with VPN, MFA, network infrastructure, and security-focused software design.</li>
                  <li>Completed uOttawa's Data Communications & Networking course (Cisco CCNA curriculum) with 99%.</li>
                  <li>Completed Secure Enterprise Network Infrastructure course with 98%.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Agile & Team Collaboration</h4>
                <p className="text-muted-foreground">
                  16+ months co-op across 4 organizations, plus multiple academic team projects.
                  Comfortable with Jira, Confluence, Git, PR reviews, and biweekly agile cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};