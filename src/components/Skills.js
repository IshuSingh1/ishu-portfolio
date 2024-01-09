import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

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
    // Other skills data here...
  ];

const SkillModal = ({ skill, description, onClose }) => {
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