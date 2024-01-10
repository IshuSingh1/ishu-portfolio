import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const skillsData = [
  {
    skill: "React",
    description: "Developed dynamic user interfaces for web applications using React's component-based architecture, enhancing user experience and interactivity."
  },
  {
    skill: "Python",
    description: "Utilized Python for automation, data extraction, analysis, and visualization, leveraging libraries like Pandas and Matplotlib to process and interpret complex datasets."
  },
  {
    skill: "JavaScript",
    description: "Experienced with JavaScript to create interactive web features and client-side logic for various projects, including a web-based Rubik's cube emulator."
  },
  {
    skill: "Java",
    description: "Implemented a console-based movie booking system using Java, demonstrating strong understanding of object-oriented programming and backend development."
  },
  {
    skill: "SQL",
    description: "Managed and manipulated data in MySQL databases, ensuring efficient data storage and retrieval for data analysis tasks and application backends."
  },
  {
    skill: "Data Analysis",
    description: "Conducted comprehensive data analysis, transforming raw data into actionable insights, particularly in research and social media contexts."
  },
  {
    skill: "Technical Writing",
    description: "Prepared detailed technical documentation to facilitate knowledge transfer and support ongoing development processes."
  },
  {
    skill: "ServiceNow Development",
    description: "Developed and maintained client applications as a ServiceNow Developer, focusing on creating customized solutions and enhancing user experience."
  },
  {
    skill: "API Integration",
    description: "Leveraged official APIs for platforms like Reddit and Twitter to build chatbots and extract data, showcasing proficiency in integrating third-party services."
  },
  {
    skill: "Kotlin",
    description: "Utilized Kotlin to contribute to the development of an Android art application, showcasing skills in modern Android development."
  },
  {
    skill: "Unity",
    description: "Collaborated on a 2.5D Unity game project, demonstrating abilities in game design and teamwork in a creative environment."
  },
  {
    skill: "Git/GitHub",
    description: "Proficient in using Git and GitHub for version control and collaboration in various software development projects."
  },
  {
    skill: "RASA",
    description: "Integrated RASA chatbot functionalities into applications, enhancing user interaction and automating responses."
  },
  {
    skill: "HTML5/CSS",
    description: "Crafted responsive web layouts and user interfaces with HTML5 and CSS, adhering to modern web standards and design principles."
  },
  {
    skill: "Firebase",
    description: "Experienced in using Firebase for building scalable backend solutions and real-time data handling for web and mobile applications."
  },
  {
    skill: "Object-Oriented Programming (OOP)",
    description: "Applied OOP principles in various projects using languages like Java and Python to create well-structured and maintainable code."
  },
  {
    skill: "Data Visualization",
    description: "Visualized complex data sets using Python libraries, delivering insights through graphs and charts for academic and project-based purposes."
  }
  // Add more skills as needed
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