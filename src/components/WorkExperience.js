import React from 'react';
import eyLogo from './../images/ey.png'; 
import uofscLogo from './../images/uofsc.png'; 
import pwcLogo from './../images/pwc.png'; // Make sure you have this image or comment it out

const experiences = [
  {
    company: 'PricewaterhouseCoopers (PwC)',
    role: 'ServiceNow Consultant / Developer',
    dates: 'AUGUST 2024 - PRESENT',
    location: 'Atlanta, GA',
    logo: pwcLogo, 
    isCurrent: true,
    description: [
      "Lead a team of 10+ ServiceNow developers implementing Sales and Order Management solutions within a federally certified instance, aligning delivery with client goals and compliance standards.",
      "Manage sprint planning, backlog refinement, kickoff meetings, and retrospectives to ensure agile best practices and consistent delivery velocity.",
      "Architect and oversee the configuration of UI Policies, Business Rules, Client Scripts, Workflows, and REST integrations to support complex business processes.",
      "Architected and deployed end-to-end ITSM processes across Incident, Change, Problem, Major Incident, and Knowledge Management modules, improving service delivery efficiency.",
      "Create internal accelerators and reusable components to expedite ServiceNow solution delivery; develop internal tools and frameworks to enhance the maturity and efficiency of the ServiceNow practice."
    ]
  },
  {
    company: 'Ernst & Young (EY)',
    role: 'ServiceNow Consultant / Developer',
    dates: 'AUGUST 2022 - AUGUST 2024',
    location: 'Atlanta, GA',
    logo: eyLogo,
    isCurrent: false,
    // RESTORED: Detailed description from your original website
    description: [
      "Actively involved in the development, configuration, and ongoing maintenance of client applications as a ServiceNow Developer, ensuring optimal performance and user satisfaction.",
      "Acting as a ServiceNow Functional Analyst, gathering client requirements, documenting integrations, catalog items, and configurations, thereby enhancing project efficiency and clarity.",
      "Led the development of a custom Firewall Management application in ServiceNow, significantly enhancing service delivery and user experience. This involved creating scoped applications, access controls, workflows, email notifications, forms, and micro-configurations.",
      "Played a pivotal role in EY's business development initiatives, including maintaining the account pipeline and reporting crucial metrics to leadership, as well as providing key support in multiple client pursuits."
    ]
  },
  {
    company: 'University of South Carolina (UofSC)',
    role: 'Developer / Research Assistant',
    dates: 'MAY 2021 - AUG 2022',
    location: 'Columbia, SC',
    logo: uofscLogo,
    isCurrent: false,
    description: [
      "Data Analysis and Visualization: Analyzed COVID and SUD Reddit/Twitter data (2019-2021) using Python, visualizing trends with Python libraries, and optimized API data extraction.",
      "3D Modeling and Chatbot Integration: Created an interactive 3D Rubik's Cube using Three.js and integrated a RASA chatbot in a web app for cube-solving education.",
      "Mobile Application Enhancement: Enhanced QuitStart Android app with an embedded chatbot and utilized Firebase for user data management."
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
    objectFit: 'contain'
  };

  const experienceDetailsStyle = {
    marginLeft: '20px',
  };

  const listStyle = {
    paddingLeft: '40px',
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
          {exp.logo ? (
            <img src={exp.logo} alt={`${exp.company} Logo`} style={experienceLogoStyle} />
          ) : (
             <div style={{...experienceLogoStyle, fontWeight: 'bold', fontSize: '1.2em'}}>{exp.company}</div>
          )}
          
          <div style={experienceDetailsStyle}>
            <h3>{exp.company}</h3>
            <p style={{ fontWeight: 'bold' }}>{exp.role}</p>
            <p style={{ fontStyle: 'italic', color: '#555' }}>{exp.dates} | {exp.location}</p>
            
            <ul style={listStyle}>
              {exp.description.map((detail, detailIndex) => (
                <li key={detailIndex} style={{ marginBottom: '8px' }}>{detail}</li>
              ))}
            </ul>
            {exp.isCurrent && <div style={currentIndicatorStyle} title="Current Role"></div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;