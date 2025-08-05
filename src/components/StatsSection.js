import { 
    Code2,Coffee, Calendar, Globe
  } from 'lucide-react';

const StatsSection = () => {
    const stats = [
      { number: '2+', label: 'Years Experience', icon: <Calendar className="w-8 h-8" /> },
      { number: '10+', label: 'Projects Completed', icon: <Code2 className="w-8 h-8" /> },
      { number: '500+', label: 'Cups of Coffee', icon: <Coffee className="w-8 h-8" /> },
      { number: 'India', label: 'Based In', icon: <Globe className="w-8 h-8" /> }
    ];
  
    return (
      <section className="py-20 bg-blue-50 dark:bg-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-blue-200 dark:border-blue-800">
                  <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default StatsSection
