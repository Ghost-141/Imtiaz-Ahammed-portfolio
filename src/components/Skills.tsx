import { Database } from "lucide-react";
import {
  SiPython,
  SiC,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiLangchain,
  SiFastapi,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAnaconda,
} from "react-icons/si";
import type { CSSProperties, ComponentType } from "react";

type SkillIconProps = {
  className?: string;
  color?: string;
  style?: CSSProperties;
};

type SkillIcon = ComponentType<SkillIconProps>;

type Skill = {
  name: string;
  icon: SkillIcon;
  color?: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: SiPython, color: "#FFD343" },
        { name: "C", icon: SiC, color: "#03599C" },
      ],
    },
    {
      title: "Libraries & Framework",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        { name: "LangChain", icon: SiLangchain, color: "#0B6EFD" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "SQL", icon: Database, color: "#00758F" },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Anaconda", icon: SiAnaconda, color: "#44A833" },
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
            With expertise across multiple domains, I bring a comprehensive skill set to tackle complex challenges in domain of AI, computer vision, and software engineering.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="animate-fade-in-up-delay group"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h4 className="text-2xl font-semibold mb-6 text-white opacity-90 transition-colors transition-opacity group-hover:text-sky-100 group-hover:opacity-100">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    const iconColor = skill.color ?? "#38bdf8";
                    const iconStyles: CSSProperties | undefined = skill.color
                      ? { color: iconColor, stroke: iconColor, fill: iconColor }
                      : undefined;
                    return (
                      <div
                        key={skill.name}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3 group"
                      >
                        <IconComponent
                          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                          color={iconColor}
                          style={iconStyles}
                        />
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
