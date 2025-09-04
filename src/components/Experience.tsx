import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Work Experience
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up-delay">
            <div className="card-portfolio hover-pop-glow group border-white/10 hover:border-violet-400/40">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 opacity-80 transition-colors transition-opacity group-hover:opacity-100 group-hover:text-violet-200">
                    Software Engineering Intern (AI/ML)
                  </h3>
                  <p className="text-primary font-semibold text-lg">CloudlyIO</p>
                </div>
                <div className="flex flex-col md:text-right mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>April 2025 – Present</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Used Git, GitHub, and GitLab for version control and collaboration across multiple AI/ML projects
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Containerized applications with Docker for easier deployment and scalability of ML models
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Built a network analyzer chatbot using RAG & LangChain for intelligent log analysis and troubleshooting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
