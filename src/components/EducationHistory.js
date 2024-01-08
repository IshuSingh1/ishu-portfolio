import React from 'react';
import uofscLogo from './../images/uofsc.png'; // Ensure the path to the logo is correct

// EducationHistory component to display educational background
const EducationHistory = () => {
  // Destructuring the education object for easier access to properties
  const { school, degree, dates, gpa, courses } = {
    school: "University of South Carolina, Columbia",
    degree: "Bachelor's degree in Computer Science",
    dates: "AUG 2018 - MAY 2022",
    gpa: "3.68",
    courses: [
      "Data Structures",
      "Software Engineering",
      "Database Design",
      "Game Design",
      // Add more courses as needed
    ],
  };

  return (
    <div className="section-container">
      <div className="card">
        <img src={uofscLogo} alt="University of South Carolina" className="education-logo" />
        <div className="education-details">
          <h3>{school}</h3>
          <p>{degree}</p>
          <p>{dates}</p>
          <p>Relevant coursework included:</p>
          <ul>
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <p>
            Earned a {degree} from {school} ({dates}), 
            achieving a major GPA of {gpa}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationHistory;
