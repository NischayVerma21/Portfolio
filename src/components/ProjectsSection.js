import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  // State to track current image index for each project
  const [currentImages, setCurrentImages] = useState({});

  const projects = [
    {
      id: 'gateway',
      title: 'Ticket Gateway',
      description: 'Gallery Gateway is a full-stack web app that lets visitors browse exhibitions, check real-time slot availability, book tickets, pay securely online, and receive QR-code e-passes.',
      features: ['Real-time Show Availability','Slot-based Ticket Booking','QR-code e-Tickets','Secure Payment Gateway','Interactive Exhibition Gallery'],
      tech: ['Next.js', 'React', 'MongoDb', 'Express.js', 'NodeMailer', 'QRCode.js'],
      type: 'Web App',
      gradient: 'bg-blue-600',
      imagePath: '/files/gateway',
      imageCount: 4,
      imageNames: ['Gateway1', 'Gateway2','Gateway3', 'Gateway4'],
      projectUrl: 'https://booking-frontend-gznv.onrender.com' // Add your project URL
    },
    {
      id: 'security',
      title: 'Trackman Security',
      description: 'This security application is designed to maintain a safe and compliant environment by allowing users to upload evidence, which is then analyzed for obscene content. Administrators can manage user warnings and track allowance limits through a dedicated dashboard.',
      features: ['Evidence Upload with Media Processing', 'User Authentication and Session Management', 'Admin Dashboard for User and Evidence Management', 'Lost & Found Section'],
      tech: ['React', 'BootStrap', 'Node.js', 'MySQL', 'Express.js'],
      type: 'Web App',
      gradient: 'bg-blue-600',
      imagePath: '/files/Security',
      imageCount: 7,
      imageNames: ['Security1', 'Security2', 'Security3', 'Security4', 'Security5', 'Security6', 'Security7'],
      projectUrl: 'https://github.com/NischayVerma21/Security' // Add your project URL
    },
    {
      id: 'social',
      title: 'BHIM App – UI/UX Redesign',
      description: 'A complete redesign of the BHIM App focused on resolving inconsistent colors, standardizing typography, introducing modern icons, and enhancing overall usability. The revamped design delivers a clean, consistent, and intuitive user experience aligned with modern mobile UI trends.',
      features: [
        'Consistent Color Palette',
        'Improved Font Hierarchy',
        'Modern Icons and Symbols',
        'Smooth Microinteractions',
        'Enhanced Navigation Flow',
        'Responsive Layouts',
        'Accessible Design Standards'
      ],
      tech: ['Figma','User Experience (UX) Design','User Interface (UI) Design','Design Systems','Wireframing & Prototyping','Mobile-First Design Principles'],
      type: 'Mobile App',
      gradient: 'bg-blue-600',
      imagePath: '/files/bhim',
      imageCount: 7,
      imageNames: ['BHIM1', 'BHIM2', 'BHIM3', 'BHIM4', 'BHIM5', 'BHIM6', 'BHIM7'],
      projectUrl: 'https://www.figma.com/proto/yPqEesE1WUpch0F9Vkvoxe/BHIM-App?page-id=0%3A1&node-id=123-676&p=f&viewport=330%2C1%2C0.09&t=AhfcVOM9Fy4Wc6Bd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=67%3A769&show-proto-sidebar=1' 
    }
  ];

  // Your GitHub profile URL
  const githubProfileUrl = 'https://github.com/NischayVerma21'; // Replace with your GitHub username

  // Initialize current image state
  useEffect(() => {
    const initialState = {};
    projects.forEach(project => {
      initialState[project.id] = 0;
    });
    setCurrentImages(initialState);
  }, []);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prev => {
        const newState = { ...prev };
        projects.forEach(project => {
          if (prev[project.id] !== undefined) {
            newState[project.id] = (prev[project.id] + 1) % project.imageCount;
          }
        });
        return newState;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [projects]);

  // Fixed handlers for manual navigation
  const handlePrevImage = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    setCurrentImages(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 0 ? project.imageCount - 1 : prev[projectId] - 1
    }));
  };

  const handleNextImage = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    setCurrentImages(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % project.imageCount
    }));
  };

  return (
    <section id="projects" className="py-20 bg-blue-50 dark:bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 mb-4">
            Featured <span className="text-blue-700 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-blue-200 dark:border-blue-800">
              
              {/* Image Carousel Section */}
              <div className="relative overflow-hidden h-48">
                
                {/* Project Image */}
                <img
                  src={`${project.imagePath}/${project.imageNames[currentImages[project.id] || 0]}.jpg`}
                  alt={`${project.title} - Image ${(currentImages[project.id] || 0) + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to png if jpg doesn't exist
                    e.target.src = `${project.imagePath}/${project.imageNames[currentImages[project.id] || 0]}.png`;
                  }}
                />

                {/* Project Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-slate-800 text-sm font-semibold shadow-sm">
                    {project.type}
                  </span>
                </div>

                {/* Navigation Arrows - Fixed */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage(project.id);
                  }}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage(project.id);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.imageNames.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImages(prev => ({ ...prev, [project.id]: imgIndex }));
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        (currentImages[project.id] || 0) === imgIndex
                          ? 'bg-white shadow-lg scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>

                {/* View Project Overlay - Updated with project-specific URL */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold hover:bg-white/30 transition-colors flex items-center space-x-2"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Project Details - unchanged */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Updated View All Projects Button - Links to GitHub */}
        <div className="text-center mt-12">
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
