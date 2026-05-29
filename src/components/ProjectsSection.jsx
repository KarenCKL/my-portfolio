import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Github, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "IoT Security Testbed (IoTa)",
    period: "Sep 2025 – Apr 2026",
    description:
      "Designed and implemented an IoT security testbed with physical and simulated devices. Built automated logging pipelines and a Grafana dashboard to visualize security events. Collected data in the uOttawa-IBM Cyber Range over 4 days. Exploring ML approaches for anomaly detection.",
    image: "/assets/project1.png",
    tags: ["Zigbee", "Grafana", "Docker", "Kubernetes", "IoT Security"],
    githubUrl: "https://github.com/OCyberLab/IoTa",
  },
  {
    id: 2,
    title: "SurveilleBébé – Infant Monitoring System",
    period: "Mar 2026 – Apr 2026",
    description:
      "Real-time embedded IoT system to monitor infant vital signs and environmental conditions. Developed FreeRTOS-based multi-tasking with priority scheduling. Integrated sensors (MAX30102, DHT22, MPU6050, MQ-2) with Arduino + ESP8266 for real-time alerts via Blynk.",
    image: "/assets/project2.png",
    tags: ["C++", "Arduino", "FreeRTOS", "ESP8266", "IoT"],
    githubUrl: "https://github.com/KarenCKL/Surveillebebe",
  },
  {
    id: 3,
    title: "Pharmacy Prescription Management System",
    period: "Sep 2025 – Dec 2025",
    description:
      "Full-stack prescription management system replacing a 50-year-old manual system. MVC architecture with Spring Boot backend and Angular frontend. Integrated Spring Security for role-based access, PostgreSQL, and Docker containerization.",
    image: "/assets/project3.png",
    tags: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "Kotlin"],
    githubUrl: "https://github.com/SEG3502-A25/projet-groupe5",
  },
  {
    id: 4,
    title: "Full-stack Hotel Management System",
    period: "Feb 2025 – Apr 2025",
    description:
      "Developed a full-stack hotel management system. Modeled the database with an ER diagram and relational schema. Built frontend with React and Bootstrap, backend with Node.js and Express.js, and PostgreSQL for data persistence.",
    image: "/assets/project4.png",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Postman"],
    githubUrl: "https://github.com/CSI2532-eHotel/eHotel",
  },
  {
    id: 5,
    title: "Ottawa Badminton Club",
    period: "Jun 2024 – Jul 2024",
    description:
      "Developed a responsive website with emphasis on heuristic evaluation, accessibility (100% Google Lighthouse), visual communication, and psychological principles on human cognition using React, Bootstrap, and JavaScript.",
    image: "/assets/project5.png",
    tags: ["React.js", "JavaScript", "Bootstrap", "HTML/CSS"],
    githubUrl: "https://github.com/KarenCKL/SEG3525Project2Final",
  },
  {
    id: 6,
    title: "Ottawa Dental Clinic",
    period: "May 2024 – Jun 2024",
    description:
      "Developed a responsive dental clinic website with emphasis on HCI, prototyping in user-centered design, accessibility, and visual communication using HTML, CSS, SASS, Bootstrap, jQuery, and JavaScript.",
    image: "/assets/project6.png",
    tags: ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/KarenCKL/SEG3525_Project1",
  },
  {
    id: 7,
    title: "Healthcare Appointment Scheduler (Android)",
    period: "Sep 2023 – Dec 2023",
    description:
      "Built an Android app for healthcare appointment scheduling and management. Used Firebase for database and authentication. Coordinated team of 6 using GitHub pull requests. Designed layouts in Figma.",
    image: "/assets/project7.png",
    tags: ["Java", "Android", "Firebase", "Figma"],
    githubUrl: "https://github.com/uOttawaSEGA2023/Project-Group-1",
  },
  {
    id: 8,
    title: "OmniThink",
    period: "Sep 2022 – Dec 2022",
    description:
      "A machine learning algorithm trained to program in various languages, built for beginner learning, code troubleshooting, debugging, and task automation. Available for individuals, professionals, and companies.",
    image: "/assets/project8.png",
    tags: ["Machine Learning", "Python"],
    githubUrl: "https://github.com/Omnithink/0-M-N-1-T-H-1-N-K",
  },
  {
    id: 9,
    title: "OmniThink",
    period: "Dec 2022",
    description:
      "A responsive restaurant website designed with a focus on user experience, visual communication, and accessibility. ",
    image: "/assets/project9.png",
    tags: ["UI/UX Design", "Figma", "React.js", "Bootstrap", "HTML/CSS/SASS"],
    githubUrl: "https://github.com/KarenCKL/Qrispy",
  },
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const projectsWithImg = projects.map((p) => ({ ...p, image: img(p.image) }));

  const updateCardsPerView = useCallback(() => {
    if (window.innerWidth < 768) {
      setCardsPerView(1);
    } else if (window.innerWidth < 1024) {
      setCardsPerView(2);
    } else {
      setCardsPerView(3);
    }
  }, []);

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, [updateCardsPerView]);

  const totalSlides = Math.ceil(projects.length / cardsPerView);
  const maxIndex = Math.max(0, projects.length - cardsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + cardsPerView, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerView, 0));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex * cardsPerView);
  };

  const visibleProjects = projectsWithImg.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are all my projects from my academic and personal experience.
          Each project reflects my passion for software engineering and problem-solving.
        </p>

        <div className="px-8">
          <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                    <Calendar size={12} />
                    <span>{project.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center pt-2 border-t border-border">
                    {project.githubUrl && project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        View on GitHub
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">
                        Private / University project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute right-full mr-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 z-10 hidden md:block"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute left-full ml-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 z-10 hidden md:block"
              aria-label="Next projects"
            >
              <ChevronRight size={24} />
            </button>
          )}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / cardsPerView) === i
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-card border border-border shadow-xs disabled:opacity-30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Previous projects"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="p-3 rounded-full bg-card border border-border shadow-xs disabled:opacity-30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Next projects"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/KarenCKL"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};