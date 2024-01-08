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
    description: "Developing and maintaining client applications as a ServiceNow Developer. Gathering client requirements in a role as a ServiceNow Business Analyst. Writing technical documentation for team knowledge transfer. Contributing to business development initiatives within EY. Lead the development of a custom Firewall Management application, enhancing service delivery and user experience."
  },
  {
    company: 'University of South Carolina (UofSC)',
    role: 'Developer / Research Assistant',
    dates: 'MAY 2021 - AUG 2022',
    location: 'Columbia',
    logo: uofscLogo,
    isCurrent: false,
    description: "Developed interactive platforms and chatbots, including enhancements to an Android app. Leveraged APIs for chatbot creation and data extraction, with a focus on COVID-19 data. Managed data storage and performed data analysis and visualization with Python."
  },
];

const WorkExperience = () => {
  const workExperienceContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2% 5%',
    boxSizing: 'border-box',
  };

  const workExperienceCardStyle = {
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

  const companyLogoStyle = {
    width: '100px',
    height: 'auto',
    marginBottom: '15px',
  };

  return (
    <div style={workExperienceContainerStyle}>
      {experiences.map((experience, index) => (
        <div key={index} style={workExperienceCardStyle}>
          <img src={experience.logo} alt={`${experience.company} Logo`} style={companyLogoStyle} />
          <div>
            <h3>{experience.company}</h3>
            <p>{experience.role}</p>
            <p>{experience.dates}</p>
            <p>{experience.location}</p>
            <p>{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
