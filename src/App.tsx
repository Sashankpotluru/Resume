import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, Github as GitHub, Award, BookOpen, Briefcase, Code, User, Target, GraduationCap } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = {
    about: {
      title: 'About Me',
      icon: <User className="w-6 h-6" />,
      content: (
        <div className="section-content">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">SRI SASHANK POTLURI</h1>
              <p className="text-gray-600 mt-2">Fairfax, VA</p>
              <div className="flex gap-4 mt-4">
                <a href="tel:+17038562145" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <span>+1 (703) 856-2145</span>
                </a>
                <a href="mailto:sashankpotluri1@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Objective
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Highly motivated and adaptable Computer Science graduate student with a solid foundation in Java, SQL, and JavaScript frameworks, as well as hands-on experience in software development and agile methodologies. Skilled in designing scalable, maintainable, and reliable solutions while collaborating through the full software development lifecycle. Eager to contribute to Exiger Product's innovative use of natural language processing technologies while enhancing my technical skills and problem-solving abilities in a dynamic, fast-paced environment.
            </p>
          </div>
        </div>
      )
    },
    education: {
      title: 'Education',
      icon: <GraduationCap className="w-6 h-6" />,
      content: (
        <div className="section-content">
          <div className="timeline-item">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800">George Mason University</h3>
              <p className="text-gray-600">Fairfax, VA</p>
              <p className="text-blue-600 font-medium">Master of Science in Computer Science</p>
              <p className="text-gray-700">GPA: 3.67/4.00 | 2024-Present</p>
              <p className="text-gray-600 mt-2">Areas of interest: Software Engineer, Cloud Engineer</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800">VR Siddhartha Engineering College</h3>
              <p className="text-blue-600 font-medium">Major in Information Technology</p>
              <p className="text-gray-700">GPA: 3.75/4.00</p>
            </div>
          </div>
        </div>
      )
    },
    experience: {
      title: 'Experience',
      icon: <Briefcase className="w-6 h-6" />,
      content: (
        <div className="section-content">
          <div className="timeline-item">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800">AVANTEL PRIVATE LIMITED</h3>
              <p className="text-blue-600 font-medium">Software Engineer Intern - Full Stack Web Development</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">Developed RESTful APIs using Node.js for scalable and high-performance cloud applications integrated with AWS Lambda, API Gateway, and S3.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">Collaborated with Agile teams to design and implement front-end components using React.js, enhancing the user experience for features like online consultations and pharmacy booking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">Optimized backend workflows, improving performance by 25% using monitoring tools like CloudWatch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">Integrated real-time communication features for improved patient-provider engagement, reducing downtime.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    projects: {
      title: 'Projects',
      icon: <Code className="w-6 h-6" />,
      content: (
        <div className="section-content space-y-6">
          {[
            {
              title: "Scalable Backend for Real-Time Chat Application",
              points: [
                "Engineered a robust chat system leveraging Node.js and WebSocket, capable of handling real-time messaging for over 10,000 concurrent users with low latency and high scalability.",
                "Implemented optimized database schemas using MongoDB, focusing on efficient indexing and fast retrieval to support real-time interactions.",
                "Enhanced user engagement by incorporating features like real-time notifications and message status tracking through RESTful API integration.",
                "Applied best practices in distributed systems to ensure fault tolerance and system reliability during peak traffic."
              ]
            },
            {
              title: "Streaming Platform Automation",
              points: [
                "Built a Kubernetes-based microservices automation suite, optimizing CI/CD pipelines for scalability and reliability under high workloads.",
                "Reduced deployment downtime by 30% and improved platform stability by detecting bugs early through automated real-time testing systems."
              ]
            },
            {
              title: "Fabric Defect Segmentation and Classification using DCNN",
              points: [
                "Collaboratively Developed a sophisticated system utilizing a deep convolutional neural network to identify fabric defects.",
                "Applied the DenseNet-169 technique to extract fabric features and the YOLOv7 technique to detect defective areas in the fabric with 96% accuracy."
              ]
            }
          ].map((project, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <ul className="mt-4 space-y-2">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    skills: {
      title: 'Skills',
      icon: <Code className="w-6 h-6" />,
      content: (
        <div className="section-content">
          <div className="card">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'C#'].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'JavaScript', 'Git', 'Agile'].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'Salesforce', 'Excel', 'Spring Boot'].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Database Systems</h3>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'MongoDB'].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    certifications: {
      title: 'Certifications',
      icon: <Award className="w-6 h-6" />,
      content: (
        <div className="section-content">
          <div className="card">
            <ul className="space-y-4">
              {[
                'Full stack Web Development with React - Coursera',
                'Azure Fundamentals - Microsoft Certification',
                'AWS Certified Cloud Practitioner - AWS Certification',
                'Google Cloud Digital Leader - Google Cloud Certification'
              ].map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    publications: {
      title: 'Publications',
      icon: <BookOpen className="w-6 h-6" />,
      content: (
        <div className="section-content">
          <div className="card">
            <ul className="space-y-4">
              {[
                {
                  title: 'Development of a Weight System Embedded with a tracking System using Arduino UNO Rev3',
                  conference: 'ICCMC 2023, IEEE Publication'
                },
                {
                  title: 'Fabric defect segmentation and classification using Deep convolutional Neural networks (DCNN)',
                  conference: 'IPDIMS 2023, Springer Publication'
                },
                {
                  title: 'Enhancing Plant Pathology Detection and Stratification with a Tailored Mask R-CNN Framework',
                  conference: 'ICDLAIR 2023, Springer Publication'
                },
                {
                  title: 'Road Anomaly Detection Utilizing Swift Transformer and Deep Convolutional Neural Networks',
                  conference: 'ICICV 2024, Springers Publication'
                }
              ].map((pub, index) => (
                <li key={index} className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium">{pub.title}</p>
                    <p className="text-gray-600 text-sm">{pub.conference}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Portfolio</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`nav-link ${activeSection === key ? 'active' : ''}`}
                >
                  <span className="flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left
                    ${activeSection === key 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {sections[activeSection as keyof typeof sections].content}
      </main>
    </div>
  );
}

export default App;