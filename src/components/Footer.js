import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#64748b', fontSize: '0.9rem' }}>
      <p>
        &copy; {new Date().getFullYear()} Ishu Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;