import { useState, useRef } from 'react';



// Experience Data
const experiences = [
  {
    id: 'exp-1',
    company: 'FDM Group',
    position: 'Junior Fullstack Developer',
    duration: 'June 2025 - December 2025',
    location: 'Sydney CBD',
    description: 'Developing full-stack applications and contributing to enterprise-level projects by leveraging AI-driven solutions, including Retrieval-Augmented Generation (RAG) and graph-based data models, to improve the efficiency of ad-hoc events. These systems enhance the accuracy of responses to user prompts and questions, power intelligent financial dashboards, and dynamically evaluate key parameters to identify, assess and source potential financial risks in real time.',
    responsibilities: [
      'Designed and built scalable full-stack web applications using Java and Spring Boot, leveraging dependency injection, RESTful APIs, and microservice-friendly architectures',
      'Migrated front-end codebases from JavaScript to TypeScript to enforce strong typing, improve validation, and reduce runtime errors',
      'Developed modern, responsive user interfaces using React while ensuring performance and accessibility best practices',
      'Implemented automated testing strategies using Jest to ensure component reliability and maintain high code quality',
      'Utilised Python-based AI workflows for prompt engineering and intelligent data retrieval to support dynamic application features',
      'Collaborated closely with cross-functional stakeholders including data analytics teams, Scrum Masters, and clients to validate requirements, track progress, and deliver features within an agile methodology',
      'Maintained clean, readable, and maintainable code by adhering to industry best practices, design patterns, and code review standards'
    ]
  }, 
  {
    id: 'exp-2',
    company: 'Aquion',
    position: 'Software Developer',
    duration: 'January 2025 - June 2025',
    location: 'Sydney CBD',
    description: 'Designing and delivering full-stack, enterprise-grade solutions, including the implementation of an agentic AI-powered chatbot within a PHP Laravel framework. The solution leveraged autonomous AI agents to handle contextual reasoning and multi-step user interfaces, while Laravel Blade was used to build dynamic, server-rendered use interfaces. The front-end was imlpmented using the Metronic UI framework to ensure a responsive, scalable, and consistent user experience aligned with enterprise design standards.',
    responsibilities: [
  'Designed and developed a full-stack PHP Laravel application, including an agentic AI-powered chatbot to support enterprise workflows',
  'Containerised the application using Docker to streamline environment setup, deployment, and local development',
  'Collaborated closely with a senior engineer to debug, optimise, and enhance application performance and reliability',
  'Integrated MySQL databases to persist data collected via external API calls, designing new schemas and migrations to extend built-in Laravel features',
  'Implemented Retrieval-Augmented Generation (RAG) and graph-based data models to improve chatbot response accuracy and contextual understanding',
  'Built efficient data access patterns to enable fast retrieval of user information and conversational context',
  'Improved sales team efficiency by approximately 15% through automation and AI-assisted chatbot interactions'
]

  }
];

