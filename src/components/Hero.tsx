import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import profileImg from "@/assets/imtiaz.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Glass panel behind text to match background */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
            <p className="text-gray-400 text-lg mb-4 tracking-wide">
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white block">Hi, I'm</span>
              <span className="text-orange-500 block">Imtiaz Ahammed</span>
            </h1>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { label: 'Machine Learning', color: 'bg-emerald-500/20 text-emerald-100 border-emerald-400/30' },
                  { label: 'Deep Learning', color: 'bg-indigo-500/20 text-indigo-100 border-indigo-400/30' },
                  { label: 'RAG', color: 'bg-rose-500/20 text-rose-100 border-rose-400/30' },
                  { label: 'LLM', color: 'bg-amber-500/20 text-amber-100 border-amber-400/30' },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${chip.color}`}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                With a solid foundation in machine learning, deep learning, and RAG-based systems, 
                I am passionate about building advanced AI solutions to solve real-world problems. 
                I am currently expanding my expertise in computer vision and Edge AI, with a focus on optimizing AI models for deployment on edge devices. 
                Proficient in Python, TensorFlow, PyTorch, and a range of AI frameworks, I am committed to pushing the boundaries of intelligent systems 
                while continually exploring emerging technologies to stay at the forefront of the field.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/imtiazahammed141/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-orange-500 hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Ghost-141"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-orange-500 hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:mdimtiazahammed@gmail.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-orange-500 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="animate-fade-in-up-delay flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl border border-white/20 backdrop-blur-sm p-1">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Imtiaz Anik"
                    className="w-full h-full object-cover"
                    decoding="async"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-8 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute top-3/4 -right-6 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 -left-4 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
