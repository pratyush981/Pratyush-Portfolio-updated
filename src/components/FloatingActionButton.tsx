
import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MessageSquare } from "lucide-react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: Github, href: "https://github.com/pratyush981", label: "GitHub", color: "hover:bg-gray-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pratyush-jha-01a23a253/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Mail, href: "mailto:pratyushjha084@gmail.com", label: "Email", color: "hover:bg-green-600" },
    { icon: Phone, href: "tel:+918978430920", label: "Call", color: "hover:bg-yellow-600" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`flex flex-col-reverse items-end space-y-reverse space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`p-3 bg-white/10 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 ${action.color} border border-white/20`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default FloatingActionButton;