// Projects Data
const projects = [
  {
    id: 'project-alpha',
    title: 'Mind Over Matter',
    shortDescription: 'A full-stack MERN CRM application that centralises addiction support workflows, allowing structured event entry, data management, and coordinated service delivery',
    tagColor: 'indigo',
    fullDescription: `Project Mind Over Matter is a comprehensive full-stack web application designed to revolutionise how users interact with real-time and structured data. Built using the MERN stack (MongoDB, Express, React, Node.js) and modern web technologies, the platform delivers scalable, secure, and high-performance data processing capabilities through a clean and intuitive user experience.

The application leverages GraphQL with Apollo Server to enable efficient, flexible data querying and mutation handling, significantly reducing over-fetching and improving client-side performance. JWT-based authentication and authorisation were implemented to ensure secure access control across user roles, with seamless integration into third-party services including Shopify for identity and commerce-related workflows.

As a full-stack MERN CRM application, Project Mind Over Matter centralises addiction support workflows, enabling structured event entry, real-time data management, and coordinated service delivery across multiple stakeholders. The system was designed with extensibility and data integrity in mind, supporting scalable backend services, secure API communication, and responsive frontend components that adapt to evolving business and user requirements.`,
    features: [
      'Implemented GraphQL APIs using Apollo Server for efficient and scalable data querying',
      'Built a full CRUD application enabling structured event entry and data lifecycle management',
      'Developed a Node.js and Express backend with MongoDB, managed and inspected using MongoDB Compass',
      'Designed data models and validation layers using Mongoose schemas',
      'Integrated Shopify services for authentication and external platform workflows',
      'Implemented secure user authentication and role-based access control using JWT tokens',
      'Developed a responsive, user-focused UI with strong UI/UX principles across devices',
      'Enabled real-time data synchronisation and interactive data visualisation components',
      'Collaborated with stakeholders and successfully pitched the application to multiple clients'
    ],
    technologies: ['MongoDB - Mongoose', 'Express', 'Node.js', 'React', 'GraphQL', 'Apollo'],
    githubLink: 'https://github.com/BrxwnSugxr/MindOverMatter?tab=readme-ov-file',
    liveLink: '#',
    images: [
      '/1.png',
      '/2.png',
      '/3.png', 
      '/4.png', 
      '/5.png'
    ]
  },
  {
    id: 'project-beta',
    title: 'AWS Vs GCP (WordPress)',
    shortDescription: 'A cloud infrastructure comparison application evaluating AWS EC2 and Google Cloud Platform using a WordPress deployment to assess cost and performance.',
    tagColor: 'purple',
    fullDescription: 'This project conducted a technical comparison of AWS EC2 and Google Cloud Platform by deploying equivalent WordPress stacks on both providers using comparable VM configurations. It analysed compute performance, storage behaviour, network latency, and auto-scaling capabilities, alongside differences in pricing models, billing granularity, and resource provisioning. The implementation highlighted trade-offs in infrastructure management, security configuration, and operational tooling, providing data-driven insights for cloud architecture and cost-optimisation decisions.',
    features: [
      'Deployed and configured virtual machines on AWS EC2 and Google Cloud Platform to compare compute performance, scalability, and pricing models',
      'Implemented a WordPress application stack to evaluate real-world CMS hosting behaviour across cloud providers',
      'Configured Ubuntu-based servers with Apache to manage web traffic, security rules, and server-level optimisation',
      'Integrated SQL-based databases to analyse data persistence, query performance, and storage handling between platforms',
      'Evaluated infrastructure-level performance including network latency, resource allocation, and cost efficiency under comparable workloads'
    ],
    technologies: ['AWS-EC2', 'GCP', 'Wordpress', 'Ubuntu', 'Apache', 'SQL'],
    githubLink: '#',
    liveLink: '#',
    images: [
      '/10.png',
      '/8.png',
      '/7.png', 
      '/9.png', 
      '/6.png'
    ]
  },
  {
    id: 'project-gamma',
    title: 'Data Analytics',
    shortDescription: 'A personal observability project leveraging Python, Splunk, Prometheus, and Grafana to monitor, analyze, and visualize real-time data changes.',
    tag: 'Vue.js',
    tagColor: 'green',
    fullDescription: 'Project Data analytics is a personal observability and analytics platform built using Python, Splunk, Prometheus, and Grafana to collect, process, and visualize system and user-driven data. The project leverages structured variables such as timestamps, member identifiers, and metric labels to accurately track data changes over time, enabling reliable trend analysis and historical comparison. Prometheus is used for real-time metric collection, Splunk for log aggregation and event analysis, and Grafana for interactive dashboards that translate raw data into meaningful insights. This approach highlights the importance of time-series data, monitoring, and observability in building scalable, data-driven systems.',
    features: [
      'Python-based data ingestion pipeline sending up to 10,000 structured data entries into Splunk for centralized log storage and organization',
      'Integration between Splunk and Prometheus to correlate logs with real-time metrics, improving system visibility and troubleshooting',
      'Real-time metric collection using Prometheus with labeled time-series data for accurate tracking of events and trends',
      'Interactive Grafana dashboards providing clear graphical and visual representations of system behaviour and data changes over time',
      'Customizable dashboards and panels in Grafana to filter data by timestamps, members, and metrics',
      'End-to-end observability enabling faster analysis, monitoring, and data-driven insights'
    ],
    technologies: ['Python', 'Splunk', 'Prometheus', 'Grafana'],
    githubLink: '#',
    liveLink: '#',
    images: [
      '/11.png',
      '/12.png',
      '/13.png',
      '/14.png',
      '/15.png'
    ]
  },
  {
    id: 'project-delta',
    title: 'Banking Application',
    shortDescription: 'Full-stack application built with Java Spring Boot, MySQL and React, enabling secure account management and real-time data handling through a modern web interface.',
    tag: 'TypeScript',
    tagColor: 'blue',
    fullDescription: "This project is a full-stack banking application developed to demonstrate real-world enterprise application design using Java Spring Boot, MySQL, and React.\n\nThe backend was built using Spring Boot and exposes RESTful APIs to manage core banking functionalities such as user accounts, balances, and transactions. A CRUD-based architecture was implemented, allowing entities to be created, retrieved, updated, and deleted through structured endpoints.\n\nSpring Security with JWT-based authentication was implemented to protect sensitive banking operations and enforce authorization rules.\n\nOn the frontend, React was used to create a responsive interface, while Axios handled secure HTTP communication between the client and backend APIs.",
    features: [
      'Implemented full CRUD operations for banking entities using Spring Boot RESTful APIs',
      'Integrated Axios in React to enable secure and asynchronous communication with backend services',
      'Validated data schemas and business rules using Spring Boot and Spring Data JPA',
      'Tested and verified API endpoints using Postman to ensure correctness and reliability',
      'Designed a responsive and user-friendly UI/UX using React for account and transaction management',
      'Ensured clean separation of concerns between frontend presentation and backend logic',
      'Structured backend services to support scalability and maintainability'
    ],
    technologies: ['Java-Spring', 'React', 'Axios', 'MySQL', 'Postman'],
    githubLink: '#',
    liveLink: '#',
    images: [
      '/16.png',
      '/17.png',
      '/18.png',
      '/19.png',
      '/20.png',
      '/21.png',
      '/22.png',
      '/23.png',
      '/24.png',
      '/25.png',
    ]
  }
];

