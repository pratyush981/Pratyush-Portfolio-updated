
import { useState, useEffect } from "react";
import { Code, Monitor, Settings, Star } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("technical");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = {
    technical: [
      { name: "Python", level: 90, color: "from-yellow-400 to-green-500" },
      { name: "C/C++", level: 85, color: "from-blue-400 to-purple-500" },
      { name: "Machine Learning", level: 92, color: "from-purple-400 to-pink-500" },
      { name: "Deep Learning", level: 88, color: "from-pink-400 to-red-500" },
      { name: "TensorFlow/Keras", level: 85, color: "from-orange-400 to-yellow-500" },
      { name: "Computer Vision", level: 87, color: "from-green-400 to-blue-500" }
    ],
    tools: [
      { name: "VS Code", level: 95, color: "from-blue-400 to-cyan-500" },
      { name: "GitHub", level: 90, color: "from-gray-400 to-purple-500" },
      { name: "Google Colab", level: 92, color: "from-yellow-400 to-orange-500" },
      { name: "AWS", level: 80, color: "from-orange-400 to-red-500" },
      { name: "Power BI", level: 85, color: "from-yellow-400 to-green-500" },
      { name: "Salesforce", level: 75, color: "from-blue-400 to-indigo-500" }
    ],
    libraries: [
      { name: "NumPy", level: 90, color: "from-blue-400 to-purple-500" },
      { name: "Pandas", level: 88, color: "from-green-400 to-blue-500" },
      { name: "Matplotlib", level: 85, color: "from-red-400 to-pink-500" },
      { name: "PySpark", level: 82, color: "from-orange-400 to-yellow-500" },
      { name: "OpenCV", level: 85, color: "from-purple-400 to-pink-500" },
      { name: "Tkinter", level: 80, color: "from-green-400 to-cyan-500" }
    ],
    soft: [
      { name: "Problem Solving", level: 95, color: "from-purple-400 to-pink-500" },
      { name: "Communication", level: 88, color: "from-blue-400 to-green-500" },
      { name: "Research Skills", level: 92, color: "from-pink-400 to-red-500" },
      { name: "Leadership", level: 85, color: "from-yellow-400 to-orange-500" },
      { name: "Time Management", level: 90, color: "from-green-400 to-blue-500" },
      { name: "Adaptability", level: 88, color: "from-indigo-400 to-purple-500" }
    ]
  };

  const categories = [
    { id: "technical", label: "Programming & AI", icon: Code },
    { id: "tools", label: "Tools & Platforms", icon: Monitor },
    { id: "libraries", label: "Libraries & Frameworks", icon: Settings },
    { id: "soft", label: "Soft Skills", icon: Star }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">Skills</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-500 hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={20} className={activeCategory === category.id ? "animate-pulse" : ""} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                  {skill.name}
                </span>
                <span className={`font-bold transition-all duration-300 ${
                  hoveredSkill === skill.name ? "text-white scale-110" : "text-purple-400"
                }`}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
