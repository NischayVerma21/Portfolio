import React, { useState, useEffect } from "react";
import { FileText, ExternalLink, Award, Eye } from "lucide-react";

const certificates = [
  {
    title: "Java Programming Certification",
    description: "Comprehensive Java programming course covering object-oriented programming, data structures, and enterprise application development.",
    pdf: "/Files/JAVA_Certificate.pdf",
    issuer: "Infosys Springboard",
    date: "2024"
  },
  {
    title: "Machine Learning Basics", 
    description: "Completed introductory machine learning course covering fundamental algorithms including linear regression, logistic regression, K-Nearest Neighbors (KNN), and decision trees. Learned basic implementation using Python libraries like NumPy, pandas, and scikit-learn for simple data analysis and model building.",
    pdf: "/Files/ML_Certificate.pdf",
    issuer: "Intershala",
    date: "2025"
  },
];

const CertificatesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="certificates" className="py-20 bg-blue-50 dark:bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 mb-4">
            My <span className="text-blue-700 dark:text-blue-400">Certificates</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
            Formal recognitions of the skills I bring to every project
          </p>
        </div>

        {/* Certificates list */}
        <div className="space-y-20">
          {certificates.map((cert, idx) => (
            <div key={idx} className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Certificate Preview Card */}
              <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-blue-200 dark:border-blue-800 overflow-hidden transform hover:scale-105 transition-all duration-300">
                  
                  {/* PDF Preview - Different approach for mobile and desktop */}
                  <div className="relative h-80 bg-slate-50 dark:bg-slate-700">
                    {isMobile ? (
                      // Mobile: Show placeholder with preview button
                      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                        <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-6">
                          <FileText className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Certificate Preview
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Tap to view full certificate
                          </p>
                        </div>
                        <button
                          onClick={() => window.open(cert.pdf, '_blank')}
                          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          <Eye className="w-4 h-4" />
                          View PDF
                        </button>
                      </div>
                    ) : (
                      // Desktop: Show PDF iframe
                      <>
                        <iframe
                          src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                          className="w-full h-full"
                          title={`${cert.title} Preview`}
                          style={{ 
                            border: 'none',
                            pointerEvents: 'none'
                          }}
                        />
                        
                        {/* Overlay for click to open */}
                        <div 
                          className="absolute inset-0 bg-transparent cursor-pointer group hover:bg-blue-500/10 transition-all duration-300"
                          onClick={() => window.open(cert.pdf, '_blank')}
                        >
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg">
                              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Certificate Info Footer */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => window.open(cert.pdf, '_blank')}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        View Full
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className={`space-y-6 ${idx % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <div>
                  <h3 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-3">
                    {cert.title}
                  </h3>
                  <div className={`w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-6 ${idx % 2 === 1 ? "lg:ml-auto" : ""}`}></div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {cert.description}
                </p>
                
                <div className={`flex gap-4 ${idx % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <button
                    onClick={() => window.open(cert.pdf, '_blank')}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
                  >
                    <FileText className="w-5 h-5" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
