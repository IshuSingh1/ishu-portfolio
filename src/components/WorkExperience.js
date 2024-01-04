// WorkExperience.js
import React from 'react';
import eyLogo from './../images/ey.png'; // Update the path if necessary
import uofscLogo from './../images/uofsc.png'; // Update the path if necessary

const experiences = [
    {
      company: 'Ernst & Young (EY)',
      role: 'Technology Consultant',
      dates: 'AUG 2022 - PRESENT',
      location: 'Atlanta',
      logo: eyLogo,
      isCurrent: true,
    },
    {
      company: 'University of South Carolina (UofSC)',
      role: 'Developer / Research Assistant',
      dates: 'MAY 2021 - AUG 2022',
      location: 'Columbia',
      logo: uofscLogo,
      isCurrent: false,
    },
    // ... more experiences
  ];

  const WorkExperience = ({ className }) => {
    return (
      <div className={`work-experience-container ${className}`}>
      {experiences.map((experience, index) => (
        <div key={index} className="work-experience-card">
          <img src={experience.logo} alt={`${experience.company} Logo`} className="company-logo" />
          <div className="company-details">
            <h3>{experience.company}</h3>
            <p>{experience.role}</p>
            <p>{experience.dates}</p>
            <p>{experience.location}</p>
            {experience.isCurrent && <span className="current-work">Current</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
