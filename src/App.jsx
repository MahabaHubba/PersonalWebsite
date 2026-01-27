import { useState, useRef, useEffect } from 'react';

// Experience Data
const experiences = [
  {
    id: 'exp-1',
    company: 'FDM Group',
    position: 'Junior Fullstack Developer',
    duration: 'June 2025 - December 2025',
    location: 'Sydney CBD',
    description: 'Developing full-stack applications and contributing to enterprise-level projects by leveraging AI-driven solutions, including Retrieval-Augmented Generation (RAG) and graph-based data models, to improve the efficiency of ad-hoc events.',
    responsibilities: [
      'Designed and built scalable full-stack web applications using Java and Spring Boot',
      'Migrated front-end codebases from JavaScript to TypeScript',
      'Developed modern, responsive user interfaces using React',
      'Implemented automated testing strategies using Jest',
      'Utilised Python-based AI workflows for prompt engineering',
      'Collaborated with cross-functional stakeholders in agile methodology',
      'Maintained clean, readable code adhering to best practices'
    ]
  }, 
  {
    id: 'exp-2',
    company: 'Aquion',
    position: 'Software Developer',
    duration: 'January 2025 - June 2025',
    location: 'Sydney CBD',
    description: 'Designing and delivering full-stack, enterprise-grade solutions, including the implementation of an agentic AI-powered chatbot within a PHP Laravel framework.',
    responsibilities: [
      'Designed and developed a full-stack PHP Laravel application with AI chatbot',
      'Containerised the application using Docker',
      'Collaborated with senior engineers to debug and optimise performance',
      'Integrated MySQL databases with external API calls',
      'Implemented RAG and graph-based data models',
      'Built efficient data access patterns',
      'Improved sales team efficiency by approximately 15%'
    ]
  }
];

// Projects Data
const projects = [
  {
    id: 'project-alpha',
    title: 'Mind Over Matter',
    shortDescription: 'A full-stack MERN CRM application that centralises addiction support workflows',
    fullDescription: 'Project Mind Over Matter is a comprehensive full-stack web application designed to revolutionise how users interact with real-time and structured data. Built using the MERN stack and modern web technologies, the platform delivers scalable, secure, and high-performance data processing capabilities.',
    features: [
      'Implemented GraphQL APIs using Apollo Server',
      'Built full CRUD application with structured event entry',
      'Developed Node.js and Express backend with MongoDB',
      'Designed data models using Mongoose schemas',
      'Integrated Shopify services for authentication',
      'Implemented JWT-based secure authentication',
      'Developed responsive UI with strong UX principles',
      'Enabled real-time data synchronisation'
    ],
    technologies: ['MongoDB', 'Express', 'Node.js', 'React', 'GraphQL', 'Apollo'],
    githubLink: 'https://github.com/BrxwnSugxr/MindOverMatter?tab=readme-ov-file',
    images: ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png']
  },
  {
    id: 'project-beta',
    title: 'AWS Vs GCP (WordPress)',
    shortDescription: 'Cloud infrastructure comparison evaluating AWS EC2 and Google Cloud Platform',
    fullDescription: 'Technical comparison of AWS EC2 and Google Cloud Platform by deploying equivalent WordPress stacks on both providers, analysing compute performance, storage behaviour, and cost-optimisation decisions.',
    features: [
      'Deployed VMs on AWS EC2 and GCP for comparison',
      'Implemented WordPress stack to evaluate hosting behaviour',
      'Configured Ubuntu servers with Apache',
      'Integrated SQL databases for performance analysis',
      'Evaluated infrastructure-level performance and cost efficiency'
    ],
    technologies: ['AWS-EC2', 'GCP', 'Wordpress', 'Ubuntu', 'Apache', 'SQL'],
    githubLink: '#',
    images: ['/10.png', '/8.png', '/7.png', '/9.png', '/6.png']
  },
  {
    id: 'project-gamma',
    title: 'Data Analytics',
    shortDescription: 'Personal observability project leveraging Python, Splunk, Prometheus, and Grafana',
    fullDescription: 'Personal observability and analytics platform built to collect, process, and visualize system and user-driven data with real-time monitoring and interactive dashboards.',
    features: [
      'Python-based data ingestion sending 10,000+ entries into Splunk',
      'Integration between Splunk and Prometheus',
      'Real-time metric collection with labeled time-series data',
      'Interactive Grafana dashboards with visual representations',
      'Customizable dashboards filtering by timestamps and metrics',
      'End-to-end observability for faster analysis'
    ],
    technologies: ['Python', 'Splunk', 'Prometheus', 'Grafana'],
    githubLink: '#',
    images: ['/11.png', '/12.png', '/13.png', '/14.png', '/15.png']
  },
  {
    id: 'project-delta',
    title: 'Banking Application',
    shortDescription: 'Full-stack application with Java Spring Boot, MySQL and React',
    fullDescription: 'Full-stack banking application demonstrating enterprise application design using Java Spring Boot, MySQL, and React with secure account management and real-time data handling.',
    features: [
      'Implemented full CRUD operations with Spring Boot RESTful APIs',
      'Integrated Axios in React for secure communication',
      'Validated data schemas using Spring Data JPA',
      'Tested API endpoints using Postman',
      'Designed responsive UI/UX using React',
      'Clean separation between frontend and backend',
      'Structured backend for scalability'
    ],
    technologies: ['Java-Spring', 'React', 'Axios', 'MySQL', 'Postman'],
    githubLink: '#',
    images: ['/16.png', '/17.png', '/18.png', '/19.png', '/20.png', '/21.png', '/22.png', '/23.png', '/24.png', '/25.png']
  }
];

