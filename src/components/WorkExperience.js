import React from 'react';
import eyLogo from './../images/ey.png'; 
import uofscLogo from './../images/uofsc.png'; 
import pwcLogo from './../images/pwc.png'; 

const experiences = [
  {
    company: 'PricewaterhouseCoopers (PwC)',
    role: 'ServiceNow Consultant / Developer',
    dates: 'AUGUST 2024 - PRESENT',
    location: 'Atlanta, GA',
    logo: pwcLogo,
    isCurrent: true,
    description: [
      "Lead a team of 10+ ServiceNow developers implementing Sales and Order Management solutions within a federally certified instance.",
      "Manage sprint planning, backlog refinement, kickoff meetings, and retrospectives to ensure agile best practices.",
      "Architect and oversee the configuration of UI Policies, Business Rules, Client Scripts, Workflows, and REST integrations.",
      "Architected and deployed end-to-end ITSM processes across Incident, Change, Problem, Major Incident, and Knowledge Management.",
      "Create internal accelerators and reusable components to expedite ServiceNow solution delivery."
    ]
  },
  {
    company: 'Ernst & Young (EY)',
    role: 'ServiceNow Consultant / Developer',
    dates: 'AUGUST 2022 - AUGUST 2024',
    location: 'Atlanta, GA',
    logo: eyLogo,
    isCurrent: false,
    description: [
      "Actively involved in the development, configuration, and ongoing maintenance of client applications as a ServiceNow Developer.",
      "Acting as a ServiceNow Functional Analyst, gathering client requirements, documenting integrations, catalog items, and configurations.",
      "Led the development of a custom Firewall Management application in ServiceNow, significantly enhancing service delivery and user experience.",
      "Played a pivotal role in EY's business development initiatives, including maintaining the account pipeline and reporting crucial metrics."
    ]
  },
  {
    company: 'University of South Carolina',
    role: 'Research Assistant & Developer',
    dates: 'MAY 2021 - AUG 2022',
    location: 'Columbia, SC',
    logo: uofscLogo,
    isCurrent: false,
    description: [
      "Analyzed COVID and SUD data using Python and visualized trends with Matplotlib.",
      "Integrated RASA chatbots into web and mobile applications for improved user interaction.",
      "Mobile Application Enhancement: Enhanced QuitStart Android app with an embedded chatbot and utilized Firebase."
    ]
  },
];

const WorkExperience = () => {
  return (
    <div className="experience-list">
      {experiences.map((exp, index) => (
        <div key={index} className="glass-card">
          <div className="job-header">
            {exp.logo && <img src={exp.logo} alt={exp.company} className="job-logo" />}
            <div className="job-info">
              <h3>{exp.company}</h3>
              <span className="job-role">{exp.role}</span>
              <div className="job-meta">
                {exp.dates} | {exp.location}
              </div>
            </div>
          </div>
          
          <ul className="job-details">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;