import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = {
    about: {
      title: "About Me",
      content: (
        <div className="section-content">
          <div className="profile-header">
            <img src={`${process.env.PUBLIC_URL}/my_pic.jpg`} alt="Profile" className="profile-image" />
            {/* <img src="my_pic.jpg" alt="Profile" className="profile-image" /> */}
            <div className="profile-info">
              <h1>SRI SASHANK POTLURI</h1>
              <p className="location">Fairfax, VA</p>
              <div className="contact-links">
                <a href="tel:+17038563456">+1 (703) 856-3456</a>
                <a href="mailto:sashankpotluri1@gmail.com">
                  sashank.potluri1@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/sri-sashank-potluru-9a819323b">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Objective</h2>
            <p>
              Highly motivated and adaptable Computer Science graduate student
              with a strong foundation in programming languages such as Java,
              SQL, and JavaScript frameworks. Experienced in software
              development, agile methodologies, and designing scalable,
              maintainable, and reliable solutions. Passionate about leveraging
              advanced technologies to develop innovative software applications,
              drive efficiency, and solve complex problems. Eager to contribute
              to cutting-edge projects while continuously enhancing my technical
              expertise and professional growth
            </p>
          </div>
        </div>
      ),
    },
    education: {
      title: "Education",
      content: (
        <div className="section-content">
          <div className="timeline-item">
            <div className="card">
              <h3>George Mason University</h3>
              <p className="location">Fairfax, VA</p>
              <p className="degree">Master of Science in Computer Science</p>
              <p>GPA: 3.67/4.00 | 2024-Present</p>
              <p>Areas of interest: Software Engineer, Cloud Engineer</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card">
              <h3>VR Siddhartha Engineering College</h3>
              <p className="degree">Major in Information Technology</p>
              <p>GPA: 3.75/4.00</p>
              <p>
                Course: Operating Systems ,Data Structures, Advanced Data
                Structures, Full Stack development, Cloud Engineering
              </p>
            </div>
          </div>
        </div>
      ),
    },
    experience: {
      title: "Experience",
      content: (
        <div className="section-content">
          <div className="card">
            <h3>
              <a
                href="https://www.avantel.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AVANTEL PRIVATE LIMITED
              </a>
            </h3>
            <p className="role">
              Software Engineer Intern - Full Stack Web Development
            </p>
            <ul className="experience-list">
              <li>
                Developed RESTful APIs using Node.js for scalable and
                high-performance cloud applications integrated with AWS Lambda,
                API Gateway, and S3.
              </li>
              <li>
                Collaborated with Agile teams to design and implement front-end
                components using React.js, enhancing the user experience for
                features like online consultations and pharmacy booking.
              </li>
              <li>
                Optimized backend workflows, improving performance by 25% using
                monitoring tools like CloudWatch.
              </li>
              <li>
                Integrated real-time communication features for improved
                patient-provider engagement, reducing downtime.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    projects: {
      title: "Projects",
      content: (
        <div className="section-content">
          <div className="card">
            <h3>Scalable Backend for Real-Time Chat Application</h3>
            <ul className="project-list">
              <li>
                Engineered a robust chat system leveraging Node.js and
                WebSocket, capable of handling real-time messaging for over
                10,000 concurrent users.
              </li>
              <li>
                Implemented optimized database schemas using MongoDB, focusing
                on efficient indexing and fast retrieval.
              </li>
              <li>
                Enhanced user engagement by incorporating features like
                real-time notifications and message status tracking.
              </li>
              <li>
                Applied best practices in distributed systems to ensure fault
                tolerance and system reliability.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Streaming Platform Automation</h3>
            <ul className="project-list">
              <li>
                Built a Kubernetes-based microservices automation suite,
                optimizing CI/CD pipelines for scalability.
              </li>
              <li>
                Reduced deployment downtime by 30% through automated real-time
                testing systems.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Fabric Defect Segmentation using DCNN</h3>
            <ul className="project-list">
              <li>
                Developed a sophisticated system utilizing deep convolutional
                neural networks to identify fabric defects.
              </li>
              <li>
                Applied DenseNet-169 and YOLOv7 techniques achieving 96%
                accuracy in defect detection.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    skills: {
      title: "Skills",
      content: (
        <div className="section-content">
          <div className="card">
            <div className="skills-section">
              <h3>Languages</h3>
              <div className="skills-tags">
                {["Python", "Java", "C#"].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-section">
              <h3>Frameworks</h3>
              <div className="skills-tags">
                {["React", "Next.js", "JavaScript", "Git", "Agile"].map(
                  (skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="skills-section">
              <h3>Tools</h3>
              <div className="skills-tags">
                {["AWS", "Azure", "Salesforce", "Excel", "Spring Boot"].map(
                  (skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    certifications: {
      title: "Certifications",
      content: (
        <div className="section-content">
          <div className="card">
            <ul className="cert-list">
              <li>Full stack Web Development with React - Coursera</li>
              <li>Azure Fundamentals - Microsoft Certification</li>
              <li>AWS Certified Cloud Practitioner - AWS Certification</li>
              <li>Google Cloud Digital Leader - Google Cloud Certification</li>
            </ul>
          </div>
        </div>
      ),
    },
    publications: {
      title: "Publications",
      content: (
        <div className="section-content">
          <div className="card">
            <ul className="pub-list">
              <li>
                <h4>
                  <a
                    href="https://ieeexplore.ieee.org/abstract/document/10084100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Development of a Weight System Embedded with a tracking
                    System using Arduino UNO Rev3
                  </a>
                </h4>
                <p>ICCMC 2023, IEEE Publication</p>
              </li>
              <li>
                <h4>
                  <a
                    href="https://link.springer.com/chapter/10.1007/978-981-97-6732-8_52"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Textile Defect Classification Using Deep Convolutional
                    Neural Networks (DCNN)
                  </a>
                </h4>
                <p>IPDIMS 2023, Springer Publication</p>
              </li>

              <li>
                <h4>
                  <a
                    href="https://link.springer.com/chapter/10.1007/978-981-97-6992-6_28"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Road Anomaly Detection Utilizing Swift Transformer and Deep
                    Convolutional Neural Networks
                  </a>
                </h4>
                <p>ICICV 2024, Springers Publication</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <span className="logo">Portfolio</span>

          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveSection(key);
                  setIsMenuOpen(false);
                }}
                className={`nav-link ${activeSection === key ? "active" : ""}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">{sections[activeSection].content}</main>
    </div>
  );
}

export default App;
