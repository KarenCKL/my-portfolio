import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Teaching Assistant",
    company: "uOttawa | Faculty of Engineering",
    period: "Jan 2026 – Apr 2026",
    location: "Ottawa, ON · On-site",
    type: "Contract · Part-time",
    description: [
      "TA/Lab demonstrator/Corrector for ITI 1100 – Digital Systems I",
      "Help students with course material, labs and assignments",
      "Correct assignments, labs, midterms and exam",
    ],
  },
  {
    id: 2,
    role: "Programmer Analyst",
    company: "University of Ottawa",
    period: "May 2025 – Aug 2025",
    location: "Ottawa, ON · Hybrid",
    type: "CO-OP",
    description: [
      "Developed new features (frontend and backend), fixed bugs and improved the uOCompetencies App using Microsoft Blazor with MudBlazor components and C#",
      "Utilized Microsoft SQL Server Management Studio and Entity Framework for database operations and collaborated via GitLab",
      "Implemented new layout for the indEX App and notificationSender App in C#, HTML, CSS and VB.net",
    ],
  },
  {
    id: 3,
    role: "Software Developer Intern",
    company: "Warner Bros. Discovery",
    period: "Sep 2024 – Dec 2024",
    location: "Ottawa, ON · Hybrid",
    type: "CO-OP",
    description: [
      "Developed new features, fixed bugs and wrote unit tests for the Max application on Roku devices using BrightScript, SceneGraph and Rooibos framework",
      "Used SourceTree for Git/Mercurial repos, Jira for task management, and Confluence for documentation",
      "Stored data on Content Management System (CMS) and learned to fetch/render content via router and API",
      "Participated in MergeFest, TestFest and TeamFeat every 2 weeks and daily standups via Zoom",
      "Reviewed PRs to provide feedback and ensure code quality",
    ],
  },
  {
    id: 4,
    role: "Web Developer Intern",
    company: "University of Ottawa",
    period: "Jan 2024 – Apr 2024",
    location: "Ottawa, ON · Hybrid",
    type: "CO-OP",
    description: [
      "Developed courses on BrightSpace from storyboard, manipulated and corrected existing code using HTML, CSS, JavaScript, jQuery and Bootstrap",
      "Revised web content to find and correct textual errors",
      "Used Teamwork as Project Management Platform to collaborate, manage tasks and log time",
    ],
  },
  {
    id: 5,
    role: "IT Support Analyst",
    company: "uOttawa IT",
    period: "May 2023 – Dec 2023",
    location: "Ottawa, ON · On-site",
    type: "CO-OP and Part-time",
    description: [
      "Diagnosed and resolved problems with application software and operating systems",
      "Configured (MFA setup, VPN, VMware, data transfer), troubleshot and supported computer workstations, laptops, printers, mobile devices",
      "Provided in-person and telephone support for the university's computing systems",
      "Created virtual machines using Hyper-V Manager",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Experience
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          My professional journey has been marked by diverse experiences in software development, IT support, and teaching assistance. From developing features for the Max app at Warner Bros. Discovery to providing IT support at uOttawa, I've honed my skills in various technologies and collaborated with cross-functional teams to deliver impactful solutions. Each role has contributed to my growth as a software developer, deepening my passion for creating reliable and user-centered software.
        </p>


        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 top-1 w-5 h-5 -translate-x-1/2 rounded-full bg-primary border-4 border-background z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              </div>

              <div className="md:w-1/2 pl-12 md:pl-0">
                <div className="bg-card p-6 rounded-lg shadow-xs border border-border hover:shadow-md transition-shadow duration-300 text-left">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Briefcase size={12} />
                    <span className="font-medium text-primary text-sm">
                      {exp.role}
                    </span>
                  </div>

                  <p className="font-semibold text-foreground mb-2">
                    {exp.company}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-secondary text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};