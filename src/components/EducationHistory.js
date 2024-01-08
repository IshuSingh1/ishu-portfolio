import React from 'react';
import uofscLogo from './../images/uofsc.png'; // Reuse the same path from WorkExperience

const EducationHistory = () => {
  const educationCardStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '20px auto', // Centered with auto margins on the sides
    padding: '20px',
    width: '80%', // Use the same width for both components
    maxWidth: '1024px', // Optional: maximum width can be set to limit card size on larger screens
    boxSizing: 'border-box',
    position: 'relative', // For absolute positioning of elements inside
  };

  const logoStyle = {
    width: '150px',
    alignSelf: 'center', // Center the logo within the card
  };

  const listStyle = {
    marginLeft: '20px', // Add indentation to the list
    listStyleType: 'disc', // Add bullets to the list items
  };

  const educationHistory = {
    school: "University of South Carolina, Columbia",
    degree: "Bachelor's degree in Computer Science",
    dates: "AUG 2018 - MAY 2022",
    gpa: "3.68",
    courses: [
      "Data Structures",
      "Software Engineering",
      "Database Design",
      "Game Design",
      // ... add more courses as needed
    ],
  };

  return (
    <div style={educationCardStyle}>
      <img src={uofscLogo} alt="University of South Carolina" style={logoStyle} />
      <h3 style={{ margin: '10px 0' }}>{educationHistory.school}</h3>
      <p style={{ margin: '5px 0' }}>{educationHistory.degree}</p>
      <p style={{ margin: '5px 0' }}>{educationHistory.dates}</p>
      <p style={{ margin: '5px 0' }}>Relevant coursework included:</p>
      <ul style={listStyle}>
        {educationHistory.courses.map((course, index) => (
          <li key={index} style={{ margin: '5px 0' }}>{course}</li>
        ))}
      </ul>
      <p style={{ margin: '5px 0' }}>
        Earned a {educationHistory.degree} from {educationHistory.school} ({educationHistory.dates}), 
        achieving a major GPA of {educationHistory.gpa}.
      </p>
    </div>
  );
};

export default EducationHistory;
