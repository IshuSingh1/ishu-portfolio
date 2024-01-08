import React from 'react';

// Title component to display section headers
const Title = ({ text }) => {
  // Define the styles for the title
  const titleStyle = {
    textAlign: 'center', // Center-align text
    fontWeight: '300', // Lighter font weight for aesthetic
    fontSize: '2rem', // Set the size of the font
    color: '#333', // Set the text color
    padding: '20px 0', // Add padding above and below the title
    margin: '40px 0 20px', // Space above and below the title
    borderBottom: '2px solid #eaeaea', // Subtle line below the title
    width: '80%', // Set the width relative to its parent
    maxWidth: '1024px', // Limit the maximum width
    boxSizing: 'border-box', // Include padding and border in the element's total width
    display: 'block', // Block display to take the full width
    marginLeft: 'auto', // Center the title horizontally
    marginRight: 'auto', // Center the title horizontally
  };

  // Render the title with the defined styles
  return <h2 style={titleStyle}>{text}</h2>;
};

export default Title;
