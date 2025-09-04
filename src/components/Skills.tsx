import { Code2, Database, Wrench, Server, FileText, GitBranch, Package, Layers, Eye, Link, Rocket, Container, Zap, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: Code2 },
        { name: "C", icon: FileText },
      ],
    },
    {
      title: "AI Framework",
      skills: [
        { name: "TensorFlow", icon: Database },
        { name: "PyTorch", icon: Database },
        { name: "Scikit-learn", icon: Layers },
        { name: "OpenCV", icon: Eye },
        { name: "LangChain", icon: Link },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Container },
        { name: "FastAPI", icon: Zap },
        { name: "Anaconda", icon: Package },
        { name: "Streamlit", icon: Rocket },
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Technical Skills
          </h2>
          <p className="text-lg text-center mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With expertise across multiple domains, I bring a comprehensive skill set to tackle complex challenges in AI/ML, computer vision, and software engineering.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="animate-fade-in-up-delay card-portfolio hover-pop-glow group border-white/10 hover:border-sky-400/40"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h4 className="text-2xl font-semibold mb-6 text-white opacity-90 transition-colors transition-opacity group-hover:text-sky-100 group-hover:opacity-100">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3 group"
                      >
                        <IconComponent className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
