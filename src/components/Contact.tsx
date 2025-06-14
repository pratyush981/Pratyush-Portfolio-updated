
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-white/70">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-white/70">Your City, Country</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors duration-300"
              >
                <Github className="text-white" size={24} />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors duration-300"
              >
                <Linkedin className="text-white" size={24} />
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
              </div>
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-300"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-white/50">
            © 2024 Your Name. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
