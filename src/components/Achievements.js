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

const Achievements = () => {
  return (
    <div className="section-container">
      <ul className="achievements-list">
        {achievementsData.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <strong>{achievement.title}</strong> - {achievement.detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;