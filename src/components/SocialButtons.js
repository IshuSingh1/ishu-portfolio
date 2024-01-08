// SocialButtons.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialButtons = () => {
  const socialButtonsStyle = {
    display: 'flex',
    gap: '10px',
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: '1000',
  };

  const linkedinLink = "https://www.linkedin.com/in/prathamjeet-singh-0041781b4/";
  const githubLink = "https://github.com/IshuSingh1";

  const iconStyle = {
    color: '#000000', // Solid black color
  };

  return (
    <div style={socialButtonsStyle}>
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={iconStyle} />
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} style={iconStyle} />
      </a>
    </div>
  );
};

export default SocialButtons;
