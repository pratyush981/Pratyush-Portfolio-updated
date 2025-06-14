
import { useState } from "react";
import { MessageCircle, Github, Linkedin, Mail, Phone, X } from "lucide-react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:pratyushjha084@gmail.com",
      color: "bg-red-500 hover:bg-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+918978430920",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/pratyush981",
      color: "bg-gray-700 hover:bg-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pratyush-jha-01a23a253/",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <div className={`flex flex-col space-y-3 mb-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => (
          <a
            key={option.label}
            href={option.href}
            target={option.href.startsWith('http') ? '_blank' : undefined}
            rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`${option.color} p-3 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300 group`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <option.icon size={20} />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {option.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-4 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300 ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default FloatingActionButton;
