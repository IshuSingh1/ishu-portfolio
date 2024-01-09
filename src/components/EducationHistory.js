import React from 'react';
import uofscLogo from './../images/uofsc.png'; // Make sure the path to the image is correct

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
    <div className="education-card">
      <img src={uofscLogo} alt="University of South Carolina Logo" className="education-logo" />
      <h3>{education.school}</h3>
      <p>{education.degree}</p>
      <p>{education.dates}</p>
      <p>Major GPA: {education.majorGPA}</p>
      <p>Overall GPA: {education.overallGPA}</p>
      <p>Important Coursework:</p>
      <ul>
        {education.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationHistory;
