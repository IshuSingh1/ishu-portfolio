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
        Detail-oriented and motivated ServiceNow Developer with over 3 years of experience 
        designing and implementing enterprise-level ServiceNow solutions. I am currently 
        a ServiceNow Consultant / Developer at PricewaterhouseCoopers (PwC).
      </p>
      <p style={{ marginTop: '10px' }}>
        I specialize in JavaScript, custom app development, and full SDLC execution, 
        with strong exposure to ITSM, ITAM, and Federal client environments. My background 
        includes a proven track record of enhancing workflows, optimizing systems, and 
        delivering quality technical solutions. I am ready to contribute to fast-paced, 
        mission-critical engagements with flexibility to travel as required.
      </p>
    </div>
  );
};

export default AboutMe;