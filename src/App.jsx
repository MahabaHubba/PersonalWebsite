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
  'Designed and built high-performance, scalable full-stack web applications using Java and Spring Boot, delivering low-latency REST APIs with optimized query handling and caching strategies',
  'Improved API responsiveness through efficient endpoint design, asynchronous processing, and database indexing, ensuring fast and reliable data retrieval under load',
  'Deployed applications using containerization and cloud-based environments, managing CI/CD pipelines for automated builds, testing, and production releases',
  'Migrated front-end codebases from JavaScript to TypeScript to enhance type safety, maintainability, and developer productivity',
  'Developed modern, responsive user interfaces using React, leveraging component-based architecture and reusable design patterns',
  'Built UI components using libraries such as Bootstrap and Material UI to ensure consistent styling, accessibility, and cross-device responsiveness',
  'Implemented automated testing strategies using Jest to validate API behavior, UI components, and regression scenarios',
  'Utilised Python-based AI workflows for prompt engineering and intelligent automation features',
  'Collaborated with cross-functional stakeholders in agile environments, contributing to sprint planning, reviews, and continuous improvement',
  'Maintained clean, readable, and well-documented code adhering to industry best practices and SOLID principles'
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
  'Designed and developed a full-stack PHP Laravel application integrating an AI-powered chatbot, leveraging Laravel’s MVC architecture for clean separation of concerns and scalable feature development',
  'Implemented Retrieval-Augmented Generation (RAG) pipelines and graph-based data models to enable context-aware, low-latency chatbot responses across structured and unstructured data sources',
  'Integrated MySQL databases with external APIs, designing efficient relational schemas, optimized queries, and reliable data synchronization workflows',
  'Built efficient data access patterns using repository and service layers to improve maintainability, performance, and testability',
  'Developed responsive, user-centric interfaces using the Metronic UI framework, ensuring consistent UI/UX, accessibility, and rapid component-driven development',
  'Containerised the application using Docker to ensure environment consistency across development, testing, and deployment',
  'Collaborated closely with senior engineers to debug, profile, and optimize application performance across backend services and database interactions',
  'Applied performance tuning techniques across API endpoints and database queries, improving system responsiveness and reliability under load',
  'Delivered measurable business impact by streamlining internal workflows, improving sales team efficiency by approximately 15%'
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
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const projectRefs = useRef({});
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills'];
      const containerScroll = container.scrollTop;
      const containerHeight = container.clientHeight;

      for (const sectionId of sections) {
        const element = sectionId === 'hero' 
          ? container.querySelector('section:first-of-type')
          : document.getElementById(sectionId);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          if (elementTop < containerHeight / 2 && elementBottom > containerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
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
    <div ref={containerRef} className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'} relative snap-y snap-mandatory overflow-y-scroll h-screen`}>
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
        
        /* Desktop timeline styles */
        @media (min-width: 768px) {
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
        }
        
        /* Mobile timeline styles */
        @media (max-width: 767px) {
          .timeline-line {
            position: absolute;
            left: 8px;
            width: 2px;
            height: 100%;
            background: linear-gradient(to bottom, transparent, ${isDark ? '#4f46e5' : '#6366f1'}, transparent);
          }
          .timeline-dot {
            position: absolute;
            left: 2px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: ${isDark ? '#4f46e5' : '#6366f1'};
            border: 3px solid ${isDark ? '#1e293b' : '#ffffff'};
            z-index: 10;
          }
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'hero', label: 'home' },
                { id: 'about', label: 'about' },
                { id: 'experience', label: 'experience' },
                { id: 'projects', label: 'projects' },
                { id: 'skills', label: 'skills' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`nav-link capitalize ${
                    activeSection === section.id
                      ? isDark ? 'text-indigo-400' : 'text-indigo-600'
                      : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-gray-600 hover:text-gray-900'
                  } ${activeSection === section.id ? 'active' : ''}`}
                >
                  {section.label}
                </button>
              ))}
              
              {/* Toggle Switch */}
              <div className="relative">
                <div 
                  onClick={() => setIsDark(!isDark)}
                  className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
                    isDark ? 'bg-slate-700' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                    isDark ? 'translate-x-8' : 'translate-x-0'
                  }`}>
                    {isDark ? (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-indigo-600"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    ) : (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-yellow-500"
                      >
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center gap-4">
              {/* Mobile Theme Toggle */}
              <div className="relative">
                <div 
                  onClick={() => setIsDark(!isDark)}
                  className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
                    isDark ? 'bg-slate-700' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                    isDark ? 'translate-x-7' : 'translate-x-0'
                  }`}>
                    {isDark ? (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-indigo-600"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    ) : (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-yellow-500"
                      >
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
              <div className="flex flex-col gap-2 pt-4">
                {[
                  { id: 'hero', label: 'home' },
                  { id: 'about', label: 'about' },
                  { id: 'experience', label: 'experience' },
                  { id: 'projects', label: 'projects' },
                  { id: 'skills', label: 'skills' }
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-4 py-2 rounded capitalize ${
                      activeSection === section.id
                        ? isDark ? 'bg-slate-800 text-indigo-400' : 'bg-gray-100 text-indigo-600'
                        : isDark ? 'text-slate-400 hover:bg-slate-800/50' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 snap-start snap-always">
        <div className="max-w-4xl fade-in-up">
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
      <section id="about" className="min-h-screen flex items-center px-6 py-20 snap-start snap-always">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className={`rounded-xl p-8 ${isDark ? 'bg-slate-800/50' : 'bg-gray-50'}`}>
            <p className={`text-lg w-full mb-8 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
              I am a software engineer with hands-on experience designing, developing, and deploying full-stack and 
              cloud-based applications using Java Spring (Spring Boot, REST APIs), React, and the MERN stack. My work 
              spans building scalable backend services, implementing secure authentication and authorization flows, 
              and integrating relational and NoSQL databases such as MySQL and MongoDB using ORM frameworks like 
              Hibernate and Mongoose. I have experience working with modern frontend architectures, leveraging React 
              hooks, component-based design, state management, and API-driven UI development using Axios and GraphQL.
              
              <br /><br />
              
              On the infrastructure side, I have deployed applications to cloud environments, utilizing services such 
              as AWS and GCP, containerization with Docker, and CI/CD pipelines to automate testing and delivery. I am 
              familiar with microservices-oriented design, RESTful communication, and observability tooling including 
              Prometheus, Grafana, and Splunk to monitor system performance and application health.
              
              <br /><br />
              
              With a professional background as an Exercise Physiologist, I bring a strong analytical mindset, 
              evidence-based decision making, and stakeholder-focused communication into software development. This 
              cross-disciplinary experience enables me to translate complex requirements into reliable technical 
              solutions, optimize systems based on measurable outcomes, and collaborate effectively within 
              cross-functional teams to deliver maintainable, high-quality software.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="px-6 py-20 snap-start snap-always min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className={`text-3xl font-bold mb-16 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            Experience
          </h2>
          
          <div className="relative">
            <div className="timeline-line"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-24 last:mb-0">
                <div className="timeline-dot" style={{ top: '24px' }}></div>
                
                {/* Desktop: Alternating layout, Mobile: Left-aligned with padding */}
                <div className={`md:${index % 2 === 0 ? 'pr-[55%]' : 'pl-[55%]'} pl-8 md:pl-0`}>
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
                      {exp.responsibilities.slice(0, 10).map((resp, i) => (
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
      <section id="projects" className="px-6 py-20 snap-start snap-always min-h-screen">
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
      <section id="skills" className="px-6 py-20 snap-start snap-always min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mt-12">
            {/* GitHub */}
            <a 
              href="https://github.com/MahabaHubba" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all ${
                isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-indigo-400' : 'hover:bg-gray-100 text-gray-600 hover:text-indigo-600'
              }`}
              aria-label="GitHub"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/mohihaque/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all ${
                isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-indigo-400' : 'hover:bg-gray-100 text-gray-600 hover:text-indigo-600'
              }`}
              aria-label="LinkedIn"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Resume/CV */}
            <a 
              href="/Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all ${
                isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-indigo-400' : 'hover:bg-gray-100 text-gray-600 hover:text-indigo-600'
              }`}
              aria-label="Resume"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}