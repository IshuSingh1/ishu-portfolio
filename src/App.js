import React from 'react';
import Intro from './components/Intro';
import SocialButtons from './components/SocialButtons';
import WorkExperience from './components/WorkExperience';
import EducationHistory from './components/EducationHistory';
import Title from './components/Title';
import './App.css';

// The main App component where other components are brought together
function App() {
  return (
    <div className="App">
      {/* Fixed social buttons at the top */}
      <SocialButtons />

      {/* A fixed gradient background that covers the entire screen */}
      <div className="gradient-background" />

      {/* The introduction section which is also centered on the page */}
      <Intro />

      {/* Scrollable content that contains other main sections of the page */}
      <div className="scrollable-content">
        {/* Section title for work experience */}
        <Title text="Work Experience" />
        {/* The work experience section */}
        <WorkExperience />

        {/* Section title for education history */}
        <Title text="Education History" />
        {/* The education history section */}
        <EducationHistory />
      </div>
    </div>
  );
}

export default App;
