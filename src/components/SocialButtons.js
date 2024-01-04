import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Using react-icons for simplicity

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaLinkedin size={30} />
      </a>
      <a href="https://www.github.com/your-github" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default SocialButtons;
