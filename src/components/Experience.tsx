
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {/* Research Intern */}
            <div className="relative flex items-center md:justify-center">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform md:-translate-x-1/2 border-4 border-slate-900"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 md:ml-auto group">
                  {/* Image Section */}
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img 
                      src="/lovable-uploads/1165fbb4-d8f8-4a01-a15c-6cb2a93c1ab7.png" 
                      alt="Research Intern at NIT Hamirpur"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white">Research Intern</h3>
                    <div className="flex items-center text-purple-400">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">May 2024 - July 2024</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white/60 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>NIT Hamirpur (Onsite)</span>
                  </div>
                  
                  <div className="space-y-3 text-white/70">
                    <div className="flex items-start">
                      <TrendingUp size={16} className="mr-3 mt-1 text-purple-400 flex-shrink-0" />
                      <p>Contributed to departmental project on content-based image retrieval using Corel-1K dataset, achieving 15% increase in departmental accuracy</p>
                    </div>
                    <div className="flex items-start">
                      <Users size={16} className="mr-3 mt-1 text-purple-400 flex-shrink-0" />
                      <p>Collaborated with faculty experts on Deep Learning and feature extraction techniques</p>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp size={16} className="mr-3 mt-1 text-purple-400 flex-shrink-0" />
                      <p>Integrated traditional features with modern Deep Learning methods for effective image retrieval</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Deep Learning", "Computer Vision", "Image Processing", "Research"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Leadership Experience */}
            <div className="relative flex items-center md:justify-center">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-pink-500 rounded-full transform md:-translate-x-1/2 border-4 border-slate-900"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white">Leadership & Community</h3>
                    <div className="flex items-center text-pink-400">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">Ongoing</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-white/70">
                    <div className="flex items-start">
                      <Users size={16} className="mr-3 mt-1 text-pink-400 flex-shrink-0" />
                      <p>Active member of GCSRM (GitHub Community) and SRMKZILLA (Mozilla Firefox Club)</p>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp size={16} className="mr-3 mt-1 text-pink-400 flex-shrink-0" />
                      <p>Integral part of Hostel Discipline Committee and Student Affairs Discipline Committee</p>
                    </div>
                    <div className="flex items-start">
                      <Users size={16} className="mr-3 mt-1 text-pink-400 flex-shrink-0" />
                      <p>Former School Discipline Captain (2018-2020), demonstrating leadership and responsibility</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Leadership", "Community Service", "Team Management", "Discipline"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
