
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "experience", label: "Experience", icon: "🚀" },
    { id: "projects", label: "Projects", icon: "💼" },
    { id: "contact", label: "Contact", icon: "📧" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white relative group">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Pratyush Jha
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-6 py-3 text-white rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg group-hover:animate-bounce transition-all duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </div>
                
                {/* Animated underline */}
                <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl mt-2 py-4 border border-white/10">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-3 w-full text-left px-6 py-3 text-white hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
