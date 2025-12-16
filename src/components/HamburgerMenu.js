import React, { useState } from 'react';
import { FaBars, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'; 

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // NEW: Manual scroll handler to ensure smooth scrolling and proper menu closing
  const handleNavigation = (e, targetId) => {
    e.preventDefault(); // Stop the browser from jumping instantly
    setIsOpen(false);   // Close the menu immediately

    if (targetId === 'home') {
      // For Home, just scroll to the very top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // For other sections, find the element by ID and scroll to it
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const sidebarWidth = {
    default: '85%',
    medium: '50%',
    large: '25%'
  };

  const buttonPosition = isOpen ? `calc(${sidebarWidth.default} - 60px)` : '20px';

  return (
    <>
      <style>
        {`
          /* --- Sidebar Layout --- */
          .sidebar {
            position: fixed;
            top: 0;
            left: ${isOpen ? '0' : `-${sidebarWidth.default}`};
            height: 100%;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            transition: left 0.3s ease-in-out;
            z-index: 1000;
            padding: 30px;
            box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            color: var(--text-primary, #1e293b);
          }

          .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(15, 23, 42, 0.6);
            visibility: ${isOpen ? 'visible' : 'hidden'};
            opacity: ${isOpen ? 1 : 0};
            transition: all 0.3s ease-in-out;
            z-index: 999;
          }

          /* --- Toggle Button --- */
          .hamburger-btn {
            position: fixed;
            top: 20px;
            left: ${buttonPosition};
            z-index: 1500;
            background: white;
            border: none;
            cursor: pointer;
            padding: 10px;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transition: left 0.3s ease-in-out, transform 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color, #2563eb);
          }
          .hamburger-btn:hover {
            transform: scale(1.1);
          }
          .icon { font-size: 24px; }

          /* --- Menu Links --- */
          .menu-header {
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 2rem;
            color: var(--text-primary, #1e293b);
            border-bottom: 2px solid var(--accent-color, #2563eb);
            padding-bottom: 0.5rem;
            display: inline-block;
          }

          .nav-list {
            list-style: none;
            padding: 0;
            margin: 0;
            flex: 1; 
          }

          .nav-item {
            margin-bottom: 1.2rem;
          }

          .nav-link {
            text-decoration: none;
            font-size: 1.2rem;
            color: var(--text-secondary, #475569);
            font-weight: 600;
            transition: color 0.2s, padding-left 0.2s;
            display: block;
            cursor: pointer;
          }

          .nav-link:hover {
            color: var(--accent-color, #2563eb);
            padding-left: 10px;
          }

          /* --- Featured Project Card (Ishion) --- */
          .featured-section {
            margin-top: auto;
            border-top: 1px solid rgba(0,0,0,0.1);
            padding-top: 1.5rem;
          }

          .featured-label {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #94a3b8;
            margin-bottom: 1rem;
            font-weight: 700;
          }

          .project-card {
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            border-radius: 12px;
            padding: 1.2rem;
            border: 1px solid rgba(37, 99, 235, 0.2);
            transition: transform 0.2s;
          }
          .project-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(37, 99, 235, 0.15);
          }

          .project-title {
            font-size: 1.2rem;
            font-weight: 800;
            color: var(--accent-color, #2563eb);
            margin-bottom: 0.2rem;
          }
          
          .project-desc {
            font-size: 0.9rem;
            color: #475569;
            margin-bottom: 1rem;
            line-height: 1.4;
          }

          .tech-stack {
            display: flex;
            gap: 8px;
            margin-bottom: 1rem;
            flex-wrap: wrap;
          }
          .tech-badge {
            font-size: 0.75rem;
            background: white;
            padding: 2px 8px;
            border-radius: 4px;
            color: #2563eb;
            font-weight: 600;
            border: 1px solid rgba(37,99,235,0.2);
          }

          .visit-btn {
            display: inline-flex;
            align-items: center;
            background-color: var(--accent-color, #2563eb);
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            transition: background 0.2s;
            cursor: pointer;
          }
          .visit-btn:hover {
            background-color: #1d4ed8;
          }

          /* --- Media Queries --- */
          @media (min-width: 768px) {
            .sidebar { left: ${isOpen ? '0' : `-${sidebarWidth.medium}`}; width: ${sidebarWidth.medium}; }
            .hamburger-btn { left: ${isOpen ? `calc(${sidebarWidth.medium} - 60px)` : '30px'}; }
          }
          @media (min-width: 1024px) {
            .sidebar { left: ${isOpen ? '0' : `-${sidebarWidth.large}`}; width: ${sidebarWidth.large}; }
            .hamburger-btn { left: ${isOpen ? `calc(${sidebarWidth.large} - 60px)` : '30px'}; }
          }
        `}
      </style>

      {/* Button changes icon when open */}
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </button>

      {/* Overlay to click-away */}
      <div className="sidebar-overlay" onClick={toggleMenu}></div>

      {/* Sidebar Content */}
      <div className="sidebar">
        <div className="menu-header">My Portfolio</div>
        
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => handleNavigation(e, 'about')}>About Me</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={(e) => handleNavigation(e, 'experience')}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link" onClick={(e) => handleNavigation(e, 'education')}>Education</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={(e) => handleNavigation(e, 'skills')}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#achievements" className="nav-link" onClick={(e) => handleNavigation(e, 'achievements')}>Achievements</a>
          </li>
        </ul>

        {/* Featured Project Section */}
        <div className="featured-section">
          <div className="featured-label">Featured Project</div>
          <div className="project-card">
            <div className="project-title">Ishion</div>
            
            <div className="tech-stack">
              <span className="tech-badge">React</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Firebase</span>
              <span className="tech-badge">Tailwind</span>
            </div>

            <p className="project-desc">
              A Kanban task tracker with drag-and-drop boards, lane management, and real-time synchronization.
            </p>
            
            <a 
              href="https://ishion-6e2a0.web.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="visit-btn"
              onClick={toggleMenu}
            >
              View Board <FaExternalLinkAlt style={{ marginLeft: '8px', fontSize: '0.8rem' }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;