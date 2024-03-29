import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style>
        {`
          .sidebar {
            position: fixed;
            top: 0;
            left: ${isOpen ? '0' : '-100%'};
            height: 100%;
            background-color: white;
            transition: left 0.3s;
            z-index: 1000;
            padding: 20px;
            box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.5); // Shadow on the right side
          }
          
          .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            visibility: ${isOpen ? 'visible' : 'hidden'};
            transition: visibility 0.3s, opacity 0.3s;
            opacity: ${isOpen ? 1 : 0};
            z-index: 500;
          }

          .hamburger-btn {
            position: fixed;
            top: 10px;
            left: 10px;
            z-index: 1500;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
          }

          .icon {
            font-size: 24px; // Larger icon size
          }

          @media (min-width: 1024px) {
            .sidebar {
              width: 20%;
            }
          }

          @media (max-width: 1023px) {
            .sidebar {
              width: 50%;
            }
          }

          @media (max-width: 767px) {
            .sidebar {
              width: 80%;
            }
          }
        `}
      </style>
      <button className="hamburger-btn" onClick={toggleMenu}>
        <FaBars className="icon" />
      </button>
      <div className="sidebar-overlay" onClick={toggleMenu} />
      <div className="sidebar">
        <h1>Title</h1>
        {/* Add your categories and links here */}
        <div>
          <h2>Category 1</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            {/* More links */}
          </ul>
        </div>
        {/* More categories */}
      </div>
    </>
  );
};

export default HamburgerMenu;