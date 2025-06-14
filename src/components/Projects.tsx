import { useState } from "react";
import { ExternalLink, Github, Eye, Award, Code, Zap } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Image Retrieval using DL & Handcrafted Features",
      description: "Deep learning-based CBIR system for precise image identification with RGB images, utilizing both Deep Learning algorithms and Handcrafted features.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "Keras", "VGG16", "Computer Vision"],
      githubUrl: "https://github.com/pratyush981/Image-Retrieval-using-HandCrafted-Deep-Features",
      liveUrl: "https://github.com/pratyush981/Image-Retrieval-using-HandCrafted-Deep-Features",
      category: "Deep Learning",
      achievements: ["98.27% accuracy", "Perfect precision", "Strong recall across datasets"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Driver State Detection using ML",
      description: "Machine learning model using Haar-Cascade to identify driver drowsiness, enhancing road safety through physiological sensor data analysis.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Python", "OpenCV", "Matplotlib", "TensorFlow", "ML"],
      githubUrl: "https://github.com/pratyush981/driver_state_detection_using_haar_cascade_UROP",
      liveUrl: "https://github.com/pratyush981/driver_state_detection_using_haar_cascade_UROP",
      category: "Machine Learning",
      achievements: ["96.2% accuracy", "Multi-modal data integration", "Funded research paper underway"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      title: "Emo Narrative",
      description: "Application analyzing user emotions with 95% accuracy and generating personalized stories using sentiment analysis and natural language generation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Python", "Generative AI", "APIs", "CNN", "NLP"],
      githubUrl: "https://github.com/pratyush981/emotion-tunes-fusion",
      liveUrl: "https://github.com/pratyush981/emotion-tunes-fusion",
      category: "Generative AI",
      achievements: ["95% emotion accuracy", "70% user engagement increase", "GENEVOE'24 award winner"],
      gradient: "from-pink-500 to-red-600"
    },
    {
      id: 4,
      title: "Financial Fraud Detection",
      description: "Distributed fraud detection system using Apache Spark with Random Forest, SVM, and XGBoost for credit card transaction analysis.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&ixlib=rb-4.0.3",
      technologies: ["PySpark", "Random Forest", "SVM", "XGBoost", "Power BI"],
      githubUrl: "https://github.com/pratyush981/Credit_Card_Fraud_Detection_Using_Apache_Spark",
      liveUrl: "https://ieeexplore.ieee.org/document/10864321",
      category: "Research",
      achievements: ["94.2% F1-score", "38% improvement in fraud detection", "75% faster response time"],
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/30">
                  {project.category}
                </div>
                <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ${hoveredProject === project.id ? 'scale-100' : 'scale-75'}`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Code size={20} className="text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Zap size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-white/60 text-sm flex items-center group-hover:text-white/80 transition-colors duration-300">
                        <Award size={12} className="mr-2 text-purple-400 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/70 hover:text-purple-400 transition-colors duration-300 hover:scale-105"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/70 hover:text-purple-400 transition-colors duration-300 hover:scale-105"
                  >
                    <ExternalLink size={20} />
                    <span>{project.id === 4 ? 'IEEE Paper' : 'GitHub'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">Interested in my research work?</p>
          <a
            href="https://github.com/pratyush981"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
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
