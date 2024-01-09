import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the 'X' icon

const skillsData = [
  {
    skill: "React",
    description: "Used React to build SPA with state management via hooks and context API."
  },
  {
    skill: "Javascript",
    description: "abcahida iwhadiaw wialhdwa"
  },
  // ... additional skills
];

const Modal = ({ description, onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="modal-card">
          <button className="modal-close-button" onClick={onClose}>
            <FaTimes size={20} />
          </button>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
  
    const handleSkillClick = skill => {
      setSelectedSkill(skill);
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
          <Modal description={selectedSkill.description} onClose={handleCloseModal} />
        )}
      </div>
    );
  };
  
  export default Skills;
