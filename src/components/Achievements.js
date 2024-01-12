import React from 'react';

const achievementsData = [
  {
    title: "ServiceNow Certified System Administrator",
    detail: "Achieved CSA certification, demonstrating expertise in managing, configuring, and optimizing the ServiceNow platform."
  },
  {
    title: "Client Accolade for ServiceNow Solutions",
    detail: "Recognized for exceptional commitment and delivery of high-quality ServiceNow solutions, enhancing client business processes and user experience."
  },
  {
    title: "Publication on Substance Use Disorder Communication",
    detail: "Co-authored a research paper analyzing substance use disorder communication on Twitter during the COVID-19 pandemic. Presented at Big Data Health Science 2022 Annual Conference."
  },
  {
    title: "Publication on Educational Rubik's Cube Environment",
    detail: "Contributed to a publication on ALLURE, a multi-modal guided environment for teaching Rubik’s Cube problem-solving to children. Featured in the Proceedings of AAAI 2022."
  },
  {
    title: "Academic Scholarships and Honors",
    detail: "Recipient of the McNair Junior Fellows Scholarship and consistent presence on the Dean's List, reflecting academic excellence and dedication."
  }
];

const sectionContainerStyle = {
  width: '80%',
  maxWidth: '1024px',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const achievementsListStyle = {
  listStyle: 'none',
  padding: 0,
};

const achievementItemStyle = {
  background: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '15px',
  marginBottom: '15px',
  width: '100%',
  boxSizing: 'border-box',
};

const Achievements = () => {
  return (
    <div style={sectionContainerStyle}>
      <ul style={achievementsListStyle}>
        {achievementsData.map((achievement, index) => (
          <li key={index} style={achievementItemStyle}>
            <strong>{achievement.title}</strong> - {achievement.detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;