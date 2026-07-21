import { GraduationCap, Calendar, Award, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const EducationSection = () => {
  const { t } = useLanguage();
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.education.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-xs border border-border card-hover text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{t.education.university}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.education.degree}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
              <Calendar size={12} />
              <span>{t.education.period1}</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <Award size={14} className="text-primary" />
                <span className="font-medium text-foreground">{t.education.deansAward}</span> {t.education.allTerms}
              </p>
              <p className="flex items-center gap-1.5">
                <Star size={14} className="text-primary" />
                <span className="font-medium text-foreground">{t.education.cgpa}</span> 9.7/10
              </p>
              <p className="flex items-center gap-1.5">
                <Award size={14} className="text-primary" />
                <span className="font-medium text-foreground">{t.education.nse4}</span> — {t.education.nse4Desc}
              </p>
              <p className="mt-3">
                <span className="font-medium text-foreground">{t.education.activities}</span> {t.education.uniActivities}
              </p>
              <details className="mt-3 group">
                <summary className="cursor-pointer text-primary font-medium text-sm hover:underline">
                  {t.education.keyCoursework}
                </summary>
                <p className="mt-2 leading-relaxed">
                  {t.education.coursework}
                </p>
              </details>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-xs border border-border card-hover text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{t.education.college}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.education.collegeDegree}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
              <Calendar size={12} />
              <span>{t.education.period2}</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">{t.education.ranked3rd}</span> {t.education.ranked3rdDesc}
              </p>
              <p>
                <span className="font-medium text-foreground">{t.education.ranked30th}</span> {t.education.scholarship}
              </p>
              <p>
                <span className="font-medium text-foreground">{t.education.aggregate}</span> {t.education.aggregateDesc}
              </p>
              <p className="mt-3">
                <span className="font-medium text-foreground">{t.education.activities}</span> {t.education.collegeActivities}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
