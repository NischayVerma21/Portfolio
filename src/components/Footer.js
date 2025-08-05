import { Github, Linkedin, Mail, Code2, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-black text-3xl text-slate-800 dark:text-slate-100 mb-6">
              Nischay.dev
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium leading-relaxed">
              Passionate full stack developer creating innovative digital solutions with React, Next.js, and Node.js. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {/* GitHub */}
              <a 
                href="https://github.com/NischayVerma21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/nischay-verma-a33926378"
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              {/* LeetCode - Replacing Twitter */}
              <a 
                href="https://leetcode.com/u/NischayVerma/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Code2 className="w-5 h-5" />
              </a>
              
              {/* Instagram - New Addition */}
              <a 
                href="https://instagram.com/nischay____verma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              {/* Email */}
              <a 
                href="mailto:nischaynis1@gmail.com" 
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-black text-slate-800 dark:text-slate-100 mb-6 text-lg">Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
              <a href="#about" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
              <a href="#projects" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Projects</a>
              <a href="#skills" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Skills</a>
              <a href="#contact" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-black text-slate-800 dark:text-slate-100 mb-6 text-lg">Let's Connect</h3>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-600 dark:text-slate-400 font-semibold">Available for Projects</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-500 font-medium leading-relaxed">
              Open to new opportunities and collaborations. I'm currently available for freelance projects and full-time opportunities. Let's build something amazing together!
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 dark:text-slate-500 font-medium">
              © 2025 Nischay Verma. Made with ❤️ and lots of ☕
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
