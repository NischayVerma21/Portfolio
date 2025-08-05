import React from 'react'
import { Monitor, Server, Database, FileCode, Settings, Palette } from 'lucide-react';



const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Monitor className="w-6 h-6" />,
      skills: ['React/Express.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend', 
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs']
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['SQL', 'MongoDB', 'RDBMS', 'PostgreSQL']
    },
    {
      title: 'Programming',
      icon: <FileCode className="w-6 h-6" />,
      skills: ['C++ (DSA)', 'JavaScript', 'Problem Solving', 'Algorithms']
    },
    {
      title: 'Development Tools',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Git/GitHub', 'VS Code', 'ChatGPT', 'npm/yarn']
    },
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      skills: ['UI/UX Principles', 'Responsive Design', 'Component Design', 'User Experience']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 dark:bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 mb-4">
            Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-blue-200 dark:border-blue-800">
              
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-white bg-blue-600 dark:bg-blue-500 p-3 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  

export default SkillsSection
