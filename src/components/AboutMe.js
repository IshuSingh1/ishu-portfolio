import React from 'react';

const AboutMe = () => {
  return (
    // Added margin: '0 auto' to center the card
    // Added textAlign: 'center' to center the text (optional, remove if you prefer left-align)
    <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', }}>
      <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.8' }}>
        Detail-oriented and motivated <strong>ServiceNow Developer</strong> with over 3 years of experience 
        designing and implementing enterprise-level ServiceNow solutions. I am currently 
        a ServiceNow Consultant / Developer at <strong>PricewaterhouseCoopers (PwC)</strong>.
      </p>
      <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#334155', lineHeight: '1.8' }}>
        I specialize in JavaScript, custom app development, and full SDLC execution, 
        with strong exposure to ITSM, ITAM, and Federal client environments. My background 
        includes a proven track record of enhancing workflows, optimizing systems, and 
        delivering quality technical solutions.
      </p>
    </div>
  );
};

export default AboutMe;