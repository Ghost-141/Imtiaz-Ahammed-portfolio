import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {

  /// Compute Vision Projects

  const cvProjects = [
    {
      title: "Multi-Lane Car Classificaiton & Counting",
      description:
        "Utilized yolov8 and opencv to detect and count car from real time video feed. Utilized tracking algorithm to keep track of cars across frames.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Object Detection"],
      githubUrl: "https://github.com/Ghost-141/Car_Detection_Counter",
      demoUrl: "https://github.com/Ghost-141/Car_Detection_Counter",
    },

    {
      title: "Automatic Car Licence Plate Detection and Extraction",
      description:
        "Utilized yolov11 and opencv to clasify cars across different objects and fine-tuned yolov11 fol license plate detection. Along with these, used ocr to extract text from the detected license plate.",
      technologies: ["Python", "OpenCV", "Object Detection"],
      githubUrl: "https://github.com/Ghost-141/Car-Numb-Plate-Detection-Extraction",
      demoUrl: "https://github.com/Ghost-141/Car-Numb-Plate-Detection-Extraction",
    },

    {
      title: "Lung-Colon Cancer Classifier",
      description:
        "Custom deep learning model for medical image classification to detect lung and colon cancer from histopathological images. Achieved high accuracy using advanced CNN architectures.",
      technologies: ["Python", "PyTorch", "Deep Learning", "Medical Imaging"],
      githubUrl: "https://github.com/Ghost-141/Lung_Colon_Cancer_Classification_with_CNN",
      demoUrl: "https://github.com/Ghost-141/Lung_Colon_Cancer_Classification_with_CNN",
    }

  ];


  /// Genarative AI Projects

  const genAIProjects = [
    {
      title: "RAG Based PDF QA System",
      description:
        "Intelligent question-answering system using Retrieval Augmented Generation for uploaded documents. Built with LangChain and Streamlit for seamless document analysis.",
      technologies: ["LangChain", "RAG", "Streamlit", "Python"],
      githubUrl: "https://github.com/Ghost-141/PDF-QA-System",
      demoUrl: "https://github.com/Ghost-141/PDF-QA-System",
    },

    {
      title: "RAG Based QA System for Bangla Documents",
      description:
        "Intelligent question-answering system using Retrieval Augmented Generation focusing on Bangla Language. Built with LangChain and Streamlit for seamless document analysis.",
      technologies: ["LangChain", "RAG", "Streamlit", "NLP", "Python"],
      githubUrl: "https://github.com/Ghost-141/Bangla-Rag-Based-QA-System",
      demoUrl: "https://github.com/Ghost-141/Bangla-Rag-Based-QA-System",
    },

  ];

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="animate-fade-in-up">
          <h2 className="heading-featured text-center mb-12">
            Featured Projects
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Computer Vision Section */}
          <div className="animate-fade-in-up">
            <h3 className="heading-cv text-center mb-8">Computer Vision</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cvProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up-delay card-portfolio hover-pop-glow group border-white/10 hover:border-violet-400/40 transform-gpu transition-transform h-full flex flex-col"
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
                    size="sm"
                    className="flex items-center gap-2 text-xs"
                    asChild
                  >
                    <a href={project.demoUrl ?? project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3" />
                      View Demo
                    </a>
                  </Button>
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

          {/* Generative AI Section */}
          <div className="animate-fade-in-up">
            <h3 className="heading-genai text-center mb-8">Generative AI</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genAIProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up-delay card-portfolio hover-pop-glow group border-white/10 hover:border-violet-400/40 transform-gpu transition-transform h-full flex flex-col"
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
                    size="sm"
                    className="flex items-center gap-2 text-xs"
                    asChild
                  >
                    <a href={project.demoUrl ?? project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3" />
                      View Demo
                    </a>
                  </Button>
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
