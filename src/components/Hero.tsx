
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8 group">
          <img
            src="/lovable-uploads/7969ec9c-f150-44db-abd0-7bedc3e0f3f1.png"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl object-cover hover:scale-110 transition-all duration-500 hover:border-purple-400/50 hover:shadow-purple-500/25 hover:shadow-2xl group-hover:animate-bounce"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-pulse">Pratyush Jha</span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-white/80 mb-8 h-12">
          I'm a <span className="text-purple-400 font-semibold">{text}</span>
          <span className="animate-pulse text-pink-400">|</span>
        </div>
        
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-500">
          Computer Science student specializing in Cloud Computing with expertise in Machine Learning, 
          Deep Learning, and AI research. Currently pursuing B.E. at SRM Institute with 8.8 CGPA.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-1000">
          <a 
            href="https://github.com/pratyush981" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-all duration-300 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-110 group"
          >
            <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/pratyush-jha-01a23a253/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all duration-300 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-110 group"
          >
            <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a 
            href="mailto:pratyushjha084@gmail.com" 
            className="text-white hover:text-green-400 transition-all duration-300 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-110 group"
          >
            <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a 
            href="tel:+918978430920" 
            className="text-white hover:text-yellow-400 transition-all duration-300 p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-110 group"
          >
            <Phone size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
        
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce hover:animate-pulse transition-all duration-300"
        >
          <ChevronDown size={32} className="text-white/60 hover:text-purple-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
