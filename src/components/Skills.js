import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const skillsData = [
  {
    skill: "ServiceNow ITSM & ITAM",
    description: "Expertise in Incident, Change, Problem, Major Incident, Knowledge Management, HAM Pro, and SAM Pro."
  },
  {
    skill: "ServiceNow Configuration",
    description: "Proficient in Business Rules, UI Policies, UI Actions, Client Scripts, Workflows, UI Pages, and Data Imports."
  },
  {
    skill: "JavaScript",
    description: "Core language for ServiceNow customization and full-stack web development."
  },
  {
    skill: "CMDB & Discovery",
    description: "Experience managing Configuration Management Databases and running Discovery for asset tracking."
  },
  {
    skill: "REST APIs",
    description: "Designing and implementing integrations to support complex business processes and third-party data exchange."
  },
  {
    skill: "Python",
    description: "Used for data analysis, scripting, automation, and backend logic."
  },
  {
    skill: "Java",
    description: "Strong understanding of Object-Oriented Programming (OOP) and backend development."
  },
  {
    skill: "SQL",
    description: "Database management, querying, and data manipulation."
  },
  {
    skill: "React",
    description: "Building dynamic user interfaces and custom web components."
  },
  {
    skill: "Git/GitHub",
    description: "Version control, branching strategies, and collaboration in Agile environments."
  },
  {
    skill: "Firebase",
    description: "Backend-as-a-Service for real-time databases and user management."
  },
  {
    skill: "Agile/SDLC",
    description: "Full execution of Software Development Life Cycle, including sprint planning, backlog refinement, and CI/CD."
  },
  {
    skill: "Unity",
    description: "Experience with game development engines and interactive environments."
  },
  {
    skill: "Technical Writing",
    description: "Creating detailed technical documentation, architectural guides, and user manuals."
  }
];

const SkillModal = ({ skill, description, onClose }) => {
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    position: 'relative',
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem'
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div id="modal-overlay" style={modalOverlayStyle} onClick={handleOverlayClick}>
      <div style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 style={{ marginTop: 0, color: '#333' }}>{skill}</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>{description}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsContainerStyle = {
    margin: '20px auto',
    maxWidth: '1024px',
    width: '80%',
    textAlign: 'center', // Centers the pills
  };

  const skillCardStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    borderRadius: '999px',
    background: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    fontSize: '0.95rem',
    fontWeight: '500',
    color: '#333'
  };

  const handleSkillClick = (skillItem) => {
    setSelectedSkill(skillItem);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div style={skillsContainerStyle}>
      {skillsData.map(skillItem => (
        <div 
          key={skillItem.skill} 
          style={skillCardStyle} 
          onClick={() => handleSkillClick(skillItem)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
        >
          {skillItem.skill}
        </div>
      ))}
      {selectedSkill && (
        <SkillModal
          skill={selectedSkill.skill}
          description={selectedSkill.description}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Skills;