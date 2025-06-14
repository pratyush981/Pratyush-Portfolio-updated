
import { useState } from "react";
import { Code, Monitor, Settings, Star } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("technical");

  const skillCategories = {
    technical: [
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Python", level: 75 },
      { name: "HTML/CSS", level: 90 },
      { name: "Node.js", level: 70 },
      { name: "Git", level: 85 }
    ],
    tools: [
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 75 }
    ],
    soft: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Team Work", level: 88 },
      { name: "Leadership", level: 80 },
      { name: "Adaptability", level: 92 },
      { name: "Critical Thinking", level: 87 }
    ]
  };

  const categories = [
    { id: "technical", label: "Technical Skills", icon: Code },
    { id: "tools", label: "Tools & Platforms", icon: Monitor },
    { id: "soft", label: "Soft Skills", icon: Star }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-purple-500 text-white shadow-lg"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                <Icon size={20} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div key={skill.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
