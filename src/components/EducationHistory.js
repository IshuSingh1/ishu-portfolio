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
      "Data Structures and Algorithms",
      "Software Engineering",
      "Advanced Programming Techniques",
      "Capstone Project",
      "Database System Design",
      "Game Design",
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
