import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Lane Car Classificaiton & Counting",
      description: "Advanced computer vision system using Python & OpenCV for real-time vehicle detection and counting across multiple lanes. Implemented object tracking algorithms for accurate traffic monitoring.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Object Detection"],
      githubUrl: "https://github.com/Ghost-141/Car_Detection_Counter",
    },
    {
      title: "Lung-Colon Cancer Classifier",
      description: "Custom deep learning model for medical image classification to detect lung and colon cancer from histopathological images. Achieved high accuracy using advanced CNN architectures.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Medical AI"],
      githubUrl: "https://github.com/Ghost-141/cancer-classifier",
    },
    {
      title: "PDF QA System",
      description: "Intelligent question-answering system using Retrieval Augmented Generation for uploaded documents. Built with LangChain and Streamlit for seamless document analysis.",
      technologies: ["LangChain", "RAG", "Streamlit", "NLP", "Python"],
      githubUrl: "https://github.com/Ghost-141/PDF-QA-System",
    },
  ];

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up-delay card-portfolio hover-pop-glow group border-white/10 hover:border-violet-400/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3 transition-colors transition-opacity opacity-80 group-hover:opacity-100 group-hover:text-violet-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-xs"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
