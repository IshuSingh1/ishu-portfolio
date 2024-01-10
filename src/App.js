import React from 'react';
import Intro from './components/Intro';
import SocialButtons from './components/SocialButtons';
import WorkExperience from './components/WorkExperience';
import EducationHistory from './components/EducationHistory';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Title from './components/Title';
import './App.css';


function App() {
  return (
    <div className="App">
      <SocialButtons />
      <div className="gradient-background" />
      <Intro />
      <div className="scrollable-content">
        <Title text="Work Experience" />
        <WorkExperience />
        <Title text="Education History" />
        <EducationHistory />
        <Title text="Skills" />
        <Skills />
        <Title text="Achievements" />
        <Achievements />
        <Footer />
      </div>
    </div>
  );
}

export default App;