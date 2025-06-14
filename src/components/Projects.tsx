
import { useState } from "react";
import { ExternalLink, Github, Eye, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Image Retrieval using DL & Handcrafted Features",
      description: "Deep learning-based CBIR system for precise image identification with RGB images, utilizing both Deep Learning algorithms and Handcrafted features.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "Keras", "VGG16", "Computer Vision"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Deep Learning",
      achievements: ["98.27% accuracy", "Perfect precision", "Strong recall across datasets"]
    },
    {
      id: 2,
      title: "Driver State Detection using ML",
      description: "Machine learning model using Haar-Cascade to identify driver drowsiness, enhancing road safety through physiological sensor data analysis.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Python", "OpenCV", "Matplotlib", "TensorFlow", "ML"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Machine Learning",
      achievements: ["96.2% accuracy", "Multi-modal data integration", "Funded research paper underway"]
    },
    {
      id: 3,
      title: "Emo Narrative",
      description: "Application analyzing user emotions with 95% accuracy and generating personalized stories using sentiment analysis and natural language generation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Python", "Generative AI", "APIs", "CNN", "NLP"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Generative AI",
      achievements: ["95% emotion accuracy", "70% user engagement increase", "GENEVOE'24 award winner"]
    },
    {
      id: 4,
      title: "Financial Fraud Detection",
      description: "Distributed fraud detection system using Apache Spark with Random Forest, SVM, and XGBoost for credit card transaction analysis.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&ixlib=rb-4.0.3",
      technologies: ["PySpark", "Random Forest", "SVM", "XGBoost", "Power BI"],
      githubUrl: "#",
      liveUrl: "https://ieeexplore.ieee.org/",
      category: "Research",
      achievements: ["94.2% F1-score", "38% improvement in fraud detection", "75% faster response time"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-white/60 text-sm flex items-center">
                        <Award size={12} className="mr-2 text-purple-400 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-white/70 hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-white/70 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>{project.id === 4 ? 'IEEE Paper' : 'Demo'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">Interested in my research work?</p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
