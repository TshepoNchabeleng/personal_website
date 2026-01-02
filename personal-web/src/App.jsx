import React, { useState } from 'react';
import {Menu, X, Github, Linkedin, Instagram, Mail, ExternalLink, ChevronDown} from 'lucide-react';
import ragImage from './Screenshot_2025-12-31_180903.png';
import myImage from './IMG-20251231-WA0027.jpg';
import myCV from './Tshepo_Nchabeleng_CV.pdf';
import './index.css';

export default function Portfolio(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Tshepo Nchabeleng",
      description: "A personal website which showcases my milestones, projects, research I am doing, and contact details",
      tech: [ "JavaScript", "React", "CSS", "HTML"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "https://github.com/TshepoNchabeleng/personal_website"
    },
    {
      title: "RC-CAR",
      description: "An autonomous obstacle avoidance car -- still in development",
      tech: ["Python", "React", "JavaScript", "C++", "ESP32", "C"],
      image: "https://images.unsplash.com/photo-1727622738037-65923e2319d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/TshepoNchabeleng/RC-Car"
    },
    {
      title: "Retrieval-Augmented Generation model",
      description: "A RAG model that is focused on thermochemistry to help me understand my chemistry class and improve my python skills",
      tech: ["Python", "fastapi", "JavaScript", "streamlit"],
      image: ragImage,
      link:"https://github.com/HammerLock7/RAG-1"
    }
  ];

  const research = [
    {
      title: "Renewable Energy & Energy Storage",
      description: "Exploring efficient energy storage devices and energy as a future defining field",
      status: "In Progress",
      date: "2025-Present"
    },
    {
      title: "Autonomous Space Self-Assembly",
      description: "Exploring magnetic asembly of structures, inspired by Bighero six movie style robotics",
      status: "In Progress",
      date:"2025-Present"
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
  };

  return(
    <div>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className = "logo">Tshepo Nchabeleng</div>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {['home', 'projects', 'research', 'media', 'contact'].map((section)=>(
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={activeSection === section ? 'active' : ''}>
                  {section}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className = "mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}

          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open': ''}`} >
          <div className="mobile-menu-content">
            {['home', 'projects', 'research', 'media', 'contact'].map((section) =>(
              <button
                key={section}
                onClick={() => scrollToSection (section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="avatar">
            <div className="Avatar-inner"><img src={myImage} alt="Tshepo Nchabeleng" className="avatar-img" /></div>
          </div>
          <h1> Student, Tech enthusiast, & aspiring Researcher </h1>
          <p> I am an electrical engineering student at the University of Pretoria driven by curiosity and long-term thinking.
              I build things at the intersection of embedded systems, control, and intelligent software fowm autonomous RC platforms to experimental ideas in energy, robotics, and
              security foocused system design. I care deeply about learning how things really work, thinking rigorously, and turning ambitious ideas into real evolving systems.
          </p>
          <p>Building the future through code, research, and creativity</p>
          <div className="social-links">
            <a href="https://github.com/TshepoNchabeleng" target="_blank" rel="noopener noreferrer"><Github size={24}/></a>
            <a href="https://www.linkedin.com/in/tshepo-nchabeleng-3b4807348" target="_blank" rel="noopener noreferrer"><Linkedin size={24}/></a>
            <a href="https://instagram.com/tshepo_nchabeleng7" target="_blank" rel="noopener noreferrer"><Instagram size={24}/></a>
            <a href="mailto:tsheposhaun7@gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={24}/></a>
          </div>
          <button
            onClick={()=> scrollToSection('projects')}
            className="scroll-indicator"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Current Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, i)=>(
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section-dark">
        <div className="container-narrow">
          <h2 className="section-title">Research & Publications</h2>
          <div className="research-list">
            {research.map((item, idx) => (
              <div key={idx} className="research-item">
                <div className="research-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className={`research-status ${
                    item.status === 'Published' ? 'status-published' : 'status-progress'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="research-date">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media">
        <div className="container">
          <h2 className="section-title">Media & Documentation</h2>
          <div className="media-grid">
            <div className="media-card">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                alt="Coding workspace"
                className="media-image"
              />
              <h3>Development Process</h3>
              <p>Behind the scenes of building innovative solutions</p>
            </div>
            <div className="media-card">
              <img
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop"
                alt="Tech conference"
                className="media-image"
              />
              <h3>Videos and Images</h3>
              <p>Sharing insights with the tech community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-dark">
        <div className="container-narrow contact-content">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            Interested in collaboration or have questions about my work? I'd love to hear from you!
          </p>
          <div className="contact-buttons">
            <a href="mailto:tsheposhaun7@gmail.com" className="btn-primary">
              Send Email
            </a>
            <a href={myCV} download="Tshepo_Nchabeleng_CV.pdf" className="btn-secondary">
              Download Resume
            </a>
          </div>
          <div className="contact-social">
            <a href="https://github.com/TshepoNchabeleng"><Github size={32} /></a>
            <a href="https://www.linkedin.com/in/tshepo-nchabeleng-3b4807348"><Linkedin size={32} /></a>
            <a href="https://instagram.com/tshepo_nchabeleng7"><Instagram size={32}/></a>
            <a href="mailto:tsheposhaun7@gmail.com"><Mail size={32} /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Tshepo Nchabeleng. Built with passion and code.</p>
      </footer>
    </div>
  );
}                                                                                                                                                                                                 

