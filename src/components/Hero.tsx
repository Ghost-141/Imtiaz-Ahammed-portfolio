import { Github, Linkedin } from "lucide-react";

// Minimal Medium-like glyph (currentColor fill)
const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="10" cy="12" r="8" fill="currentColor" />
    <rect x="18" y="5" width="10" height="14" rx="3" fill="currentColor" />
    <circle cx="32" cy="12" r="5" fill="currentColor" />
  </svg>
);
import profileImg from "@/assets/imtiaz.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Header with small round avatar and big heading */}
        <div className="animate-fade-in-up flex items-start gap-6 mb-8">
          <div className="avatar-glow hover-tilt ml-3 md:ml-4">
            <img
              src={profileImg}
              alt="Imtiaz Ahammed"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-white/10 shadow-lg"
              decoding="async"
            />
          </div>
          <div>
            <h1 className="font-extrabold leading-[1.28] pb-2 md:pb-3">
              <span className="block text-4xl sm:text-5xl md:text-6xl text-white">
                <span
                  className="typing typing-no-caret"
                  style={{ ['--typing-width' as any]: '8ch', ['--typing-steps' as any]: 8, ['--typing-duration' as any]: '1.4s' }}
                >
                  Hi, I am
                </span>
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent text-shimmer">
                <span
                  className="typing typing-no-caret"
                  style={{ ['--typing-width' as any]: '16ch', ['--typing-steps' as any]: 16, ['--typing-duration' as any]: '1.9s', ['--typing-delay' as any]: '1.5s' }}
                >
                  Imtiaz Ahammed
                </span>
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl text-white mt-1">
                <span
                  className="typing typing-no-caret"
                  style={{ ['--typing-width' as any]: '14ch', ['--typing-steps' as any]: 14, ['--typing-duration' as any]: '1.6s', ['--typing-delay' as any]: '3.4s' }}
                >
                  An AI Engineer
                </span>
              </span>
            </h1>
          </div>
        </div>

        {/* Tech stack chips (kept as requested) */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { label: "Deep Learning", color: "bg-emerald-500/20 text-emerald-100 border-emerald-400/30" },
              { label: "Computer Vision", color: "bg-indigo-500/20 text-indigo-100 border-indigo-400/30" },
              { label: "RAG", color: "bg-rose-500/20 text-rose-100 border-rose-400/30" },
              // { label: "GenAI", color: "bg-amber-500/20 text-amber-100 border-amber-400/30" },
            ].map((chip) => (
              <span
                key={chip.label}
                className={`px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm chip-hover ${chip.color}`}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
            I am passionate about using
            machine learning, deep learning, and GenAI to solve real-world problems. I
            work with technologies like <span className="font-semibold">computer vision</span>,
            <span className="font-semibold"> Retrieval-Augmented Generation (RAG)</span>,
            <span className="font-semibold"> Deep Learning</span>, and build intelligent systems
            that process and analyze complex data to provide actionable insights that make life
            easier.
          </p>
        </div>

        {/* Social icons only (no Contact/View buttons) */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Ghost-141"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-violet-300 hover:bg-white/20 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/imtiazahammed141/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-violet-300 hover:bg-white/20 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://medium.com/@imtiazahammed141"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-violet-300 hover:bg-white/20 transition-all duration-300"
          >
            <MediumIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
