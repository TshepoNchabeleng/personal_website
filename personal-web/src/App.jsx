import React, { useState } from 'react';
import {Menu, X, Github, Linkedin, Instagram, Mail, ExternalLink, ChevronDown} from 'lucide-react';
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
      link: "#"
    },
    {
      title: "RC-CAR",
      description: "An autonomous obstacle avoidance car -- still in development",
      tech: ["Python", "React", "JavaScript", "C++", "ESP32", "C"],
      image: "https://images.unsplash.com/photo-1727622738037-65923e2319d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      title: "Retrieval-Augmented Generation model",
      decription: "A RAG model that is focused on thermochemistry to help me understand my chemistry class and improve my python skills",
      tech: ["Python", "fastapi", "JavaScript", "streamlit"],
      image:
      link:"#"
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
          <div className = "logo">Tshepo Ncahbeleng</div>

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
        <div className={"mobile-menu ${isMenuOpen ? 'open': ''}"}>
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

      {/* Hero section /*/}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="avatar">
            <div className="Avatar-inner">👨‍💻</div>
          </div>
          <h1> Student, Tech enthusiast, & aspiring Researcher </h1>
          <p>Building the future through code, research, and creativity</p>
          <div className="social-links">
            <a href="#"><Github size={24}/></a>
            <a href="#"><Linkedin size={24}/></a>
            <a href="#"><Mail size={24}/></a>
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
                <img src="project.image" alt="project.title" className="project-image" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.mao((tech, i)=>(
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>
    </div>
  )
}