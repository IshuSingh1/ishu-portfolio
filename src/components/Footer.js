// Footer.js
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear(); // Gets the current year

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {year} Prathamjeet(Ishu) Singh. All rights reserved.</p>
        <p>Email: prathamjeet24@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;