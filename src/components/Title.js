import React from 'react';

const Title = ({ text }) => {
  const titleStyle = {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '2rem',
    color: '#333',
    padding: '20px 0',
    margin: '40px 0 20px',
    borderBottom: '2px solid #eaeaea',
    width: '80%',
    maxWidth: '1024px',
    boxSizing: 'border-box',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return <h2 style={titleStyle}>{text}</h2>;
};

export default Title;
