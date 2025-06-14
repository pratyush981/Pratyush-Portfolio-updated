
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <GraduationCap className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4 text-white/70">
                <div>
                  <h4 className="font-semibold text-white">SRM Institute of Science and Technology, Chennai</h4>
                  <p>Bachelor of Engineering in Computer Science with Specialization in Cloud Computing</p>
                  <p className="text-purple-400 font-medium">CGPA: 8.8 | 2022-2026</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Keshav Smarak Jr. College, Hyderabad</h4>
                  <p>XII Board - 74.0% | 2020-2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Award className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-semibold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Received UROP funding for research project at SRM Institute</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>3rd position in GENOVOE'24 Generative AI competition</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Published research paper at IEEE ICSCNA 2024 conference</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>School Discipline Captain (2018-2020)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <Target className="text-purple-400 mb-6" size={32} />
            <h3 className="text-2xl font-semibold text-white mb-6">Research Focus</h3>
            <ul className="space-y-4 text-white/70 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Machine Learning & Deep Learning
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Computer Vision & Image Processing
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Generative AI & NLP
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Cloud Computing & Big Data
              </li>
            </ul>
            
            <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
              <p className="text-white italic text-center">
                "Passionate about leveraging AI to solve real-world problems and make technology more accessible."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
