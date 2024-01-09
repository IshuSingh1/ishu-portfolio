import React from 'react';
import eyLogo from './../images/ey.png'; // Import EY logo
import uofscLogo from './../images/uofsc.png'; // Import UofSC logo

const experiences = [
  {
    company: 'Ernst & Young (EY)',
    role: 'Technology Consultant',
    dates: 'AUG 2022 - PRESENT',
    location: 'Atlanta',
    logo: eyLogo,
    isCurrent: true,
    description: [
      "Developing and maintaining client applications as a ServiceNow Developer.",
      "Gathering client requirements in a role as a ServiceNow Business Analyst.",
      "Writing technical documentation for team knowledge transfer.",
      "Contributing to business development initiatives within EY.",
      "Lead the development of a custom Firewall Management application, enhancing service delivery and user experience."
    ]
  },
  {
    company: 'University of South Carolina (UofSC)',
    role: 'Developer / Research Assistant',
    dates: 'MAY 2021 - AUG 2022',
    location: 'Columbia',
    logo: uofscLogo,
    isCurrent: false,
    description: [
      "Learned how to build a chatbot on Reddit and Twitter using their official APIs.",
      "Extracted and analyzed COVID-related Reddit data using Python’s Push Shift API.",
      "Stored all the extracted data in MySQL using MySQL-connector-python library.",
      "Visualized data analysis using various Python libraries.",
      "Created Python scripts to automate tasks such as extracting and analyzing social media data.",
      "Developed a 3D model of Rubik's Cube with an integrated RASA chatbot that helps users learn Rubik’s Cube.",
      "Enhanced an already built Android app called QuitStart by adding a navigation chatbot inside it."
    ]
  },
];

const WorkExperience = () => {
  return (
    <div className="section-container">
      {experiences.map((exp, index) => (
        <div key={index} className="card" style={{ position: 'relative' }}>
          <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-logo" />
          <div className="experience-details">
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.dates}</p>
            <p>{exp.location}</p>
            {exp.description.slice(0, 1).map((detail, detailIndex) => (
              <p key={detailIndex}>{detail}</p>
            ))}
            <ul>
              {exp.description.slice(1).map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
            {exp.isCurrent && <div className="current-indicator"></div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
