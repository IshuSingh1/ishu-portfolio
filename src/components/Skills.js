import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the 'X' icon

const skillsData = [
    {
      skill: "React",
      description: "Built single-page applications (SPAs) with dynamic user interfaces using React's component-based architecture."
    },
    {
      skill: "JavaScript",
      description: "Developed interactive web features and complex functions with ES6+ syntax and asynchronous programming."
    },
    {
      skill: "Node.js",
      description: "Created RESTful APIs and server-side logic using Node.js and Express framework."
    },
    {
      skill: "Python",
      description: "Automated tasks and performed data analysis using Python's extensive libraries and frameworks."
    },
    {
      skill: "Django",
      description: "Developed robust backend systems with Django's ORM and class-based views for rapid development."
    },
    {
      skill: "SQL",
      description: "Managed and queried relational databases using SQL with an emphasis on performance and security."
    },
    {
      skill: "Git",
      description: "Version-controlled projects and collaborated with teams using Git branches, merges, and conflicts resolution."
    },
    {
      skill: "Docker",
      description: "Containerized applications for consistent development and deployment environments using Docker."
    },
    {
      skill: "AWS",
      description: "Deployed and managed cloud infrastructure on AWS with services like EC2, S3, and RDS."
    },
    {
      skill: "HTML5",
      description: "Structured and presented content on the web using semantic HTML5 elements and best practices."
    },
    {
      skill: "CSS3",
      description: "Styled web applications responsively with CSS3, Flexbox, and Grid for cross-browser compatibility."
    },
    {
      skill: "Bootstrap",
      description: "Implemented responsive design quickly with Bootstrap's grid system and pre-built components."
    },
    {
      skill: "Redux",
      description: "Managed global state across large-scale React applications using Redux for predictable state management."
    },
    {
      skill: "TypeScript",
      description: "Improved JavaScript code reliability and maintainability with TypeScript's static typing."
    },
    {
      skill: "GraphQL",
      description: "Streamlined data retrieval for client applications with efficient and structured queries using GraphQL."
    }
  ];
  

// Modal component for showing skill details
const SkillModal = ({ skill, description, onClose }) => {
  // Close modal when clicking outside the content area
  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div id="modal-overlay" className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes className="close-icon" />
        </button>
        <h2>{skill}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skillItem) => {
    setSelectedSkill(skillItem);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="skills-container">
      {skillsData.map(skillItem => (
        <div key={skillItem.skill} className="skill-card" onClick={() => handleSkillClick(skillItem)}>
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
