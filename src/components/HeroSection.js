import React  from 'react';


const HeroSection = () => {
    const scrollToContact = () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    // Add this function to handle CV download
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/files/Nischay_Verma_Resume.pdf';
    link.download = 'Nischay_Verma_Resume.pdf'; // The filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
    return (
      <section id="home" className="pt-16 min-h-screen flex items-center bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* STATIC MODERN GRID BACKGROUND */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            ></div>
          </div>
          
          {/* Subtle Dots Pattern */}
          <div 
            className="absolute inset-0 opacity-20 dark:opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(71, 85, 105, 0.3) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          {/* Dark Mode: Subtle Glowing Elements */}
          <div className="hidden dark:block">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-violet-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-cyan-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                  <span className="text-slate-800 dark:text-slate-100">
                    Nischay
                  </span>
                  <br />
                  <span className="text-slate-600 dark:text-slate-300">
                    Verma
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-semibold">
                  Full Stack Developer
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg font-medium leading-relaxed">
                  2+ Years Experience crafting innovative digital solutions with React, Express.js, and Node.js. 
                  Always learning, always building.
                </p>
              </div>
  
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-slate-800 dark:bg-slate-700 text-white rounded-xl hover:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                >
                  Get In Touch
                </button>
                <button  onClick={downloadCV} className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 font-semibold">
                  Download CV
                </button>
              </div>
            </div>
  
            <div className="relative">
              <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-700">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-sm ml-4 font-mono">portfolio.js</span>
                </div>
                <div className="space-y-3 text-sm font-mono leading-relaxed">
                  <div className="text-blue-400">const <span className="text-amber-300">developer</span> = {`{`}</div>
                  <div className="text-white ml-4">name: '<span className="text-green-400">Nischay Verma</span>',</div>
                  <div className="text-white ml-4">experience: '<span className="text-orange-400">2+ Years</span>',</div>
                  <div className="text-white ml-4">skills: [</div>
                  <div className="text-orange-400 ml-8">'React', 'Express.js', 'Node.js',</div>
                  <div className="text-orange-400 ml-8">'MySql', 'Bootstrap'</div>
                  <div className="text-white ml-4">],</div>
                  <div className="text-white ml-4">passionate: <span className="text-violet-400">true</span>,</div>
                  <div className="text-white ml-4">passion: '<span className="text-violet-400">Creating Amazing Experiences</span>',</div>
                  <div className="text-white ml-4">status: '<span className="text-green-400">Available for Projects</span>'</div>
                  <div className="text-blue-400">{`}`};</div>
                  <div className="text-slate-500 mt-4">{"// Let's build something amazing together!"}</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default HeroSection