export default function PersonalPage() {
  const [isDark, setIsDark] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const projectRefs = useRef({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleProject = (projectId) => {
    const isExpanding = expandedProject !== projectId;
    setExpandedProject(isExpanding ? projectId : null);
    
    if (isExpanding) {
      setTimeout(() => {
        projectRefs.current[projectId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  };

  const nextImage = (projectId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'} relative`}>
      {/* Spotlight effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
        }}
      />
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, ${isDark ? '#4f46e5' : '#6366f1'}, transparent);
        }
        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: ${isDark ? '#4f46e5' : '#6366f1'};
          border: 3px solid ${isDark ? '#1e293b' : '#ffffff'};
          z-index: 10;
        }
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: ${isDark ? '#818cf8' : '#4f46e5'};
          transition: width 0.3s ease;
        }
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-gray-200'
      } border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              Mohibul Haque
            </h1>
            <div className="flex items-center gap-8">
              {['about', 'experience', 'projects', 'skills'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link capitalize ${
                    activeSection === section
                      ? isDark ? 'text-indigo-400' : 'text-indigo-600'
                      : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-gray-600 hover:text-gray-900'
                  } ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${
                  isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-all text-2xl`}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl fade-in-up">
          <p className={`text-lg mb-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
            Hi, my name is
          </p>
          <h1 className={`text-6xl md:text-7xl font-bold mb-4 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            Mohibul Haque
          </h1>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            Health to Full-stack engineer
          </h2>
          <p className={`text-lg max-w-2xl mb-8 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            I'm a software engineer with experience building full-stack and cloud-based applications 
            using Java Spring, React, and the MERN stack. With a background as an Exercise Physiologist, 
            I bring strong analytical thinking, stakeholder communication, and outcome-driven problem-solving 
            into software development.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className={`px-8 py-3 rounded border-2 font-semibold transition-all ${
              isDark 
                ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400/10' 
                : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600/10'
            }`}
          >
            Check out my work!
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            
            About Me
          </h2>
          <div className={`rounded-xl p-8 ${isDark ? 'bg-slate-800/50' : 'bg-gray-50'}`}>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              I'm a software engineer with experience building full-stack and cloud-based applications 
              using Java Spring, React, and the MERN stack. With a background as an Exercise Physiologist, 
              I bring strong analytical thinking, stakeholder communication, and outcome-driven problem-solving 
              into software development. I enjoy working on scalable systems, automation, and user-focused 
              solutions that create real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-16 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
           
            Experience
          </h2>
          
          <div className="relative">
            <div className="timeline-line"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-24 last:mb-0">
                <div className="timeline-dot" style={{ top: '24px' }}></div>
                
                <div className={`${index % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%]'}`}>
                  <div className={`rounded-xl p-6 ${
                    isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-all duration-300`}>
                    <div className={`text-sm mb-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      {exp.duration}
                    </div>
                    <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
                      {exp.position}
                    </h3>
                    <p className={`text-lg font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      {exp.company} · {exp.location}
                    </p>
                    <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.slice(0, 3).map((resp, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${
                          isDark ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          <span className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'} mt-1`}>▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            
            Projects
          </h2>
          
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                ref={(el) => projectRefs.current[project.id] = el}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  isDark ? 'bg-slate-800/50' : 'bg-gray-50'
                }`}
              >
                <div 
                  onClick={() => toggleProject(project.id)}
                  className="p-6 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${
                        isDark ? 'text-indigo-400' : 'text-indigo-600'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span 
                            key={tech}
                            className={`px-3 py-1 rounded text-sm ${
                              isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg 
                      className={`w-6 h-6 ml-4 flex-shrink-0 transition-transform ${
                        expandedProject === project.id ? 'rotate-180' : ''
                      } ${isDark ? 'text-slate-400' : 'text-gray-600'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {expandedProject === project.id && (
                  <div className={`px-6 pb-6 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
                    <div className="pt-6">
                      {project.images && project.images.length > 0 && (
                        <div className="mb-6 relative">
                          <div className={`relative overflow-hidden rounded-lg ${
                            isDark ? 'bg-slate-900' : 'bg-gray-100'
                          }`}>
                            <img 
                              src={project.images[currentImageIndex[project.id] || 0]}
                              alt={`${project.title} screenshot`}
                              className="w-full h-auto object-contain max-h-[500px]"
                            />
                            
                            {project.images.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage(project.id, project.images.length);
                                  }}
                                  className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                                    isDark ? 'bg-slate-800/75 hover:bg-slate-800 text-white' : 'bg-white/75 hover:bg-white text-gray-800'
                                  }`}
                                >
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage(project.id, project.images.length);
                                  }}
                                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                                    isDark ? 'bg-slate-800/75 hover:bg-slate-800 text-white' : 'bg-white/75 hover:bg-white text-gray-800'
                                  }`}
                                >
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              </>
                            )}
                          </div>
                          
                          {project.images.length > 1 && (
                            <div className="flex justify-center gap-2 mt-3">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => ({
                                      ...prev,
                                      [project.id]: index
                                    }));
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    (currentImageIndex[project.id] || 0) === index
                                      ? isDark ? 'bg-indigo-400 w-6' : 'bg-indigo-600 w-6'
                                      : isDark ? 'bg-slate-600' : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      <p className={`text-lg mb-6 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                        {project.fullDescription}
                      </p>

                      <div className="mb-6">
                        <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
                          Key Features
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className={`flex items-start gap-2 ${
                              isDark ? 'text-slate-400' : 'text-gray-600'
                            }`}>
                              <span className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'} mt-1`}>▹</span>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.githubLink && project.githubLink !== '#' && (
                        <a
                          href={project.githubLink}
                          className={`inline-block px-6 py-2 rounded border-2 font-semibold transition-all ${
                            isDark 
                              ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400/10' 
                              : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600/10'
                          }`}
                        >
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Java', 'Javascript', 'PHP', 'Python', 'SQL', 'HTML', 'CSS', 'PostgreSQL', 'MongoDB', 'UNIX', 'Git', 'Render','AWS', 'Cloudflare', 'React', 'Spring', 'Laravel', 'Splunk', 'Prometheus', 'Grafana'].map((skill) => (
              <div 
                key={skill}
                className={`p-4 rounded-lg text-center ${
                  isDark ? 'bg-slate-800/50 text-slate-300' : 'bg-gray-50 text-gray-700'
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}