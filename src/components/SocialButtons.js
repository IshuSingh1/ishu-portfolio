import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Using react-icons for simplicity

const linkedinLink = "https://www.linkedin.com/in/prathamjeet-singh-0041781b4/";
const githubLink = "https://github.com/IshuSingh1";
const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="social-button">
        <FaLinkedin size={30} />
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="social-button">
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default SocialButtons;
