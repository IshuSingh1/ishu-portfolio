import React, { useState, useEffect } from 'react';
import profilePic from './../images/profileImage.png';

const Intro = () => {
  const [text, setText] = useState('');
  const fullText = "ServiceNow Consultant & Developer";

  // Typewriter effect logic
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length + 1) {
        clearInterval(timer);
      }
    }, 100); // Speed of typing
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="intro-container">
      {/* Left Side: Text Content */}
      <div className="intro-text">
        <h2 className="greeting">Hello, I'm</h2>
        <h1 className="name-title">Ishu Singh</h1>
        
        {/* Typewriter Text */}
        <h3 className="role-title">
          {text}<span className="cursor">|</span>
        </h3>
        
        <p className="intro-subtitle">
          Specializing in ITSM, ITAM, and Enterprise Solutions for federal and commercial clients.
        </p>

        <div className="intro-buttons">
          <a href="#experience" className="primary-btn">View Work</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
      </div>

      {/* Right Side: Image with visual backing */}
      <div className="intro-image-wrapper">
        <div className="blob-background"></div>
        <img src={profilePic} alt="Ishu Singh" className="profile-img" />
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow">↓</div>
      </div>
    </div>
  );
};

export default Intro;