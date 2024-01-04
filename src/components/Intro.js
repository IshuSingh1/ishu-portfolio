// Intro.js
import React from 'react';
import profilePic from './../images/profileImage.png'; // Update the path if necessary

const Intro = ({ className }) => {
  return (
    <div className={`intro-container ${className}`}>
      <div className="profile-image-container">
        <img src={profilePic} alt="Profile" className="profile-image" />
      </div>
      <h1 className="h1-animated-gradient">Hello, I'm Ishu Singh</h1>
    </div>
  );
};

export default Intro;