export default function PersonalPage() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [showMain, setShowMain] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isInputFocused, setIsInputFocused] = useState(false);
  const projectRefs = useRef({});
  const experienceRefs = useRef({});

  const handleSubmit = () => {
    if (name.trim()) {
      setUserName(name);
      setShowMain(true);
    }
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
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

  const toggleExperience = (expId) => {
    const isExpanding = expandedExperience !== expId;
    setExpandedExperience(isExpanding ? expId : null);
    
    if (isExpanding) {
      setTimeout(() => {
        experienceRefs.current[expId]?.scrollIntoView({
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

  const getTagColorClasses = (color) => {
    const colors = {
      indigo: isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800',
      purple: isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800',
      green: isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800',
      blue: isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
    };
    return colors[color] || colors.indigo;
  };

  if (!showMain) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-gray-900' : 'bg-blue-50'
      }`}>
        <style>{`
          @keyframes rgb-rotate {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          .rgb-border {
            position: relative;
            padding: 2px;
            border-radius: 0.5rem;
            background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
            background-size: 400% 400%;
            animation: rgb-rotate 3s linear infinite;
          }
          .rgb-border-input {
            background: ${isDark ? '#374151' : '#ffffff'};
            border-radius: 0.375rem;
          }
        `}</style>
        <div className="text-center px-6">
          <h1 className={`text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Welcome!
          </h1>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            What is your name?
          </p>
          <div className={isInputFocused || name ? 'rgb-border' : ''}>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your name"
              className={`px-6 py-3 text-lg rounded-lg border-2 mb-4 ${
                isInputFocused || name ? 'rgb-border-input' : ''
              } ${
                isDark 
                  ? 'bg-gray-700 text-white border-indigo-600' 
                  : 'bg-white text-gray-800 border-indigo-300'
              }`}
            />
          </div>
          <br />
          <button 
            onClick={handleSubmit}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <style>{`
        @keyframes rgb-rotate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .rgb-border-card {
          position: relative;
          padding: 2px;
          border-radius: 0.75rem;
          background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
          background-size: 400% 400%;
          animation: rgb-rotate 3s linear infinite;
        }
        .rgb-border-card-inner {
        background: ${isDark ? '#1f2937' : '#ffffff'};
        border-radius: 0.6875rem;
        overflow: hidden;
        }
      `}</style>
      {/* Header */}
      <header className={`text-white py-6 shadow-lg ${
        isDark ? 'bg-indigo-900' : 'bg-indigo-600'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome, {userName}! 👋</h1>
          <button 
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-all text-white text-2xl"
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="w-full">
          {/* About Section */}
          <section className={`mb-12 rounded-xl p-8 shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              About Me
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a software engineer with experience building full-stack and cloud-based applications using Java Spring, React, and the MERN stack. With a background as an Exercise Physiologist, I bring strong analytical thinking, stakeholder communication, and outcome-driven problem-solving into software development. I enjoy working on scalable systems, automation, and user-focused solutions that create real-world impact.
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  ref={(el) => experienceRefs.current[exp.id] = el}
                  className={expandedExperience === exp.id ? 'rgb-border-card' : ''}
                >
                  <div
                    className={`rounded-xl shadow-lg transition-all duration-300 ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    } ${expandedExperience === exp.id ? 'rgb-border-card-inner' : ''}`}
                  >
                  {/* Experience Card Header */}
                  <div 
                    onClick={() => toggleExperience(exp.id)}
                    className="p-6 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold ${
                          isDark ? 'text-indigo-400' : 'text-indigo-600'
                        }`}>
                          {exp.position}
                        </h3>
                        <p className={`text-lg font-semibold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          {exp.company}
                        </p>
                        <div className={`flex flex-wrap gap-4 text-sm mb-3 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </span>
                        </div>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {exp.description}
                        </p>
                      </div>
                      <svg 
                        className={`w-6 h-6 ml-4 flex-shrink-0 transition-transform ${
                          expandedExperience === exp.id ? 'rotate-180' : ''
                        } ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedExperience === exp.id && (
                    <div className="px-6 pb-6 border-t border-gray-700">
                      <div className="pt-6">
                        <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          Key Responsibilities & Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, index) => (
                            <li key={index} className={`flex items-start gap-3 ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  ref={(el) => projectRefs.current[project.id] = el}
                  className={`transition-all duration-300 ${
                    expandedProject === project.id ? 'md:col-span-2 rgb-border-card' : ''
                  }`}
                >
                  <div
                    className={`rounded-xl shadow-lg ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    } ${expandedProject === project.id ? 'rgb-border-card-inner' : ''}`}
                  >
                  {/* Project Card Header */}
                  <div 
                    onClick={() => toggleProject(project.id)}
                    className="p-6 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-3 ${
                          isDark ? 'text-indigo-400' : 'text-indigo-600'
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {project.shortDescription}
                        </p>
                        {/* <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          getTagColorClasses(project.tagColor)
                        }`}>
                          {project.tag}
                        </span> */}
                      </div>
                      <svg 
                        className={`w-6 h-6 ml-4 flex-shrink-0 transition-transform ${
                          expandedProject === project.id ? 'rotate-180' : ''
                        } ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedProject === project.id && (
                    <div className={`px-6 pb-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="pt-6">
                        {/* Image Carousel */}
                        {project.images && project.images.length > 0 && (
                          <div className="mb-6 relative">
                            <div className={`relative overflow-hidden rounded-lg ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
                              <img 
                                src={project.images[currentImageIndex[project.id] || 0]}
                                alt={`${project.title} screenshot ${(currentImageIndex[project.id] || 0) + 1}`}
                                className="w-full h-auto object-contain max-h-[600px]"
                              />
                              
                              {/* Navigation Arrows */}
                              {project.images.length > 1 && (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      prevImage(project.id, project.images.length);
                                    }}
                                    className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all ${
                                      isDark 
                                        ? 'bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white' 
                                        : 'bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800'
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
                                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all ${
                                      isDark 
                                        ? 'bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white' 
                                        : 'bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800'
                                    }`}
                                  >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </>
                              )}
                              
                            </div>
                            
                            {/* Image Indicators */}
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
                                        : isDark ? 'bg-gray-600' : 'bg-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Full Description */}
                        <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {project.fullDescription}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className={`flex items-start gap-3 ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                                  isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                         {project.githubLink && project.githubLink !== '#' && (
                          <a
                            href={project.githubLink}
                            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                          >
                            View on GitHub
                          </a>
                         )} 
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className={`rounded-xl p-8 shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Java', 'Javascript', 'PHP', 'Python', 'SQL', 'HTML', 'CSS', 'PostgreSQL', 'MongoDB', 'UNIX', 'Git', 'Render','AWS', 'Cloudflare', 'React', 'Spring', 'Laravel', 'Splunk', 'Prometheus', 'Grafana'].map((skill) => (
                <span 
                  key={skill}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    isDark ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}