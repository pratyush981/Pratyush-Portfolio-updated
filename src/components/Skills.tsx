
import { useState } from "react";
import { Code, Monitor, Settings, Star } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("technical");

  const skillCategories = {
    technical: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "Machine Learning", level: 92 },
      { name: "Deep Learning", level: 88 },
      { name: "TensorFlow/Keras", level: 85 },
      { name: "Computer Vision", level: 87 }
    ],
    tools: [
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 90 },
      { name: "Google Colab", level: 92 },
      { name: "AWS", level: 80 },
      { name: "Power BI", level: 85 },
      { name: "Salesforce", level: 75 }
    ],
    libraries: [
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 88 },
      { name: "Matplotlib", level: 85 },
      { name: "PySpark", level: 82 },
      { name: "OpenCV", level: 85 },
      { name: "Tkinter", level: 80 }
    ],
    soft: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 88 },
      { name: "Research Skills", level: 92 },
      { name: "Leadership", level: 85 },
      { name: "Time Management", level: 90 },
      { name: "Adaptability", level: 88 }
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
