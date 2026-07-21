import { Briefcase, Code, User } from "lucide-react";
import { img } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();
  const { language } = useLanguage();
  const resumeFile = language === "fr"
    ? img("/Karen Kim Niet Chan Kwong Lun_CV.pdf")
    : img("/Karen Kim Niet Chan Kwong Lun_Resume.pdf");
  const resumeDownload = language === "fr"
    ? "Karen_Chan_Kwong_Lun_CV.pdf"
    : "Karen_Chan_Kwong_Lun_Resume.pdf";

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
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
            <h3 className="text-2xl font-semibold">{t.about.subtitle}</h3>

            <p className="text-muted-foreground">
              {t.about.p1}
            </p>

            <p className="text-muted-foreground">
              {t.about.p2}
            </p>

            <p className="text-muted-foreground">
              {t.about.p3}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                {t.about.getInTouch}
              </a>
              <a
                href={resumeFile}
                download={resumeDownload}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t.about.downloadResume}
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
                <h4 className="font-semibold text-lg">{t.about.fullStackTitle}</h4>
                <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                  <li>{t.about.languages}</li>
                  <li>{t.about.frontend}</li>
                  <li>{t.about.backend}</li>
                  <li>{t.about.databases}</li>
                  <li>{t.about.devopsCloud}</li>
                  <li>{t.about.aiTools}</li>
                  <li>{t.about.testing}</li>
                  <li>{t.about.aiExploring}</li>
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
                <h4 className="font-semibold text-lg">{t.about.cyberTitle}</h4>
                <ul className="text-muted-foreground list-disc space-y-1 pl-4">
                  <li>{t.about.cyber1}</li>
                  <li>{t.about.cyber2}</li>
                  <li>{t.about.cyber3}</li>
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
                <h4 className="font-semibold text-lg">{t.about.agileTitle}</h4>
                <p className="text-muted-foreground">
                  {t.about.agileDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
