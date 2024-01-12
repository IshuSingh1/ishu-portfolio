const siteFooterStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f8f8f8',
  color: '#333',
  boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

const footerContentStyle = {
  margin: '5px 0',
  fontSize: '0.9em',
};

const Footer = () => {
  const year = new Date().getFullYear(); // Gets the current year

  return (
    <footer className="animated-gradient" style={siteFooterStyle}>
      <div style={footerContentStyle}>
        <p>© {year} Prathamjeet(Ishu) Singh. All rights reserved.</p>
        <p>Email: prathamjeet24@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
