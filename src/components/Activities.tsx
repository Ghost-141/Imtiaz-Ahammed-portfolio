import { Award, Users, Calendar } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      role: "Vice Chair",
      organization: "IEEE AESS BRAC University Student Branch Chapter",
      year: "2022",
      description: "Led and coordinated chapter activities, organized technical events, and fostered collaboration among students interested in aerospace and electronic systems.",
      achievements: [
        "Organized National Satellite Contest with 200+ participants",
        "Wrote comprehensive technical summaries for aerospace projects",
        "Assisted in organizing multiple technical workshops and seminars",
        "Managed team coordination and event logistics"
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Extracurricular Activities
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={activity.organization}
              className="animate-fade-in-up-delay card-portfolio hover-pop-glow group border-white/10 hover:border-sky-400/40 transform-gpu transition-transform hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(56,189,248,0.35),0_0_40px_rgba(56,189,248,0.25)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 transition-colors transition-opacity opacity-90 group-hover:opacity-100 group-hover:text-sky-100">
                      {activity.role}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {activity.organization}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Key Achievements</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activity.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
