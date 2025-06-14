
import { User, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <User className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
              <p className="text-white/70 leading-relaxed">
                I'm a dedicated student with a passion for technology and innovation. 
                Always eager to learn new skills and tackle challenging problems with creative solutions.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Award className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-white mb-4">What I Do</h3>
              <p className="text-white/70 leading-relaxed">
                I focus on developing full-stack applications, learning modern frameworks, 
                and contributing to open-source projects while pursuing my academic goals.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <Target className="text-purple-400 mb-6" size={32} />
            <h3 className="text-2xl font-semibold text-white mb-6">My Goals</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Build impactful software solutions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Contribute to meaningful projects
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Continuously learn and grow
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Make a positive impact through technology
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
              <p className="text-white italic">
                "The best way to predict the future is to create it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
