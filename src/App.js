import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Menu, X,
} from 'lucide-react';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import CertificatesSection from './components/CertificatesSection';
import Footer from './components/Footer';


const App = () => {
  const [darkMode, setDarkMode] = useState(true); // DEFAULT SET TO DARK MODE
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

const Header = ({ darkMode, toggleDarkMode, menuOpen, setMenuOpen }) => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl text-slate-800 dark:text-slate-100">
            Nischay.dev
          </div>
          
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            <a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Skills</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Projects</a>
            <a href="#certificates" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Certificates</a>
            
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 border border-slate-300 dark:border-slate-600"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
            
            <button
              onClick={scrollToContact}
              className="hidden md:block px-6 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-none hover:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 font-semibold text-sm"
            >
              Contact
            </button>
            
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <a href="#home" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</a>
            <a href="#about" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</a>
            <a href="#projects" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Projects</a>
            <a href="#skills" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Skills</a>
            <button 
              onClick={scrollToContact}
              className="w-full text-left px-4 py-2  bg-slate-800 dark:bg-slate-700 text-white rounded-lg font-medium "
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default App;
