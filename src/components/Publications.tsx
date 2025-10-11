import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "An Efficient IoT-based Fire Detection System Using Quantized Deep Learning Model on Resource-Constrained Devices",
      conference: "IEEE Conference Publication",
      year: "2024",
      description: "Developed an innovative IoT fire detection system that leverages quantized deep learning models to enable real-time fire detection on resource-constrained devices, significantly reducing false alarms while maintaining high accuracy.",
      link: "https://ieeexplore.ieee.org/document/example",
      tags: ["IoT", "Deep Learning", "Fire Detection", "Edge Computing", "Model Quantization"],
    },
  ];

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Publications
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <div
              key={publication.title}
              className="animate-fade-in-up-delay card-portfolio hover-pop-glow group border-white/10 hover:border-violet-400/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight mb-2 transition-colors transition-opacity opacity-80 group-hover:opacity-100 group-hover:text-violet-200">
                        {publication.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">{publication.conference}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{publication.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {publication.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.tags.map((tag) => (
                      <span key={tag} className="skill-tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-start">
                <Button
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Read Publication
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
