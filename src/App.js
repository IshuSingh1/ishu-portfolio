// App.js
import React from 'react';
import Intro from './components/Intro';
import SocialButtons from './components/SocialButtons';
import WorkExperience from './components/WorkExperience';
import EducationHistory from './components/EducationHistory'; // Make sure you have this component
import './App.css';

function App() {
  return (
    <div className="App">
      <SocialButtons />
      <div className="gradient-background" />
      <Intro />
      <div className="scrollable-content">
        <WorkExperience />
        <EducationHistory />
      </div>
    </div>
  );
}

export default App;
