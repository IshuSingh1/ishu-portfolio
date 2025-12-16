import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="glass-card" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: '1.8', marginBottom: '2rem' }}>
        Whether you have a question about ServiceNow, want to discuss a project, 
        or just want to say hi, my inbox is always open!
      </p>

      {/* Primary Call to Action */}
      <a 
        href="mailto:prathamjeet2@gmail.com" 
        className="primary-btn"
        style={{ fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
      >
        <FaEnvelope /> Say Hello
      </a>

      {/* Social Links Row */}
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
        <a 
          href="https://www.linkedin.com/in/prathamjeet-singh-0041781b4/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0077b5', fontSize: '2.5rem', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <FaLinkedin />
        </a>
        
        <a 
          href="https://github.com/IshuSingh1" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#1e293b', fontSize: '2.5rem', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;