import React from 'react';
import profilePic from './../images/profileImage.png';

const Intro = () => {
  const introStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
  };

  const profileImageStyle = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    border: '5px solid white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={introStyle}>
      <img src={profilePic} alt="Profile" style={profileImageStyle} />
      <h1>Hello, I'm Ishu Singh</h1>
    </div>
  );
};

export default Intro;