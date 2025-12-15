import React from 'react';

const achievementsData = [
  {
    title: "ServiceNow Certified System Administrator (CSA)",
    detail: "Official certification demonstrating expertise in managing, configuring, and optimizing the ServiceNow platform."
  },
  {
    title: "Client Accolade for ServiceNow Solutions",
    detail: "Recognized for exceptional commitment and delivery of high-quality ServiceNow solutions, enhancing client business processes and user experience."
  },
  {
    title: "Publication on Substance Use Disorder",
    detail: "Co-authored a research paper analyzing substance use disorder communication on Twitter. Presented at Big Data Health Science 2022 Annual Conference."
  },
  {
    title: "Publication on Educational Rubik's Cube",
    detail: "Contributed to a publication on ALLURE, a multi-modal guided environment for teaching Rubik’s Cube problem-solving. Featured in Proceedings of AAAI 2022."
  },
  {
    title: "McNair Junior Fellows Scholarship",
    detail: "Recipient of the prestigious McNair Junior Fellows Scholarship and consistent presence on the Dean's List reflecting academic excellence."
  }
];

const Achievements = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
      {achievementsData.map((item, index) => (
        // Removed inline padding so it uses the class default (2.5rem)
        <div key={index} className="glass-card">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--accent-color)' }}>
            {item.title}
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5' }}>
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;