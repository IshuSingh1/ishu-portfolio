import React from 'react';
import uofscLogo from './../images/uofsc.png';

const educationCardStyle = {
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

const educationLogoStyle = {
  width: '100px',
  marginBottom: '20px',
};

const educationTextStyle = {
  paddingLeft: '20px',
};

const listStyle = {
  paddingLeft: '40px',
};

const EducationHistory = () => {
  const education = {
    school: "University of South Carolina, Columbia",
    degree: "Bachelor's degree in Computer Science",
    dates: "AUG 2018 - MAY 2022",
    majorGPA: "3.68",
    overallGPA: "3.3",
    courses: [
      "Data Structures and Algorithms: Covered practical data organization methods and algorithm efficiency, including lists, trees, and graph structures.", 
      "Software Engineering: Studied the core principles of software design and development, focusing on object-oriented and functional design strategies, along with version control and testing.",
      "Advanced Programming Techniques: Advanced my understanding of programming concepts like pointers, memory management, and language-specific features in the Unix environment.",
      "Capstone Project: Participated in a significant team project that involved designing, building, and validating a complete computer system, with a focus on practical implementation and testing.",
      "Database System Design: Learned about database management system architecture, with an emphasis on design, security, and implementation principles.",
      "Game Design: Explored the process of designing and developing computer games, with a practical emphasis on the technologies involved.",
      // Add more courses as needed
    ],
  };

    return (
    <div style={educationCardStyle}>
      <img src={uofscLogo} alt="University of South Carolina Logo" style={educationLogoStyle} />
      <div style={educationTextStyle}>
        <h3>{education.school}</h3>
        <p>{education.degree}</p>
        <p>{education.dates}</p>
        <p>Major GPA: {education.majorGPA}</p>
        <p>Overall GPA: {education.overallGPA}</p>
        <p>Important Coursework:</p>
        <ul style={listStyle}>
          {education.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationHistory;
