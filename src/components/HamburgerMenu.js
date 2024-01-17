import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the width of the sidebar here so we can use it in the styles
  const sidebarWidth = {
    default: '80%', // for mobile
    medium: '50%',  // for medium screens
    large: '20%'    // for large screens
  };

  // Calculate button position based on sidebar width and open state
  const buttonPosition = isOpen ? `calc(${sidebarWidth.default} - 50px)` : '10px';

  return (
    <>
      <style>
        {`
          .sidebar {
            position: fixed;
            top: 0;
            left: ${isOpen ? '0' : `-${sidebarWidth.default}`};
            height: 100%;
            background-color: white;
            transition: all 0.3s ease-in-out;
            z-index: 1000;
            padding: 20px;
            box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2); // Shadow on the right side
          }

          .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            visibility: ${isOpen ? 'visible' : 'hidden'};
            transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
            opacity: ${isOpen ? 1 : 0};
            z-index: 999;
          }

          .hamburger-btn {
            position: fixed;
            top: 10px;
            left: ${buttonPosition};
            z-index: 1500;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            transition: left 0.3s ease-in-out;
          }

          .icon {
            font-size: 30px; // Adjust icon size here
          }

          @media (min-width: 768px) {
            .sidebar {
              width: ${sidebarWidth.medium};
            }
            .hamburger-btn {
              left: ${isOpen ? `calc(${sidebarWidth.medium} - 50px)` : '10px'};
            }
          }

          @media (min-width: 1024px) {
            .sidebar {
              width: ${sidebarWidth.large};
            }
            .hamburger-btn {
              left: ${isOpen ? `calc(${sidebarWidth.large} - 50px)` : '10px'};
            }
          }
        `}
      </style>
      <button className="hamburger-btn" onClick={toggleMenu}>
        <FaBars className="icon" />
      </button>
      <div className="sidebar-overlay" onClick={toggleMenu}></div>
      <div className="sidebar">
        <h1>Coming Soon</h1>
        {/* Your sidebar content goes here */}
      </div>
    </>
  );
};

export default HamburgerMenu;