import React from 'react';
import uofscLogo from './../images/uofsc.png';

const EducationHistory = () => {
  const education = {
    school: "University of South Carolina",
    degree: "Bachelor's Degree in Computer Science",
    dates: "AUG 2018 - MAY 2022",
    location: "Columbia, SC",
    majorGPA: "3.68",
    overallGPA: "3.3",
    honors: "McNair Junior Fellows Scholar",
    courses: [
      "Data Structures and Algorithms", 
      "Software Engineering & Design",
      "Advanced Programming Techniques (Unix)",
      "Database System Design",
      "Game Design & Development",
      "Capstone Project: System Implementation"
    ],
  };

  return (
    // Added margin: 0 auto to force centering
    <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="job-header">
        <img src={uofscLogo} alt="UofSC Logo" className="job-logo" />
        <div className="job-info">
          <h3>{education.school}</h3>
          <span className="job-role">{education.degree}</span>
          <div className="job-meta">
            {education.dates} | {education.location}
          </div>
        </div>
      </div>

      <div className="job-details">
        <p style={{ marginBottom: '1rem', color: '#334155' }}>
          <strong>Honors:</strong> {education.honors} <br/>
          <strong>GPA:</strong> Major {education.majorGPA} / Overall {education.overallGPA}
        </p>
        
        <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent-color)' }}>Key Coursework:</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {education.courses.map((course, index) => (
            <span 
              key={index} 
              style={{
                background: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(0,0,0,0.1)',
                padding: '5px 15px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                color: '#475569'
              }}
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationHistory;