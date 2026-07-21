import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Github, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const githubUrls = [
  "https://github.com/KarenCKL/playwright-ai-agent",
  "https://github.com/OCyberLab/IoTa",
  "https://github.com/KarenCKL/Surveillebebe",
  "https://github.com/SEG3502-A25/projet-groupe5",
  "https://github.com/CSI2532-eHotel/eHotel",
  "https://github.com/KarenCKL/SEG3525Project2Final",
  "https://github.com/KarenCKL/SEG3525_Project1",
  "https://github.com/uOttawaSEGA2023/Project-Group-1",
  "https://github.com/Omnithink/0-M-N-1-T-H-1-N-K",
  "https://github.com/KarenCKL/Qrispy",
];

const projectImages = [
  "/assets/project10.png",
  "/assets/project1.png",
  "/assets/project2.png",
  "/assets/project3.png",
  "/assets/project4.png",
  "/assets/project5.png",
  "/assets/project6.png",
  "/assets/project7.png",
  "/assets/project8.png",
  "/assets/project9.png",
];

const projectTags = [
  ["TypeScript", "Vercel AI SDK", "Google Gemini", "Playwright", "Express.js", "node-cron", "REST API"],
  ["TypeScript", "Python", "Shell Scripting", "C", "C++", "Zeek", "Batchfile", "Zigbee", "Grafana", "Docker", "Kubernetes", "IoT Security"],
  ["C++", "Arduino", "FreeRTOS", "ESP8266", "IoT"],
  ["Spring Boot", "Angular", "PostgreSQL", "Docker", "Kotlin", "Gherkin", "Cucumber", "Junit", "Mockito"],
  ["React.js", "CSS/SCSS", "Node.js", "Express.js", "PostgreSQL", "Postman"],
  ["React.js", "JavaScript", "Bootstrap", "HTML/CSS"],
  ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"],
  ["Java", "Android", "Firebase", "Figma"],
  ["Machine Learning", "Python", "HTML/CSS/SCSS", "JavaScript"],
  ["UI/UX Design", "Figma", "React.js", "Bootstrap", "HTML/CSS/SASS"],
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const { t } = useLanguage();

  const projects = t.projects.entries.map((entry, i) => ({
    ...entry,
    id: i + 1,
    image: img(projectImages[i]),
    tags: projectTags[i],
    githubUrl: githubUrls[i],
  }));

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

  const visibleProjects = projects.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.projects.title1} <span className="text-primary">{t.projects.title2}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.projects.intro}
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
                        {t.projects.viewOnGithub}
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">
                        {t.projects.privateProject}
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
              aria-label={t.projects.prevLabel}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute left-full ml-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 z-10 hidden md:block"
              aria-label={t.projects.nextLabel}
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
            aria-label={t.projects.prevLabel}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="p-3 rounded-full bg-card border border-border shadow-xs disabled:opacity-30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label={t.projects.nextLabel}
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
            {t.projects.checkGithub} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
