import React from 'react';
import eyLogo from './../images/ey.png'; // Import EY logo
import uofscLogo from './../images/uofsc.png'; // Import UofSC logo

// Array of work experiences
const experiences = [
  {
    company: 'Ernst & Young (EY)',
    role: 'Technology Consultant',
    dates: 'AUG 2022 - PRESENT',
    location: 'Atlanta',
    logo: eyLogo,
    isCurrent: true,
    description: "Developing and maintaining client applications as a ServiceNow Developer..."
    // Additional details can be added here if needed
  },
  {
    company: 'University of South Carolina (UofSC)',
    role: 'Developer / Research Assistant',
    dates: 'MAY 2021 - AUG 2022',
    location: 'Columbia',
    logo: uofscLogo,
    isCurrent: false,
    description: "Developed interactive platforms and chatbots..."
    // Additional details can be added here if needed
  },
  // More experiences can be added in the same format
];

// WorkExperience component to display experiences
const WorkExperience = () => {
  return (
    <div className="section-container">
      {experiences.map((exp, index) => (
        <div key={index} className="card" style={{ position: 'relative' }}> {/* Ensure position is relative */}
          <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-logo" />
          <div className="experience-details">
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.dates}</p>
            <p>{exp.location}</p>
            <p>{exp.description}</p>
            {/* Conditional rendering for current job indicator */}
            {exp.isCurrent && <div className="current-indicator"></div>} {/* Use div instead of span for the indicator */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
