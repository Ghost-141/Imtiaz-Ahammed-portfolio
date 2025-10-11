const About = () => {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Background
            </h2>
          </div>

          <div className="animate-fade-in-up-delay">
            <div className="card-portfolio max-w-3xl mx-auto text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am Imtiaz a recent graduate in <span className="text-primary font-semibold">Electrical & Electronic Engineering</span> with a major in <span className="text-primary font-semibold">AI & Robotics</span> from BRAC University.
                I am passionate about artificial intelligence, deep learning, computer vision, and IoT applications.
                My journey in technology is driven by a desire to create innovative solutions that bridge the gap between cutting-edge research and real-world applications.
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  "Transforming complex problems into elegant AI-driven solutions"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
