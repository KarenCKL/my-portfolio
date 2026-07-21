import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ExperienceSection = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.experience.title}
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          {t.experience.intro}
        </p>


        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {t.experience.entries.map((exp, index) => (
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
