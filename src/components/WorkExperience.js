import React from 'react';
import eyLogo from './../images/ey.png'; // Import EY logo
import uofscLogo from './../images/uofsc.png'; // Import UofSC logo

const experiences = [
  {
    company: 'Ernst & Young (EY)',
    role: 'Technology Consultant',
    dates: 'AUG 2022 - PRESENT',
    location: 'Atlanta, GA',
    logo: eyLogo,
    isCurrent: true,
    description: [
      "Work & Responsibilities includes:",
      "Actively involved in the development, configuration, and ongoing maintenance of client applications as a ServiceNow Developer, ensuring optimal performance and user satisfaction.",
      "Acting as a ServiceNow Functional Analyst, gathering client requirements, documenting integrations, catalog items, and configurations, thereby enhancing project efficiency and clarity.",
      "Led the development of a custom Firewall Management application in ServiceNow, significantly enhancing service delivery and user experience. This involved creating scoped applications, access controls, workflows, email notifications, forms, and micro-configurations. Received high praise and recognition for exceptional work, with users providing overwhelmingly positive feedback on the application.",
      "Playing a pivotal role in EY's business development initiatives, including maintaining the account pipeline and reporting crucial metrics to leadership, as well as providing key support in multiple client pursuits.",
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
      "Work performed includes:",
      "Data Analysis and Visualization: Analyzed COVID and SUD Reddit/Twitter data (2019-2021) using Python, visualizing trends with Python libraries, and optimized API data extraction.",
      "3D Modeling and Chatbot Integration: Created an interactive 3D Rubik's Cube using Three.js and integrated a RASA chatbot in a web app for cube-solving education.",
      "Mobile Application Enhancement: Enhanced QuitStart Android app with an embedded chatbot and utilized Firebase for user data management.",
      "Web-Based React Project: Contributed to the development of a React project aimed at studying user focus in response to various ads and popups, providing valuable insights into the effects of digital advertising.",
    ]
  },
];

const WorkExperience = () => {
  const cardStyle = {
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

  const experienceLogoStyle = {
    width: '100px',
    marginBottom: '20px',
  };

  const experienceDetailsStyle = {
    marginLeft: '20px',
  };

  const listStyle = {
    paddingLeft: '40px', // Increase left padding to indent the list items further
  };

  const currentIndicatorStyle = {
    width: '12px',
    height: '12px',
    backgroundColor: '#28a745',
    borderRadius: '50%',
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: '2px solid white',
  };

  return (
    <div>
      {experiences.map((exp, index) => (
        <div key={index} style={cardStyle}>
          <img src={exp.logo} alt={`${exp.company} Logo`} style={experienceLogoStyle} />
          <div style={experienceDetailsStyle}>
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.dates}</p>
            <p>{exp.location}</p>
            {exp.description.slice(0, 1).map((detail, detailIndex) => (
              <p key={detailIndex}>{detail}</p>
            ))}
            <ul style={listStyle}>
              {exp.description.slice(1).map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
            {exp.isCurrent && <div style={currentIndicatorStyle}></div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
