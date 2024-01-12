import React from 'react';

const aboutMeStyle = {
  background: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  padding: '20px',
  margin: '20px auto',
  width: '80%',
  maxWidth: '1024px',
  boxSizing: 'border-box',
  position: 'relative',
};

const AboutMe = () => {
  return (
    <div style={aboutMeStyle}>
      <p>
        Hi, I'm Ishu Singh — a passionate Technology Consultant at Ernst & Young and
        Computer Science graduate from the University of South Carolina. I specialize
        in creating intuitive software and automating complex tasks, with a knack for
        Python scripting and ServiceNow development. My academic and professional
        paths are decorated with achievements and skills in data analysis, application
        development, and collaborative project leadership. I'm all about making
        impactful tech easier to use and understand.
      </p>
    </div>
  );
};

export default AboutMe;