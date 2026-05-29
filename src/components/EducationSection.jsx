import { GraduationCap, Calendar, Award, Star } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-xs border border-border card-hover text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">University of Ottawa</h4>
                <p className="text-sm text-muted-foreground">
                  Bachelor of Applied Science — Software Engineering (CO-OP)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
              <Calendar size={12} />
              <span>Sep 2022 – Apr 2026</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <Award size={14} className="text-primary" />
                <span className="font-medium text-foreground">Dean's Honour Award:</span> All terms
              </p>
              <p className="flex items-center gap-1.5">
                <Star size={14} className="text-primary" />
                <span className="font-medium text-foreground">CGPA:</span> 9.7/10
              </p>
              <p className="flex items-center gap-1.5">
                <Award size={14} className="text-primary" />
                <span className="font-medium text-foreground">Fortinet NSE 4</span> — FortiOS 7.6 Administrator
              </p>
              <p className="mt-3">
                <span className="font-medium text-foreground">Activities:</span> Engineering Guide, Hack the Hill, uOhack
              </p>
              <details className="mt-3 group">
                <summary className="cursor-pointer text-primary font-medium text-sm hover:underline">
                  Key Coursework
                </summary>
                <p className="mt-2 leading-relaxed">
                  Software Engineering Capstone I & II, Real Time & Embedded Software Design, Secure Enterprise Network Infrastructure (Fortinet), Data Communications & Networking (Cisco), Software Project Management, Design & Analysis of Algorithms, Software Requirements Analysis, Software Design & Architecture, Database, Software Construction, UI/UX Design, Operating Systems, Software Quality Assurance, Computer Architecture, Data Structures & Algorithms, Discrete Structures, OOP, Intro to Software Engineering, Technical Report Writing, Calculus, Professional Communication, Digital Systems, Probability & Statistics, Discrete Mathematics for Computing, Professional Practice in Computing.
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
                <h4 className="font-semibold text-lg">Gaetan Raynal State College</h4>
                <p className="text-sm text-muted-foreground">
                  O-Level and A-Level Cambridge School Certificates
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
              <Calendar size={12} />
              <span>Jan 2014 – Sep 2021</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Ranked 3rd</span> nationwide for A-Level Cambridge Computer Science
              </p>
              <p>
                <span className="font-medium text-foreground">Ranked 30th</span> Mauritius Science Side Girls Scholarship
              </p>
              <p>
                <span className="font-medium text-foreground">Aggregate 6</span> for O-Level Cambridge School Certificate
              </p>
              <p className="mt-3">
                <span className="font-medium text-foreground">Activities:</span> Prefect Body, UNESCO Club, Glider Competition, Handball Competition, Australian Mathematics Competition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};