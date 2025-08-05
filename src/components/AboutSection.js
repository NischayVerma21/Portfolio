import React from 'react';
import { 
  Code2, Server, Database, Zap
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-blue-50 dark:bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 mb-4">
            About <span className="text-blue-700 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Get to know the person behind the code</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              I'm a passionate full-stack developer with <strong className="text-blue-700 dark:text-blue-400">2+ years of experience</strong> creating digital solutions 
              that make a difference. I specialize in modern web technologies like React, Express.js, and Node.js, 
              with a keen eye for exceptional user experiences.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Beyond full-stack development, I actively sharpen my problem-solving skills through data structures and algorithms and explores foundational concepts in machine learning.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            I believe in writing clean code, continuously learning, and building things that matter — whether it's logic-heavy backends 
      or polished frontends.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Logical Thinking', 'Backend Focused','UI Enhancer'].map((interest, index) => (
                <span key={index} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold shadow-sm border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all duration-300">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-green-200 dark:border-green-800">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">Clean Code Advocate</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">Full-Stack Architecture</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">DSA & Algorithm Practice</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">Detail-Oriented Coder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
