
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["CS Student", "AI Researcher", "ML Developer", "Data Scientist"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <img
            src="/lovable-uploads/7969ec9c-f150-44db-abd0-7bedc3e0f3f1.png"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Pratyush Jha</span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-white/80 mb-8 h-12">
          I'm a <span className="text-purple-400 font-semibold">{text}</span>
          <span className="animate-pulse">|</span>
        </div>
        
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-500">
          Computer Science student specializing in Cloud Computing with expertise in Machine Learning, 
          Deep Learning, and AI research. Currently pursuing B.E. at SRM Institute with 8.8 CGPA.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-1000">
          <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20">
            <Github size={24} />
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20">
            <Mail size={24} />
          </a>
        </div>
        
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="text-white/60" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
